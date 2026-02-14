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

// --- INIT ---
function init() {
  renderGroups("left");
  renderGroups("right");
}

// --- Render groepen links of rechts ---
function renderGroups(side) {
  const container = document.getElementById(side + "-maps");
  container.innerHTML = "";

  mappen.forEach((map, idx) => {
    const div = document.createElement("div");
    div.className = "map";
    div.innerHTML = `<img src="${map.icoon}" alt="${map.naam}"><span>${map.naam}</span>`;

    // Open status
    const openGroup = (side === "left") ? leftOpenGroup : rightOpenGroup;
    if (openGroup === idx) div.classList.add("open");

    // Klik event
    div.addEventListener("click", () => {
      if (side === "left") {
        if (leftOpenGroup === idx) {
          // Sluit de groep
          leftOpenGroup = null;
          leftSelectedElement = null;
        } else {
          // Open deze groep, andere verdwijnen
          leftOpenGroup = idx;
          leftSelectedElement = null;
        }
        renderGroups("left");
        renderLeftElements();
      } else {
        if (rightOpenGroup === idx) {
          rightOpenGroup = null;
          rightSelectedElement = null;
        } else {
          rightOpenGroup = idx;
          rightSelectedElement = null;
        }
        renderGroups("right");
        renderRightElements();
      }
    });

    container.appendChild(div);
  });
}

// --- Render linker elementen ---
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

// --- Render rechter elementen ---
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

// --- Combinatie check ---
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
}

init();
