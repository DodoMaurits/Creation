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
    output: [
      {
        naam: "Zwaartekracht",
        icoon: "icons/Zwaartekracht.png",
        map: "Krachten",
        quote: "Gravity explains the motions of the planets, but it cannot explain who sets the planets in motion <br><br>- Isaac Newton"
      },
      {
        naam: "Straling",
        icoon: "icons/Straling.png",
        map: "Krachten",
        quote: "A compassionate heart radiates rays of beauty that remove the clouds of million hearts <br><br>- Amit Ray"
      },
      {
        naam: "Quarks",
        icoon: "icons/Quarks.png",
        map: "Chemie",
        quote: "Every atom in your body is the same quark in different places at the same moment in time <br><br>- David Eagleman"
      },
      {
        naam: "Elektriciteit",
        icoon: "icons/Elektriciteit.png",
        map: "Krachten",
        quote: "We're electrical items and when we die the electricity goes somewhere else <br><br>- Dominic Monaghan"
      }
    ]
  },
    {
      input: ["Quarks", "Kou"],
      output: [
        {
          naam: "Atomen",
          icoon: "icons/Atomen.png",
          map: "Chemie",
          quote: "In reality, nothing but atoms and the void <br><br>- Democritos"
        }
      ]
    },
      {
        input: ["Atomen", "Straling"],
        output: [
          {
            naam: "Radioactiviteit",
            icoon: "icons/Radioactiviteit.png",
            map: "Krachten",
            quote: "Nuclear power is one hell of a way to boil water <br><br>-Albert Einstein"
          }
        ]
      },
      {
        input: ["Atomen", "Zwaartekracht"],
        output: [
          {
            naam: "Gas",
            icoon: "icons/Gas.png",
            map: "Lucht",
            quote: "All flight is based upon producing air pressure, all flight energy consists in overcoming air pressure <br><br>- Otto Lilienthal"
          }
        ]
      },
      {
        input: ["Gas", "Kou"],
        output: [
          {
            naam: "IJs",
            icoon: "icons/IJs.png",
            map: "Water",
            quote: "Just as when water is frozen in to a form as ice and then melts so at the time of death, there is no death. The spirit simply changes form <br><br>- Frederick Lenz"
          }
        ]
      },
      {
        input: ["Gas", "Zwaartekracht"],
        output: [
          {
            naam: "Ster",
            icoon: "icons/Ster.png",
            map: "Heelal",
            quote: "Every star may be a sun to someone <br><br>-Carl Sagan"
          }
        ]
      },
      {
        input: ["IJs", "Warmte"],
        output: [
          {
            naam: "Water",
            icoon: "icons/Water.png",
            map: "Water",
            quote: "Water is the softest thing, yet it can penetrate mountains and earth. This shows clearly the principle of softness overcoming hardness <br><br>-Lao Tzu"
          }
        ]
      },
      {
        input: ["Ster", "Zwaartekracht"],
        output: [
          {
            naam: "IJzer",
            icoon: "icons/IJzer.png",
            map: "Chemie",
            quote: "Do not wait to strike till the iron is hot but make it hot by striking <br><br>-William Butler Yeatsu"
          },
          {
            naam: "Supernova",
            icoon: "icons/Supernova.png",
            map: "Heelal",
            quote: "A supernova is one of the most powerful explosions in the universe. It's so luminous, it can be seen across billions of light years. It releases as much energy in an instant as our sun will produce over its 10-billion-year lifetime<br><br>- Neil Tyson"
          }
        ]
      },
        {
        input: ["Ster", "Gas"],
        output: [
          {
            naam: "Asteroïden",
            icoon: "icons/Asteroïden.png",
            map: "Heelal",
            quote: "If you keep chasing shooting stars, you'll never feel the warmth of the sun <br><br>- Ann Marie Frohoff"
          },
          {
            naam: "Planeet",
            icoon: "icons/Planeet.png",
            map: "Heelal",
            quote: "Astronomy compels the soul to look upwards and leads us from this world to another <br><br>- Plato"
          }
        ]
      },
        {
          input: ["Water", "IJzer"],
          output: [
            {
              naam: "Roest",
              icoon: "icons/Roest.png",
              map: "Chemie",
              quote: "None can destroy iron, but its own rust can. Likewise none can destroy a person, but its own mindset can<br><br>- Ratan Tata"
            }
          ]
        },
        {
          input: ["Water", "Water"],
          output: [
            {
              naam: "Meer",
              icoon: "icons/Meer.png",
              map: "Water",
              quote: "Make your heart like a lake <br>with a calm, still surface and great depths of kindness<br><br>-Lao Tzu"
            }
          ]
        },
          {
            input: ["Supernova", "Zwaartekracht"],
            output: [
              {
                naam: "Zwart Gat",
                icoon: "icons/Zwartgat.png",
                map: "Heelal",
                quote: "I belive in black holes. I believe that as the universe empties into nothingness, past and future will smack together in the last swirl around the drain<br><br>- Abraham Verghese"
              }
            ]
          },
            {
          input: ["Asteroïden", "Planeet"],
          output: [
            {
              naam: "Vuur",
              icoon: "icons/Vuur.png",
              map: "Vuur",
              quote: "Tampering with fire will burn you, even in the coldest regions<br><br>- H.S. Crow"
            },
            {
              naam: "Lava",
              icoon: "icons/Lava.png",
              map: "Vuur",
              quote: "It is the lava of the imagination whose eruption prevents an earthquake<br><br>- Lord Byron"
            },
            {
              naam: "Rook",
              icoon: "icons/Rook.png",
              map: "Vuur",
              quote: "Surely where there's smoke there's fire? No, where there's so much smoke there's smoke<br><br>- John Wheeler"
            }
          ]
        },
        {
          input: ["Planeet", "Gas"],
          output: [
            {
              naam: "Jupiter",
              icoon: "icons/Jupiter.png",
              map: "Heelal",
              quote: "Jupiter was a God, a Roman God. The Roman King of Gods, of sky and of thunder... and he looked every single inch of it <br><br>- Lulu Moore"
            },
            {
              naam: "Saturnus",
              icoon: "icons/Saturnus.png",
              map: "Heelal",
              quote: "At depth on Jupiter and Saturn, the pressures are so great that atoms sweat electrons, and the air becomes a metal <br><br>- Carl Sagan"
            }
          ]
        },
          {
            input: ["Planeet", "IJs"],
            output: [
              {
                naam: "Uranus",
                icoon: "icons/Neptunus.png",
                map: "Heelal",
                quote: "If the world seems cold to you, kindle fires to warm it <br><br>- Lucy Larcom"
              },
              {
                naam: "Neptunus",
                icoon: "icons/Neptunus.png",
                map: "Heelal",
                quote: "We see it as Columbus saw America from the coast of Spain. Its movements have been felt, trembling along the far-reaching line of our analysis with a certainty hardly inferior to that of ocular demonstration <br><br>- William Herschel"
              }
            ]
          },
            {
              input: ["Planeet", "IJzer"],
              output: [
                {
                  naam: "Mars",
                  icoon: "icons/Mars.png",
                  map: "Heelal",
                  quote: "It was Mars. the God of War, and for me, the fighting man, it had always held the power of irresistible enchantment. As I gazed at it on that far-gone night it seemed to call across the unthinkable void, to lure me to it, to draw me as the lodestone attracts a particle of iron <br><br>- Edgar Rice Burroughs "
                },
                {
                  naam: "De Aarde",
                  icoon: "icons/De_Aarde.png",
                  map: "Heelal",
                  quote: "On Earth there is no heaven, but there are pieces of it <br><br>- Jules Renard"
                },
                {
                  naam: "Venus",
                  icoon: "icons/Venus.png",
                  map: "Heelal",
                  quote: "She was the Goddess of Love. It's nice that love comes on first thing in the evening, and goes out last in the morning. Love keeps the light on all night <br><br>- Catherynne Valente"
                },
                {
                  naam: "Mercurius",
                  icoon: "icons/Mercurius.png",
                  map: "Heelal",
                  quote: "I had rather be Mercury, the smallest among seven, resolving round the sun, than the first among five revolving round Saturn <br><br>- Johann von Goethe"
                }
              ]
          },
            {
              input: ["Water", "Meer"],
              output: [
                {
                  naam: "Zee",
                  icoon: "icons/Zee.png",
                  map: "Water",
                  quote: "Water is the driving force of all nature<br><br>- Leonardo da Vinci"
                }
              ]
            },
              {
                input: ["Vuur", "Water"],
                output: [
                  {
                    naam: "Damp",
                    icoon: "icons/Damp.png",
                    map: "Lucht",
                    quote: "Enthusiasm is the steam that drives the engine<br><br>- Napoleon Hill"
                  }
                ]
              }
];

const groepsIconen = {
  "Heelal": "icons/Heelal.png",
  "Krachten": "icons/Krachten.png",
  "Chemie": "icons/Chemie.png",
  "Lucht": "icons/Lucht.png",
  "Water": "icons/Water.png",
  "Aarde": "icons/Aarde.png",
  "Vuur": "icons/Vuur.png"
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

  // 🔥 BELANGRIJK: container leegmaken
  container.innerHTML = "";

  // 🔥 ALTIJD alles opnieuw maken
  mappen.forEach((_, idx) => createGroupElement(container, side, idx));

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
    
      if (isLeft) leftOpenGroup = null;
      else rightOpenGroup = null;
    
      if (isLeft) leftSelectedElement = null;
      else rightSelectedElement = null;
    
      elementsContainer.innerHTML = "";
    
      renderGroups(side);
    
      return;
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
  
    const leftEl = document.querySelector("#left-elements-container .selected");
    const rightEl = document.querySelector("#right-elements-container .selected");
  
    if (leftEl && rightEl) {
  
      isCombining = true; // 🔒 tijdelijk blokkeren
  
      leftEl.classList.remove("selected");
      rightEl.classList.remove("selected");
  
      leftEl.classList.add("error");
      rightEl.classList.add("error");
  
      setTimeout(() => {
        leftSelectedElement = null;
        rightSelectedElement = null;
  
        renderLeftElements();
        renderRightElements();
  
        isCombining = false; // 🔓 weer vrijgeven
      }, 600);
    }
  
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

  leftSelectedElement = null;
  rightSelectedElement = null;

  showNewElement(combi);

  }, 800);
}

function showNewElement(combi) {
  const overlay = document.createElement("div");
  overlay.id = "result-overlay";
  overlay.style.background = `
    linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)),
    url('afb/beginscherm.png')
  `;
  overlay.style.backgroundPosition = "center";
  overlay.style.backgroundSize = "cover";
  overlay.style.backgroundRepeat = "no-repeat";

  // container voor meerdere elementen
  let innerHTML = '<div class="result-grid">';
  
  combi.output.forEach(el => {
    innerHTML += `
      <div class="result-box">
        <img src="${el.icoon}" class="result-image">
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
        icoon: groepsIconen[el.map] || "icons/default.png", // gebruik icoon van het element
        elementen: []
      };
      mappen.push(map);

      // Markeer dat deze map nieuw is
      map.isNew = true;
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
