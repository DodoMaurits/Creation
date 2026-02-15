// ---------------- DATA ----------------
const mappen = [
  {
    naam: "Heelal",
    icoon: "icons/Heelal.png",
    elementen: [
      { naam: "Oerknal", icoon: "icons/Oerknal.png" }
    ]
  },
  {
    naam: "Krachten",
    icoon: "icons/Krachten.png",
    elementen: [
      { naam: "Warmte", icoon: "icons/Warmte.png" },
      { naam: "Kou", icoon: "icons/Kou.png" }
    ]
  }
];

const combinaties = [
  {
    input: ["Oerknal", "Kou"],
    output: {
      naam: "Zwaartekracht",
      icoon: "icons/Zwaartekracht.png",
      map: "Krachten"
    }
  }
];

// ---------------- STATUS ----------------
let isCombining = false;
let leftOpenGroup = null;
let rightOpenGroup = null;
let leftSelectedElement = null;
let rightSelectedElement = null;

// ---------------- INIT ----------------
function init() {
  renderGroups("left", true);
  renderGroups("right", true);
}

// ---------------- LAYOUT ----------------
function layoutGroups(side, instant = false) {
  const container = document.getElementById(side + "-maps");
  const openGroup = side === "left" ? leftOpenGroup : rightOpenGroup;
  const groups = container.querySelectorAll(".map");

  const mapSize = 100;
  const gap = 15;
  const containerHeight = container.clientHeight;

  if (openGroup !== null) {
    // ---------------- OPEN GROEP ----------------
    groups.forEach((groupDiv, idx) => {
      if (idx === openGroup) {
        groupDiv.style.display = "flex";
        groupDiv.classList.add("open");

        const x = container.clientWidth / 2 - mapSize / 2;
        const y = 20;

        if (instant) groupDiv.style.transition = "none";
        groupDiv.style.transform = `translate(${x}px, ${y}px)`;
        if (instant) groupDiv.style.transition = "transform 0.5s ease-in-out";

        // ELEMENTEN CONTAINER POSITIE
        const elementsContainer = document.getElementById(side + "-elements-container");
        elementsContainer.style.position = "absolute";
        elementsContainer.style.top = `${y + mapSize + 10}px`;
        elementsContainer.style.left = "0";
        elementsContainer.style.width = "100%";
        elementsContainer.style.display = "grid";
        elementsContainer.style.gridTemplateColumns = "repeat(4, 100px)";
        elementsContainer.style.gap = `${gap}px`;
        elementsContainer.style.justifyContent = "center";
        elementsContainer.style.alignItems = "center";

      } else {
        groupDiv.style.display = "none";
        groupDiv.classList.remove("open");
      }
    });
  } else {
    // ---------------- GEEN GROEP OPEN ----------------
    const totalCols = Math.min(4, groups.length);
    const totalRows = Math.ceil(groups.length / 4);
    const gridWidth = totalCols * mapSize + (totalCols - 1) * gap;
    const gridHeight = totalRows * mapSize + (totalRows - 1) * gap;

    groups.forEach((groupDiv, idx) => {
      groupDiv.style.display = "flex";
      groupDiv.classList.remove("open");

      const col = idx % 4;
      const row = Math.floor(idx / 4);

      const x = col * (mapSize + gap) + (container.clientWidth - gridWidth) / 2;
      const y = row * (mapSize + gap) + (containerHeight - gridHeight) / 2;

      if (instant) groupDiv.style.transition = "none";
      groupDiv.style.transform = `translate(${x}px, ${y}px)`;
      if (instant) groupDiv.style.transition = "transform 0.5s ease-in-out";
    });

    // ELEMENTEN CONTAINER VERBERGEN
    const elementsContainer = document.getElementById(side + "-elements-container");
    elementsContainer.innerHTML = "";
    elementsContainer.style.position = "absolute";
    elementsContainer.style.top = "0";
    elementsContainer.style.display = "grid";
    elementsContainer.style.gridTemplateColumns = "repeat(4, 100px)";
    elementsContainer.style.gap = `${gap}px`;
    elementsContainer.style.justifyContent = "center";
  }
}

// ---------------- RENDER GROEPEN ----------------
function renderGroups(side, instant = false) {
  const container = document.getElementById(side + "-maps");
  const panel = document.getElementById(side + "-panel");
  const openGroup = side === "left" ? leftOpenGroup : rightOpenGroup;

  if (openGroup === null) panel.classList.add("no-open");
  else panel.classList.remove("no-open");

  if (container.childElementCount === 0) {
    mappen.forEach((_, idx) => createGroupElement(container, side, idx));
  }

  layoutGroups(side, instant);
}

// ---------------- CREATE GROEP ----------------
function createGroupElement(container, side, idx) {
  const map = mappen[idx];
  const div = document.createElement("div");
  div.className = "map";
  div.dataset.name = map.naam;
  div.innerHTML = `<img src="${map.icoon}" alt="${map.naam}">`;

  div.addEventListener("click", () => {
    const isLeft = side === "left";
    const openGroup = isLeft ? leftOpenGroup : rightOpenGroup;
    const selectedElementProp = isLeft ? "leftSelectedElement" : "rightSelectedElement";
    const elementsContainer = document.getElementById(side + "-elements-container");

    // Als deze groep al open is → sluiten
    if (openGroup === idx) {
      // Event listener voor als morph klaar is
      div.addEventListener("transitionend", function handler(e) {
        if (e.propertyName !== "transform") return; // alleen op transform
        div.removeEventListener("transitionend", handler);

        if (isLeft) leftOpenGroup = null;
        else rightOpenGroup = null;

        // Andere groepen verschijnen pas nu
        renderGroups(side);

        // Verwijder elementen
        elementsContainer.innerHTML = "";
      });

      // Trigger morph naar gesloten positie
      if (isLeft) leftSelectedElement = null;
      else rightSelectedElement = null;
      layoutGroups(side);

    } else {
      // Groep openen
      if (isLeft) leftOpenGroup = idx;
      else rightOpenGroup = idx;

      if (isLeft) leftSelectedElement = null;
      else rightSelectedElement = null;

      layoutGroups(side);
      setTimeout(() => {
        if (isLeft) renderLeftElements();
        else renderRightElements();
      }, 800); // elementen verschijnen na morph
    }
  });

  container.appendChild(div);
}

// ---------------- RENDER ELEMENTEN ----------------
function renderLeftElements() {
  const container = document.getElementById("left-elements-container");
  container.innerHTML = "";

  if (leftOpenGroup === null) return;

  mappen[leftOpenGroup].elementen.forEach(el => {
    const div = document.createElement("div");
    div.className = "element";
    div.dataset.name = el.naam;
    div.innerHTML = `<img src="${el.icoon}" alt="${el.naam}">`;

    if (el.naam === leftSelectedElement) div.classList.add("selected");

    div.addEventListener("click", () => {
      leftSelectedElement = leftSelectedElement === el.naam ? null : el.naam;
      renderLeftElements();
      tryCombine();
    });

    container.appendChild(div);
  });
}

function renderRightElements() {
  const container = document.getElementById("right-elements-container");
  container.innerHTML = "";

  if (rightOpenGroup === null) return;

  mappen[rightOpenGroup].elementen.forEach(el => {
    const div = document.createElement("div");
    div.className = "element";
    div.dataset.name = el.naam;
    div.innerHTML = `<img src="${el.icoon}" alt="${el.naam}">`;

    if (el.naam === rightSelectedElement) div.classList.add("selected");

    div.addEventListener("click", () => {
      rightSelectedElement = rightSelectedElement === el.naam ? null : el.naam;
      renderRightElements();
      tryCombine();
    });

    container.appendChild(div);
  });
}

// ---------------- COMBINATIE ----------------
function tryCombine() {
  if (!leftSelectedElement || !rightSelectedElement || isCombining) return;

  const combi = combinaties.find(c =>
    c.input.includes(leftSelectedElement) &&
    c.input.includes(rightSelectedElement)
  );

  if (!combi) {
    // Geen combinatie → deselecteer beide
    leftSelectedElement = null;
    rightSelectedElement = null;
    renderLeftElements();
    renderRightElements();
    return;
  }

  // ---------------- START COMBINATIE ANIMATIE ----------------
  isCombining = true;

  const leftEl = document.querySelector("#left-elements-container .selected");
  const rightEl = document.querySelector("#right-elements-container .selected");

  const leftRect = leftEl.getBoundingClientRect();
  const rightRect = rightEl.getBoundingClientRect();

  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  // absolute positioneren voor animatie
  [leftEl, rightEl].forEach(el => {
    el.style.position = "fixed";
    el.style.left = el.getBoundingClientRect().left + "px";
    el.style.top = el.getBoundingClientRect().top + "px";
    el.style.zIndex = "999";
    el.style.transition = "all 1s ease-in-out";
  });

  // animatie naar midden
  setTimeout(() => {
    leftEl.style.left = centerX - leftRect.width / 2 + "px";
    leftEl.style.top = centerY - leftRect.height / 2 + "px";

    rightEl.style.left = centerX - rightRect.width / 2 + "px";
    rightEl.style.top = centerY - rightRect.height / 2 + "px";
  }, 50);

  // na animatie: toon nieuw element
  setTimeout(() => {
    leftEl.remove();
    rightEl.remove();
    showNewElement(combi);
  }, 1100);
}

function showNewElement(combi) {

  const overlay = document.createElement("div");
  overlay.id = "result-overlay";

  overlay.innerHTML = `
    <div class="result-box">
      <img src="${combi.output.icoon}" class="result-image">
      <h2 class="result-title">${combi.output.naam}</h2>
      <p class="result-quote">
        Zwaartekracht is de moeder van alle krachten - Albert Einstein
      </p>
    </div>
  `;

  document.body.appendChild(overlay);

  // Klik op nieuw element → terug naar begin
  overlay.addEventListener("click", () => {

    // Voeg element toe aan juiste map
    const map = mappen.find(m => m.naam === combi.output.map);
    if (!map.elementen.some(e => e.naam === combi.output.naam)) {
      map.elementen.push({
        naam: combi.output.naam,
        icoon: combi.output.icoon
      });
    }

    overlay.remove();

    // Reset alles
    leftOpenGroup = null;
    rightOpenGroup = null;
    leftSelectedElement = null;
    rightSelectedElement = null;
    isCombining = false;

    renderGroups("left");
    renderGroups("right");
    });
  }

// ---------------- START ----------------
init();
