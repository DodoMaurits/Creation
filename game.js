// ---------------- DATA ----------------
const mappen = [
  {
    naam: "Heelal", icoon: "icons/Heelal.png", 
    elementen: [
      { naam: "Oerknal", icoon: "icons/Oerknal.png" }
    ]
  },
  {
    naam: "Krachten", icoon: "icons/Krachten.png",
    elementen: [
      { naam: "Warmte", icoon: "icons/Warmte.png" },
      { naam: "Kou", icoon: "icons/Kou.png" }
    ]
  }
];

const combinaties = [
  {
    input: ["Oerknal", "Kou"],
    hint: `Hm.. Wat zal er gebeuren wanneer energie de ruimte krijgt? Afkoelen dus...`,
    output: [
      { naam: "Zwaartekracht", icoon: "icons/Zwaartekracht.png", map: "Krachten",
        quote: `Gravity explains the motions of the planets, but it cannot explain who sets the planets in motion 
        <br><br>- Isaac Newton`
      },
      { naam: "Straling", icoon: "icons/Straling.png", map: "Krachten",
        quote: `A compassionate heart radiates rays of beauty that remove the clouds of million hearts 
        <br><br>- Amit Ray`
      },
      { naam: "Quarks", icoon: "icons/Quarks.png", map: "Chemie",
        quote: `Every atom in your body is the same quark in different places at the same moment in time 
        <br><br>- David Eagleman`
      },
      { naam: "Elektriciteit", icoon: "icons/Elektriciteit.png", map: "Krachten",
        quote: `We're electrical items and when we die the electricity goes somewhere else 
        <br><br>- Dominic Monaghan`
      }
    ],
    uitleg: {
      normal: {
        titel: "Symmetriebreking",
        tekst: `In een mum van tijd daalde de temperatuur tot 10 miljoen graden - te vergelijken met het binnenste van
        een ster. De oerknal was ten einde maar, zoals water bevriest onder nul, was er viermaal een drempel overschreden. 
        De 4 natuurkrachten waren geboren...
        
        <br><br>Vrijwel meteen brak de zwaartekracht. Tegen de uitdijing van energie in, houdt deze natuurkracht 
        energie en materie bij elkaar, als een natuurlijke aantrekkingskracht. 
        
        <br><br>Onder de 10<sup>28</sup> graden brak de sterke kernkracht. Op miniscule afstanden bindt het de kleinste 
        deeltjes, genaamd quarks, tot atoomkernen.
        
        <br><br>Onder de 10<sup>15</sup> graden splitste de overgebleven elektrozwakke kracht zich in massa-dragende 
        materie en massaloze straling. Massa remt beweging af, maar straling kan op lichtsnelheid bewegen en vormen 
        aannemen als radiogolven, uv-straling, licht en kleur.
        
        <br><br>Onder de 10<sup>13</sup> graden viel de elektrozwakke kracht uiteen in zwakke kernkracht en 
        elektromagnetische kracht. De zwakke kernkracht zet energie om en wisselt lading en massa uit, terwijl plasma's 
        op zoek naar neutrale combinaties knetterden van de elektriciteit.`,
        tijd: 13_800_000_000
      }
    }
  },
  {
    input: ["Quarks", "Kou"],
    hint: `Kou remt chaotische energie af... benieuwd wat de kleine bouwstenen gaan doen`,
    output: [
      { naam: "Atomen", icoon: "icons/Atomen.png", map: "Chemie",
        quote: `In reality, nothing but atoms and the void 
        <br><br>- Democritos`
      }
    ],
    uitleg: {
      normal: {
        titel: "Atoomvorming",
        tekst: `380 duizend jaar na de oerknal bereikte het heelal een temperatuur van 3000 Kelvin (2727 graden Celsius).
        <br><br>De bewegingsenergie was zo laag dat protonen, elektronen en neutronen konden fuseren tot neutrale 
        structuren die op lange termijn stabiel blijven. Het grootste deel van de materie in het heelal werd daardoor 
        elektrisch neutraal, waardoor het zichtbare plasma verdampte. Fotonen konden nu vrij door de elektrisch neutrale 
        nevel en donkere materie stromen. Tot op heden kunnen astronomen de resultaten van deze faseverandering waarnemen,
        omdat fotonen die uit het plasma ontsnapten een dun achtergrondbrommetje van energie voortbrachten, bekend als de 
        kosmische achtergrondstraling.
        <br><br>Atomen hebben elk een kleine kern in het centrum, bestaande uit één of meer positief geladen protonen en 
        nul of meer neutrale neutronen. Rond de kern cirkelen op grote afstanden negatief geladen elektronen, één voor 
        elke positief geladen proton in de kern. Zij worden door de elektromagnetische kracht bij elkaar gehouden in het 
        gebied dat men gewoonlijk de elektronenwolk noemt. In dit gebied vindt de chemie plaats. 
        <br><br>Er worden continu bindingen gevormd en verbroken tussen protonen en elektronen, met als resultaat de 
        opkomst van geheel nieuwe vormen van materie. De drijvende kracht achter al deze activiteit is het feit dat 
        elektronen negatieve ladingen hebben en elkaar afstoten, maar ze worden aangetrokken door de positieve ladingen 
        van protonen, hetzij in hun eigen atoom, hetzij in naburige atomen.`,
        tijd: 13_700_620_000
      }
    }
  },
  {
    input: ["Atomen", "Straling"],
    hint: `Hm.. Wat als de straling sterk genoeg is atomen te splitsen?`,
    output: [
      { naam: "Radioactiviteit", icoon: "icons/Radioactiviteit.png", map: "Krachten",
        quote: `Nuclear power is one hell of a way to boil water 
        <br><br>- Albert Einstein`
      }
    ],
    uitleg: {
      normal: {
        titel: "Radioactiviteit",
        tekst: `Gamma-, röntgen- en hoogenergetische uv-straling zijn zo frequent, dat zij genoeg energie hebben om elektronen
        van atoomkernen te splitsen. Wanneer de frequentie hier hoog genoeg voor is, spreken wij van radioactief.`,
        tijd: 13_700_620_000
      }
    }
  },
  {
    input: ["Atomen", "Zwaartekracht"],
    hint: `Laat de bouwstenen elkaar aantrekken, dan zal er pas echt iets zweven...`,
    output: [
      { naam: "Gas", icoon: "icons/Gas.png", map: "Lucht",
      quote: `Hydrogen is a light, odorless gas, which, given enough time, turns into people 
      <br><br>- Edward Harrison`
      }
    ]
  },
  {
    input: ["Gas", "Kou"],
    hint: `Brrr.. zwevend onder 0 zal het bevriezen`,
    output: [
      { naam: "IJs", icoon: "icons/IJs.png", map: "Water",
        quote: `Just as when water is frozen in to a form as ice and then melts so at the time of death, 
        there is no death. The spirit simply changes form
        <br><br>- Frederick Lenz`
      }
    ]
  },
  {
    input: ["Gas", "Zwaartekracht"],
    hint: `Hoe meer opeengepakte massa, hoe groter de kans op een ontploffing`,
    output: [
      { naam: "Ster", icoon: "icons/Ster.png", map: "Heelal",
        quote: `Every star may be a sun to someone 
        <br><br>- Carl Sagan`
      }
    ],
    uitleg: {
      normal: {
        titel: "A Star Is Born",
        tekst: `Zwaartekracht werd sterker en sterker naarmate massa door afremming dichter bij elkaar kwam. Kubus voor
        kubus werd het heelal korreliger en klonteriger. Bij het botsen van materie kwam opnieuw energie vrij dat lokaal
        temperaturen opdreef. 
        <br><br>Klonterige gaswolken begonnen hun eigen hitte te produceren met als climax het bereiken van 
        de 10 miljoen graden. Atomen vielen weer uit elkaar en plasma's knetterden weer van elektriciteit, waarbij
        triljoenen protonen zich fuseerden tot heliumkernen. De enorme energie verhit de kern dusdanig dat deze uitzet en 
        tegen de zwaartekracht in duwt. Zie daar, de eerste generatie sterren.`,
        tijd: 13_600_000_000
      }
    }
  },
  {
    input: ["Ster", "Zwaartekracht"],
    hint: `Uiteindelijk verliest elke ster het gevecht van de natuurkrachten...`,
    output: [
      { naam: "IJzer", icoon: "icons/IJzer.png", map: "Chemie",
        quote: `Do not wait to strike till the iron is hot but make it hot by striking 
        <br><br>- William Yeats`
      },
      { naam: "Supernova", icoon: "icons/Supernova.png", map: "Heelal",
        quote: `A supernova is one of the most powerful explosions in the universe. 
        It's so luminous, it can be seen across billions of light years. 
        It releases as much energy in an instant as our sun will produce over its 10-billion-year lifetime
        <br><br>- Neil Tyson`
      }
    ],
    uitleg: {
      normal: {
        titel: "Supernova",
        tekst: `Wanneer sterren opbranden, bezwijkt de kern onder de eigen zwaartekracht. Door de implosie stijgt de 
        temperatuur van de kern opnieuw, maar ditmaal met koele rode buitenlagen. Als deze rode reus genoeg massa heeft, 
        drukt de zwaartekracht de kern zo sterk samen dat ze heter wordt dan ooit tevoren. Uiteindelijk verandert elke kern 
        zo in een compacte ijzeren bol.
        <br><br>Stadia van inkrimpen en uitdijen volgen elkaar op tot echt geen energie meer kan worden opgewekt, waarna 
        de buitenste lagen worden weggeblazen en een extreem dichte, witte dwerg overblijft. De zwaartekracht kan materie
        aantrekken van een nabije ster en zo een explosie veroorzaken die zo heet kan zijn, dat het veel van de
        resterende elementen uit het periodiek systeem kan creëren. 
        <br><br>Als dit niet het geval is, kan de kern in minder dan een seconde door de eigen extreme zwaartekracht met 
        enorm geweld in elkaar smijten, en zo even veel energie produceren als een heel sterrenstelsel, waarbij de 
        laatste zware elementen de ruimte in zijn geslingerd.`,
        tijd: 13_600_000_000
      }
    }
  },
  {
    input: [
      ["Ster", "Gas"],
      ["Ster", "IJzer"]
    ],
    hint: `Kijk hoe het blijft hangen in een baan rond haar ster...`,
    output: [
      { naam: "Asteroïden", icoon: "icons/Asteroïden.png", map: "Heelal",
        quote: `If you keep chasing shooting stars, you'll never feel the warmth of the sun 
        <br><br>- Ann Marie Frohoff`
      },
      { naam: "Planeet", icoon: "icons/Planeet.png", map: "Heelal",
        quote: `Astronomy compels the soul to look upwards and leads us from this world to another 
        <br><br>- Plato`
      }
    ]
  },
  {
    input: ["Ster", "Ster"],
    hint: `Zo veel sterren.. het lijken wel witte melkslierten rond het afvoerputje`,
    output: [
      { naam: "Sterrenstelsel", icoon: "icons/Sterrenstelsel.png", map: "Heelal",
        quote: `Never apologize for burning too brightly or collapsing into yourself every night. 
        That is how galaxies are made 
        <br><br>- Tyler Kent`
      }
    ]
  }, 
  {
    input: ["Supernova", "Zwaartekracht"],
    hint: `Als daar alles implodeert onder de zwaartekracht, prikken we dan geen gaten in ons systeem?`,
    output: [
      { naam: "Zwart Gat", icoon: "icons/Zwartgat.png", map: "Heelal",
        quote: `I believe in black holes. I believe that as the universe empties into nothingness, 
        past and future will smack together in the last swirl around the drain
        <br><br>- Abraham Verghese`
      }
    ]
  },
  {
    input: [
      ["Asteroïden", "Planeet"], ["Asteroïden", "De Aarde"], ["Asteroïden", "Mars"], 
      ["Asteroïden", "Venus"], ["Asteroïden", "Mercurius"], ["Asteroïden", "De Maan"]
    ],
    hint: `Wow.. een spectaculaire botsing maakt alles heet en vloeibaar...`,
    output: [
      { naam: "Vuur", icoon: "icons/Vuur.png", map: "Vuur",
        quote: `Tampering with fire will burn you, even in the coldest regions 
        <br><br>- H.S. Crow`
      },
      { naam: "Lava", icoon: "icons/Lava.png", map: "Vuur",
        quote: `It is the lava of the imagination whose eruption prevents an earthquake
        <br><br>- Lord Byron`
      },
      { naam: "Rook", icoon: "icons/Rook.png", map: "Lucht",
        quote: `Surely where there's smoke there's fire? No, where there's so much smoke there's smoke
        <br><br>- John Wheeler`
      }
    ]
  },
  {
    input: ["Planeet", "Gas"],
    hint: `Ik ken een paar planeten, dat zijn grote vriendelijke gasreuzen`,
    output: [
      { naam: "Jupiter", icoon: "icons/Jupiter.png", map: "Heelal",
        quote: `Jupiter was a God, a Roman God. The Roman King of Gods, of sky and of thunder... 
        and he looked every single inch of it 
        <br><br>- Lulu Moore`
      },
      { naam: "Saturnus", icoon: "icons/Saturnus.png", map: "Heelal",
        quote: `At depth on Jupiter and Saturn, the pressures are so great that atoms sweat electrons, 
        and the air becomes a metal 
        <br><br>- Carl Sagan`
      }
    ],
    uitleg: {
      normal: {
        titel: "Gasplaneten",
        tekst: `Onze gasplaneten vormden zich net als de rest van ons zonnestelsel 4,57 miljard jaar geleden...`,
        tijd: 4_570_000_000
      }
    }
  },
  {
    input: [
      ["Planeet", "Kou"], ["Planeet", "IJs"]
    ],
    hint: `De schoonheid van sommige planeten wil ik gekoeld bewaard...`,
    output: [
      { naam: "Neptunus", icoon: "icons/Neptunus.png", map: "Heelal",
        quote: `We see it as Columbus saw America from the coast of Spain. 
        Its movements have been felt, trembling along the far-reaching line of our analysis 
        with a certainty hardly inferior to that of ocular demonstration 
        <br><br>- William Herschel`
      },
      { naam: "Uranus", icoon: "icons/Uranus.png", map: "Heelal",
        quote: `If the world seems cold to you, kindle fires to warm it 
        <br><br>- Lucy Larcom`
      }
    ],
    uitleg: {
      normal: {
        titel: "IJsplaneten",
        tekst: `Onze ijsplaneten vormden zich net als de rest van ons zonnestelsel 4,57 miljard jaar geleden...`,
        tijd: 4_570_000_000
      }
    }
  },
  {
    input: ["Planeet", "IJzer"],
    hint: `Als ijzer zijn baan om de zon vindt, kan het wel eens iets moois opleveren...`,
    output: [
      { naam: "Mars", icoon: "icons/Mars.png", map: "Heelal",
        quote: `It was Mars. the God of War, and for me, the fighting man, it had always held the power of 
        irresistible enchantment. As I gazed at it on that far-gone night it seemed to call across the 
        unthinkable void, to lure me to it, to draw me as the lodestone attracts a particle of iron 
        <br><br>- Edgar Rice Burroughs`
      },
      { naam: "De Aarde", icoon: "icons/De_Aarde.png", map: "Heelal",
        quote: `On Earth there is no heaven, but there are pieces of it 
        <br><br>- Jules Renard`
      },
      { naam: "Venus", icoon: "icons/Venus.png", map: "Heelal",
        quote: `She was the Goddess of Love. It's nice that love comes on first thing in the evening, 
        and goes out last in the morning. Love keeps the light on all night 
        <br><br>- Catherynne Valente`
      },
      { naam: "Mercurius", icoon: "icons/Mercurius.png", map: "Heelal",
        quote: `I had rather be Mercury, the smallest among seven, resolving round the sun, 
        than the first among five revolving round Saturn 
        <br><br>- Johann von Goethe`
      }
    ],
    uitleg: {
      normal: {
        titel: "IJzerplaneten",
        tekst: `Onze ijzerplaneten vormden zich net als de rest van ons zonnestelsel 4,57 miljard jaar geleden...`,
        tijd: 4_570_000_000
      }
    }
  },
  {
    input: ["Lava", "Kou"],
    hint: `Ook het vuur van lava moet ooit rusten en bedaren...`,
    output: [
      { naam: "Graniet", icoon: "icons/Graniet.png", map: "Aarde",
      quote: `The block of granite which was an obstacle in the pathway of the weak,
      became a stepping-stone in the pathway of the strong 
      <br><br>- Thomas Carlyle`
      },
      { naam: "Basalt", icoon: "icons/Basalt.png", map: "Aarde",
        quote: `Everything changes, even stone 
        <br><br>- Claude Monet`
      },
      { naam: "Obsidiaan", icoon: "icons/Obsidiaan.png", map: "Aarde",
        quote: `Eyes as black and as shiny as chips of obsidian stared back into his. 
        They were eyes like black holes, letting nothing out, not even information 
        <br><br>- Neil Gaiman`
      }
    ]
  },
  {
    input: ["De Aarde", "Planeet"],
    hint: `De Aarde.. daar past een mooi broertje bij voor de nacht.`,
    output: [
      { naam: "De Maan", icoon: "icons/Maan.png", map: "Heelal",
        quote: `I always look up at the moon and see it as the single most romantic place within the cosmos 
        <br><br>- Tom Hanks`
      }
    ],
    uitleg: {
      normal: {
        titel: "Grote Inslag van Theia",
        tekst: `Onze broederplaneet de Maan ontstond zo'n 30 tot 50 miljoen jaar na het ontstaan van ons zonnestelsel. 
        Een andere planeet genaamd Theia botste toen tegen de jonge Aarde. De inslag maakte beide hemellichamen 
        grotendeels vloeibaar en slingerde veel materie de ruimte in, die in een baan rond de gehavende Aarde terechtkwam.
        Opnieuw verhitte de Aarde tot temperaturen van wel 230 graden. Al snel klonterde dit materiaal samen tot onze 
        broederplaneet.`, 
        tijd: 4_527_000_000
      }
    }
  },
  {
    input: [
      ["Warmte", "Graniet"], ["Druk", "Graniet"], ["Schist", "Warmte"], ["Schist", "Druk"] 
    ],
    hint: `Stenen worden compacter onder druk en hitte, zo ook graniet.`,
    output: [
      { naam: "Gneis", icoon: "icons/Gneis.png", map: "Aarde", 
        quote: `Geologists have a saying - rocks remember 
        <br><br>- Neil Armstrong`
      }
    ]
  },
  {
    input: [
      ["Graniet", "Lava"], ["Basalt", "Lava"]
    ],
    hint: `Laat magma de aardkorst in beweging houden...`,
    output: [
      { naam: "Platentektoniek", icoon: "icons/Platentektoniek.png", map: "Krachten",
        quote: `Loyalties shifting like the earth's tectonic plates ... changing my loves shape 
        <br><br>- Ranata Suzuki`
      },
      { naam: "Granietmagma", icoon: "icons/Granietmagma.png", map: "Vuur",
        quote: `Of course the entire planet Earth consists of magma under us, and only the very inner-core is different 
          <br><br>- Werner Herzog`
      }
    ],
    uitleg: {
      normal: {
        titel: "Platentektoniek",
        tekst: `Na de klap van de Maan herstelde de Aarde zich. Zwaartekracht sorteerde de elementen opnieuw en 
          wederom vormden zich een aardkorst en prille atmosfeer. Lava stroomde door de aardmantel, waardoor de 
          aardkorst in platen kon scheuren die tegen elkaar aan duwen. Waar de lava het aardoppervlakte bereikte,
          werden waterrijke gassen de fragiele atmosfeer in gepompt die na afkoeling de toestand aannamen van 
          vloeibaar water. De Aarde zou bevroren zijn geweest mits lavastromen hun weg naar buiten niet hadden 
          gevonden...`,
        tijd: 4_400_000_000
      }
    }
  },
  {
    input: ["Platentektoniek", "Lava"],
    hint: `Lava beweegt, dus laat het ook naar boven komen...`,
    output: [
      { naam: "Vulkaan", icoon: "icons/Vulkaan.png", map: "Landschap",
        quote: `Remind me that the most fertile lands were built by the fires of volcanoes 
        <br><br>- Andrea Gibson`
      },
      { naam: "As", icoon: "icons/As.png", map: "Vuur",
        quote: `Ashes to ashes. Dust to dust. We are nothing, but dust and to dust we shall return 
        <br><br>- Alexander Anderson`
      }
    ]
  },
  {
    input: [
      ["Platentektoniek", "Graniet"], ["Platentektoniek", "Basalt"]
    ],
    hint: `Die platentektoniek kan nog wel eens voor wat stenen reliëf zorgen...`,
    output: [
      { naam: "Berg", icoon: "icons/Berg.png", map: "Landschap",
        quote: `Swift as the wind. Quiet as the forest. Conquer like the fire. Steady as the mountain 
        <br><br>- Sun Tzu`
      }
    ]
  },
  {
    input: [
      ["Granietmagma", "Kou"], ["Granietmagma", "Water"]
    ],
    hint: `Ik zie potentie in granietmagma.. laat maar even rusten.`,
    output: [
      { naam: "Magmadamp", icoon: "icons/Magmadamp.png", map: "Vuur",
        quote: `The gases that igneous rocks contain, probably as essential features of the molten magma 
        <br><br>- A.J. Grenville`
      },
      { naam: "Kwarts", icoon: "icons/Kwarts.png", map: "Aarde",
        quote: `Quartz is as hard as anything it is likely to meet with in use 
        <br><br>- Frank Wade`
      },
      { naam: "Mica", icoon: "icons/Mica.png", map: "Aarde", 
        quote: `That great dark bit out there is mica, and all this that runs in a vein like is quartz. 
        Quartz and mica are the natural home of gold 
        <br><br>- Charles Reade`
      },
      { naam: "Veldspaat", icoon: "icons/Veldspaat.png", map: "Aarde", 
        quote: `Even the hardest rock can be worn away by water 
        <br><br>- Lucretius`
      }
    ]
  },
  {
    input: [
      ["Magmadamp", "Kou"], ["Regen", "Magmadamp"]
    ],
    hint: `Het neerregenen van magmadamp is een scheikundig feestje...`,
    output: [
      { naam: "Koper", icoon: "icons/Koper.png", map: "Chemie", 
        quote: `Through love scraps of copper are turned to gold 
        <br><br>- Rumi`
      },
      { naam: "Zilver", icoon: "icons/Zilver.png", map: "Chemie",
        quote: `Silver is purified in fire and so are we. It is in the most trying times that our real character 
        is shaped and revealed 
        <br><br>- Helen Keller`
      },
      { naam: "Goud", icoon: "icons/Goud.png", map: "Chemie", 
        quote: `Praise, like gold and diamonds, owes its value only to its scarcity 
        <br><br>- Samuel Johnson`
      },
      { naam: "Lood", icoon: "icons/Lood.png", map: "Chemie", 
        quote: `Lead is slow, elated, and resolved 
        <br><br>- Arthur Rimbaud`
      },
      { naam: "Zink", icoon: "icons/Zink.png", map: "Chemie", 
        quote: `Zinc is gray and its salts are colorless... in short, it is a boring metal
        <br><br>- Primo Levi`
      },
      { naam: "Tin", icoon: "icons/Tin.png", map: "Chemie", 
        quote: `The tin hat shines with a cold reflection, as though it wore the mind of the earth upon its brow 
        <br><br>- D.H. Lawrence`
      }
    ]
  },
//------------ THRESHOLD 1: WATER --------------//
  {
    input: [
      ["IJs", "Warmte"], ["Vuur", "IJs"]
    ],
    hint: `Nu zijn de omstandigheden juist om water te laten vloeien.`,
    output: [
      { naam: "Water", icoon: "icons/Water.png", map: "Water",
        quote: `Water is the softest thing, yet it can penetrate mountains and earth. 
        This shows clearly the principle of softness overcoming hardness 
        <br><br>- Lao Tzu`
      }
    ],
    uitleg: {
      threshold: {
        titel: "Water op Aarde", 
        tekst: `Je moet eerst nog wat meer halen...<br>`,
        tijd: 4_400_000_000,
        requirements: ["Radioactiviteit", "Sterrenstelsel", "Zwart Gat",
                       "Neptunus", "Uranus", "Saturnus", "Jupiter",
                       "Mars", "De Aarde", "De Maan", "Venus", "Mercurius", 
                       "Basalt", "Obsidiaan", "Platentektoniek", "Vulkaan"]
      },
      normal: {
        titel: "Water op Aarde",
        tekst: `4,4 miljard jaar geleden stabiliseerde de atmosfeer en konden watterijke gassen de toestand aannemen 
          van vloeibaar water...`,
        tijd: 4_400_000_000
      }
    }
  },
  {
    input: [
      ["Water", "IJzer"], ["Lucht", "IJzer"]
    ],
    hint: `Oei, dat gebeurt er dus als ijzer oxideert...`,
    output: [
      { naam: "Roest", icoon: "icons/Roest.png", map: "Chemie", 
        quote: `None can destroy iron, but its own rust can. Likewise none can destroy a person, but its own mindset can
        <br><br>- Ratan Tata`
      }
    ]
  },
  {
    input: ["Vuur", "Water"],
    hint: `Een big splash, vuur gedoofd en de energie kringelt omhoog...`,
    output: [
      { naam: "Damp", icoon: "icons/Damp.png", map: "Lucht", 
        quote: `Enthusiasm is the steam that drives the engine
        <br><br>- Napoleon Hill`
      }
    ]
  },
  {
    input: ["Lava", "Water"],
    hint: `Een big splash, vuur gedoofd en de energie kringelt omhoog...`,
    output: [
      { naam: "Damp", icoon: "icons/Damp.png", map: "Lucht", 
        quote: `Enthusiasm is the steam that drives the engine
        <br><br>- Napoleon Hill`
      },
      { naam: "Basalt", icoon: "icons/Basalt.png", map: "Aarde", 
        quote: `Every changes, even stone 
        <br><br>- Claude Monet`
      }
    ]
  },
  {
    input: [
      ["Graniet", "Water"], ["Graniet", "Meer"], ["Graniet", "Zee"], ["Graniet", "Oceaan"],
      ["Basalt", "Water"], ["Basalt", "Meer"], ["Basalt", "Zee"], ["Basalt", "Oceaan"],
      ["Gneis", "Water"], ["Gneis", "Meer"], ["Gneis", "Zee"], ["Gneis", "Oceaan"], ["Gneis", "Rivier"]
    ],
    hint: `Erosie, erosie, erosie...`,
    output: [
      { naam: "Zand", icoon: "icons/Zand.png", map: "Aarde", 
        quote: `Our life is but a grain of sand in the indifferent ocean of infinity 
        <br><br>- Sergei Devlatov`
      },
      { naam: "Klei", icoon: "icons/Klei.png", map: "Aarde", 
        quote: `Clay is used to make vases. But where there is no clay is where it is useful 
        <br><br>- Lao Tzu`
      }
    ]
  },
  {
    input: [
      ["Obsidiaan", "Water"], ["Obsidiaan", "Meer"], ["Rivier", "Obsidiaan"]
    ],
    hint: `Wat een glinsteringen, is het nog wel obsidiaan of kijk ik er dwars doorheen?`,
    output: [
      { naam: "Glas", icoon: "icons/Glas.png", map: "Aarde", 
        quote: `Some days seem to fit together like a stained glass window. A hundred little pieces of different color 
        and mood that, when combined, create a complete picture 
        <br><br>- Maggie Stiefvater`
      },
      { naam: "Klei", icoon: "icons/Klei.png", map: "Aarde", 
        quote: `Clay is used to make vases. But where there is no clay is where it is useful 
        <br><br>- Lao Tzu`
      }
    ]
  },
  {
    input: [
      ["De Maan", "Water"], ["De Maan", "Meer"], ["De Maan", "Zee"], ["De Maan", "Oceaan"],
      ["Wind", "Water"], ["Wind", "Meer"], ["Wind", "Zee"], ["Wind", "Oceaan"]
    ],
    hint: `De zichtbare invloed van de Maan zit 'm in de getijden.`,
    output: [
      { naam: "Golf", icoon: "icons/Golf.png", map: "Water", 
        quote: `You don't understand. You're not a wave. You're part of the ocean 
        <br><br>- Morrie Schwartz`
      }
    ]
  },
  {
    input: ["As", "Water"],
    hint: `As? Laat maar aanpappen en nathouden, dat wordt vanzelf weer wat.`, 
    output: [
      { naam: "Tufsteen", icoon: "icons/Tufsteen.png", map: "Aarde", 
        quote: `Life is not tough as rocks, it is as simple as your brain perceives 
        <br><br>- Myra Yadav`
      }
    ]
  },
  {
    input: [
      ["Kwarts", "Water"], ["Kwarts", "Meer"], ["Kwarts", "Zee"], ["Kwarts", "Oceaan"], ["Kwarts", "Regen"], 
      ["Kwarts", "Zure regen"], ["Rivier", "Kwarts"]
    ],
    output: [
      { naam: "Zand", icoon: "icons/Zand.png", map: "Aarde", 
        quote: `Our life is but a grain of sand in the indifferent ocean of infinity 
        <br><br>- Sergei Devlatov`
      }
    ]
  },
  {
    input: [
      ["Mica", "Water"], ["Mica", "Meer"], ["Mica", "Zee"], ["Mica", "Oceaan"], ["Mica", "Regen"],
      ["Veldspaat", "Water"], ["Veldspaat", "Meer"], ["Veldspaat", "Zee"], ["Veldspaat", "Oceaan"], 
      ["Veldspaat", "Regen"], ["Rivier", "Graniet"], ["Rivier", "Mica"], ["Rivier", "Veldspaat"],
      ["Obsidiaan", "Zee"], ["Obsidiaan", "Oceaan"], ["Kleisteen", "Water"], ["Kleisteen", "Meer"], 
      ["Kleisteen", "Zee"], ["Kleisteen", "Oceaan"], ["Kleisteen", "Regen"], ["Kleisteen", "Zure regen"], 
      ["Kleisteen", "Rivier"], ["Schalie", "Water"], ["Schalie", "Meer"], ["Schalie", "Zee"], 
      ["Schalie", "Oceaan"], ["Schalie", "Regen"], ["Schalie", "Rivier"], ["Leisteen", "Water"], 
      ["Leisteen", "Meer"], ["Leisteen", "Zee"], ["Leisteen", "Oceaan"], ["Leisteen", "Regen"], 
      ["Leisteen", "Rivier"], ["Fylliet", "Water"], ["Fylliet", "Meer"], ["Fylliet", "Zee"], 
      ["Fylliet", "Oceaan"], ["Fylliet", "Rivier"], ["Schist", "Water"], ["Schist", "Meer"], 
      ["Schist", "Zee"], ["Schist", "Oceaan"], ["Schist", "Rivier"]
    ],
    output: [
      { naam: "Klei", icoon: "icons/Klei.png", map: "Aarde", 
        quote: `Clay is used to make vases. But where there is no clay is where it is useful 
        <br><br>- Lao Tzu`
      }
    ]
  },
  {
    input: ["Water", "Water"],
    hint: `Hoe meer water, hoe beter.`,
    output: [
      { naam: "Meer", icoon: "icons/Meer.png", map: "Water", 
        quote: `Make your heart like a lake <br>with a calm, still surface and great depths of kindness
        <br><br>- Lao Tzu`
      }
    ]
  },
  {
    input: ["Damp", "Zwaartekracht"],
    hint: `Dampen pakken zich samen in nieuwe formaties...`,
    output: [
      { naam: "Wolk", icoon: "icons/Wolk.png", map: "Lucht", 
        quote: `The sky and the sun are always there. It's the clouds that come and go 
        <br><br>- Rachel Joyce`
      }
    ]
  },
  {
    input: [
      ["Damp", "Planeet"], ["Damp", "De Aarde"], ["Wolk", "De Aarde"]
    ],
    hint: `Wolken van damp kringelen rond... het is tijd om de planeten lucht te geven.`,
    output: [
      { naam: "Lucht", icoon: "icons/Lucht (Sky).png", map: "Lucht", 
        quote: `Stars are holes in the sky from which the light of the infinite shines 
        <br><br>- Confucius`
      }
    ]
  },
  {
    input: [
      ["Zand", "Meer"], ["Klei", "Meer"], ["Rivier", "Zand"], ["Rivier", "Klei"]
    ],
    hint: `Water op land kan verzanden...`,
    output: [
      { naam: "Ven", icoon: "icons/Ven.png", map: "Water", 
        quote: `Feather footed through the plashy fen passes the questing vole 
        <br><br>- Evelyn Waugh`
      }
    ]
  },
  {
    input: ["Zand", "Zand"],
    hint: `Zand zo ver je kan kijken.. dat kan ook mooi zijn.`,
    output: [
      { naam: "Woestijn", icoon: "icons/Woestijn.png", map: "Landschap", 
        quote: `If the desert is holy, it is because it is a forgotten place that allows us to remember the sacred 
        <br><br>- Terry Williams`
      }
    ]
  },
  {
    input: [
      ["Tufsteen", "Water"], ["Tufsteen", "Meer"], ["Tufsteen", "Zee"], ["Tufsteen", "Oceaan"], 
      ["Tufsteen", "Regen"], ["Rivier", "Tufsteen"]
    ],
    hint: `Wat een glinsteringen, is het nog wel tufsteen of kijk ik er dwars doorheen?`,
    output: [
      { naam: "Glas", icoon: "icons/Glas.png", map: "Aarde", 
        quote: `Some days seem to fit together like a stained glass window. 
        A hundred little pieces of different color and mood that, when combined, create a complete picture 
        <br><br>- Maggie Stiefvater`
      },
      { naam: "As", icoon: "icons/As.png", map: "Vuur", 
        quote: `Ashes to ashes. Dust to dust. We are nothing, but dust and to dust we shall return 
        <br><br>- Alexander Anderson`
      },
      { naam: "Klei", icoon: "icons/Klei.png", map: "Aarde", 
        quote: `Clay is used to make vases. But where there is no clay is where it is useful 
        <br><br>- Lao Tzu`
      }
    ]
  },
  {
    input: [
      ["Klei", "Warmte"], ["Druk", "Klei"]
    ],
    hint: `Kan je stenen ook kleien? Waarom niet.`,
    output: [
      { naam: "Kleisteen", icoon: "icons/Kleisteen.png", map: "Aarde",
        quote: `Everything changes, even stone 
        <br><br>- Claude Monet`
      }
    ]
  },
  {
    input: [
      ["Water", "Meer"], ["Meer", "Meer"]
    ],
    hint: `Meer water? Of een zee van water...`,
    output: [
      { naam: "Zee", icoon: "icons/Zee.png", map: "Water", 
        quote: `Water is the driving force of all nature
        <br><br>- Leonardo da Vinci`
      }
    ]
  },
  {
    input: [
      ["Wolk", "Zwaartekracht"], ["Wolk", "Water"], ["Wolk", "Berg"]
    ],
    hint: `Laat de wolken niet neerdalen, wie weet wat er dan gebeurt.`,
    output: [
      { naam: "Regen", icoon: "icons/Regen.png", map: "Water", 
        quote: `It can't rain all the time 
        <br><br>- James O'Barr`
      }
    ]
  },
  {
    input: [
      ["Wolk", "Rook"], ["Regen", "Rook"]
    ],
    hint: `Oei, oei, regen uit zwarte wolken.`,
    output: [
      { naam: "Zure regen", icoon: "icons/Zure_regen.png", map: "Water", 
        quote: `Tragedy is like strong acid - it dissolves away all but the very gold of truth 
        <br><br>- D.H. Lawrence`
      }
    ]
  },
  {
    input: [
      ["Wolk", "Wolk"], ["Wind", "Wolk"], ["Wind", "Wind"]
    ],
    hint: `Wanneer de wolken samenkomen, barst het los.`,
    output: [
      { naam: "Storm", icoon: "icons/Storm.png", map: "Lucht", 
        quote: `If you want to see the sunshine, you have to weather the storm 
        <br><br>- Frank Lane`
      },
      { naam: "Bliksem", icoon: "icons/Bliksem.png", map: "Vuur", 
        quote: `Serenity is not freedom from the storm, but peace amid the storm 
        <br><br>- Barbara West`
      }
    ]
  },
  {
    input: [
      ["Lucht", "Warmte"], ["Lucht", "Kou"]
    ],
    hint: `Ik zucht bij verschillende temperaturen in de lucht.`,
    output: [
      { naam: "Wind", icoon: "icons/Wind.png", map: "Lucht", 
        quote: `Sunshine is delicious, rain is refreshing, wind braces us up, snow is exhilarating: there is really 
        no such thing as bad weather, only different kinds of good weather 
        <br><br>- John Ruskin`
      }
    ]
  },
  {
    input: [
      ["Kleisteen", "Warmte"], ["Kleisteen", "Druk"]
    ],
    hint: `Hm.. is er nog een stenen metamorfose door druk en hitte te bedenken?`,
    output: [
      { naam: "Schalie", icoon: "icons/Schalie.png", map: "Aarde", 
        quote: `In the structure of shale we read the operations of water and the lapse of time 
        <br><br>- James Hutton`
      }
    ]
  }, 
  {
    input: ["Lucht", "Vuur"],
    output: [
      { naam: "Rook", icoon: "icons/Rook.png", map: "Lucht", 
        quote: `Surely where there's smoke there's fire? No, where there's so much smoke there's smoke
        <br><br>- John Wheeler`
      }
    ]
  },
  {
    input: [
      ["Zee", "Warmte"], ["Zee", "Lava"]
    ],
    hint: `Hm.. wat houd je over als zout water snel verdampt?`,
    output: [
      { naam: "Zout", icoon: "icons/Zout.png", map: "Chemie", 
        quote: `Salt is born of the purest parents: the sun and the sea 
        <br><br>- Pythagoras`
      },
      { naam: "Gipssteen", icoon: "icons/Gipssteen.png", map: "Aarde",
        quote: `Rocks are the books of the earth 
        <br><br>- Charles Lyell`
      },
      { naam: "Damp", icoon: "icons/Damp.png", map: "Lucht", 
        quote: `Enthusiasm is the steam that drives the engine
        <br><br>- Napoleon Hill`
      }
    ]
  },
  {
    input: ["Berg", "Zee"],
    hint: `Een speciale plek is daar waar de berg het water raakt..`,
    output: [
      { naam: "Kust", icoon: "icons/Kust.png", map: "Landschap", 
        quote: `Because there's nothing more beautiful than the way the ocean refuses to stop kissing the shoreline, 
        no matter how many times it's sent away 
        <br><br>- Sarah Kay`
      }
    ]
  },
  {
    input: [
      ["Zee", "Water"], ["Zee", "Zee"]
    ],
    hint: `Ik heb meer zee nodig om in te schuilen.`,
    output: [
      { naam: "Oceaan", icoon: "icons/Oceaan.png", map: "Water", 
        quote: `Individually, we are one drop. Together, we are an ocean 
        <br><br>- Ryunosuke Akutagawa`
      }
    ]
  },
  {
    input: ["Regen", "Kou"],
    hint: `Wat als druppels dwarrelen als kristallen?`,
    output: [
      { naam: "Sneeuw", icoon: "icons/Sneeuw.png", map: "Water", 
        quote: `The first fall of snow is not only an event, it is a magical event. You go to bed in one kind of a 
        world and wake up in another quite different 
        <br><br>- J.B. Priestley`
      }
    ]
  },
  {
    input: ["Regen", "IJs"],
    hint: `Er mist nog iets.. harde regenbolletjes?`,
    output: [
      { naam: "Hagel", icoon: "icons/Hagel.png", map: "Water", 
        quote: `Life is a hailstorm of distractions. It's not the monster that stops us but the mosquito 
        <br><br>- Robert Allen`
      }
    ]
  },
  {
    input: ["Regen", "Berg"],
    hint: `Bergen zouden glijbanen kunnen zijn van wolken naar de zee...`,
    output: [
      { naam: "Rivier", icoon: "icons/Rivier.png", map: "Water", 
        quote: `No man ever steps in the same river twice, for it's not the same river and he's not the same man 
        <br><br>- Heraclitus`
      }
    ]
  }, 
  {
    input: [
      ["Zure regen", "Graniet"], ["Zure regen", "Basalt"], ["Zure regen", "Gneis"] 
    ],
    hint: `Kijk.. als de regen maar zuur genoeg is, weekt het vanzelf de elementen los.`,
    output: [
      { naam: "Silicium", icoon: "icons/Silicium.png", map: "Chemie", 
        quote: `Since the Internet of Things is built on silicon, on the tremendous instability of modern electronics, 
        it's built on literal sand 
        <br><br>- Bruce Sterling`
      }, 
      { naam: "Kalk", icoon: "icons/Kalk.png", map: "Chemie", 
        quote: `The hills of chalk and limestone rise like the bones of the earth 
        <br><br>- Wendell Berry`
      },
      { naam: "Aluminium", icoon: "icons/Aluminium.png", map: "Chemie", 
        quote: `In the dusk of the railway shed, aluminium gleamed like a promise etched in cold light 
        <br><br>- V.S. Naipaul`
      }, 
      { naam: "IJzer", icoon: "icons/IJzer.png", map: "Chemie", 
        quote: `Do not wait to strike till the iron is hot but make it hot by striking 
        <br><br>- William Yeatsu`
      },
      { naam: "Roest", icoon: "icons/Roest.png", map: "Chemie", 
        quote: `None can destroy iron, but its own rust can. Likewise none can destroy a person, but its own mindset can
        <br><br>- Ratan Tata`
      },
      { naam: "Klei", icoon: "icons/Klei.png", map: "Aarde", 
        quote: `Clay is used to make vases. But where there is no clay is where it is useful 
        <br><br>- Lao Tzu`
      },
      { naam: "Zand", icoon: "icons/Zand.png", map: "Aarde",
        quote: `Our life is but a grain of sand in the indifferent ocean of infinity 
        <br><br>- Sergei Devlatov`
      }
    ]
  }, 
  {
    input: ["Zure regen", "Obsidiaan"],
    hint: `Kijk.. als de regen maar zuur genoeg is, weekt het vanzelf de elementen los.`,
    output: [
      { naam: "Glas", icoon: "icons/Glas.png", map: "Aarde",
        quote: `Some days seem to fit together like a stained glass window. A hundred little pieces of different color 
        and mood that, when combined, create a complete picture 
        <br><br>- Maggie Stiefvater`
      },
      { naam: "Silicium", icoon: "icons/Silicium.png", map: "Chemie", 
        quote: `Since the Internet of Things is built on silicon, on the tremendous instability of modern electronics, 
        it's built on literal sand 
        <br><br>- Bruce Sterling`
      }, 
      { naam: "Kalk", icoon: "icons/Kalk.png", map: "Chemie", 
        quote: `The hills of chalk and limestone rise like the bones of the earth 
        <br><br>- Wendell Berry`
      },
      { naam: "Aluminium", icoon: "icons/Aluminium.png", map: "Chemie", 
        quote: `In the dusk of the railway shed, aluminium gleamed like a promise etched in cold light 
        <br><br>- V.S. Naipaul`
      }, 
      { naam: "IJzer", icoon: "icons/IJzer.png", map: "Chemie", 
        quote: `Do not wait to strike till the iron is hot but make it hot by striking 
        <br><br>-William Yeatsu`
      },
      { naam: "Roest", icoon: "icons/Roest.png", map: "Chemie", 
        quote: `None can destroy iron, but its own rust can. Likewise none can destroy a person, but its own mindset can
        <br><br>- Ratan Tata`
      },
      { naam: "Klei", icoon: "icons/Klei.png", map: "Aarde", 
        quote: `Clay is used to make vases. But where there is no clay is where it is useful 
        <br><br>- Lao Tzu`
      }
    ]
  },
  {
    input: [ 
      ["Zure regen", "Mica"], ["Zure regen", "Veldspaat"]
    ],
    hint: `Kijk.. als de regen maar zuur genoeg is, weekt het vanzelf de elementen los.`,
    output: [
      { naam: "Silicium", icoon: "icons/Silicium.png", map: "Chemie", 
        quote: `Since the Internet of Things is built on silicon, on the tremendous instability of modern electronics, 
        it's built on literal sand 
        <br><br>- Bruce Sterling`
      }, 
      { naam: "Kalk", icoon: "icons/Kalk.png", map: "Chemie", 
        quote: `The hills of chalk and limestone rise like the bones of the earth 
        <br><br>- Wendell Berry`
      },
      { naam: "Aluminium", icoon: "icons/Aluminium.png", map: "Chemie", 
        quote: `In the dusk of the railway shed, aluminium gleamed like a promise etched in cold light 
        <br><br>- V.S. Naipaul`
      }, 
      { naam: "IJzer", icoon: "icons/IJzer.png", map: "Chemie", 
        quote: `Do not wait to strike till the iron is hot but make it hot by striking 
        <br><br>- William Yeatsu`
      },
      { naam: "Klei", icoon: "icons/Klei.png", map: "Aarde", 
        quote: `Clay is used to make vases. But where there is no clay is where it is useful 
        <br><br>- Lao Tzu`
      }
    ]
  },
  {
    input: ["Tufsteen", "Zure regen"],
    hint: `Kijk.. als de regen maar zuur genoeg is, weekt het vanzelf de elementen los.`,
    output: [
      { naam: "Glas", icoon: "icons/Glas.png", map: "Aarde", 
        quote: `Some days seem to fit together like a stained glass window. A hundred little pieces of different color 
        and mood that, when combined, create a complete picture 
        <br><br>- Maggie Stiefvater`
      },
      { naam: "Silicium", icoon: "icons/Silicium.png", map: "Chemie", 
        quote: `Since the Internet of Things is built on silicon, on the tremendous instability of modern electronics, 
        it's built on literal sand 
        <br><br>- Bruce Sterling`
      }, 
      { naam: "Kalk", icoon: "icons/Kalk.png", map: "Chemie", 
        quote: `The hills of chalk and limestone rise like the bones of the earth 
        <br><br>- Wendell Berry`
      },
      { naam: "Aluminium", icoon: "icons/Aluminium.png", map: "Chemie", 
        quote: `In the dusk of the railway shed, aluminium gleamed like a promise etched in cold light 
        <br><br>- V.S. Naipaul`
      }, 
      { naam: "IJzer", icoon: "icons/IJzer.png", map: "Chemie", 
        quote: `Do not wait to strike till the iron is hot but make it hot by striking 
        <br><br>-William Yeatsu`
      },
      { naam: "Roest", icoon: "icons/Roest.png", map: "Chemie", 
        quote: `None can destroy iron, but its own rust can. Likewise none can destroy a person, but its own mindset can
        <br><br>- Ratan Tata`
      },
      { naam: "Klei", icoon: "icons/Klei.png", map: "Aarde", 
        quote: `Clay is used to make vases. But where there is no clay is where it is useful 
        <br><br>- Lao Tzu`
      },
      { naam: "As", icoon: "icons/As.png", map: "Vuur", 
        quote: `Ashes to ashes. Dust to dust. We are nothing, but dust and to dust we shall return 
        <br><br>- Alexander Anderson`
      }
    ]
  },
  {
    input: ["Wind", "Storm"],
    hint: `Het mag ook megalomaner: meer storm, meer wind...`,
    output: [
      { naam: "Orkaan", icoon: "icons/Orkaan.png", map: "Lucht", 
        quote: `The first rule of hurricane coverage is that every broadcast must begin 
        with palm trees bending in the wind 
        <br><br>- Carl Hiaasen`
      }
    ]
  },
  {
    input: [
      ["Schalie", "Warmte"], ["Schalie", "Druk"]
    ],
    hint: `Het mag ook megalomaner: meer storm, meer wind...`,
    output: [
      { naam: "Leisteen", icoon: "icons/Leisteen.png", map: "Aarde", 
        quote: `The slates of Wales furnish one of the most striking examples of cleavage produced by pressure 
        <br><br>- Archibald Geikie`
      }
    ]
  },
  {
    input: [
      ["Zout", "Warmte"], ["Druk", "Zout"]
    ],
    hint: `Ook zout kan door de grond zakken en dan wordt het zwaar.`,
    output: [
      { naam: "Steenzout", icoon: "icons/Steenzout.png", map: "Chemie", 
        quote: `Salt is the only rock directly consumed by man 
        <br><br>- Margaret Visser`
      }
    ]
  },
  {
    input: [
      ["Gipssteen", "Water"], ["Gipssteen", "Meer"], ["Gipssteen", "Zee"], ["Gipssteen", "Oceaan"],
      ["Rivier", "Gipssteen"]
    ],
    hint: `Het eroderen van meer stenen kan nog wel eens van pas komen...`,
    output: [
      { naam: "Gips", icoon: "icons/Gips.png", map: "Aarde", 
        quote: `The broken bone, once set together, is stronger than ever 
        <br><br>- John Lyly`
      }
    ]
  },
  {
    input: ["Kust", "Zand"],
    hint: `Versleten steen aan de kust kan slijten tot zachte grond.`,
    output: [
      { naam: "Strand", icoon: "icons/Strand.png", map: "Landschap", 
        quote: `At the beach, life is different. Time doesn't move hour to hour but mood to moment. 
        We live by the currents, plan by the tides, and follow the sun 
        <br><br>- Sandy Gingras`
      }
    ]
  },
  {
    input: [
      ["Kust", "Storm"], ["Kust", "Orkaan"]
    ],
    hint: `Slaat het weer om? Dan wordt de kust als eerste de dupe...`,
    output: [
      { naam: "Overstroming", icoon: "icons/Overstroming.png", map: "Water", 
        quote: `Great floods have flown from simple sources 
        <br><br>- William Shakespeare`
      }
    ]
  },
  {
    input: [
      ["Vulkaan", "Oceaan"], ["Berg", "Oceaan"] 
    ],
    hint: `De oceaanvloer die zich een weg naar boven baant? Dat kan natuurlijk ook.`,
    output: [
      { naam: "Eiland", icoon: "icons/Eiland.png", map: "Landschap", 
        quote: `We are like islands in the sea, separate on the surface but connected in the deep 
        <br><br>- William James`
      }
    ]
  },
  {
    input: ["Rivier", "Basalt"],
    output: [
      { naam: "Goud", icoon: "icons/Goud.png", map: "Chemie", 
        quote: `Praise, like gold and diamonds, owes its value only to its scarcity 
        <br><br>- Samuel Johnson`
      },
      { naam: "Zand", icoon: "icons/Zand.png", map: "Aarde",
        quote: `Our life is but a grain of sand in the indifferent ocean of infinity 
        <br><br>- Sergei Devlatov`
      },
      { naam: "Klei", icoon: "icons/Klei.png", map: "Aarde", 
        quote: `Clay is used to make vases. But where there is no clay is where it is useful 
        <br><br>- Lao Tzu`
      }
    ]
  },
  {
    input: [
      ["Silicium", "Zand"], ["Kalk", "Zand"], ["Druk", "Zand"] 
    ],
    hint: `Silicium verhardt en kan verzanden in steen.`,
    output: [
      { naam: "Zandsteen", icoon: "icons/Zandsteen.png", map: "Aarde", 
        quote: `Write your worries in the sand, carve your blessings in stone 
        <br><br>- Robert Kennedy`
      }
    ]
  },
  {
    input: [
      ["Kalk", "Warmte"], ["Kalk", "Zee"], ["Kalk", "Zand"]
    ],
    hint: `Tot op het bot verkalken... dat wordt weer steen.`,
    output: [
      { naam: "Kalksteen", icoon: "icons/Kalksteen.png", map: "Aarde", 
        quote: `If by some fiat I had to restrict all this writing to one sentence, this is the one I would choose: 
        The summit of Mt. Everest is marine limestone 
        <br><br>- John McPhee`
      }
    ]
  },
  {
    input: [
      ["Leisteen", "Warmte"], ["Leisteen", "Druk"]
    ],
    hint: `Onder hoge druk wordt alles... vast?`,
    output: [
      { naam: "Fylliet", icoon: "icons/Fylliet.png", map: "Aarde", 
        quote: `Phyllite shows a silky sheen due to the minute scales of mica developed by metamorphism 
        <br><br>- Rollin Salisbury`
      }
    ]
  },
  {
    input: [
      ["Zandsteen", "Warmte"], ["Druk", "Zandsteen"]
    ],
    hint: `Het mooiste steen ontstaat onder hoge druk en warmte.`,
    output: [
      { naam: "Kwartsiet", icoon: "icons/Kwartsiet.png", map: "Aarde", 
        quote: `The conversion of sandstone into quartzite is sometimes the work of percolating water
        under ordinary conditions 
        <br><br>- John Flett`
      }
    ]
  },
  {
    input: [
      ["Kalksteen", "Warmte"], ["Druk", "Kalksteen"]
    ],
    hint: `Mijn favoriete steen moet nog komen.. en het komt uit wit gesteente.`,
    output: [
      { naam: "Marmer", icoon: "icons/Marmer.png", map: "Aarde", 
        quote: `The marble not yet carved can hold the form of every thought the greatest artist has 
        <br><br>- Michelangelo`
      }
    ]
  },
  {
    input: [
      ["Zandsteen", "Water"], ["Zandsteen", "Meer"], ["Zandsteen", "Zee"], ["Zandsteen", "Oceaan"], 
      ["Zandsteen", "Regen"], ["Zandsteen", "Zure regen"], ["Zandsteen", "Rivier"], ["Kwartsiet", "Water"]
    ],
    output: [
      { naam: "Zand", icoon: "icons/Zand.png", map: "Aarde", 
        quote: `Our life is but a grain of sand in the indifferent ocean of infinity 
        <br><br>- Sergei Devlatov`
      }
    ]
  },
  {
    input: [
      ["Kwartsiet", "Meer"], ["Kwartsiet", "Zee"], ["Kwartsiet", "Oceaan"], ["Kwartsiet", "Regen"], 
      ["Kwartsiet", "Zure regen"], ["Kwartsiet", "Rivier"]
    ],
    output: [
      { naam: "Kwarts", icoon: "icons/Kwarts.png", map: "Aarde", 
        quote: `Quartz is as hard as anything it is likely to meet with in use 
        <br><br>- Frank Wade`
      }
    ]
  },
  {
    input: [
      ["Kalksteen", "Water"], ["Kalksteen", "Meer"], ["Kwartsiet", "Regen"], ["Kwartsiet", "Rivier"],
      ["Marmer", "Water"], ["Marmer", "Meer"], ["Marmer", "Zee"], ["Marmer", "Oceaan"], ["Marmer", "Rivier"]
    ],
    output: [
      { naam: "Kalk", icoon: "icons/Kalk.png", map: "Chemie", 
        quote: `The hills of chalk and limestone rise like the bones of the earth 
        <br><br>- Wendell Berry`
      }
    ]
  },
  {
    input: [
      ["Kalksteen", "Zee"], ["Kalksteen", "Oceaan"], ["Marmer", "Regen"]
    ],
    hint: `Een mineraal ontbreekt nog.. uit verwering van wit gesteente.`,
    output: [
      { naam: "Calciet", icoon: "icons/Calciet.png", map: "Aarde", 
        quote: `Through calcite, the air took on a strange luminousness, as though the light itself were split into 
        delicate fragments 
        <br><br>- Albert Durer`
      },
      { naam: "Kalk", icoon: "icons/Kalk.png", map: "Chemie", 
        quote: `The hills of chalk and limestone rise like the bones of the earth 
        <br><br>- Wendell Berry`
      }
    ]
  },
  {
    input: [
      ["Kalksteen", "Zure regen"], ["Calciet", "Zure regen"]
    ],
    hint: `Waar zure regen soms niet goed voor kan zijn..`,
    output: [
      { naam: "Sulfaat", icoon: "icons/Sulfaat.png", map: "Chemie",  
        quote: `Sulfate ion, when present in significant amount, tends to inhibit the growth of gypsum 
        <br><br>- Linus Pauling`
      },
      { naam: "Nitraat", icoon: "icons/Nitraat.png", map: "Chemie", 
        quote: `For nitrates are not the land, nor phosphates, nor the fiber of the cotton. They are its trace, 
        its breath, but the land is so much more 
        <br><br>- John Steinbeck`
      },
      { naam: "Kalk", icoon: "icons/Kalk.png", map: "Chemie", 
        quote: `The hills of chalk and limestone rise like the bones of the earth 
        <br><br>- Wendell Berry`
      }
    ]
  },
  {
    input: [
      ["Fylliet", "Warmte"], ["Fylliet", "Druk"]
    ],
    hint: `Fylliet is slechts een tussenstadium.. er komt nog meer.`,
    output: [
      { naam: "Schist", icoon: "icons/Schist.png", map: "Aarde", 
        quote: `The schist is contorted, glittering with mica, a record of heat and pressure beyond imagination 
        <br><br>- John McPhee`
      }
    ]
  },
  {
    input: [
      ["Fylliet", "Regen"], ["Schist", "Regen"]
    ],
    output: [ 
      { naam: "Mica", icoon: "icons/Mica.png", map: "Aarde", 
        quote: `That great dark bit out there is mica, and all this that runs in a vein like is quartz. 
        Quartz and mica are the natural home of gold 
        <br><br>- Charles Reade`
      },
      { naam: "Klei", icoon: "icons/Klei.png", map: "Aarde", 
        quote: `Clay is used to make vases. But where there is no clay is where it is useful 
        <br><br>- Lao Tzu`
      }
    ]
  },
  {
    input: [ 
      ["Fylliet", "Zure regen"], ["Schist", "Zure regen"]
    ],
    hint: `Kijk.. als de regen maar zuur genoeg is, weekt het vanzelf de elementen los.`,
    output: [
      { naam: "Silicium", icoon: "icons/Silicium.png", map: "Chemie", 
        quote: `Since the Internet of Things is built on silicon, on the tremendous instability of modern electronics, 
        it's built on literal sand 
        <br><br>- Bruce Sterling`
      }, 
      { naam: "Aluminium", icoon: "icons/Aluminium.png", map: "Chemie", 
        quote: `In the dusk of the railway shed, aluminium gleamed like a promise etched in cold light 
        <br><br>- V.S. Naipaul`
      },
      { naam: "Mica", icoon: "icons/Mica.png", map: "Aarde", 
        quote: `That great dark bit out there is mica, and all this that runs in a vein like is quartz. 
        Quartz and mica are the natural home of gold 
        <br><br>- Charles Reade`
      },
      { naam: "IJzer", icoon: "icons/IJzer.png", map: "Chemie", 
        quote: `Do not wait to strike till the iron is hot but make it hot by striking 
        <br><br>-William Yeatsu`
      },
      { naam: "Klei", icoon: "icons/Klei.png", map: "Aarde", 
        quote: `Clay is used to make vases. But where there is no clay is where it is useful 
        <br><br>- Lao Tzu`
      }
    ]
  },
  {
    input: ["Marmer", "Zure regen"],
    hint: `Waar zure regen soms niet goed voor kan zijn..`,
    output: [
      { naam: "Sulfaat", icoon: "icons/Sulfaat.png", map: "Chemie", 
        quote: `Sulfate ion, when present in significant amount, tends to inhibit the growth of gypsum 
        <br><br>- Linus Pauling`
      },
      { naam: "Nitraat", icoon: "icons/Nitraat.png", map: "Chemie", 
        quote: `For nitrates are not the land, nor phosphates, nor the fiber of the cotton. They are its trace, 
        its breath, but the land is so much more 
        <br><br>- John Steinbeck`
      },
      { naam: "Calciet", icoon: "icons/Calciet.png", map: "Aarde", 
        quote: `Through calcite, the air took on a strange luminousness, as though the light itself were split into 
        delicate fragments 
        <br><br>- Albert Durer`
      },
      { naam: "Kalk", icoon: "icons/Kalk.png", map: "Chemie", 
        quote: `The hills of chalk and limestone rise like the bones of the earth 
        <br><br>- Wendell Berry`
      }
    ]
  },
//------------ THRESHOLD 2: LEVEN --------------//
  {
    input: [
      ["Bliksem", "Water"], ["Bliksem", "Meer"], ["Bliksem", "Zee"], ["Bliksem", "Oceaan"], 
      ["Bliksem", "Golf"]
    ],
    hint: `Nu zijn de omstandigheden juist.. de vijfde natuurkracht strijdend voor diens voortbestaan.`,
    output: [
      { naam: "Leven", icoon: "icons/Leven.png", map: "Krachten", 
        quote: `Life is not a problem to be solved, but a reality to be experienced 
        <br><br>- Søren Kierkegaard`
      },
      { naam: "Luca", icoon: "icons/Luca.png", map: "Pril leven", 
        quote: `Life originated in the sea, and about eighty percent of it is still there 
        <br><br>- Isaac Asimov`
      }
    ],
    uitleg: {
      threshold: {
        titel: "Leven", 
        tekst: "Je moet eerst nog wat meer halen...",
        tijd: 4_400_000_000,
        requirements: ["Rivier", "Tufsteen", "Koper", "Zure regen", "Kust", "Eiland", 
          "Roest", "Zand", "Klei", "Glas", "Golf", "Wind", "Zout", "Kalk"]
      },
      normal: {
        titel: "Leven",
        tekst: `Eerste leven`,
        tijd: 4_400_000_000
      }
    }
  },
  {
    input: [
      ["Leven", "Kalk"], ["Evolutie", "Kalk"], ["Oerbilateria", "Kalk"]
    ],
    hint: `Wat leven wel niet met een beetje kalk kan doen...`,
    output: [
      { naam: "Bot", icoon: "icons/Bot.png", map: "Biologie", 
        quote: `In a way, humans are not made of skin and bones as such, as we're made of stories
        <br><br>- Sue Monk Kidd`
      }
    ]
  },
  {
    input: [
      ["Luca", "Elektriciteit"], ["Luca", "Leven"]
    ],
    hint: `Een grotere schok is nodig om de motortjes van die zombiecellen te laten blijven draaien...`,
    output: [
      { naam: "Bacteriën", icoon: "icons/Bacteriën.png", map: "Pril leven", 
        quote: `We are all of us walking communities of bacteria. The world shimmers, a pointillist landscape
        made of tiny living beings 
        <br><br>- Lynn Margulis`
      },
      { naam: "Virus", icoon: "icons/Virus.png", map: "Pril leven", 
        quote: `A virus has three purposes: to duplicate, to infiltrate and to spread from one host to the next. 
        Ultimately, even a single virus can shut down an entire system 
        <br><br>- Wayne Dyer`
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
      ["Oerbilateria", "Kou"], ["Oerbilateria", "Radioactiviteit"], ["Oerbilateria", "IJs"], ["Oerbilateria", "Vuur"], ["Oerbilateria", "Lava"],
      ["Plakdiertjes", "Kou"], ["Plakdiertjes", "Radioactiviteit"], ["Plakdiertjes", "IJs"], ["Plakdiertjes", "Vuur"], ["Plakdiertjes", "Lava"],
      ["Roodwieren", "Kou"], ["Roodwieren", "Radioactiviteit"], ["Roodwieren", "IJs"], ["Roodwieren", "Vuur"], ["Roodwieren", "Lava"],
      ["Steenwortelalgen", "Kou"], ["Steenwortelalgen", "Radioactiviteit"], ["Steenwortelalgen", "IJs"], ["Steenwortelalgen", "Vuur"], ["Steenwortelalgen", "Lava"],
      ["Groenwieren", "Kou"], ["Groenwieren", "Radioactiviteit"], ["Groenwieren", "IJs"], ["Groenwieren", "Vuur"], ["Groenwieren", "Lava"]
    ],
    hint: `Aan al het leven komt een einde... behalve aan leven zelf?`,
    output: [
      { naam: "Dood", icoon: "icons/Dood.png", map: "Krachten", 
        quote: `Death does not concern us, because as long as we exist, death is not here. And when it does come, 
        we no longer exist 
        <br><br>- Epicurus`
      },
      { naam: "Detritus", icoon: "icons/Detritus.png", map: "Biologie", 
        quote: `I choose not to make a graveyard of my body for the rotting corpses of dead animals 
        <br><br>- George Shaw`
      }
    ]
  },
  {
    input: ["Bacteriën", "Leven"],
    hint: `Hoe meer bacteriën, hoe meer variatie...`,
    output: [
      { naam: "Evolutie", icoon: "icons/Evolutie.png", map: "Biologie", 
        quote: `It is not the strongest of the species that survives, nor the most intelligent that survives. 
        It is the one that is the most adaptable to change, that lives within the means available and works 
        co-operatively against common threats 
        <br><br>- Charles Darwin`
      }
    ]
  },
  {
    input: ["Bacteriën", "Bacteriën"],
    hint: `Kolonies bacteriën zo groot als rotsen? Now we're talking.`,
    output: [
      { naam: "Stromatolieten", icoon: "icons/Stromatolieten.png", map: "Pril leven", 
        quote: `For the first half of geological time our ancestors were bacteria. Most creatures still are bacteria, 
        and each one of our trillions of cells is a colony of bacteria 
        <br><br>- Richard Dawkins`
      }
    ]
  },
  {
    input: ["Evolutie", "Bacteriën"],
    hint: `Bacteriën zijn geavanceerde cellen, maar die cel kan nog veel geavanceerder.`,
    output: [
      { naam: "Blauwalgen", icoon: "icons/Blauwalgen.png", map: "Pril leven", 
        quote: `No matter how politely one says it, we owe our existence to the farts of blue-green algae 
        <br><br>- Diane Ackerman`
      },
      { naam: "Leca", icoon: "icons/Leca.png", map: "Pril leven", 
        quote: `The cell is immortal. It is merely the fluid in which it floats that degenerates. Renew this fluid 
        at regular intervals, give the cells at they require for nutrition, and as far as we know, the pulsation of 
        life can go on forever 
        <br><br>- Alexis Carrel`
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
      ["Roodwieren", "Straling"], ["Roodwieren", "Ster"],
      ["Steenwortelalgen", "Straling"], ["Steenwortelalgen", "Ster"],
      ["Groenwieren", "Straling"], ["Groenwieren", "Ster"]
    ],
    hint: `Het regent zonnestralen en dus regent het voedsel voor archaeplastiden.`,
    output: [
      { naam: "Fotosynthese", icoon: "icons/Fotosynthese.png", map: "Biologie", 
        quote: `He had a love affair with photosynthesis. He could talk about moss for an hour. He said that plants 
        carried wisdom humans would never be around long enough to understand 
        <br><br>- Anthony Doerr`
      }
    ]
  },
  {
    input: [
      ["Bacteriën", "Dood"], ["Stromatolieten", "Dood"], ["Blauwalgen", "Dood"], ["Leca", "Dood"],
      ["Amoebe", "Dood"], ["Foraminiferen", "Dood"], ["Schimmel", "Dood"], ["Sponzen", "Dood"],
      ["Parasieten", "Dood"], ["Archaeplastiden", "Dood"], ["Koraal", "Dood"], ["Rode algen", "Dood"],
      ["Groene algen", "Dood"], ["Neteldiervoorouder", "Dood"], ["Oerbilateria", "Dood"],
      ["Roodwieren", "Dood"], ["Steenwortelalgen", "Dood"], ["Groenwieren", "Dood"]
    ],
    output: [
      { naam: "Detritus", icoon: "icons/Detritus.png", map: "Biologie", 
        quote: `I choose not to make a graveyard of my body for the rotting corpses of dead animals 
        <br><br>- George Shaw`
      }
    ]
  },
  {
    input: [
      ["Leca", "Basalt"], ["Leca", "Klei"], ["Aarde", "Leca"] 
    ],
    hint: `Als zelfs 1 cel kleine voetjes kan hebben, dan leerde het lopen op de bodem.`,
    output: [
      { naam: "Amoebe", icoon: "icons/Amoebe.png", map: "Pril leven", 
        quote: `Not all living creatures die. An amoeba, for example, need never die: it need not even, like certain 
        generals, fade away. It just divides and becomes two new amoebas 
        <br><br>- George Wald`
      }
    ]
  },
  {
    input: ["Leca", "Zand"],
    hint: `Wat gebruikt een eencellige als schild? Juist ja, een zandkorrel.`,
    output: [
      { naam: "Foraminiferen", icoon: "icons/Foraminiferen.png", map: "Pril leven", 
        quote: `The deep-sea ooze is largely made up of the shells of foraminifera 
        <br><br>- Thomas Huxley`
      }
    ]
  },
  {
    input: ["Leca", "Silicium"],
    hint: `Het vroegste skelet bestond uit silicium.. en er was maar 1 cel voor nodig.`,
    output: [
      { naam: "Stralendiertjes", icoon: "icons/Stralendiertjes.png", map: "Pril leven", 
        quote: `The siliceous skeletons of the radiolaria are among the most exquisite products of organic nature 
        <br><br>- Ernst Haeckel`
      }
    ]
  },
  {
    input: ["Leca", "Detritus"],
    hint: `De een zijn dood is de ander zijn brood.. maar wat zijn ze broodnodig.`,
    output: [
      { naam: "Schimmel", icoon: "icons/Schimmel.png", map: "Pril leven",
        quote: `Fungi are the interface organisms between life and death 
        <br><br>- Paul Stamets`
      }
    ]
  },
  {
    input: ["Leca", "Evolutie"],
    hint: `Schimmel eet dood materiaal, planten hebben fotosynthese, maar welke eerste meercelligen aten leven?`,
    output: [
      { naam: "Haar", icoon: "icons/Haar.png", map: "Biologie", 
        quote: `And forget not that the earth delights to feel your bare feet and the winds long to play with your hair 
        <br><br>- Khalid Gibran`
      },
      { naam: "Weefsel", icoon: "icons/Weefsel.png", map: "Biologie", 
        quote: `That's the way it is: life includes a lot of empty space. We are one-tenth living tissue, nine-tenths 
        water; life is one-tenth Here and Now, nine-tenths a history lesson. For most of the time the Here and Now is 
        neither now nor here 
        <br><br>- Graham Swift`
      },
      { naam: "Parasieten", icoon: "icons/Parasieten.png", map: "Pril leven", 
        quote: `Thought, like any parasite, cannot exist without a compliant host 
        <br><br>- Bernard Beckett`
      },
      { naam: "Sponzen", icoon: "icons/Sponzen.png", map: "Pril leven", 
        quote: `Be like a sponge when it comes to each new experience. If you want to be able to express it well, you 
        must first be able to absorb it well 
        <br><br>- Jim Rohn`
      }
    ]
  },
  {
    input: ["Leca", "Blauwalgen"],
    hint: `Kent u endosymbiose? Het is wat je krijgt als de ene cel in de ander leeft en zo het geheel iets nieuws wordt.`,
    output: [
      { naam: "Archaeplastiden", icoon: "icons/Archaeplastiden.png", map: "Pril leven", 
        quote: `The origin of plastids within the archaeplastida marked one of the most consequential events in the 
        history of life 
        <br><br>- Andrew Knoll`
      }
    ]
  },
  {
    input: ["Amoebe", "Evolutie"],
    hint: `Als amoeben samenkomen gaan ze functioneren als één grote zwam van...`,
    output: [
      { naam: "Slijm", icoon: "icons/Slijm.png", map: "Water", 
        quote: `Even the lowliest forms of life, the molds and slimes, are far more intricate than we had imagined 
        <br><br>- Lewis Thomas`
      }
    ]
  },
  {
    input: ["Foraminiferen", "Zand"],
    hint: `Foraminiferen die hun schildjes aan elkaar lijmen tot één groot schild? Goed gevonden.`,
    output: [
      { naam: "Schelp", icoon: "icons/Schelp.png", map: "Biologie", 
        quote: `I see a broken shell and I remind myself that something might have needed setting free 
        <br><br>- Sara Pennypacker`
      }
    ]
  },
  {
    input: [
      ["Schimmel", "Basalt"], ["Schimmel", "Zand"], ["Schimmel", "Klei"] 
    ],
    hint: `Kijk, nu kan het land worden omgeploegd door schimmels voor de anderen om op te leven.`,
    output: [
      { naam: "Aarde", icoon: "icons/Aarde.png", map: "Aarde", 
        quote: `Land is not merely soil, it is a fountain of energy flowing through a circuit of soils, plants and 
        animals 
        <br><br>- Aldo Leopold`
      }
    ]
  },
  {
    input: [
      ["Weefsel", "Evolutie"], ["Weefsel", "Leca"]
    ],
    hint: `Meercelligheid heeft als voordeel dat het kan specialiseren in bewegen en de directe omgeving meten.`,
    output: [
      { naam: "Spieren", icoon: "icons/Spieren.png", map: "Biologie", 
        quote: `The muscles are the instruments of movement, and the bones are the levers 
        <br><br>- Leonardo da Vinci`
      },
      { naam: "Zenuwen", icoon: "icons/Zenuwen.png", map: "Biologie", 
        quote: `With the nervous system intact the reactions of the various parts of that system, the 'simple reflexes', 
        are ever combined into great unitary harmonies 
        <br><br>- Charles Sherrington`
      }
    ]
  },
  {
    input: [
      ["Sponzen", "Kalk"], ["Sponzen", "Bot"], ["Sponzen", "Evolutie"],
      ["Bloemdieren", "Kalk"], ["Bloemdieren", "Bot"]
    ],
    hint: `Wat nou... als sponzen skeletten zouden maken?`,
    output: [
      { naam: "Koraal", icoon: "icons/Koraal.png", map: "Waterdieren", 
        quote: `Coral reefs represent some of the world's most spectacular beauty spots, but they are also the 
        foundation of marine life: without them many of the sea's most exquisite species will not survive
        <br><br>- Sheherazade Goldsmith`
      }
    ]
  },
  {
    input: ["Archaeplastiden", "Evolutie"],
    hint: `Die plantencellen reageren op licht.. laten we ze verschillende kleuren geven.`,
    output: [
      { naam: "Rode algen", icoon: "icons/Rode_algen.png", map: "Pril leven", 
        quote: `The red algae represent one of the most ancient lineages of eukaryotic life 
        <br><br>- Andrew Knoll`
      },
      { naam: "Groene algen", icoon: "icons/Groene_algen.png", map: "Pril leven", 
        quote: `Even the simplest green algae possess the fundamental machinery of photosynthesis that sustains life on 
        Earth 
        <br><br>- Peter Raven`
      }
    ]
  },
  {
    input: ["Spieren", "Leca"],
    hint: `Laat de eencellige dieren eerst vertakken in twee ideeën over de beweging van hun lichaam.`,
    output: [
      { naam: "Oercnidaria", icoon: "icons/Oercnidaria.png", map: "Pril leven", 
        quote: `Grip the nettle firmly and it will become a stick with which to beat your enemey 
        <br><br>- Isaac Asimov`
      },
      { naam: "Oerbilateria", icoon: "icons/Oerbilateria.png", map: "Pril leven", 
        quote: `We are all worms. But I believe that I am a glow-worm 
        <br><br>- Winston Churchill`
      }
    ]
  },
  {
    input: ["Zenuwen", "Leca"],
    hint: `Wat zou het mooi zijn, als leven zichzelf ervaren kan...`,
    output: [
      { naam: "Druk", icoon: "icons/Druk.png", map: "Brein", 
        quote: `The scientist states that pressure is exerted outwards in all directions equally, whereas natural 
        pressure (e.g. air pressure) is exerted inwards from all directions equally 
        <br><br>- Viktor Schawberger`
      },
      { naam: "Tast", icoon: "icons/Tast.png", map: "Brein", 
        quote: `Too often we underestimate the power of touch 
        <br><br>- Leo Buscaglia`
      }
    ]
  },
  {
    input: [
      ["Koraal", "Koraal"], ["Roodwieren", "Kalk"]
    ],
    hint: `Een onderwaterlandschap? Ik zeg meer koraal.`,
    output: [
      { naam: "Rif", icoon: "icons/Rif.png", map: "Landschap", 
        quote: `Coral reefs are the backbone for the entire ocean. They are the nursery for the ocean. About a quarter 
        of all marine life in the ocean spends part of its lifecycle on a coral reef 
        <br><br>- Jeff Orbowski`
      }
    ]
  },
  {
    input: ["Rode algen", "Evolutie"],
    hint: `Geef planten ook een lichaam, wier schoonheid ik waardeer.`,
    output: [
      { naam: "Roodwieren", icoon: "icons/Roodwieren.png", map: "Planten", 
        quote: `To know how it feels to be seaweed you have to get in the water 
        <br><br>- Saul Bellow`
      }
    ]
  },
  {
    input: ["Groene algen", "Kalk"],
    hint: `Ook algen kunnen skeletten maken...`,
    output: [
      { naam: "Steenwortelalgen", icoon: "icons/Steenwortelalgen.png", map: "Pril leven", 
        quote: `Let the gentle bush dig its root deep and spread upward to split the boulder 
        <br><br>- Carl Sandburg`
      }
    ]
  },
  {
    input: ["Groene algen", "Evolutie"],
    hint: `Geef planten ook een lichaam, wier schoonheid ik waardeer.`,
    output: [
      { naam: "Groenwieren", icoon: "icons/Groenwieren.png", map: "Planten", 
        quote: `Green is the fresh emblem of well found hopes. In blue the spirit can wander, but in green it can rest 
        <br><br>- Mary Webb`
      },
      { naam: "Steenwortelalgen", icoon: "icons/Steenwortelalgen.png", map: "Pril leven", 
        quote: `Let the gentle bush dig its root deep and spread upward to split the boulder 
        <br><br>- Carl Sandburg`
      }
    ]
  },
  {
    input: ["Oercnidaria", "Evolutie"],
    hint: `Ik houd van symmetrie, maar kan jij je symmetrische dieren voorstellen?`,
    output: [
      { naam: "Kwallen", icoon: "icons/Kwallen.png", map: "Waterdieren", 
        quote: `A jellyfish is little more than a pulsating bell, a tassel of trailing tentacles and a single digestive 
        opening through which it both eats and excretes - as regrettable an example of economy of design as ever was 
        <br><br>- Jeffrey Kluger`
      },
      { naam: "Bloemdieren", icoon: "icons/Bloemdieren.png", map: "Waterdieren",
        quote: `The ocean stirs the heart, inspires the imagination and brings eternal joy to the soul 
        <br><br>- Robert Wyland`
      },
      { naam: "Parasieten", icoon: "icons/Parasieten.png", map: "Pril leven", 
        quote: `Thought, like any parasite, cannot exist without a compliant host
        <br><br>- Bernard Beckett`
      }
    ]
  },
  {
    input: ["Oerbilateria", "Evolutie"],
    hint: `Als je dieren een mond geeft en een anus, dan voorspel ik dat evolutie ze ver brengt.`,
    output: [
      { naam: "Wormen", icoon: "icons/Wormen.png", map: "Waterdieren", 
        quote: `Along the shores and in the shallow seas live countless worms whose quiet labors help shape the ocean 
        floor 
        <br><br>- Rachel Carson`
      },
      { naam: "Zeesterren", icoon: "icons/Zeesterren.png", map: "Waterdieren", 
        quote: `In the tidal pools the starfish cling to the rocks while the waves break over them 
        <br><br>- Rachel Carson`
      }
    ]
  },
  {
    input: ["Kwallen", "Zenuwen"],
    hint: `Kwallen zijn als licht in de duisternis, maar ervaren zij dat ook?`,
    output: [
      { naam: "Licht", icoon: "icons/Licht.png", map: "Brein",
        quote: `In every person there is a sun. Just let them shine 
        <br><br>- Socrates`
      },
      { naam: "Druk", icoon: "icons/Druk.png", map: "Brein", 
        quote: `The scientist states that pressure is exerted outwards in all directions equally, whereas natural 
        pressure (e.g. air pressure) is exerted inwards from all directions equally 
        <br><br>- Viktor Schawberger`
      },
      { naam: "Tast", icoon: "icons/Tast.png", map: "Brein", 
        quote: `Too often we underestimate the power of touch 
        <br><br>- Leo Buscaglia`
      }
    ]
  },
  {
    input: ["Bloemdieren", "Evolutie"],
    hint: `Sommige dieren zijn als bloemen en komen dan tot bloei...`,
    output: [
      { naam: "Zeeanemonen", icoon: "icons/Zeeanemonen.png", map: "Waterdieren", 
        quote: `The sea-anemone, though fixed to the rock, is a most voracious and living creature 
        <br><br>- Charles Darwin`
      }
    ]
  },
  {
    input: ["Gneis", "Regen"],
    output: [
      { naam: "Roest", icoon: "icons/Roest.png", map: "Chemie", 
        quote: `None can destroy iron, but its own rust can. Likewise none can destroy a person, but its own mindset can
        <br><br>- Ratan Tata`
      },
      { naam: "Aluminium", icoon: "icons/Aluminium.png", map: "Chemie", 
        quote: `In the dusk of the railway shed, aluminium gleamed like a promise etched in cold light 
        <br><br>- V.S. Naipaul`
      }, 
      { naam: "Zand", icoon: "icons/Zand.png", map: "Aarde",
        quote: `Our life is but a grain of sand in the indifferent ocean of infinity 
        <br><br>- Sergei Devlatov`
      },
      { naam: "Klei", icoon: "icons/Klei.png", map: "Aarde", 
        quote: `Clay is used to make vases. But where there is no clay is where it is useful 
        <br><br>- Lao Tzu`
      }
    ]
  },
  {
    input: [
      ["Steenzout", "Water"], ["Steenzout", "Meer"], ["Steenzout", "Zee"], ["Steenzout", "Oceaan"],
      ["Steenzout", "Regen"], ["Steenzout", "Zure regen"], ["Steenzout", "Rivier"]
    ],
    output: [
      { naam: "Zout", icoon: "icons/Zout.png", map: "Chemie", 
        quote: `Salt is born of the purest parents: the sun and the sea 
        <br><br>- Pythagoras`
      }
    ]
  },
  {
    input: [ 
      ["Schalie", "Zure regen"], ["Leisteen", "Zure regen"]
    ],
    output: [
      { naam: "Silicium", icoon: "icons/Silicium.png", map: "Chemie", 
        quote: `Since the Internet of Things is built on silicon, on the tremendous instability of modern electronics, 
        it's built on literal sand 
        <br><br>- Bruce Sterling`
      }, 
      { naam: "Aluminium", icoon: "icons/Aluminium.png", map: "Chemie", 
        quote: `In the dusk of the railway shed, aluminium gleamed like a promise etched in cold light 
        <br><br>- V.S. Naipaul`
      }, 
      { naam: "IJzer", icoon: "icons/IJzer.png", map: "Chemie", 
        quote: `Do not wait to strike till the iron is hot but make it hot by striking 
        <br><br>-William Yeatsu`
      },
      { naam: "Klei", icoon: "icons/Klei.png", map: "Aarde", 
        quote: `Clay is used to make vases. But where there is no clay is where it is useful 
        <br><br>- Lao Tzu`
      }
    ]
  },
//------------ THRESHOLD 3: CAMBRISCHE EXPLOSIE --------------//
  {
    input: ["Oerbilateria", "Bot"],
    hint: `Nu zijn de omstandigheden juist om extra kracht te geven aan de bilateria...`,
    output: [
      { naam: "Agnathen", icoon: "icons/Agnathen.png", map: "Vissen", 
        quote: `Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole 
        life believing that it is stupid 
        <br><br>- Albert Einstein`
      },
      { naam: "Lancetvisjes", icoon: "icons/Lancetvisjes.png", map: "Vissen", 
        quote: `For before this I was born once a boy, and a maiden, and a plant, and a bird, and a darting fish in the 
        sea 
        <br><br>- Empedocles`
      },
      { naam: "Trilobieten", icoon: "icons/Trilobieten.png", map: "Geleedpotige", 
        quote: `The eye of the trilobite tells us that the sun shone on the old beach where he lived; for there is 
        nothing in nature without a purpose, and when so complicated an organ was made to receive the light, there must 
        have been light to enter it 
        <br><br>- Louis Agassiz`
      },
      { naam: "Manteldieren", icoon: "icons/Manteldieren.png", map: "Waterdieren",
        quote: `The ascidians are among the most extraordinary of marine animals 
        <br><br>- Thomas Huxley`
      },
      { naam: "Beerdiertjes", icoon: "icons/Beerdiertjes.png", map: "Waterdieren", 
        quote: `There is one living organism, called a tardigrade, that has survived the five great mass extinctions on 
        Earth, and it can survive in vacuums in space and boiling hot water and freezing subzero temperatures 
        <br><br>- Alycia Carey`
      }
    ],
    uitleg: {
      threshold: {
        titel: "Cambrische Explosie", 
        tekst: "Je moet eerst nog wat meer halen...",
        tijd: 541_000_000,
        requirements: ["Woestijn", "Sneeuw", "Hagel", "Orkaan", "Strand", "Overstroming", 
          "Zandsteen", "Kalksteen", "Kwartsiet", "Calciet", "Sulfaat", "Gneis", "Leisteen", 
          "Dood", "Stromatolieten", "Fotosynthese", "Amoebe", "Foraminiferen", "Stralendiertjes", 
          "Aarde", "Roodwieren", "Groenwieren", "Slijm", "Schelp", "Rif", 
          "Druk", "Tast", "Steenwortelalgen", "Kwallen", "Zeeanemonen", "Wormen", "Zeesterren"]
      },
      normal: {
        titel: "Cambrische Explosie",
        tekst: `De Cambrscche explosie...`,
        tijd: 541_000_000
      }
    }
  },
  {
    input: ["Steenwortelalgen", "Evolutie"],
    hint: `Geaard en geworteld komen sommige planten verder...`,
    output: [
      { naam: "Wortels", icoon: "icons/Wortels.png", map: "Biologie", 
        quote: `Let the gentle bush dig its root deep and spread upward to split the boulder 
        <br><br>- Carl Sandburg`
      }
    ]
  },
  {
    input: ["Agnathen", "Zenuwen"],
    hint: `Hier heb ik lang aan gewerkt... een werkelijkheid voor vissen om te ervaren.`,
    output: [
      { naam: "Brein", icoon: "icons/Brein.png", map: "Brein", 
        quote: `The great events of the world take place in the brain 
        <br><br>- Oscar Wilde`
      },
      { naam: "Oog", icoon: "icons/Oog.png", map: "Biologie", 
        quote: `Eye contact is way more intimate than words will ever be 
        <br><br>- Faraaz Kazi`
      },
      { naam: "Geur", icoon: "icons/Geur.png", map: "Brein", 
        quote: `Smell is a potent wizard that transports you across thousands of miles and all the years you have lived 
        <br><br>- Helen Keller`
      },
      { naam: "Tast", icoon: "icons/Tast.png", map: "Brein", 
        quote: `Too often we underestimate the power of touch 
        <br><br>- Leo Buscaglia`
      }
    ]
  },
  {
    input: ["Trilobieten", "Zenuwen"],
    hint: `Hier heb ik lang aan gewerkt... een werkelijkheid voor trilobieten om te ervaren.`,
    output: [
      { naam: "Oog", icoon: "icons/Oog.png", map: "Biologie", 
        quote: `Eye contact is way more intimate than words will ever be 
        <br><br>- Faraaz Kazi`
      },
      { naam: "Geur", icoon: "icons/Geur.png", map: "Brein", 
        quote: `Smell is a potent wizard that transports you across thousands of miles and all the years you have lived 
        <br><br>- Helen Keller`
      },
      { naam: "Tast", icoon: "icons/Tast.png", map: "Brein", 
        quote: `Too often we underestimate the power of touch 
        <br><br>- Leo Buscaglia`
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
  "Brein": "icons/Brein.png",
  "Planten": "icons/Planten.png",
  "Vissen": "icons/Vissen.png",
  "Geleedpotige": "icons/Geleedpotige.png"
};

// ----- STATE -----
let openLeft = null;
let openRight = null;
let selected = [];
let unlockedElements = new Set(["Oerknal", "Kou", "Warmte"]);
let introStep = 0;
let lastExplanation = null;
let lastHint = null;
let lastHintIndex = -1;
let hintVisible = false;
let hintTimer = null;

// 🔹 Tijdlijn
let currentTime = 13_800_000_000; // start bij oerknal
const maxTime = 13_800_000_000;   // leeftijd universum
const timelineFill = document.getElementById("timeline-fill");
const timelineLabel = document.getElementById("timeline-label");

// ----- DOM -----
const closedContainer = document.getElementById("closed-container");
const leftSide = document.getElementById("left-side");
const rightSide = document.getElementById("right-side");

// ----- INIT -----
renderClosed();
requestAnimationFrame(() => {
    updateClosedContainer();
    showIntroHint();
});

updateTimelineLabel();
preloadAllIcons();

// ----- PRELOAD -----
function preloadAllIcons() {
  const urls = [...new Set(
    mappen.flatMap(map => [
      map.icoon,
      ...map.elementen.map(el => el.icoon)
    ])
  )];
  urls.forEach(url => {
    const img = new Image();
    img.src = url;
  });
  console.log("Alle iconen worden vooraf geladen!");
}

function attachTooltip(el, text) {
  if (window.innerWidth <= 900 && window.matchMedia("(orientation: portrait)").matches) {
    return;
  }

  let tooltip;
  el.addEventListener("mouseenter", () => {
    tooltip = document.createElement("div");
    tooltip.className = "tooltip-floating visible";
    tooltip.textContent = text;
    document.body.appendChild(tooltip);

    const rect = el.getBoundingClientRect();
    tooltip.style.left = rect.left + rect.width / 2 + "px";
    tooltip.style.top = rect.bottom + 6 + "px"; 
    tooltip.style.transform = "translateX(-50%)";
  });

  el.addEventListener("mouseleave", () => {
    if (tooltip) tooltip.remove();
  });
}

// ----- INTRO HINTS -----
function showIntroHint() {
  if (introStep > 2) return;

  // verwijder oude hints eerst
  document.querySelectorAll(".intro-wrapper").forEach(el => el.remove());

  const maps = Array.from(document.querySelectorAll(".icon.map"));
  const elements = Array.from(document.querySelectorAll(".icon.element"));

  if ((introStep === 0 || introStep === 1) && maps.length === 0) {
    requestAnimationFrame(showIntroHint);
    return;
  }

  let target = null;
  let hintText = "";
  let offsetY = -80;
  let clickableEls = [];

  if (introStep === 0) {
    maps.forEach(map => map.dataset.name = map.alt || map.title || "");
    clickableEls = maps.filter(map => map.dataset.name === "Heelal" || map.dataset.name === "Krachten");
    target = clickableEls[0] || maps[0];
    hintText = "open een groep";
    offsetY = -140;
  } else if (introStep === 1) {
    target = maps[1] || maps[0];
    hintText = "open nog een groep";
    offsetY = -120;
    clickableEls = [target];
    } else if (introStep === 2) {
      target = null;
      hintText = "klik op oerknal en klik op kou<br>om een combinatie te maken";
      offsetY = -50;
      clickableEls = elements;
    }

  const wrapper = document.createElement("div");
  wrapper.className = "intro-wrapper fade-in";
  wrapper.innerHTML = `<div class="intro-text">${hintText}</div>`;
  wrapper.style.zIndex = 1500;

  if (target) {
    const rect = target.getBoundingClientRect();
    wrapper.style.left = rect.left + rect.width / 2 + "px";
    wrapper.style.top = rect.top + offsetY + "px";
  } else {
    wrapper.style.left = window.innerWidth / 2 + "px";
    wrapper.style.top = window.innerHeight / 2 + offsetY + "px";
    wrapper.style.textAlign = "center";
  }

  document.body.appendChild(wrapper);
  if (introStep === 2) {
    const checkResultOverlay = setInterval(() => {
      if (document.getElementById("result-overlay")) {
        wrapper.remove();
        introStep++;
        clearInterval(checkResultOverlay);
      }
    }, 50);
  }

  // functie om wrapper te verwijderen + volgende hint
  function nextStep() {
    wrapper.classList.add("fade-out");
    setTimeout(() => wrapper.remove(), 400);
    introStep++;
    showIntroHint();
  }

  // ✅ VERBETERING: luister op hele document voor klik op map-element
  document.addEventListener("click", function docClickListener(e) {
    if (e.target.classList.contains("icon") && e.target.classList.contains("map")) {
      nextStep();
      // event listener opruimen na eerste klik
      document.removeEventListener("click", docClickListener);
    }
  });
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
  const [a, b] = selected.map(e => e.naam);

  const matches = combinaties.filter(c => {
    if (typeof c.input[0] === "string") {
      return (c.input[0] === a && c.input[1] === b) || (c.input[0] === b && c.input[1] === a);
    }
    return c.input.some(set =>
      (set[0] === a && set[1] === b) || (set[0] === b && set[1] === a)
    );
  });

  if (matches.length === 0) {
    shakeErrorElements(selected.map(e => e.dom));
    selected.forEach(e => e.dom.classList.remove("selected"));
    selected = [];
    return;
  }

  const firstMatch = matches[0];

  // 🔹 Check threshold requirements
  if (firstMatch.uitleg?.threshold) {
    const requirements = firstMatch.uitleg.threshold.requirements || [];
    const normalizedUnlocked = [...unlockedElements].map(e => e.trim().toLowerCase());
    
    const missing = requirements.filter(r =>
      !normalizedUnlocked.includes(r.trim().toLowerCase())
    );
    
    if (missing.length > 0) {
      showThresholdExplanation(firstMatch.uitleg.threshold, missing, () => {
        selected.forEach(e => e.dom.classList.remove("selected"));
        selected = [];
      });
      return;
    }
  }
  
  // 🔹 Als alle requirements gehaald zijn of geen threshold → toon normale uitleg / nieuwe elementen
  const finalUitleg = firstMatch.uitleg?.normal || null;
  
  // 🔹 Nieuwe elementen maken
  const newElements = [];
  matches.forEach(match => {
    match.output.forEach(newEl => {
      let map = mappen.find(m => m.naam === newEl.map);
      if (!map) {
        map = {
          naam: newEl.map,
          icoon: groepsIconen[newEl.map] || "icons/default.png",
          elementen: []
        };
        mappen.push(map);
      }
      if (!map.elementen.find(e => e.naam === newEl.naam)) {
        map.elementen.push(newEl);
      }
      newElements.push(newEl);
    });
  });

  lastExplanation = finalUitleg || null;
  renderNewElements(newElements);
  newElements.forEach(el => unlockedElements.add(el.naam));

  // Update timeline op basis van uitleg
  if (finalUitleg && finalUitleg.tijd !== undefined) {
    const eventTime = Math.max(0, Math.min(maxTime, finalUitleg.tijd));
    const targetTime = Math.min(currentTime, eventTime);
    animateTimeline(targetTime);
  }
  
  // reset selectie
  selected.forEach(e => e.dom.classList.remove("selected"));
  selected = [];
}

// ----- BOX VOOR THRESHOLD -----
function showThresholdExplanation(threshold, missing, callback) {
  const oldOverlay = document.getElementById("threshold-overlay");
  if (oldOverlay) oldOverlay.remove();

  const overlay = document.createElement("div");
  overlay.id = "threshold-overlay";
  overlay.style.display = "flex";
  overlay.style.justifyContent = "center";
  overlay.style.alignItems = "center";
  overlay.style.position = "fixed";
  overlay.style.top = 0;
  overlay.style.left = 0;
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.background = "rgba(0,0,0,0.7)";
  overlay.style.zIndex = 2000;

  const box = document.createElement("div");
  box.className = "explanation-box";

  const title = document.createElement("div");
  title.className = "explanation-title";
  title.innerHTML = threshold.titel;

  const text = document.createElement("div");
  text.className = "explanation-text";
  text.innerHTML = threshold.tekst;

  if (missing && missing.length > 0) {
    const grid = document.createElement("div");
    grid.className = "threshold-grid";
    missing.forEach(req => {
      const circle = document.createElement("div");
      circle.className = "threshold-circle";
      circle.textContent = req;
      grid.appendChild(circle);
    });
    text.appendChild(grid);
  }

  const button = document.createElement("button");
  button.className = "create-button";
  button.textContent = "Ga verder";
  button.onclick = () => {
    overlay.remove();
    if (callback) callback(); // voer callback uit
  };

  box.appendChild(title);
  box.appendChild(text);
  box.appendChild(button);

  overlay.appendChild(box);
  document.body.appendChild(overlay);
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

  let cols = 4;
  switch(elements.length) { case 1: cols = 1; break; case 2: cols = 2; break; case 3: cols = 3; break;
    case 4: cols = 4; break;
    case 5: cols = 5; break;
    case 6: cols = 3; break;
    case 7: cols = 4; break;
    case 8: cols = 4; break;
    case 9: cols = 5; break;
    case 10: cols = 5; break;
    default: cols = Math.ceil(Math.sqrt(elements.length));
  }
  
  grid.style.gridTemplateColumns = `repeat(${cols}, minmax(180px, 1fr))`;
  grid.style.justifyContent = "center";
  grid.style.gap = elements.length > 8 ? "20px" : "30px";

  elements.forEach(el => {
    const box = document.createElement("div");
    box.className = "result-box fade-in";

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

  if (lastExplanation) {
    const infoButton = document.createElement("div");
    infoButton.className = "info-button";
    infoButton.innerHTML = "ℹ";
    overlay.appendChild(infoButton);
    
    const popup = document.createElement("div");
    popup.className = "info-popup";
    popup.innerHTML = `
      <div class="info-popup-box">
        <div class="info-popup-title">${lastExplanation.titel}</div>
        <div class="info-popup-text">${lastExplanation.tekst}</div>
      </div>
    `;
    overlay.appendChild(popup);
  }

  document.body.appendChild(overlay);

  setTimeout(() => overlay.classList.add("visible"), 20);

  // Klik anywhere → reset
  overlay.onclick = () => {
    overlay.remove();
    openLeft = null;
    openRight = null;
    leftSide.innerHTML = "";
    rightSide.innerHTML = "";

    renderClosed();
    updateClosedContainer();
  };
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

// ----- CHECK THRESHOLD -----
function addUnlockedElements(elements) {
  elements.forEach(el => unlockedElements.add(el.naam));
}

// ----- TIMELINE  -----
function animateTimeline(newTime) {
  const oldTime = currentTime;
  const duration = 500;
  const start = performance.now();

  function step(timestamp) {
    const progress = Math.min((timestamp - start) / duration, 1);
    currentTime = oldTime + (newTime - oldTime) * progress;

    updateTimelineLabel();

    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

// ----- TIMELINE LABEL -----
function updateTimelineLabel() {
  if (!timelineLabel || !timelineFill) return;

  let labelText;

  if (currentTime >= 1_000_000_000) {
    labelText = (currentTime / 1_000_000_000)
      .toLocaleString("nl-NL", { maximumFractionDigits: 3 }) 
      + " miljard jaar geleden";
  } else if (currentTime >= 1_000_000) {
    labelText = Math.round(currentTime / 1_000_000) + " miljoen jaar geleden";
  } else if (currentTime >= 1_000) {
    labelText = Math.round(currentTime / 1_000) + " duizend jaar geleden";
  } else {
    labelText = Math.round(currentTime) + " jaar geleden";
  }

  timelineLabel.textContent = labelText;

  const percentage = (maxTime - currentTime) / maxTime;

  // Breedte timeline-fill
  timelineFill.style.width = (percentage * 100) + "%";

  // Label positioneren **exact boven de bol**
  timelineLabel.style.left = `${percentage * 100}%`;
  // transform: translateX(-50%) in CSS doet de centering
}

// ----- RENDER CLOSED MAPS -----
function renderClosed() {
  closedContainer.innerHTML = "";
  closedContainer.classList.remove("hidden", "left", "right");
  closedContainer.style.transition = "opacity 0.3s ease";
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

    // ✨ Voeg permanente tooltip toe op mobiel
    if (window.innerWidth <= 900 && window.matchMedia("(orientation: portrait)").matches) {
      const tooltip = document.createElement("div");
      tooltip.className = "tooltip";
      tooltip.textContent = map.naam;
      container.appendChild(tooltip);
    } else {
      attachTooltip(img, map.naam);
    }

    container.appendChild(img);
    grid.appendChild(container);
  });

  closedContainer.appendChild(grid);

  requestAnimationFrame(() => {
    updateClosedContainer();
    closedContainer.style.opacity = 1;
  });
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
  renderSide(container, map, side);
  updateClosedContainer();
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

  // Tooltip voor de map-title
  attachTooltip(titleImg, map.naam);

  titleContainer.appendChild(titleImg);
  parentContainer.appendChild(titleContainer);

  // --- Grid van elementen ---
  const grid = document.createElement("div");
  grid.className = "grid-elements";

  const totalElements = map.elementen.length;
  const isMobile = window.innerWidth <= 900 && window.innerHeight > window.innerWidth;

  // Layout instellen
  if (!isMobile) {
    if (totalElements > 16) {
      grid.style.gridTemplateColumns = "repeat(5, 100px)";
      grid.style.columnGap = "30px";
      grid.style.rowGap = "15px";
    } else {
      grid.style.gridTemplateColumns = "repeat(4, 100px)";
      grid.style.columnGap = "50px";
      grid.style.rowGap = "20px";
    }
  } else {
    grid.style.gridTemplateColumns = "repeat(3, 50px)";
    grid.style.columnGap = "8px";
    grid.style.rowGap = "10px";
  }

  // Maak de elementen
  map.elementen.forEach(el => {
    const elContainer = document.createElement("div");
    elContainer.className = "icon-container";

    const img = document.createElement("img");
    img.src = el.icoon;
    img.className = "icon element";
    if (!isMobile) {
      img.style.width = totalElements > 16 ? "110px" : "130px";
      img.style.height = totalElements > 16 ? "110px" : "130px";
    }

    img.onclick = () => toggleSelect(el, img, side, map.naam);

    // Tooltip per element
    attachTooltip(img, el.naam);

    elContainer.appendChild(img);
    grid.appendChild(elContainer);
  });

  parentContainer.appendChild(grid);

  // Fade-in animatie
  parentContainer.style.opacity = 0;
  setTimeout(() => {
    parentContainer.style.transition = "opacity 0.3s ease";
    parentContainer.style.opacity = 1;
    parentContainer.classList.add("visible");
  }, 20);
}

// ----- HINT ENGINE -----
function getAvailableHints() {
  // verzamelt alle hints waarvan combinaties nog niet volledig unlocked zijn
  const availableHints = [];

  for (const c of combinaties) {
    // -------- INPUT CHECK --------
    let inputsSatisfied = false;
    if (typeof c.input[0] === "string") {
      const [a, b] = c.input;
      inputsSatisfied =
        unlockedElements.has(a) &&
        unlockedElements.has(b);
    } else {
      inputsSatisfied = c.input.some(set =>
        unlockedElements.has(set[0]) &&
        unlockedElements.has(set[1])
      );
    }
    if (!inputsSatisfied) continue;

    // -------- OUTPUT CHECK --------
    const allOutputsUnlocked = c.output.every(o =>
      unlockedElements.has(o.naam)
    );
    if (allOutputsUnlocked) continue;

    // -------- THRESHOLD CHECK --------
    if (c.uitleg?.threshold?.requirements) {
      const normalizedUnlocked =
        [...unlockedElements].map(e => e.trim().toLowerCase());
      const requirementsMet =
        c.uitleg.threshold.requirements.every(r =>
          normalizedUnlocked.includes(r.trim().toLowerCase())
        );
      if (!requirementsMet) continue;
    }

    availableHints.push(c.hint);
  }

  return availableHints;
}

const hintButton = document.getElementById("hint-button");
const hintBubble = document.getElementById("hint-bubble");

hintButton.onclick = showHint;

// ----- HINTS FUNCTIE -----
function showHint() {
  if (hintVisible) {
    hintBubble.classList.remove("visible");
    hintVisible = false;
    if (hintTimer) {
      clearTimeout(hintTimer);
      hintTimer = null;
    }
    return;
  }

  const availableHints = getAvailableHints();
  if (availableHints.length === 0) {
    hintButton.classList.add("disabled");
    hintButton.style.pointerEvents = "none";
    return;
  }

  // kies een andere hint dan de laatst getoonde
  let hintIndex = lastHintIndex;
  if (availableHints.length === 1) {
    hintIndex = 0;
  } else {
    while (hintIndex === lastHintIndex) {
      hintIndex = Math.floor(Math.random() * availableHints.length);
    }
  }
  lastHintIndex = hintIndex;

  hintBubble.innerHTML = availableHints[hintIndex];
  hintBubble.classList.add("visible");
  hintVisible = true;

  if (hintTimer) clearTimeout(hintTimer);
  hintTimer = setTimeout(() => {
    hintBubble.classList.remove("visible");
    hintVisible = false;
    hintTimer = null;
  }, 4000);
}
