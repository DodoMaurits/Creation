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
let openLeftMaps = [];   // maps links
let openRightMaps = [];  // maps rechts
let selectedElement = null;

// ---------------- INIT ----------------
function init() {
  const container = document.getElementById("maps-container");
  container.innerHTML = "";

  mappen.forEach((map, idx) => {
    const div = document.createElement("div");
    div.className = "map";
    div.dataset.index = idx;
    div.dataset.name = map.naam;
    div.innerHTML = `<img src="${map.icoon}" alt="">`;
    div.style.position = "absolute";
    div.style.width = "100px";
    div.style.height = "100px";
    div.style.transition = "all 0.4s ease";

    div.addEventListener("click", () => {
      const index = idx;

      // --------- SLUITEN LINKS ---------
      if (openLeftMaps.includes(index)) {
        openLeftMaps = openLeftMaps.filter(i => i !== index);
      }
      // --------- SLUITEN RECHTS ---------
      else if (openRightMaps.includes(index)) {
        openRightMaps = openRightMaps.filter(i => i !== index);
      }
      // --------- OPENEN ---------
      else {
        if (openLeftMaps.length === 0) {
          // Open links
          openLeftMaps.push(index);

          // Voeg meteen kopie toe rechts als die nog niet bestaat
          if (!openRightMaps.includes(index)) openRightMaps.push(index);
        } else if (openRightMaps.length === 0) {
          // Open rechts
          openRightMaps.push(index);
        } else {
          // Beide helften al vol → optioneel nog kopie rechts
          if (!openRightMaps.includes(index)) openRightMaps.push(index);
        }
      }

      // Reset geselecteerd element
      selectedElement = null;

      // Update posities van mappen en render de elementen
      updateMapPositions();
      renderElements();
    });

    container.appendChild(div);
  });

  // Eerste render
  updateMapPositions();
  renderElements();
}

// ---------------- UPDATE MAP POSITIES ----------------
function updateMapPositions() {
  const maps = document.querySelectorAll(".map");
  const screenW = window.innerWidth;
  const screenH = window.innerHeight;

  const size = 100;
  const gap = 20;
  const maxPerRow = 4;

  // Gesloten mappen verzamelen
  const closed = [];
  maps.forEach((_, i) => {
    if (!openLeftMaps.includes(i) && !openRightMaps.includes(i)) closed.push(i);
  });

  // ========== CLOSED MAPS POSITIES ==========
  const rowsClosed = Math.ceil(closed.length / maxPerRow);
  const totalHeightClosed = rowsClosed * size + (rowsClosed - 1) * gap;
  const startTopClosed = (screenH - totalHeightClosed) / 2;

  maps.forEach((div, i) => {
    let top, left;

    // ----- LINKER OPEN MAPS -----
    if (openLeftMaps.includes(i)) {
      const idx = openLeftMaps.indexOf(i);
      const row = Math.floor(idx / maxPerRow);
      const col = idx % maxPerRow;
      const itemsInRow = Math.min(maxPerRow, openLeftMaps.length - row * maxPerRow);
      const rowWidth = itemsInRow * size + (itemsInRow - 1) * gap;
    
      top = 20 + row * (size + gap);
      left = screenW / 4 - rowWidth / 2 + col * (size + gap); // midden linkerhelft
    }
    // ----- RECHTER OPEN MAPS -----
    else if (openRightMaps.includes(i)) {
      const idx = openRightMaps.indexOf(i);
      const row = Math.floor(idx / maxPerRow);
      const col = idx % maxPerRow;
      const itemsInRow = Math.min(maxPerRow, openRightMaps.length - row * maxPerRow);
      const rowWidth = itemsInRow * size + (itemsInRow - 1) * gap;
    
      top = 20 + row * (size + gap);
      left = screenW * 0.75 - rowWidth / 2 + col * (size + gap); // midden rechterhelft
    }
    // ----- GESLOTEN MAPS -----
    else {
      const idx = closed.indexOf(i);
      const row = Math.floor(idx / maxPerRow);
      const col = idx % maxPerRow;

      const itemsInRow = Math.min(maxPerRow, closed.length - row * maxPerRow);
      const rowWidth = itemsInRow * size + (itemsInRow - 1) * gap;

      top = startTopClosed + row * (size + gap);

      // Bepaal in welke helft gesloten maps gecentreerd moeten worden
      if (openLeftMaps.length > 0 && openRightMaps.length === 0) {
        // Alleen linker open → andere mappen naar rechterhelft
        const halfStart = screenW / 2;
        const halfWidth = screenW / 2;
        left = halfStart + (halfWidth - rowWidth) / 2 + col * (size + gap);
      } else if (openRightMaps.length > 0 && openLeftMaps.length === 0) {
        // Alleen rechter open → andere mappen naar linkerhelft
        const halfStart = 0;
        const halfWidth = screenW / 2;
        left = halfStart + (halfWidth - rowWidth) / 2 + col * (size + gap);
      } else if (openLeftMaps.length > 0 && openRightMaps.length > 0) {
        // Beide open → verdeel gesloten mappen over linker + rechter
        const halfWidth = screenW / 2;
        if (idx < Math.ceil(closed.length / 2)) {
          left = (halfWidth - rowWidth) / 2 + col * (size + gap); // linkerhelft
        } else {
          left = halfWidth + (halfWidth - rowWidth) / 2 + col * (size + gap); // rechterhelft
        }
      } else {
        // Geen open maps → alles gecentreerd over hele scherm
        left = (screenW - rowWidth) / 2 + col * (size + gap);
      }
    }

    div.style.top = top + "px";
    div.style.left = left + "px";
  });
}

// ---------------- RENDER ELEMENTEN ----------------
function renderElements() {

  const leftContainer = document.getElementById("left-elements");
  const rightContainer = document.getElementById("right-elements");

  leftContainer.innerHTML = "";
  rightContainer.innerHTML = "";

  // ---------------- LINKER MAPS ----------------
  openLeftMaps.forEach(idx => {
    const elements = mappen[idx].elementen;

    elements.forEach(el => {
      const div = document.createElement("div");
      div.className = "element";
      div.dataset.name = el.naam;
      div.innerHTML = `<img src="${el.icoon}" alt="${el.naam}">`;

      leftContainer.appendChild(div);

      setTimeout(() => div.classList.add("show"), 10);

      div.addEventListener("click", () => handleElementClick(el.naam, div));
    });
  });

  // ---------------- RECHTER MAPS ----------------
  openRightMaps.forEach(idx => {
    const elements = mappen[idx].elementen;

    elements.forEach(el => {
      const div = document.createElement("div");
      div.className = "element";
      div.dataset.name = el.naam;
      div.innerHTML = `<img src="${el.icoon}" alt="${el.naam}">`;

      rightContainer.appendChild(div);

      setTimeout(() => div.classList.add("show"), 10);

      div.addEventListener("click", () => handleElementClick(el.naam, div));
    });
  });
}

function handleElementClick(name, div) {

  if (!selectedElement) {
    selectedElement = name;
    div.classList.add("selected");
  } else {

    combineElements(selectedElement, name);

    document.querySelectorAll(".element").forEach(el => {
      el.classList.remove("selected");
    });

    selectedElement = null;
  }
}

// ---------------- COMBINATIE LOGICA ----------------
function combineElements(e1, e2) {

  const combo = combinaties.find(c =>
    (c.input[0] === e1 && c.input[1] === e2) ||
    (c.input[0] === e2 && c.input[1] === e1)
  );

  // Geen combinatie
  if (!combo) {
    const leftContainer = document.getElementById("left-elements");
    const elements = leftContainer.querySelectorAll(".element.selected");

    elements.forEach(elDiv => {
      elDiv.classList.remove("selected");   // stopt de shake animatie
      elDiv.classList.add("error");         // korte error-shake animatie
      setTimeout(() => elDiv.classList.remove("error"), 600); // verwijdert error na animatie
    });

    selectedElement = null;
    return;
  }

  combo.output.forEach(out => {

    let mapObj = mappen.find(m => m.naam === out.map);

    if (!mapObj) {
      mapObj = {
        naam: out.map,
        icoon: `icons/${out.map}.png`,
        elementen: []
      };
      mappen.push(mapObj);
      init(); // nieuwe map renderen
    }

    if (!mapObj.elementen.find(el => el.naam === out.naam)) {
      mapObj.elementen.push({
        naam: out.naam,
        icoon: out.icoon
      });

      alert(`Nieuw element ontdekt: ${out.naam}!\n\n${out.quote}`);
    }

  });

  updateMapPositions();
  renderElements();
}

// ---------------- RESIZE ----------------
window.addEventListener("resize", () => {
  updateMapPositions();
  renderElements();
});

// ---------------- START ----------------
init();
