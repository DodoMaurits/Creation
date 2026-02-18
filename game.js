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

// ----- STATE -----
let openLeft = null;
let openRight = null;
let selected = [];

// ----- DOM -----
const closedContainer = document.getElementById("closed-container");
const leftSide = document.getElementById("left-side");
const rightSide = document.getElementById("right-side");

// ----- INIT -----
renderClosed();

// ----- RENDER CLOSED MAPS -----
function renderClosed() {
  closedContainer.innerHTML = "";
  closedContainer.className = "";

  const grid = document.createElement("div");
  grid.className = "grid";

  mappen.forEach(map => {
    const img = document.createElement("img");
    img.src = map.icoon;
    img.className = "icon";
    img.onclick = () => openMap(map);
    grid.appendChild(img);
  });

  closedContainer.appendChild(grid);
}

// ----- OPEN MAP -----
function openMap(map) {
  if (!openLeft) {
    openLeft = map;
    renderSide(leftSide, map, "left");
    closedContainer.classList.add("right");
  } else if (!openRight) {
    openRight = map;
    renderSide(rightSide, map, "right");
    closedContainer.style.display = "none";
  }
}

// ----- RENDER SIDE -----
function renderSide(container, map, side) {
  container.innerHTML = "";
  container.classList.remove("hidden");

  const title = document.createElement("img");
  title.src = map.icoon;
  title.className = "icon map-title";
  title.onclick = () => closeMap(side);
  container.appendChild(title);

  const grid = document.createElement("div");
  grid.className = "grid";

  map.elementen.forEach(el => {
    const img = document.createElement("img");
    img.src = el.icoon;
    img.className = "icon";
    img.onclick = () => toggleSelect(el, img);
    grid.appendChild(img);
  });

  container.appendChild(grid);
}

// ----- CLOSE MAP -----
function closeMap(side) {
  if (side === "left") {
    openLeft = null;
    leftSide.classList.add("hidden");
    closedContainer.style.display = "block";
    closedContainer.className = "left";
  } else {
    openRight = null;
    rightSide.classList.add("hidden");
    closedContainer.style.display = "block";
    closedContainer.className = "right";
  }

  if (!openLeft && !openRight) {
    closedContainer.className = "";
  }
}

// ----- SELECT ELEMENT -----
function toggleSelect(el, img) {
  const index = selected.findIndex(e => e.naam === el.naam);

  if (index > -1) {
    selected.splice(index, 1);
    img.classList.remove("selected");
  } else {
    if (selected.length === 2) return;
    selected.push(el);
    img.classList.add("selected");
  }

  if (selected.length === 2) {
    checkCombination();
  }
}

// ----- CHECK COMBINATIONS -----
function checkCombination() {
  const names = selected.map(e => e.naam);

  const match = combinaties.find(c =>
    c.input.every(i => names.includes(i))
  );

  if (!match) {
    alert("Geen geldige combinatie");
    selected = [];
    document.querySelectorAll(".selected").forEach(el =>
      el.classList.remove("selected")
    );
    return;
  }

  match.output.forEach(newEl => {
    let map = mappen.find(m => m.naam === newEl.map);

    if (!map) {
      map = {
        naam: newEl.map,
        icoon: groepsIconen[newEl.map],
        elementen: []
      };
      mappen.push(map);
    }

    if (!map.elementen.find(e => e.naam === newEl.naam)) {
      map.elementen.push(newEl);
    }
  });

  alert("Nieuwe elementen ontdekt!");
  selected = [];
  document.querySelectorAll(".selected").forEach(el =>
    el.classList.remove("selected")
  );
}
