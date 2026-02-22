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
            quote: "Hydrogen is a light, odorless gas, which, given enough time, turns into people <br><br>- Edward Harrison"
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
            quote: "Water is the softest thing, yet it can penetrate mountains and earth. This shows clearly the principle of softness overcoming hardness <br><br>- Lao Tzu"
          }
        ]
      },
      {
        input: ["Ster", "Zwaartekracht"],
        output: [
          {
            naam: "Supernova",
            icoon: "icons/Supernova.png",
            map: "Heelal",
            quote: "A supernova is one of the most powerful explosions in the universe. It's so luminous, it can be seen across billions of light years. It releases as much energy in an instant as our sun will produce over its 10-billion-year lifetime<br><br>- Neil Tyson"
          },
          {
            naam: "IJzer",
            icoon: "icons/IJzer.png",
            map: "Chemie",
            quote: "Do not wait to strike till the iron is hot but make it hot by striking <br><br>-William Yeatsu"
          }
        ]
      },
        {
        input: [
          ["Ster", "Gas"],
          ["Ster", "IJzer"]
        ],
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
          input: [
            ["Water", "IJzer"],
            ["Lucht", "IJzer"]
          ],
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
                quote: "I believe in black holes. I believe that as the universe empties into nothingness, past and future will smack together in the last swirl around the drain<br><br>- Abraham Verghese"
              }
            ]
          },
            {
          input: [
            ["Asteroïden", "Planeet"], 
            ["Asteroïden", "De Aarde"], ["Asteroïden", "Mars"], ["Asteroïden", "Venus"], ["Asteroïden", "Mercurius"], ["Asteroïden", "De Maan"]
          ],
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
              input: [
                ["Water", "Meer"],
                ["Meer", "Meer"]
              ],
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
              input: ["Vuur", "IJs"],
              output: [
                {
                  naam: "Water",
                  icoon: "icons/Water.png",
                  map: "Water",
                  quote: "Water is the softest thing, yet it can penetrate mountains and earth. This shows clearly the principle of softness overcoming hardness <br><br>- Lao Tzu"
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
            },
              {
                input: ["Lava", "Kou"],
                output: [
                  {
                    naam: "Graniet",
                    icoon: "icons/Graniet.png",
                    map: "Aarde",
                    quote: "The block of granite which was an obstacle in the pathway of the weak, became a stepping-stone in the pathway of the strong <br><br>- Thomas Carlyle"
                  },
                  {
                    naam: "Basalt",
                    icoon: "icons/Basalt.png",
                    map: "Aarde",
                    quote: "Every changes, even stone <br><br>Claude Monet"
                  },
                  {
                    naam: "Obsidiaan",
                    icoon: "icons/Obsidiaan.png",
                    map: "Aarde",
                    quote: "Eyes as black and as shiny as chips of obsidian stared back into his. They were eyes like black holes, letting nothing out, not even information <br><br>- Neil Gaiman"
                  }
                ]
            },
              {
                input: ["De Aarde", "Planeet"],
                output: [
                  {
                    naam: "De Maan",
                    icoon: "icons/Maan.png",
                    map: "Heelal",
                    quote: "I always look up at the moon and see it as the single most romantic place within the cosmos <br><br>- Tom Hanks"
                  }
                ]
            },
              {
                input: ["Lava", "Water"],
                output: [
                  {
                    naam: "Damp",
                    icoon: "icons/Damp.png",
                    map: "Lucht",
                    quote: "Enthusiasm is the steam that drives the engine<br><br>- Napoleon Hill"
                  },
                  {
                    naam: "Basalt",
                    icoon: "icons/Basalt.png",
                    map: "Aarde",
                    quote: "Every changes, even stone <br><br>- Claude Monet"
                  }
                ]
            },
              {
                input: [
                  ["Zee", "Warmte"],
                  ["Zee", "Lava"]
                ],
                output: [
                  {
                    naam: "Zout",
                    icoon: "icons/Zout.png",
                    map: "Chemie",
                    quote: "Salt is born of the purest parents: the sun and the sea <br><br>- Pythagoras"
                  },
                  {
                    naam: "Gipssteen",
                    icoon: "icons/Gipssteen.png",
                    map: "Aarde",
                    quote: "Rocks are the books of the earth <br><br>- Charles Lyell"
                  },
                  {
                    naam: "Damp",
                    icoon: "icons/Damp.png",
                    map: "Lucht",
                    quote: "Enthusiasm is the steam that drives the engine<br><br>- Napoleon Hill"
                  }
                ]
            },
              {
                input: [
                  ["Zee", "Water"],
                  ["Zee", "Zee"]
                ],
                output: [
                  {
                    naam: "Oceaan",
                    icoon: "icons/Oceaan.png",
                    map: "Water",
                    quote: "Individually, we are one drop. Together, we are an ocean <br><br>- Ryunosuke Akutagawa"
                  }
                ]
            },
              {
                input: [
                  ["Graniet", "Water"], ["Graniet", "Meer"], ["Graniet", "Zee"], ["Graniet", "Oceaan"],
                  ["Basalt", "Water"], ["Basalt", "Meer"], ["Basalt", "Zee"], ["Basalt", "Oceaan"],
                  ["Gneis", "Water"], ["Gneis", "Meer"], ["Gneis", "Zee"], ["Gneis", "Oceaan"], ["Gneis", "Rivier"]
                ],
                output: [
                  {
                    naam: "Zand",
                    icoon: "icons/Zand.png",
                    map: "Aarde",
                    quote: "Our life is but a grain of sand in the indifferent ocean of infinity <br><br>- Sergei Devlatov"
                  },
                  {
                    naam: "Klei",
                    icoon: "icons/Klei.png",
                    map: "Aarde",
                    quote: "Clay is used to make vases. But where there is no clay is where it is useful <br><br>- Lao Tzu"
                  }
                ]
            },
              {
                input: [
                  ["Graniet", "Lava"],
                  ["Basalt", "Lava"]
                ],
                output: [
                  {
                    naam: "Platentektoniek",
                    icoon: "icons/Platentektoniek.png",
                    map: "Krachten",
                    quote: "Loyalties shifting like the earth's tectonic plates ... changing my loves shape <br><br>- Ranata Suzuki"
                  },
                  {
                    naam: "Granietmagma",
                    icoon: "icons/Granietmagma.png",
                    map: "Vuur",
                    quote: "Of course the entire planet Earth consists of magma under us, and only the very inner-core is different <br><br>- Werner Herzog"
                  }
                ]
            },
              {
                input: [
                  ["Obsidiaan", "Water"], ["Obsidiaan", "Meer"],
                  ["Rivier", "Obsidiaan"]
                ],
                output: [
                  {
                    naam: "Glas",
                    icoon: "icons/Glas.png",
                    map: "Aarde",
                    quote: "Some days seem to fit together like a stained glass window. A hundred little pieces of different color and mood that, when combined, create a complete picture <br><br>- Maggie Stiefvater"
                  },
                  {
                    naam: "Klei",
                    icoon: "icons/Klei.png",
                    map: "Aarde",
                    quote: "Clay is used to make vases. But where there is no clay is where it is useful <br><br>- Lao Tzu"
                  }
                ]
            },
              {
                input: [
                  ["Obsidiaan", "Zee"], ["Obsidiaan", "Oceaan"],
                  ["Kleisteen", "Water"], ["Kleisteen", "Meer"], ["Kleisteen", "Zee"], ["Kleisteen", "Oceaan"],
                  ["Kleisteen", "Regen"], ["Kleisteen", "Zure regen"], ["Kleisteen", "Rivier"],
                  ["Schalie", "Water"], ["Schalie", "Meer"], ["Schalie", "Zee"], ["Schalie", "Oceaan"],
                  ["Schalie", "Regen"], ["Schalie", "Rivier"],
                  ["Leisteen", "Water"], ["Leisteen", "Meer"], ["Leisteen", "Zee"], ["Leisteen", "Oceaan"],
                  ["Leisteen", "Regen"], ["Leisteen", "Rivier"],
                  ["Fylliet", "Water"], ["Fylliet", "Meer"], ["Fylliet", "Zee"], ["Fylliet", "Oceaan"], ["Fylliet", "Rivier"],
                  ["Schist", "Water"], ["Schist", "Meer"], ["Schist", "Zee"], ["Schist", "Oceaan"], ["Schist", "Rivier"]
                ],
                output: [
                  {
                    naam: "Klei",
                    icoon: "icons/Klei.png",
                    map: "Aarde",
                    quote: "Clay is used to make vases. But where there is no clay is where it is useful <br><br>- Lao Tzu"
                  }
                ]
            },
              {
                input: ["Damp", "Zwaartekracht"],
                output: [
                  {
                    naam: "Wolk",
                    icoon: "icons/Wolk.png",
                    map: "Lucht",
                    quote: "The sky and the sun are always there. It's the clouds that come and go <br><br>- Rachel Joyce"
                  }
                ]
            },
              {
                input: [
                  ["Damp", "Planeet"], ["Damp", "De Aarde"],
                  ["Wolk", "De Aarde"]
                ],
                output: [
                  {
                    naam: "Lucht",
                    icoon: "icons/Lucht (Sky).png",
                    map: "Lucht",
                    quote: "Stars are holes in the sky from which the light of the infinite shines <br><br>- Confucius"
                  }
                ]
            },
              {
                input: [
                  ["De Maan", "Water"], ["De Maan", "Meer"], ["De Maan", "Zee"], ["De Maan", "Oceaan"],
                  ["Wind", "Water"], ["Wind", "Meer"], ["Wind", "Zee"], ["Wind", "Oceaan"]
                ],
                output: [
                  {
                    naam: "Golf",
                    icoon: "icons/Golf.png",
                    map: "Water",
                    quote: "You don't understand. You're not a wave. You're part of the ocean <br><br>- Morrie Schwartz"
                  }
                ]
            },
              {
                input: [
                  ["Gipssteen", "Water"], ["Gipssteen", "Meer"], ["Gipssteen", "Zee"], ["Gipssteen", "Oceaan"],
                  ["Rivier", "Gipssteen"]
                ],
                output: [
                  {
                    naam: "Gips",
                    icoon: "icons/Gips.png",
                    map: "Aarde",
                    quote: "The broken bone, once set together, is stronger than ever <br><br>- John Lyly"
                  }
                ]
            },
              {
                input: ["Zand", "Zand"],
                output: [
                  {
                    naam: "Woestijn",
                    icoon: "icons/Woestijn.png",
                    map: "Landschap",
                    quote: "If the desert is holy, it is because it is a forgotten place that allows us to remember the sacred <br><br>- Terry Williams"
                  }
                ]
            },
              {
                input: ["Platentektoniek", "Lava"],
                output: [
                  {
                    naam: "Vulkaan",
                    icoon: "icons/Vulkaan.png",
                    map: "Landschap",
                    quote: "Remind me that the most fertile lands were built by the fires of volcanoes <br><br>- Andrea Gibson"
                  },
                  {
                    naam: "As",
                    icoon: "icons/As.png",
                    map: "Vuur",
                    quote: "Ashes to ashes. Dust to dust. We are nothing, but dust and to dust we shall return <br><br>- Alexander Anderson"
                  }
                ]
            },
              {
                input: [
                  ["Platentektoniek", "Graniet"],
                  ["Platentektoniek", "Basalt"]
                ],
                output: [
                  {
                    naam: "Berg",
                    icoon: "icons/Berg.png",
                    map: "Landschap",
                    quote: "Swift as the wind. Quiet as the forest. Conquer like the fire. Steady as the mountain  <br><br>- Sun Tzu"
                  }
                ]
            },
              {
                input: [
                  ["Granietmagma", "Kou"],
                  ["Granietmagma", "Water"]
                ],
                output: [
                  {
                    naam: "Magmadamp",
                    icoon: "icons/Magmadamp.png",
                    map: "Vuur",
                    quote: "The gases that igneous rocks contain, probably as essential features of the molten magma <br><br>- A.J. Grenville"
                  },
                  {
                    naam: "Kwarts",
                    icoon: "icons/Kwarts.png",
                    map: "Aarde",
                    quote: "Quartz is as hard as anything it is likely to meet with in use <br><br>- Frank Wade"
                  },
                  {
                    naam: "Mica",
                    icoon: "icons/Mica.png",
                    map: "Aarde",
                    quote: "That great dark bit out there is mica, and all this that runs in a vein like is quartz. Quartz and mica are the natural home of gold <br><br>- Charles Reade"
                  },
                  {
                    naam: "Veldspaat",
                    icoon: "icons/Veldspaat.png",
                    map: "Aarde",
                    quote: "Even the hardest rock can be worn away by water <br><br>- Lucretius"
                  }
                ]
            },
             {
                input: [
                  ["Wolk", "Zwaartekracht"],
                  ["Wolk", "Water"],
                  ["Wolk", "Berg"]
                ],
                output: [
                  {
                    naam: "Regen",
                    icoon: "icons/Regen.png",
                    map: "Water",
                    quote: "It can't rain all the time <br><br>- James O'Barr"
                  }
                ]
            },
             {
                input: [
                  ["Wolk", "Rook"],
                  ["Regen", "Rook"]
                ],
                output: [
                  {
                    naam: "Zure regen",
                    icoon: "icons/Zure_regen.png",
                    map: "Water",
                    quote: "Tragedy is like strong acid - it dissolves away all but the very gold of truth <br><br>- D.H. Lawrence"
                  }
                ]
            },
             {
                input: [
                  ["Wolk", "Wolk"],
                  ["Wind", "Wolk"], 
                  ["Wind", "Wind"]
                ],
                output: [
                  {
                    naam: "Storm",
                    icoon: "icons/Storm.png",
                    map: "Lucht",
                    quote: "If you want to see the sunshine, you have to weather the storm <br><br>- Frank Lane"
                  },
                  {
                    naam: "Bliksem",
                    icoon: "icons/Bliksem.png",
                    map: "Vuur",
                    quote: "Serenity is not freedom from the storm, but peace amid the storm <br><br>- Barbara West"
                  }
                ]
            },
             {
                input: [
                  ["Lucht", "Warmte"],
                  ["Lucht", "Kou"]
                ],
                output: [
                  {
                    naam: "Wind",
                    icoon: "icons/Wind.png",
                    map: "Lucht",
                    quote: "Sunshine is delicious, rain is refreshing, wind braces us up, sonw is exhilarating: there is really no such thing as bad weather, only different kinds of good weather <br><br>- John Ruskin"
                  }
                ]
            },
             {
                input: ["Lucht", "Vuur"],
                output: [
                  {
                    naam: "Rook",
                    icoon: "icons/Rook.png",
                    map: "Lucht",
                    quote: "Surely where there's smoke there's fire? No, where there's so much smoke there's smoke<br><br>- John Wheeler"
                  }
                ]
            },
             {
                input: [
                  ["Vulkaan", "Oceaan"],
                  ["Berg", "Oceaan"]
                ],
                output: [
                  {
                    naam: "Eiland",
                    icoon: "icons/Eiland.png",
                    map: "Landschap",
                    quote: "We are like islands in the sea, separate on the surface but connected in the deep <br><br>- William James"
                  }
                ]
            },
             {
                input: ["As", "Water"],
                output: [
                  {
                    naam: "Tufsteen",
                    icoon: "icons/Tufsteen.png",
                    map: "Aarde",
                    quote: "Life is not tough as rocks, it is as simple as your brain perceives <br><br>- Myra Yadav"
                  }
                ]
            },
             {
                input: ["Berg", "Zee"],
                output: [
                  {
                    naam: "Kust",
                    icoon: "icons/Kust.png",
                    map: "Landschap",
                    quote: "Because there's nothing more beautiful than the way the ocean refuses to stop kissing the shoreline, no matter how many times it's sent away <br><br>- Sarah Kay"
                  }
                ]
            },
              {
                input: [
                  ["Magmadamp", "Kou"],
                  ["Regen", "Magmadamp"]
                ],
                output: [
                  {
                    naam: "Koper",
                    icoon: "icons/Koper.png",
                    map: "Chemie",
                    quote: "Through love scraps of copper are turned to gold <br><br>- Rumi"
                  },
                  {
                    naam: "Zilver",
                    icoon: "icons/Zilver.png",
                    map: "Chemie",
                    quote: "Silver is purified in fire and so are we. It is in the most trying times that our real character is shaped and revealed <br><br>- Helen Keller"
                  },
                  {
                    naam: "Goud",
                    icoon: "icons/Goud.png",
                    map: "Chemie",
                    quote: "Praise, like gold and diamonds, owes its value only to its scarcity <br><br>- Samuel Johnson"
                  },
                  {
                    naam: "Lood",
                    icoon: "icons/Lood.png",
                    map: "Chemie",
                    quote: "Lead is slow, elated, and resolved <br><br>- Arthur Rimbaud"
                  },
                  {
                    naam: "Zink",
                    icoon: "icons/Zink.png",
                    map: "Chemie",
                    quote: "Zinc is gray and its salts are colorless... in short, it is a boring metal<br><br>- Primo Levi"
                  },
                  {
                    naam: "Tin",
                    icoon: "icons/Tin.png",
                    map: "Chemie",
                    quote: "The tin hat shines with a cold reflection, as though it wore the mind of the earth upon its brow <br><br>- D.H. Lawrence"
                  }
                ]
            },
             {
                input: [
                  ["Kwarts", "Water"], ["Kwarts", "Meer"], ["Kwarts", "Zee"], ["Kwarts", "Oceaan"], ["Kwarts", "Regen"], ["Kwarts", "Zure regen"],
                  ["Rivier", "Kwarts"]
                ],
                output: [
                  {
                    naam: "Zand",
                    icoon: "icons/Zand.png",
                    map: "Aarde",
                    quote: "Our life is but a grain of sand in the indifferent ocean of infinity <br><br>- Sergei Devlatov"
                  }
                ]
            },
              {
                input: [
                  ["Mica", "Water"], ["Mica", "Meer"], ["Mica", "Zee"], ["Mica", "Oceaan"], ["Mica", "Regen"],
                  ["Veldspaat", "Water"], ["Veldspaat", "Meer"], ["Veldspaat", "Zee"], ["Veldspaat", "Oceaan"], ["Veldspaat", "Regen"],
                  ["Rivier", "Graniet"], ["Rivier", "Mica"], ["Rivier", "Veldspaat"]
                ],
                output: [
                  {
                    naam: "Klei",
                    icoon: "icons/Klei.png",
                    map: "Aarde",
                    quote: "Clay is used to make vases. But where there is no clay is where it is useful <br><br>- Lao Tzu"
                  }
                ]
            },
              {
                input: ["Regen", "Kou"],
                output: [
                  {
                    naam: "Sneeuw",
                    icoon: "icons/Sneeuw.png",
                    map: "Water",
                    quote: "The first fall of snow is not only an event, it is a magical event. You go to bed in one kind of a world and wake up in another quite different <br><br>- J.B. Priestley"
                  }
                ]
            },
              {
                input: ["Regen", "IJs"],
                output: [
                  {
                    naam: "Hagel",
                    icoon: "icons/Hagel.png",
                    map: "Water",
                    quote: "Life is a hailstorm of distractions. It's not the monster that stops us but the mosquito <br><br>- Robert Allen"
                  }
                ]
            },
              {
                input: ["Regen", "Berg"],
                output: [
                  {
                    naam: "Rivier",
                    icoon: "icons/Rivier.png",
                    map: "Water",
                    quote: "No man ever steps in the same river twice, for it's not the same river and he's not the same man <br><br>- Heraclitus"
                  }
                ]
            }, 
              {
                input: [
                  ["Zure regen", "Graniet"],
                  ["Zure regen", "Basalt"],
                  ["Zure regen", "Gneis"]
                ],
                output: [
                  {
                    naam: "Silicium",
                    icoon: "icons/Silicium.png",
                    map: "Chemie",
                    quote: "Since the Internet of Things is built on silicon, on the tremendous instability of modern electronics, it's built on literal sand <br><br>- Bruce Sterling"
                  }, 
                  {
                    naam: "Kalk",
                    icoon: "icons/Kalk.png",
                    map: "Chemie",
                    quote: "The hills of chalk and limestone rise like the bones of the earth <br><br>- Wendell Berry"
                  },
                  {
                    naam: "Aluminium",
                    icoon: "icons/Aluminium.png",
                    map: "Chemie",
                    quote: "In the dusk of the railway shed, aluminium gleamed like a promise etched in cold light <br><br>- V.S. Naipaul"
                  }, 
                  {
                    naam: "IJzer",
                    icoon: "icons/IJzer.png",
                    map: "Chemie",
                    quote: "Do not wait to strike till the iron is hot but make it hot by striking <br><br>-William Yeatsu"
                  },
                  {
                    naam: "Roest",
                    icoon: "icons/Roest.png",
                    map: "Chemie",
                    quote: "None can destroy iron, but its own rust can. Likewise none can destroy a person, but its own mindset can<br><br>- Ratan Tata"
                  },
                  {
                    naam: "Klei",
                    icoon: "icons/Klei.png",
                    map: "Aarde",
                    quote: "Clay is used to make vases. But where there is no clay is where it is useful <br><br>- Lao Tzu"
                  },
                  {
                    naam: "Zand",
                    icoon: "icons/Zand.png",
                    map: "Aarde",
                    quote: "Our life is but a grain of sand in the indifferent ocean of infinity <br><br>- Sergei Devlatov"
                  }
                ]
            }, 
              {
                input: ["Zure regen", "Obsidiaan"],
                output: [
                  {
                    naam: "Glas",
                    icoon: "icons/Glas.png",
                    map: "Aarde",
                    quote: "Some days seem to fit together like a stained glass window. A hundred little pieces of different color and mood that, when combined, create a complete picture <br><br>- Maggie Stiefvater"
                  },
                  {
                    naam: "Silicium",
                    icoon: "icons/Silicium.png",
                    map: "Chemie",
                    quote: "Since the Internet of Things is built on silicon, on the tremendous instability of modern electronics, it's built on literal sand <br><br>- Bruce Sterling"
                  }, 
                  {
                    naam: "Kalk",
                    icoon: "icons/Kalk.png",
                    map: "Chemie",
                    quote: "The hills of chalk and limestone rise like the bones of the earth <br><br>- Wendell Berry"
                  },
                  {
                    naam: "Aluminium",
                    icoon: "icons/Aluminium.png",
                    map: "Chemie",
                    quote: "In the dusk of the railway shed, aluminium gleamed like a promise etched in cold light <br><br>- V.S. Naipaul"
                  }, 
                  {
                    naam: "IJzer",
                    icoon: "icons/IJzer.png",
                    map: "Chemie",
                    quote: "Do not wait to strike till the iron is hot but make it hot by striking <br><br>-William Yeatsu"
                  },
                  {
                    naam: "Roest",
                    icoon: "icons/Roest.png",
                    map: "Chemie",
                    quote: "None can destroy iron, but its own rust can. Likewise none can destroy a person, but its own mindset can<br><br>- Ratan Tata"
                  },
                  {
                    naam: "Klei",
                    icoon: "icons/Klei.png",
                    map: "Aarde",
                    quote: "Clay is used to make vases. But where there is no clay is where it is useful <br><br>- Lao Tzu"
                  }
                ]
            },
              {
                input: [ 
                  ["Zure regen", "Mica"],
                  ["Zure regen", "Veldspaat"]
                ],
                output: [
                  {
                    naam: "Silicium",
                    icoon: "icons/Silicium.png",
                    map: "Chemie",
                    quote: "Since the Internet of Things is built on silicon, on the tremendous instability of modern electronics, it's built on literal sand <br><br>- Bruce Sterling"
                  }, 
                  {
                    naam: "Kalk",
                    icoon: "icons/Kalk.png",
                    map: "Chemie",
                    quote: "The hills of chalk and limestone rise like the bones of the earth <br><br>- Wendell Berry"
                  },
                  {
                    naam: "Aluminium",
                    icoon: "icons/Aluminium.png",
                    map: "Chemie",
                    quote: "In the dusk of the railway shed, aluminium gleamed like a promise etched in cold light <br><br>- V.S. Naipaul"
                  }, 
                  {
                    naam: "IJzer",
                    icoon: "icons/IJzer.png",
                    map: "Chemie",
                    quote: "Do not wait to strike till the iron is hot but make it hot by striking <br><br>-William Yeatsu"
                  },
                  {
                    naam: "Klei",
                    icoon: "icons/Klei.png",
                    map: "Aarde",
                    quote: "Clay is used to make vases. But where there is no clay is where it is useful <br><br>- Lao Tzu"
                  }
                ]
            },
              {
                input: [
                  ["Bliksem", "Water"], ["Bliksem", "Meer"], ["Bliksem", "Zee"], ["Bliksem", "Oceaan"], ["Bliksem", "Golf"]
                ],
                output: [
                  {
                    naam: "Leven",
                    icoon: "icons/Leven.png",
                    map: "Krachten",
                    quote: "Life is not a problem to be solved, but a reality to be experienced <br><br>- Søren Kierkegaard"
                  },
                  {
                    naam: "Luca",
                    icoon: "icons/Luca.png",
                    map: "Pril leven",
                    quote: "Life originated in the sea, and about eighty percent of it is still there <br><br>- Isaac Asimov"
                  }
                ]
            },
              {
                input: ["Wind", "Storm"],
                output: [
                  {
                    naam: "Orkaan",
                    icoon: "icons/Orkaan.png",
                    map: "Lucht",
                    quote: "The first rule of hurricane coverage is that every broadcast must begin with palm trees bending in the wind <br><br>- Carl Hiaasen"
                  }
                ]
            },
              {
                input: [
                  ["Tufsteen", "Water"], ["Tufsteen", "Meer"], ["Tufsteen", "Zee"], ["Tufsteen", "Oceaan"], ["Tufsteen", "Regen"],
                  ["Rivier", "Tufsteen"]
                ],
                output: [
                  {
                    naam: "Glas",
                    icoon: "icons/Glas.png",
                    map: "Aarde",
                    quote: "Some days seem to fit together like a stained glass window. A hundred little pieces of different color and mood that, when combined, create a complete picture <br><br>- Maggie Stiefvater"
                  },
                  {
                    naam: "As",
                    icoon: "icons/As.png",
                    map: "Vuur",
                    quote: "Ashes to ashes. Dust to dust. We are nothing, but dust and to dust we shall return <br><br>- Alexander Anderson"
                  },
                  {
                    naam: "Klei",
                    icoon: "icons/Klei.png",
                    map: "Aarde",
                    quote: "Clay is used to make vases. But where there is no clay is where it is useful <br><br>- Lao Tzu"
                  }
                ]
            },
              {
                input: ["Tufsteen", "Zure regen"],
                output: [
                  {
                    naam: "Glas",
                    icoon: "icons/Glas.png",
                    map: "Aarde",
                    quote: "Some days seem to fit together like a stained glass window. A hundred little pieces of different color and mood that, when combined, create a complete picture <br><br>- Maggie Stiefvater"
                  },
                  {
                    naam: "Silicium",
                    icoon: "icons/Silicium.png",
                    map: "Chemie",
                    quote: "Since the Internet of Things is built on silicon, on the tremendous instability of modern electronics, it's built on literal sand <br><br>- Bruce Sterling"
                  }, 
                  {
                    naam: "Kalk",
                    icoon: "icons/Kalk.png",
                    map: "Chemie",
                    quote: "The hills of chalk and limestone rise like the bones of the earth <br><br>- Wendell Berry"
                  },
                  {
                    naam: "Aluminium",
                    icoon: "icons/Aluminium.png",
                    map: "Chemie",
                    quote: "In the dusk of the railway shed, aluminium gleamed like a promise etched in cold light <br><br>- V.S. Naipaul"
                  }, 
                  {
                    naam: "IJzer",
                    icoon: "icons/IJzer.png",
                    map: "Chemie",
                    quote: "Do not wait to strike till the iron is hot but make it hot by striking <br><br>-William Yeatsu"
                  },
                  {
                    naam: "Roest",
                    icoon: "icons/Roest.png",
                    map: "Chemie",
                    quote: "None can destroy iron, but its own rust can. Likewise none can destroy a person, but its own mindset can<br><br>- Ratan Tata"
                  },
                  {
                    naam: "Klei",
                    icoon: "icons/Klei.png",
                    map: "Aarde",
                    quote: "Clay is used to make vases. But where there is no clay is where it is useful <br><br>- Lao Tzu"
                  },
                  {
                    naam: "As",
                    icoon: "icons/As.png",
                    map: "Vuur",
                    quote: "Ashes to ashes. Dust to dust. We are nothing, but dust and to dust we shall return <br><br>- Alexander Anderson"
                  }
                ]
            },
             {
                input: ["Kust", "Zand"],
                output: [
                  {
                    naam: "Strand",
                    icoon: "icons/Strand.png",
                    map: "Landschap",
                    quote: "At the beach, life is different. Time doesn't move hour to hour but mood to moment. We live by the currents, plan by the tides, and follow the sun <br><br>- Sandy Gingras"
                  }
                ]
            },
             {
                input: ["Kust", "Storm"],
                output: [
                  {
                    naam: "Overstroming",
                    icoon: "icons/Overstroming.png",
                    map: "Water",
                    quote: "Great floods have flown from simple sources <br><br>- William Shakespeare"
                  }
                ]
            },
              {
                input: ["Rivier", "Basalt"],
                output: [
                  {
                    naam: "Goud",
                    icoon: "icons/Goud.png",
                    map: "Chemie",
                    quote: "Praise, like gold and diamonds, owes its value only to its scarcity <br><br>- Samuel Johnson"
                  },
                  {
                    naam: "Zand",
                    icoon: "icons/Zand.png",
                    map: "Aarde",
                    quote: "Our life is but a grain of sand in the indifferent ocean of infinity <br><br>- Sergei Devlatov"
                  },
                  {
                    naam: "Klei",
                    icoon: "icons/Klei.png",
                    map: "Aarde",
                    quote: "Clay is used to make vases. But where there is no clay is where it is useful <br><br>- Lao Tzu"
                  }
                ]
            },
              {
                input: [
                  ["Zand", "Meer"], ["Klei", "Meer"],
                  ["Rivier", "Zand"], ["Rivier", "Klei"]
                ],
                output: [
                  {
                    naam: "Ven",
                    icoon: "icons/Ven.png",
                    map: "Water",
                    quote: "Feather footed through the plashy fen passes the questing vole <br><br>- Evelyn Waugh"
                  }
                ]
            },
              {
                input: [
                  ["Silicium", "Zand"],
                  ["Kalk", "Zand"],
                  ["Druk", "Zand"]
                ],
                output: [
                  {
                    naam: "Zandsteen", 
                    icoon: "icons/Zandsteen.png",
                    map: "Aarde",
                    quote: "Write your worries in the sand, carve your blessings in stone <br><br>- Robert Kennedy"
                  }
                ]
            },
              {
                input: [
                  ["Kalk", "Warmte"], ["Kalk", "Zee"]
                ],
                output: [
                  {
                    naam: "Kalksteen", 
                    icoon: "icons/Kalksteen.png",
                    map: "Aarde",
                    quote: "If by some fiat I had to restrict all this writing to one sentence, this is the one I would choose: The summit of Mt. Everest is marine limestone <br><br>- John McPhee"
                  }
                ]
            },
              {
                input: [
                  ["Leven", "Kalk"],
                  ["Evolutie", "Kalk"]
                ],
                output: [
                  {
                    naam: "Bot", 
                    icoon: "icons/Bot.png",
                    map: "Biologie",
                    quote: "In a way, humans are not made of skin and bones as such, as we're made of stories <br><br>- Sue Monk Kidd"
                  }
                ]
            },
              {
                input: [
                  ["Luca", "Elektriciteit"],
                  ["Luca", "Leven"]
                ],
                output: [
                  {
                    naam: "Bacteriën", 
                    icoon: "icons/Bacteriën.png",
                    map: "Pril leven",
                    quote: "We are all of us walking communities of bacteria. The world shimmers, a pointillist landscape made of tiny living beings <br><br>- Lynn Margulis"
                  },
                  {
                    naam: "Virus", 
                    icoon: "icons/Virus.png",
                    map: "Pril leven",
                    quote: "A virus has three purposes: to duplicate, to infiltrate and to spread from one host to the next. Ultimately, even a single virus can shut down an entire system <br><br>- Wayne Dyer"
                  }
                ]
            },
              {
                input: [
                  ["Zandsteen", "Warmte"],
                  ["Druk", "Zandsteen"]
                ],
                output: [
                  {
                    naam: "Kwartsiet", 
                    icoon: "icons/Kwartsiet.png",
                    map: "Aarde",
                    quote: "The conversion of sandstone into quartzite is sometimes the work of percolating water under ordinary conditions <br><br>- John Flett"
                  }
                ]
            },
              {
                input: [
                  ["Zandsteen", "Water"], ["Zandsteen", "Meer"], ["Zandsteen", "Zee"], ["Zandsteen", "Oceaan"], ["Zandsteen", "Regen"], ["Zandsteen", "Zure regen"], ["Zandsteen", "Rivier"],
                  ["Kwartsiet", "Water"], ["Kwartsiet", "Meer"], ["Kwartsiet", "Zee"], ["Kwartsiet", "Oceaan"], ["Kwartsiet", "Regen"], ["Kwartsiet", "Zure regen"], ["Kwartsiet", "Rivier"]
                ],
                output: [
                  {
                    naam: "Kwarts",
                    icoon: "icons/Kwarts.png",
                    map: "Aarde",
                    quote: "Quartz is as hard as anything it is likely to meet with in use <br><br>- Frank Wade"
                  }
                ]
            },
              {
                input: [
                  ["Kalksteen", "Water"], ["Kalksteen", "Meer"], ["Kwartsiet", "Regen"], ["Kwartsiet", "Rivier"],
                  ["Marmer", "Water"], ["Marmer", "Meer"], ["Marmer", "Zee"], ["Marmer", "Oceaan"], ["Marmer", "Rivier"]
                ],
                output: [
                  {
                    naam: "Kalk",
                    icoon: "icons/Kalk.png",
                    map: "Chemie",
                    quote: "The hills of chalk and limestone rise like the bones of the earth <br><br>- Wendell Berry"
                  }
                ]
            },
              {
                input: [
                  ["Kalksteen", "Zee"], ["Kalksteen", "Oceaan"],
                  ["Marmer", "Regen"]
                ],
                output: [
                  {
                    naam: "Calciet",
                    icoon: "icons/Calciet.png",
                    map: "Aarde",
                    quote: "Through calcite, the air took on a strange luminousness, as though the light itself were split into delicate fragments <br><br>- Albert Durer"
                  },
                  {
                    naam: "Kalk",
                    icoon: "icons/Kalk.png",
                    map: "Chemie",
                    quote: "The hills of chalk and limestone rise like the bones of the earth <br><br>- Wendell Berry"
                  }
                ]
            },
              {
                input: [
                  ["Kalksteen", "Zure regen"],
                  ["Calciet", "Zure regen"]
                ],
                output: [
                  {
                    naam: "Sulfaat",
                    icoon: "icons/Sulfaat.png",
                    map: "Chemie",
                    quote: "Sulfate ion, when present in significant amount, tends to inhibit the growth of gypsum <br><br>- Linus Pauling"
                  },
                  {
                    naam: "Nitraat",
                    icoon: "icons/Nitraat.png",
                    map: "Chemie",
                    quote: "For nitrates are not the land, nor phosphates, nor the fiber of the cotton. They are its trace, its breath, but the land is so much more <br><br>- John Steinbeck"
                  },
                  {
                    naam: "Kalk",
                    icoon: "icons/Kalk.png",
                    map: "Chemie",
                    quote: "The hills of chalk and limestone rise like the bones of the earth <br><br>- Wendell Berry"
                  }
                ]
            },
              {
                input: [
                  ["Bacteriën", "Kou"], ["Bacteriën", "Radioactiviteit"], ["Bacteriën", "IJs"], ["Bacteriën", "Vuur"], ["Bacteriën", "Lava"],
                  ["Stromatolieten", "Kou"], ["Stromatolieten", "Radioactiviteit"], ["Stromatolieten", "IJs"], ["Stromatolieten", "Vuur"], ["Stromatolieten", "Lava"],
                  ["Blauwalgen", "Kou"], ["Blauwalgen", "Radioactiviteit"], ["Blauwalgen", "IJs"], ["Blauwalgen", "Vuur"], ["Blauwalgen", "Lava"],
                  ["Leca", "Kou"], ["Leca", "Radioactiviteit"], ["Leca", "IJs"], ["Leca", "Vuur"], ["Leca", "Lava"],
                  ["Amoebe", "Kou"], ["Amoebe", "Radioactiviteit"], ["Amoebe", "IJs"], ["Amoebe", "Vuur"], ["Amoebe", "Lava"],
                  ["Foraminiferen", "Kou"], ["Foraminiferen", "Radioactiviteit"], ["Foraminiferen", "IJs"], ["Foraminiferen", "Vuur"], ["Foraminiferen", "Lava"],
                  ["Schimmel", "Kou"], ["Schimmel", "Radioactiviteit"], ["Schimmel", "IJs"], ["Schimmel", "Vuur"], ["Schimmel", "Lava"],
                  ["Sponzen", "Kou"], ["Sponzen", "Radioactiviteit"], ["Sponzen", "IJs"], ["Sponzen", "Vuur"], ["Sponzen", "Lava"],
                  ["Parasieten", "Kou"], ["Parasieten", "Radioactiviteit"], ["Parasieten", "IJs"], ["Parasieten", "Vuur"], ["Parasieten", "Lava"],
                  ["Archaeplastiden", "Kou"], ["Archaeplastiden", "Radioactiviteit"], ["Archaeplastiden", "IJs"], ["Archaeplastiden", "Vuur"], ["Archaeplastiden", "Lava"],
                  ["Koraal", "Kou"], ["Koraal", "Radioactiviteit"], ["Koraal", "IJs"], ["Koraal", "Vuur"], ["Koraal", "Lava"],
                  ["Rode algen", "Kou"], ["Rode algen", "Radioactiviteit"], ["Rode algen", "IJs"], ["Rode algen", "Vuur"], ["Rode algen", "Lava"],
                  ["Groene algen", "Kou"], ["Groene algen", "Radioactiviteit"], ["Groene algen", "IJs"], ["Groene algen", "Vuur"], ["Groene algen", "Lava"],
                  ["Neteldiervoorouder", "Kou"], ["Neteldiervoorouder", "Radioactiviteit"], ["Neteldiervoorouder", "IJs"], ["Neteldiervoorouder", "Vuur"], ["Neteldiervoorouder", "Lava"],
                  ["Bilateria-voorouder", "Kou"], ["Bilateria-voorouder", "Radioactiviteit"], ["Bilateria-voorouder", "IJs"], ["Bilateria-voorouder", "Vuur"], ["Bilateria-voorouder", "Lava"],
                  ["Plakdiertjes", "Kou"], ["Plakdiertjes", "Radioactiviteit"], ["Plakdiertjes", "IJs"], ["Plakdiertjes", "Vuur"], ["Plakdiertjes", "Lava"],
                  ["Roodwieren", "Kou"], ["Roodwieren", "Radioactiviteit"], ["Roodwieren", "IJs"], ["Roodwieren", "Vuur"], ["Roodwieren", "Lava"],
                  ["Steenwortelalgen", "Kou"], ["Steenwortelalgen", "Radioactiviteit"], ["Steenwortelalgen", "IJs"], ["Steenwortelalgen", "Vuur"], ["Steenwortelalgen", "Lava"],
                  ["Groenwieren", "Kou"], ["Groenwieren", "Radioactiviteit"], ["Groenwieren", "IJs"], ["Groenwieren", "Vuur"], ["Groenwieren", "Lava"]
                ],
                output: [
                  {
                    naam: "Dood",
                    icoon: "icons/Dood.png",
                    map: "Krachten",
                    quote: "Death does not concern us, because as long as we exist, death is not here. And when it does come, we no longer exist <br><br>- Epicurus"
                  },
                  {
                    naam: "Detritus",
                    icoon: "icons/Detritus.png",
                    map: "Biologie",
                    quote: "I choose not to make a graveyard of my body for the rotting corpses of dead animals <br><br>- George Shaw"
                  }
                ]
            },
              {
                input: ["Bacteriën", "Leven"],
                output: [
                  {
                    naam: "Evolutie",
                    icoon: "icons/Evolutie.png",
                    map: "Biologie",
                    quote: "It is not the strongest of the species that survives, nor the most intelligent that survives. It is the one that is the most adaptable to change, that lives within the means available and works co-operatively against common threats <br><br>- Charles Darwin"
                  }
                ]
            },
              {
                input: ["Bacteriën", "Bacteriën"],
                output: [
                  {
                    naam: "Stromatolieten",
                    icoon: "icons/Stromatolieten.png",
                    map: "Pril leven",
                    quote: "For the first half of geological time our ancestors were bacteria. Most creatures still are bacteria, and each one of our trillions of cells is a colony of bacteria <br><br>- Richard Dawkins"
                  }
                ]
            },
              {
                input: ["Evolutie", "Bacteriën"],
                output: [
                  {
                    naam: "Blauwalgen",
                    icoon: "icons/Blauwalgen.png",
                    map: "Pril leven",
                    quote: "No matter how politely one says it, we owe our existence to the farts of blue-green algae <br><br>- Diane Ackerman"
                  },
                  {
                    naam: "Leca",
                    icoon: "icons/Leca.png",
                    map: "Pril leven",
                    quote: "The cell is immortal. It is merely the fluid in which it floats that degenerates. Renew this fluid at regular intervals, give the cells at they require for nutrition, and as far as we know, the pulsation of life can go on forever <br><br>- Alexis Carrel"
                  }
                ]
            },
              {
                input: [
                  ["Bacteriën", "Dood"], ["Stromatolieten", "Dood"], ["Blauwalgen", "Dood"], ["Leca", "Dood"],
                  ["Amoebe", "Dood"], ["Foraminiferen", "Dood"], ["Schimmel", "Dood"], ["Sponzen", "Dood"],
                  ["Parasieten", "Dood"], ["Archaeplastiden", "Dood"], ["Koraal", "Dood"], ["Rode algen", "Dood"],
                  ["Groene algen", "Dood"], ["Neteldiervoorouder", "Dood"], ["Bilateria-voorouder", "Dood"],
                  ["Roodwieren", "Dood"], ["Steenwortelalgen", "Dood"], ["Groenwieren", "Dood"]
                ],
                output: [
                  {
                    naam: "Detritus",
                    icoon: "icons/Detritus.png",
                    map: "Biologie",
                    quote: "I choose not to make a graveyard of my body for the rotting corpses of dead animals <br><br>- George Shaw"
                  }
                ]
            },
              {
                input: [
                  ["Stromatolieten", "Straling"], ["Stromatolieten", "Ster"],
                  ["Blauwalgen", "Straling"], ["Blauwalgen", "Ster"],
                  ["Archaeplastiden", "Straling"], ["Archaeplastiden", "Ster"],
                  ["Rode algen", "Straling"], ["Rode algen", "Ster"],
                  ["Groene algen", "Straling"], ["Groene algen", "Ster"],
                  ["Roodwieren", "Straling"], ["Roodwieren", "Ster"]
                  ["Steenwortelalgen", "Straling"], ["Steenwortelalgen", "Ster"],
                  ["Grownieren", "Straling"], ["Groenwieren", "Ster"]
                ],
                output: [
                  {
                    naam: "Fotosynthese",
                    icoon: "icons/Fotosynthese.png",
                    map: "Biologie",
                    quote: "He had a love affair with photosynthesis. He could talk about moss for an hour. He said that plants carried wisdom humans would never be around long enough to understand <br><br>- Anthony Doerr"
                  }
                ]
            },
              {
                input: [
                  ["Leca", "Basalt"],
                  ["Leca", "Klei"],
                  ["Aarde", "Leca"]
                ],
                output: [
                  {
                    naam: "Amoebe",
                    icoon: "icons/Amoebe.png",
                    map: "Pril leven",
                    quote: "Not all living creatures die. An amoeba, for example, need never die: it need not even, like certain generals, fade away. It just divides and becomes two new amoebas <br><br>- George Wald"
                  }
                ]
            },
              {
                input: ["Leca", "Zand"],
                output: [
                  {
                    naam: "Foraminiferen",
                    icoon: "icons/Foraminiferen.png",
                    map: "Pril leven",
                    quote: "The deep-sea ooze is largely made up of the shells of foraminifera <br><br>- Thomas Huxley"
                  }
                ]
            },
              {
                input: ["Leca", "Silicium"],
                output: [
                  {
                    naam: "Stralendiertjes",
                    icoon: "icons/Stralendiertjes.png",
                    map: "Pril leven",
                    quote: "The siliceous skeletons of the radiolaria are among the most exquisite products of organic nature <br><br>- Ernst Haeckel"
                  }
                ]
            },
              {
                input: ["Leca", "Detritus"],
                output: [
                  {
                    naam: "Schimmel",
                    icoon: "icons/Schimmel.png",
                    map: "Pril leven",
                    quote: "Fungi are the interface organisms between life and death <br><br>- Paul Stamets"
                  }
                ]
            },
              {
                input: ["Leca", "Evolutie"],
                output: [
                  {
                    naam: "Haar",
                    icoon: "icons/Haar.png",
                    map: "Biologie",
                    quote: "And forget not that the earth delights to feel your bare feet and the winds long to play with your hair <br><br>- Khalid Gibran"
                  },
                  {
                    naam: "Weefsel",
                    icoon: "icons/Weefsel.png",
                    map: "Biologie",
                    quote: "That's the way it is: life includes a lot of empty space. We are one-tenth living tissue, nine-tenths water; life is one-tenth Here and Now, nine-tenths a history lesson. For most of the time the Here and Now is neither now nor here <br><br>- Graham Swift"
                  },
                  {
                    naam: "Parasieten",
                    icoon: "icons/Parasieten.png",
                    map: "Pril leven",
                    quote: "Thought, like any parasite, cannot exist without a compliant host <br><br>- Bernard Beckett"
                  },
                  {
                    naam: "Sponzen",
                    icoon: "icons/Sponzen.png",
                    map: "Pril leven",
                    quote: "Be like a sponge when it comes to each new experience. If you want to be able to express it well, you must first be able to absorb it well <br><br>- Jim Rohn"
                  }
                ]
            },
              {
                input: ["Leca", "Blauwalgen"],
                output: [
                  {
                    naam: "Archaeplastiden",
                    icoon: "icons/Archaeplastiden.png",
                    map: "Pril leven",
                    quote: "The origin of plastids within the archaeplastida marked one of the most consequential events in the history of life <br><br>- Andrew Knoll"
                  }
                ]
            },
              {
                input: ["Amoebe", "Evolutie"],
                output: [
                  {
                    naam: "Slijm",
                    icoon: "icons/Slijm.png",
                    map: "Water",
                    quote: "Even the lowliest forms of life, the molds and slimes, are far more intricate than we had imagined <br><br>- Lewis Thomas"
                  }
                ]
            },
              {
                input: ["Foraminiferen", "Schelp"],
                output: [
                  {
                    naam: "Schelp",
                    icoon: "icons/Schelp.png",
                    map: "Biologie",
                    quote: "I see a broken shell and I remind myself that something might have needed setting free <br><br>- Sara Pennypacker"
                  }
                ]
            },
              {
                input: [
                  ["Schimmel", "Basalt"],
                  ["Schimmel", "Zand"],
                  ["Schimmel", "Klei"]
                ],
                output: [
                  {
                    naam: "Aarde",
                    icoon: "icons/Aarde.png",
                    map: "Aarde",
                    quote: "Land is not merely soil, it is a fountain of energy flowing through a circuit of soils, plants and animals <br><br>- Aldo Leopold"
                  }
                ]
            },
              {
                input: ["Weefsel", "Evolutie"],
                output: [
                  {
                    naam: "Spieren",
                    icoon: "icons/Spieren.png",
                    map: "Biologie",
                    quote: "The muscles are the instruments of movement, and the bones are the levers <br><br>- Leonardo da Vinci"
                  },
                  {
                    naam: "Zenuwen",
                    icoon: "icons/Zenuwen.png",
                    map: "Biologie",
                    quote: "With the nervous system intact the reactions of the various parts of that system, the 'simple reflexes', are ever combined into great unitary harmonies <br><br>- Charles Sherrington"
                  }
                ]
            },
              {
                input: [
                  ["Sponzen", "Kalk"], ["Sponzen", "Bot"], ["Sponzen", "Evolutie"],
                  ["Bloemdieren", "Kalk"], ["Bloemdieren", "Bot"]
                ].
                output: [
                  {
                    naam: "Koraal",
                    icoon: "icons/Koraal.png",
                    map: "Waterdieren",
                    quote: "Coral reefs represent some of the world's most spectacular beauty spots, but they are also the foundation of marine life: without them many of the sea's most exquisite species will not survive <br><br>- Sheherazade Goldsmith"
                  }
                ]
            },
              {
                input: ["Archaeplastiden", "Evolutie"],
                output: [
                  {
                    naam: "Rode algen",
                    icoon: "icons/Rode_algen.png",
                    map: "Pril leven",
                    quote: "The red algae represent one of the most ancient lineages of eukaryotic life <br><br>- Andrew Knoll"
                  },
                  {
                    naam: "Groene algen",
                    icoon: "icons/Groene_algen.png",
                    map: "Pril leven",
                    quote: "Even the simplest green algae possess the fundamental machinery of photosynthesis that sustains life on Earth <br><br>- Peter Raven"
                  }
                ]
            },
              {
                input: ["Spieren", "Leca"],
                output: [
                  {
                    naam: "Cnidaria-voorouder",
                    icoon: "icons/Cnidaria-voorouder.png",
                    map: "Pril leven",
                    quote: "Grip the nettle firmly and it will become a stick with which to beat your enemey <br><br>- Isaac Asimov"
                  },
                  {
                    naam: "Bilateria-voorouder",
                    icoon: "icons/Bilateria-voorouder.png",
                    map: "Pril leven",
                    quote: "We are all worms. But I believe that I am a glow-worm <br><br>- Winston Churchill"
                  }
                ]
            },
              {
                input: ["Zenuwen", "Leca"],
                output: [
                  {
                    naam: "Druk",
                    icoon: "icons/Druk.png",
                    map: "Brein",
                    quote: "The scientist states that pressure is exerted outwards in all directions equally, whereas natural pressure (e.g. air pressure) is exerted inwards from all directions equally <br><br>- Viktor Schawberger"
                  },
                  {
                    naam: "Tast",
                    icoon: "icons/Tast.png",
                    map: "Brein",
                    quote: "Too often we underestimate the power of touch <br><br>- Leo Buscaglia"
                  }
                ]
            },
              {
                input: [
                  ["Koraal", "Koraal"],
                  ["Roodwieren", "Kalk"]
                ],
                output: [
                  {
                    naam: "Rif",
                    icoon: "icons/Rif.png",
                    map: "Landschap",
                    quote: "Coral reefs are the backbone for the entire ocean. They are the nursery for the ocean. About a quarter of all marine life in the ocean spends part of its lifecycle on a coral reef <br><br>- Jeff Orbowski"
                  }
                ]
            },
              {
                input: ["Rode algen", "Evolutie"],
                output: [
                  {
                    naam: "Roodwieren",
                    icoon: "icons/Roodwieren.png",
                    map: "Planten",
                    quote: "To know how it feels to be seaweed you have to get in the water <br><br>- Saul Bellow"
                  }
                ]
            },
              {
                input: ["Groene algen", "Kalk"],
                output: [
                  {
                    naam: "Steenwortelalgen",
                    icoon: "icons/Steenwortelalgen.png",
                    map: "Pril leven",
                    quote: "Let the gentle bush dig its root deep and spread upward to split the boulder <br><br>- Carl Sandburg"
                  }
                ]
            },
              {
                input: ["Groene algen", "Evolutie"],
                output: [
                  {
                    naam: "Groenwieren",
                    icoon: "icons/Groenwieren.png",
                    map: "Planten",
                    quote: "Green is the fresh emblem of well found hopes. In blue the spirit can wander, but in green it can rest <br><br>- Mary Webb"
                  },
                  {
                    naam: "Steenwortelalgen",
                    icoon: "icons/Steenwortelalgen.png",
                    map: "Pril leven",
                    quote: "Let the gentle bush dig its root deep and spread upward to split the boulder <br><br>- Carl Sandburg"
                  }
                ]
            },
              {
                input: ["Cnidaria-voorouder", "Evolutie"],
                output: [
                  {
                    naam: "Kwallen",
                    icoon: "icons/Kwallen.png",
                    map: "Waterdieren",
                    quote: "A jellyfish is little more than a pulsating bell, a tassel of trailing tentacles and a single digestive opening through which it both eats and excretes - as regrettable an example of economy of design as ever was <b><br>- Jeffrey Kluger"
                  },
                  {
                    naam: "Bloemdieren",
                    icoon: "icons/Bloemdieren.png",
                    map: "Waterdieren",
                    quote: "The ocean stirs the heart, inspires the imagination and brings eternal joy to the soul <b><br>- Robert Wyland"
                  },
                  {
                    naam: "Parasieten",
                    icoon: "icons/Parasieten.png",
                    map: "Pril leven",
                    quote: "Thought, like any parasite, cannot exist without a compliant host <br><br>- Bernard Beckett"
                  }
                ]
            },
              {
                input: ["Bilateria-voorouder", "Bot"],
                output: [
                  {
                    naam: "Agnathen",
                    icoon: "icons/Agnathen.png",
                    map: "Vissen",
                    quote: "Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid <br><br>- Albert Einstein"
                  },
                  {
                    naam: "Lancetvisjes",
                    icoon: "icons/Lancetvisjes.png",
                    map: "Vissen",
                    quote: "For before this I was born once a boy, and a maiden, and a plant, and a bird, and a darting fish in the sea <br><br>- Empedocles"
                  },
                  {
                    naam: "Trilobieten",
                    icoon: "icons/Trilobieten.png",
                    map: "Geleedpotige",
                    quote: "The eye of the trilobite tells us that the sun shone on the old beach where he lived; for there is nothing in nature without a purpose, and when so complicated an organ was made to receive the light, there must have been light to enter it <br><br>- Louis Agassiz"
                  },
                  {
                    naam: "Manteldieren",
                    icoon: "icons/Manteldieren.png",
                    map: "Waterdieren",
                    quote: "The ascidians are among the most extraordinary of marine animals <br><br>- Thomas Huxley"
                  },
                  {
                    naam: "Beerdiertjes",
                    icoon: "icons/Beerdiertjes.png",
                    map: "Waterdieren",
                    quote: "There is one living organism, called a tardigrade, that has survived the five great mass extinctions on Earth, and it can survive in vacuums in space and boiling hot water and freezing subzero temperatures <br><br>- Alycia Carey"
                  }
                ]
            },
              {
                input: ["Bilateria-voorouder", "Evolutie"],
                output: [
                  {
                    naam: "Wormen",
                    icoon: "icons/Wormen.png",
                    map: "Waterdieren",
                    quote: "Along the shores and in the shallow seas live countless worms whose quiet labors help shape the ocean floor <br><br>- Rachel Carson"
                  },
                  {
                    naam: "Zeesterren",
                    icoon: "icons/Zeesterren.png",
                    map: "Waterdieren",
                    quote: "In the tidal pools the starfish cling to the rocks while the waves break over them <br><br>- Rachel Carson"
                  }
                ]
            },
              {
                input: [
                  ["Druk", "Graniet"],
                  ["Schist", "Druk"]
                ],
                output: [
                  {
                    naam: "Gneis",
                    icoon: "icons/Gneis.png",
                    map: "Aarde",
                    quote: "Geologists have a saying - rocks remember <br><br>- Neil Armstrong"
                  }
                ]
            },
              {
                input: ["Druk", "Zout"],
                output: [
                  {
                    naam: "Steenzout",
                    icoon: "icons/Steenzout.png",
                    map: "Chemie",
                    quote: "Salt is the only rock directly consumed by man <br><br>- Margaret Visser"
                  }
                ]
            },
              {
                input: ["Druk", "Klei"],
                output: [
                  {
                    naam: "Kleisteen",
                    icoon: "icons/Kleisteen.png",
                    map: "Aarde",
                    quote: "Everything changes, even stone <br><br>- Claude Monet"
                  }
                ]
            },
              {
                input: ["Druk", "Kalksteen"],
                output: [
                  {
                    naam: "Marmer",
                    icoon: "icons/Marmer.png",
                    map: "Aarde",
                    quote: "The marble not yet carved can hold the form of every thought the greatest artist has <br><br>- Michelangelo"
                  }
                ]
            },
              {
                input: ["Steenwortelalgen", "Evolutie"],
                output: [
                  {
                    naam: "Wortels",
                    icoon: "icons/Wortels.png",
                    map: "Biologie",
                    quote: "Let the gentle bush dig its root deep and spread upward to split the boulder <br><br>- Carl Sandburg"
                  }
                ]
            },
              {
                input: ["Kwallen", "Zenuwen"],
                output: [
                  {
                    naam: "Licht",
                    icoon: "icons/Licht.png",
                    map: "Brein",
                    quote: "In every person there is a sun. Just let them shine <br><br>- Socrates"
                  },
                  {
                    naam: "Druk",
                    icoon: "icons/Druk.png",
                    map: "Brein",
                    quote: "The scientist states that pressure is exerted outwards in all directions equally, whereas natural pressure (e.g. air pressure) is exerted inwards from all directions equally <br><br>- Viktor Schawberger"
                  },
                  {
                    naam: "Tast",
                    icoon: "icons/Tast.png",
                    map: "Brein",
                    quote: "Too often we underestimate the power of touch <br><br>- Leo Buscaglia"
                  }
                ]
            },
              {
                input: ["Bloemdieren", "Evolutie"],
                output: [
                  {
                    naam: "Zeeanemonen",
                    icoon: "icons/Zeeanemonen.png",
                    map: "Waterdieren",
                    quote: "The sea-anemone, though fixed to the rock, is a most voracious and living creature <br><br>- Charles Darwin"
                  }
                ]
            },
              {
                input: ["Agnathen", "Zenuwen"],
                output: [
                  {
                    naam: "Brein",
                    icoon: "icons/Brein.png",
                    map: "Brein",
                    quote: "The great events of the world take place in the brain <br><br>- Oscar Wilde"
                  },
                  {
                    naam: "Oog",
                    icoon: "icons/Oog.png",
                    map: "Biologie",
                    quote: "Eye contact is way more intimate than words will ever be <br><br>- Faraaz Kazi"
                  },
                  {
                    naam: "Geur",
                    icoon: "icons/Geur.png",
                    map: "Brein",
                    quote: "Smell is a potent wizard that transports you across thousands of miles and all the years you have lived <br><br>- Helen Keller"
                  },
                  {
                    naam: "Tast",
                    icoon: "icons/Tast.png",
                    map: "Brein",
                    quote: "Too often we underestimate the power of touch <br><br>- Leo Buscaglia"
                  }
                ]
            },
              {
                input: ["Trilobieten", "Zenuwen"],
                output: [
                  {
                    naam: "Oog",
                    icoon: "icons/Oog.png",
                    map: "Biologie",
                    quote: "Eye contact is way more intimate than words will ever be <br><br>- Faraaz Kazi"
                  },
                  {
                    naam: "Geur",
                    icoon: "icons/Geur.png",
                    map: "Brein",
                    quote: "Smell is a potent wizard that transports you across thousands of miles and all the years you have lived <br><br>- Helen Keller"
                  },
                  {
                    naam: "Tast",
                    icoon: "icons/Tast.png",
                    map: "Brein",
                    quote: "Too often we underestimate the power of touch <br><br>- Leo Buscaglia"
                  }
                ]
            },
              {
                input: ["Gneis", "Regen"],
                output: [
                  {
                    naam: "Roest",
                    icoon: "icons/Roest.png",
                    map: "Chemie",
                    quote: "None can destroy iron, but its own rust can. Likewise none can destroy a person, but its own mindset can<br><br>- Ratan Tata"
                  },
                  {
                    naam: "Aluminium",
                    icoon: "icons/Aluminium.png",
                    map: "Chemie",
                    quote: "In the dusk of the railway shed, aluminium gleamed like a promise etched in cold light <br><br>- V.S. Naipaul"
                  }, 
                  {
                    naam: "Zand",
                    icoon: "icons/Zand.png",
                    map: "Aarde",
                    quote: "Our life is but a grain of sand in the indifferent ocean of infinity <br><br>- Sergei Devlatov"
                  },
                  {
                    naam: "Klei",
                    icoon: "icons/Klei.png",
                    map: "Aarde",
                    quote: "Clay is used to make vases. But where there is no clay is where it is useful <br><br>- Lao Tzu"
                  }
                ]
            },
              {
                input: [
                  ["Steenzout", "Water"], ["Steenzout", "Meer"], ["Steenzout", "Zee"], ["Steenzout", "Oceaan"],
                  ["Steenzout", "Regen"], ["Steenzout", "Zure regen"], ["Steenzout", "Rivier"]
                ],
                output: [
                  {
                    naam: "Zout",
                    icoon: "icons/Zout.png",
                    map: "Chemie",
                    quote: "Salt is born of the purest parents: the sun and the sea <br><br>- Pythagoras"
                  }
                ]
            },
              {
                input: ["Kleisteen", "Druk"],
                output: [
                  {
                    naam: "Schalie",
                    icoon: "icons/Schalie.png",
                    map: "Aarde",
                    quote: "In the structure of shale we read the operations of water and the lapse of time <br><br>- James Hutton"
                  }
                ]
            },
              {
                input: ["Marmer", "Zure regen"],
                output: [
                  {
                    naam: "Sulfaat",
                    icoon: "icons/Sulfaat.png",
                    map: "Chemie",
                    quote: "Sulfate ion, when present in significant amount, tends to inhibit the growth of gypsum <br><br>- Linus Pauling"
                  },
                  {
                    naam: "Nitraat",
                    icoon: "icons/Nitraat.png",
                    map: "Chemie",
                    quote: "For nitrates are not the land, nor phosphates, nor the fiber of the cotton. They are its trace, its breath, but the land is so much more <br><br>- John Steinbeck"
                  },
                  {
                    naam: "Calciet",
                    icoon: "icons/Calciet.png",
                    map: "Aarde",
                    quote: "Through calcite, the air took on a strange luminousness, as though the light itself were split into delicate fragments <br><br>- Albert Durer"
                  },
                  {
                    naam: "Kalk",
                    icoon: "icons/Kalk.png",
                    map: "Chemie",
                    quote: "The hills of chalk and limestone rise like the bones of the earth <br><br>- Wendell Berry"
                  }
                ]
            },
              {
                input: [ 
                  ["Schalie", "Zure regen"],
                  ["Leisteen", "Zure regen"]
                ],
                output: [
                  {
                    naam: "Silicium",
                    icoon: "icons/Silicium.png",
                    map: "Chemie",
                    quote: "Since the Internet of Things is built on silicon, on the tremendous instability of modern electronics, it's built on literal sand <br><br>- Bruce Sterling"
                  }, 
                  {
                    naam: "Aluminium",
                    icoon: "icons/Aluminium.png",
                    map: "Chemie",
                    quote: "In the dusk of the railway shed, aluminium gleamed like a promise etched in cold light <br><br>- V.S. Naipaul"
                  }, 
                  {
                    naam: "IJzer",
                    icoon: "icons/IJzer.png",
                    map: "Chemie",
                    quote: "Do not wait to strike till the iron is hot but make it hot by striking <br><br>-William Yeatsu"
                  },
                  {
                    naam: "Klei",
                    icoon: "icons/Klei.png",
                    map: "Aarde",
                    quote: "Clay is used to make vases. But where there is no clay is where it is useful <br><br>- Lao Tzu"
                  }
                ]
            },
              {
                input: ["Schalie", "Druk"],
                output: [
                  {
                    naam: "Leisteen",
                    icoon: "icons/Leisteen.png",
                    map: "Aarde",
                    quote: "The slates of Wales furnish one of the most striking examples of cleavage produced by pressure <br><br>- Archibald Geikie"
                  }
                ]
            },              
              {
                input: ["Leisteen", "Druk"],
                output: [
                  {
                    naam: "Fylliet",
                    icoon: "icons/Fylliet.png",
                    map: "Aarde",
                    quote: "Phyllite shows a silky sheen due to the minute scales of mica developed by metamorphism <br><br>- Rollin Salisbury"
                  }
                ]
            },
              {
                input: [
                  ["Fylliet", "Regen"],
                  ["Schist", "Regen"]
                ],
                output: [
                  {
                    naam: "Mica",
                    icoon: "icons/Mica.png",
                    map: "Aarde",
                    quote: "That great dark bit out there is mica, and all this that runs in a vein like is quartz. Quartz and mica are the natural home of gold <br><br>- Charles Reade"
                  },
                  {
                    naam: "Klei",
                    icoon: "icons/Klei.png",
                    map: "Aarde",
                    quote: "Clay is used to make vases. But where there is no clay is where it is useful <br><br>- Lao Tzu"
                  }
                ]
            },
              {
                input: [ 
                  ["Fylliet", "Zure regen"],
                  ["Schist", "Zure regen"]
                ],
                output: [
                  {
                    naam: "Silicium",
                    icoon: "icons/Silicium.png",
                    map: "Chemie",
                    quote: "Since the Internet of Things is built on silicon, on the tremendous instability of modern electronics, it's built on literal sand <br><br>- Bruce Sterling"
                  }, 
                  {
                    naam: "Aluminium",
                    icoon: "icons/Aluminium.png",
                    map: "Chemie",
                    quote: "In the dusk of the railway shed, aluminium gleamed like a promise etched in cold light <br><br>- V.S. Naipaul"
                  }, 
                  {
                    naam: "Mica",
                    icoon: "icons/Mica.png",
                    map: "Aarde",
                    quote: "That great dark bit out there is mica, and all this that runs in a vein like is quartz. Quartz and mica are the natural home of gold <br><br>- Charles Reade"
                  },
                  {
                    naam: "IJzer",
                    icoon: "icons/IJzer.png",
                    map: "Chemie",
                    quote: "Do not wait to strike till the iron is hot but make it hot by striking <br><br>-William Yeatsu"
                  },
                  {
                    naam: "Klei",
                    icoon: "icons/Klei.png",
                    map: "Aarde",
                    quote: "Clay is used to make vases. But where there is no clay is where it is useful <br><br>- Lao Tzu"
                  }
                ]
            },
              {
                input: ["Fylliet", "Druk"],
                output: [
                  {
                    naam: "Schist",
                    icoon: "icons/Schist.png",
                    map: "Aarde",
                    quote: "The schist is contorted, glittering with mica, a record of heat and pressure beyond imagination <br><br>- John McPhee"
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
  "Vuur": "icons/Vuur.png",
  "Aarde": "icons/Aarde.png",
  "Landschap": "icons/Landschap.png",
  "Pril leven": "icons/Pril_leven.png",
  "Biologie": "icons/Biologie.png",
  "Waterdieren": "icons/Waterdieren.png",
  "Vissen": "icons/Vissen.png",
  "Geleedpotige": "icons/Geleedpotige.png"
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
updateClosedContainer(); // <--- voeg dit toe

// ----- RENDER CLOSED MAPS -----
function renderClosed() {
  closedContainer.innerHTML = "";
  closedContainer.classList.remove("hidden", "left", "right"); // ← verwijder alle posities
  closedContainer.style.transition = "opacity 0.3s ease"; // fade-in
  closedContainer.style.opacity = 0;

  const grid = document.createElement("div");
  grid.className = "grid-closed";

  mappen.forEach(map => {
    const container = document.createElement("div");
    container.className = "icon-container";
  
    const img = document.createElement("img");
    img.src = map.icoon;
    img.className = "icon map";
    img.onclick = () => openMap(map, img);
  
    const tooltip = document.createElement("div");
    tooltip.className = "tooltip";
    tooltip.textContent = map.naam;
  
    container.appendChild(img);
    container.appendChild(tooltip);
    grid.appendChild(container);
  });

  closedContainer.appendChild(grid);

  // forceer repaint
  closedContainer.offsetHeight;
  closedContainer.style.opacity = 1;
}

// ----- OPEN MAP -----
function openMap(map, clickedImg) {
  let side = null;
  let container;

  if (!openLeft) {
    openLeft = map;
    side = "left";
    container = leftSide;
  } else if (!openRight) {
    openRight = map;
    side = "right";
    container = rightSide;
  } else {
    return; // beide open → niks doen
  }

  // Render de map meteen
  renderSide(container, map, side);

  updateClosedContainer();
}

// ----- RENDER SIDE -----
function renderSide(parentContainer, map, side) {
  parentContainer.innerHTML = "";
  parentContainer.classList.remove("hidden", "visible");

  // --- Title van de open map ---
  const titleContainer = document.createElement("div");
  titleContainer.className = "icon-container";

  const titleImg = document.createElement("img");
  titleImg.src = map.icoon;
  titleImg.className = "icon map-title";
  titleImg.onclick = () => closeMap(side);

  const titleTooltip = document.createElement("div");
  titleTooltip.className = "tooltip";
  titleTooltip.textContent = map.naam;

  titleContainer.appendChild(titleImg);
  titleContainer.appendChild(titleTooltip);
  parentContainer.appendChild(titleContainer);

  // --- Grid van elementen ---
  const grid = document.createElement("div");
  grid.className = "grid-elements";

  // Dynamische layout
  const totalElements = map.elementen.length;

  if (totalElements > 20) {
    // 5 kolommen + iets kleinere iconen
    grid.style.gridTemplateColumns = "repeat(5, 100px)";
    grid.style.columnGap = "30px";
    grid.style.rowGap = "15px";

    map.elementen.forEach(el => {
      const elContainer = document.createElement("div");
      elContainer.className = "icon-container";

      const img = document.createElement("img");
      img.src = el.icoon;
      img.className = "icon element";
      img.style.width = "110px";
      img.style.height = "110px"; // iets kleiner dan 130px
      img.onclick = () => toggleSelect(el, img, side, map.naam);

      const tooltip = document.createElement("div");
      tooltip.className = "tooltip";
      tooltip.textContent = el.naam;

      elContainer.appendChild(img);
      elContainer.appendChild(tooltip);
      grid.appendChild(elContainer);
    });
  } else {
    // normaal: 4 kolommen
    grid.style.gridTemplateColumns = "repeat(4, 100px)";
    grid.style.columnGap = "50px";
    grid.style.rowGap = "20px";

    map.elementen.forEach(el => {
      const elContainer = document.createElement("div");
      elContainer.className = "icon-container";

      const img = document.createElement("img");
      img.src = el.icoon;
      img.className = "icon element";
      img.onclick = () => toggleSelect(el, img, side, map.naam);

      const tooltip = document.createElement("div");
      tooltip.className = "tooltip";
      tooltip.textContent = el.naam;

      elContainer.appendChild(img);
      elContainer.appendChild(tooltip);
      grid.appendChild(elContainer);
    });
  }
  
  parentContainer.appendChild(grid);

  // --- Fade-in ---
  parentContainer.style.opacity = 0;
  setTimeout(() => {
    parentContainer.style.transition = "opacity 0.3s ease";
    parentContainer.style.opacity = 1;
    parentContainer.classList.add("visible");
  }, 20);
}

// ----- CLOSE MAP -----
function closeMap(side) {
  const container = side === "left" ? leftSide : rightSide;
  const closingMap = side === "left" ? openLeft : openRight; // welke map wordt gesloten

  container.classList.remove("visible");

  setTimeout(() => {
    // deselecteer alle geselecteerde elementen die in deze map zitten
    selected = selected.filter(e => {
      // als dit element bij de map hoort die gesloten wordt **en aan dezelfde kant**
      if (e.mapNaam === closingMap.naam && e.side === side) {
        // stop met trillen
        e.dom.classList.remove("selected");
        return false; // verwijder uit selectie
      }
      return true; // houdt over
    });

    if (side === "left") openLeft = null;
    else openRight = null;

    container.classList.add("hidden");

    updateClosedContainer(); // herbereken positie closed-maps
  }, 300);
}

function updateClosedContainer() {
  let leftOpen = !!openLeft;
  let rightOpen = !!openRight;
  let halfWidth = window.innerWidth / 2;

  if (leftOpen && rightOpen) {
    closedContainer.style.opacity = 0;
    closedContainer.style.left = "50%";
    closedContainer.style.transform = "translate(-50%, -50%)";
    closedContainer.classList.add("center");
    closedContainer.classList.remove("side");
  } else if (leftOpen && !rightOpen) {
    closedContainer.style.opacity = 1;
    closedContainer.style.left = `${halfWidth + halfWidth/2}px`; // midden rechterhelft
    closedContainer.style.transform = "translate(-50%, -50%)";
    closedContainer.classList.add("side");
    closedContainer.classList.remove("center");
  } else if (!leftOpen && rightOpen) {
    closedContainer.style.opacity = 1;
    closedContainer.style.left = `${halfWidth/2}px`; // midden linkerhelft
    closedContainer.style.transform = "translate(-50%, -50%)";
    closedContainer.classList.add("side");
    closedContainer.classList.remove("center");
  } else {
    closedContainer.style.opacity = 1;
    closedContainer.style.left = "50%";
    closedContainer.style.transform = "translate(-50%, -50%)";
    closedContainer.classList.add("center");
    closedContainer.classList.remove("side");
  }
}

// ----- SELECT ELEMENT -----
function toggleSelect(el, img, side, mapNaam) {
  const index = selected.findIndex(e => e.naam === el.naam && e.dom === img);

  if (index > -1) {
    selected.splice(index, 1);
    img.classList.remove("selected");
  } else {
    if (selected.length === 2) return;

    selected.push({
      ...el,
      dom: img,
      side: side,
      mapNaam: mapNaam  // nu correct
    });

    img.classList.add("selected");
  }

  if (selected.length === 2) {
    checkCombination();
  }
}

// ----- CHECK COMBINATIONS -----
function checkCombination() {
  const names = selected.map(e => e.naam);

  // Functie om twee arrays exact te vergelijken, inclusief duplicaten
  function arraysEqual(a, b) {
    if (a.length !== b.length) return false;
    const aSorted = [...a].sort();
    const bSorted = [...b].sort();
    return aSorted.every((val, index) => val === bSorted[index]);
  }
  
  // Pak alle combinaties die exact matchen
  const matches = combinaties.filter(c => {
    // Als input gewoon ["A","B"] is
    if (typeof c.input[0] === "string") {
      return arraysEqual(c.input, names);
    }
  
    // Als input [ ["A","B"], ["C","D"] ] is
    return c.input.some(set => arraysEqual(set, names));
  });

  if (matches.length === 0) {
    shakeErrorElements(selected.map(e => e.dom));

    selected.forEach(e => e.dom.classList.remove("selected"));
    selected = [];
    return;
  }

  // Verzamel **altijd** alle output-elementen voor de overlay
  const newElements = [];
  
  matches.forEach(match => {
    match.output.forEach(newEl => {
      let map = mappen.find(m => m.naam === newEl.map);
  
      // Voeg map toe als die nog niet bestaat
      if (!map) {
        map = {
          naam: newEl.map,
          icoon: groepsIconen[newEl.map],
          elementen: []
        };
        mappen.push(map);
      }
  
      // Voeg element toe aan map als die nog niet bestaat
      if (!map.elementen.find(e => e.naam === newEl.naam)) {
        map.elementen.push(newEl);
      }
  
      // Voeg **altijd** toe voor overlay
      newElements.push(newEl);
    });
  });

  // Toon alle nieuwe elementen in de overlay
  renderNewElements(newElements);

  // Reset selectie
  selected.forEach(e => e.dom.classList.remove("selected"));
  selected = [];
}

// ----- ERROR SHAKE FUNCTION -----
function shakeErrorElements(elements) {
  elements.forEach(el => {
    if(el) {
      el.classList.add("error");
      setTimeout(() => el.classList.remove("error"), 600); // na animatie verwijderen
    }
  });
}

// ----- VISUEEL SCHERM VOOR NIEUWE ELEMENTEN -----
function renderNewElements(elements) {
  // Verwijder bestaande overlay indien aanwezig
  const oldOverlay = document.getElementById("result-overlay");
  if (oldOverlay) oldOverlay.remove();

  const overlay = document.createElement("div");
  overlay.id = "result-overlay";

  const grid = document.createElement("div");
  grid.className = "result-grid";
    if (elements.length === 6) {
    grid.style.gridTemplateColumns = "repeat(3, 250px)";
  }

  elements.forEach(el => {
    const box = document.createElement("div");
    box.className = "result-box fade-in"; // CSS class voor fade-in effect

    const img = document.createElement("img");
    img.src = el.icoon;
    img.className = "result-image";

    const title = document.createElement("div");
    title.className = "result-title";
    title.innerHTML = el.naam;

    const quote = document.createElement("div");
    quote.className = "result-quote";
    quote.innerHTML = el.quote || "";

    box.appendChild(img);
    box.appendChild(title);
    box.appendChild(quote);

    grid.appendChild(box);
  });

  overlay.appendChild(grid);

  // ✅ Hier voeg je de overlay toe aan de DOM
  document.body.appendChild(overlay);

  // ✅ Trigger fade-in door de CSS class 'visible' toe te voegen
  setTimeout(() => overlay.classList.add("visible"), 20);

  // ----- Klik anywhere → reset alles naar startpositie -----
  overlay.onclick = () => {
    overlay.remove();
    openLeft = null;
    openRight = null;
    leftSide.innerHTML = "";
    rightSide.innerHTML = "";
  
    // Closed maps opnieuw renderen en positioneren
    renderClosed();
    updateClosedContainer(); // ← dit zorgt dat ze weer gecentreerd staan
  };
}

