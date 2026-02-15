// ---------------- DATA ----------------
const mappen = [
  {
    naam: "Ruimte",
    icoon: "icons/Ruimte.png",
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
    output: [
      {
        naam: "Zwaartekracht",
        icoon: "icons/Zwaartekracht.png",
        map: "Krachten",
        quote: "Gravity explains the motions of the planets, <br>but it cannot explain who sets the planets in motion <br>- Isaac Newton"
      },
      {
        naam: "Quark",
        icoon: "icons/Quark.png",
        map: "Chemie",
        quote: "Chemie is the limit"
      }
    ]
  },
  {
      input: ["Zwaartekracht", "Quark"],
      output: [
        {
          naam: "Heelal",
          icoon: "icons/Heelal.png",
          map: "Ruimte",
          quote: "Heelal is the limit"
        }
      ]
    }
];

const groepsIconen = {
  "Ruimte": "icons/Ruimte.png",
  "Krachten": "icons/Krachten.png",
  "Chemie": "icons/Chemie.png"
};

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

  const combi = combinaties.find(c => {
    const inputSorted = [...c.input].sort();
    const selectedSorted = [leftSelectedElement, rightSelectedElement].sort();
    return JSON.stringify(inputSorted) === JSON.stringify(selectedSorted);
  });

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

// 1️⃣ Meet originele positie DIRECT
const leftRect = leftEl.getBoundingClientRect();
const rightRect = rightEl.getBoundingClientRect();

// 2️⃣ Maak clones (belangrijk!)
const leftClone = leftEl.cloneNode(true);
const rightClone = rightEl.cloneNode(true);

document.body.appendChild(leftClone);
document.body.appendChild(rightClone);

// 3️⃣ Zet clones exact op beginpositie
Object.assign(leftClone.style, {
  position: "fixed",
  left: leftRect.left + "px",
  top: leftRect.top + "px",
  width: leftRect.width + "px",
  height: leftRect.height + "px",
  margin: 0,
  zIndex: 999,
  transition: "all 0.8s ease-in-out"
});

Object.assign(rightClone.style, {
  position: "fixed",
  left: rightRect.left + "px",
  top: rightRect.top + "px",
  width: rightRect.width + "px",
  height: rightRect.height + "px",
  margin: 0,
  zIndex: 999,
  transition: "all 0.8s ease-in-out"
});

// 4️⃣ Verberg originele elementen (layout blijft stabiel)
leftEl.style.visibility = "hidden";
rightEl.style.visibility = "hidden";

// 5️⃣ Bereken midden
const centerX = window.innerWidth / 2;
const centerY = window.innerHeight / 2;

// 6️⃣ Force reflow
leftClone.offsetWidth;

// 7️⃣ Animeer naar midden
leftClone.style.left = centerX - leftRect.width / 2 + "px";
leftClone.style.top = centerY - leftRect.height / 2 + "px";

rightClone.style.left = centerX - rightRect.width / 2 + "px";
rightClone.style.top = centerY - rightRect.height / 2 + "px";

// 8️⃣ Na animatie → opruimen en resultaat tonen
setTimeout(() => {

  leftClone.remove();
  rightClone.remove();

  leftEl.remove();
  rightEl.remove();

  showNewElement(combi);

  }, 800);
}

function showNewElement(combi) {
  const overlay = document.createElement("div");
  overlay.id = "result-overlay";
  overlay.style.background = `
    linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),
    url('afb/beginscherm.png')
  `;
  overlay.style.backgroundPosition = "center";
  overlay.style.backgroundSize = "cover";
  overlay.style.backgroundRepeat = "no-repeat";

  // container voor meerdere elementen
  let innerHTML = '<div class="result-box-container" style="display:flex; justify-content:center; gap:50px;">';

  combi.output.forEach(el => {
    innerHTML += `
      <div class="result-box" style="text-align:center; color:white;">
        <img src="${el.icoon}" class="result-image" style="width:150px;">
        <h2 class="result-title">${el.naam}</h2>
        <p class="result-quote">${el.quote || ""}</p>
      </div>
    `;

    // --- NIEUWE GROEP DIRECT TOEVOEGEN ---
    let map = mappen.find(m => m.naam === el.map);

    if (!map) {
      // map bestaat nog niet → nieuwe groep aanmaken
      map = {
        naam: el.map,
        icoon: el.icoon, // gebruik icoon van het element
        elementen: []
      };
      mappen.push(map);

      // Voeg de nieuwe groep direct toe aan beide zijden (left + right)
      ["left", "right"].forEach(side => {
        const container = document.getElementById(side + "-maps");
        createGroupElement(container, side, mappen.length - 1); // idx = laatste map
      });
    }

    // voeg element toe aan map (als het er nog niet in zit)
    if (!map.elementen.some(e => e.naam === el.naam)) {
      map.elementen.push({
        naam: el.naam,
        icoon: el.icoon
      });
    }
  });

  innerHTML += '</div>';
  overlay.innerHTML = innerHTML;
  document.body.appendChild(overlay);

  // Klik om overlay te sluiten en terug naar hoofdscherm
  overlay.addEventListener("click", () => {
    overlay.remove();
    leftOpenGroup = null;
    rightOpenGroup = null;
    leftSelectedElement = null;
    rightSelectedElement = null;
    isCombining = false;

    // her-render alle groepen
    renderGroups("left");
    renderGroups("right");
  });
}

// ---------------- START ----------------
init();
