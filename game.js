// Voorbeeld mappen
const mappen = [
  { naam: "Heelal", icoon: "https://img.icons8.com/ios-filled/50/000000/galaxy.png", elementen: [{ naam: "Oerknal", icoon: "https://img.icons8.com/ios-filled/50/ffcc00/big-bang.png" }] },
  { naam: "Krachten", icoon: "https://img.icons8.com/ios-filled/50/ff0000/atom.png", elementen: [
      { naam: "Warmte", icoon: "https://img.icons8.com/ios-filled/50/ff6600/fire.png" },
      { naam: "Kou", icoon: "https://img.icons8.com/ios-filled/50/00ccff/snowflake.png" }
    ]
  }
];

// Voorbeeld combinaties
const combinaties = [
  { input: ["Oerknal", "Warmte"], output: { naam: "Energie", icoon: "https://img.icons8.com/ios-filled/50/ffcc00/energy.png", map: "Heelal" } }
];

// Status
let leftOpenGroup = null;
let rightOpenGroup = null;
let leftSelectedElement = null;
let rightSelectedElement = null;

// Init
function init() {
  renderGroups();
}

// Render beide panelen groepen
function renderGroups() {
  const leftDiv = document.getElementById("left-maps");
  const rightDiv = document.getElementById("right-maps");

  leftDiv.innerHTML = "";
  rightDiv.innerHTML = "";

  mappen.forEach((map, idx) => {
    // --- Links ---
    const divL = document.createElement("div");
    divL.className = "map";
    divL.innerHTML = `<img src="${map.icoon}" alt="${map.naam}"><span>${map.naam}</span>`;
    if (leftOpenGroup === idx) divL.classList.add("open");
    divL.addEventListener("click", () => {
      leftOpenGroup = (leftOpenGroup === idx) ? null : idx;
      leftSelectedElement = null;
      renderLeftElements();
      renderGroups();
    });
    leftDiv.appendChild(divL);

    // --- Rechts ---
    const divR = document.createElement("div");
    divR.className = "map";
    divR.innerHTML = `<img src="${map.icoon}" alt="${map.naam}"><span>${map.naam}</span>`;
    if (rightOpenGroup === idx) divR.classList.add("open");
    divR.addEventListener("click", () => {
      rightOpenGroup = (rightOpenGroup === idx) ? null : idx;
      rightSelectedElement = null;
      renderRightElements();
      renderGroups();
    });
    rightDiv.appendChild(divR);
  });
}

// Render linker elementen
function renderLeftElements() {
  const container = document.getElementById("left-elements-container");
  container.innerHTML = "";
  if (leftOpenGroup === null) return;

  mappen[leftOpenGroup].elementen.forEach(el => {
    const div = document.createElement("div");
    div.className = "element";
    div.innerHTML = `<img src="${el.icoon}" alt="${el.naam}"><span>${el.naam}</span>`;
    if (el.naam === leftSelectedElement) div.classList.add("selected");
    div.addEventListener("click", () => {
      leftSelectedElement = (leftSelectedElement === el.naam) ? null : el.naam;
      renderLeftElements();
      tryCombine();
    });
    container.appendChild(div);
  });
}

// Render rechter elementen
function renderRightElements() {
  const container = document.getElementById("right-elements-container");
  container.innerHTML = "";
  if (rightOpenGroup === null) return;

  mappen[rightOpenGroup].elementen.forEach(el => {
    const div = document.createElement("div");
    div.className = "element";
    div.innerHTML = `<img src="${el.icoon}" alt="${el.naam}"><span>${el.naam}</span>`;
    if (el.naam === rightSelectedElement) div.classList.add("selected");
    div.addEventListener("click", () => {
      rightSelectedElement = (rightSelectedElement === el.naam) ? null : el.naam;
      renderRightElements();
      tryCombine();
    });
    container.appendChild(div);
  });
}

// Controleer combinaties
function tryCombine() {
  if (!leftSelectedElement || !rightSelectedElement) return;

  const combi = combinaties.find(c =>
    (c.input.includes(leftSelectedElement) && c.input.includes(rightSelectedElement))
  );

  if (combi) {
    alert(`Nieuw element ontdekt: ${combi.output.naam}`);
    const map = mappen.find(m => m.naam === combi.output.map);
    if (!map.elementen.some(e => e.naam === combi.output.naam)) {
      map.elementen.push({ naam: combi.output.naam, icoon: combi.output.icoon });
    }

    // reset alles
    leftOpenGroup = null;
    rightOpenGroup = null;
    leftSelectedElement = null;
    rightSelectedElement = null;

    renderGroups();
    renderLeftElements();
    renderRightElements();
  }
}

init();
