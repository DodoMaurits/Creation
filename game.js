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
              quote: "Make your heart like a lake <br>with a calm, still surface and great depths of kindness<br><br>- Lao Tzu"
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
              map: "Lucht",
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
                icoon: "icons/Uranus.png",
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
  updateGlobalLayout();
}

// ---------------- GLOBAL LAYOUT ----------------
function layoutGroups(side) {
  const container = document.getElementById(side + "-maps");
  const openGroup = side === "left" ? leftOpenGroup : rightOpenGroup;
  const groups = container.querySelectorAll(".map");
  const elementsContainer = document.getElementById(side + "-elements-container");

  // 🟢 FLIP stap 1: meet oude posities
  const firstRects = Array.from(groups).map(map => map.getBoundingClientRect());

  // pas layout aan
  if (openGroup !== null) {
    // Open groep → alleen deze zichtbaar
    groups.forEach((groupDiv, idx) => {
      groupDiv.style.display = idx === openGroup ? "flex" : "none";
    });

    elementsContainer.style.display = "grid";
    renderElements(side);

    requestAnimationFrame(() => {
      elementsContainer.classList.add("show");
    });

  } else {
    // Geen groep open → alles tonen en centreren
    groups.forEach(groupDiv => {
      groupDiv.style.display = "flex";
      groupDiv.classList.remove("open");
    });

    container.style.display = "flex";
    container.style.justifyContent = "center";
    container.style.alignItems = "center";
    container.style.gap = "20px";

    elementsContainer.innerHTML = "";
    elementsContainer.style.display = "none";
    elementsContainer.classList.remove("show");
  }

  // 🟢 FLIP stap 2: meet nieuwe posities
  const lastRects = Array.from(groups).map(map => map.getBoundingClientRect());

  // stap 3: invert + play
  groups.forEach((map, i) => {
    const dx = firstRects[i].left - lastRects[i].left;
    const dy = firstRects[i].top - lastRects[i].top;

    map.style.transform = `translate(${dx}px, ${dy}px)`;
    map.style.transition = "transform 0s";

    requestAnimationFrame(() => {
      map.style.transition = "transform 0.5s ease";
      map.style.transform = "translate(0,0)";
    });
  });
}

// ---------------- RENDER GROEPEN ----------------
function renderGroups(side) {
  const container = document.getElementById(side + "-maps");
  const panel = document.getElementById(side + "-panel");
  const openGroup = side === "left" ? leftOpenGroup : rightOpenGroup;

  // container leegmaken
  container.innerHTML = "";

  // maak alle mappen
  mappen.forEach((_, idx) => createGroupElement(container, side, idx));

  // update panel class
  if (openGroup === null) panel.classList.add("no-open");
  else panel.classList.remove("no-open");

  // layout de groepen
  layoutGroups(side);
}

function updateGlobalLayout() {
  renderGroups("left");
  renderGroups("right");
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

    // SLUITEN
    if ((isLeft && leftOpenGroup === idx) || (!isLeft && rightOpenGroup === idx)) {
      if (isLeft) leftOpenGroup = null;
      else rightOpenGroup = null;
      leftSelectedElement = null;
      rightSelectedElement = null;
      updateGlobalLayout();
      return;
    }

    // OPENEN
    if (isLeft) leftOpenGroup = idx;
    else rightOpenGroup = idx;

    leftSelectedElement = null;
    rightSelectedElement = null;
    updateGlobalLayout();
  });

  container.appendChild(div);
}

// ---------------- RENDER ELEMENTEN ----------------
function renderElements(side) {
  const container = document.getElementById(side + "-elements-container");
  container.innerHTML = "";
  const openGroup = side === "left" ? leftOpenGroup : rightOpenGroup;
  if (openGroup === null) return;

  mappen[openGroup].elementen.forEach(el => {
    const div = document.createElement("div");
    div.className = "element";
    div.dataset.name = el.naam;
    div.innerHTML = `<img src="${el.icoon}" alt="${el.naam}">`;

    const selected = (side === "left" ? leftSelectedElement : rightSelectedElement);
    if (el.naam === selected) div.classList.add("selected");

    div.addEventListener("click", () => {
      if (side === "left") leftSelectedElement = leftSelectedElement === el.naam ? null : el.naam;
      else rightSelectedElement = rightSelectedElement === el.naam ? null : el.naam;

      renderElements(side);
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
    if (!leftEl || !rightEl) return;

    isCombining = true;
    leftEl.classList.remove("selected"); leftEl.classList.add("error");
    rightEl.classList.remove("selected"); rightEl.classList.add("error");

    setTimeout(() => {
      leftSelectedElement = null;
      rightSelectedElement = null;
      renderElements("left");
      renderElements("right");
      isCombining = false;
    }, 600);
    return;
  }
}

// ---------------- START ----------------
window.onload = init;
