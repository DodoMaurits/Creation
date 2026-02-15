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
let leftOpenGroup = null;
let rightOpenGroup = null;
let leftSelectedElement = null;
let rightSelectedElement = null;

// ---------------- INIT ----------------
function init() {
  renderGroups("left", true);
  renderGroups("right", true);
}

// ---------------- LAY-OUT ----------------
function layoutGroups(side, instant=false) { // extra param
  const container = document.getElementById(side + "-maps");
  const openGroup = side === "left" ? leftOpenGroup : rightOpenGroup;
  const groups = container.querySelectorAll(".map");

  const mapSize = 100;
  const gap = 15;

  if (openGroup !== null) {
    groups.forEach((groupDiv, idx) => {
      if (idx === openGroup) {
        groupDiv.style.display = "flex";
        groupDiv.classList.add("open");
        const containerWidth = container.clientWidth;
        const x = containerWidth / 2 - mapSize / 2;
        const y = 20;
        if (instant) groupDiv.style.transition = "none";
        groupDiv.style.transform = `translate(${x}px, ${y}px)`;
        if (instant) groupDiv.style.transition = "transform 1.5s ease-in-out";
      } else {
        groupDiv.style.display = "none";
        groupDiv.classList.remove("open");
      }
    });
  } else {
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
      const y = row * (mapSize + gap) + (container.clientHeight - gridHeight) / 2;

      if (instant) groupDiv.style.transition = "none";
      groupDiv.style.transform = `translate(${x}px, ${y}px)`;
      if (instant) groupDiv.style.transition = "transform 1.5s ease-in-out";
    });
  }
}

// ---------------- RENDER GROEPEN ----------------
function renderGroups(side, instant=false) {
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
      layoutGroups("left");           // laat groepen morphen
      setTimeout(renderLeftElements, 1500); // elementen verschijnen pas na morphen
    } else {
      rightOpenGroup = rightOpenGroup === idx ? null : idx;
      rightSelectedElement = null;
      layoutGroups("right");
      setTimeout(renderRightElements, 1500);
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
