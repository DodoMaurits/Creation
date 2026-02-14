// Voorbeeld mappen en elementen
const mappen = [
  {
    naam: "Water",
    icoon: "https://img.icons8.com/ios-filled/50/0000FF/water.png",
    elementen: [
      { naam: "H2O", icoon: "https://img.icons8.com/ios-filled/50/0000FF/water.png" },
      { naam: "IJs", icoon: "https://img.icons8.com/ios-filled/50/ADD8E6/ice.png" }
    ]
  },
  {
    naam: "Vuur",
    icoon: "https://img.icons8.com/ios-filled/50/FF0000/fire-element.png",
    elementen: [
      { naam: "Vuur", icoon: "https://img.icons8.com/ios-filled/50/FF0000/fire-element.png" }
    ]
  },
  {
    naam: "Aarde",
    icoon: "https://img.icons8.com/ios-filled/50/8B4513/mountain.png",
    elementen: [
      { naam: "Klei", icoon: "https://img.icons8.com/ios-filled/50/DEB887/clay.png" }
    ]
  }
];

// Combinaties
const combinaties = [
  { input: ["H2O", "Vuur"], output: { naam: "Stoom", icoon: "https://img.icons8.com/ios-filled/50/AAAAAA/steam.png", map: "Water" } },
  { input: ["Klei", "H2O"], output: { naam: "Modder", icoon: "https://img.icons8.com/ios-filled/50/654321/mud.png", map: "Aarde" } }
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

// Render links en rechts de groepen
function renderGroups() {
  const leftDiv = document.getElementById("left-maps");
  const rightDiv = document.getElementById("right-maps");
  leftDiv.innerHTML = "";
  rightDiv.innerHTML = "";

  mappen.forEach((map, idx) => {
    // --- Links ---
    const mapDiv = document.createElement("div");
    mapDiv.className = "map";
    mapDiv.innerHTML = `<img src="${map.icoon}" alt="${map.naam}"><span>${map.naam}</span>`;
    if (leftOpenGroup === idx) mapDiv.classList.add("open");
    mapDiv.addEventListener("click", () => toggleLeftGroup(idx, mapDiv));
    leftDiv.appendChild(mapDiv);

    // --- Rechts ---
    const mapDivR = document.createElement("div");
    mapDivR.className = "map";
    mapDivR.innerHTML = `<img src="${map.icoon}" alt="${map.naam}"><span>${map.naam}</span>`;
    if (rightOpenGroup === idx) mapDivR.classList.add("open");
    mapDivR.addEventListener("click", () => toggleRightGroup(idx, mapDivR));
    rightDiv.appendChild(mapDivR);
  });
}

// Toggle linker groep open/close
function toggleLeftGroup(idx, div) {
  if (leftOpenGroup === idx) {
    leftOpenGroup = null;
    leftSelectedElement = null;
  } else {
    leftOpenGroup = idx;
    leftSelectedElement = null;
  }
  renderGroups();
  renderLeftElements();
}

// Toggle rechter groep open/close
function toggleRightGroup(idx, div) {
  if (rightOpenGroup === idx) {
    rightOpenGroup = null;
    rightSelectedElement = null;
  } else {
    rightOpenGroup = idx;
    rightSelectedElement = null;
  }
  renderGroups();
  renderRightElements();
}

// Render linker elementen
function renderLeftElements() {
  const leftDiv = document.getElementById("left-maps");
  // Verwijder oude container
  const old = leftDiv.querySelector(".element-container");
  if (old) old.remove();

  if (leftOpenGroup === null) return;

  const container = document.createElement("div");
  container.className = "element-container";
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
  leftDiv.appendChild(container);
}

// Render rechter elementen
function renderRightElements() {
  const rightDiv = document.getElementById("right-maps");
  const old = rightDiv.querySelector(".element-container");
  if (old) old.remove();

  if (rightOpenGroup === null) return;

  const container = document.createElement("div");
  container.className = "element-container";
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
  rightDiv.appendChild(container);
}

// Controleer combinatie
function tryCombine() {
  if (!leftSelectedElement || !rightSelectedElement) return;

  const combinatie = combinaties.find(c =>
    (c.input[0] === leftSelectedElement && c.input[1] === rightSelectedElement) ||
    (c.input[1] === leftSelectedElement && c.input[0] === rightSelectedElement)
  );

  if (combinatie) {
    alert(`Nieuw element ontdekt: ${combinatie.output.naam}`);
    const map = mappen.find(m => m.naam === combinatie.output.map);
    if (!map.elementen.some(e => e.naam === combinatie.output.naam)) {
      map.elementen.push({ naam: combinatie.output.naam, icoon: combinatie.output.icoon });
    }

    // reset alles
    leftOpenGroup = null;
    rightOpenGroup = null;
    leftSelectedElement = null;
    rightSelectedElement = null;

    renderGroups();
  }
}

// Start
init();
