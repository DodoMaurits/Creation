// voorbeeld mappen en elementen
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

// voorbeeld combinaties
const combinaties = [
  { input: ["H2O", "Vuur"], output: { naam: "Stoom", icoon: "https://img.icons8.com/ios-filled/50/AAAAAA/steam.png", map: "Water" } },
  { input: ["Klei", "Water"], output: { naam: "Modder", icoon: "https://img.icons8.com/ios-filled/50/654321/mud.png", map: "Aarde" } }
];

let selectedLeft = null;
let leftElementSelected = null;

function init() {
  renderMaps();
}

function renderMaps() {
  const leftMapsDiv = document.getElementById("left-maps");
  const rightMapsDiv = document.getElementById("right-maps");
  leftMapsDiv.innerHTML = "";
  rightMapsDiv.innerHTML = "";

  mappen.forEach((map, index) => {
    const div = document.createElement("div");
    div.className = "map";
    div.dataset.index = index;
    div.innerHTML = `<img src="${map.icoon}" alt="${map.naam}"><span>${map.naam}</span>`;
    div.addEventListener("click", () => toggleMap(index));

    if (selectedLeft === index) {
      div.classList.add("selected");
      leftMapsDiv.appendChild(div);
    } else {
      rightMapsDiv.appendChild(div);
    }
  });

  renderElements();
}

function toggleMap(index) {
  if (selectedLeft === index) {
    selectedLeft = null;
  } else {
    selectedLeft = index;
  }
  leftElementSelected = null;
  renderMaps();
}

function renderElements() {
  const leftElementsDiv = document.getElementById("left-elements");
  const rightElementsDiv = document.getElementById("right-elements");
  leftElementsDiv.innerHTML = "";
  rightElementsDiv.innerHTML = "";

  // elementen van geselecteerde groep
  if (selectedLeft !== null) {
    mappen[selectedLeft].elementen.forEach(el => {
      const div = document.createElement("div");
      div.className = "element";
      div.dataset.map = selectedLeft;
      div.dataset.name = el.naam;
      div.innerHTML = `<img src="${el.icoon}" alt="${el.naam}"><span>${el.naam}</span>`;
      div.addEventListener("click", () => selectLeftElement(div, el.naam));
      leftElementsDiv.appendChild(div);
    });
  }

  // elementen van andere groepen
  mappen.forEach((map, idx) => {
    if (idx !== selectedLeft) {
      map.elementen.forEach(el => {
        const div = document.createElement("div");
        div.className = "element";
        div.dataset.map = idx;
        div.dataset.name = el.naam;
        div.innerHTML = `<img src="${el.icoon}" alt="${el.naam}"><span>${el.naam}</span>`;
        div.addEventListener("click", () => combineWithLeft(el.naam, idx));
        rightElementsDiv.appendChild(div);
      });
    }
  });
}

function selectLeftElement(div, naam) {
  document.querySelectorAll("#left-elements .element").forEach(el => el.classList.remove("selected"));
  div.classList.add("selected");
  leftElementSelected = naam;
}

function combineWithLeft(rightNaam, rightMapIdx) {
  if (!leftElementSelected) return;

  const combinatie = combinaties.find(c =>
    (c.input[0] === leftElementSelected && c.input[1] === rightNaam) ||
    (c.input[1] === leftElementSelected && c.input[0] === rightNaam)
  );

  if (combinatie) {
    alert(`Nieuw element ontdekt: ${combinatie.output.naam}`);
    const map = mappen.find(m => m.naam === combinatie.output.map);
    if (!map.elementen.some(e => e.naam === combinatie.output.naam)) {
      map.elementen.push({ naam: combinatie.output.naam, icoon: combinatie.output.icoon });
    }
    leftElementSelected = null;
    selectedLeft = null;
    renderMaps();
  }
}

init();
