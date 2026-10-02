console.log("BUTTON:", document.getElementById("hint-button"));

// ----- STATE -----
let openLeft = null;
let openRight = null;
let selected = [];
let unlockedElements = new Set(["Oerknal", "Kou", "Warmte"]);
let introStep = 0;
let lastExplanation = null;
let lastExplanationIsThresholdElement = false;
let hintDeck = [];
let hintVisible = false;
let hintTimer = null;

// 🔹 Tijdlijn
let currentTime = 13_800_000_000; // start bij oerknal
const maxTime = 13_800_000_000;   // leeftijd universum
let timelineStart = maxTime;
const timelineFill = document.getElementById("timeline-fill");
const timelineLabel = document.getElementById("timeline-label");

// ----- DOM -----
const closedContainer = document.getElementById("closed-container");
const leftSide = document.getElementById("left-side");
const rightSide = document.getElementById("right-side");
const hintButton = document.getElementById("hint-button");
const hintBubble = document.getElementById("hint-bubble");

const norm = s => String(s).trim().toLowerCase();
const pairs = input => (Array.isArray(input[0]) ? input : [input]);
const inMap = n => mappen.some(m => m.elementen.some(e => norm(e.naam) === norm(n)));
const known = n =>
  unlockedElements.has(norm(n)) ||
  mappen.some(m => m.elementen.some(e => norm(e.naam) === norm(n)));

hintButton.onclick = showHint;

// ----- INIT -----
renderClosed();
requestAnimationFrame(() => {
    updateClosedContainer();
    showIntroHint();
});

updateTimelineLabel();
preloadAllIcons();

// ----- PRELOAD -----
function preloadAllIcons() {
  const urls = [...new Set(
    mappen.flatMap(map => [
      map.icoon,
      ...map.elementen.map(el => el.icoon)
    ])
  )];
  urls.forEach(url => {
    const img = new Image();
    img.src = url;
  });
  console.log("Alle iconen worden vooraf geladen!");
}

function attachTooltip(el, text) {
  let tooltip;

  el.addEventListener("mouseenter", () => {
    document.querySelectorAll(".tooltip-floating").forEach(t => t.remove());

    if (el.offsetParent === null) return;

    tooltip = document.createElement("div");
    tooltip.className = "tooltip-floating visible";
    tooltip.textContent = text;
    document.body.appendChild(tooltip);
    
    const rect = el.getBoundingClientRect();
    tooltip.style.left = rect.left + rect.width / 2 + "px";
    tooltip.style.top = rect.bottom + 6 + "px";
    tooltip.style.transform = "translateX(-50%)";
  });

  el.addEventListener("mouseleave", () => {
    if (tooltip) tooltip.remove();
  });
}

function makeCurvedLabel(text, iconSize) {
  // ---- Twee onafhankelijke stuurknoppen ----
  const air = 2;     // mm-lucht tussen lettertop en iconcirkel
  const bowl = 5;   // komdiepte: px dat de kom onder de icon-onderkant doorloopt (was ~9)

  // ---- Canvas: bedekt het hele icoon + kom (tekst mag om het icoon heen krullen) ----
  const m = 14;                        // marge rondom in de SVG
  const w = iconSize + 2 * m;
  const h = m + iconSize + bowl + 4;
  const cx = w / 2;
  const cy = m + iconSize / 2;         // icon-middelpunt

  // ---- TEKST: volledige cirkel rondom het icoon, gecentreerd onderaan ----
  // Baseline-cirkel: lettertop raakt de iconrand op 'air' px afstand
  const rBase = iconSize / 2 + air + 2;
  // ¾-boog: van links-boven, via de onderkant, naar rechts-boven (symmetrisch om onder)
  const pt = (deg) => {
    const t = deg * Math.PI / 180;
    return `${(cx + rBase * Math.cos(t)).toFixed(2)} ${(cy + rBase * Math.sin(t)).toFixed(2)}`;
  };
  const dText = `M ${pt(225)} A ${rBase} ${rBase} 0 0 0 ${pt(90)} A ${rBase} ${rBase} 0 0 0 ${pt(-45)}`;
  // startOffset 50% = het midden van de boog = exact onderaan het icoon

  // ---- KOM: ondiepe elliptische rand om de onderkant van het icoon ----
  const kEnd = 6;                              // eindpunten net onder de icon-midlijn
  const rKomX = iconSize / 2 + 4;              // breedte: krult om de zijkanten van het icoon
  const rKomY = iconSize / 2 + bowl - kEnd;    // bodem = icon-onderkant + bowl
  const yEnd = cy + kEnd;
  const d = `M ${cx - rKomX} ${yEnd} A ${rKomX} ${rKomY} 0 0 0 ${cx + rKomX} ${yEnd}`;

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("class", "curved-label");
  svg.setAttribute("viewBox", `0 0 ${w} ${h}`);
  svg.style.cssText =
    `position:absolute; left:50%; top:${-m}px; transform:translateX(-50%); ` +
    `width:${w}px; height:${h}px; pointer-events:none; z-index:2000;`;

  // Verticale fade op de kom
  const grad = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
  grad.setAttribute("id", "cl-grad-" + Math.random().toString(36).slice(2, 8));
  grad.setAttribute("x1", "0");  grad.setAttribute("y1", yEnd - 2);
  grad.setAttribute("x2", "0");  grad.setAttribute("y2", cy + iconSize / 2 + bowl);
  grad.setAttribute("gradientUnits", "userSpaceOnUse");
  const stop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
  stop1.setAttribute("offset", "0");
  stop1.setAttribute("stop-color", "rgba(255, 255, 255, 0)");
  grad.appendChild(stop1);
  const stop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
  stop2.setAttribute("offset", "0.45");
  stop2.setAttribute("stop-color", "rgba(255, 255, 255, 0.85)");
  grad.appendChild(stop2);
  svg.appendChild(grad);

  // Horizontale fade (masker) op de kom
  const fadeLR = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
  fadeLR.setAttribute("id", "cl-fade-" + Math.random().toString(36).slice(2, 8));
  fadeLR.setAttribute("x1", "0%"); fadeLR.setAttribute("y1", "0%");
  fadeLR.setAttribute("x2", "100%"); fadeLR.setAttribute("y2", "0%");
  [[0, 0], [0.18, 1], [0.82, 1], [1, 0]].forEach(([off, op]) => {
    const s = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    s.setAttribute("offset", off);
    s.setAttribute("stop-color", "white");
    s.setAttribute("stop-opacity", op);
    fadeLR.appendChild(s);
  });
  svg.appendChild(fadeLR);
  const fadeMask = document.createElementNS("http://www.w3.org/2000/svg", "mask");
  fadeMask.setAttribute("id", "cl-mask-" + Math.random().toString(36).slice(2, 8));
  const maskRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  maskRect.setAttribute("x", "0"); maskRect.setAttribute("y", "0");
  maskRect.setAttribute("width", "100%"); maskRect.setAttribute("height", "100%");
  maskRect.setAttribute("fill", `url(#${fadeLR.id})`);
  fadeMask.appendChild(maskRect);
  svg.appendChild(fadeMask);

  // De kom
  const bg = document.createElementNS("http://www.w3.org/2000/svg", "path");
  bg.setAttribute("d", `${d} Z`);
  bg.setAttribute("fill", `url(#${grad.id})`);
  bg.setAttribute("mask", `url(#${fadeMask.id})`);
  svg.appendChild(bg);

  // Het tekstpad + de tekst
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", dText);
  path.setAttribute("id", "cl-" + Math.random().toString(36).slice(2, 8));
  path.setAttribute("fill", "none");
  svg.appendChild(path);
  const txt = document.createElementNS("http://www.w3.org/2000/svg", "text");
  txt.setAttribute("fill", "#555");
  txt.setAttribute("font-size", "8");
  txt.setAttribute("text-anchor", "middle");
  const tp = document.createElementNS("http://www.w3.org/2000/svg", "textPath");
  tp.setAttribute("href", "#" + path.id);
  tp.setAttribute("startOffset", "50%");
  tp.textContent = text.toUpperCase();
  txt.appendChild(tp);
  svg.appendChild(txt);

  return svg;
}

// ----- INTRO HINTS -----
function showIntroHint() {
  if (introStep > 2) return;

  // verwijder oude hints eerst
  document.querySelectorAll(".intro-wrapper").forEach(el => el.remove());

  const maps = Array.from(document.querySelectorAll(".icon.map"));
  const elements = Array.from(document.querySelectorAll(".icon.element"));

  if ((introStep === 0 || introStep === 1) && maps.length === 0) {
    requestAnimationFrame(showIntroHint);
    return;
  }

  let target = null;
  let hintText = "";
  let offsetY = -80;
  let clickableEls = [];

  if (introStep === 0) {
    maps.forEach(map => map.dataset.name = map.alt || map.title || "");
    clickableEls = maps.filter(map => map.dataset.name === "Heelal" || map.dataset.name === "Krachten");
    target = clickableEls[0] || maps[0];
    hintText = "open een groep";
    offsetY = -140;
  } else if (introStep === 1) {
    target = maps[1] || maps[0];
    hintText = "open nog een groep";
    offsetY = -120;
    clickableEls = [target];
    } else if (introStep === 2) {
      target = null;
      hintText = "klik op oerknal en klik op kou<br>om een combinatie te maken";
      offsetY = -50;
      clickableEls = elements;
    }

  const wrapper = document.createElement("div");
  wrapper.className = "intro-wrapper fade-in";
  wrapper.innerHTML = `<div class="intro-text">${hintText}</div>`;
  wrapper.style.zIndex = 1500;

  if (target) {
    const rect = target.getBoundingClientRect();
    wrapper.style.left = rect.left + rect.width / 2 + "px";
    wrapper.style.top = rect.top + offsetY + "px";
  } else {
    wrapper.style.left = window.innerWidth / 2 + "px";
    wrapper.style.top = window.innerHeight / 2 + offsetY + "px";
    wrapper.style.textAlign = "center";
  }

  document.body.appendChild(wrapper);
  if (introStep === 2) {
    const checkResultOverlay = setInterval(() => {
      if (document.getElementById("result-overlay")) {
        wrapper.remove();
        introStep++;
        clearInterval(checkResultOverlay);
      }
    }, 50);
  }

  // functie om wrapper te verwijderen + volgende hint
  function nextStep() {
    wrapper.classList.add("fade-out");
    setTimeout(() => wrapper.remove(), 400);
    introStep++;
    showIntroHint();
  }

  // ✅ VERBETERING: luister op hele document voor klik op map-element
  document.addEventListener("click", function docClickListener(e) {
    if (e.target.classList.contains("icon") && e.target.classList.contains("map")) {
      nextStep();
      // event listener opruimen na eerste klik
      document.removeEventListener("click", docClickListener);
    }
  });
}

// ----- SELECT ELEMENT -----
function toggleSelect(el, img, side, mapNaam) {
  const index = selected.findIndex(e => e.naam === el.naam && e.dom === img);

  if (index > -1) {
    selected.splice(index, 1);
    img.classList.remove("selected");
  } else {
    if (selected.length === 2) return;

    selected.push({
      ...el,
      dom: img,
      side: side,
      mapNaam: mapNaam  // nu correct
    });

    img.classList.add("selected");
  }

  if (selected.length === 2) {
    checkCombination();
  }
}

// ----- CHECK COMBINATIONS -----
function matchElement(rule, el) {
  if (!rule || !el) return false;

  if (typeof rule !== "string") return false;

  // map support
  if (rule.startsWith("map:")) {
    const mapNaam = rule.slice(4);
    return (el.map || el.mapNaam) === mapNaam;
  }

  // normal element match
  return el.naam === rule;
}

function matchPair(set, selected) {
  const [a, b] = selected;

  return (
    matchElement(set[0], a) && matchElement(set[1], b)
  ) || (
    matchElement(set[0], b) && matchElement(set[1], a)
  );
}

function normalizeInput(input) {
  // al correct formaat
  if (Array.isArray(input[0])) return input;

  // single pair → wrap in array
  return [input];
}

function checkCombination() {
  if (selected.length < 2) return;

  const matches = combinaties.filter(c =>
    normalizeInput(c.input).some(set =>
      matchPair(set, selected)
    )
  );
  
  if (matches.length === 0) {
    shakeErrorElements(selected.map(e => e.dom));
    selected.forEach(e => e.dom.classList.remove("selected"));
    selected = [];
    return;
  }

  const firstMatch = matches[0];

  // 🔹 Check threshold-element dependency
  if (firstMatch.uitleg?.thresholdElement) {
    const needed = firstMatch.uitleg.thresholdElement.naam;
    if (!unlockedElements.has(needed)) {
      // toon overlay met titel + tekst van thresholdElement
      showThresholdExplanation(
        firstMatch.uitleg.thresholdElement,
        null, // geen missing circles
        () => {
          selected.forEach(e => e.dom.classList.remove("selected"));
          selected = [];
        }
      );
      return; // stop verder uitvoeren
    }
  }
  
  // 🔹 Check threshold requirements
  if (firstMatch.uitleg?.threshold) {
    const requirements = firstMatch.uitleg.threshold.requirements || [];
    const normalizedUnlocked = [
      ...new Set([
        ...unlockedElements,
        ...mappen.flatMap(m => m.elementen.map(e => e.naam))
      ])
    ].map(e => e.trim().toLowerCase());
      
    const missing = requirements.filter(r =>
      !normalizedUnlocked.includes(r.trim().toLowerCase())
    );
    
    if (missing.length > 0) {
      showThresholdExplanation(firstMatch.uitleg.threshold, missing, () => {
        selected.forEach(e => e.dom.classList.remove("selected"));
        selected = [];
      });
      return;
    }
  }
  
  // 🔹 Als alle requirements gehaald zijn of geen threshold → toon normale uitleg / nieuwe elementen
  const finalUitleg = firstMatch.uitleg?.normal || null;

  // 🔹 Nieuwe elementen maken
  const newElements = [];

  matches.forEach(match => {
    match.output.forEach(newEl => {
      let map = mappen.find(m => m.naam === newEl.map);
      if (!map) {
        map = {
          naam: newEl.map,
          icoon: groepsIconen[newEl.map] || "icons/default.png",
          elementen: []
        };
        mappen.push(map);
      }
      if (!map.elementen.find(e => e.naam === newEl.naam)) {
        map.elementen.push(newEl);
      }
      newElements.push(newEl);
    });
  });

  const versText = firstMatch.vers || null;

  // SPECIAL THRESHOLD ELEMENT?
  const hasThreshold = !!firstMatch.uitleg?.threshold;
  const hasNormal = !!firstMatch.uitleg?.normal;
  const shouldShowInfo = !(hasThreshold && hasNormal);  
  
  renderNewElements(
    newElements,
    versText,
    firstMatch
  );
  
  lastExplanation = finalUitleg || null;
  newElements.forEach(el => unlockedElements.add(el.naam));

  refreshHintDeck();

  // Update timeline op basis van combinatie-tijd
  const eventTime = firstMatch.tijd;
  
  if (eventTime !== undefined && eventTime < currentTime) {
    if (eventTime <= 12_000 && timelineStart !== 12_000) {
      timelineFill.style.width = "0%";
      timelineStart = 12_000;
}

animateTimeline(eventTime);
  }
  
  // reset selectie
  selected.forEach(e => e.dom.classList.remove("selected"));
  selected = [];
}

// ----- BOX VOOR THRESHOLD -----
function showThresholdExplanation(threshold, missing, callback) {
  const oldOverlay = document.getElementById("threshold-overlay");
  if (oldOverlay) oldOverlay.remove();

  const overlay = document.createElement("div");
  overlay.id = "threshold-overlay";
  overlay.style.display = "flex";
  overlay.style.justifyContent = "center";
  overlay.style.alignItems = "center";
  overlay.style.position = "fixed";
  overlay.style.top = 0;
  overlay.style.left = 0;
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.background = "rgba(0,0,0,0.7)";
  overlay.style.zIndex = 2000;

  const box = document.createElement("div");
  box.className = "explanation-box";

  const title = document.createElement("div");
  title.className = "explanation-title";
  title.innerHTML = threshold.titel;

  const text = document.createElement("div");
  text.className = "explanation-text";
  text.innerHTML = threshold.tekst;

  if (missing && missing.length > 0) {
    const grid = document.createElement("div");
    grid.className = "threshold-grid";
    missing.forEach(req => {
      const circle = document.createElement("div");
      circle.className = "threshold-circle";
      circle.textContent = req;
      grid.appendChild(circle);
    });
    text.appendChild(grid);
  }

  const button = document.createElement("button");
  button.className = "create-button";
  button.textContent = "Ga verder";
  button.onclick = () => {
    overlay.remove();
    if (callback) callback(); // voer callback uit
  };

  box.appendChild(title);
  box.appendChild(text);
  box.appendChild(button);

  overlay.appendChild(box);
  document.body.appendChild(overlay);
}

// ----- VISUEEL SCHERM VOOR NIEUWE ELEMENTEN -----
function renderNewElements(elements, vers = null, thresholdOverlay = null) {
  // Verwijder bestaande overlay
  const oldOverlay = document.getElementById("result-overlay");
  if (oldOverlay) oldOverlay.remove();
  const hasThreshold = !!thresholdOverlay?.uitleg?.threshold;
  const hasNormal = !!thresholdOverlay?.uitleg?.normal;
  const overlay = document.createElement("div");
  overlay.id = "result-overlay";

  // Grid voor de nieuwe elementen
  const grid = document.createElement("div");
  grid.className = "result-grid";
  const isMobielResult = window.innerWidth <= 900 && window.innerHeight > window.innerWidth;
  let colsDesktop;
  switch(elements.length) {
    case 1: colsDesktop = 1; break;
    case 2: colsDesktop = 2; break;
    case 3: colsDesktop = 3; break;
    case 4: colsDesktop = 4; break;
    case 5: colsDesktop = 3; break;
    case 6: colsDesktop = 3; break;
    case 7: colsDesktop = 4; break;
    case 8: colsDesktop = 4; break;
    case 9: colsDesktop = 5; break;
    case 10: colsDesktop = 5; break;
    default: colsDesktop = Math.ceil(Math.sqrt(elements.length));
  }
  let colsMobiel;
  switch(elements.length) {
    case 1: colsMobiel = 1; break;
    case 2: colsMobiel = 2; break;
    case 3: colsMobiel = 3; break;
    case 4: colsMobiel = 2; break;
    case 5: colsMobiel = 3; break;
    case 6: colsMobiel = 3; break;
    case 7: colsMobiel = 4; break;
    case 8: colsMobiel = 4; break;
    case 9: colsMobiel = 4; break;
    case 10: colsMobiel = 4; break;
    default: colsMobiel = 3;
  }
  const cols = isMobielResult ? colsMobiel : colsDesktop;
  const gapPx = elements.length > 8 ? 20 : 30;
  grid.style.gap = gapPx + "px";
  let mobielBox = 110;
  if (isMobielResult) {
    const beschikbaar = window.innerWidth - 16;
    mobielBox = Math.min(220, Math.floor((beschikbaar - (cols - 1) * 12) / cols));
    grid.style.maxWidth = (cols * mobielBox + (cols - 1) * 12) + "px";
  } else {
    const desktopBox = 250;
    grid.style.width = (cols * desktopBox + (cols - 1) * gapPx) + "px";
    grid.style.maxWidth = (cols * desktopBox + (cols - 1) * gapPx) + "px";
  }

  elements.forEach(el => {
    const box = document.createElement("div");
    box.className = "result-box fade-in";
    if (isMobielResult) box.style.width = mobielBox + "px";

    const img = document.createElement("img");
    img.src = el.icoon;
    img.className = "result-image";

    const title = document.createElement("div");
    title.className = "result-title";
    title.innerHTML = el.naam;
    title.lang = "nl";

    const quote = document.createElement("div");
    quote.className = "result-quote";
    quote.innerHTML = el.quote || "";
    quote.lang = "en";
    if (elements.length === 1) {
      quote.classList.add("single");
      title.classList.add("single");
    } else if (elements.length === 2) {
      quote.classList.add("pair");
      title.classList.add("pair");
    } 
    
    // 🔹 kleine random X + Y beweging (millimeters/subtiel)
    const moveX = (Math.random() * 20 - 10).toFixed(1) + "px";
    const moveY = (Math.random() * 10 - 5).toFixed(1) + "px";
    
    // 🔹 random duur zodat alles onafhankelijk beweegt
    const duration = (6 + Math.random() * 6).toFixed(2) + "s"; // 6–12 sec
    
    quote.style.setProperty("--move-x", moveX);
    quote.style.setProperty("--move-y", moveY);
    quote.style.setProperty("--dur", duration);

    box.appendChild(img);
    box.appendChild(title);
    box.appendChild(quote);
    grid.appendChild(box);
  });

  overlay.appendChild(grid);

  if (vers) {
    const versDiv = document.createElement("div");
    versDiv.className = "vers-text";
    versDiv.innerHTML = vers;
    overlay.appendChild(versDiv);
  }

  // ⚡ Godlike flash
  const flash = document.createElement("div");
  flash.className = "godlike-flash";
  overlay.appendChild(flash);

  // ✅ CASE 1: alleen normal → info-button tonen
  if (!hasThreshold && hasNormal) {
    const uitleg = thresholdOverlay.uitleg.normal;
  
    const infoBtn = document.createElement("div");
    infoBtn.className = "info-button";
    infoBtn.textContent = "i";
  
    const popup = document.createElement("div");
    popup.className = "info-popup";

    // openen/sluiten met de info-button
    infoBtn.onclick = (e) => {
      e.stopPropagation();
      popup.classList.toggle("open");
    };
  
    const box = document.createElement("div");
    box.className = "info-popup-box";
  
    const title = document.createElement("div");
    title.className = "info-popup-title";
    title.innerHTML = uitleg.titel;
  
    const text = document.createElement("div");
    text.className = "info-popup-text";
    text.innerHTML = uitleg.tekst;
  
    box.appendChild(title);
    box.appendChild(text);
    popup.appendChild(box);
  
    overlay.appendChild(infoBtn);
    overlay.appendChild(popup);
  }

  document.body.appendChild(overlay);
  requestAnimationFrame(() => overlay.classList.add("visible"));

  flash.addEventListener("animationend", () => flash.remove());

  overlay.addEventListener("click", (e) => {
    // ❌ klik op info-button of popup → NIET sluiten
    if (
      e.target.closest(".info-button") ||
      e.target.closest(".info-popup") ||
      e.target.closest(".info-popup-box")
    ) {
      return;
    }
  
    overlay.remove();
  
    openLeft = null;
    openRight = null;
    leftSide.innerHTML = "";
    rightSide.innerHTML = "";
    renderClosed();
    updateClosedContainer();
  
    requestAnimationFrame(() => {
      // ✅ CASE 2: threshold + normal
      if (hasThreshold && hasNormal) {
        const uitleg = thresholdOverlay.uitleg.normal;
  
        if (uitleg) {
          showInfoOverlay(
            uitleg.titel,
            uitleg.tekst,
            uitleg.achtergrond
          );
        }
      }
    });
  });
}

// ----- ERROR SHAKE FUNCTION -----
function shakeErrorElements(elements) {
  elements.forEach(el => {
    if(el) {
      el.classList.add("error");
      setTimeout(() => el.classList.remove("error"), 600); // na animatie verwijderen
    }
  });
}

// Hulpfunctie: info-overlay voor threshold-elementen
function showInfoOverlay(title, text, backgroundImage = null) {
  const old = document.getElementById("info-overlay");
  if (old) old.remove();

  const overlay = document.createElement("div");
  overlay.id = "info-overlay";
  overlay.className = "info-overlay fade-in";

  if (backgroundImage) {
    overlay.style.setProperty("--bg-image", `url("${backgroundImage}")`);
  }

  const inner = document.createElement("div");
  inner.className = "info-inner";

  const titleEl = document.createElement("div");
  titleEl.className = "info-title";
  titleEl.textContent = title;

  const textEl = document.createElement("div");
  textEl.className = "info-text";
  textEl.innerHTML = text;

  inner.appendChild(titleEl);
  inner.appendChild(textEl);
  overlay.appendChild(inner);
  document.body.appendChild(overlay);

  overlay.onclick = () => {
    overlay.classList.add("fade-out");
    setTimeout(() => overlay.remove(), 300);
  };
}

// ----- CHECK THRESHOLD -----
function addUnlockedElements(elements) {
  elements.forEach(el => unlockedElements.add(el.naam));
}

// ----- TIMELINE  -----
function animateTimeline(newTime) {
  const oldTime = currentTime;
  const duration = 500;
  const start = performance.now();

  function step(timestamp) {
    const progress = Math.min((timestamp - start) / duration, 1);
    currentTime = oldTime + (newTime - oldTime) * progress;

    updateTimelineLabel();

    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

// ----- TIMELINE LABEL -----
function updateTimelineLabel() {
  if (!timelineLabel || !timelineFill) return;

  let labelText;

  if (currentTime >= 1_000_000_000) {
    labelText = (currentTime / 1_000_000_000)
      .toLocaleString("nl-NL", { maximumFractionDigits: 3 }) 
      + " miljard jaar geleden";
  } else if (currentTime >= 1_000_000) {
    labelText = Math.round(currentTime / 1_000_000) + " miljoen jaar geleden";
  } else if (currentTime >= 12_000) {
    labelText = Math.round(currentTime / 1_000) + " duizend jaar geleden";
  } else if (currentTime >= 1) {
    labelText = Math.round(currentTime / 1) + " jaar geleden";
  }

  timelineLabel.textContent = labelText;

  const percentage = (timelineStart - currentTime) / timelineStart;
  
  // Breedte timeline-fill
  timelineFill.style.width = (percentage * 100) + "%";

  // Label positioneren **exact boven de bol**
  timelineLabel.style.left = `${percentage * 100}%`;
  // transform: translateX(-50%) in CSS doet de centering
  
  // Alleen op mobiel clampen; laptop houdt de exacte percentage-positionering
  if (window.matchMedia("(max-width: 900px) and (orientation: portrait)").matches) {
    const labelWidth = timelineLabel.offsetWidth;
    const barWidth = timeline.getBoundingClientRect().width;

    let leftPx = percentage * barWidth -10;
    const minPx = labelWidth / 2 +10;
    const maxPx = barWidth +10 - labelWidth / 2;
    if (leftPx < minPx) leftPx = minPx;
    if (leftPx > maxPx) leftPx = maxPx;
    timelineLabel.style.left = `${leftPx}px`;
  } else {
    timelineLabel.style.left = `${percentage * 100}%`;
  }
}

// ----- RENDER CLOSED MAPS -----
function renderClosed() {
  closedContainer.innerHTML = "";
  closedContainer.classList.remove("hidden", "left", "right");
  closedContainer.style.transition = "opacity 0.3s ease";
  closedContainer.style.opacity = 0;
  
  const grid = document.createElement("div");
  grid.className = "grid-closed";

  mappen.forEach(map => {
    const container = document.createElement("div");
    container.className = "icon-container";
    container.dataset.naam = map.naam;

    const img = document.createElement("img");
    img.src = map.icoon;
    img.className = "icon map";
    img.onclick = () => openMap(map, img);

    container.appendChild(img);
    
    // Permanente tooltip op mobiel
    if (window.innerWidth <= 900 && window.matchMedia("(orientation: portrait)").matches) {
        container.appendChild(makeCurvedLabel(map.naam, 60));
    } else {
        attachTooltip(img, map.naam);
    }
    
    grid.appendChild(container);
  });

  closedContainer.appendChild(grid);
  
  requestAnimationFrame(() => {
    updateClosedContainer();
    const mapIcons = document.querySelectorAll(".icon.map");
    const gridClosed = document.querySelector(".grid-closed");
    const closedContainerCenter = document.querySelector("#closed-container.center");
    const isMobileClosed = window.innerWidth <= 900 && window.innerHeight > window.innerWidth;
    if (!isMobileClosed) {
      let icoon, perRij;
      if (mappen.length <= 20) { icoon = 130; perRij = 4; }
      else if (mappen.length <= 25) { icoon = 130; perRij = 5; }
      else { icoon = 117; perRij = 6; }
      // hoogte-check: past het verticaal? eerst meer per rij, dan iconen verkleinen
      let rijen = Math.ceil(mappen.length / perRij);
      let benodigdeHoogte = rijen * (icoon + 20) - 20;
      const maxHoogte = window.innerHeight - 160;
      while (benodigdeHoogte > maxHoogte && perRij < 8) {
        perRij++;
        rijen = Math.ceil(mappen.length / perRij);
        benodigdeHoogte = rijen * (icoon + 20) - 20;
      }
      while (benodigdeHoogte > maxHoogte && icoon > 80) {
        icoon -= 10;
        benodigdeHoogte = rijen * (icoon + 20) - 20;
      }
      // breedte-check: hoogstens zoveel per rij als het venster toelaat
      const maxPerRijBreed = Math.floor((window.innerWidth - 40 + 20) / (icoon + 20));
      perRij = Math.min(perRij, maxPerRijBreed);
      rijen = Math.ceil(mappen.length / perRij);

      mapIcons.forEach(icon => {
        icon.style.width = icoon + "px";
        icon.style.height = icoon + "px";
      });
      const breedte = perRij * icoon + (perRij - 1) * 20 + 8;  // +8px veiligheidsmarge
      if (gridClosed) gridClosed.style.maxWidth = breedte + "px";
      if (closedContainerCenter) closedContainerCenter.style.width = breedte + "px";
    }
    closedContainer.style.opacity = 1;
  });
}

function refreshClosedLabels() {
  if (!(window.innerWidth <= 900 && window.matchMedia("(orientation: portrait)").matches)) return;
  const isSide = closedContainer.classList.contains("side");
  const smallCenter = !isSide && mappen.length > 18;   // ← nieuw: verkleinde center-modus
  const size = isSide ? 40 : (smallCenter ? 50 : 60);
  closedContainer.querySelectorAll(".icon-container").forEach(container => {
    const old = container.querySelector(".curved-label");
    if (old) old.remove();
    container.appendChild(makeCurvedLabel(container.dataset.naam, size));
  });
}

function updateClosedContainer() {
  let leftOpen = !!openLeft;
  let rightOpen = !!openRight;
  let halfWidth = window.innerWidth / 2;
  const isMobiel = window.innerWidth <= 900 && window.innerHeight > window.innerWidth;
  const geenMapOpen = !openLeft && !openRight;
  if (isMobiel && geenMapOpen) {
    const mobielMapIcoon = mappen.length > 18 ? 50 : 60;
    closedContainer.style.width = (4 * mobielMapIcoon + 3 * 8) + "px";
    const gridClosed = document.querySelector(".grid-closed");
    if (gridClosed) gridClosed.style.rowGap = mappen.length > 18 ? "8px" : "";
    const boven = 60;    // vrije ruimte begint onder de hint/mute-knoppen
    const onder = 70;    // vrije ruimte eindigt boven de timeline + label
    closedContainer.style.top = ((window.innerHeight - boven - onder) / 2 + boven) + "px";
  } else if (isMobiel) {
    closedContainer.style.width = (3 * 40 + 2 * 8 + 2 * 16) + "px"; 
    const gridClosed = document.querySelector(".grid-closed");
    if (gridClosed) gridClosed.style.rowGap = mappen.length > 18 ? "6px" : "";
    const boven = 60;
    const onder = 70;
    closedContainer.style.top = ((window.innerHeight - boven - onder) / 2 + boven) + "px";
  } else {
    closedContainer.style.top = "";
  }
  if (isMobiel) {
    const side = leftOpen || rightOpen;
    const mapIcoon = side ? 40 : (mappen.length > 18 ? 50 : 60);
    closedContainer.querySelectorAll(".icon.map").forEach(icon => {
      icon.style.width = mapIcoon + "px";
      icon.style.height = mapIcoon + "px";
    });
  }
  
  if (leftOpen && rightOpen) {
    closedContainer.style.opacity = 0;
    closedContainer.style.pointerEvents = "none";
    document.querySelectorAll(".tooltip-floating").forEach(t => t.remove());
    closedContainer.style.left = "50%";
    closedContainer.style.transform = "translate(-50%, -50%)";
    closedContainer.classList.add("center");
    closedContainer.classList.remove("side");
  } else if (leftOpen && !rightOpen) {
    closedContainer.style.opacity = 1;
    closedContainer.style.pointerEvents = "auto";
    closedContainer.style.left = `${halfWidth + halfWidth/2}px`; // midden rechterhelft
    closedContainer.style.transform = "translate(-50%, -50%)";
    closedContainer.classList.add("side");
    closedContainer.classList.remove("center");
  } else if (!leftOpen && rightOpen) {
    closedContainer.style.opacity = 1;
    closedContainer.style.pointerEvents = "auto";
    closedContainer.style.left = `${halfWidth/2}px`; // midden linkerhelft
    closedContainer.style.transform = "translate(-50%, -50%)";
    closedContainer.classList.add("side");
    closedContainer.classList.remove("center");
  } else {
    closedContainer.style.opacity = 1;
    closedContainer.style.pointerEvents = "auto";
    closedContainer.style.left = "50%";
    closedContainer.style.transform = "translate(-50%, -50%)";
    closedContainer.classList.add("center");
    closedContainer.classList.remove("side");
  }
refreshClosedLabels();
}

// ----- OPEN MAP -----
function openMap(map, clickedImg) {
  let side = null;
  let container;

  if (!openLeft) {
    openLeft = map;
    side = "left";
    container = leftSide;
  } else if (!openRight) {
    openRight = map;
    side = "right";
    container = rightSide;
  } else {
    return; // beide open → niks doen
  }
  renderSide(container, map, side);
  updateClosedContainer();
}

// ----- CLOSE MAP -----
function closeMap(side) {
  const container = side === "left" ? leftSide : rightSide;
  const closingMap = side === "left" ? openLeft : openRight; // welke map wordt gesloten

  container.classList.remove("visible");

  setTimeout(() => {
    // deselecteer alle geselecteerde elementen die in deze map zitten
    selected = selected.filter(e => {
      // als dit element bij de map hoort die gesloten wordt **en aan dezelfde kant**
      if (e.mapNaam === closingMap.naam && e.side === side) {
        // stop met trillen
        e.dom.classList.remove("selected");
        return false; // verwijder uit selectie
      }
      return true; // houdt over
    });

    if (side === "left") openLeft = null;
    else openRight = null;

    container.classList.add("hidden");

    updateClosedContainer(); // herbereken positie closed-maps
  }, 300);
}

// ----- RENDER SIDE -----
function renderSide(parentContainer, map, side) {
  parentContainer.innerHTML = "";
  parentContainer.classList.remove("hidden", "visible");

  // --- Title van de open map ---
  const titleContainer = document.createElement("div");
  titleContainer.className = "icon-container";

  const titleImg = document.createElement("img");
  titleImg.src = map.icoon;
  titleImg.className = "icon map-title";
  titleImg.onclick = () => closeMap(side);

  // Tooltip voor de map-title
  if (window.innerWidth <= 900 && window.matchMedia("(orientation: portrait)").matches) {
      titleContainer.appendChild(makeCurvedLabel(map.naam, 60));
  } else {
      attachTooltip(titleImg, map.naam);
  }
  titleContainer.appendChild(titleImg);
  parentContainer.appendChild(titleContainer);

  // --- Grid van elementen ---
  const grid = document.createElement("div");
  grid.className = "grid-elements";

  const totalElements = map.elementen.length;
  const isMobile = window.innerWidth <= 900 && window.innerHeight > window.innerWidth;
  const mobielIcoon = isMobile
    ? (totalElements > 27 ? 42 : (totalElements > 24 ? 48 : 50))
    : 50;

  // Layout instellen
  if (!isMobile) {
    if (totalElements > 25) {
      grid.style.gridTemplateColumns = "repeat(6, 100px)";
      grid.style.columnGap = "30px";
      grid.style.rowGap = "10px";
    } else if (totalElements > 16) {
      grid.style.gridTemplateColumns = "repeat(5, 100px)";
      grid.style.columnGap = "30px";
      grid.style.rowGap = "15px";
    } else {
      grid.style.gridTemplateColumns = "repeat(4, 100px)";
      grid.style.columnGap = "50px";
      grid.style.rowGap = "20px";
    }
  } else {
    grid.style.gridTemplateColumns = `repeat(3, ${mobielIcoon}px)`;
    if (totalElements > 27) {
      grid.style.columnGap = "12px";
      grid.style.rowGap = "0px";
    } else if (totalElements > 24) {
      grid.style.columnGap = "10px";
      grid.style.rowGap = "0px";
    } else {
      grid.style.columnGap = "8px";
      grid.style.rowGap = "2px";
    }
  }

  // Maak de elementen
  map.elementen.forEach(el => {
    const elContainer = document.createElement("div");
    elContainer.className = "icon-container";

    const img = document.createElement("img");
    img.src = el.icoon;
    img.className = "icon element";
    if (!isMobile) {
      img.style.width = totalElements > 16 ? "110px" : "130px";
      img.style.height = totalElements > 16 ? "110px" : "130px";
    }
    if (isMobile) {
      img.style.width = mobielIcoon + "px";
      img.style.height = mobielIcoon + "px";
      if (totalElements > 24) elContainer.style.marginBottom = "7px";
    }

    img.onclick = () => toggleSelect(el, img, side, map.naam);

    // Tooltip per element
    if (window.innerWidth <= 900 && window.matchMedia("(orientation: portrait)").matches) {
        elContainer.appendChild(makeCurvedLabel(el.naam, mobielIcoon));
    } else {
        attachTooltip(img, el.naam);
    }
        elContainer.appendChild(img);
        grid.appendChild(elContainer);
  });

  parentContainer.appendChild(grid);

  // Fade-in animatie
  parentContainer.style.opacity = 0;
  setTimeout(() => {
    parentContainer.style.transition = "opacity 0.3s ease";
    parentContainer.style.opacity = 1;
    parentContainer.classList.add("visible");
  }, 20);
}

// ----- HINT ENGINE -----
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function canShowHint(c) {
  return !!c.hint?.trim()
    && pairs(c.input).some(([a, b]) =>
      (a.startsWith("map:")
        ? mappen.some(m => norm(m.naam) === norm(a.slice(4)))
        : inMap(a)
      ) &&
      (b.startsWith("map:")
        ? mappen.some(m => norm(m.naam) === norm(b.slice(4)))
        : inMap(b)
      )
    )
    && c.output.some(o => !inMap(o.naam))
    && (!c.uitleg?.thresholdElement?.naam || known(c.uitleg.thresholdElement.naam))
    && !(c.uitleg?.threshold?.requirements || []).some(r => !known(r));
}

function refreshHintDeck() {
  const hints = combinaties
    .map((c, id) => ({ ...c, id }))
    .filter(canShowHint);

  hintDeck = [
    ...shuffle(hints.filter(h => h.tijd == null)),
    ...hints.filter(h => h.tijd != null).sort((a, b) => b.tijd - a.tijd)
  ];

  const on = hintDeck.length > 0;
  hintButton.classList.toggle("disabled", !on);
  hintButton.style.pointerEvents = on ? "auto" : "none";
}

function hideHint() {
  clearTimeout(hintTimer);
  hintTimer = 0;
  hintVisible = false;
  hintBubble.classList.remove("visible");
}

function showHint() {
  if (hintVisible) return hideHint();

  if (!hintDeck.length) refreshHintDeck();
  const hint = hintDeck.shift();
  if (!hint) return;

  hintBubble.innerHTML = hint.hint;
  hintBubble.classList.add("visible");
  hintVisible = true;

  clearTimeout(hintTimer);
  hintTimer = setTimeout(hideHint, 4000);
}

hintButton.onclick = showHint;
refreshHintDeck();
