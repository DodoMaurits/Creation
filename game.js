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

// Voorbeeld combinaties
const combinaties = [
  { input: ["H2O", "Vuur"], output: { naam: "Stoom", icoon: "https://img.icons8.com/ios-filled/50/AAAAAA/steam.png", map: "Water" } },
  { input: ["Klei", "H2O"], output: { naam: "Modder", icoon: "https://img.icons8.com/ios-filled/50/654321/mud.png", map: "Aarde" } }
];

// Huidige selectie
let selectedLeftGroup = null;
let selectedRightGroup = null;
let selectedLeftElement = null;
let selectedRightElement = null;

// Initialisatie
function init() {
  renderMaps();
  renderElements();
}

// Render links en rechts alle groepen
function renderMaps() {
  const leftMapsDiv = document.getElementById("left-maps");
  const rightMapsDiv = document.getElementById("right-maps");
  leftMapsDiv.innerHTML = "";
  rightMapsDiv.innerHTML = "";

  mappen.forEach((map, idx) => {
    const leftDiv = createMapDiv(map, idx, "left");
    leftMapsDiv.appendChild(leftDiv);

    const rightDiv = createMapDiv(map, idx, "right");
    rightMapsDiv.appendChild(rightDiv);
  });
}

// Helper om een map div te maken
function createMapDiv(map, idx, side) {
  const div = document.createElement("div");
  div.className = "map";
  div.dataset.index = idx;
  div.innerHTML = `<img src="${map.icoon}" alt="${map.naam}"><span>${map.naam}</span>`;

  div.addEventListener("click", () => {
    if (side === "left") {
      if (selectedLeftGroup === idx) selectedLeftGroup = null;
      else selectedLeftGroup = idx;
      selectedLeftElement = null;
    } else {
      if (selectedRightGroup === idx) selectedRightGroup = null;
      else selectedRightGroup = idx;
      selectedRightElement = null;
    }
    renderElements();
    updateMapSelection();
  });

  return div;
}

// Update visuele selectie van groepen
function updateMapSelection() {
  document.querySelectorAll("#left-maps .map").forEach((el, idx) => {
    el.classList.toggle("selected", idx === selectedLeftGroup);
  });
  document.querySelectorAll("#right-maps .map").forEach((el, idx) => {
    el.classList.toggle("selected", idx === selectedRightGroup);
  });
}

// Render elementen van de geselecteerde groep
function renderElements() {
  const leftElementsDiv = document.getElementById("left-elements");
  const rightElementsDiv = document.getElementById("right-elements");
  leftElementsDiv.innerHTML = "";
  rightElementsDiv.innerHTML = "";

  // Links
  if (selectedLeftGroup !== null) {
    mappen[selectedLeftGroup].elementen.forEach(el => {
      const div = document.createElement("div");
      div.className = "element";
      div.innerHTML = `<img src="${el.icoon}" alt="${el.naam}"><span>${el.naam}</span>`;
      div.addEventListener("click", () => selectLeftElement(div, el.naam));
      if (el.naam === selectedLeftElement) div.classList.add("selected");
      leftElementsDiv.appendChild(div);
    });
  }

  // Rechts
  if (selectedRightGroup !== null) {
    mappen[selectedRightGroup].elementen.forEach(el => {
      const div = document.createElement("div");
      div.className = "element";
      div.innerHTML = `<img src="${el.icoon}" alt="${el.naam}"><span>${el.naam}</span>`;
      div.addEventListener("click", () => selectRightElement(div, el.naam));
      if (el.naam === selectedRightElement) div.classList.add("selected");
      rightElementsDiv.appendChild(div);
    });
  }
}

// Selecteer links element
function selectLeftElement(div, naam) {
  selectedLeftElement = naam;
  renderElements();
  combineIfPossible();
}

// Selecteer rechts element
function selectRightElement(div, naam) {
  selectedRightElement = naam;
  renderElements();
  combineIfPossible();
}

// Controleer combinatie
function combineIfPossible() {
  if (!selectedLeftElement || !selectedRightElement) return;

  const combinatie = combinaties.find(c =>
    (c.input[0] === selectedLeftElement && c.input[1] === selectedRightElement) ||
    (c.input[1] === selectedLeftElement && c.input[0] === selectedRightElement)
  );

  if (combinatie) {
    alert(`Nieuw element ontdekt: ${combinatie.output.naam}`);
    const map = mappen.find(m => m.naam === combinatie.output.map);
    if (!map.elementen.some(e => e.naam === combinatie.output.naam)) {
      map.elementen.push({ naam: combinatie.output.naam, icoon: combinatie.output.icoon });
    }

    // reset selectie
    selectedLeftElement = null;
    selectedRightElement = null;
    selectedLeftGroup = null;
    selectedRightGroup = null;
    renderMaps();
    renderElements();
  }
}

init();
