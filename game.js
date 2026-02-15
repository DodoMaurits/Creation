// ---------------- DATA ----------------

// Voorbeeld mappen
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

// Voorbeeld combinaties
const combinaties = [
  {
    input: ["Oerknal", "Warmte"],
    output: {
      naam: "Energie",
      icoon: "icons/Energie.png",
      map: "Heelal"
    }
  }
];

// ---------------- STATUS ----------------
let leftOpenGroup = null;
let rightOpenGroup = null;
let leftSelectedElement = null;
let rightSelectedElement = null;

// ---------------- INIT ----------------
function init() {
  renderGroups("left");
  renderGroups("right");
}

// ---------------- RENDER GROEPEN ----------------
function renderGroups(side) {
  const container = document.getElementById(side + "-maps");
  container.innerHTML = "";

  const openGroup = side === "left" ? leftOpenGroup : rightOpenGroup;

  if (openGroup !== null) {
    // Alleen geopende groep tonen
    createGroupElement(container, side, openGroup);
  } else {
    // Anders alle groepen tonen
    mappen.forEach((_, idx) => {
      createGroupElement(container, side, idx);
    });
  }
}

function createGroupElement(container, side, idx) {
  const map = mappen[idx];

  const div = document.createElement("div");
  div.className = "map";
  div.dataset.name = map.naam;
  div.innerHTML = `<img src="${map.icoon}" alt="${map.naam}">`;

  const openGroup = side === "left" ? leftOpenGroup : rightOpenGroup;
  if (openGroup === idx) div.classList.add("open");

  div.addEventListener("click", () => {
    if (side === "left") {
      leftOpenGroup = leftOpenGroup === idx ? null : idx;
      leftSelectedElement = null;
      renderGroups("left");
      renderLeftElements();
    } else {
      rightOpenGroup = rightOpenGroup === idx ? null : idx;
      rightSelectedElement = null;
      renderGroups("right");
      renderRightElements();
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
  if (!leftSelectedElement || !rightSelectedElement) return;

  const combi = combinaties.find(c =>
    c.input.includes(leftSelectedElement) &&
    c.input.includes(rightSelectedElement)
  );

  if (!combi) return;

  alert(`Nieuw element ontdekt: ${combi.output.naam}`);

  const map = mappen.find(m => m.naam === combi.output.map);
  if (!map.elementen.some(e => e.naam === combi.output.naam)) {
    map.elementen.push({
      naam: combi.output.naam,
      icoon: combi.output.icoon
    });
  }

  // Reset alles
  leftOpenGroup = null;
  rightOpenGroup = null;
  leftSelectedElement = null;
  rightSelectedElement = null;

  renderGroups("left");
  renderGroups("right");
  document.getElementById("left-elements-container").innerHTML = "";
  document.getElementById("right-elements-container").innerHTML = "";
}

// ---------------- START ----------------
init();
