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

// ----- TIJDLIJN -----
let currentTime = 13_800_000_000; // start bij oerknal
const maxTime = 13_800_000_000;   // leeftijd universum
let timelineStart = maxTime;
const timelineFill = document.getElementById("timeline-fill");
const timelineLabel = document.getElementById("timeline-label");

// ----- TAAL -----
const TAAL = localStorage.getItem("creation-taal") || "nl";
document.body.classList.add("lang-" + TAAL);

const RESET_TEKSTEN = {
  nl: { titel: "Resetten", vraag: "Weet je zeker dat je je voortgang wilt resetten?", ja: "Ja", nee: "Nee" },
  en: { titel: "Reset", vraag: "Are you sure you want to reset your progress?", ja: "Yes", nee: "No" }
};

const R = RESET_TEKSTEN[TAAL];
document.getElementById("reset-title").textContent = R.titel;
document.getElementById("reset-text").textContent = R.vraag;
document.getElementById("reset-ja").textContent = R.ja;
document.getElementById("reset-nee").textContent = R.nee;

const TIJD_TEKSTEN = {
  nl: { miljard: "miljard jaar geleden", miljoen: "miljoen jaar geleden", duizend: "duizend jaar geleden", jaar: "jaar geleden", locale: "nl-NL" },
  en: { miljard: "billion years ago", miljoen: "million years ago", duizend: "thousand years ago", jaar: "years ago", locale: "en-GB" }
};
const TT = TIJD_TEKSTEN[TAAL];

const INTRO_HINTS = {
  nl: {
    openGroep: "open een groep",
    openNogEen: "open nog een groep",
    combinatie: "sleep of klik op twee elementen<br>om een nieuwe creatie te maken"
  },
  en: {
    openGroep: "open a map",
    openNogEen: "open another map",
    combinatie: "drag or click two elements<br>and create your new creation"
  }
};

const veld = (obj, basis) =>
  (TAAL === "en" && obj && obj[basis + "_en"] != null) ? obj[basis + "_en"] : (obj ? obj[basis] : undefined);

const naamVan = el => {
  if (TAAL === "en" && el && el.naam_en != null) return el.naam_en;
  if (TAAL === "en" && el && el.naam && MAP_NAMEN[el.naam]) return MAP_NAMEN[el.naam];
  return el ? el.naam : undefined;
};
const hintVan  = c  => veld(c, "hint");
const versVan  = c  => veld(c, "vers");
const titelVan = u  => veld(u, "titel");
const tekstVan = u  => veld(u, "tekst");

const MAP_NAMEN = {
  Heelal: "Space",
  Krachten: "Forces",
  Chemie: "Chemistry",
  Lucht: "Air",
  Water: "Water",
  Vuur: "Fire",
  Aarde: "Earth",
  Landschap: "Scenery",
  "Pril leven": "Cellular life",
  Biologie: "Biology",
  Waterdieren: "Aquatic animals",
  Brein: "Brain",
  Vissen: "Fish",
  Geleedpotigen: "Arthropods",
  "Klein landleven": "Small land creatures",
  Planten: "Plants",
  Smaakmakers: "Flavourings",
  Materialen: "Materials",
  Bomen: "Trees",
  Reptielen: "Reptiles",
  Samenleving: "Society",
  Zoogdieren: "Mammals",
  Vogels: "Birds",
  Bloemen: "Flowers",
  Genotwaren: "Indulgent goods",
  Fruit: "Fruit",
  Groenten: "Vegetables",
  Granen: "Cereals",
  Zaden: "Seeds",
  Carnivoren: "Carnivores",
  Primaten: "Primates",
  Hoefdieren: "Ungulates",
  Uitvindingen: "Inventions"
};

// ----- DOM -----
const closedContainer = document.getElementById("closed-container");
const leftSide = document.getElementById("left-side");
const rightSide = document.getElementById("right-side");
const hintButton = document.getElementById("hint-button");
const hintBubble = document.getElementById("hint-bubble");

const norm = s => String(s).trim().toLowerCase();
const pairs = input => (Array.isArray(input[0]) ? input : [input]);
const inMap = n => mappen.some(m => m.elementen.some(e => e.naam === n));
const known = n =>
  unlockedElements.has(n) ||
  mappen.some(m => m.elementen.some(e => e.naam === n));

hintButton.onclick = showHint;

// ----- SAVE -----
const SAVE_KEY = "creation-save";
function saveProgress() {
  localStorage.setItem(SAVE_KEY, JSON.stringify({
    unlocked: [...unlockedElements],
    time: currentTime,
    timelineStart: timelineStart
  }));
}
// ----- LOAD -----
function loadProgress() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch { return null; }
}
const savedState = loadProgress();
if (savedState) {
  unlockedElements = new Set(savedState.unlocked);
  currentTime = savedState.time;
  timelineStart = savedState.timelineStart;
  savedState.unlocked.forEach(naam => {
    let el = null;
    for (const c of combinaties) {
      const gevonden = c.output.find(o => o.naam === naam); 
      if (gevonden) { el = gevonden; break; }
    }
    if (!el) return;
    let map = mappen.find(m => m.naam === el.map);
    if (!map) {
      map = {
        naam: el.map,
        naam_en: MAP_NAMEN[el.map] || null,
        icoon: groepsIconen[el.map] || "icons/default.png",
        elementen: []
      };
      mappen.push(map);
    }
    if (!map.elementen.find(e => e.naam === naam)) { 
      map.elementen.push(el);
    }
  });
  updateTimelineLabel();
}

// ----- INIT -----
renderClosed();
requestAnimationFrame(() => {
    updateClosedContainer();
    if (!document.body.classList.contains("test-mode") && !savedState && unlockedElements.size <= 3) updateIntroHint();
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
}

/// ----- TAAL KNOP -----
const taalButton = document.getElementById("taal-button");
const taalOpties = document.getElementById("taal-opties");
const VLAGGEN = {
  nl: "afb/Vlag_NL.png",
  en: "afb/Vlag_EN.jpg"
};
taalButton.innerHTML = `<img src="${VLAGGEN[TAAL]}" alt="taal">`;

function zetTaalOpties() {
  taalOpties.querySelectorAll(".taal-optie").forEach(optie => {
    const isHuidige = optie.dataset.taal === TAAL;
    optie.style.display = isHuidige ? "none" : "flex";
  });
}
zetTaalOpties();
let taalMenuOpen = false;
taalButton.addEventListener("click", (e) => {
  e.stopPropagation();
  taalMenuOpen = !taalMenuOpen;
  taalOpties.classList.toggle("open", taalMenuOpen);
});
taalOpties.querySelectorAll(".taal-optie").forEach(optie => {
  optie.addEventListener("click", (e) => {
    e.stopPropagation();
    const nieuweTaal = optie.dataset.taal;
    if (nieuweTaal === TAAL) return;
    localStorage.setItem("creation-taal", nieuweTaal);
    window.location.reload();
  });
});
document.addEventListener("click", (e) => {
  if (!taalMenuOpen) return;
  if (!document.getElementById("taal-controls").contains(e.target)) {
    taalMenuOpen = false;
    taalOpties.classList.remove("open");
  }
});

// ----- MOBIELE VERSIE TOOLTIPS -----
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
let introKlaar = false;
let introCheckInterval = 0;

function updateIntroHint() {
  if (introKlaar) return;
  if (document.body.classList.contains("test-mode")) return; 
  if (savedState || unlockedElements.size > 3) return; 
  clearInterval(introCheckInterval); 
  document.querySelectorAll(".intro-wrapper").forEach(el => el.remove());
  const openAantal = (openLeft ? 1 : 0) + (openRight ? 1 : 0);
  let hintText = "";
  let target = null;
  let offsetY = -80;
  if (openAantal === 0) {
    const maps = Array.from(document.querySelectorAll(".icon.map"));
    if (maps.length === 0) { requestAnimationFrame(updateIntroHint); return; }
    maps.forEach(map => map.dataset.name = map.alt || map.title || "");
    const start = maps.filter(map => map.dataset.name === "Heelal" || map.dataset.name === "Krachten");
    target = start[0] || maps[0];
    hintText = INTRO_HINTS[TAAL].openGroep;
    offsetY = -140;
  } else if (openAantal === 1) {
    // gesloten mappen staan aan de overgebleven kant
    const maps = Array.from(document.querySelectorAll(".icon.map"));
    if (maps.length === 0) { requestAnimationFrame(updateIntroHint); return; }
    target = maps[0];
    hintText = INTRO_HINTS[TAAL].openNogEen;
    offsetY = -120;
  } else {
    // beide open: combinatie-hint
    hintText = INTRO_HINTS[TAAL].combinatie;
    offsetY = -50;
  }
  const wrapper = document.createElement("div");
  wrapper.className = "intro-wrapper fade-in";
  wrapper.innerHTML = `<div class="intro-text">${hintText}</div>`;
  wrapper.style.zIndex = 1500;
  if (target) {
    const rect = target.getBoundingClientRect();
    wrapper.style.left = rect.left + rect.width / 2 + "px";
    if (window.innerWidth <= 900) {
      wrapper.style.top = Math.max(140, rect.top + offsetY + 40) + "px";
    } else {
      wrapper.style.top = rect.top + offsetY + "px";
    }
  } else {
    wrapper.style.left = window.innerWidth / 2 + "px";
    wrapper.style.top = window.innerHeight / 2 + offsetY + "px";
    wrapper.style.textAlign = "center";
  }
  document.body.appendChild(wrapper);
  if (openAantal === 2 && !document.getElementById("result-overlay")) {
    introCheckInterval = setInterval(() => {
      if (document.getElementById("result-overlay")) {
        document.querySelectorAll(".intro-wrapper").forEach(el => el.remove());
        introKlaar = true;
        clearInterval(introCheckInterval);
      }
    }, 50);
  }
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
  if (rule.startsWith("map:")) {
    const mapNaam = rule.slice(4);
    return (el.map || el.mapNaam) === mapNaam;
  }
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
  if (Array.isArray(input[0])) return input;
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
  if (firstMatch.uitleg?.thresholdElement) {
    const needed = firstMatch.uitleg.thresholdElement.naam;
    if (!unlockedElements.has(needed)) {
      showThresholdExplanation(
        firstMatch.uitleg.thresholdElement,
        null, 
        () => {
          selected.forEach(e => e.dom.classList.remove("selected"));
          selected = [];
        }
      );
      return;
    }
  }
  if (firstMatch.uitleg?.threshold) {
    const requirements = firstMatch.uitleg.threshold.requirements || [];
    const unlockedNamen = [
      ...new Set([
        ...unlockedElements,
        ...mappen.flatMap(m => m.elementen.map(e => e.naam))
      ])
    ];
    const missing = requirements.filter(r =>
      !unlockedNamen.includes(r)
    );
    if (missing.length > 0) {
      showThresholdExplanation(firstMatch.uitleg.threshold, null, missing, () => {
        selected.forEach(e => e.dom.classList.remove("selected"));
        selected = [];
      });
      return;
    }
  }
  const finalUitleg = firstMatch.uitleg?.normal || null;
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
  const versText = versVan(firstMatch);
  const hasThreshold = !!firstMatch.uitleg?.threshold;
  const hasNormal = !!firstMatch.uitleg?.normal;
  const shouldShowInfo = !(hasThreshold && hasNormal);  
  const isNieuw = newElements.some(el => !unlockedElements.has(el.naam));
  const geselecteerdeDom = selected.map(e => e.dom);
  const eventTime = firstMatch.tijd;
  if (eventTime !== undefined && eventTime < currentTime) {
    if (eventTime <= 12_000 && timelineStart !== 12_000) {
      timelineFill.style.width = "0%";
      timelineStart = 12_000;
    }
  animateTimeline(eventTime);
  saveProgress();
  }
  if (isNieuw) {
    selected.forEach(e => e.dom.classList.remove("selected"));
    selected = [];
    epicSuccessBeforeOverlay(geselecteerdeDom, () => {
      renderNewElements(newElements, versText, firstMatch, true);
      lastExplanation = finalUitleg || null;
      addUnlockedElements(newElements);
    });
    return;
  }
  renderNewElements(newElements, versText, firstMatch, false);
  lastExplanation = finalUitleg || null;
  addUnlockedElements(newElements);
  refreshHintDeck();
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
  title.innerHTML = titelVan(threshold);
  const text = document.createElement("div");
  text.className = "explanation-text";
  text.innerHTML = tekstVan(threshold);
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
  button.textContent = TAAL === "en" ? "Continue" : "Ga verder";
  button.onclick = () => {
    overlay.remove();
    if (callback) callback();
  };
  box.appendChild(title);
  box.appendChild(text);
  box.appendChild(button);
  overlay.appendChild(box);
  document.body.appendChild(overlay);
}

// ----- EFFECT NIEUWE ELEMENTEN -----
function epicSuccessBeforeOverlay(selectedEls, daarna) {
  const gemute = localStorage.getItem("creation-muted") === "1";
  const discoverSound = document.getElementById("discover-sound");
  if (discoverSound && !gemute) {
    discoverSound.currentTime = 0;
    discoverSound.volume = 0.5;
    discoverSound.play().catch(() => {});
  }
  const twinkelSound = document.getElementById("twinkel-sound");
  const flash = document.createElement("div");
  flash.className = "combo-flash";
  document.body.appendChild(flash);
  setTimeout(() => flash.remove(), 800);
  setTimeout(() => {
    selectedEls.forEach(el => el.classList.remove("combo-gloed"));
    if (twinkelSound && !gemute) {  
      twinkelSound.currentTime = 0;
      twinkelSound.volume = 0.5;
      twinkelSound.play().catch(() => {});
    }
    daarna();
  }, 400);
}

// ----- VISUEEL SCHERM VOOR NIEUWE ELEMENTEN -----
function renderNewElements(elements, vers = null, thresholdOverlay = null, isNieuw = false) {
  const oldOverlay = document.getElementById("result-overlay");
  if (oldOverlay) oldOverlay.remove();
  const hasThreshold = !!thresholdOverlay?.uitleg?.threshold;
  const hasNormal = !!thresholdOverlay?.uitleg?.normal;
  const overlay = document.createElement("div");
  overlay.id = "result-overlay";
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
    case 9: colsMobiel = 3; break;
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
    const gloedWrapper = document.createElement("div");
    gloedWrapper.className = "result-image-wrap";
    gloedWrapper.appendChild(img);
    img.className = "result-image";
    box.appendChild(gloedWrapper);
    const title = document.createElement("div");
    title.className = "result-title";
    title.innerHTML = naamVan(el);
    title.lang = TAAL;
    const quote = document.createElement("div");
    quote.className = "result-quote";
    quote.innerHTML = el.quote || "";
    quote.lang = "en";
    const perRij = isMobielResult ? colsMobiel : colsDesktop;
    if (perRij === 1) {
      quote.classList.add("single");
      title.classList.add("single");
    } else if (perRij === 2) {
      quote.classList.add("pair");
      title.classList.add("pair");
    } else if (perRij === 3) {
      quote.classList.add("trio");
      title.classList.add("trio");
    }
    const moveX = (Math.random() * 20 - 10).toFixed(1) + "px";
    const moveY = "0px";
    const duration = (6 + Math.random() * 6).toFixed(2) + "s"; 
    quote.style.setProperty("--move-x", moveX);
    quote.style.setProperty("--move-y", moveY);
    quote.style.setProperty("--dur", duration);
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
  // Flash — alleen bij een nieuw element
  let flash = null;
  if (isNieuw) {
    flash = document.createElement("div");
    flash.className = "godlike-flash";
    overlay.appendChild(flash);
    overlay.classList.add("episch");
  }
  if (!hasThreshold && hasNormal) {
    const uitleg = thresholdOverlay.uitleg.normal;
    const infoBtn = document.createElement("div");
    infoBtn.className = "info-button";
    infoBtn.textContent = "i";
    const popup = document.createElement("div");
    popup.className = "info-popup";
    infoBtn.onclick = (e) => {
      e.stopPropagation();
      if (window.matchMedia("(hover: none)").matches) {
        const wasOpen = popup.classList.contains("open");
        popup.classList.toggle("open");
        if (!wasOpen) {
          setTimeout(() => {
            const sluitBijTik = (ev) => {
              popup.classList.remove("open");
              document.removeEventListener("click", sluitBijTik);
            };
            document.addEventListener("click", sluitBijTik);
          }, 0);
        }
      }
    };
    const box = document.createElement("div");
    box.className = "info-popup-box";
    const title = document.createElement("div");
    title.className = "info-popup-title";
    title.innerHTML = titelVan(uitleg);
    const text = document.createElement("div");
    text.className = "info-popup-text";
    text.innerHTML = tekstVan(uitleg);
    box.appendChild(title);
    box.appendChild(text);
    popup.appendChild(box);
    overlay.appendChild(infoBtn);
    overlay.appendChild(popup);
  }
  document.body.appendChild(overlay);
  requestAnimationFrame(() => overlay.classList.add("visible"));
  flash?.addEventListener("animationend", () => flash?.remove());
  overlay.addEventListener("click", (e) => {
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
      if (hasThreshold && hasNormal) {
        const uitleg = thresholdOverlay.uitleg.normal;
        if (uitleg) {
          showInfoOverlay(
            titelVan(uitleg),
            tekstVan(uitleg),
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

// ----- INFO OVERLAY BIJ THRESHOLD -----
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
  textEl.lang = TAAL;
  const spans = Array.from(textEl.querySelectorAll("span"));
  inner.appendChild(titleEl);
  inner.appendChild(textEl);
  overlay.appendChild(inner);
  document.body.appendChild(overlay);
  const isMobielInfo = window.innerWidth <= 900 && window.innerHeight > window.innerWidth;
  let grootte = isMobielInfo ? 16 : 28;
  textEl.style.fontSize = grootte + "px";
  const pasAan = () => {
    let pogingen = 0;
    while (
      pogingen < 20 &&
      grootte > (isMobielInfo ? 8 : 10) &&
      inner.scrollHeight > window.innerHeight * 0.75
    ) {
      grootte -= 1;
      textEl.style.fontSize = grootte + "px";
      pogingen++;
    }
  };
  pasAan();
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(pasAan);
  }
  let spanIndex = 1;
  const toonSpan = (i) => {
    spans.forEach((sp, idx) => {
      sp.classList.remove("span-uit", "span-zichtbaar");
      if (idx === i) {
        sp.classList.add("span-zichtbaar");
      } else if (sp.dataset.laatstZichtbaar === "1") {
        sp.classList.add("span-uit");
        setTimeout(() => sp.classList.remove("span-uit"), 400);
      }
    });
    spans.forEach((sp, idx) => sp.dataset.laatstZichtbaar = idx === i ? "1" : "0");
  };
  const onthulVolgende = () => {
    if (spanIndex < spans.length) {
      toonSpan(spanIndex);
      spanIndex++;
      return true;
    }
    return false;
  };
  toonSpan(0);
  overlay.onclick = () => {
    const nogEen = onthulVolgende();
    if (!nogEen) {
      overlay.classList.add("fade-out");
      setTimeout(() => overlay.remove(), 300);
    }
  };
}

// ----- CHECK THRESHOLD -----
function addUnlockedElements(elements) {
  elements.forEach(el => unlockedElements.add(el.naam));
  saveProgress();
}
function checkVoltooid() {
  const alleNamen = new Set(combinaties.flatMap(c => c.output.map(o => norm(o.naam))));
  const klaar = [...alleNamen].every(n =>
    [...unlockedElements].some(u => norm(u) === norm(n))
  );
  if (klaar) localStorage.removeItem(SAVE_KEY);
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
    else saveProgress();
  }
  requestAnimationFrame(step);
}

// ----- TIMELINE LABEL -----
function updateTimelineLabel() {
  if (!timelineLabel || !timelineFill) return;
  let labelText;
  if (currentTime >= 1_000_000_000) {
    labelText = (currentTime / 1_000_000_000)
      .toLocaleString(TT.locale, { maximumFractionDigits: 3 }) 
      + " " + TT.miljard;
  } else if (currentTime >= 1_000_000) {
    labelText = Math.round(currentTime / 1_000_000) + " " + TT.miljoen;
  } else if (currentTime >= 12_000) {
    labelText = Math.round(currentTime / 1_000) + " " + TT.duizend;
  } else if (currentTime >= 1) {
    labelText = Math.round(currentTime / 1) + " " + TT.jaar;
  }
  timelineLabel.textContent = labelText;
  const percentage = (timelineStart - currentTime) / timelineStart;
  timelineFill.style.width = (percentage * 100) + "%";
  timelineLabel.style.left = `calc(${percentage * 100}% + 8px)`;
  if (window.matchMedia("(max-width: 900px) and (orientation: portrait)").matches) {
    const labelWidth = timelineLabel.offsetWidth;
    const barWidth = timeline.getBoundingClientRect().width;
    const minCenter = labelWidth / 2;
    const maxCenter = barWidth - labelWidth / 2;
    let centerPx = percentage * barWidth + 8;
    if (centerPx < minCenter) centerPx = minCenter;
    if (centerPx > maxCenter) centerPx = maxCenter;
    timelineLabel.style.left = `${centerPx}px`;
  } else {
    timelineLabel.style.left = `calc(${percentage * 100}% + 8px)`;
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
    if (window.innerWidth <= 900 && window.matchMedia("(orientation: portrait)").matches) {
        container.appendChild(makeCurvedLabel(naamVan(map), 60));
    } else {
        attachTooltip(img, naamVan(map));
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
      const maxPerRijBreed = Math.floor((window.innerWidth - 40 + 20) / (icoon + 20));
      perRij = Math.min(perRij, maxPerRijBreed);
      rijen = Math.ceil(mappen.length / perRij);
      mapIcons.forEach(icon => {
        icon.style.width = icoon + "px";
        icon.style.height = icoon + "px";
      });
      const breedte = perRij * icoon + (perRij - 1) * 20 + 8;
      if (gridClosed) gridClosed.style.maxWidth = breedte + "px";
      if (closedContainerCenter) closedContainerCenter.style.width = breedte + "px";
    }
    closedContainer.style.opacity = 1;
  });
}

function refreshClosedLabels() {
  if (!(window.innerWidth <= 900 && window.matchMedia("(orientation: portrait)").matches)) return;
  const isSide = closedContainer.classList.contains("side");
  const smallCenter = !isSide && mappen.length > 18;
  const size = isSide ? 40 : (smallCenter ? 50 : 60);
  closedContainer.querySelectorAll(".icon-container").forEach(container => {
    const old = container.querySelector(".curved-label");
    if (old) old.remove();
    const map = mappen.find(m => m.naam === container.dataset.naam);
    container.appendChild(makeCurvedLabel(map ? naamVan(map) : container.dataset.naam, size));
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
    return; 
  }
  renderSide(container, map, side);
  updateClosedContainer();
  updateIntroHint();
}

// ----- CLOSE MAP -----
function closeMap(side) {
  const container = side === "left" ? leftSide : rightSide;
  const closingMap = side === "left" ? openLeft : openRight;
  container.classList.remove("visible");
  setTimeout(() => {
    selected = selected.filter(e => {
      if (e.mapNaam === closingMap.naam && e.side === side) {
        e.dom.classList.remove("selected");
        return false;
      }
      return true; 
    });
    if (side === "left") openLeft = null;
    else openRight = null;
    container.classList.add("hidden");
    updateClosedContainer();
    updateIntroHint();
  }, 300);
}

// ----- SLEPEN -----
function maakSleepbaar(el, img, side, mapNaam) {
  let start = null;
  let kopie = null;
  img.setAttribute("draggable", "false");
  img.addEventListener("mousedown", (e) => { start = { x: e.clientX, y: e.clientY }; });
  img.addEventListener("touchstart", (e) => {
    start = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  }, { passive: true });
  window.addEventListener("mousemove", beweeg);
  img.addEventListener("touchmove", beweeg, { passive: false });
  function beweeg(e) {
    if (!start) return;
    const p = e.touches ? e.touches[0] : e;
    if (!kopie && Math.hypot(p.clientX - start.x, p.clientY - start.y) > 8) {
      kopie = img.cloneNode(true);
      kopie.className = "icon element sleep-kopie";
      document.body.appendChild(kopie);
    }
    if (!kopie) return;
    if (e.cancelable) e.preventDefault();
    kopie.style.left = (p.clientX - 55) + "px";
    kopie.style.top = (p.clientY - 55) + "px";
  }
  window.addEventListener("mouseup", los);
  img.addEventListener("touchend", los);
  function los(e) {
    if (!kopie) { start = null; return; }
    const centerX = kopie.offsetLeft + kopie.offsetWidth / 2;
    const centerY = kopie.offsetTop + kopie.offsetHeight / 2;
    kopie.remove();
    kopie = null;
    start = null;
    const onder = document.elementFromPoint(centerX, centerY);
    const doelImg = onder && onder.closest ? onder.closest(".icon.element") : null;
    if (!doelImg) return;
    const doelEl = mappen.flatMap(m => m.elementen)
      .find(x => norm(x.naam) === norm(doelImg.dataset.naam));
    if (!doelEl) return;
    selected.forEach(e => e.dom.classList.remove("selected"));
    selected = [];
    toggleSelect(el, img, side, mapNaam);
    img.dataset.netGesleept = "1";
    toggleSelect(doelEl, doelImg, doelImg.closest("#left-side") ? "left" : "right", doelImg.dataset.mapnaam || "");
    doelImg.dataset.netGesleept = "1";
  }
}

// ----- RENDER SIDE -----
function renderSide(parentContainer, map, side) {
  parentContainer.innerHTML = "";
  parentContainer.classList.remove("hidden", "visible");
  const titleContainer = document.createElement("div");
  titleContainer.className = "icon-container";
  const titleImg = document.createElement("img");
  titleImg.src = map.icoon;
  titleImg.className = "icon map-title";
  titleImg.onclick = () => closeMap(side);
  if (window.innerWidth <= 900 && window.matchMedia("(orientation: portrait)").matches) {
      titleContainer.appendChild(makeCurvedLabel(naamVan(map), 60));
  } else {
      attachTooltip(titleImg, naamVan(map));
  }
  titleContainer.appendChild(titleImg);
  parentContainer.appendChild(titleContainer);
  const grid = document.createElement("div");
  grid.className = "grid-elements";
  const totalElements = map.elementen.length;
  const isMobile = window.innerWidth <= 900 && window.innerHeight > window.innerWidth;
  const mobielIcoon = isMobile
    ? (totalElements > 27 ? 42 : (totalElements > 24 ? 48 : 50))
    : 50;
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
    img.onclick = () => {
      if (img.dataset.netGesleept === "1") { img.dataset.netGesleept = ""; return; }
      toggleSelect(el, img, side, map.naam);
    };
    img.dataset.naam = el.naam;
    img.dataset.mapnaam = map.naam;
    maakSleepbaar(el, img, side, map.naam);
    if (window.innerWidth <= 900 && window.matchMedia("(orientation: portrait)").matches) {
        elContainer.appendChild(makeCurvedLabel(naamVan(el), mobielIcoon));
    } else {
        attachTooltip(img, naamVan(el));
    }
        elContainer.appendChild(img);
        grid.appendChild(elContainer);
  });
  parentContainer.appendChild(grid);
  parentContainer.style.opacity = 0;
  setTimeout(() => {
    parentContainer.style.transition = "opacity 0.3s ease";
    parentContainer.style.opacity = 1;
    parentContainer.classList.add("visible");
  }, 20);
}

// ----- SUPERHINT -----
function superHint() {
  const kanNu = combinaties.filter(canShowHint);
  if (!kanNu.length) return;
  const zonderTijd = kanNu.filter(c => c.tijd == null);
  const kandidaten = zonderTijd.length ? zonderTijd : kanNu;
  const doel = kandidaten.length
    ? kandidaten.reduce((a, b) => (b.tijd == null ? b : (!a.tijd || b.tijd >= a.tijd ? b : a)), kandidaten[0])
    : null;
  if (!doel) return;
  const paren = pairs(doel.input);
  const paar = paren.find(matchend) || paren[0];
  function matchend(p) {
    const [a, b] = p;
    return bestaat(a) && bestaat(b);
  }
  function bestaat(rule) {
    return rule.startsWith("map:")
      ? mappen.some(m => norm(m.naam) === norm(rule.slice(4)))
      : inMap(rule);
  }
  const mapVan = rule => {
    if (rule.startsWith("map:")) {
      return mappen.find(m => norm(m.naam) === norm(rule.slice(4)));
    }
    for (const m of mappen) {
      if (m.elementen.some(e => norm(e.naam) === norm(rule))) return m;
    }
    return null;
  };
  const mapA = mapVan(paar[0]);
  const mapB = mapVan(paar[1]);
  if (!mapA || !mapB) return;
  if (openLeft) closeMap("left");
  if (openRight) closeMap("right");
  setTimeout(() => {
    const flash = document.createElement("div");
    flash.className = "superhint-flash";
    document.body.appendChild(flash);
    setTimeout(() => flash.remove(), 1250);
    openMap(mapA, null);
    openMap(mapB, null);
  }, 350);
}

const superhintButton = document.getElementById("superhint-button");
const SUPERHINT_COOLDOWN = 60_000;
let superhintCooldownTimer = 0;
let superhintTikker = 0;

function startSuperhintCooldown() {
  clearTimeout(superhintCooldownTimer);
  superhintButton.classList.add("cooldown");
  superhintCooldownTimer = setTimeout(() => {
    superhintButton.classList.remove("cooldown");
  }, SUPERHINT_COOLDOWN);
}
if (superhintButton) superhintButton.addEventListener("click", (e) => {
  e.stopPropagation();
  if (superhintButton.classList.contains("cooldown")) return;
  superHint();
  startSuperhintCooldown();
});

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
  hintBubble.innerHTML = hintVan(hint);
  hintBubble.classList.add("visible");
  hintVisible = true;
  clearTimeout(hintTimer);
  hintTimer = setTimeout(hideHint, 4000);
}

hintButton.onclick = showHint;
refreshHintDeck();
