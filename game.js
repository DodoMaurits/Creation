// ---------------- DATA -----------------
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
    tijd: 13_800_000_000,
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

      }
    }
  },
  {
    input: ["Quarks", "Kou"],
    hint: `Kou remt chaotische energie af... benieuwd wat de kleine bouwstenen gaan doen`,
    tijd: 13_700_620_000,
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
      }
    }
  },
  {
    input: ["Atomen", "Straling"],
    hint: `Hm.. Wat als de straling sterk genoeg is atomen te splitsen?`,
    tijd: 13_700_620_000,
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
    tijd: 13_600_000_000,
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
      }
    }
  },
  {
    input: ["Ster", "Zwaartekracht"],
    hint: `Uiteindelijk verliest elke ster het gevecht van de natuurkrachten...`,
    tijd: 13_600_000_000,
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
    tijd: 4_570_000_000,
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
      }
    }
  },
  {
    input: [
      ["Planeet", "Kou"], ["Planeet", "IJs"]
    ],
    hint: `De schoonheid van sommige planeten wil ik gekoeld bewaard...`,
    tijd: 4_570_000_000,
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
      }
    }
  },
  {
    input: ["Planeet", "IJzer"],
    hint: `Als ijzer zijn baan om de zon vindt, kan het wel eens iets moois opleveren...`,
    tijd: 4_570_000_000,
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
    tijd: 4_527_000_000,
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
    tijd: 4_400_000_000,
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
      }
    }
  },
  {
    input: ["Platentektoniek", "IJzer"],
    hint: `Al die beweging op dat aardoppervlak, dat zal vast iets doen met de kern.`,
    output: [
      { naam: "Magnetisme", icoon: "icons/Magnetisme.png", map: "Krachten",
        quote: `Electricity and magnetism are those forces of nature by which people who know nothing about electricity
        and magnetism can explain everything
        <br><br>- Egon Friedell`
      }
    ]
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
      { naam: "Kwarts", icoon: "icons/Kwarts.png", map: "Chemie",
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
    input: ["Vulkaan", "Gas"],
    output: [
      { naam: "Damp", icoon: "icons/Damp.png", map: "Lucht", 
        quote: `Enthusiasm is the steam that drives the engine
        <br><br>- Napoleon Hill`
      },
      { naam: "Rook", icoon: "icons/Rook.png", map: "Lucht", 
        quote: `Surely where there's smoke there's fire? No, where there's so much smoke there's smoke
        <br><br>- John Wheeler`
      },
      { naam: "Zwavel", icoon: "icons/Zwavel.png", map: "Chemie", 
        quote: `Sulfur is essential for life, woven into the very proteins that make metabolism 
        — and thus existence — possible
        <br><br>- Isaac Asimov`
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
  {
    input: ["Zwavel", "Magmadamp"],
    hint: `Een bijzonder goedje komt vrij wanneer zwavel zich mengt in de chemische soep van magmadamp.`,
    output: [
      { naam: "Kwik", icoon: "icons/Kwik.png", map: "Chemie", 
        quote: `Mercury contains all that the Sages seek; it dissolves, softens, and extracts the soul from the body
        <br><br>- Edward Kelley`
      }
    ]
  },
//------------ THRESHOLD 1: WATER --------------//
  {
    input: [
      ["IJs", "Warmte"], ["Vuur", "IJs"]
    ],
    hint: `Nu zijn de omstandigheden juist om water te laten vloeien.`,
    tijd: 4_400_000_000,
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
        requirements: ["Radioactiviteit", "Sterrenstelsel", "Zwart Gat", "Magnetisme",
                       "Neptunus", "Uranus", "Saturnus", "Jupiter",
                       "Mars", "De Aarde", "De Maan", "Venus", "Mercurius", 
                       "Basalt", "Obsidiaan", "Platentektoniek", "Vulkaan"]
      },
      normal: {
        titel: "Water op Aarde",
        tekst: `4,4 miljard jaar geleden stabiliseerde de atmosfeer en konden watterijke gassen de toestand aannemen 
          van vloeibaar water...`,
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
      { naam: "Gips", icoon: "icons/Gips.png", map: "Chemie", 
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
      ["Kust", "Storm"], ["Kust", "Orkaan"], ["Strand", "Storm"], ["Strand", "Orkaan"]
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
      ["Kalk", "Warmte"], ["Kalk", "Zee"], ["Kalk", "Zand"], ["Druk", "Kalk"], ["Druk", "Schelp"], ["Druk", "Koraal"],
      ["Bloemdieren", "Druk"], ["Zeesterren", "Druk"], ["Zeeanemonen", "Druk"], ["Zeeslakken", "Druk"], 
      ["Tweekleppigen", "Druk"], ["Nautilussen", "Druk"]
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
      { naam: "Calciet", icoon: "icons/Calciet.png", map: "Chemie", 
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
      { naam: "Calciet", icoon: "icons/Calciet.png", map: "Chemie", 
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
    tijd: 4_400_000_000,
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
        requirements: ["Rivier", "Tufsteen", "Koper", "Zure regen", "Strand", "Eiland", 
          "Roest", "Zand", "Klei", "Glas", "Golf", "Wind", "Zout", "Kalk"]
      },
      normal: {
        titel: "Leven",
        tekst: `Eerste leven`,
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
    tijd: 3_700_000_000,
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
      ["Bacteriën", "Radioactiviteit"], ["Bacteriën", "IJs"], ["Bacteriën", "Gif"],
      ["Stromatolieten", "Radioactiviteit"], ["Stromatolieten", "IJs"], ["Stromatolieten", "Gif"],
      ["Blauwalgen", "Radioactiviteit"], ["Blauwalgen", "IJs"], ["Blauwalgen", "Gif"],
      ["Leca", "Radioactiviteit"], ["Leca", "IJs"], ["Leca", "Gif"],
      ["Amoeben", "Radioactiviteit"], ["Amoeben", "IJs"], ["Amoeben", "Gif"],
      ["Foraminiferen", "Radioactiviteit"], ["Foraminiferen", "IJs"], ["Foraminiferen", "Gif"],
      ["Stralendiertjes", "Radioactiviteit"], ["Stralendiertjes", "IJs"], ["Stralendiertjes", "Gif"],
      ["Schimmel", "Radioactiviteit"], ["Schimmel", "IJs"], ["Schimmel", "Gif"],
      ["Sponzen", "Radioactiviteit"], ["Sponzen", "IJs"], ["Sponzen", "Gif"],
      ["Parasieten", "Radioactiviteit"], ["Parasieten", "IJs"], ["Parasieten", "Gif"],
      ["Archaeplastiden", "Radioactiviteit"], ["Archaeplastiden", "IJs"], ["Archaeplastiden", "Gif"],
      ["Gist", "Radioactiviteit"], ["Gist", "IJs"], ["Gist", "Gif"],
      ["Koraal", "Radioactiviteit"], ["Koraal", "IJs"], ["Koraal", "Gif"],
      ["Rode algen", "Radioactiviteit"], ["Rode algen", "IJs"], ["Rode algen", "Gif"],
      ["Groene algen", "Radioactiviteit"], ["Groene algen", "IJs"], ["Groene algen", "Gif"],
      ["Oercnidaria", "Radioactiviteit"], ["Oercnidaria", "IJs"], ["Oercnidaria", "Gif"],
      ["Oerbilateria", "Radioactiviteit"], ["Oerbilateria", "IJs"], ["Oerbilateria", "Gif"],
      ["Plakdiertjes", "Radioactiviteit"], ["Plakdiertjes", "IJs"], ["Plakdiertjes", "Gif"],
      ["Roodwieren", "Radioactiviteit"], ["Roodwieren", "IJs"], ["Roodwieren", "Gif"],
      ["Steenwortelalgen", "Radioactiviteit"], ["Steenwortelalgen", "IJs"], ["Steenwortelalgen", "Gif"],
      ["Groenwieren", "Radioactiviteit"], ["Groenwieren", "IJs"], ["Groenwieren", "Gif"],
      ["Kwallen", "Radioactiviteit"], ["Kwallen", "IJs"], ["Kwallen", "Gif"],
      ["Bloemdieren", "Radioactiviteit"], ["Bloemdieren", "IJs"], ["Bloemdieren", "Gif"],
      ["Zeeanemonen", "Radioactiviteit"], ["Zeeanemonen", "IJs"], ["Zeeanemonen", "Gif"],
      ["Oertrochozoa", "Radioactiviteit"], ["Oertrochozoa", "IJs"], ["Oertrochozoa", "Gif"],
      ["Lancetvisjes", "Radioactiviteit"], ["Lancetvisjes", "IJs"], ["Lancetvisjes", "Gif"],
      ["Manteldieren", "Radioactiviteit"], ["Manteldieren", "IJs"], ["Manteldieren", "Gif"],
      ["Mos", "Radioactiviteit"], ["Mos", "IJs"], ["Mos", "Gif"],
      ["Korstmos", "Radioactiviteit"], ["Korstmos", "IJs"], ["Korstmos", "Gif"],
      ["Truffels", "Radioactiviteit"], ["Truffels", "IJs"], ["Truffels", "Gif"],
      ["Paddenstoelen", "Radioactiviteit"], ["Paddenstoelen", "IJs"], ["Paddenstoelen", "Gif"],

      ["Agnathen", "Radioactiviteit"], ["Agnathen", "Gif"],
      ["Wormen", "Radioactiviteit"], ["Wormen", "Gif"],
      ["Zeesterren", "Radioactiviteit"], ["Zeesterren", "Gif"],
      ["Beerdiertjes", "Radioactiviteit"], ["Beerdiertjes", "Gif"],
      ["Inktvissen", "Radioactiviteit"], ["Inktvissen", "Gif"],
      ["Oercheliceraten", "Radioactiviteit"], ["Oercheliceraten", "Gif"],
      ["Duizendpoten", "Radioactiviteit"], ["Duizendpoten", "Gif"],
      ["Oerkreeftjes", "Radioactiviteit"], ["Oerkreeftjes", "Gif"],
      ["Oerinsecten", "Radioactiviteit"], ["Oerinsecten", "Gif"],
      ["Spinnen", "Radioactiviteit"], ["Spinnen", "Gif"],
      ["Krill", "Radioactiviteit"], ["Krill", "Gif"],
      ["Oervaatplanten", "Radioactiviteit"], ["Oervaatplanten", "Gif"],
      ["Oerchondrichthyes", "Radioactiviteit"], ["Oerchondrichthyes", "Gif"],
      ["Oerstraalvinnigen", "Radioactiviteit"], ["Oerstraalvinnigen", "Gif"],
      ["Coelacanthen", "Radioactiviteit"], ["Coelacanthen", "Gif"],
      ["Longvissen", "Radioactiviteit"], ["Longvissen", "Gif"],
      ["Pissebedden", "Radioactiviteit"], ["Pissebedden", "Gif"],
      ["Garnalen", "Radioactiviteit"], ["Garnalen", "Gif"]
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
    input: [
      ["Bacteriën", "Vuur"], ["Bacteriën", "Lava"],
      ["Stromatolieten", "Vuur"], ["Stromatolieten", "Lava"],
      ["Blauwalgen", "Vuur"], ["Blauwalgen", "Lava"],
      ["Leca", "Vuur"], ["Leca", "Lava"],
      ["Amoeben", "Vuur"], ["Amoeben", "Lava"],
      ["Foraminiferen", "Vuur"], ["Foraminiferen", "Lava"],
      ["Stralendiertjes", "Vuur"], ["Stralendiertjes", "Lava"],
      ["Schimmel", "Vuur"], ["Schimmel", "Lava"],
      ["Sponzen", "Vuur"], ["Sponzen", "Lava"],
      ["Parasieten", "Vuur"], ["Parasieten", "Lava"],
      ["Archaeplastiden", "Vuur"], ["Archaeplastiden", "Lava"],
      ["Koraal", "Vuur"], ["Koraal", "Lava"],
      ["Rode algen", "Vuur"], ["Rode algen", "Lava"],
      ["Groene algen", "Vuur"], ["Groene algen", "Lava"],
      ["Oercnidaria", "Vuur"], ["Oercnidaria", "Lava"],
      ["Oerbilateria", "Vuur"], ["Oerbilateria", "Lava"],
      ["Plakdiertjes", "Vuur"], ["Plakdiertjes", "Lava"],
      ["Roodwieren", "Vuur"], ["Roodwieren", "Lava"],
      ["Steenwortelalgen", "Vuur"], ["Steenwortelalgen", "Lava"],
      ["Groenwieren", "Vuur"], ["Groenwieren", "Lava"],
      ["Kwallen", "Vuur"], ["Kwallen", "Lava"],
      ["Bloemdieren", "Vuur"], ["Bloemdieren", "Lava"],
      ["Wormen", "Vuur"], ["Wormen", "Lava"],
      ["Zeesterren", "Vuur"], ["Zeesterren", "Lava"],
      ["Zeeanemonen", "Vuur"], ["Zeeanemonen", "Lava"],
      ["Oertrochozoa", "Vuur"], ["Oertrochozoa", "Lava"],
      ["Lancetvisjes", "Vuur"], ["Lancetvisjes", "Lava"],
      ["Agnathen", "Vuur"], ["Agnathen", "Lava"],
      ["Manteldieren", "Vuur"], ["Manteldieren", "Lava"],
      ["Beerdiertjes", "Vuur"], ["Beerdiertjes", "Lava"],
      ["Mos", "Vuur"], ["Mos", "Lava"],
      ["Inktvissen", "Vuur"], ["Inktvissen", "Lava"],
      ["Zeeslakken", "Vuur"], ["Zeeslakken", "Lava"],
      ["Tweekleppigen", "Vuur"], ["Tweekleppigen", "Lava"],
      ["Oercheliceraten", "Vuur"], ["Oercheliceraten", "Lava"],
      ["Duizendpoten", "Vuur"], ["Duizendpoten", "Lava"],
      ["Oerkreeftjes", "Vuur"], ["Oerkreeftjes", "Lava"],
      ["Oerinsecten", "Vuur"], ["Oerinsecten", "Lava"],
      ["Nautilussen", "Vuur"], ["Nautilussen", "Lava"],
      ["Spinnen", "Vuur"], ["Spinnen", "Lava"],
      ["Krill", "Vuur"], ["Krill", "Lava"],
      ["Oervaatplanten", "Vuur"], ["Oervaatplanten", "Lava"],
      ["Oerchondrichthyes", "Vuur"], ["Oerchondrichthyes", "Lava"],
      ["Oerstraalvinnigen", "Vuur"], ["Oerstraalvinnigen", "Lava"],
      ["Coelacanthen", "Vuur"], ["Coelacanthen", "Lava"],
      ["Longvissen", "Vuur"], ["Longvissen", "Lava"],
      ["Pissebedden", "Vuur"], ["Pissebedden", "Lava"],
      ["Garnalen", "Vuur"], ["Garnalen", "Lava"],
      ["Varens", "Vuur"], ["Varens", "Lava"],

      ["Oergeleedpotigen", "Lava"],
      ["Trilobieten", "Lava"],
      ["Schorpioenen", "Lava"],
      ["Zwaardstaarten", "Lava"],
      ["Kreeften", "Lava"], 
      ["Krabben", "Lava"], 
      ["Haaien", "Lava"],
      ["Holocefalen", "Lava"]
    ],
    output: [
      { naam: "Dood", icoon: "icons/Dood.png", map: "Krachten", 
        quote: `Death does not concern us, because as long as we exist, death is not here. And when it does come, 
        we no longer exist 
        <br><br>- Epicurus`
      },
      { naam: "As", icoon: "icons/As.png", map: "Vuur", 
        quote: `Ashes to ashes. Dust to dust. We are nothing, but dust and to dust we shall return 
        <br><br>- Alexander Anderson`
      }
    ]
  },
  {
    input: [
      ["Bacteriën", "Sulfaat"], ["Moeras", "Bacteriën"]
    ],
    hint: `Sommige micro-organismen kunnen sulfaat goed gebruiken.`,
    output: [
      { naam: "Zwavel", icoon: "icons/Zwavel.png", map: "Chemie", 
        quote: `Sulfur is essential for life, woven into the very proteins that make metabolism 
        — and thus existence — possible
        <br><br>- Isaac Asimov`
      }
    ]
  },
  {
    input: [
      ["Bacteriën", "Dood"], ["Stromatolieten", "Dood"], ["Blauwalgen", "Dood"], ["Leca", "Dood"], ["Amoeben", "Dood"], 
      ["Foraminiferen", "Dood"], ["Stralendiertjes", "Dood"], ["Schimmel", "Dood"], ["Sponzen", "Dood"], 
      ["Parasieten", "Dood"], ["Archaeplastiden", "Dood"], ["Gist", "Dood"], ["Koraal", "Dood"], ["Rode algen", "Dood"], 
      ["Groene algen", "Dood"], ["Oercnidaria", "Dood"], ["Oerbilateria", "Dood"], ["Plakdiertjes", "Dood"], 
      ["Roodwieren", "Dood"], ["Steenwortelalgen", "Dood"], ["Groenwieren", "Dood"], ["Kwallen", "Dood"], 
      ["Bloemdieren", "Dood"], ["Wormen", "Dood"], ["Zeesterren", "Dood"], ["Zeeanemonen", "Dood"], 
      ["Oertrochozoa", "Dood"], ["Lancetvisjes", "Dood"], ["Agnathen", "Dood"], ["Oergeleedpotigen", "Dood"], ["Manteldieren", "Dood"], 
      ["Beerdiertjes", "Dood"], ["Mos", "Dood"], ["Inktvissen", "Dood"], ["Oercheliceraten", "Dood"], 
      ["Duizendpoten", "Dood"], ["Oerkreeftjes", "Dood"], ["Oerinsecten", "Dood"], ["Spinnen", "Dood"], ["Krill", "Dood"], 
      ["Oervaatplanten", "Dood"], ["Korstmos", "Dood"], ["Truffels", "Dood"], ["Paddenstoelen", "Dood"], 
      ["Oerchondrichthyes", "Dood"], ["Oerstraalvinnigen", "Dood"], ["Coelacanthen", "Dood"], ["Longvissen", "Dood"], 
      ["Pissebedden", "Dood"], ["Garnalen", "Dood"], ["Varens", "Dood"]
    ],
    output: [
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
    tijd: 3_500_000_000,
    output: [
      { naam: "Stromatolieten", icoon: "icons/Stromatolieten.png", map: "Pril leven", 
        quote: `For the first half of geological time our ancestors were bacteria. Most creatures still are bacteria, 
        and each one of our trillions of cells is a colony of bacteria 
        <br><br>- Richard Dawkins`
      }
    ]
  },
  {
    input: ["Detritus", "Bacteriën"],
    hint: `De een zijn dood is de ander zijn brood in de voedselketen.`,
    output: [
      { naam: "Bacteriën", icoon: "icons/Bacteriën.png", map: "Pril leven", 
        quote: `We are all of us walking communities of bacteria. The world shimmers, a pointillist landscape
        made of tiny living beings 
        <br><br>- Lynn Margulis`
      },
      { naam: "Glucose", icoon: "icons/Glucose.png", map: "Biologie",
       quote: `No matter how closely you examine the water, glucose, and electrolyte salts in the human brain, you can't 
       find the point where these molecules became conscious
       <br><br>- Nassim Taleb`
      }
    ]
  },
  {
    input: ["Evolutie", "Bacteriën"],
    hint: `Bacteriën zijn geavanceerde cellen, maar die cel kan nog veel geavanceerder.`,
    tijd: 1_900_000_000,
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
      ["Stromatolieten", "Ster"], ["Stromatolieten", "Licht"],
      ["Blauwalgen", "Ster"], ["Blauwalgen", "Licht"],
      ["Archaeplastiden", "Ster"], ["Archaeplastiden", "Licht"],
      ["Rode algen", "Ster"], ["Rode algen", "Licht"],
      ["Groene algen", "Ster"], ["Groene algen", "Licht"],
      ["Roodwieren", "Ster"], ["Roodwieren", "Licht"],
      ["Steenwortelalgen", "Ster"], ["Steenwortelalgen", "Licht"],
      ["Groenwieren", "Ster"], ["Groenwieren", "Licht"],
      ["Mos", "Ster"], ["Mos", "Licht"],
      ["Oervaatplanten", "Ster"], ["Oervaatplanten", "Licht"],
      ["Varens", "Ster"], ["Varens", "Licht"]
    ],
    hint: `Het regent zonnestralen en dus regent het voedsel voor archaeplastiden.`,
    output: [
      { naam: "Fotosynthese", icoon: "icons/Fotosynthese.png", map: "Biologie", 
        quote: `He had a love affair with photosynthesis. He could talk about moss for an hour. He said that plants 
        carried wisdom humans would never be around long enough to understand 
        <br><br>- Anthony Doerr`
      },
      { naam: "Glucose", icoon: "icons/Glucose.png", map: "Biologie",
       quote: `No matter how closely you examine the water, glucose, and electrolyte salts in the human brain, you can't 
       find the point where these molecules became conscious
       <br><br>- Nassim Taleb`
      }
    ]
  },
  {
    input: ["Stromatolieten", "Detritus"],
    output: [
      { naam: "Stromatolieten", icoon: "icons/Stromatolieten.png", map: "Pril leven", 
        quote: `For the first half of geological time our ancestors were bacteria. Most creatures still are bacteria, 
        and each one of our trillions of cells is a colony of bacteria 
        <br><br>- Richard Dawkins`
      },
      { naam: "Glucose", icoon: "icons/Glucose.png", map: "Biologie",
       quote: `No matter how closely you examine the water, glucose, and electrolyte salts in the human brain, you can't 
       find the point where these molecules became conscious
       <br><br>- Nassim Taleb`
      }
    ]
  },
  {
    input: [
      ["Leca", "Basalt"], ["Leca", "Klei"], ["Aarde", "Leca"] 
    ],
    hint: `Als zelfs 1 cel kleine voetjes kan hebben, dan leerde het lopen op de bodem.`,
    tijd: 1_800_000_000,
    output: [
      { naam: "Amoeben", icoon: "icons/Amoeben.png", map: "Pril leven", 
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
    tijd: 800_000_000,
    output: [
      { naam: "Stralendiertjes", icoon: "icons/Stralendiertjes.png", map: "Pril leven", 
        quote: `The siliceous skeletons of the radiolaria are among the most exquisite products of organic nature 
        <br><br>- Ernst Haeckel`
      }
    ]
  },
  {
    input: [
      ["Leca", "Bacteriën"], ["Leca", "Amoeben"]
    ],
    output: [
      { naam: "Leca", icoon: "icons/Leca.png", map: "Pril leven", 
        quote: `The cell is immortal. It is merely the fluid in which it floats that degenerates. Renew this fluid 
        at regular intervals, give the cells at they require for nutrition, and as far as we know, the pulsation of 
        life can go on forever 
        <br><br>- Alexis Carrel`
      },
      { naam: "Glucose", icoon: "icons/Glucose.png", map: "Biologie",
       quote: `No matter how closely you examine the water, glucose, and electrolyte salts in the human brain, you can't 
       find the point where these molecules became conscious
       <br><br>- Nassim Taleb`
      }
    ]
  },
  {
    input: ["Leca", "Detritus"],
    hint: `De een zijn dood is de ander zijn brood.. maar wat zijn ze broodnodig.`,
    tijd: 1_100_000_000,
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
    tijd: 900_000_000,
    output: [
      { naam: "Parasieten", icoon: "icons/Parasieten.png", map: "Pril leven", 
        quote: `Thought, like any parasite, cannot exist without a compliant host 
        <br><br>- Bernard Beckett`
      },
      { naam: "Sponzen", icoon: "icons/Sponzen.png", map: "Pril leven", 
        quote: `Be like a sponge when it comes to each new experience. If you want to be able to express it well, you 
        must first be able to absorb it well 
        <br><br>- Jim Rohn`
      },
      { naam: "Weefsel", icoon: "icons/Weefsel.png", map: "Biologie", 
        quote: `That's the way it is: life includes a lot of empty space. We are one-tenth living tissue, nine-tenths 
        water; life is one-tenth Here and Now, nine-tenths a history lesson. For most of the time the Here and Now is 
        neither now nor here 
        <br><br>- Graham Swift`
      }
    ]
  },
  {
    input: ["Leca", "Blauwalgen"],
    hint: `Kent u endosymbiose? Het is wat je krijgt als de ene cel in de ander leeft en zo het geheel iets nieuws wordt.`,
    tijd: 1_600_000_000,
    output: [
      { naam: "Archaeplastiden", icoon: "icons/Archaeplastiden.png", map: "Pril leven", 
        quote: `The origin of plastids within the archaeplastida marked one of the most consequential events in the 
        history of life 
        <br><br>- Andrew Knoll`
      }
    ]
  },
  {
    input: [
      ["Amoeben", "Bacteriën"], ["Amoeben", "Blauwalgen"]
    ],
    output: [
      { naam: "Amoeben", icoon: "icons/Amoeben.png", map: "Pril leven", 
        quote: `Not all living creatures die. An amoeba, for example, need never die: it need not even, like certain 
        generals, fade away. It just divides and becomes two new amoebas 
        <br><br>- George Wald`
      },
      { naam: "Glucose", icoon: "icons/Glucose.png", map: "Biologie",
       quote: `No matter how closely you examine the water, glucose, and electrolyte salts in the human brain, you can't 
       find the point where these molecules became conscious
       <br><br>- Nassim Taleb`
      }
    ]
  },
  {
    input: [
      ["Amoeben", "Evolutie"], ["Amoeben", "Amoeben"]
    ],
    hint: `Als Amoeben samenkomen gaan ze functioneren als één grote zwam van...`,
    tijd: 900_000_000,
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
      ["Foraminiferen", "Bacteriën"], ["Foraminiferen", "Blauwalgen"]
    ],
    output: [
      { naam: "Foraminiferen", icoon: "icons/Foraminiferen.png", map: "Pril leven", 
        quote: `The deep-sea ooze is largely made up of the shells of foraminifera 
        <br><br>- Thomas Huxley`
      },
      { naam: "Glucose", icoon: "icons/Glucose.png", map: "Biologie",
       quote: `No matter how closely you examine the water, glucose, and electrolyte salts in the human brain, you can't 
       find the point where these molecules became conscious
       <br><br>- Nassim Taleb`
      }
    ]
  },
  {
    input: [
      ["Stralendiertjes", "Bacteriën"], ["Stralendiertjes", "Blauwalgen"], ["Stralendiertjes", "Amoeben"]
    ],
    output: [
      { naam: "Stralendiertjes", icoon: "icons/Stralendiertjes.png", map: "Pril leven", 
        quote: `The siliceous skeletons of the radiolaria are among the most exquisite products of organic nature 
        <br><br>- Ernst Haeckel`
      },
      { naam: "Glucose", icoon: "icons/Glucose.png", map: "Biologie",
       quote: `No matter how closely you examine the water, glucose, and electrolyte salts in the human brain, you can't 
       find the point where these molecules became conscious
       <br><br>- Nassim Taleb`
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
    input: ["Schimmel", "Detritus"],
    output: [
      { naam: "Schimmel", icoon: "icons/Schimmel.png", map: "Pril leven",
        quote: `Fungi are the interface organisms between life and death 
        <br><br>- Paul Stamets`
      },
      { naam: "Glucose", icoon: "icons/Glucose.png", map: "Biologie",
       quote: `No matter how closely you examine the water, glucose, and electrolyte salts in the human brain, you can't 
       find the point where these molecules became conscious
       <br><br>- Nassim Taleb`
      }
    ]
  },
  {
    input: ["Schimmel", "Glucose"],
    hint: `Sommige eencellige schimmels specialiseren zich in suikers.`,
    output: [
      { naam: "Gist", icoon: "icons/Gist.png", map: "Pril leven",
        quote: `God made yeast, as well as dough, and loves fermentation just as dearly as he loves vegetation
        <br><br>- Ralph Emerson`
      }
    ]
  },
  {
    input: [
      ["Sponzen", "Kalk"], ["Sponzen", "Bot"], ["Sponzen", "Evolutie"],
      ["Bloemdieren", "Kalk"], ["Bloemdieren", "Bot"]
    ],
    hint: `Wat nou... als sponzen skeletten zouden maken?`,
    tijd: 580_000_000,
    output: [
      { naam: "Koraal", icoon: "icons/Koraal.png", map: "Waterdieren", 
        quote: `Coral reefs represent some of the world's most spectacular beauty spots, but they are also the 
        foundation of marine life: without them many of the sea's most exquisite species will not survive
        <br><br>- Sheherazade Goldsmith`
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
      ["Sponzen", "Bacteriën"], ["Sponzen", "Blauwalgen"], ["Sponzen", "Foraminiferen"], ["Sponzen", "Stralendiertjes"]
    ],
    output: [
      { naam: "Sponzen", icoon: "icons/Sponzen.png", map: "Pril leven", 
        quote: `Be like a sponge when it comes to each new experience. If you want to be able to express it well, you 
        must first be able to absorb it well 
        <br><br>- Jim Rohn`
      },
      { naam: "Glucose", icoon: "icons/Glucose.png", map: "Biologie",
       quote: `No matter how closely you examine the water, glucose, and electrolyte salts in the human brain, you can't 
       find the point where these molecules became conscious
       <br><br>- Nassim Taleb`
      }
    ]
  },
  {
    input: ["Archaeplastiden", "Evolutie"],
    hint: `Die plantencellen reageren op licht.. laten we ze verschillende kleuren geven.`,
    tijd: 1_500_000_000,
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
    input: ["Gist", "Glucose"],
    hint: `Gesuikerde schimmels.. dat kan niet goed zijn voor het brein.`,
    output: [
      { naam: "Alcohol", icoon: "icons/Alcohol.png", map: "Chemie",
        quote: `Reality is an illusion that occurs duo to the lack of alcohol
        <br><br>- W.C. Fields`
      }
    ]
  },
  {
    input: ["Spieren", "Leca"],
    hint: `Laat de eencellige dieren eerst vertakken in twee ideeën over de beweging van hun lichaam.`,
    tijd: 800_000_000,
    output: [
      { naam: "Oercnidaria", icoon: "icons/Oercnidaria.png", map: "Pril leven", 
        quote: `Grip the nettle firmly and it will become a stick with which to beat your enemy 
        <br><br>- Isaac Asimov`
      },
      { naam: "Oerbilateria", icoon: "icons/Oerbilateria.png", map: "Pril leven", 
        quote: `We are all worms. But I believe that I am a glow-worm 
        <br><br>- Winston Churchill`
      }
    ]
  },
  {
    input: ["Zenuwen", "Sponzen"],
    hint: `Wat zou het mooi zijn, als leven zichzelf ervaren kan...`,
    output: [
      { naam: "Druk", icoon: "icons/Druk.png", map: "Krachten", 
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
      ["Zenuwen", "Koraal"], ["Bloemdieren", "Zenuwen"], ["Zeeanemonen", "Zenuwen"]
    ],
    hint: `Koralen zijn als licht in de duisternis, maar ervaren zij dat ook?`,
    output: [
      { naam: "Druk", icoon: "icons/Druk.png", map: "Krachten", 
        quote: `The scientist states that pressure is exerted outwards in all directions equally, whereas natural 
        pressure (e.g. air pressure) is exerted inwards from all directions equally 
        <br><br>- Viktor Schawberger`
      },
      { naam: "Tast", icoon: "icons/Tast.png", map: "Brein", 
        quote: `Too often we underestimate the power of touch 
        <br><br>- Leo Buscaglia`
      },
      { naam: "Licht", icoon: "icons/Licht.png", map: "Brein",
        quote: `In every person there is a sun. Just let them shine 
        <br><br>- Socrates`
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
    input: [
      ["Rode algen", "Koraal"], ["Groene algen", "Koraal"], ["Roodwieren", "Koraal"], ["Groenwieren", "Koraal"]
    ],
    output: [
      { naam: "Koraal", icoon: "icons/Koraal.png", map: "Waterdieren", 
        quote: `Coral reefs represent some of the world's most spectacular beauty spots, but they are also the 
        foundation of marine life: without them many of the sea's most exquisite species will not survive
        <br><br>- Sheherazade Goldsmith`
      },
      { naam: "Gif", icoon: "icons/Gif.png", map: "Biologie",
       quote: `All things are poisons, for there is nothing without poisonous qualities. It is only the dose which 
       makes a thing poison
       <br><br>- Paracelsus`
      },
      { naam: "Glucose", icoon: "icons/Glucose.png", map: "Biologie",
       quote: `No matter how closely you examine the water, glucose, and electrolyte salts in the human brain, you can't 
       find the point where these molecules became conscious
       <br><br>- Nassim Taleb`
      }
    ]
  },
  {
    input: ["Groene algen", "Kalk"],
    hint: `Ook algen kunnen skeletten maken...`,
    tijd: 700_000_000,
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
    tijd: 700_000_000,
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
    input: [
      ["Oercnidaria", "Bacteriën"], ["Oercnidaria", "Blauwalgen"], ["Oercnidaria", "Leca"], ["Oercnidaria", "Amoeben"],
      ["Oercnidaria", "Foraminiferen"], ["Oercnidaria", "Stralendiertjes"]
    ],
    output: [
      { naam: "Oercnidaria", icoon: "icons/Oercnidaria.png", map: "Pril leven", 
        quote: `Grip the nettle firmly and it will become a stick with which to beat your enemey 
        <br><br>- Isaac Asimov`
      },
      { naam: "Glucose", icoon: "icons/Glucose.png", map: "Biologie",
       quote: `No matter how closely you examine the water, glucose, and electrolyte salts in the human brain, you can't 
       find the point where these molecules became conscious
       <br><br>- Nassim Taleb`
      }
    ]
  },
  {
    input: ["Oercnidaria", "Evolutie"],
    hint: `Ik houd van symmetrie, maar kan jij je symmetrische dieren voorstellen?`,
    tijd: 580_000_000,
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
    input: [
      ["Oercnidaria", "Zenuwen"], ["Oerbilateria", "Zenuwen"], ["Kwallen", "Zenuwen"]
    ],
    hint: `Kwallen zijn als licht in de duisternis... maar ervaren zij dat ook?`, 
    output: [
      { naam: "Tast", icoon: "icons/Tast.png", map: "Brein", 
        quote: `Too often we underestimate the power of touch 
        <br><br>- Leo Buscaglia`
      },
      { naam: "Licht", icoon: "icons/Licht.png", map: "Brein",
        quote: `In every person there is a sun. Just let them shine 
        <br><br>- Socrates`
      }
    ]
  },
  {
    input: [
      ["Oerbilateria", "Bacteriën"], ["Oerbilateria", "Blauwalgen"], ["Oerbilateria", "Leca"], ["Oerbilateria", "Amoeben"],
      ["Oerbilateria", "Foraminiferen"], ["Oerbilateria", "Stralendiertjes"]
    ],
    output: [
      { naam: "Oerbilateria", icoon: "icons/Oerbilateria.png", map: "Pril leven", 
        quote: `We are all worms. But I believe that I am a glow-worm 
        <br><br>- Winston Churchill`
      },
      { naam: "Glucose", icoon: "icons/Glucose.png", map: "Biologie",
       quote: `No matter how closely you examine the water, glucose, and electrolyte salts in the human brain, you can't 
       find the point where these molecules became conscious
       <br><br>- Nassim Taleb`
      }
    ]
  },
  {
    input: ["Oerbilateria", "Evolutie"],
    hint: `Als je dieren een mond geeft en een anus, dan voorspel ik dat evolutie ze ver brengt.`,
    output: [
      { naam: "Wormen", icoon: "icons/Wormen.png", map: "Waterdieren", 
        quote: `Along the shores and in the shallow seas live countless worms whose quiet labors help shape the ocean floor 
        <br><br>- Rachel Carson`
      },
      { naam: "Zeesterren", icoon: "icons/Zeesterren.png", map: "Waterdieren", 
        quote: `In the tidal pools the starfish cling to the rocks while the waves break over them 
        <br><br>- Rachel Carson`
      }
    ]
  },
  {
    input: ["Druk", "Detritus"],
    hint: `Organisch materiaal zinkt naar de bodem en komt onder hoge druk te staan.`,
    output: [
      { naam: "Aardolie", icoon: "icons/Aardolie.png", map: "Water", 
        quote: `Petroleum is the product of a distillation from great depth and issues from the primitive rocks
        beneath which the forces of all volcanic action lie
        <br><br>- Alexander von Humboldt`
      }
    ]
  },
  {
    input: ["Druk", "Foraminiferen"],
    hint: `Die kleine schelpjes van foraminiferen leveren onder druk ook iets moois op.`,
    output: [
      { naam: "Krijt", icoon: "icons/Krijt.png", map: "Aarde", 
        quote: `Teachers can change lives with just the right mix of chalk and challenges
        <br><br>- Joyce Meyer`
      }
    ]
  },
  {
    input: [
      ["Kwallen", "Bacteriën"], ["Kwallen", "Blauwalgen"], ["Kwallen", "Leca"], ["Kwallen", "Amoeben"],
      ["Kwallen", "Foraminiferen"], ["Kwallen", "Stralendiertjes"], ["Kwallen", "Wormen"], ["Kwallen", "Beerdiertjes"],
      ["Kwallen", "Krill"], ["Kwallen", "Garnalen"]
    ],
    output: [
      { naam: "Kwallen", icoon: "icons/Kwallen.png", map: "Waterdieren", 
        quote: `A jellyfish is little more than a pulsating bell, a tassel of trailing tentacles and a single digestive 
        opening through which it both eats and excretes - as regrettable an example of economy of design as ever was 
        <br><br>- Jeffrey Kluger`
      },
      { naam: "Gif", icoon: "icons/Gif.png", map: "Biologie",
       quote: `All things are poisons, for there is nothing without poisonous qualities. It is only the dose which 
       makes a thing poison
       <br><br>- Paracelsus`
      },
      { naam: "Glucose", icoon: "icons/Glucose.png", map: "Biologie",
       quote: `No matter how closely you examine the water, glucose, and electrolyte salts in the human brain, you can't 
       find the point where these molecules became conscious
       <br><br>- Nassim Taleb`
      }
    ]
  },
  {
    input: [
      ["Bloemdieren", "Bacteriën"], ["Bloemdieren", "Blauwalgen"], ["Bloemdieren", "Leca"], ["Bloemdieren", "Amoeben"],
      ["Bloemdieren", "Foraminiferen"], ["Bloemdieren", "Stralendiertjes"], ["Bloemdieren", "Wormen"], 
      ["Bloemdieren", "Beerdiertjes"], ["Bloemdieren", "Krill"], ["Bloemdieren", "Garnalen"]
    ],
    output: [
      { naam: "Bloemdieren", icoon: "icons/Bloemdieren.png", map: "Waterdieren",
        quote: `The ocean stirs the heart, inspires the imagination and brings eternal joy to the soul 
        <br><br>- Robert Wyland`
      },
      { naam: "Gif", icoon: "icons/Gif.png", map: "Biologie",
       quote: `All things are poisons, for there is nothing without poisonous qualities. It is only the dose which 
       makes a thing poison
       <br><br>- Paracelsus`
      },
      { naam: "Glucose", icoon: "icons/Glucose.png", map: "Biologie",
       quote: `No matter how closely you examine the water, glucose, and electrolyte salts in the human brain, you can't 
       find the point where these molecules became conscious
       <br><br>- Nassim Taleb`
      }
    ]
  },
  {
    input: ["Bloemdieren", "Evolutie"],
    hint: `Sommige dieren zijn als bloemen en komen dan tot bloei...`,
    tijd: 580_000_000,
    output: [
      { naam: "Zeeanemonen", icoon: "icons/Zeeanemonen.png", map: "Waterdieren", 
        quote: `The sea-anemone, though fixed to the rock, is a most voracious and living creature 
        <br><br>- Charles Darwin`
      }
    ]
  },
  {
    input: [
      ["Wormen", "Bacteriën"], ["Wormen", "Blauwalgen"], ["Wormen", "Leca"], ["Wormen", "Amoeben"],
      ["Wormen", "Foraminiferen"], ["Wormen", "Stralendiertjes"], ["Wormen", "Beerdiertjes"], ["Wormen", "Krill"]
    ],
    output: [
      { naam: "Wormen", icoon: "icons/Wormen.png", map: "Waterdieren", 
        quote: `Along the shores and in the shallow seas live countless worms whose quiet labors help shape the ocean floor 
        <br><br>- Rachel Carson`
      },
      { naam: "Glucose", icoon: "icons/Glucose.png", map: "Biologie",
       quote: `No matter how closely you examine the water, glucose, and electrolyte salts in the human brain, you can't 
       find the point where these molecules became conscious
       <br><br>- Nassim Taleb`
      }
    ]
  },
  {
    input: [
      ["Wormen", "Zenuwen"], ["Zeesterren", "Zenuwen"], ["Oertrochozoa", "Zenuwen"],
      ["Lancetvisjes", "Zenuwen"], ["Beerdiertjes", "Zenuwen"]
    ],
    hint: `Het is voor sommigen niet fijn, maar de zenuw doet het als handige waarschuwing.`,
    output: [
      { naam: "Tast", icoon: "icons/Tast.png", map: "Brein", 
        quote: `Too often we underestimate the power of touch 
        <br><br>- Leo Buscaglia`
      },
      { naam: "Licht", icoon: "icons/Licht.png", map: "Brein",
        quote: `In every person there is a sun. Just let them shine 
        <br><br>- Socrates`
      },
      { naam: "Geur", icoon: "icons/Geur.png", map: "Brein", 
        quote: `Smell is a potent wizard that transports you across thousands of miles and all the years you have lived 
        <br><br>- Helen Keller`
      },
      { naam: "Pijn", icoon: "icons/Pijn.png", map: "Brein",
        quote: `Pain is inevitable. Suffering is optional
        <br><br>- Haruki Murakami`
      }
    ]
  },
  {
    input: [
      ["Wormen", "Pijn"], ["Zeesterren", "Pijn"], ["Oerbilateria", "Pijn"], ["Oertrochozoa", "Pijn"],
      ["Lancetvisjes", "Pijn"], ["Agnathen", "Pijn"], ["Oergeleedpotigen", "Pijn"], ["Zeeslakken", "Pijn"],
      ["Tweekleppigen", "Pijn"], ["Trilobieten", "Pijn"], ["Oercheliceraten", "Pijn"], ["Duizendpoten", "Pijn"],
      ["Oerkreeftjes", "Pijn"], ["Oerinsecten", "Pijn"], ["Schorpioenen", "Pijn"], ["Spinnen", "Pijn"],
      ["Zwaardstaarten", "Pijn"], ["Krill", "Pijn"],["Pissebedden", "Pijn"], ["Garnalen", "Pijn"],
      ["Kreeften", "Pijn"],
      
      ["Inktvissen", "Storm"], ["Inktvissen", "Orkaan"], ["Inktvissen", "Pijn"],
      ["Nautilussen", "Storm"], ["Nautilussen", "Orkaan"], ["Nautilussen", "Pijn"],
      ["Oerchondrichthyes", "Storm"], ["Oerchondrichthyes", "Orkaan"], ["Oerchondrichthyes", "Pijn"],
      ["Oerstraalvinnigen", "Storm"], ["Oerstraalvinnigen", "Orkaan"], ["Oerstraalvinnigen", "Pijn"],
      ["Coelacanthen", "Storm"], ["Coelacanthen", "Orkaan"], ["Coelacanthen", "Pijn"],
      ["Longvissen", "Storm"], ["Longvissen", "Orkaan"], ["Longvissen", "Pijn"],
      ["Haaien", "Storm"], ["Haaien", "Orkaan"], ["Haaien", "Pijn"],
      ["Holocefalen", "Storm"], ["Holocefalen", "Orkaan"], ["Holocefalen", "Pijn"]
    ],
    hint: `Bewustzijn brengt met zich mee dat pijn zich vertaalt naar angst.`,
    output: [
      { naam: "Angst", icoon: "icons/Angst.png", map: "Brein", 
        quote: `Fear defeats more people than any other thing in the world
        <br><br>- Ralph Emerson`
      }
    ]
  },
  {
    input: [
      ["Zeesterren", "Sponzen"], ["Zeesterren", "Wormen"], ["Zeeanemonen", "Zeesterren"]
    ],
    output: [
      { naam: "Zeesterren", icoon: "icons/Zeesterren.png", map: "Waterdieren", 
        quote: `In the tidal pools the starfish cling to the rocks while the waves break over them 
        <br><br>- Rachel Carson`
      },
      { naam: "Glucose", icoon: "icons/Glucose.png", map: "Biologie",
       quote: `No matter how closely you examine the water, glucose, and electrolyte salts in the human brain, you can't 
       find the point where these molecules became conscious
       <br><br>- Nassim Taleb`
      }
    ]
  },
  {
    input: [
      ["Aardolie", "Warmte"], ["Aardolie", "Druk"]
    ],
    output: [
      { naam: "Gas", icoon: "icons/Gas.png", map: "Lucht",
      quote: `Hydrogen is a light, odorless gas, which, given enough time, turns into people 
      <br><br>- Edward Harrison`
      }
    ]
  },
  {
    input: [
      ["Zeeanemonen", "Bacteriën"], ["Zeeanemonen", "Blauwalgen"], ["Zeeanemonen", "Leca"], ["Zeeanemonen", "Amoeben"],
      ["Zeeanemonen", "Foraminiferen"], ["Zeeanemonen", "Stralendiertjes"], ["Zeeanemonen", "Wormen"],
      ["Zeeanemonen", "Beerdiertjes"], ["Zeeanemonen", "Krill"], ["Zeeanemonen", "Garnalen"]
    ],
    output: [
      { naam: "Zeeanemonen", icoon: "icons/Zeeanemonen.png", map: "Waterdieren", 
        quote: `The sea-anemone, though fixed to the rock, is a most voracious and living creature 
        <br><br>- Charles Darwin`
      },
      { naam: "Gif", icoon: "icons/Gif.png", map: "Biologie",
       quote: `All things are poisons, for there is nothing without poisonous qualities. It is only the dose which 
       makes a thing poison
       <br><br>- Paracelsus`
      },
      { naam: "Glucose", icoon: "icons/Glucose.png", map: "Biologie",
       quote: `No matter how closely you examine the water, glucose, and electrolyte salts in the human brain, you can't 
       find the point where these molecules became conscious
       <br><br>- Nassim Taleb`
      }
    ]
  },
//------------ THRESHOLD 3: CAMBRISCHE EXPLOSIE --------------//
  {
    input: ["Oerbilateria", "Bot"],
    hint: `Nu zijn de omstandigheden juist om extra kracht te geven aan de bilateria...`,
    tijd: 541_000_000,
    output: [
      { naam: "Oertrochozoa", icoon: "icons/Oertrochozoa.png", map: "Waterdieren", 
        quote: `When animals first evolved skeletons and shells, the fossil record suddenly found its voice
        <br><br>- Andrew H. Knoll`
      },
      { naam: "Lancetvisjes", icoon: "icons/Lancetvisjes.png", map: "Vissen", 
        quote: `For before this I was born once a boy, and a maiden, and a plant, and a bird, and a darting fish in the sea 
        <br><br>- Empedocles`
      },
      { naam: "Agnathen", icoon: "icons/Agnathen.png", map: "Vissen", 
        quote: `Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole 
        life believing that it is stupid 
        <br><br>- Albert Einstein`
      },
      { naam: "Oergeleedpotigen", icoon: "icons/Oergeleedpotigen.png", map: "Geleedpotigen", 
        quote: `So important are insects and other land-dwelling arthropods that if all were to disappear, 
        humanity probably could not last more than a few months
        <br><br>- E.O. Wilson`
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
        requirements: ["Woestijn", "Sneeuw", "Hagel", "Orkaan", "Strand", "Overstroming", 
          "Zandsteen", "Kalksteen", "Kwartsiet", "Calciet", "Sulfaat", "Gneis", "Leisteen", 
          "Dood", "Stromatolieten", "Fotosynthese", "Amoeben", "Foraminiferen", "Stralendiertjes", 
          "Aarde", "Roodwieren", "Groenwieren", "Slijm", "Schelp", "Rif", 
          "Druk", "Tast", "Steenwortelalgen", "Kwallen", "Zeeanemonen", "Wormen", "Zeesterren"]
      },
      normal: {
        titel: "Cambrische Explosie",
        tekst: `De Cambriscche explosie...`,
      }
    }
  },
  {
    input: [
      ["Steenwortelalgen", "Rivier"], ["Steenwortelalgen", "Meer"], ["Steenwortelalgen", "Ven"]
    ],
    hint: `Hoe zit het met algen in zoet water?`,
    tijd: 470_000_000,
    output: [
      { naam: "Mos", icoon: "icons/Mos.png", map: "Planten", 
        quote: `Every antique farm-house and moss-grown cottage is a picture
        <br><br>- Washington Irving`
      }
    ]
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
    input: [
      ["Oertrochozoa", "Bacteriën"], ["Oertrochozoa", "Blauwalgen"], ["Oertrochozoa", "Leca"], 
      ["Oertrochozoa", "Amoeben"], ["Oertrochozoa", "Foraminiferen"], ["Oertrochozoa", "Stralendiertjes"],
      ["Oertrochozoa", "Wormen"], ["Oertrochozoa", "Beerdiertjes"], ["Oertrochozoa", "Krill"]
    ],
    hint: `Voor de bewuste dieren is eten meer dan alleen een beloning.`, 
    output: [
      { naam: "Oertrochozoa", icoon: "icons/Oertrochozoa.png", map: "Waterdieren", 
        quote: `When animals first evolved skeletons and shells, the fossil record suddenly found its voice
        <br><br>- Andrew H. Knoll`
      },
      { naam: "Glucose", icoon: "icons/Glucose.png", map: "Biologie",
       quote: `No matter how closely you examine the water, glucose, and electrolyte salts in the human brain, you can't 
       find the point where these molecules became conscious
       <br><br>- Nassim Taleb`
      },
      { naam: "Vreugde", icoon: "icons/Vreugde.png", map: "Brein", 
        quote: `Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy
        <br><br>- Nhat Hanh`
      }
    ]
  },
  {
    input: [
      ["Pissebedden", "Virus"], ["Pissebedden", "Parasieten"],
      
      ["Oertrochozoa", "Virus"], ["Oertrochozoa", "Schimmel"], ["Oertrochozoa", "Parasieten"],
      ["Agnathen", "Virus"], ["Agnathen", "Schimmel"], ["Agnathen", "Parasieten"],
      ["Oergeleedpotigen", "Virus"], ["Oergeleedpotigen", "Schimmel"], ["Oergeleedpotigen", "Parasieten"],
      ["Zeeslakken", "Virus"], ["Zeeslakken", "Schimmel"], ["Zeeslakken", "Parasieten"],
      ["Trilobieten", "Virus"], ["Trilobieten", "Schimmel"], ["Trilobieten", "Parasieten"],
      ["Oercheliceraten", "Virus"], ["Oercheliceraten", "Schimmel"], ["Oercheliceraten", "Parasieten"],
      ["Duizendpoten", "Virus"], ["Duizendpoten", "Schimmel"], ["Duizendpoten", "Parasieten"],
      ["Oerkreeftjes", "Virus"], ["Oerkreeftjes", "Schimmel"], ["Oerkreeftjes", "Parasieten"],
      ["Oerinsecten", "Virus"], ["Oerinsecten", "Schimmel"], ["Oerinsecten", "Parasieten"],
      ["Nautilussen", "Virus"], ["Nautilussen", "Schimmel"], ["Nautilussen", "Parasieten"],
      ["Schorpioenen", "Virus"], ["Schorpioenen", "Schimmel"], ["Schorpioenen", "Parasieten"],
      ["Spinnen", "Virus"], ["Spinnen", "Schimmel"], ["Spinnen", "Parasieten"],
      ["Krill", "Virus"], ["Krill", "Schimmel"], ["Krill", "Parasieten"],
      ["Garnalen", "Virus"], ["Garnalen", "Schimmel"], ["Garnalen", "Parasieten"],
      ["Kreeften", "Virus"], ["Kreeften", "Schimmel"], ["Kreeften", "Parasieten"],
      ["Krabben", "Virus"], ["Krabben", "Schimmel"], ["Krabben", "Parasieten"],
      
      ["Zwaardstaarten", "Virus"], ["Zwaardstaarten", "Schimmel"], ["Zwaardstaarten", "Parasieten"],
      ["Inktvissen", "Bacteriën"], ["Inktvissen", "Virus"], ["Inktvissen", "Schimmel"], ["Inktvissen", "Parasieten"],
      ["Oerchondrichthyes", "Bacteriën"], ["Oerchondrichthyes", "Virus"], ["Oerchondrichthyes", "Schimmel"], 
      ["Oerchondrichthyes", "Parasieten"],
      ["Oerstraalvinnigen", "Bacteriën"], ["Oerstraalvinnigen", "Virus"], ["Oerstraalvinnigen", "Schimmel"], 
      ["Oerstraalvinnigen", "Parasieten"],
      ["Coelacanthen", "Bacteriën"], ["Coelacanthen", "Virus"], ["Coelacanthen", "Schimmel"], 
      ["Coelacanthen", "Parasieten"],
      ["Longvissen", "Bacteriën"], ["Longvissen", "Virus"], ["Longvissen", "Schimmel"], ["Longvissen", "Parasieten"],
      ["Haaien", "Bacteriën"], ["Haaien", "Virus"], ["Haaien", "Schimmel"], ["Haaien", "Parasieten"],
      ["Holocefalen", "Bacteriën"], ["Holocefalen", "Virus"], ["Holocefalen", "Schimmel"], ["Holocefalen", "Parasieten"]
    ],
    hint: `Niet ziek willen worden, daar kan het bewustzijn ook bij helpen.`, 
    output: [
      { naam: "Afkeer", icoon: "icons/Afkeer.png", map: "Brein", 
        quote: `Disgust and resolve are two of the great emotions that lead to change
        <br><br>- Jim Rohn`
      }
    ]
  },
  {
    input: ["Oertrochozoa", "Evolutie"],
    hint: `Van trochozoa is het een kleine stap naar de weekdieren.`, 
    output: [
      { naam: "Inktvissen", icoon: "icons/Inktvissen.png", map: "Waterdieren", 
        quote: `I would love to see a giant squid. Very few people have seen them. 
        And only about half a dozen people have seen one alive
        <br><br>- David Attenborough`
      },
      { naam: "Zeeslakken", icoon: "icons/Zeeslakken.png", map: "Waterdieren", 
        quote: `Even a snail will eventually reach its destination
        <br><br>- Gail Tsukiyama`
      },
      { naam: "Tweekleppigen", icoon: "icons/Tweekleppigen.png", map: "Waterdieren", 
        quote: `Every life deserves a certain amount of dignity, no matter how poor or damaged the shell
        that carries it
        <br><br>- Rick Bragg`
      }
    ]
  },
  {
    input: [
      ["Oertrochozoa", "Oertrochozoa"], ["Agnathen", "Agnathen"], ["Oergeleedpotigen", "Oergeleedpotigen"],
      ["Inktvissen", "Inktvissen"], ["Zeeslakken", "Zeeslakken"], ["Tweekleppigen", "Tweekleppigen"],
      ["Trilobieten", "Trilobieten"], ["Oercheliceraten", "Oercheliceraten"], ["Duizendpoten", "Duizendpoten"],
      ["Oerkreeftjes", "Oerkreeftjes"], ["Oerinsecten", "Oerinsecten"], ["Nautilussen", "Nautilussen"],
      ["Schorpioenen", "Schorpioenen"], ["Spinnen", "Spinnen"], ["Zwaardstaarten", "Zwaardstaarten"],
      ["Krill", "Krill"], ["Oerchondrichthyes", "Oerchondrichthyes"], ["Oerstraalvinnigen", "Oerstraalvinnigen"],
      ["Coelacanthen", "Coelacanthen"], ["Longvissen", "Longvissen"], ["Pissebedden", "Pissebedden"],
      ["Garnalen", "Garnalen"], ["Kreeften", "Kreeften"], ["Krabben", "Krabben"], ["Haaien", "Haaien"],
      ["Holocefalen", "Holocefalen"]
    ],
    hint: `Hm.. dieren van dezelfde soorten kunnen behoorlijk anders op elkaar reageren.`, 
    output: [
      { naam: "Drift", icoon: "icons/Drift.png", map: "Brein", 
        quote: `Desire and force between them are responsible for all our actions; desire causes our voluntary acts,
        force our involuntary
        <br><br>- Blaise Pascal`
      },
      { naam: "Woede", icoon: "icons/Woede.png", map: "Brein", 
        quote: `Anybody can become angry - that is easy, but to be angry with the right person and to the right degree
        and at the right time and for the right purpose, and in the right way - that is not within everybody's power
        and is not easy
        <br><br>- Aristoteles`
      }
    ]
  },
  {
    input: [
      ["Lancetvisjes", "Bacteriën"], ["Lancetvisjes", "Blauwalgen"], ["Lancetvisjes", "Leca"], ["Lancetvisjes", "Amoeben"],
      ["Lancetvisjes", "Foraminiferen"], ["Lancetvisjes", "Stralendiertjes"], ["Lancetvisjes", "Wormen"],
      ["Lancetvisjes", "Beerdiertjes"], ["Lancetvisjes", "Krill"]
    ],
    output: [
      { naam: "Lancetvisjes", icoon: "icons/Lancetvisjes.png", map: "Vissen", 
        quote: `For before this I was born once a boy, and a maiden, and a plant, and a bird, and a darting fish in the sea 
        <br><br>- Empedocles`
      },
      { naam: "Glucose", icoon: "icons/Glucose.png", map: "Biologie",
       quote: `No matter how closely you examine the water, glucose, and electrolyte salts in the human brain, you can't 
       find the point where these molecules became conscious
       <br><br>- Nassim Taleb`
      }
    ]
  },
  {
    input: [
      ["Agnathen", "Bacteriën"], ["Agnathen", "Blauwalgen"], ["Agnathen", "Leca"], ["Agnathen", "Amoeben"],
      ["Agnathen", "Foraminiferen"], ["Agnathen", "Stralendiertjes"], ["Agnathen", "Wormen"], ["Agnathen", "Beerdiertjes"],
      ["Agnathen", "Krill"], ["Agnathen", "Garnalen"]
    ],
    output: [
      { naam: "Agnathen", icoon: "icons/Agnathen.png", map: "Vissen", 
        quote: `Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole 
        life believing that it is stupid 
        <br><br>- Albert Einstein`
      },
      { naam: "Glucose", icoon: "icons/Glucose.png", map: "Biologie",
       quote: `No matter how closely you examine the water, glucose, and electrolyte salts in the human brain, you can't 
       find the point where these molecules became conscious
       <br><br>- Nassim Taleb`
      },
      { naam: "Vreugde", icoon: "icons/Vreugde.png", map: "Brein", 
        quote: `Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy
        <br><br>- Nhat Hanh`
      }
    ]
  },
  {
    input: [
      ["Agnathen", "Evolutie"], ["Agnathen", "Bot"]
    ],
    hint: `Agnathen zouden iets kunnen bedenken om voedsel te vermalen, maar wat...`,
    output: [
      { naam: "Tand", icoon: "icons/Tand.png", map: "Biologie", 
        quote: `Behind every smile there's teeth
        <br><br>- Confucius`
      }
    ]
  },
  {
    input: [
      ["Agnathen", "Zenuwen"], ["Oergeleedpotigen", "Zenuwen"], ["Trilobieten", "Zenuwen"],
      ["Slakken", "Zenuwen"], ["Oercheliceraten", "Zenuwen"], ["Nautilussen", "Zenuwen"],
      ["Schorpioenen", "Zenuwen"], ["Spinnen", "Zenuwen"]
    ],
    hint: `Wat een meesterwerk... elk nieuw leven zijn eigen binnenwereld.`,
    output: [
      { naam: "Tast", icoon: "icons/Tast.png", map: "Brein", 
        quote: `Too often we underestimate the power of touch 
        <br><br>- Leo Buscaglia`
      },
      { naam: "Geur", icoon: "icons/Geur.png", map: "Brein", 
        quote: `Smell is a potent wizard that transports you across thousands of miles and all the years you have lived 
        <br><br>- Helen Keller`
      },
      { naam: "Pijn", icoon: "icons/Pijn.png", map: "Brein",
        quote: `Pain is inevitable. Suffering is optional
        <br><br>- Haruki Murakami`
      },
      { naam: "Brein", icoon: "icons/Brein.png", map: "Brein", 
        quote: `The great events of the world take place in the brain 
        <br><br>- Oscar Wilde`
      },
      { naam: "Oog", icoon: "icons/Oog.png", map: "Biologie", 
        quote: `Eye contact is way more intimate than words will ever be 
        <br><br>- Faraaz Kazi`
      },
      { naam: "Smaak", icoon: "icons/Smaak.png", map: "Brein",
        quote: `Eat bitter, taste sweet
        <br><br>- Rick Riordon`
      }
    ]
  },
  {
    input: [
      ["Oergeleedpotigen", "Radioactiviteit"], ["Oergeleedpotigen", "Vuur"], ["Oergeleedpotigen", "Gif"],
      ["Trilobieten", "Radioactiviteit"], ["Trilobieten", "Vuur"], ["Trilobieten", "Gif"],
      ["Schorpioenen", "Radioactiviteit"], ["Schorpioenen", "Vuur"], ["Schorpioenen", "Gif"],
      ["Zwaardstaarten", "Radioactiviteit"], ["Zwaardstaarten", "Vuur"], ["Zwaardstaarten", "Gif"],
      ["Kreeften", "Radioactiviteit"], ["Kreeften", "Vuur"], ["Kreeften", "Gif"],
      ["Krabben", "Radioactiviteit"], ["Krabben", "Vuur"], ["Krabben", "Gif"],
      ["Haaien", "Radioactiviteit"], ["Haaien", "Vuur"], ["Haaien", "Gif"],
      ["Holocefalen", "Radioactiviteit"], ["Holocefalen", "Vuur"], ["Holocefalen", "Gif"]
    ],
    hint: `Waar de geleedpotigen overlijden, blijven skeletten over.`,
    output: [
      { naam: "Dood", icoon: "icons/Dood.png", map: "Krachten", 
        quote: `Death does not concern us, because as long as we exist, death is not here. And when it does come, 
        we no longer exist 
        <br><br>- Epicurus`
      },
      { naam: "Kadaver", icoon: "icons/Kadaver.png", map: "Biologie", 
        quote: `Once one has kissed a cadaver's forehead, there always remains something of it on the lips, an infinite
        bitterness, an aftertaste of nothingness that nothing can erase
        <br><br>- Gustave Flaubert`
      }
    ]
  },
  {
    input: [
      ["Oergeleedpotigen", "Bacteriën"], ["Oergeleedpotigen", "Blauwalgen"], ["Oergeleedpotigen", "Leca"], 
      ["Oergeleedpotigen", "Amoeben"], ["Oergeleedpotigen", "Foraminiferen"], ["Oergeleedpotigen", "Stralendiertjes"],
      ["Oergeleedpotigen", "Wormen"], ["Oergeleedpotigen", "Beerdiertjes"], ["Oergeleedpotigen", "Krill"],
      ["Oergeleedpotigen", "Garnalen"]
    ],
    output: [
      { naam: "Oergeleedpotigen", icoon: "icons/Oergeleedpotigen.png", map: "Geleedpotigen", 
        quote: `So important are insects and other land-dwelling arthropods that if all were to disappear, 
        humanity probably could not last more than a few months
        <br><br>- E.O. Wilson`
      },
      { naam: "Glucose", icoon: "icons/Glucose.png", map: "Biologie",
       quote: `No matter how closely you examine the water, glucose, and electrolyte salts in the human brain, you can't 
       find the point where these molecules became conscious
       <br><br>- Nassim Taleb`
      },
      { naam: "Vreugde", icoon: "icons/Vreugde.png", map: "Brein", 
        quote: `Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy
        <br><br>- Nhat Hanh`
      }
    ]
  },
  {
    input: [
      ["Oergeleedpotigen", "Dood"], ["Trilobieten", "Dood"], ["Schorpioenen", "Dood"], ["Zwaardstaarten", "Dood"], 
      ["Kreeften", "Dood"], ["Krabben", "Dood"], ["Haaien", "Dood"], ["Holocefalen", "Dood"]
    ],
    output: [
      { naam: "Kadaver", icoon: "icons/Kadaver.png", map: "Biologie", 
        quote: `Once one has kissed a cadaver's forehead, there always remains something of it on the lips, an infinite
        bitterness, an aftertaste of nothingness that nothing can erase
        <br><br>- Gustave Flaubert`
      }
    ]
  },
  {
    input: ["Oergeleedpotigen", "Evolutie"],
    hint: `Geleedpotigen zouden nog wel eens divers kunnen worden...`,
    tijd: 490_000_000,
    output: [
      { naam: "Trilobieten", icoon: "icons/Trilobieten.png", map: "Geleedpotigen", 
        quote: `The eye of the trilobite tells us that the sun shone on the old beach where he lived; for there is 
        nothing in nature without a purpose, and when so complicated an organ was made to receive the light, there must 
        have been light to enter it 
        <br><br>- Louis Agassiz`
      },
      { naam: "Oercheliceraten", icoon: "icons/Oercheliceraten.png", map: "Geleedpotigen", 
        quote: `The seas of the Cambrian were a theatre of evolutionary invention, 
        where arthropods in particular explored a bewildering variety of forms
        <br><br>- Richard Fortey`
      },
      { naam: "Duizendpoten", icoon: "icons/Duizendpoten.png", map: "Geleedpotigen", 
        quote: `The centipede has rhythm and flow in its hundred legs precisely because it does not have to think
        about it
        <br><br>- Robert Genn`
      },
      { naam: "Oerkreeftjes", icoon: "icons/Oerkreeftjes.png", map: "Geleedpotigen", 
        quote: `Crustaceans represent one of the most diverse and ecologically important groups of animals in the sea
        <br><br>- Martin Thiel`
      },
      { naam: "Oerinsecten", icoon: "icons/Oerinsecten.png", map: "Geleedpotigen", 
        quote: `An insect is more complex than a star.. and is a far greater challenge to understand
        <br><br>- Martin Rees`
      }
    ]
  },
  {
    input: [
      ["Manteldieren", "Bacteriën"], ["Manteldieren", "Blauwalgen"], ["Manteldieren", "Leca"], ["Manteldieren", "Amoeben"],
      ["Manteldieren", "Foraminiferen"], ["Manteldieren", "Stralendiertjes"], ["Manteldieren", "Beerdiertjes"],
      ["Manteldieren", "Krill"]
    ],
    output: [
      { naam: "Manteldieren", icoon: "icons/Manteldieren.png", map: "Waterdieren",
        quote: `The ascidians are among the most extraordinary of marine animals 
        <br><br>- Thomas Huxley`
      },
      { naam: "Glucose", icoon: "icons/Glucose.png", map: "Biologie",
       quote: `No matter how closely you examine the water, glucose, and electrolyte salts in the human brain, you can't 
       find the point where these molecules became conscious
       <br><br>- Nassim Taleb`
      }
    ]
  },
  {
    input: [
      ["Manteldieren", "Zenuwen"], ["Tweekleppigen", "Zenuwen"]
    ],
    hint: `Koralen zijn als licht in de duisternis, maar ervaren zij dat ook?`,
    output: [
      { naam: "Druk", icoon: "icons/Druk.png", map: "Krachten", 
        quote: `The scientist states that pressure is exerted outwards in all directions equally, whereas natural 
        pressure (e.g. air pressure) is exerted inwards from all directions equally 
        <br><br>- Viktor Schawberger`
      },
      { naam: "Tast", icoon: "icons/Tast.png", map: "Brein", 
        quote: `Too often we underestimate the power of touch 
        <br><br>- Leo Buscaglia`
      },
      { naam: "Licht", icoon: "icons/Licht.png", map: "Brein",
        quote: `In every person there is a sun. Just let them shine 
        <br><br>- Socrates`
      },
      { naam: "Geur", icoon: "icons/Geur.png", map: "Brein", 
        quote: `Smell is a potent wizard that transports you across thousands of miles and all the years you have lived 
        <br><br>- Helen Keller`
      }
    ]
  },
  {
    input: [
      ["Beerdiertjes", "Bacteriën"], ["Beerdiertjes", "Blauwalgen"], ["Beerdiertjes", "Leca"], ["Beerdiertjes", "Amoeben"],
      ["Beerdiertjes", "Foraminiferen"], ["Beerdiertjes", "Stralendiertjes"]
    ],
    output: [
      { naam: "Beerdiertjes", icoon: "icons/Beerdiertjes.png", map: "Waterdieren", 
        quote: `There is one living organism, called a tardigrade, that has survived the five great mass extinctions on 
        Earth, and it can survive in vacuums in space and boiling hot water and freezing subzero temperatures 
        <br><br>- Alycia Carey`
      },
      { naam: "Glucose", icoon: "icons/Glucose.png", map: "Biologie",
       quote: `No matter how closely you examine the water, glucose, and electrolyte salts in the human brain, you can't 
       find the point where these molecules became conscious
       <br><br>- Nassim Taleb`
      }
    ]
  },
  {
    input: ["Inktvissen", "Schelp"],
    hint: `Er zijn nog weekdieren zonder schelp...`,
    tijd: 490_000_000,
    output: [
      { naam: "Nautilussen", icoon: "icons/Nautilussen.png", map: "Waterdieren", 
        quote: `You don't have to bee Greek to enjoy this one
        <br><br>- Jeff Smith`
      }
    ]
  },
  {
    input: [
      ["Inktvissen", "Zenuwen"], ["Oerkreeftjes", "Zenuwen"], ["Oerinsecten", "Zenuwen"],
      ["Zwaardstaarten", "Zenuwen"], ["Krill", "Zenuwen"], ["Pissebedden", "Zenuwen"], ["Garnalen", "Zenuwen"],
      ["Kreeften", "Zenuwen"], ["Krabben", "Zenuwen"]
    ],
    hint: `Kijk naar de dieren... sommigen kunnen al kleuren zien.`,
    output: [
      { naam: "Tast", icoon: "icons/Tast.png", map: "Brein", 
        quote: `Too often we underestimate the power of touch 
        <br><br>- Leo Buscaglia`
      },
      { naam: "Geur", icoon: "icons/Geur.png", map: "Brein", 
        quote: `Smell is a potent wizard that transports you across thousands of miles and all the years you have lived 
        <br><br>- Helen Keller`
      },
      { naam: "Pijn", icoon: "icons/Pijn.png", map: "Brein",
        quote: `Pain is inevitable. Suffering is optional
        <br><br>- Haruki Murakami`
      },
      { naam: "Brein", icoon: "icons/Brein.png", map: "Brein", 
        quote: `The great events of the world take place in the brain 
        <br><br>- Oscar Wilde`
      },
      { naam: "Oog", icoon: "icons/Oog.png", map: "Biologie", 
        quote: `Eye contact is way more intimate than words will ever be 
        <br><br>- Faraaz Kazi`
      },
      { naam: "Smaak", icoon: "icons/Smaak.png", map: "Brein",
        quote: `Eat bitter, taste sweet
        <br><br>- Rick Riordon`
      },
      { naam: "Kleur", icoon: "icons/Kleur.png", map: "Brein",
        quote: `Colour in a picture is like enthusiasm in life
        <br><br>- Vincent van Gogh`
      }
    ]
  },
  {
    input: [
      ["Inktvissen", "Licht"], ["Inktvissen", "Kleur"],
      ["Nautilussen", "Licht"], ["Nautilussen", "Kleur"],
      ["Oerchondrichthyes", "Licht"], ["Oerchondrichthyes", "Kleur"],
      ["Oerstraalvinnigen", "Licht"], ["Oerstraalvinnigen", "Kleur"],
      ["Coelacanthen", "Licht"], ["Coelacanthen", "Kleur"],
      ["Longvissen", "Licht"], ["Longvissen", "Kleur"],
      ["Haaien", "Licht"], ["Haaien", "Kleur"],
      ["Holocefalen", "Licht"], ["Holocefalen", "Kleur"]
    ],
    hint: `De slimste dieren zullen je met de speling van het licht verbazen.`,
    output: [
      { naam: "Verbazing", icoon: "icons/Verbazing.png", map: "Brein", 
        quote: `Every day is a surprise. There are confirmations of an interconnectivity and synchronicity which inspire,
        titillate and confirm the inherent comedy of the universe
        <br><br>- Billy Zane`
      }
    ]
  },
  {
    input: [
      ["Inktvissen", "Kwallen"], ["Inktvissen", "Wormen"], ["Inktvissen", "Lancetvisjes"], ["Inktvissen", "Agnathen"],
      ["Inktvissen", "Oergeleedpotigen"], ["Inktvissen", "Manteldieren"], ["Inktvissen", "Oerkreeftjes"],
      ["Inktvissen", "Zwaardstaarten"], ["Inktvissen", "Krill"], ["Inktvissen", "Garnalen"]
    ],
    output: [
      { naam: "Inktvissen", icoon: "icons/Inktvissen.png", map: "Waterdieren", 
        quote: `I would love to see a giant squid. Very few people have seen them. 
        And only about half a dozen people have seen one alive
        <br><br>- David Attenborough`
      },
      { naam: "Glucose", icoon: "icons/Glucose.png", map: "Biologie",
       quote: `No matter how closely you examine the water, glucose, and electrolyte salts in the human brain, you can't 
       find the point where these molecules became conscious
       <br><br>- Nassim Taleb`
      },
      { naam: "Vreugde", icoon: "icons/Vreugde.png", map: "Brein", 
        quote: `Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy
        <br><br>- Nhat Hanh`
      }
    ]
  },
  {
    input: [
      ["Zeeslakken", "Radioactiviteit"], ["Zeeslakken", "Gif"],
      ["Tweekleppigen", "Radioactiviteit"], ["Tweekleppigen", "Gif"],
      ["Nautilussen", "Radioactiviteit"], ["Nautilussen", "Gif"]
    ],
    output: [
      { naam: "Dood", icoon: "icons/Dood.png", map: "Krachten", 
        quote: `Death does not concern us, because as long as we exist, death is not here. And when it does come, 
        we no longer exist 
        <br><br>- Epicurus`
      },
      { naam: "Detritus", icoon: "icons/Detritus.png", map: "Biologie", 
        quote: `I choose not to make a graveyard of my body for the rotting corpses of dead animals 
        <br><br>- George Shaw`
      },
      { naam: "Schelp", icoon: "icons/Schelp.png", map: "Biologie", 
        quote: `I see a broken shell and I remind myself that something might have needed setting free 
        <br><br>- Sara Pennypacker`
      }
    ]
  },
  {
    input: [
      ["Zeeslakken", "Bacteriën"], ["Zeeslakken", "Blauwalgen"], ["Zeeslakken", "Leca"], ["Zeeslakken", "Amoeben"], 
      ["Zeeslakken", "Foraminiferen"], ["Zeeslakken", "Stralendiertjes"], ["Zeeslakken", "Rode algen"], 
      ["Zeeslakken", "Groene algen"], ["Zeeslakken", "Roodwieren"], ["Zeeslakken", "Groenwieren"], 
      ["Zeeslakken", "Wormen"]
    ],
    output: [
      { naam: "Zeeslakken", icoon: "icons/Zeeslakken.png", map: "Waterdieren", 
        quote: `Even a snail will eventually reach its destination
        <br><br>- Gail Tsukiyama`
      },
      { naam: "Glucose", icoon: "icons/Glucose.png", map: "Biologie",
       quote: `No matter how closely you examine the water, glucose, and electrolyte salts in the human brain, you can't 
       find the point where these molecules became conscious
       <br><br>- Nassim Taleb`
      },
      { naam: "Vreugde", icoon: "icons/Vreugde.png", map: "Brein", 
        quote: `Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy
        <br><br>- Nhat Hanh`
      }
    ]
  },
  {
    input: [
      ["Zeeslakken", "Dood"], ["Tweekleppigen", "Dood"], ["Nautilussen", "Dood"]
    ],
    output: [
      { naam: "Detritus", icoon: "icons/Detritus.png", map: "Biologie", 
        quote: `I choose not to make a graveyard of my body for the rotting corpses of dead animals 
        <br><br>- George Shaw`
      },
      { naam: "Schelp", icoon: "icons/Schelp.png", map: "Biologie", 
        quote: `I see a broken shell and I remind myself that something might have needed setting free 
        <br><br>- Sara Pennypacker`
      }
    ]
  },
  {
    input: [
      ["Zeesterren", "Zeeslakken"], ["Zeesterren", "Tweekleppigen"]
    ],
    output: [
      { naam: "Zeesterren", icoon: "icons/Zeesterren.png", map: "Waterdieren", 
        quote: `In the tidal pools the starfish cling to the rocks while the waves break over them 
        <br><br>- Rachel Carson`
      },
      { naam: "Glucose", icoon: "icons/Glucose.png", map: "Biologie",
       quote: `No matter how closely you examine the water, glucose, and electrolyte salts in the human brain, you can't 
       find the point where these molecules became conscious
       <br><br>- Nassim Taleb`
      },
      { naam: "Schelp", icoon: "icons/Schelp.png", map: "Biologie", 
        quote: `I see a broken shell and I remind myself that something might have needed setting free 
        <br><br>- Sara Pennypacker`
      }
    ]
  },
  {
    input: [
      ["Tweekleppigen", "Zand"], ["Tweekleppigen", "Detritus"], ["Tweekleppigen", "Blauwalgen"], 
      ["Tweekleppigen", "Schimmel"], ["Tweekleppigen", "Parasieten"]
    ],
    hint: `Oh wat kan die zandkorrel irritant zijn voor schelpdieren.`,
    output: [
      { naam: "Parel", icoon: "icons/Parel.png", map: "Biologie", 
        quote: `The world is your oyster. It's up to you to find the pearls
        <br><br>- Chris Gardner`
      }
    ]
  },
  {
    input: [
      ["Tweekleppigen", "Bacteriën"], ["Tweekleppigen", "Leca"], ["Tweekleppigen", "Amoeben"], 
      ["Tweekleppigen", "Foraminiferen"], ["Tweekleppigen", "Stralendiertjes"], ["Tweekleppigen", "Beerdiertjes"], 
      ["Tweekleppigen", "Krill"]
    ],
    output: [
      { naam: "Tweekleppigen", icoon: "icons/Tweekleppigen.png", map: "Waterdieren", 
        quote: `Every life deserves a certain amount of dignity, no matter how poor or damaged the shell
        that carries it
        <br><br>- Rick Bragg`
      },
      { naam: "Glucose", icoon: "icons/Glucose.png", map: "Biologie",
       quote: `No matter how closely you examine the water, glucose, and electrolyte salts in the human brain, you can't 
       find the point where these molecules became conscious
       <br><br>- Nassim Taleb`
      },
      { naam: "Vreugde", icoon: "icons/Vreugde.png", map: "Brein", 
        quote: `Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy
        <br><br>- Nhat Hanh`
      }
    ]
  },
  {
    input: [
      ["Trilobieten", "Bacteriën"], ["Trilobieten", "Blauwalgen"], ["Trilobieten", "Leca"], 
      ["Trilobieten", "Amoeben"], ["Trilobieten", "Foraminiferen"], ["Trilobieten", "Stralendiertjes"], 
      ["Trilobieten", "Wormen"], ["Trilobieten", "Beerdiertjes"], ["Trilobieten", "Krill"]
    ],
    output: [
      { naam: "Trilobieten", icoon: "icons/Trilobieten.png", map: "Geleedpotigen", 
        quote: `The eye of the trilobite tells us that the sun shone on the old beach where he lived; for there is 
        nothing in nature without a purpose, and when so complicated an organ was made to receive the light, there must 
        have been light to enter it 
        <br><br>- Louis Agassiz`
      },
      { naam: "Glucose", icoon: "icons/Glucose.png", map: "Biologie",
       quote: `No matter how closely you examine the water, glucose, and electrolyte salts in the human brain, you can't 
       find the point where these molecules became conscious
       <br><br>- Nassim Taleb`
      },
      { naam: "Vreugde", icoon: "icons/Vreugde.png", map: "Brein", 
        quote: `Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy
        <br><br>- Nhat Hanh`
      }
    ]
  },
  {
    input: [
      ["Oercheliceraten", "Bacteriën"], ["Oercheliceraten", "Blauwalgen"], ["Oercheliceraten", "Leca"], 
      ["Oercheliceraten", "Amoeben"], ["Oercheliceraten", "Foraminiferen"], ["Oercheliceraten", "Stralendiertjes"], 
      ["Oercheliceraten", "Wormen"], ["Oercheliceraten", "Beerdiertjes"], ["Oercheliceraten", "Krill"]
    ],
    output: [
      { naam: "Oercheliceraten", icoon: "icons/Oercheliceraten.png", map: "Geleedpotigen", 
        quote: `The seas of the Cambrian were a theatre of evolutionary invention, 
        where arthropods in particular explored a bewildering variety of forms
        <br><br>- Richard Fortey`
      },
      { naam: "Glucose", icoon: "icons/Glucose.png", map: "Biologie",
       quote: `No matter how closely you examine the water, glucose, and electrolyte salts in the human brain, you can't 
       find the point where these molecules became conscious
       <br><br>- Nassim Taleb`
      },
      { naam: "Vreugde", icoon: "icons/Vreugde.png", map: "Brein", 
        quote: `Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy
        <br><br>- Nhat Hanh`
      }
    ]
  },
  {
    input: ["Oercheliceraten", "Evolutie"],
    hint: `Cheliceraten laten zien hoeveel schorpioenen en spinnen eigenlijk gemeen hebben.`,
    output: [
      { naam: "Krill", icoon: "icons/Krill.png", map: "Geleedpotigen", 
        quote: `Tiny creatures such as krill form the living foundation of ocean life
        <br><br>- Sylvia Earle`
      },
      { naam: "Zwaardstaarten", icoon: "icons/Zwaardstaarten.png", map: "Geleedpotigen",
        quote: `The horseshoe crab is a reminder that survival does not always require change
        <br><br>- Stephen Gould`
      },
      { naam: "Schorpioenen", icoon: "icons/Schorpioenen.png", map: "Geleedpotigen", 
        quote: `Scorpions are among the most ancient of terrestrial arthropods, 
        their basic body plan little changed for hundreds of millions of years
        <br><br>- Gary Polis`
      },
      { naam: "Spinnen", icoon: "icons/Spinnen.png", map: "Geleedpotigen", 
        quote: `The next time you see a spider web, please, pause and look a little closer.
        You'll be seeing one of the most high-performance materials known to man 
        <br><br>- Cheryl Hayashi`
      }
    ]
  },
  {
    input: ["Duizendpoten", "Zenuwen"],
    output: [
      { naam: "Tast", icoon: "icons/Tast.png", map: "Brein", 
        quote: `Too often we underestimate the power of touch 
        <br><br>- Leo Buscaglia`
      },
      { naam: "Geur", icoon: "icons/Geur.png", map: "Brein", 
        quote: `Smell is a potent wizard that transports you across thousands of miles and all the years you have lived 
        <br><br>- Helen Keller`
      },
      { naam: "Pijn", icoon: "icons/Pijn.png", map: "Brein",
        quote: `Pain is inevitable. Suffering is optional
        <br><br>- Haruki Murakami`
      },
      { naam: "Brein", icoon: "icons/Brein.png", map: "Brein", 
        quote: `The great events of the world take place in the brain 
        <br><br>- Oscar Wilde`
      },
      { naam: "Smaak", icoon: "icons/Smaak.png", map: "Brein",
        quote: `Eat bitter, taste sweet
        <br><br>- Rick Riordon`
      }
    ]
  },
  {
    input: [
      ["Duizendpoten", "Wormen"], ["Duizendpoten", "Oertrochozoa"], ["Duizendpoten", "Oergeleedpotigen"], 
      ["Duizendpoten", "Beerdiertjes"], ["Duizendpoten", "Oercheliceraten"], ["Duizendpoten", "Oerkreeftjes"],
      ["Duizendpoten", "Oerinsecten"], ["Duizendpoten", "Garnalen"]
    ],
    output: [
      { naam: "Duizendpoten", icoon: "icons/Duizendpoten.png", map: "Geleedpotigen", 
        quote: `The centipede has rhythm and flow in its hundred legs precisely because it does not have to think
        about it
        <br><br>- Robert Genn`
      },
      { naam: "Gif", icoon: "icons/Gif.png", map: "Biologie",
       quote: `All things are poisons, for there is nothing without poisonous qualities. It is only the dose which 
       makes a thing poison
       <br><br>- Paracelsus`
      },
      { naam: "Glucose", icoon: "icons/Glucose.png", map: "Biologie",
       quote: `No matter how closely you examine the water, glucose, and electrolyte salts in the human brain, you can't 
       find the point where these molecules became conscious
       <br><br>- Nassim Taleb`
      },
      { naam: "Vreugde", icoon: "icons/Vreugde.png", map: "Brein", 
        quote: `Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy
        <br><br>- Nhat Hanh`
      }
    ]
  },
  {
    input: [
      ["Oerkreeftjes", "Bacteriën"], ["Oerkreeftjes", "Blauwalgen"], ["Oerkreeftjes", "Leca"], ["Oerkreeftjes", "Amoeben"], 
      ["Oerkreeftjes", "Foraminiferen"], ["Oerkreeftjes", "Stralendiertjes"], ["Oerkreeftjes", "Wormen"], 
      ["Oerkreeftjes", "Oertrochozoa"], ["Oerkreeftjes", "Manteldieren"], ["Oerkreeftjes", "Beerdiertjes"], 
      ["Oerkreeftjes", "Trilobieten"], ["Oerkreeftjes", "Zwaardstaarten"], ["Oerkreeftjes", "Krill"],
      ["Oerkreeftjes", "Garnalen"]
    ],
    output: [
      { naam: "Oerkreeftjes", icoon: "icons/Oerkreeftjes.png", map: "Geleedpotigen", 
        quote: `Crustaceans represent one of the most diverse and ecologically important groups of animals in the sea
        <br><br>- Martin Thiel`
      },
      { naam: "Glucose", icoon: "icons/Glucose.png", map: "Biologie",
       quote: `No matter how closely you examine the water, glucose, and electrolyte salts in the human brain, you can't 
       find the point where these molecules became conscious
       <br><br>- Nassim Taleb`
      },
      { naam: "Vreugde", icoon: "icons/Vreugde.png", map: "Brein", 
        quote: `Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy
        <br><br>- Nhat Hanh`
      }
    ]
  },
  {
    input: ["Oerkreeftjes", "Tweekleppigen"],
    output: [
      { naam: "Oerkreeftjes", icoon: "icons/Oerkreeftjes.png", map: "Geleedpotigen", 
        quote: `Crustaceans represent one of the most diverse and ecologically important groups of animals in the sea
        <br><br>- Martin Thiel`
      },
      { naam: "Glucose", icoon: "icons/Glucose.png", map: "Biologie",
       quote: `No matter how closely you examine the water, glucose, and electrolyte salts in the human brain, you can't 
       find the point where these molecules became conscious
       <br><br>- Nassim Taleb`
      },
      { naam: "Vreugde", icoon: "icons/Vreugde.png", map: "Brein", 
        quote: `Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy
        <br><br>- Nhat Hanh`
      },
      { naam: "Schelp", icoon: "icons/Schelp.png", map: "Biologie", 
        quote: `I see a broken shell and I remind myself that something might have needed setting free 
        <br><br>- Sara Pennypacker`
      }
    ]
  },
  {
    input: [
      ["Oerinsecten", "Bacteriën"], ["Oerinsecten", "Blauwalgen"], ["Oerinsecten", "Leca"], ["Oerinsecten", "Amoeben"], 
      ["Oerinsecten", "Foraminiferen"], ["Oerinsecten", "Stralendiertjes"], ["Oerinsecten", "Wormen"], 
      ["Oerinsecten", "Oergeleedpotigen"], ["Oerinsecten", "Beerdiertjes"]
    ],
    output: [
      { naam: "Oerinsecten", icoon: "icons/Oerinsecten.png", map: "Geleedpotigen", 
        quote: `An insect is more complex than a star.. and is a far greater challenge to understand
        <br><br>- Martin Rees`
      },
      { naam: "Glucose", icoon: "icons/Glucose.png", map: "Biologie",
       quote: `No matter how closely you examine the water, glucose, and electrolyte salts in the human brain, you can't 
       find the point where these molecules became conscious
       <br><br>- Nassim Taleb`
      },
      { naam: "Vreugde", icoon: "icons/Vreugde.png", map: "Brein", 
        quote: `Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy
        <br><br>- Nhat Hanh`
      }
    ]
  },
  {
    input: [
      ["Nautilussen", "Kwallen"], ["Nautilussen", "Bloemdieren"], ["Nautilussen", "Wormen"], 
      ["Nautilussen", "Oertrochozoa"], ["Nautilussen", "Lancetvisjes"], ["Nautilussen", "Agnathen"], 
      ["Nautilussen", "Oergeleedpotigen"], ["Nautilussen", "Manteldieren"], ["Nautilussen", "Oerkreeftjes"],
      ["Nautilussen", "Krill"], ["Nautilussen", "Garnalen"], ["Nautilussen", "Kreeften"], ["Nautilussen", "Krabben"]
    ],
    output: [
      { naam: "Nautilussen", icoon: "icons/Nautilussen.png", map: "Waterdieren", 
        quote: `You don't have to bee Greek to enjoy this one
        <br><br>- Jeff Smith`
      },
      { naam: "Glucose", icoon: "icons/Glucose.png", map: "Biologie",
       quote: `No matter how closely you examine the water, glucose, and electrolyte salts in the human brain, you can't 
       find the point where these molecules became conscious
       <br><br>- Nassim Taleb`
      },
      { naam: "Vreugde", icoon: "icons/Vreugde.png", map: "Brein", 
        quote: `Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy
        <br><br>- Nhat Hanh`
      }
    ]
  },
  {
    input: ["Nautilussen", "Tweekleppigen"],
    output: [
      { naam: "Nautilussen", icoon: "icons/Nautilussen.png", map: "Waterdieren", 
        quote: `You don't have to bee Greek to enjoy this one
        <br><br>- Jeff Smith`
      },
      { naam: "Glucose", icoon: "icons/Glucose.png", map: "Biologie",
       quote: `No matter how closely you examine the water, glucose, and electrolyte salts in the human brain, you can't 
       find the point where these molecules became conscious
       <br><br>- Nassim Taleb`
      },
      { naam: "Vreugde", icoon: "icons/Vreugde.png", map: "Brein", 
        quote: `Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy
        <br><br>- Nhat Hanh`
      },
      { naam: "Schelp", icoon: "icons/Schelp.png", map: "Biologie", 
        quote: `I see a broken shell and I remind myself that something might have needed setting free 
        <br><br>- Sara Pennypacker`
      }
    ]
  },
  {
    input: [
      ["Schorpioenen", "Wormen"], ["Schorpioenen", "Oertrochozoa"], ["Schorpioenen", "Oergeleedpotigen"], 
      ["Schorpioenen", "Beerdiertjes"], ["Schorpioenen", "Oercheliceraten"], ["Schorpioenen", "Duizendpoten"],
      ["Schorpioenen", "Oerkreeftjes"], ["Schorpioenen", "Oerinsecten"], ["Schorpioenen", "Spinnen"],
      ["Schorpioenen", "Garnalen"]
    ],
    hint: `Het is evolutionair handig als prooien meteen verlamd worden door giftige stofjes.`,
    output: [
      { naam: "Schorpioenen", icoon: "icons/Schorpioenen.png", map: "Geleedpotigen", 
        quote: `Scorpions are among the most ancient of terrestrial arthropods, 
        their basic body plan little changed for hundreds of millions of years
        <br><br>- Gary Polis`
      },
      { naam: "Gif", icoon: "icons/Gif.png", map: "Biologie",
       quote: `All things are poisons, for there is nothing without poisonous qualities. It is only the dose which 
       makes a thing poison
       <br><br>- Paracelsus`
      },
      { naam: "Glucose", icoon: "icons/Glucose.png", map: "Biologie",
       quote: `No matter how closely you examine the water, glucose, and electrolyte salts in the human brain, you can't 
       find the point where these molecules became conscious
       <br><br>- Nassim Taleb`
      },
      { naam: "Vreugde", icoon: "icons/Vreugde.png", map: "Brein", 
        quote: `Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy
        <br><br>- Nhat Hanh`
      }
    ]
  },
  {
    input: [
      ["Spinnen", "Oergeleedpotigen"], ["Spinnen", "Beerdiertjes"], ["Spinnen", "Oercheliceraten"], 
      ["Spinnen", "Duizendpoten"], ["Spinnen", "Oerkreeftjes"], ["Spinnen", "Oerinsecten"], ["Spinnen", "Garnalen"]
    ],
    output: [
      { naam: "Spinnen", icoon: "icons/Spinnen.png", map: "Geleedpotigen", 
        quote: `The next time you see a spider web, please, pause and look a little closer.
        You'll be seeing one of the most high-performance materials known to man 
        <br><br>- Cheryl Hayashi`
      },
      { naam: "Gif", icoon: "icons/Gif.png", map: "Biologie",
       quote: `All things are poisons, for there is nothing without poisonous qualities. It is only the dose which 
       makes a thing poison
       <br><br>- Paracelsus`
      },
      { naam: "Glucose", icoon: "icons/Glucose.png", map: "Biologie",
       quote: `No matter how closely you examine the water, glucose, and electrolyte salts in the human brain, you can't 
       find the point where these molecules became conscious
       <br><br>- Nassim Taleb`
      },
      { naam: "Vreugde", icoon: "icons/Vreugde.png", map: "Brein", 
        quote: `Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy
        <br><br>- Nhat Hanh`
      }
    ]
  },
  {
    input: ["Spinnen", "Glucose"],
    hint: `Geef de spin wat ze nodig heeft en ze maakt er iets moois van.`,
    output: [
      { naam: "Zijde", icoon: "icons/Zijde.png", map: "Biologie", 
        quote: `Silk does for the body what diamonds do for the hand
        <br><br>- Oscar de la Renta`
      }
    ]
  },
  {
    input: [
      ["Zwaardstaarten", "Bacteriën"], ["Zwaardstaarten", "Blauwalgen"], ["Zwaardstaarten", "Leca"], 
      ["Zwaardstaarten", "Amoeben"], ["Zwaardstaarten", "Foraminiferen"], ["Zwaardstaarten", "Stralendiertjes"],
      ["Zwaardstaarten", "Wormen"], ["Zwaardstaarten", "Beerdiertjes"], ["Zwaardstaarten", "Krill"],
      ["Zwaardstaarten", "Garnalen"]
    ],
    output: [
      { naam: "Zwaardstaarten", icoon: "icons/Zwaardstaarten.png", map: "Geleedpotigen",
        quote: `The horseshoe crab is a reminder that survival does not always require change
        <br><br>- Stephen Gould`
      },
      { naam: "Glucose", icoon: "icons/Glucose.png", map: "Biologie",
       quote: `No matter how closely you examine the water, glucose, and electrolyte salts in the human brain, you can't 
       find the point where these molecules became conscious
       <br><br>- Nassim Taleb`
      },
      { naam: "Vreugde", icoon: "icons/Vreugde.png", map: "Brein", 
        quote: `Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy
        <br><br>- Nhat Hanh`
      }
    ]
  },
  {
    input: [
      ["Krill", "Bacteriën"], ["Krill", "Blauwalgen"], ["Krill", "Leca"], ["Krill", "Amoeben"], 
      ["Krill", "Foraminiferen"], ["Krill", "Stralendiertjes"], ["Krill", "Groene algen"], ["Krill", "Groenwieren"],
      ["Krill", "Beerdiertjes"]
    ],
    output: [
      { naam: "Krill", icoon: "icons/Krill.png", map: "Geleedpotigen", 
        quote: `Tiny creatures such as krill form the living foundation of ocean life
        <br><br>- Sylvia Earle`
      },
      { naam: "Glucose", icoon: "icons/Glucose.png", map: "Biologie",
       quote: `No matter how closely you examine the water, glucose, and electrolyte salts in the human brain, you can't 
       find the point where these molecules became conscious
       <br><br>- Nassim Taleb`
      },
      { naam: "Vreugde", icoon: "icons/Vreugde.png", map: "Brein", 
        quote: `Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy
        <br><br>- Nhat Hanh`
      }
    ]
  },
//------------ THRESHOLD 4: SILUUR --------------//
  {
    input: ["Wortels", "Steenwortelalgen"],
    hint: `Het is tijd voor planten en geleedpotigen om het land te verkennen...`,
    tijd: 444_000_000,
    output: [
      { naam: "Oervaatplanten", icoon: "icons/Oervaatplanten.png", map: "Planten", 
        quote: `Nature is painting for us, day after day, pictures of infinite beauty
        <br><br>- John Ruskin`
      }
    ],
    uitleg: {
      threshold: {
        titel: "Siluur", 
        tekst: "Je moet eerst nog wat meer halen...",
        requirements: ["Schorpioenen", "Nautilussen", "Druk", "Tast", "Licht", "Geur", "Pijn", "Brein",
          "Oog", "Smaak", "Kleur", "Tand", "Mos"]
      },
      normal: {
        titel: "Siluur",
        tekst: `Tijd om het land te verkennen...`,
      }
    }
  },
  {
    input: ["Schimmel", "Evolutie"],
    hint: `Schimmel heeft nog zo veel potentie...`,
    output: [
      { naam: "Korstmos", icoon: "icons/Korstmos.png", map: "Pril leven", 
        quote: `Fermentation is the exhalation of a substance through the admixture of a ferment which,
        by virtue of its spirit, penetrates the mass and transforms it into its own nature
        <br><br>- Andreas Libavius`
      },
      { naam: "Truffels", icoon: "icons/Truffels.png", map: "Vruchten",
        quote: `All fungi are edible. Some fungi are only edible once
        <br><br>- Terry Pratchett`
      },
      { naam: "Paddenstoelen", icoon: "icons/Paddenstoelen.png", map: "Vruchten",
        quote: `Nature alone is antique, and the oldest art a mushroom
        <br><br>- Thomas Carlyle`
      }
    ],
    uitleg: {
      thresholdElement: {
        naam: "Oervaatplanten", 
        titel: "Probeer opnieuw in het Siluur",
        tekst: `Eerst moeten de oervaatplanten en geleedpotigen het land verkennen, voordat deze evolutionaire stap
        gezet kan worden.`
      }
    }
  },
  {
    input: ["Tand", "Agnathen"],
    hint: `Grote vissen zouden het goed doen met tanden.`,
    tijd: 400_000_000,
    output: [
      { naam: "Oerstraalvinnigen", icoon: "icons/Oerstraalvinnigen.png", map: "Vissen", 
        quote: `In order to see a fish you must watch the water
        <br><br>- Bodhidharma`
      },
      { naam: "Oerchondrichthyes", icoon: "icons/Oerchondrichthyes.png", map: "Vissen",
        quote: `Fishes live in the sea, as men do a-land; the great ones eat up the little ones
        <br><br>- William Shakespeare`
      },
      { naam: "Coelacanthen", icoon: "icons/Coelacanthen.png", map: "Vissen",
        quote: `Ideas are like fish. If you want to catch little fish, you can stay in the shallow water.
        But if you want to catch the big fish, you've got to go deeper. Down deep, the fish are more powerful and
        more pure
        <br><br>- David Lynch`
      },
      { naam: "Longvissen", icoon: "icons/Longvissen.png", map: "Vissen",
        quote: `Our lungs are best when we don't realize they are helping us breathe
        <br><br>- Lao Tzu`
      }
    ],
    uitleg: {
      thresholdElement: {
        naam: "Oervaatplanten", 
        titel: "Probeer opnieuw in het Siluur",
        tekst: `Eerst moeten de oervaatplanten en geleedpotigen het land verkennen, voordat deze evolutionaire stap
        gezet kan worden.`
      }
    }
  },
  {
    input: ["Oerkreeftjes", "Evolutie"],
    hint: `Uit de eerste kreeftachtige verschijnen een hoop herkenbare soorten.`,
    output: [
      { naam: "Pissebedden", icoon: "icons/Pissebedden.png", map: "Geleedpotigen", 
        quote: `Everything from the humble woodlouse to specks of dust moving through a ray of sunlight.
        Each tells a story
        <br><br>- Fennel Hudson`
      },
      { naam: "Garnalen", icoon: "icons/Garnalen.png", map: "Geleedpotigen",
        quote: `Shrimps are among the most adaptable of crustaceans, occupying habitats from coral reefs to the deep sea
        <br><br>- Raymond Bauer`
      },
      { naam: "Kreeften", icoon: "icons/Kreeften.png", map: "Geleedpotigen",
        quote: `Lobsters are among the most ancient designs in the sea, animals whose basic form has persisted for
        millions of years
        <br><br>- Trevor Corson`
      },
      { naam: "Krabben", icoon: "icons/Krabben.png", map: "Geleedpotigen",
        quote: `You cannot teach a crab to walk straight
        <br><br>- Aristophanes`
      }
    ],
    uitleg: {
      thresholdElement: {
        naam: "Oervaatplanten", 
        titel: "Probeer opnieuw in het Siluur",
        tekst: `Eerst moeten de oervaatplanten en geleedpotigen het land verkennen, voordat deze evolutionaire stap
        gezet kan worden.`
      }
    }
  },
  {
    input: [
      ["Oervaatplanten", "Ven"], ["Varens", "Ven"]
    ],
    hint: `Een broeinest voor leven is dichte begroeiing en laag stilstaand water.`,
    output: [
      { naam: "Moeras", icoon: "icons/Moeras.png", map: "Landschap", 
        quote: `Nature is a tropical swamp in sunshine, on whose purlieus we hear the song of summer birds,
        and see prismatic dewdrops, - but her interiors are terrific, full of hydras and crocodiles
        <br><br>- Ralph Emerson`
      }
    ]
  },
  {
    input: ["Oervaatplanten", "Evolutie"],
    hint: `Sommige planten zouden er goed aan doen met grote opperlvaktes meer zonlicht te pakken.`,
    output: [
      { naam: "Blad", icoon: "icons/Blad.png", map: "Biologie", 
        quote: `How beautiful the leaves grow old. How full of light and colour are their last days
        <br><br>- John Burroughs`
      }
    ]
  },
  {
    input: ["Oerchondrichthyes", "Evolutie"],
    hint: `We moeten nog iets met chondrichthyes, oftewel kraakbeenvissen...`,
    tijd: 415_000_000,
    output: [
      { naam: "Haaien", icoon: "icons/Haaien.png", map: "Vissen", 
        quote: `Sharks are beautiful animals, and if you're lucky enough to see lots of them, that means that you're
        in a healthy ocean. You should be afraid if you are in the ocean and don't see sharks
        <br><br>- Sylvia Earle`
      },
      { naam: "Holocefalen", icoon: "icons/Holocefalen.png", map: "Vissen", 
        quote: `Chimaeras are among the strangest of living fishes, with features unlike those of any other group
        <br><br>- Peter Last`
      }
    ]
  },
  {
    input: [
      ["Oerchondrichthyes", "Zenuwen"], ["Haaien", "Zenuwen"], ["Holocefalen", "Zenuwen"]
    ],
    hint: `Probeer de zenuwen nog eens, volgens mij hoor ik iets...`,
    output: [
      { naam: "Tast", icoon: "icons/Tast.png", map: "Brein", 
        quote: `Too often we underestimate the power of touch 
        <br><br>- Leo Buscaglia`
      },
      { naam: "Geur", icoon: "icons/Geur.png", map: "Brein", 
        quote: `Smell is a potent wizard that transports you across thousands of miles and all the years you have lived 
        <br><br>- Helen Keller`
      },
      { naam: "Pijn", icoon: "icons/Pijn.png", map: "Brein",
        quote: `Pain is inevitable. Suffering is optional
        <br><br>- Haruki Murakami`
      },
      { naam: "Brein", icoon: "icons/Brein.png", map: "Brein", 
        quote: `The great events of the world take place in the brain 
        <br><br>- Oscar Wilde`
      },
      { naam: "Oog", icoon: "icons/Oog.png", map: "Biologie", 
        quote: `Eye contact is way more intimate than words will ever be 
        <br><br>- Faraaz Kazi`
      },
      { naam: "Smaak", icoon: "icons/Smaak.png", map: "Brein",
        quote: `Eat bitter, taste sweet
        <br><br>- Rick Riordon`
      },
      { naam: "Geluid", icoon: "icons/Geluid.png", map: "Brein",
        quote: `Everything in the world has a spirit which is released by its sound
        <br><br>- Oskar Fischinger`
      }
    ]
  },
  {
    input: [
      ["Oerchondrichthyes", "Wormen"], ["Oerchondrichthyes", "Oertrochozoa"], ["Oerchondrichthyes", "Lancetvisjes"], 
      ["Oerchondrichthyes", "Agnathen"], ["Oerchondrichthyes", "Oergeleedpotigen"], ["Oerchondrichthyes", "Manteldieren"], 
      ["Oerchondrichthyes", "Trilobieten"], ["Oerchondrichthyes", "Oerkreeftjes"], ["Oerchondrichthyes", "Zwaardstaarten"], 
      ["Oerchondrichthyes", "Krill"], ["Oerchondrichthyes", "Garnalen"]
    ],
    output: [
      { naam: "Oerchondrichthyes", icoon: "icons/Oerchondrichthyes.png", map: "Vissen",
        quote: `Fishes live in the sea, as men do a-land; the great ones eat up the little ones
        <br><br>- William Shakespeare`
      },
      { naam: "Glucose", icoon: "icons/Glucose.png", map: "Biologie",
       quote: `No matter how closely you examine the water, glucose, and electrolyte salts in the human brain, you can't 
       find the point where these molecules became conscious
       <br><br>- Nassim Taleb`
      },
      { naam: "Vreugde", icoon: "icons/Vreugde.png", map: "Brein", 
        quote: `Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy
        <br><br>- Nhat Hanh`
      }
    ]
  },
  {
    input: ["Oerchondrichthyes", "Tweekleppigen"],
    output: [
      { naam: "Oerchondrichthyes", icoon: "icons/Oerchondrichthyes.png", map: "Vissen",
        quote: `Fishes live in the sea, as men do a-land; the great ones eat up the little ones
        <br><br>- William Shakespeare`
      },
      { naam: "Glucose", icoon: "icons/Glucose.png", map: "Biologie",
       quote: `No matter how closely you examine the water, glucose, and electrolyte salts in the human brain, you can't 
       find the point where these molecules became conscious
       <br><br>- Nassim Taleb`
      },
      { naam: "Vreugde", icoon: "icons/Vreugde.png", map: "Brein", 
        quote: `Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy
        <br><br>- Nhat Hanh`
      },
      { naam: "Schelp", icoon: "icons/Schelp.png", map: "Biologie", 
        quote: `I see a broken shell and I remind myself that something might have needed setting free 
        <br><br>- Sara Pennypacker`
      }
    ]
  },
  {
    input: [
      ["Oerstraalvinnigen", "Zenuwen"], ["Coelacanthen", "Zenuwen"], ["Longvissen", "Zenuwen"], 
      ["Oerchondrostei", "Zenuwen"], ["Oercladistia", "Zenuwen"], ["Oerneopterygen", "Zenuwen"]
    ],
    hint: `Probeer de zenuwen nog eens, volgens mij hoor ik iets...`,
    output: [
      { naam: "Tast", icoon: "icons/Tast.png", map: "Brein", 
        quote: `Too often we underestimate the power of touch 
        <br><br>- Leo Buscaglia`
      },
      { naam: "Geur", icoon: "icons/Geur.png", map: "Brein", 
        quote: `Smell is a potent wizard that transports you across thousands of miles and all the years you have lived 
        <br><br>- Helen Keller`
      },
      { naam: "Pijn", icoon: "icons/Pijn.png", map: "Brein",
        quote: `Pain is inevitable. Suffering is optional
        <br><br>- Haruki Murakami`
      },
      { naam: "Brein", icoon: "icons/Brein.png", map: "Brein", 
        quote: `The great events of the world take place in the brain 
        <br><br>- Oscar Wilde`
      },
      { naam: "Oog", icoon: "icons/Oog.png", map: "Biologie", 
        quote: `Eye contact is way more intimate than words will ever be 
        <br><br>- Faraaz Kazi`
      },
      { naam: "Smaak", icoon: "icons/Smaak.png", map: "Brein",
        quote: `Eat bitter, taste sweet
        <br><br>- Rick Riordon`
      },
      { naam: "Kleur", icoon: "icons/Kleur.png", map: "Brein",
        quote: `Colour in a picture is like enthusiasm in life
        <br><br>- Vincent van Gogh`
      },
      { naam: "Geluid", icoon: "icons/Geluid.png", map: "Brein",
        quote: `Everything in the world has a spirit which is released by its sound
        <br><br>- Oskar Fischinger`
      }
    ]
  },
  {
    input: [
      ["Oerstraalvinnigen", "Wormen"], ["Oerstraalvinnigen", "Oertrochozoa"], ["Oerstraalvinnigen", "Agnathen"], 
      ["Oerstraalvinnigen", "Oergeleedpotigen"], ["Oerstraalvinnigen", "Manteldieren"], 
      ["Oerstraalvinnigen", "Beerdiertjes"], ["Oerstraalvinnigen", "Trilobieten"], ["Oerstraalvinnigen", "Oerkreeftjes"],
      ["Oerstraalvinnigen", "Krill"], ["Oerstraalvinnigen", "Pissebedden"], ["Oerstraalvinnigen", "Garnalen"]
    ],
    output: [
      { naam: "Oerstraalvinnigen", icoon: "icons/Oerstraalvinnigen.png", map: "Vissen", 
        quote: `In order to see a fish you must watch the water
        <br><br>- Bodhidharma`
      },
      { naam: "Glucose", icoon: "icons/Glucose.png", map: "Biologie",
       quote: `No matter how closely you examine the water, glucose, and electrolyte salts in the human brain, you can't 
       find the point where these molecules became conscious
       <br><br>- Nassim Taleb`
      },
      { naam: "Vreugde", icoon: "icons/Vreugde.png", map: "Brein", 
        quote: `Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy
        <br><br>- Nhat Hanh`
      }
    ]
  },
  {
    input: ["Oerstraalvinnigen", "Tweekleppigen"],
    output: [
      { naam: "Oerstraalvinnigen", icoon: "icons/Oerstraalvinnigen.png", map: "Vissen", 
        quote: `In order to see a fish you must watch the water
        <br><br>- Bodhidharma`
      },
      { naam: "Glucose", icoon: "icons/Glucose.png", map: "Biologie",
       quote: `No matter how closely you examine the water, glucose, and electrolyte salts in the human brain, you can't 
       find the point where these molecules became conscious
       <br><br>- Nassim Taleb`
      },
      { naam: "Vreugde", icoon: "icons/Vreugde.png", map: "Brein", 
        quote: `Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy
        <br><br>- Nhat Hanh`
      },
      { naam: "Schelp", icoon: "icons/Schelp.png", map: "Biologie", 
        quote: `I see a broken shell and I remind myself that something might have needed setting free 
        <br><br>- Sara Pennypacker`
      }
    ]
  },
  {
    input: [
      ["Coelacanthen", "Wormen"], ["Coelacanthen", "Oertrochozoa"], ["Coelacanthen", "Lancetvisjes"], 
      ["Coelacanthen", "Agnathen"], ["Coelacanthen", "Oergeleedpotigen"], ["Coelacanthen", "Manteldieren"], 
      ["Coelacanthen", "Beerdiertjes"], ["Coelacanthen", "Trilobieten"], ["Coelacanthen", "Oerkreeftjes"],
      ["Coelacanthen", "Krill"], ["Coelacanthen", "Garnalen"]
    ],
    output: [
      { naam: "Coelacanthen", icoon: "icons/Coelacanthen.png", map: "Vissen",
        quote: `Ideas are like fish. If you want to catch little fish, you can stay in the shallow water.
        But if you want to catch the big fish, you've got to go deeper. Down deep, the fish are more powerful and
        more pure
        <br><br>- David Lynch`
      },
      { naam: "Glucose", icoon: "icons/Glucose.png", map: "Biologie",
       quote: `No matter how closely you examine the water, glucose, and electrolyte salts in the human brain, you can't 
       find the point where these molecules became conscious
       <br><br>- Nassim Taleb`
      },
      { naam: "Vreugde", icoon: "icons/Vreugde.png", map: "Brein", 
        quote: `Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy
        <br><br>- Nhat Hanh`
      }
    ]
  },
  {
    input: ["Coelacanthen", "Tweekleppigen"],
    output: [
      { naam: "Coelacanthen", icoon: "icons/Coelacanthen.png", map: "Vissen",
        quote: `Ideas are like fish. If you want to catch little fish, you can stay in the shallow water.
        But if you want to catch the big fish, you've got to go deeper. Down deep, the fish are more powerful and
        more pure
        <br><br>- David Lynch`
      },
      { naam: "Glucose", icoon: "icons/Glucose.png", map: "Biologie",
       quote: `No matter how closely you examine the water, glucose, and electrolyte salts in the human brain, you can't 
       find the point where these molecules became conscious
       <br><br>- Nassim Taleb`
      },
      { naam: "Vreugde", icoon: "icons/Vreugde.png", map: "Brein", 
        quote: `Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy
        <br><br>- Nhat Hanh`
      },
      { naam: "Schelp", icoon: "icons/Schelp.png", map: "Biologie", 
        quote: `I see a broken shell and I remind myself that something might have needed setting free 
        <br><br>- Sara Pennypacker`
      }
    ]
  },
  {
    input: [
      ["Longvissen", "Wormen"], ["Longvissen", "Oertrochozoa"], ["Longvissen", "Oergeleedpotigen"],
      ["Longvissen", "Beerdiertjes"], ["Longvissen", "Oerkreeftjes"], ["Longvissen", "Oerinsecten"],
      ["Longvissen", "Zwaardstaarten"], ["Longvissen", "Krill"], ["Longvissen", "Pissebedden"], ["Longvissen", "Garnalen"]
    ],
    output: [
      { naam: "Longvissen", icoon: "icons/Longvissen.png", map: "Vissen",
        quote: `Our lungs are best when we don't realize they are helping us breathe
        <br><br>- Lao Tzu`
      },
      { naam: "Glucose", icoon: "icons/Glucose.png", map: "Biologie",
       quote: `No matter how closely you examine the water, glucose, and electrolyte salts in the human brain, you can't 
       find the point where these molecules became conscious
       <br><br>- Nassim Taleb`
      },
      { naam: "Vreugde", icoon: "icons/Vreugde.png", map: "Brein", 
        quote: `Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy
        <br><br>- Nhat Hanh`
      }
    ]
  },
  {
    input: [
      ["Pissebedden", "Bacteriën"], ["Pissebedden", "Schimmel"], ["Pissebedden", "Paddenstoelen"]
    ],
    output: [
      { naam: "Pissebedden", icoon: "icons/Pissebedden.png", map: "Geleedpotigen", 
        quote: `Everything from the humble woodlouse to specks of dust moving through a ray of sunlight.
        Each tells a story
        <br><br>- Fennel Hudson`
      },
      { naam: "Glucose", icoon: "icons/Glucose.png", map: "Biologie",
       quote: `No matter how closely you examine the water, glucose, and electrolyte salts in the human brain, you can't 
       find the point where these molecules became conscious
       <br><br>- Nassim Taleb`
      },
      { naam: "Vreugde", icoon: "icons/Vreugde.png", map: "Brein", 
        quote: `Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy
        <br><br>- Nhat Hanh`
      }
    ]
  },
  {
    input: [
      ["Garnalen", "Bacteriën"], ["Garnalen", "Blauwalgen"], ["Garnalen", "Leca"], ["Garnalen", "Amoeben"],
      ["Garnalen", "Foraminiferen"], ["Garnalen", "Stralendiertjes"], ["Garnalen", "Wormen"], ["Garnalen", "Beerdiertjes"],
      ["Garnalen", "Krill"]
    ],
    output: [
      { naam: "Garnalen", icoon: "icons/Garnalen.png", map: "Geleedpotigen",
        quote: `Shrimps are among the most adaptable of crustaceans, occupying habitats from coral reefs to the deep sea
        <br><br>- Raymond Bauer`
      },
      { naam: "Glucose", icoon: "icons/Glucose.png", map: "Biologie",
       quote: `No matter how closely you examine the water, glucose, and electrolyte salts in the human brain, you can't 
       find the point where these molecules became conscious
       <br><br>- Nassim Taleb`
      },
      { naam: "Vreugde", icoon: "icons/Vreugde.png", map: "Brein", 
        quote: `Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy
        <br><br>- Nhat Hanh`
      }
    ]
  },
  {
    input: ["Garnalen", "Tweekleppigen"],
    output: [
      { naam: "Garnalen", icoon: "icons/Garnalen.png", map: "Geleedpotigen",
        quote: `Shrimps are among the most adaptable of crustaceans, occupying habitats from coral reefs to the deep sea
        <br><br>- Raymond Bauer`
      },
      { naam: "Glucose", icoon: "icons/Glucose.png", map: "Biologie",
       quote: `No matter how closely you examine the water, glucose, and electrolyte salts in the human brain, you can't 
       find the point where these molecules became conscious
       <br><br>- Nassim Taleb`
      },
      { naam: "Vreugde", icoon: "icons/Vreugde.png", map: "Brein", 
        quote: `Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy
        <br><br>- Nhat Hanh`
      },
      { naam: "Schelp", icoon: "icons/Schelp.png", map: "Biologie", 
        quote: `I see a broken shell and I remind myself that something might have needed setting free 
        <br><br>- Sara Pennypacker`
      }
    ]
  },
  {
    input: [
      ["Kreeften", "Bacteriën"], ["Kreeften", "Blauwalgen"], ["Kreeften", "Leca"], ["Kreeften", "Amoeben"],
      ["Kreeften", "Foraminiferen"], ["Kreeften", "Stralendiertjes"], ["Kreeften", "Wormen"], ["Kreeften", "Oertrochozoa"],
      ["Kreeften", "Lancetvisjes"], ["Kreeften", "Oergeleedpotigen"], ["Kreeften", "Beerdiertjes"], 
      ["Kreeften", "Oerkreeftjes"], ["Kreeften", "Oerinsecten"], ["Kreeften", "Zwaardstaarten"], ["Kreeften", "Krill"],
      ["Kreeften", "Pissebedden"], ["Kreeften", "Garnalen"], ["Kreeften", "Krabben"]
    ],
    output: [
      { naam: "Kreeften", icoon: "icons/Kreeften.png", map: "Geleedpotigen",
        quote: `Lobsters are among the most ancient designs in the sea, animals whose basic form has persisted for
        millions of years
        <br><br>- Trevor Corson`
      },
      { naam: "Glucose", icoon: "icons/Glucose.png", map: "Biologie",
       quote: `No matter how closely you examine the water, glucose, and electrolyte salts in the human brain, you can't 
       find the point where these molecules became conscious
       <br><br>- Nassim Taleb`
      },
      { naam: "Vreugde", icoon: "icons/Vreugde.png", map: "Brein", 
        quote: `Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy
        <br><br>- Nhat Hanh`
      }
    ]
  },
  {
    input: ["Kreeften", "Tweekleppigen"],
    output: [
      { naam: "Kreeften", icoon: "icons/Kreeften.png", map: "Geleedpotigen",
        quote: `Lobsters are among the most ancient designs in the sea, animals whose basic form has persisted for
        millions of years
        <br><br>- Trevor Corson`
      },
      { naam: "Glucose", icoon: "icons/Glucose.png", map: "Biologie",
       quote: `No matter how closely you examine the water, glucose, and electrolyte salts in the human brain, you can't 
       find the point where these molecules became conscious
       <br><br>- Nassim Taleb`
      },
      { naam: "Vreugde", icoon: "icons/Vreugde.png", map: "Brein", 
        quote: `Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy
        <br><br>- Nhat Hanh`
      },
      { naam: "Schelp", icoon: "icons/Schelp.png", map: "Biologie", 
        quote: `I see a broken shell and I remind myself that something might have needed setting free 
        <br><br>- Sara Pennypacker`
      }
    ]
  },
  {
    input: [
      ["Krabben", "Bacteriën"], ["Krabben", "Blauwalgen"], ["Krabben", "Leca"], ["Krabben", "Amoeben"],
      ["Krabben", "Foraminiferen"], ["Krabben", "Stralendiertjes"], ["Krabben", "Wormen"], ["Krabben", "Oergeleedpotigen"],
      ["Krabben", "Beerdiertjes"], ["Krabben", "Oerkreefjtjes"], ["Krabben", "Oerinsecten"], ["Krabben", "Zwaardstaarten"],
      ["Krabben", "Krill"], ["Krabben", "Pissebedden"], ["Krabben", "Garnalen"]
    ],
    output: [
      { naam: "Krabben", icoon: "icons/Krabben.png", map: "Geleedpotigen",
        quote: `You cannot teach a crab to walk straight
        <br><br>- Aristophanes`
      },
      { naam: "Glucose", icoon: "icons/Glucose.png", map: "Biologie",
       quote: `No matter how closely you examine the water, glucose, and electrolyte salts in the human brain, you can't 
       find the point where these molecules became conscious
       <br><br>- Nassim Taleb`
      },
      { naam: "Vreugde", icoon: "icons/Vreugde.png", map: "Brein", 
        quote: `Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy
        <br><br>- Nhat Hanh`
      }
    ]
  },
  {
    input: ["Krabben", "Tweekleppigen"],
    output: [
      { naam: "Krabben", icoon: "icons/Krabben.png", map: "Geleedpotigen",
        quote: `You cannot teach a crab to walk straight
        <br><br>- Aristophanes`
      },
      { naam: "Glucose", icoon: "icons/Glucose.png", map: "Biologie",
       quote: `No matter how closely you examine the water, glucose, and electrolyte salts in the human brain, you can't 
       find the point where these molecules became conscious
       <br><br>- Nassim Taleb`
      },
      { naam: "Vreugde", icoon: "icons/Vreugde.png", map: "Brein", 
        quote: `Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy
        <br><br>- Nhat Hanh`
      },
      { naam: "Schelp", icoon: "icons/Schelp.png", map: "Biologie", 
        quote: `I see a broken shell and I remind myself that something might have needed setting free 
        <br><br>- Sara Pennypacker`
      }
    ]
  },
  {
    input: [
      ["Haaien", "Kwallen"], ["Haaien", "Bloemdieren"], ["Haaien", "Wormen"], ["Haaien", "Oertrochozoa"],
      ["Haaien", "Lancetvisjes"], ["Haaien", "Agnathen"], ["Haaien", "Manteldieren"], ["Haaien", "Inktvissen"],
      ["Haaien", "Oerkreeftjes"], ["Haaien", "Zwaardstaarten"], ["Haaien", "Krill"], ["Haaien", "Oerchondrichthyes"],
      ["Haaien", "Oerstraalvinnigen"], ["Haaien", "Coelacanthen"], ["Haaien", "Longvissen"], ["Haaien", "Garnalen"], 
      ["Haaien", "Kreeften"], ["Haaien", "Krabben"], ["Haaien", "Holocefalen"]
    ],
    output: [
      { naam: "Haaien", icoon: "icons/Haaien.png", map: "Vissen", 
        quote: `Sharks are beautiful animals, and if you're lucky enough to see lots of them, that means that you're
        in a healthy ocean. You should be afraid if you are in the ocean and don't see sharks
        <br><br>- Sylvia Earle`
      },
      { naam: "Glucose", icoon: "icons/Glucose.png", map: "Biologie",
       quote: `No matter how closely you examine the water, glucose, and electrolyte salts in the human brain, you can't 
       find the point where these molecules became conscious
       <br><br>- Nassim Taleb`
      },
      { naam: "Vreugde", icoon: "icons/Vreugde.png", map: "Brein", 
        quote: `Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy
        <br><br>- Nhat Hanh`
      }
    ]
  },
  {
    input: ["Haaien", "Nautilussen"],
    output: [
      { naam: "Haaien", icoon: "icons/Haaien.png", map: "Vissen", 
        quote: `Sharks are beautiful animals, and if you're lucky enough to see lots of them, that means that you're
        in a healthy ocean. You should be afraid if you are in the ocean and don't see sharks
        <br><br>- Sylvia Earle`
      },
      { naam: "Glucose", icoon: "icons/Glucose.png", map: "Biologie",
       quote: `No matter how closely you examine the water, glucose, and electrolyte salts in the human brain, you can't 
       find the point where these molecules became conscious
       <br><br>- Nassim Taleb`
      },
      { naam: "Vreugde", icoon: "icons/Vreugde.png", map: "Brein", 
        quote: `Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy
        <br><br>- Nhat Hanh`
      },
      { naam: "Schelp", icoon: "icons/Schelp.png", map: "Biologie", 
        quote: `I see a broken shell and I remind myself that something might have needed setting free 
        <br><br>- Sara Pennypacker`
      }
    ]
  },
  {
    input: [
      ["Holocefalen", "Lancetvisjes"], ["Holocefalen", "Agnathen"], ["Holocefalen", "Inktvissen"],
      ["Holocefalen", "Oerkreeftjes"], ["Holocefalen", "Krill"], ["Holocefalen", "Oerstraalvinnigen"],
      ["Holocefalen", "Garnalen"], ["Holocefalen", "Kreeften"], ["Holocefalen", "Krabben"]
    ],
    output: [
      { naam: "Holocefalen", icoon: "icons/Holocefalen.png", map: "Vissen", 
        quote: `Chimaeras are among the strangest of living fishes, with features unlike those of any other group
        <br><br>- Peter Last`
      },
      { naam: "Glucose", icoon: "icons/Glucose.png", map: "Biologie",
       quote: `No matter how closely you examine the water, glucose, and electrolyte salts in the human brain, you can't 
       find the point where these molecules became conscious
       <br><br>- Nassim Taleb`
      },
      { naam: "Vreugde", icoon: "icons/Vreugde.png", map: "Brein", 
        quote: `Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy
        <br><br>- Nhat Hanh`
      }
    ]
  },
  {
    input: ["Holocefalen", "Tweekleppigen"],
    output: [
      { naam: "Holocefalen", icoon: "icons/Holocefalen.png", map: "Vissen", 
        quote: `Chimaeras are among the strangest of living fishes, with features unlike those of any other group
        <br><br>- Peter Last`
      },
      { naam: "Glucose", icoon: "icons/Glucose.png", map: "Biologie",
       quote: `No matter how closely you examine the water, glucose, and electrolyte salts in the human brain, you can't 
       find the point where these molecules became conscious
       <br><br>- Nassim Taleb`
      },
      { naam: "Vreugde", icoon: "icons/Vreugde.png", map: "Brein", 
        quote: `Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy
        <br><br>- Nhat Hanh`
      },
      { naam: "Schelp", icoon: "icons/Schelp.png", map: "Biologie", 
        quote: `I see a broken shell and I remind myself that something might have needed setting free 
        <br><br>- Sara Pennypacker`
      }
    ]
  },
  {
    input: ["Moeras", "Detritus"],
    hint: `Al dat dood organisch materiaal is nooit weg en kan ophopen in laag water.`,
    output: [
      { naam: "Veen", icoon: "icons/Veen.png", map: "Aarde", 
        quote: `Peatlands hold the carbon and stories of our past and are key to a livable future
        <br><br>- Catherine Fitzgerald`
      }
    ]
  },
  {
    input: ["Veen", "Druk"],
    hint: `Met vegetatie onder druk groeit brandstof als kool.`,
    output: [
      { naam: "Bruinkool", icoon: "icons/Bruinkool.png", map: "Aarde", 
        quote: `Even coal shimmers in the light
        <br><br>- Jocelyn Murray`
      }
    ]
  },
  {
    input: ["Blad", "Oervaatplanten"],
    hint: `Stengels vol water en bladeren vol energie - een gouden combinatie.`,
    tijd: 400_000_000,
    output: [
      { naam: "Varens", icoon: "icons/Varens.png", map: "Planten", 
        quote: `Only spread a fern-frond over a man's head and worldly cares are cast out, and freedom and
        beauty and peace come in
        <br><br>- John Muir`
      }
    ]
  },
  {
    input: ["Bruinkool", "Druk"],
    hint: `Kolen kunnen ook verstenen...`,
    output: [
      { naam: "Steenkool", icoon: "icons/Steenkool.png", map: "Aarde", 
        quote: `Without a whole lot of pressure, a diamond is just a piece of coal
        <br><br>- Miriam`
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
  "Geleedpotigen": "icons/Geleedpotigen.png",
  "Vruchten": "icons/Vruchten.png",
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
  let tooltip;

  el.addEventListener("mouseenter", () => {
    tooltip = document.createElement("div");
    tooltip.className = "tooltip-floating visible";
    tooltip.textContent = text;
    document.body.appendChild(tooltip);

    const rect = el.getBoundingClientRect();
    tooltip.style.left = rect.left + rect.width / 2 + "px";
    tooltip.style.top = rect.bottom + 6 + "px"; // marge onder icoon
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

  // 🔹 Check threshold-element dependency
  if (firstMatch.uitleg?.thresholdElement) {
    const needed = firstMatch.uitleg.thresholdElement.naam;
    if (!unlockedElements.has(needed)) {
      // toon overlay met titel + tekst van thresholdElement
      showThresholdExplanation(
        firstMatch.uitleg.thresholdElement,
        null, // geen missing circles
        () => {
          selected.forEach(e => e.dom.classList.remove("selected"));
          selected = [];
        }
      );
      return; // stop verder uitvoeren
    }
  }
  
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

  lastExplanation = finalUitleg ? { ...finalUitleg, thresholdRelated: !!firstMatch.uitleg?.threshold } : null;
  renderNewElements(newElements);
  newElements.forEach(el => unlockedElements.add(el.naam));

  // Update timeline op basis van combinatie-tijd
  const eventTime = firstMatch.tijd;
  
  if (eventTime !== undefined && eventTime < currentTime) {
    const clampedTime = Math.max(0, Math.min(maxTime, eventTime));
    animateTimeline(clampedTime);
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

function showNormalExplanationBeforeResult(explanation, newElements) {
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
  title.innerHTML = explanation.titel;

  const text = document.createElement("div");
  text.className = "explanation-text";
  text.innerHTML = explanation.tekst;

  const button = document.createElement("button");
  button.className = "create-button";
  button.textContent = "Ga verder";
  button.onclick = () => {
    overlay.remove();
    renderNewElements(newElements); // daarna pas het normale resultaat-scherm
  };

  box.appendChild(title);
  box.appendChild(text);
  box.appendChild(button);
  overlay.appendChild(box);
  document.body.appendChild(overlay);
}

// ----- VISUEEL SCHERM VOOR NIEUWE ELEMENTEN -----
function renderNewElements(elements) {

  if (!elements || elements.length === 0) return;

  if (lastExplanation && lastExplanation.thresholdRelated) {
    showNormalExplanationBeforeResult(lastExplanation, elements);
    return; 
  }
  
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

  grid.style.setProperty("--cols", cols);
  grid.style.justifyItems = "center";
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

    container.appendChild(img);
    
    // ✅ permanente tooltip op mobiel
    if (window.innerWidth <= 900 && window.matchMedia("(orientation: portrait)").matches) {
        const tooltip = document.createElement("div");
        tooltip.className = "tooltip";
        tooltip.textContent = map.naam;
        container.appendChild(tooltip);
    } else {
        attachTooltip(img, map.naam);
    }
    
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
  if (window.innerWidth <= 900 && window.matchMedia("(orientation: portrait)").matches) {
      const tooltip = document.createElement("div");
      tooltip.className = "tooltip";
      tooltip.textContent = map.naam;
      titleContainer.appendChild(tooltip);
  } else {
      attachTooltip(titleImg, map.naam);
  }
  titleContainer.appendChild(titleImg);
  parentContainer.appendChild(titleContainer);

  // --- Grid van elementen ---
  const grid = document.createElement("div");
  grid.className = "grid-elements";

  const totalElements = map.elementen.length;
  const isMobile = window.innerWidth <= 900 && window.innerHeight > window.innerWidth;

  // Layout instellen
  if (!isMobile) {
    if (totalElements >= 17 && totalElements <=25) {
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
      img.style.width   = totalElements > 25 ? "120px"
                        : totalElements > 16 ? "110px" 
                        : "130px";
      img.style.height  = totalElements > 25 ? "120px"
                        : totalElements > 16 ? "110px" 
                        : "130px";
    }

    img.onclick = () => toggleSelect(el, img, side, map.naam);

    // Tooltip per element
    if (window.innerWidth <= 900 && window.matchMedia("(orientation: portrait)").matches) {
        const tooltip = document.createElement("div");
        tooltip.className = "tooltip";
        tooltip.textContent = el.naam;
        elContainer.appendChild(tooltip);
    } else {
        attachTooltip(img, el.naam);
    }
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

    // -------- THRESHOLD-ELEMENT CHECK --------
    if (c.uitleg?.thresholdElement) {
      const needed = c.uitleg.thresholdElement.naam.trim().toLowerCase();
      const normalizedUnlocked = [...unlockedElements].map(e => e.trim().toLowerCase());
      if (!normalizedUnlocked.includes(needed)) continue; // hint nog niet tonen
    }

    // -------- ALS ALLES OK IS --------
    if (c.hint) { availableHints.push(c.hint); }
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
