let selectedLeft = null;

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
      document.getElementById("left-maps").appendChild(div);
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
  renderMaps();
}

function renderElements() {
  const leftElementsDiv = document.getElementById("left-elements");
  const rightElementsDiv = document.getElementById("right-elements");
  leftElementsDiv.innerHTML = "";
  rightElementsDiv.innerHTML = "";

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

let leftElementSelected = null;

function selectLeftElement(div, naam) {
  // deselecteer alle
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
    // voeg toe aan de juiste map
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
