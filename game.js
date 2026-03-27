// ---------------- DATA -------------------
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
    vers: `Hebben degenen die niet geloven niet gezien dat de Hemelen en de Aarde één geheel waren, 
    en Wij ze vervolgens van elkaar hebben gescheiden?
    <br><br>De Profeten (21:30)`,
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
//------------ THRESHOLD TEST --------------//
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
      threshold: {
        titel: "Quarks op Aarde", 
        tekst: `Je moet eerst nog wat meer halen...<br>`,
        requirements: ["Quarks"]
      },
      normal: {
        achtergrond: "afb/atoomvorming.jpg",
        titel: "ATOOMVORMING",
        tekst: `
        <span>380 duizend jaar na de oerknal bereikte het heelal een temperatuur van 2727 graden.</span>
        <br><br>
        <span>Chaos koelde zo veel af dat protonen, elektronen en neutronen met elkaar fuseerden tot energieneutrale 
        structuren, die op lange termijn stabiel bleven. Veel materie werd elektrisch neutraal, waardoor zichtbaar plasma 
        verdampte. Fotonen stroomden vrij door de elektrisch neutrale nevel en donkere materie. Nog altijd kunnen
        astronomen de resultaten van deze faseverandering waarnemen, namelijk de kosmische achtergrondstraling aan energie
        die vrijkwam toen fotonen uit het plasma konden ontsnappen.</span>
        <br><br>
        <span>Atomen hebben elk een kleine kern in het centrum, bestaande uit één of meer positief geladen protonen en 
        nul of meer neutrale neutronen. Rond de kern cirkelen op grote afstanden negatief geladen elektronen, één voor 
        elke positief geladen proton in de kern. Zij worden door de elektromagnetische kracht bij elkaar gehouden in het 
        gebied dat men gewoonlijk de elektronenwolk noemt. In dit gebied vindt de chemie plaats.</span> 
        <br><br>
        <span>Er worden continu bindingen gevormd en verbroken tussen protonen en elektronen, met als resultaat de 
        opkomst van geheel nieuwe vormen van materie. De drijvende kracht achter al deze activiteit is het feit dat 
        elektronen negatieve ladingen hebben en elkaar afstoten, maar ze worden aangetrokken door de positieve ladingen 
        van protonen, hetzij in hun eigen atoom, hetzij in naburige atomen.</span>`,
      }
    }
  },
  {
    input: [
      ["Atomen", "Warmte"], ["Atomen", "Elektriciteit"], 
      ["Gas", "Warmte"]
    ],
    hint: `Een gas kan zo heet worden dat atomen uit elkaar vallen in geladen deeltjes.`,
    output: [
      { naam: "Plasma", icoon: "icons/Plasma.png", map: "Vuur",
        quote: `Plasma seems to have the kinds of properties one would like for life. It's somewhat like liquid water - 
        unpredictable and thus able to behave in an enormously complex fashion. It could probably carry as much information
        as DNA does
        <br><br>- Freeman Dyson`
      }
    ]
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
    input: [
      ["Elektriciteit", "Gas"], ["Vuur", "Gas"], ["Lava", "Gas"], ["Granietmagma", "Gas"], ["Bliksem", "Gas"], 
      ["Bolbliksem", "Gas"], 
      ["Nitraat", "Elektriciteit"], ["Nitraat", "Vuur"], ["Nitraat", "Lava"], ["Nitraat", "Granietmagma"], 
      ["Nitraat", "Bliksem"], ["Nitraat", "Bolbliksem"],
      ["Aluminium", "Elektriciteit"], ["Aluminium", "Vuur"], ["Aluminium", "Lava"], ["Aluminium", "Granietmagma"], 
      ["Aluminium", "Bliksem"], ["Aluminium", "Bolbliksem"]
    ],
    hint: `... ... ... BOEM!`,
    output: [
      { naam: "Explosie", icoon: "icons/Explosie.png", map: "Vuur",
      quote: `As in an explosion, I would erupt with all the wonderful things I saw and understood in this world
      <br><br>- Boris Pasternak`
      }
    ]
  },
  {
    input: ["Ster", "Warmte"],
    hint: `De corona is de extreemhete buitenlaag van de zon, waar het effect van de hitte zichtbaar wordt.`,
    output: [
      { naam: "Zonnewind", icoon: "icons/Zonnewind.png", map: "Vuur",
        quote: `The solar wind is a continuous outflow of charged particles from the Sun, shaping the space environment 
        throughout the solar system
        <br><br>- Eugene Parker`
      }
    ]
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
    vers: `En de Zon stroomt naar haar Bestemming, dat is de bepaling van de Macht, van de Wijsheid
    <br><br>Ya-Sin (36:38)`,
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
    vers: `Niet mag de Zon de Maan inhalen, noch de nacht voorbijlopen aan de dag, en ieder van hen beweegt in een baan
    <br><br>Ya-Sin (36:40)`,
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
    input: [
      ["Graniet", "Graniet"], ["Graniet", "Basalt"], ["Graniet", "Obsidiaan"], ["Basalt", "Basalt"], 
      ["Basalt", "Obsidiaan"], ["Obsidiaan", "Obsidiaan"], ["Tufsteen", "Graniet"], ["Tufsteen", "Basalt"], 
      ["Tufsteen", "Obsidiaan"], ["Tufsteen", "Tufsteen"], ["Kleisteen", "Graniet"], ["Kleisteen", "Basalt"], 
      ["Kleisteen", "Obsidiaan"], ["Kleisteen", "Tufsteen"], ["Kleisteen", "Kleisteen"], ["Schalie", "Graniet"], 
      ["Schalie", "Basalt"], ["Schalie", "Obsidiaan"], ["Schalie", "Tufsteen"], ["Schalie", "Kleisteen"], 
      ["Schalie", "Schalie"], ["Gipssteen", "Graniet"], ["Gipssteen", "Basalt"], ["Gipssteen", "Obsidiaan"], 
      ["Gipssteen", "Tufsteen"], ["Gipssteen", "Kleisteen"], ["Gipssteen", "Schalie"], ["Gipssteen", "Gipssteen"],
      ["Leisteen", "Graniet"], ["Leisteen", "Basalt"], ["Leisteen", "Obsidiaan"], ["Leisteen", "Tufsteen"], 
      ["Leisteen", "Kleisteen"], ["Leisteen", "Schalie"], ["Leisteen", "Gipssteen"], ["Leisteen", "Leisteen"],
      ["Zandsteen", "Graniet"], ["Zandsteen", "Basalt"], ["Zandsteen", "Obsidiaan"], ["Zandsteen", "Tufsteen"], 
      ["Zandsteen", "Kleisteen"], ["Zandsteen", "Schalie"], ["Zandsteen", "Gipssteen"], ["Zandsteen", "Leisteen"],
      ["Zandsteen", "Zandsteen"], 
      ["Kalksteen", "Graniet"], ["Kalksteen", "Basalt"], ["Kalksteen", "Obsidiaan"], ["Kalksteen", "Tufsteen"], 
      ["Kalksteen", "Kleisteen"], ["Kalksteen", "Schalie"], ["Kalksteen", "Gipssteen"], ["Kalksteen", "Leisteen"],
      ["Kalksteen", "Zandsteen"], ["Kalksteen", "Kalksteen"],
      ["Fylliet", "Graniet"], ["Fylliet", "Basalt"], ["Fylliet", "Obsidiaan"], ["Fylliet", "Tufsteen"], 
      ["Fylliet", "Kleisteen"], ["Fylliet", "Schalie"], ["Fylliet", "Gipssteen"], ["Fylliet", "Leisteen"],
      ["Fylliet", "Zandsteen"], ["Fylliet", "Kalksteen"], ["Fylliet", "Fylliet"],
      ["Kwartsiet", "Graniet"], ["Kwartsiet", "Basalt"], ["Kwartsiet", "Obsidiaan"], ["Kwartsiet", "Tufsteen"], 
      ["Kwartsiet", "Kleisteen"], ["Kwartsiet", "Schalie"], ["Kwartsiet", "Gipssteen"], ["Kwartsiet", "Leisteen"],
      ["Kwartsiet", "Zandsteen"], ["Kwartsiet", "Kalksteen"], ["Kwartsiet", "Fylliet"], ["Kwartsiet", "Kwartsiet"],
      ["Marmer", "Graniet"], ["Marmer", "Basalt"], ["Marmer", "Obsidiaan"], ["Marmer", "Tufsteen"], 
      ["Marmer", "Kleisteen"], ["Marmer", "Schalie"], ["Marmer", "Gipssteen"], ["Marmer", "Leisteen"],
      ["Marmer", "Zandsteen"], ["Marmer", "Kalksteen"], ["Marmer", "Fylliet"], ["Marmer", "Kwartsiet"], 
      ["Marmer", "Marmer"],
      ["Calciet", "Graniet"], ["Calciet", "Basalt"], ["Calciet", "Obsidiaan"], ["Calciet", "Tufsteen"], 
      ["Calciet", "Kleisteen"], ["Calciet", "Schalie"], ["Calciet", "Gipssteen"], ["Calciet", "Leisteen"],
      ["Calciet", "Zandsteen"], ["Calciet", "Kalksteen"], ["Calciet", "Fylliet"], ["Calciet", "Kwartsiet"], 
      ["Calciet", "Marmer"], ["Calciet", "Calciet"],
      ["Schist", "Graniet"], ["Schist", "Basalt"], ["Schist", "Obsidiaan"], ["Schist", "Tufsteen"], 
      ["Schist", "Kleisteen"], ["Schist", "Schalie"], ["Schist", "Gipssteen"], ["Schist", "Leisteen"],
      ["Schist", "Zandsteen"], ["Schist", "Kalksteen"], ["Schist", "Fylliet"], ["Schist", "Kwartsiet"], 
      ["Schist", "Marmer"], ["Schist", "Calciet"], ["Schist", "Schist"],
      ["Gneis", "Graniet"], ["Gneis", "Basalt"], ["Gneis", "Obsidiaan"], ["Gneis", "Tufsteen"], 
      ["Gneis", "Kleisteen"], ["Gneis", "Schalie"], ["Gneis", "Gipssteen"], ["Gneis", "Leisteen"],
      ["Gneis", "Zandsteen"], ["Gneis", "Kalksteen"], ["Gneis", "Fylliet"], ["Gneis", "Kwartsiet"], 
      ["Gneis", "Marmer"], ["Gneis", "Calciet"], ["Gneis", "Schist"], ["Gneis", "Gneis"],
      ["Mica", "Graniet"], ["Mica", "Basalt"], ["Mica", "Obsidiaan"], ["Mica", "Tufsteen"], 
      ["Mica", "Kleisteen"], ["Mica", "Schalie"], ["Mica", "Gipssteen"], ["Mica", "Leisteen"],
      ["Mica", "Zandsteen"], ["Mica", "Kalksteen"], ["Mica", "Fylliet"], ["Mica", "Kwartsiet"], 
      ["Mica", "Marmer"], ["Mica", "Calciet"], ["Mica", "Schist"], ["Mica", "Gneis"], ["Mica", "Mica"],
      ["Veldspaat", "Graniet"], ["Veldspaat", "Basalt"], ["Veldspaat", "Obsidiaan"], ["Veldspaat", "Tufsteen"], 
      ["Veldspaat", "Kleisteen"], ["Veldspaat", "Schalie"], ["Veldspaat", "Gipssteen"], ["Veldspaat", "Leisteen"],
      ["Veldspaat", "Zandsteen"], ["Veldspaat", "Kalksteen"], ["Veldspaat", "Fylliet"], ["Veldspaat", "Kwartsiet"], 
      ["Veldspaat", "Marmer"], ["Veldspaat", "Calciet"], ["Veldspaat", "Schist"], ["Veldspaat", "Gneis"], 
      ["Veldspaat", "Mica"], ["Veldspaat", "Veldspaat"]
    ],
    output: [
      { naam: "Druk", icoon: "icons/Druk.png", map: "Krachten", 
        quote: `The scientist states that pressure is exerted outwards in all directions equally, whereas natural 
        pressure (e.g. air pressure) is exerted inwards from all directions equally 
        <br><br>- Viktor Schawberger`
      }
    ]
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
    vers: `En Wij plaatsten in de aarde stevige bergen opdat het niet met hen zou schudden, en Wij maakten daarin
    doorgangen als bergpassen, zodat zij misschien de weg vinden
    <br><br>De Profeten (21:31)`,
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
    input: [
      ["Magnetisme", "Zonnewind"], ["Poolgebied", "Zonnewind"], ["Poolgebied", "Plasma"], 
      ["Lucht", "Zonnewind"], ["Lucht", "Plasma"], ["Zuurstof", "Zonnewind"], ["Zuurstof", "Plasma"],
      ["Ozon", "Zonnewind"], ["Ozon", "Plasma"]
    ],
    hint: `Als plasma van de Zon te dichtbij komt, vallen de atomen neer als dansend licht.`,
    output: [
      { naam: "Noorderlicht", icoon: "icons/Noorderlicht.png", map: "Vuur",
        quote: `Up at the poles, towards the north of the north, in those magical skies, exists a Goddess called
        Aurora Borealis
        <br><br>- Sayali Jadhav`
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
        achtergrond: "afb/wateropaarde.png",
        titel: "WATER OP AARDE",
        tekst: `
          <span>4,4 miljard jaar geleden stabiliseerde de atmosfeer en konden watterijke gassen de toestand aannemen 
          van vloeibaar water...</span>
          <br><br>
          <span>Waar lava het aardoppervlakte bereikte, pompte het waterrijke gassen de fragiele atmosfeer in. Na afkoeling
          namen deze gassen de toestand aan van vloeibaar water. Hierbij draaien elektronen niet om één, maar om twee 
          atoomkernen, die hun elektromagnetische lading delen in een zogeheten covalente binding. Het scheve watermolecuul
          vormen zij met twee kleine waterstofatomen en een groter zuurstofatoom. Die vreemde vorm verdeelt negatieve en 
          positieve ladingen ongelijkmatig over het oppervlak van het molecuul en laat waterstofatomen willen overspringen 
          naar zuurstofatomen van naburige moleculen - een vloeiende stof.</span>
          <br><br>
          <span>Met het herstel van de atmosfeer vloog water niet meer zo vrijelijk de ruimte in, maar werd het 
          ontvankelijk voor de zwaartekracht van de Aarde. Regen kon nu op de prille aardkorst neerdalen, waarbij door 
          afkoeling van lava nog meer water verdampte. Zo ontstond de dampkring. Dankzij de platentektoniek bleef lava
          altijd wel weer haar weg naar boven vinden, waardoor de afkoeling niet net zo lang doorging tot al het water 
          zou zijn bevroren.</span>
          <br><br>
          <span>Terwijl de watercyclus op gang kwam, was de prille oeratmosfeer lange tijd nog niet sterk genoeg om alle
          broeikasgassen vast te houden. Mars bijvoorbeeld is kleiner dan de Aarde en heeft minder zwaartekracht, waardoor
          al het water daar is bevroren. Aarde kon meer broeikasgassen van de vulkanen vasthouden en zo veranderde Aarde
          in één grote waterbol zonder land. Dit duurde 400 miljoen jaar, tot vulkanen en bergen nieuw land hadden gevormd.
          </span>`,
      }
    }
  },
  {
    input: ["IJs", "IJs"],
    hint: `We moeten ook een plek hebben waar het altijd koud is en vol ijs.`,
    output: [
      { naam: "Poolgebied", icoon: "icons/Poolgebied.png", map: "Landschap", 
        quote: `The only place on Earth that is still as it should be. May we never tame it
        <br><br>- Andrew Denton`
      }
    ],
    uitleg: {
      thresholdElement: {
        naam: "Water", 
        titel: "Te vroeg",
        tekst: `Probeer opnieuw als de Aarde wat meer is afgekoeld...`
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
    vers: `En Wij maakten van de hemel een beschermend dak, maar zij wenden zich af van haar signalen 
    <br><br>De Profeten (21:32)`,
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
    input: [
      ["Bliksem", "Plasma"], ["Bliksem", "Damp"], ["Bliksem", "Wolk"]
    ],
    hint: `Bliksem is zo heet dat bij inslag en dampwolk kan ontstaan met knetterend spectaculair resultaat.`,
    output: [
      { naam: "Bolbliksem", icoon: "icons/Bolbliksem.png", map: "Vuur", 
        quote: `Ball lightning is one of the most enigmatic atmospheric phenomena: small, glowing spheres that appear 
        during thunderstorms, with behavior that remains only partially understood
        <br><br>- Martin Uman`
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
      ["Zeesterren", "Druk"], ["Zeeanemonen", "Druk"], ["Zeeslakken", "Druk"], 
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
    vers: `En Wij hebben uit water alles wat leeft gemaakt. Zien zij dan niet?
    <br><br>De Profeten (21:30)`,
    uitleg: {
      threshold: {
        titel: "Leven", 
        tekst: "Je moet eerst nog wat meer halen...",
        requirements: ["Rivier", "Tufsteen", "Koper", "Zure regen", "Strand", "Eiland", 
          "Roest", "Zand", "Klei", "Glas", "Golf", "Wind", "Zout", "Kalk"]
      },
      normal: {
        achtergrond: "afb/eersteleven.png",
        titel: "NATUURKRACHT 5: LEVEN",
        tekst: `
        <span>Oceanen en plasma's - water en vuur - zijn nodig voor het creëren van leven uit niet-leven. In 1952 bootsten
        wetenschappers dit proces voor het eerst na in een lab, waarbij een vroege aardatmosfeer elektrische schokken te 
        verduren kreeg. Binnen enkele dagen dreven eenvoudige organische moleculen als roze slib van aminozuren op het
        water. Dit gebeurde in het groot toen de Maan noog veel dichter bij de Aarde stond. Blikseminslagen van boven en
        spuwende vulkanen van onder maakten van de oceaan een chemische soep: de oersoep.
        </span>
        <br><br>
        <span>Elektrische ontladingen zijn nodig om nieuwe moleculen te vormen, omdat temperaturen normaal te kil zijn.
        En omgekeerd konden atomen zich pas vormen toen het Heelal koel genoeg was. Toch zijn uitzonderlijke omstandigheden
        nodig om deze moleculen aan elkaar vast te rijgen om zo eiwitten en koolhydraten te vormen. De Aarde bood precies 
        die omstandigheden waar chemisch rijke magma uit haar binnenste door de oceaanbodem sijpelde, beschermd tegen 
        zonnestraling en meteorietenbombardementen.</span?
        <br><br>
        <span>Cruciaal voor deze ketens is koolstof. In normale toestand heeft koolstof vier elektronen in de buitenste 
        baan, ook al is daar ruimte voor acht. In aantallen van vier springen zij over of delen een atoom twee om twee. 
        Dit biedt vele mogelijkheden, zoals ringen en kettingen, die tezamen de oer-basisstoffen van een de vijfde 
        natuurkracht vormde: leven. Waar één miljoen moleculen individueel de natuurwetten volgen, lijken ze tezamen 
        doelgericht te handelen: in leven blijven en nieuw leven maken. Dit wil leven zo graag, dat het de omgeving scant 
        om te voorkomen dat het sterft. Zij handelen naar deze informatie en geven deze door aan hun nakomelingen in DNA.
        Leven volgt de vier natuurkrachten niet, zij kijken, reageren en gebruiken alles om leven te behouden.</span>
        <br><br>
        <span>Een cel is de kleinste vorm van leven. Als moleculaire metropolen bevatten zij een bibliotheek (celkern met
        genetisch materiaal), energiecentrales (mitochondriën), afvalverwerking (lysosomen), stadsmuren (membraan), 
        postkantoren (Golgi-apparaat), en ga zo maar door. Maar niet alle cellen zijn even geavanceerd. Luca - onze oudste 
        universele voorouder - leefde net zoals virussen niet geheel zelfstandig, maar waren afhankelijk van vulkanische 
        hitte op de oceaanbodem. Hun dunne elektrische schil tussen binnen- en buitenwereld leverde energie om
        voedingsstoffen binnen te halen en afvalstoffen af te voeren.</span>`,
      }
    }
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
      ["Schimmel", "Radioactiviteit"], ["Schimmel", "IJs"], ["Schimmel", "Gif"],
      ["Parasieten", "Radioactiviteit"], ["Parasieten", "IJs"], ["Parasieten", "Gif"],
      ["Sponzen", "Radioactiviteit"], ["Sponzen", "IJs"], ["Sponzen", "Gif"],
      ["Archaeplastiden", "Radioactiviteit"], ["Archaeplastiden", "IJs"], ["Archaeplastiden", "Gif"],
      ["Gist", "Radioactiviteit"], ["Gist", "IJs"], ["Gist", "Gif"],
      ["Rode algen", "Radioactiviteit"], ["Rode algen", "IJs"], ["Rode algen", "Gif"],
      ["Groene algen", "Radioactiviteit"], ["Groene algen", "IJs"], ["Groene algen", "Gif"],
      ["Amoeben", "Radioactiviteit"], ["Amoeben", "IJs"], ["Amoeben", "Gif"],
      ["Foraminiferen", "Radioactiviteit"], ["Foraminiferen", "IJs"], ["Foraminiferen", "Gif"],
      ["Stralendiertjes", "Radioactiviteit"], ["Stralendiertjes", "IJs"], ["Stralendiertjes", "Gif"],
      ["Oercnidaria", "Radioactiviteit"], ["Oercnidaria", "IJs"], ["Oercnidaria", "Gif"],
      ["Oerbilateria", "Radioactiviteit"], ["Oerbilateria", "IJs"], ["Oerbilateria", "Gif"],
      ["Roodwieren", "Radioactiviteit"], ["Roodwieren", "IJs"], ["Roodwieren", "Gif"],
      ["Steenwortelalgen", "Radioactiviteit"], ["Steenwortelalgen", "IJs"], ["Steenwortelalgen", "Gif"],
      ["Groenwieren", "Radioactiviteit"], ["Groenwieren", "IJs"], ["Groenwieren", "Gif"],
      ["Kwallen", "Radioactiviteit"], ["Kwallen", "IJs"], ["Kwallen", "Gif"],
      ["Zeeanemonen", "Radioactiviteit"], ["Zeeanemonen", "IJs"], ["Zeeanemonen", "Gif"],
      ["Oertrochozoa", "Radioactiviteit"], ["Oertrochozoa", "IJs"], ["Oertrochozoa", "Gif"],
      ["Wormen", "Radioactiviteit"], ["Wormen", "Gif"],
      ["Zeesterren", "Radioactiviteit"], ["Zeesterren", "Gif"],
      ["Lancetvisjes", "Radioactiviteit"], ["Lancetvisjes", "IJs"], ["Lancetvisjes", "Gif"],
      ["Agnathen", "Radioactiviteit"], ["Agnathen", "Gif"],
      ["Oergeleedpotigen", "Radioactiviteit"], ["Oergeleedpotigen", "Gif"],
      ["Manteldieren", "Radioactiviteit"], ["Manteldieren", "IJs"], ["Manteldieren", "Gif"],
      ["Beerdiertjes", "Gif"],
      ["Mos", "Radioactiviteit"], ["Mos", "IJs"], ["Mos", "Gif"],
      ["Inktvissen", "Radioactiviteit"], ["Inktvissen", "Gif"],
      ["Oercheliceraten", "Radioactiviteit"], ["Oercheliceraten", "Gif"],
      ["Duizendpoten", "Radioactiviteit"], ["Duizendpoten", "Gif"],
      ["Oerkreeftjes", "Radioactiviteit"], ["Oerkreeftjes", "Gif"],
      ["Oerinsecten", "Radioactiviteit"], ["Oerinsecten", "Gif"],
      ["Schorpioenen", "Gif"],
      ["Spinnen", "Radioactiviteit"], ["Spinnen", "Gif"],
      ["Mijten", "Radioactiviteit"], ["Mijten", "Gif"],
      ["Zwaardstaarten", "Radioactiviteit"], ["Zwaardstaarten", "Gif"],
      ["Krill", "Radioactiviteit"], ["Krill", "Gif"],
      ["Oervaatplanten", "Radioactiviteit"], ["Oervaatplanten", "Gif"],
      ["Korstmos", "Radioactiviteit"], ["Korstmos", "IJs"], ["Korstmos", "Gif"],
      ["Truffels", "Radioactiviteit"], ["Truffels", "IJs"], ["Truffels", "Gif"],
      ["Paddenstoelen", "Radioactiviteit"], ["Paddenstoelen", "IJs"], ["Paddenstoelen", "Gif"],
      ["Oerchondrichthyes", "Radioactiviteit"], ["Oerchondrichthyes", "Gif"],
      ["Pissebedden", "Radioactiviteit"], ["Pissebedden", "Gif"],
      ["Garnalen", "Radioactiviteit"], ["Garnalen", "Gif"],
      ["Kreeften", "Radioactiviteit"], ["Kreeften", "Gif"],
      ["Krabben", "Radioactiviteit"], ["Krabben", "Gif"],
      ["Zilvervisjes", "Radioactiviteit"], ["Zilvervisjes", "Gif"],
      ["Haaien", "Radioactiviteit"], ["Haaien", "Gif"],
      ["Holocefalen", "Radioactiviteit"], ["Holocefalen", "Gif"],
      ["Varens", "Radioactiviteit"], ["Varens", "Gif"],
      ["Oerzaadplanten", "Radioactiviteit"], ["Oerzaadplanten", "Gif"],
      ["Oerpolyneopteren", "Radioactiviteit"], ["Oerpolyneopteren", "Gif"],
      ["Oerhymenopteren", "Radioactiviteit"], ["Oerhymenopteren", "Gif"],
      ["Luizen", "Radioactiviteit"], ["Luizen", "Gif"],
      ["Kevers", "Radioactiviteit"], ["Kevers", "Gif"],
      ["Muggen", "Radioactiviteit"], ["Muggen", "Gif"],
      ["Vliegen", "Radioactiviteit"], ["Vliegen", "Gif"],
      ["Vlinders", "Radioactiviteit"], ["Vlinders", "Gif"],
      ["Krekels", "Radioactiviteit"], ["Krekels", "Gif"],
      ["Sprinkhanen", "Radioactiviteit"], ["Sprinkhanen", "Gif"],
      ["Wandelende takken", "Radioactiviteit"], ["Wandelende takken", "Gif"],
      ["Kakkerlakken", "Gif"],
      ["Termieten", "Radioactiviteit"], ["Termieten", "Gif"]

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
      ["Coniferen", "Radioactiviteit"], ["Coniferen", "Gif"],
      ["Palmvarens", "Radioactiviteit"], ["Palmvarens", "Gif"],
      ["Ginkgo", "Radioactiviteit"], ["Ginkgo", "Gif"]
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
      { naam: "Hout", icoon: "icons/Hout.png", map: "Biologie", 
        quote: `Nature does nothing in vain; the wood and bark of trees serve both shelter and sustenance
        <br><br>- Aristoteles`
      }
    ]
  },
  {
    input: [
      ["Koraal", "Radioactiviteit"], ["Koraal", "Gif"],
      ["Zee-egels", "Radioactiviteit"], ["Zee-egels", "Gif"],
      ["Trilobieten", "Radioactiviteit"], ["Trilobieten", "Gif"],
      ["Oerstraalvinnigen", "Radioactiviteit"], ["Oerstraalvinnigen", "Gif"],
      ["Coelacanthen", "Radioactiviteit"], ["Coelacanthen", "Gif"],
      ["Tiktaalik", "Radioactiviteit"], ["Tiktaalik", "Gif"],
      ["Longvissen", "Radioactiviteit"], ["Longvissen", "Gif"],
      ["Oerchondrostei", "Radioactiviteit"], ["Oerchondrostei", "Gif"],
      ["Wimpelalen", "Radioactiviteit"], ["Wimpelalen", "Gif"],
      ["Oerneopterygen", "Radioactiviteit"], ["Oerneopterygen", "Gif"],
      ["Oertetrapoden", "Radioactiviteit"], ["Oertetrapoden", "Gif"],
      ["Salamanders", "Radioactiviteit"], ["Salamanders", "Gif"],
      ["Kikkers", "Radioactiviteit"], ["Kikkers", "Gif"],
      ["Padden", "Radioactiviteit"], ["Padden", "Gif"],
      ["Oersynapsiden", "Radioactiviteit"], ["Oersynapsiden", "Gif"],
      ["Oeranapsiden", "Radioactiviteit"], ["Oeranapsiden", "Gif"],
      ["Oerdiapsiden", "Radioactiviteit"], ["Oerdiapsiden", "Gif"],
      ["Schildpadden", "Radioactiviteit"], ["Schildpadden", "Gif"]
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
      { naam: "Bot", icoon: "icons/Bot.png", map: "Biologie", 
        quote: `In a way, humans are not made of skin and bones as such, as we're made of stories
        <br><br>- Sue Monk Kidd`
      }
    ]
  },
  {
    input: [
      ["Bacteriën", "Vuur"], ["Bacteriën", "Lava"],
      ["Stromatolieten", "Vuur"], ["Stromatolieten", "Lava"],
      ["Blauwalgen", "Vuur"], ["Blauwalgen", "Lava"],
      ["Leca", "Vuur"], ["Leca", "Lava"],
      ["Schimmel", "Vuur"], ["Schimmel", "Lava"],
      ["Parasieten", "Vuur"], ["Parasieten", "Lava"],
      ["Sponzen", "Vuur"], ["Sponzen", "Lava"],
      ["Archaeplastiden", "Vuur"], ["Archaeplastiden", "Lava"],
      ["Gist", "Vuur"], ["Gist", "Lava"],
      ["Rode algen", "Vuur"], ["Rode algen", "Lava"],
      ["Groene algen", "Vuur"], ["Groene algen", "Lava"],
      ["Amoeben", "Vuur"], ["Amoeben", "Lava"],
      ["Foraminiferen", "Vuur"], ["Foraminiferen", "Lava"],
      ["Stralendiertjes", "Vuur"], ["Stralendiertjes", "Lava"],
      ["Oercnidaria", "Vuur"], ["Oercnidaria", "Lava"],
      ["Oerbilateria", "Vuur"], ["Oerbilateria", "Lava"],
      ["Roodwieren", "Vuur"], ["Roodwieren", "Lava"],
      ["Steenwortelalgen", "Vuur"], ["Steenwortelalgen", "Lava"],
      ["Groenwieren", "Vuur"], ["Groenwieren", "Lava"],
      ["Kwallen", "Vuur"], ["Kwallen", "Lava"],
      ["Zeeanemonen", "Vuur"], ["Zeeanemonen", "Lava"],
      ["Oertrochozoa", "Vuur"], ["Oertrochozoa", "Lava"],
      ["Wormen", "Vuur"], ["Wormen", "Lava"],
      ["Zeesterren", "Vuur"], ["Zeesterren", "Lava"],
      ["Lancetvisjes", "Vuur"], ["Lancetvisjes", "Lava"],
      ["Agnathen", "Vuur"], ["Agnathen", "Lava"],
      ["Oergeleedpotigen", "Vuur"], ["Oergeleedpotigen", "Lava"],
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
      ["Mijten", "Vuur"], ["Mijten", "Lava"],
      ["Zwaardstaarten", "Vuur"], ["Zwaardstaarten", "Lava"],
      ["Krill", "Vuur"], ["Krill", "Lava"],
      ["Oervaatplanten", "Vuur"], ["Oervaatplanten", "Lava"],
      ["Korstmos", "Vuur"], ["Korstmos", "Lava"],
      ["Truffels", "Vuur"], ["Truffels", "Lava"],
      ["Paddenstoelen", "Vuur"], ["Paddenstoelen", "Lava"],
      ["Oerchondrichthyes", "Vuur"], ["Oerchondrichthyes", "Lava"],
      ["Pissebedden", "Vuur"], ["Pissebedden", "Lava"],
      ["Garnalen", "Vuur"], ["Garnalen", "Lava"],
      ["Kreeften", "Vuur"], ["Kreeften", "Lava"],
      ["Krabben", "Vuur"], ["Krabben", "Lava"],
      ["Zilvervisjes", "Vuur"], ["Zilvervisjes", "Lava"],
      ["Haaien", "Vuur"], ["Haaien", "Lava"],
      ["Holocefalen", "Vuur"], ["Holocefalen", "Lava"],
      ["Varens", "Vuur"], ["Varens", "Lava"],
      ["Oerzaadplanten", "Vuur"], ["Oerzaadplanten", "Lava"],
      ["Oerpolyneopteren", "Vuur"], ["Oerpolyneopteren", "Lava"],
      ["Oerhymenopteren", "Vuur"], ["Oerhymenopteren", "Lava"],
      ["Luizen", "Vuur"], ["Luizen", "Lava"],
      ["Kevers", "Vuur"], ["Kevers", "Lava"],
      ["Muggen", "Vuur"], ["Muggen", "Lava"],
      ["Vliegen", "Vuur"], ["Vliegen", "Lava"],
      ["Vlinders", "Vuur"], ["Vlinders", "Lava"],
      ["Coniferen", "Vuur"], ["Coniferen", "Lava"],
      ["Palmvarens", "Vuur"], ["Palmvarens", "Lava"],
      ["Ginkgo", "Vuur"], ["Ginkgo", "Lava"],
      ["Krekels", "Vuur"], ["Krekels", "Lava"],
      ["Sprinkhanen", "Vuur"], ["Sprinkhanen", "Lava"],
      ["Wandelende takken", "Vuur"], ["Wandelende takken", "Lava"],
      ["Kakkerlakken", "Vuur"], ["Kakkerlakken", "Lava"],
      ["Termieten", "Vuur"], ["Termieten", "Lava"],

      ["Koraal", "Lava"], ["Zee-egels", "Lava"], ["Trilobieten", "Lava"], ["Oerstraalvinnigen", "Lava"], 
      ["Coelacanthen", "Lava"], ["Tiktaalik", "Lava"], ["Longvissen", "Lava"], ["Oerchondrostei", "Lava"],
      ["Wimpelalen", "Lava"], ["Oerneopterygen", "Lava"], ["Oertetrapoden", "Lava"], ["Salamanders", "Lava"],
      ["Kikkers", "Lava"], ["Padden", "Lava"], ["Oersynapsiden", "Lava"], ["Oeranapsiden", "Lava"],
      ["Oerdiapsiden", "Lava"], ["Schildpadden", "Lava"]
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
      ["Koraal", "Vuur"], ["Zee-egels", "Vuur"], ["Trilobieten", "Vuur"], ["Oerstraalvinnigen", "Vuur"], 
      ["Coelacanthen", "Vuur"], ["Tiktaalik", "Vuur"], ["Longvissen", "Vuur"], ["Oerchondrostei", "Vuur"],
      ["Wimpelalen", "Vuur"], ["Oerneopterygen", "Vuur"], ["Oertetrapoden", "Vuur"], ["Salamanders", "Vuur"],
      ["Kikkers", "Vuur"], ["Padden", "Vuur"], ["Oersynapsiden", "Vuur"], ["Oeranapsiden", "Vuur"], 
      ["Oerdiapsiden", "Vuur"], ["Schildpadden", "Vuur"]
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
      },
      { naam: "Bot", icoon: "icons/Bot.png", map: "Biologie", 
        quote: `In a way, humans are not made of skin and bones as such, as we're made of stories
        <br><br>- Sue Monk Kidd`
      }
    ]
  },
  {
    input: [
      ["Bacteriën", "Dood"], ["Stromatolieten", "Dood"], ["Blauwalgen", "Dood"], ["Leca", "Dood"], ["Schimmel", "Dood"], 
      ["Parasieten", "Dood"], ["Sponzen", "Dood"], ["Archaeplastiden", "Dood"], ["Gist", "Dood"],
      ["Rode algen", "Dood"], ["Groene algen", "Dood"], ["Amoeben", "Dood"], ["Foraminiferen", "Dood"], 
      ["Stralendiertjes", "Dood"], ["Oercnidaria", "Dood"], ["Oerbilateria", "Dood"], ["Roodwieren", "Dood"],  
      ["Steenwortelalgen", "Dood"], ["Groenwieren", "Dood"], ["Kwallen", "Dood"], ["Zeeanemonen", "Dood"],
      ["Oertrochozoa", "Dood"], ["Wormen", "Dood"], ["Zeesterren", "Dood"], ["Lancetvisjes", "Dood"], ["Agnathen", "Dood"], 
      ["Oergeleedpotigen", "Dood"], ["Manteldieren", "Dood"], ["Beerdiertjes", "Dood"], ["Mos", "Dood"], 
      ["Inktvissen", "Dood"], ["Oercheliceraten", "Dood"], ["Duizendpoten", "Dood"], ["Oerkreeftjes", "Dood"], 
      ["Oerinsecten", "Dood"], ["Schorpioenen", "Dood"], ["Spinnen", "Dood"], ["Mijten", "Dood"], 
      ["Zwaardstaarten", "Dood"], ["Krill", "Dood"], ["Oervaatplanten", "Dood"], ["Korstmos", "Dood"],
      ["Truffels", "Dood"], ["Paddenstoelen", "Dood"], ["Oerchondrichthyes", "Dood"], ["Pissebedden", "Dood"], 
      ["Garnalen", "Dood"], ["Kreeften", "Dood"], ["Krabben", "Dood"], ["Haaien", "Dood"], ["Holocefalen", "Dood"],
      ["Varens", "Dood"], ["Oerzaadplanten", "Dood"], ["Oerpolyneopteren", "Dood"], ["Oerhymenopteren", "Dood"], 
      ["Luizen", "Dood"], ["Kevers", "Dood"], ["Muggen", "Dood"], ["Vliegen", "Dood"], ["Vlinders", "Dood"], 
      ["Krekels", "Dood"], ["Sprinkhanen", "Dood"], ["Wandelende takken", "Dood"], ["Kakkerlakken", "Dood"], 
      ["Termieten", "Dood"]
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
      ["Koraal", "Dood"], ["Zee-egels", "Dood"], ["Trilobieten", "Dood"], ["Oerstraalvinnigen", "Dood"], 
      ["Coelacanthen", "Dood"], ["Tiktaalik", "Dood"], ["Longvissen", "Dood"], ["Oerchondrostei", "Dood"], 
      ["Wimpelalen", "Dood"], ["Oerneopterygen", "Dood"], ["Oertetrapoden", "Dood"], ["Salamanders", "Dood"], 
      ["Kikkers", "Dood"], ["Padden", "Dood"], ["Oersynapsiden", "Dood"], ["Oeranapsiden", "Dood"], 
      ["Oerdiapsiden", "Dood"], ["Schildpadden", "Dood"]
    ],
    output: [
      { naam: "Detritus", icoon: "icons/Detritus.png", map: "Biologie", 
        quote: `I choose not to make a graveyard of my body for the rotting corpses of dead animals 
        <br><br>- George Shaw`
      },
      { naam: "Bot", icoon: "icons/Bot.png", map: "Biologie", 
        quote: `In a way, humans are not made of skin and bones as such, as we're made of stories
        <br><br>- Sue Monk Kidd`
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
      ["Coniferen", "Dood"], ["Palmvarens", "Dood"], ["Ginkgo", "Dood"]
    ],
    output: [
      { naam: "Detritus", icoon: "icons/Detritus.png", map: "Biologie", 
        quote: `I choose not to make a graveyard of my body for the rotting corpses of dead animals 
        <br><br>- George Shaw`
      },
      { naam: "Hout", icoon: "icons/Hout.png", map: "Biologie", 
        quote: `Nature does nothing in vain; the wood and bark of trees serve both shelter and sustenance
        <br><br>- Aristoteles`
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
      ["Leca", "Bacteriën"], ["Leca", "Archaeplastiden"]
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
      ["Varens", "Ster"], ["Varens", "Licht"],
      ["Oerzaadplanten", "Ster"], ["Oerzaadplanten", "Licht"],
      ["Coniferen", "Ster"], ["Coniferen", "Licht"],
      ["Palmvarens", "Ster"], ["Palmvarens", "Licht"],
      ["Ginkgo", "Ster"], ["Ginkgo", "Licht"]
    ],
    hint: `Het regent zonnestralen en dus regent het voedsel voor archaeplastiden.`,
    output: [
      { naam: "Fotosynthese", icoon: "icons/Fotosynthese.png", map: "Biologie", 
        quote: `He had a love affair with photosynthesis. He could talk about moss for an hour. He said that plants 
        carried wisdom humans would never be around long enough to understand 
        <br><br>- Anthony Doerr`
      },
      { naam: "Zuurstof", icoon: "icons/Zuurstof.png", map: "Lucht",
       quote: `Singing is like a celebration of oxygen
       <br><br>- Bjork`
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
    input: [
      ["Amoeben", "Bacteriën"], ["Amoeben", "Detritus"], ["Amoeben", "Blauwalgen"], ["Amoeben", "Leca"],
      ["Amoeben", "Schimmel"], ["Amoeben", "Archaeplastiden"], ["Amoeben", "Gist"], 
      ["Amoeben", "Foraminiferen"]
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
    input: [
      ["Foraminiferen", "Bacteriën"], ["Foraminiferen", "Detritus"], ["Foraminiferen", "Blauwalgen"], 
      ["Foraminiferen", "Leca"], ["Foraminiferen", "Schimmel"], ["Foraminiferen", "Archaeplastiden"],
      ["Foraminiferen", "Gist"], ["Foraminiferen", "Rode algen"], ["Foraminiferen", "Groene algen"],
      ["Foraminiferen", "Roodwieren"], ["Foraminiferen", "Steenwortelalgen"], ["Foraminiferen", "Groenwieren"]
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
      ["Stralendiertjes", "Bacteriën"], ["Stralendiertjes", "Detritus"], ["Stralendiertjes", "Blauwalgen"], 
      ["Stralendiertjes", "Leca"], ["Stralendiertjes", "Schimmel"], ["Stralendiertjes", "Archaeplastiden"],
      ["Stralendiertjes", "Gist"], ["Stralendiertjes", "Rode algen"], ["Stralendiertjes", "Groene algen"],
      ["Stralendiertjes", "Roodiweren"], ["Stralendiertjes", "Steenwortelalgen"], ["Stralendiertjes", "Groenwieren"]
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
    input: ["Leca", "Evolutie"],
    hint: `Schimmel eet dood materiaal, planten hebben fotosynthese, maar welke eerste meercelligen aten leven?`,
    tijd: 900_000_000,
    output: [
      { naam: "Parasieten", icoon: "icons/Parasieten.png", map: "Pril leven", 
        quote: `Thought, like any parasite, cannot exist without a compliant host 
        <br><br>- Bernard Beckett`
      },
      { naam: "Sponzen", icoon: "icons/Sponzen.png", map: "Waterdieren", 
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
    input: [
      ["Sponzen", "Bacteriën"], ["Sponzen", "Detritus"], ["Sponzen", "Blauwalgen"], ["Sponzen", "Gist"],
      ["Sponzen", "Groene algen"], ["Sponzen", "Amoeben"], ["Sponzen", "Foraminiferen"], ["Sponzen", "Groenwieren"],
      ["Sponzen", "Beerdiertjes"]
    ],
    output: [
      { naam: "Sponzen", icoon: "icons/Sponzen.png", map: "Waterdieren", 
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
      ["Zuurstof", "Straling"], ["Zuurstof", "Ster"], ["Licht", "Zuurstof"]
    ],
    hint: `UV-straling splitst zuurstof op en vormt tezamen met zuurstof iets nieuws.`,
    output: [
      { naam: "Ozon", icoon: "icons/Ozon.png", map: "Lucht", 
        quote: `Man must rise above the Earth to the top of the atmosphere and beyond - for only thus will he fully
        understand the world in which he lives
        <br><br>- Socrates`
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
    input: [
      ["Foraminiferen", "Zand"], ["Oertrochozoa", "Kalk"]
    ],
    hint: `Kijk wat foraminiferen met zand doen of weekdieren met kalk...`,
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
    vers: `En een teken voor hen is de dode aarde, Wij brengen haar tot leven en brengen daaruit graan waaarvan zij eten
    <br><br>Ya-Sin (36:33)`,
    output: [
      { naam: "Aarde", icoon: "icons/Aarde.png", map: "Aarde", 
        quote: `Land is not merely soil, it is a fountain of energy flowing through a circuit of soils, plants and 
        animals 
        <br><br>- Aldo Leopold`
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
      ["Gist", "Detritus"], ["Gist", "Schimmel"]
    ],
    output: [
      { naam: "Gist", icoon: "icons/Gist.png", map: "Pril leven",
        quote: `God made yeast, as well as dough, and loves fermentation just as dearly as he loves vegetation
        <br><br>- Ralph Emerson`
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
      ["Sponzen", "Kalk"], ["Sponzen", "Bot"], ["Sponzen", "Evolutie"],
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
      ["Koraal", "Leca"], ["Koraal", "Foraminiferen"], ["Koraal", "Krill"]
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
    input: [
      ["Weefsel", "Evolutie"], ["Weefsel", "Leca"]
    ],
    hint: `Meercelligheid heeft als voordeel dat het kan specialiseren in bewegen en de directe omgeving meten.`,
    output: [
      { naam: "Spieren", icoon: "icons/Spieren.png", map: "Biologie", 
        quote: `The muscles are the instruments of movement, and the bones are the levers 
        <br><br>- Leonardo da Vinci`
      },
      { naam: "Zenuwen", icoon: "icons/Zenuwen.png", map: "Brein", 
        quote: `With the nervous system intact the reactions of the various parts of that system, the 'simple reflexes', 
        are ever combined into great unitary harmonies 
        <br><br>- Charles Sherrington`
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
    input: [
      ["Oercnidaria", "Bacteriën"], ["Oercnidaria", "Detritus"], ["Oercnidaria", "Blauwalgen"], ["Oercnidaria", "Leca"], 
      ["Oercnidaria", "Schimmel"], ["Oercnidaria", "Sponzen"], ["Oercnidaria", "Archaeplastiden"], ["Oercnidaria", "Gist"],
      ["Oercnidaria", "Amoeben"], ["Oercnidaria", "Foraminiferen"], ["Oercnidaria", "Stralendiertjes"]
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
    input: [
      ["Oerbilateria", "Bacteriën"], ["Oerbilateria", "Detritus"], ["Oerbilateria", "Blauwalgen"], ["Oerbilateria", "Leca"],
      ["Oerbilateria", "Schimmel"], ["Oerbilateria", "Sponzen"], ["Oerbilateira", "Archaeplastiden"], 
      ["Oerbilateria", "Gist"], ["Oerbilateria", "Amoeben"], ["Oerbilateria", "Foraminiferen"], 
      ["Oerbilateria", "Stralendiertjes"], ["Oerbilateria", "Oercnidaria"]
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
    input: ["Zenuwen", "Parasieten"], 
    hint: `Wat voel ik?`,
    output: [
      { naam: "Brein", icoon: "icons/Brein.png", map: "Brein", 
        quote: `The great events of the world take place in the brain 
        <br><br>- Oscar Wilde`
      },
      { naam: "Tast", icoon: "icons/Tast.png", map: "Brein", 
        quote: `Too often we underestimate the power of touch 
        <br><br>- Leo Buscaglia`
      }
    ]
  },
  {
    input: [
      ["Koraal", "Zenuwen"], ["Oercnidaria", "Zenuwen"], ["Kwallen", "Zenuwen"], ["Zeeanemonen", "Zenuwen"], 
      ["Zeesterren", "Zenuwen"], ["Zee-egels", "Zenuwen"]
    ],
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
      ["Oerbilateria", "Zenuwen"], ["Tweekleppigen", "Zenuwen"]
    ],
    hint: `Sommige dieren zijn als licht in de duisternis, maar ervaren zij dat ook?`,
    output: [
      { naam: "Brein", icoon: "icons/Brein.png", map: "Brein", 
        quote: `The great events of the world take place in the brain 
        <br><br>- Oscar Wilde`
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
      ["Oertrochozoa", "Zenuwen"], ["Wormen", "Zenuwen"], ["Lancetvisjes", "Zenuwen"], ["Oergeleedpotigen", "Zenuwen"],
      ["Beerdiertjes", "Zenuwen"]
    ],
    hint: `Au!`,
    output: [
      { naam: "Brein", icoon: "icons/Brein.png", map: "Brein", 
        quote: `The great events of the world take place in the brain 
        <br><br>- Oscar Wilde`
      },
      { naam: "Tast", icoon: "icons/Tast.png", map: "Brein", 
        quote: `Too often we underestimate the power of touch 
        <br><br>- Leo Buscaglia`
      },
      { naam: "Licht", icoon: "icons/Licht.png", map: "Brein",
        quote: `In every person there is a sun. Just let them shine 
        <br><br>- Socrates`
      },
      { naam: "Pijn", icoon: "icons/Pijn.png", map: "Brein",
        quote: `Pain is inevitable. Suffering is optional
        <br><br>- Haruki Murakami`
      }
    ]
  },
  {
    input: [
      ["Manteldieren", "Zenuwen"], ["Mijten", "Zenuwen"], ["Luizen", "Zenuwen"]
    ],
    hint: `Wat ruik ik?`,
    output: [
      { naam: "Brein", icoon: "icons/Brein.png", map: "Brein", 
        quote: `The great events of the world take place in the brain 
        <br><br>- Oscar Wilde`
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
    input: ["Duizendpoten", "Zenuwen"],
    output: [
      { naam: "Brein", icoon: "icons/Brein.png", map: "Brein", 
        quote: `The great events of the world take place in the brain 
        <br><br>- Oscar Wilde`
      },
      { naam: "Tast", icoon: "icons/Tast.png", map: "Brein", 
        quote: `Too often we underestimate the power of touch 
        <br><br>- Leo Buscaglia`
      },
      { naam: "Licht", icoon: "icons/Licht.png", map: "Brein",
        quote: `In every person there is a sun. Just let them shine 
        <br><br>- Socrates`
      },
      { naam: "Pijn", icoon: "icons/Pijn.png", map: "Brein",
        quote: `Pain is inevitable. Suffering is optional
        <br><br>- Haruki Murakami`
      },
      { naam: "Geur", icoon: "icons/Geur.png", map: "Brein", 
        quote: `Smell is a potent wizard that transports you across thousands of miles and all the years you have lived 
        <br><br>- Helen Keller`
      }
    ]
  },
  {
    input: [
      ["Oercheliceraten", "Zenuwen"], ["Pissebedden", "Zenuwen"]
    ],
    hint: `Wat zie ik?`,
    output: [
      { naam: "Brein", icoon: "icons/Brein.png", map: "Brein", 
        quote: `The great events of the world take place in the brain 
        <br><br>- Oscar Wilde`
      },
      { naam: "Tast", icoon: "icons/Tast.png", map: "Brein", 
        quote: `Too often we underestimate the power of touch 
        <br><br>- Leo Buscaglia`
      },
      { naam: "Licht", icoon: "icons/Licht.png", map: "Brein",
        quote: `In every person there is a sun. Just let them shine 
        <br><br>- Socrates`
      },
      { naam: "Pijn", icoon: "icons/Pijn.png", map: "Brein",
        quote: `Pain is inevitable. Suffering is optional
        <br><br>- Haruki Murakami`
      },
      { naam: "Oog", icoon: "icons/Oog.png", map: "Biologie", 
        quote: `Eye contact is way more intimate than words will ever be 
        <br><br>- Faraaz Kazi`
      }
    ]
  },
  {
    input: [
      ["Oerkreeftjes", "Zenuwen"], ["Schorpioenen", "Zenuwen"], ["Spinnen", "Zenuwen"], ["Garnalen", "Zenuwen"],
      ["Zilvervisjes", "Zenuwen"]
    ],
    output: [
      { naam: "Brein", icoon: "icons/Brein.png", map: "Brein", 
        quote: `The great events of the world take place in the brain 
        <br><br>- Oscar Wilde`
      },
      { naam: "Tast", icoon: "icons/Tast.png", map: "Brein", 
        quote: `Too often we underestimate the power of touch 
        <br><br>- Leo Buscaglia`
      },
      { naam: "Licht", icoon: "icons/Licht.png", map: "Brein",
        quote: `In every person there is a sun. Just let them shine 
        <br><br>- Socrates`
      },
      { naam: "Pijn", icoon: "icons/Pijn.png", map: "Brein",
        quote: `Pain is inevitable. Suffering is optional
        <br><br>- Haruki Murakami`
      },
      { naam: "Geur", icoon: "icons/Geur.png", map: "Brein", 
        quote: `Smell is a potent wizard that transports you across thousands of miles and all the years you have lived 
        <br><br>- Helen Keller`
      },
      { naam: "Oog", icoon: "icons/Oog.png", map: "Biologie", 
        quote: `Eye contact is way more intimate than words will ever be 
        <br><br>- Faraaz Kazi`
      }
    ]
  },
  {
    input: [
      ["Agnathen", "Zenuwen"], ["Zeeslakken", "Zenuwen"], ["Oerinsecten", "Zenuwen"], ["Oerpolyneopteren", "Zenuwen"],
      ["Wandelende takken", "Zenuwen"], ["Kakkerlakken", "Zenuwen"], ["Termieten", "Zenuwen"]
    ],
    hint: `Wat proef ik?`,
    output: [
      { naam: "Brein", icoon: "icons/Brein.png", map: "Brein", 
        quote: `The great events of the world take place in the brain 
        <br><br>- Oscar Wilde`
      },
      { naam: "Tast", icoon: "icons/Tast.png", map: "Brein", 
        quote: `Too often we underestimate the power of touch 
        <br><br>- Leo Buscaglia`
      },
      { naam: "Licht", icoon: "icons/Licht.png", map: "Brein",
        quote: `In every person there is a sun. Just let them shine 
        <br><br>- Socrates`
      },
      { naam: "Pijn", icoon: "icons/Pijn.png", map: "Brein",
        quote: `Pain is inevitable. Suffering is optional
        <br><br>- Haruki Murakami`
      },
      { naam: "Geur", icoon: "icons/Geur.png", map: "Brein", 
        quote: `Smell is a potent wizard that transports you across thousands of miles and all the years you have lived 
        <br><br>- Helen Keller`
      },
      { naam: "Smaak", icoon: "icons/Smaak.png", map: "Brein",
        quote: `Eat bitter, taste sweet
        <br><br>- Rick Riordan`
      },
      { naam: "Oog", icoon: "icons/Oog.png", map: "Biologie", 
        quote: `Eye contact is way more intimate than words will ever be 
        <br><br>- Faraaz Kazi`
      }
    ]
  },
  {
    input: ["Trilobieten", "Zenuwen"],
    output: [
      { naam: "Brein", icoon: "icons/Brein.png", map: "Brein", 
        quote: `The great events of the world take place in the brain 
        <br><br>- Oscar Wilde`
      },
      { naam: "Tast", icoon: "icons/Tast.png", map: "Brein", 
        quote: `Too often we underestimate the power of touch 
        <br><br>- Leo Buscaglia`
      },
      { naam: "Pijn", icoon: "icons/Pijn.png", map: "Brein",
        quote: `Pain is inevitable. Suffering is optional
        <br><br>- Haruki Murakami`
      },
      { naam: "Oog", icoon: "icons/Oog.png", map: "Biologie", 
        quote: `Eye contact is way more intimate than words will ever be 
        <br><br>- Faraaz Kazi`
      },
      { naam: "Kleur", icoon: "icons/Kleur.png", map: "Brein",
        quote: `Colour in a picture is like enthusiasm in life
        <br><br>- Vincent van Gogh`
      }
    ]
  },
  {
    input: [
      ["Krill", "Zenuwen"], ["Kreeften", "Zenuwen"], ["Krabben", "Zenuwen"]
    ],
    output: [
      { naam: "Brein", icoon: "icons/Brein.png", map: "Brein", 
        quote: `The great events of the world take place in the brain 
        <br><br>- Oscar Wilde`
      },
      { naam: "Tast", icoon: "icons/Tast.png", map: "Brein", 
        quote: `Too often we underestimate the power of touch 
        <br><br>- Leo Buscaglia`
      },
      { naam: "Pijn", icoon: "icons/Pijn.png", map: "Brein",
        quote: `Pain is inevitable. Suffering is optional
        <br><br>- Haruki Murakami`
      },
      { naam: "Geur", icoon: "icons/Geur.png", map: "Brein", 
        quote: `Smell is a potent wizard that transports you across thousands of miles and all the years you have lived 
        <br><br>- Helen Keller`
      },
      { naam: "Oog", icoon: "icons/Oog.png", map: "Biologie", 
        quote: `Eye contact is way more intimate than words will ever be 
        <br><br>- Faraaz Kazi`
      },
      { naam: "Kleur", icoon: "icons/Kleur.png", map: "Brein",
        quote: `Colour in a picture is like enthusiasm in life
        <br><br>- Vincent van Gogh`
      }
    ]
  },
  {
    input: [
      ["Inktvissen", "Zenuwen"], ["Nautilussen", "Zenuwen"], ["Zwaardstaarten", "Zenuwen"], ["Oerhymenopteren", "Zenuwen"]
    ],
    hint: `Kijk naar de dieren... sommigen kunnen al kleuren zien.`,
    output: [
      { naam: "Brein", icoon: "icons/Brein.png", map: "Brein", 
        quote: `The great events of the world take place in the brain 
        <br><br>- Oscar Wilde`
      },
      { naam: "Tast", icoon: "icons/Tast.png", map: "Brein", 
        quote: `Too often we underestimate the power of touch 
        <br><br>- Leo Buscaglia`
      },
      { naam: "Pijn", icoon: "icons/Pijn.png", map: "Brein",
        quote: `Pain is inevitable. Suffering is optional
        <br><br>- Haruki Murakami`
      },
      { naam: "Geur", icoon: "icons/Geur.png", map: "Brein", 
        quote: `Smell is a potent wizard that transports you across thousands of miles and all the years you have lived 
        <br><br>- Helen Keller`
      },
      { naam: "Smaak", icoon: "icons/Smaak.png", map: "Brein",
        quote: `Eat bitter, taste sweet
        <br><br>- Rick Riordon`
      },
      { naam: "Oog", icoon: "icons/Oog.png", map: "Biologie", 
        quote: `Eye contact is way more intimate than words will ever be 
        <br><br>- Faraaz Kazi`
      },
      { naam: "Kleur", icoon: "icons/Kleur.png", map: "Brein",
        quote: `Colour in a picture is like enthusiasm in life
        <br><br>- Vincent van Gogh`
      }
    ]
  },
  {
    input: [
      ["Oerchondrichthyes", "Zenuwen"], ["Oerstraalvinnigen", "Zenuwen"], ["Oerchondrostei", "Zenuwen"],
      ["Krekels", "Zenuwen"]
    ],
    output: [
      { naam: "Brein", icoon: "icons/Brein.png", map: "Brein", 
        quote: `The great events of the world take place in the brain 
        <br><br>- Oscar Wilde`
      },
      { naam: "Tast", icoon: "icons/Tast.png", map: "Brein", 
        quote: `Too often we underestimate the power of touch 
        <br><br>- Leo Buscaglia`
      },
      { naam: "Pijn", icoon: "icons/Pijn.png", map: "Brein",
        quote: `Pain is inevitable. Suffering is optional
        <br><br>- Haruki Murakami`
      },
      { naam: "Geur", icoon: "icons/Geur.png", map: "Brein", 
        quote: `Smell is a potent wizard that transports you across thousands of miles and all the years you have lived 
        <br><br>- Helen Keller`
      },
      { naam: "Smaak", icoon: "icons/Smaak.png", map: "Brein",
        quote: `Eat bitter, taste sweet
        <br><br>- Rick Riordon`
      },
      { naam: "Oog", icoon: "icons/Oog.png", map: "Biologie", 
        quote: `Eye contact is way more intimate than words will ever be 
        <br><br>- Faraaz Kazi`
      },
      { naam: "Geluid", icoon: "icons/Geluid.png", map: "Brein",
        quote: `Everything in the world has a spirit which is released by its sound
        <br><br>- Oskar Fischinger`
      }
    ]
  },
  {
    input: [
      ["Coelacanthen", "Zenuwen"], ["Tiktaalik", "Zenuwen"], ["Longvissen", "Zenuwen"], ["Haaien", "Zenuwen"],
      ["Holocefalen", "Zenuwen"], ["Wimpelalen", "Zenuwen"], ["Oerneopterygen", "Zenuwen"], ["Kevers", "Zenuwen"],
      ["Muggen", "Zenuwen"], ["Vliegen", "Zenuwen"], ["Vlinders", "Zenuwen"], ["Oertetrapoden", "Zenuwen"],
      ["Salamanders", "Zenuwen"], ["Kikkers", "Zenuwen"], ["Padden", "Zenuwen"], ["Oersynapsiden", "Zenuwen"],
      ["Oeranapsiden", "Zenuwen"], ["Oerdiapsiden", "Zenuwen"], ["Sprinkhanen", "Zenuwen"], ["Schildpadden", "Zenuwen"]
    ],
    hint: `Probeer de zenuwen nog eens, volgens mij hoor ik iets...`,
    output: [
      { naam: "Brein", icoon: "icons/Brein.png", map: "Brein", 
        quote: `The great events of the world take place in the brain 
        <br><br>- Oscar Wilde`
      },
      { naam: "Tast", icoon: "icons/Tast.png", map: "Brein", 
        quote: `Too often we underestimate the power of touch 
        <br><br>- Leo Buscaglia`
      },
      { naam: "Pijn", icoon: "icons/Pijn.png", map: "Brein",
        quote: `Pain is inevitable. Suffering is optional
        <br><br>- Haruki Murakami`
      },
      { naam: "Geur", icoon: "icons/Geur.png", map: "Brein", 
        quote: `Smell is a potent wizard that transports you across thousands of miles and all the years you have lived 
        <br><br>- Helen Keller`
      },
      { naam: "Smaak", icoon: "icons/Smaak.png", map: "Brein",
        quote: `Eat bitter, taste sweet
        <br><br>- Rick Riordon`
      },
      { naam: "Oog", icoon: "icons/Oog.png", map: "Biologie", 
        quote: `Eye contact is way more intimate than words will ever be 
        <br><br>- Faraaz Kazi`
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
      ["Koraal", "Kalk"], ["Oerbilateria", "Kalk"], ["Wormen", "Kalk"], ["Zeesterren", "Kalk"]
    ],
    hint: `Wat leven wel niet met een beetje kalk kan doen...`,
    vers: `Toen maakten Wij van de Druppel een Bloedklodder, daarna maakten Wij van de Bloedklodder een kneedbaar klompje,
    daarna maakten Wij van het kneedbaar klmpje Botten, daarna bekleedden Wij de Botten met Vlees, toen lieten Wij het 
    groeien tot een nieuwe Creatie, aldus gezegend zij God - de Schepper der Scheppers
    <br><br>De Gelovigen (23:14)`,
    output: [
      { naam: "Bot", icoon: "icons/Bot.png", map: "Biologie", 
        quote: `In a way, humans are not made of skin and bones as such, as we're made of stories
        <br><br>- Sue Monk Kidd`
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
    input: ["Oercnidaria", "Evolutie"],
    hint: `Ik houd van symmetrie, maar kan jij je symmetrische dieren voorstellen?`,
    tijd: 580_000_000,
    output: [
      { naam: "Kwallen", icoon: "icons/Kwallen.png", map: "Waterdieren", 
        quote: `A jellyfish is little more than a pulsating bell, a tassel of trailing tentacles and a single digestive 
        opening through which it both eats and excretes - as regrettable an example of economy of design as ever was 
        <br><br>- Jeffrey Kluger`
      },
      { naam: "Zeeanemonen", icoon: "icons/Zeeanemonen.png", map: "Waterdieren", 
        quote: `The sea-anemone, though fixed to the rock, is a most voracious and living creature 
        <br><br>- Charles Darwin`
      },
      { naam: "Parasieten", icoon: "icons/Parasieten.png", map: "Pril leven", 
        quote: `Thought, like any parasite, cannot exist without a compliant host
        <br><br>- Bernard Beckett`
      }
    ]
  },
  {
    input: [
      ["Kwallen", "Bacteriën"], ["Kwallen", "Detritus"], ["Kwallen", "Blauwalgen"], ["Kwallen", "Leca"], 
      ["Kwallen", "Schimmel"], ["Kwallen", "Sponzen"], ["Kwallen", "Archaeplastiden"], ["Kwallen", "Gist"],
      ["Kwallen", "Rode algen"], ["Kwallen", "Groene algen"], ["Kwallen", "Amoeben"], ["Kwallen", "Foraminiferen"],
      ["Kwallen", "Stralendiertjes"], ["Kwallen", "Oercnidaria"], ["Kwallen", "Oerbilateria"],
      ["Kwallen", "Oertrochozoa"], ["Kwallen", "Wormen"], ["Kwallen", "Beerdiertjes"], ["Kwallen", "Mijten"],
      ["Kwallen", "Krill"]
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
      ["Zeeanemonen", "Bacteriën"], ["Zeeanemonen", "Detritus"], ["Zeeanemonen", "Blauwalgen"], ["Zeeanemonen", "Leca"], 
      ["Zeeanemonen", "Schimmel"], ["Zeeanemonen", "Sponzen"], ["Zeeanemonen", "Archaeplastiden"], ["Zeeanemonen", "Gist"],
      ["Zeeanemonen", "Rode algen"], ["Zeeanemonen", "Groene algen"], ["Zeeanemonen", "Amoeben"], 
      ["Zeeanemonen", "Foraminiferen"], ["Zeeanemonen", "Stralendiertjes"], ["Zeeanemonen", "Oercnidaria"], 
      ["Zeeanemonen", "Oerbilateria"], ["Zeeanemonen", "Groenwieren"], ["Zeeanemonen", "Oertrochozoa"],
      ["Zeeanemonen", "Wormen"], ["Zeeanemonen", "Beerdiertjes"], ["Zeeanemeonen", "Mijten"], ["Zeeanemonen", "Krill"]
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
      ["Aardolie", "Warmte"], ["Aardolie", "Druk"]
    ],
    output: [
      { naam: "Gas", icoon: "icons/Gas.png", map: "Lucht",
      quote: `Hydrogen is a light, odorless gas, which, given enough time, turns into people 
      <br><br>- Edward Harrison`
      }
    ]
  },
//------------ THRESHOLD 3: CAMBRISCHE EXPLOSIE --------------//
  {
    input: ["Oerbilateria", "Evolutie"],
    hint: `Nu zijn de omstandigheden juist om de bilateria te laten floreren...`,
    tijd: 541_000_000,
    output: [
      { naam: "Wormen", icoon: "icons/Wormen.png", map: "Waterdieren", 
        quote: `Along the shores and in the shallow seas live countless worms whose quiet labors help shape the ocean floor 
        <br><br>- Rachel Carson`
      },
      { naam: "Oertrochozoa", icoon: "icons/Oertrochozoa.png", map: "Waterdieren", 
        quote: `When animals first evolved skeletons and shells, the fossil record suddenly found its voice
        <br><br>- Andrew H. Knoll`
      },
      { naam: "Zeesterren", icoon: "icons/Zeesterren.png", map: "Waterdieren", 
        quote: `In the tidal pools the starfish cling to the rocks while the waves break over them 
        <br><br>- Rachel Carson`
      }
    ],
    uitleg: {
      threshold: {
        titel: "Cambrische Explosie", 
        tekst: "Je moet eerst nog wat meer halen...",
        requirements: ["Woestijn", "Sneeuw", "Hagel", "Orkaan", "Strand", "Overstroming", 
          "Zandsteen", "Kalksteen", "Kwartsiet", "Calciet", "Sulfaat", "Gneis", "Leisteen", 
          "Dood", "Stromatolieten", "Fotosynthese", "Amoeben", "Foraminiferen", "Stralendiertjes", 
          "Aarde", "Roodwieren", "Groenwieren", "Slijm", "Rif", 
          "Brein", "Steenwortelalgen", "Kwallen", "Zeeanemonen"]
      },
      normal: {
        achtergrond: "afb/cambrischeexplosie.png",
        titel: "CAMBRISCHE EXPLOSIE",
        tekst: `
        <span>In de gesteenten lezen wij in laagjes wanneer Wij wat creëerden. 541 miljoen jaar geleden zien wij plots
        op grote schaal macroscopische fossielen van schelpen, skeletten en pantsers. Vernoemd naar de eerste vindplek in 
        Cambria, Wales, zien wij hoe meer dan de helft van alle fyla (de grootste bekende groepen van leven) ontstond in de 
        periode van 541 tot 485 miljoen jaar geleden: het Cambrium.</span>
        <br><br>
        <span>Het uiteenvallen van supercontinent Pannotia creëerde nieuwe oceanen en lange, grillige kustlijnen. Continenten
        dreven uiteen, riftscheuren en vulkanisme verrijkten de zeeën met mineralen zoals calcium (kalk) en silica 
        (silicium) - bouwstoffen van de fossielen. Uit de grote toename van het calcietgebruik ontstonden dikke lagen krijt, 
        zoals te zien bij de witte kliffen van Dover.</span>
        <br><br>
        <span>De Cambrische wereld was een broeikaswereld: het CO2-gehalte lag veel hoger dan nu, temperaturen waren immens
        hoog en nergens was poolijs te bekennen. Met name in de warme, zuurstofrijker wordende ondiepe zeeën was waar de
        vroege geleedpotige trilobieten met extern skelet en gewervelde wormen met intern skelet leefden. De gewervelden 
        hadden nog niet de geconcentreerde bol neuronen die wij nu hersenen noemen, maar wel zenuwstelsels met honderden tot 
        duizenden zenuwcellen in een netwerk. Zij konden veel informatie verwerken, aangevoerd door sensorcellen, om 
        vervolgens beslissingen door te geven aan gespecialiseerde organen.</span>`,
      }
    }
  },
  {
    input: [
      ["Wormen", "Bacteriën"], ["Wormen", "Detritus"], ["Wormen", "Blauwalgen"], ["Wormen", "Leca"], ["Wormen", "Schimmel"], 
      ["Wormen", "Sponzen"], ["Wormen", "Archaeplastiden"], ["Wormen", "Gist"], ["Wormen", "Rode algen"], 
      ["Wormen", "Groene algen"], ["Wormen", "Amoeben"], ["Wormen", "Foraminiferen"], ["Wormen", "Stralendiertjes"], 
      ["Wormen", "Oercnidaria"], ["Wormen", "Oerbilateria"], ["Wormen", "Groenwieren"], ["Wormen", "Beerdiertjes"], 
      ["Wormen", "Mijten"], ["Wormen", "Krill"]
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
      ["Oertrochozoa", "Bacteriën"], ["Oertrochozoa", "Detritus"], ["Oertrochozoa", "Blauwalgen"], ["Oertrochozoa", "Leca"], 
      ["Oertrochozoa", "Schimmel"], ["Oertrochozoa", "Sponzen"], ["Oertrochozoa", "Archaeplastiden"], 
      ["Oertrochozoa", "Gist"], ["Oertrochozoa", "Rode algen"], ["Oertrochozoa", "Groene algen"], 
      ["Oertrochozoa", "Amoeben"], ["Oertrochozoa", "Foraminiferen"], ["Oertrochozoa", "Stralendiertjes"],
      ["Oertrochozoa", "Oercnidaria"], ["Oertrochozoa", "Oerbilateria"], ["Oertrochozoa", "Groenwieren"],
      ["Oertrochozoa", "Wormen"], ["Oertrochozoa", "Beerdiertjes"], ["Oertrochozoa", "Mijten"], ["Oertrochozoa", "Krill"]
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
      }
    ]
  },
  {
    input: [
      ["Zeesterren", "Bacteriën"], ["Zeesterren", "Detritus"], ["Zeesterren", "Blauwalgen"], ["Zeesterren", "Leca"],
      ["Zeesterren", "Schimmel"], ["Zeesterren", "Sponzen"], ["Zeesterren", "Archaeplastiden"], ["Zeesterren", "Gist"],
      ["Zeesterren", "Rode algen"], ["Zeesterren", "Groene algen"], ["Zeesterren", "Amoeben"], 
      ["Zeesterren", "Foraminiferen"], ["Zeesterren", "Stralendiertjes"], ["Zeesterren", "Oercnidaria"], 
      ["Zeesterren", "Oerbilateria"], ["Zeesterren", "Roodiweren"], ["Zeesterren", "Groenwieren"], 
      ["Zeesterren", "Oertrochozoa"], ["Zeesterren", "Wormen"], ["Zeesterren", "Beerdiertjes"], ["Zeesterren", "Mijten"],
      ["Zeestserren", "Krill"]
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
    input: ["Zeesterren", "Tweekleppigen"],
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
    input: ["Oerbilateria", "Bot"],
    hint: `Die kleine vooroudertjes van de wormen waren heel handig met botten.`,
    output: [
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
      },
      { naam: "Zee-egels", icoon: "icons/Zee-egels.png", map: "Waterdieren", 
        quote: `Why should I copy this owl, this sea urchin? Why should I try to imitate nature? I might just as well try
        to trace a perfect circle
        <br><br>- Pablo Picasso`
      }
    ],
    uitleg: {
      thresholdElement: {
        naam: "Wormen", 
        titel: "Probeer opnieuw in het Cambrium",
        tekst: `Alles moet netjes klaarstaan voor de Cambrische Explosie kan beginnen...`
      }
    }
  },
  {
    input: [
      ["Lancetvisjes", "Bacteriën"], ["Lancetvisjes", "Detritus"], ["Lancetvisjes", "Blauwalgen"], 
      ["Lancetvisjes", "Leca"], ["Lancetvisjes", "Schimmel"], ["Lancetvisjes", "Sponzen"], 
      ["Lancetvisjes", "Archaeplastiden"], ["Lancetvisjes", "Gist"], ["Lancetvisjes", "Rode algen"], 
      ["Lancetvisjes", "Groene algen"], ["Lancetvisjes", "Amoeben"], ["Lancetvisjes", "Foraminiferen"],
      ["Lancetvisjes", "Stralendiertjes"], ["Lancetvisjes", "Oercnidaria"], ["Lancetvisjes", "Oerbilateria"],
      ["Lancetvisjes", "Roodwieren"], ["Lancetvisjes", "Groenwieren"], ["Lancetvisjes", "Oertrochozoa"],
      ["Lancetvisjes", "Wormen"], ["Lancetvisjes", "Zeesterren"], ["Lancetvisjes", "Beerdiertjes"], 
      ["Lancetvisjes", "Mijten"], ["Lancetvisjes", "Krill"]
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
      ["Agnathen", "Bacteriën"], ["Agnathen", "Detritus"], ["Agnathen", "Blauwalgen"], ["Agnathen", "Leca"], 
      ["Agnathen", "Schimmel"], ["Agnathen", "Sponzen"], ["Agnathen", "Archaeplastiden"], ["Agnathen", "Gist"], 
      ["Agnathen", "Rode algen"], ["Agnathen", "Groene algen"], ["Agnathen", "Amoeben"], ["Agnathen", "Foraminiferen"],
      ["Agnathen", "Stralendiertjes"], ["Agnathen", "Oercnidaria"], ["Agnathen", "Oerbilateria"], 
      ["Agnathen", "Roodwieren"], ["Agnathen", "Groenwieren"], ["Agnathen", "Oertrochozoa"], ["Agnathen", "Wormen"], 
      ["Agnathen", "Zeesterren"], ["Agnathen", "Lancetvisjes"], ["Agnathen", "Beerdiertjes"], ["Agnathen", "Mijten"], 
      ["Agnathen", "Krill"]
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
      ["Oergeleedpotigen", "Bacteriën"], ["Oergeleedpotigen", "Detritus"], ["Oergeleedpotigen", "Blauwalgen"], 
      ["Oergeleedpotigen", "Schimmel"], ["Oergeleedpotigen", "Gist"], ["Oergeleedpotigen", "Rode algen"],
      ["Oergeleedpotigen", "Groene algen"], ["Oergeleedpotigen", "Amoeben"], ["Oergeleedpotigen", "Foraminiferen"], 
      ["Oergeleedpotigen", "Stralendiertjes"], ["Oergeleedpotigen", "Oercnidaria"], ["Oergeleedpotigen", "Oerbilateria"],
      ["Oergeleedpotigen", "Roodwieren"], ["Oergeleedpotigen", "Groenwieren"], ["Oergeleedpotigen", "Oertrochozoa"],
      ["Oergeleedpotigen", "Wormen"], ["Oergeleedpotigen", "Beerdiertjes"], ["Oergeleedpotigen", "Mijten"], 
      ["Oergeleedpotigen", "Krill"]
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
      ["Manteldieren", "Bacteriën"], ["Manteldieren", "Detritus"], ["Manteldieren", "Blauwalgen"], 
      ["Manteldieren", "Schimmel"], ["Manteldieren", "Gist"], ["Manteldieren", "Rode algen"], 
      ["Manteldieren", "Groene algen"], ["Manteldieren", "Amoeben"], ["Manteldieren", "Foraminiferen"], 
      ["Manteldieren", "Stralendiertjes"], ["Manteldieren", "Oercnidaria"], ["Manteldieren", "Oerbilateria"], 
      ["Manteldieren", "Oertrochozoa"], ["Manteldieren", "Wormen"], ["Manteldieren", "Beerdiertjes"], 
      ["Manteldieren", "Mijten"], ["Manteldieren", "Krill"]
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
      ["Beerdiertjes", "Bacteriën"], ["Beerdiertjes", "Detritus"], ["Beerdiertjes", "Blauwalgen"], 
      ["Beerdiertjes", "Leca"], ["Beerdiertjes", "Schimmel"], ["Beerdiertjes", "Gist"], ["Beerdiertjes", "Rode algen"], 
      ["Beerdiertjes", "Groene algen"], ["Beerdiertjes", "Amoeben"], ["Beerdiertjes", "Foraminiferen"], 
      ["Beerdiertjes", "Stralendiertjes"], ["Beerdiertjes", "Oercnidaria"], ["Beerdiertjes", "Oerbilateria"]
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
    input: [
      ["Zee-egels", "Bacteriën"], ["Zee-egels", "Detritus"], ["Zee-egels", "Blauwalgen"], 
      ["Zee-egels", "Schimmel"], ["Zee-egels", "Sponzen"], ["Zee-egels", "Gist"], ["Zee-egels", "Rode algen"], 
      ["Zee-egels", "Groene algen"], ["Zee-egels", "Amoeben"], ["Zee-egels", "Foraminiferen"], 
      ["Zee-egels", "Stralendiertjes"], ["Zee-egels", "Oercnidaria"], ["Zee-egels", "Oerbilateria"], 
      ["Zee-egels", "Roodwieren"], ["Zee-egels", "Groenwieren"], ["Zee-egels", "Oertrochozoa"], ["Zee-egels", "Wormen"], 
      ["Zee-egels", "Beerdiertjes"], ["Zee-egels", "Beerdiertjes"]
    ],
    output: [
      { naam: "Zee-egels", icoon: "icons/Zee-egels.png", map: "Waterdieren", 
        quote: `Why should I copy this owl, this sea urchin? Why should I try to imitate nature? I might just as well try
        to trace a perfect circle
        <br><br>- Pablo Picasso`
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
      ["Steenwortelalgen", "Rivier"], ["Steenwortelalgen", "Meer"], ["Steenwortelalgen", "Ven"]
    ],
    hint: `Hoe zit het met algen in zoet water?`,
    tijd: 470_000_000,
    output: [
      { naam: "Mos", icoon: "icons/Mos.png", map: "Planten", 
        quote: `Every antique farm-house and moss-grown cottage is a picture
        <br><br>- Washington Irving`
      }
    ],
    uitleg: {
      thresholdElement: {
        naam: "Wormen", 
        titel: "Probeer opnieuw in het Cambrium",
        tekst: `Alles moet netjes klaarstaan voor de Cambrische Explosie kan beginnen...`
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
    ],
    uitleg: {
      thresholdElement: {
        naam: "Wormen", 
        titel: "Probeer opnieuw in het Cambrium",
        tekst: `Alles moet netjes klaarstaan voor de Cambrische Explosie kan beginnen...`
      }
    }
  },
  {
    input: [
      ["Agnathen", "Pijn"], ["Oergeleedpotigen", "Pijn"], ["Zeeslakken", "Pijn"], ["Trilobieten", "Pijn"], 
      ["Oercheliceraten", "Pijn"], ["Duizendpoten", "Pijn"], ["Oerkreeftjes", "Pijn"], ["Oerinsecten", "Pijn"], 
      ["Schorpioenen", "Pijn"], ["Spinnen", "Pijn"], ["Mijten", "Mijten"], ["Zwaardstaarten", "Pijn"], ["Krill", "Pijn"],
      ["Pissebedden", "Pijn"], ["Garnalen", "Pijn"], ["Kreeften", "Pijn"], ["Krabben", "Pijn"], ["Zilvervisjes", "Pijn"],
      ["Oerpolyneopteren", "Pijn"], ["Oerhymenopteren", "Pijn"], ["Luizen", "Pijn "], ["Kevers", "Pijn"], 
      ["Muggen", "Pijn"], ["Vliegen", "Pijn"], ["Vlinders", "Pijn"], ["Krekels", "Pijn"], ["Sprinkhanen", "Pijn"], 
      ["Wandelende takken", "Pijn"], ["Kakkerlakken", "Pijn"], ["Termieten", "Pijn"],
      
      ["Inktvissen", "Storm"], ["Inktvissen", "Orkaan"], ["Inktvissen", "Pijn"],
      ["Nautilussen", "Storm"], ["Nautilussen", "Orkaan"], ["Nautilussen", "Pijn"],
      ["Oerchondrichthyes", "Storm"], ["Oerchondrichthyes", "Orkaan"], ["Oerchondrichthyes", "Pijn"],
      ["Oerstraalvinnigen", "Storm"], ["Oerstraalvinnigen", "Orkaan"], ["Oerstraalvinnigen", "Pijn"],
      ["Coelacanthen", "Storm"], ["Coelacanthen", "Orkaan"], ["Coelacanthen", "Pijn"],
      ["Tiktaalik", "Storm"], ["Tiktaalik", "Orkaan"], ["Tiktaalik", "Pijn"],
      ["Longvissen", "Storm"], ["Longvissen", "Orkaan"], ["Longvissen", "Pijn"],
      ["Haaien", "Storm"], ["Haaien", "Orkaan"], ["Haaien", "Pijn"],
      ["Holocefalen", "Storm"], ["Holocefalen", "Orkaan"], ["Holocefalen", "Pijn"],
      ["Oerchondrostei", "Storm"], ["Oerchondrostei", "Orkaan"], ["Oerchondrostei", "Pijn"],
      ["Wimpelalen", "Storm"], ["Wimpelalen", "Orkaan"], ["Wimpelalen", "Pijn"],
      ["Oerneopterygen", "Storm"], ["Oerneopterygen", "Orkaan"], ["Oerneopterygen", "Pijn"],
      ["Oertetrapoden", "Storm"], ["Oertetrapoden", "Orkaan"], ["Oertetrapoden", "Pijn"],
      ["Oersynapsiden", "Storm"], ["Oersynapsiden", "Orkaan"], ["Oersynapsiden", "Pijn"],
      ["Oeranapsiden", "Storm"], ["Oeranapsiden", "Orkaan"], ["Oeranapsiden", "Pijn"],
      ["Oerdiapsiden", "Storm"], ["Oerdiapsiden", "Orkaan"], ["Oerdiapsiden", "Pijn"],
      ["Schildpadden", "Storm"], ["Schildpadden", "Orkaan"], ["Schildpadden", "Pijn"]
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
    input: ["Oertrochozoa", "Evolutie"],
    hint: `Van trochozoa is het een kleine stap naar de weekdieren.`, 
    output: [
      { naam: "Inktvissen", icoon: "icons/Inktvissen.png", map: "Waterdieren", 
        quote: `I would love to see a giant squid. Very few people have seen them. 
        And only about half a dozen people have seen one alive
        <br><br>- David Attenborough`
      }
    ]
  },
  {
    input: [
      ["Inktvissen", "Kwallen"], ["Inktvissen", "Wormen"], ["Inktvissen", "Oertrochozoa"], ["Inktvissen", "Lancetvisjes"], 
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
      ["Inktvissen", "Agnathen"], ["Inktvissen", "Oerstraalvinnigen"]
    ],
    vers: `Lees in naam van jouw Zorgdrager Die creëerde; Die creëerde de mens uit een bloedklodder
    <br><br>De Bloedklodder (96:1-2)`,
    output: [
      { naam: "Inktvissen", icoon: "icons/Inktvissen.png", map: "Waterdieren", 
        quote: `I would love to see a giant squid. Very few people have seen them. 
        And only about half a dozen people have seen one alive
        <br><br>- David Attenborough`
      },
      { naam: "Bloed", icoon: "icons/Bloed.png", map: "Biologie",
        quote: `We are linked by blood, and blood is memory without language
        <br><br>- Joyce Oates`
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
    input: ["Inktvissen", "Tweekleppigen"],
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
      },
      { naam: "Schelp", icoon: "icons/Schelp.png", map: "Biologie", 
        quote: `I see a broken shell and I remind myself that something might have needed setting free 
        <br><br>- Sara Pennypacker`
      }
    ]
  },
  {
    input: ["Oertrochozoa", "Schelp"],
    hint: `Geef bescherming aan de trochozoa want zij zijn zo week.`, 
    output: [
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
      ["Agnathen", "Virus"], ["Agnathen", "Parasieten"],
      ["Oergeleedpotigen", "Virus"], ["Oergeleedpotigen", "Parasieten"],
      ["Zwaardstaarten", "Virus"], ["Zwaardstaarten", "Parasieten"],
      ["Pissebedden", "Virus"], ["Pissebedden", "Parasieten"],
      ["Garnalen", "Virus"], ["Garnalen", "Parasieten"],
      ["Kreeften", "Virus"], ["Kreeften", "Parasieten"],
      ["Krabben", "Virus"], ["Krabben", "Parasieten"],
      ["Zilvervisjes", "Virus"], ["Zilvervisjes", "Parasieten"],
      ["Oerpolyneopteren", "Virus"], ["Oerpolyneopteren", "Parasieten"],
      ["Oerhymenopteren", "Virus"], ["Oerhymenopteren", "Parasieten"],
      ["Luizen", "Virus"], ["Luizen", "Parasieten"],
      ["Kevers", "Virus"], ["Kevers", "Parasieten"],
      ["Muggen", "Virus"], ["Muggen", "Parasieten"],
      ["Vliegen", "Virus"], ["Vliegen", "Parasieten"],
      ["Vlinders", "Virus"], ["Vlinders", "Parasieten"],
      ["Krekels", "Virus"], ["Krekels", "Parasieten"],
      ["Sprinkhanen", "Virus"], ["Sprinkhanen", "Parasieten"],
      ["Wandelende takken", "Virus"], ["Wandelende takken", "Parasieten"],
      ["Kakkerlakken", "Virus"], ["Kakkerlakken", "Parasieten"],
      ["Termieten", "Virus"], ["Termieten", "Parasieten"],
      
      ["Zeeslakken", "Virus"], ["Zeeslakken", "Schimmel"], ["Zeeslakken", "Parasieten"],
      ["Trilobieten", "Virus"], ["Trilobieten", "Schimmel"], ["Trilobieten", "Parasieten"],
      ["Oercheliceraten", "Virus"], ["Oercheliceraten", "Schimmel"], ["Oercheliceraten", "Parasieten"],
      ["Duizendpoten", "Virus"], ["Duizendpoten", "Schimmel"], ["Duizendpoten", "Parasieten"],
      ["Oerkreeftjes", "Virus"], ["Oerkreeftjes", "Schimmel"], ["Oerkreeftjes", "Parasieten"],
      ["Oerinsecten", "Virus"], ["Oerinsecten", "Schimmel"], ["Oerinsecten", "Parasieten"],
      ["Nautilussen", "Virus"], ["Nautilussen", "Schimmel"], ["Nautilussen", "Parasieten"],
      ["Schorpioenen", "Virus"], ["Schorpioenen", "Schimmel"], ["Schorpioenen", "Parasieten"],
      ["Spinnen", "Virus"], ["Spinnen", "Schimmel"], ["Spinnen", "Parasieten"],
      ["Mijten", "Virus"], ["Mijten", "Schimmel"], ["Mijten", "Parasieten"],
      ["Krill", "Virus"], ["Krill", "Schimmel"], ["Krill", "Parasieten"],
      
      ["Inktvissen", "Bacteriën"], ["Inktvissen", "Virus"], ["Inktvissen", "Schimmel"], ["Inktvissen", "Parasieten"],
      ["Oerchondrichthyes", "Bacteriën"], ["Oerchondrichthyes", "Virus"], ["Oerchondrichthyes", "Schimmel"], 
      ["Oerchondrichthyes", "Parasieten"],
      ["Oerstraalvinnigen", "Bacteriën"], ["Oerstraalvinnigen", "Virus"], ["Oerstraalvinnigen", "Schimmel"], 
      ["Oerstraalvinnigen", "Parasieten"],
      ["Coelacanthen", "Bacteriën"], ["Coelacanthen", "Virus"], ["Coelacanthen", "Schimmel"], 
      ["Coelacanthen", "Parasieten"],
      ["Tiktaalik", "Bacteriën"], ["Tiktaalik", "Virus"], ["Tiktaalik", "Schimmel"], ["Tiktaalik", "Parasieten"],
      ["Longvissen", "Bacteriën"], ["Longvissen", "Virus"], ["Longvissen", "Schimmel"], ["Longvissen", "Parasieten"],
      ["Haaien", "Bacteriën"], ["Haaien", "Virus"], ["Haaien", "Schimmel"], ["Haaien", "Parasieten"],
      ["Holocefalen", "Bacteriën"], ["Holocefalen", "Virus"], ["Holocefalen", "Schimmel"], ["Holocefalen", "Parasieten"],
      ["Oerchondrostei", "Bacteriën"], ["Oerchondrostei", "Virus"], ["Oerchondrostei", "Schimmel"], 
      ["Oerchondrostei", "Parasieten"],
      ["Wimpelalen", "Bacteriën"], ["Wimpelalen", "Virus"], ["Wimpelalen", "Schimmel"], 
      ["Wimpelalen", "Parasieten"],
      ["Oerneopterygen", "Bacteriën"], ["Oerneopterygen", "Virus"], ["Oerneopterygen", "Schimmel"], 
      ["Oerneopterygen", "Parasieten"],
      ["Oertetrapoden", "Bacteriën"], ["Oertetrapoden", "Virus"], ["Oertetrapoden", "Schimmel"], 
      ["Oertetrapoden", "Parasieten"],
      ["Salamanders", "Bacteriën"], ["Salamanders", "Virus"], ["Salamanders", "Schimmel"], ["Salamanders", "Parasieten"],
      ["Kikkers", "Bacteriën"], ["Kikkers", "Virus"], ["Kikkers", "Schimmel"], ["Kikkers", "Parasieten"],
      ["Padden", "Bacteriën"], ["Padden", "Virus"], ["Padden", "Schimmel"], ["Padden", "Parasieten"],
      ["Oersynapsiden", "Bacteriën"], ["Oersynapsiden", "Virus"], ["Oersynapsiden", "Schimmel"], 
      ["Oersynapsiden", "Parasieten"],
      ["Oeranapsiden", "Bacteriën"], ["Oeranapsiden", "Virus"], ["Oeranapsiden", "Schimmel"], 
      ["Oeranapsiden", "Parasieten"],
      ["Oerdiapsiden", "Bacteriën"], ["Oerdiapsiden", "Virus"], ["Oerdiapsiden", "Schimmel"], 
      ["Oerdiapsiden", "Parasieten"],
      ["Schildpadden", "Bacteriën"], ["Schildpadden", "Virus"], ["Schildpadden", "Schimmel"], 
      ["Schildpadden", "Parasieten"]
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
    input: [
      ["Agnathen", "Agnathen"], ["Oergeleedpotigen", "Oergeleedpotigen"], ["Inktvissen", "Inktvissen"], 
      ["Zeeslakken", "Zeeslakken"], ["Trilobieten", "Trilobieten"], ["Oercheliceraten", "Oercheliceraten"], 
      ["Duizendpoten", "Duizendpoten"], ["Oerkreeftjes", "Oerkreeftjes"], ["Oerinsecten", "Oerinsecten"], 
      ["Nautilussen", "Nautilussen"], ["Schorpioenen", "Schorpioenen"], ["Spinnen", "Spinnen"], 
      ["Zwaardstaarten", "Zwaardstaarten"], ["Krill", "Krill"], ["Oerchondrichthyes", "Oerchondrichthyes"], 
      ["Oerstraalvinnigen", "Oerstraalvinnigen"], ["Coelacanthen", "Coelacanthen"], ["Tiktaalik", "Tiktaalik"], 
      ["Longvissen", "Longvissen"], ["Pissebedden", "Pissebedden"], ["Garnalen", "Garnalen"], ["Kreeften", "Kreeften"], 
      ["Krabben", "Krabben"], ["Zilvervisjes", "Zilvervisjes"], ["Holocefalen", "Holocefalen"], 
      ["Oerchondrostei", "Oerchondrostei"], ["Wimpelalen", "Wimpelalen"], ["Oerneopterygen", "Oerneopterygen"], 
      ["Oerpolyneopteren", "Oerpolyneopteren"], ["Oerhymenopteren", "Oerhymenopteren"], ["Luizen", "Luizen"], 
      ["Kevers", "Kevers"], ["Muggen", "Muggen"], ["Vliegen", "Vliegen"], ["Vlinders", "Vlinders"], 
      ["Oertetrapoden", "Oertetrapoden"], ["Salamanders", "Salamanders"], ["Kikkers", "Kikkers"], ["Padden", "Padden"],
      ["Oersynapsiden", "Oersynapsiden"], ["Oeranapsiden", "Oeranapsiden"], ["Oerdiapsiden", "Oerdiapsiden"],
      ["Krekels", "Krekels"], ["Sprinkhanen", "Sprinkhanen"], ["Wandelende takken", "Wandelende takken"], 
      ["Kakkerlakken", "Kakkerlakken"], ["Schildpadden", "Schildpadden"]
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
    input: ["Haaien", "Haaien"],
    vers: `Lees in naam van jouw Zorgdrager Die creëerde; Die creëerde de mens uit een bloedklodder
    <br><br>De Bloedklodder (96:1-2)`,
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
      },
      { naam: "Bloed", icoon: "icons/Bloed.png", map: "Biologie",
        quote: `We are linked by blood, and blood is memory without language
        <br><br>- Joyce Oates`
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
      { naam: "Duizendpoten", icoon: "icons/Duizendpoten.png", map: "Klein landleven", 
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
    input: [
      ["Duizendpoten", "Wormen"], ["Duizendpoten", "Oertrochozoa"], ["Duizendpoten", "Oergeleedpotigen"], 
      ["Duizendpoten", "Beerdiertjes"], ["Duizendpoten", "Oercheliceraten"], ["Duizendpoten", "Oerkreeftjes"],
      ["Duizendpoten", "Oerinsecten"], ["Duizendpoten", "Garnalen"]
    ],
    output: [
      { naam: "Duizendpoten", icoon: "icons/Duizendpoten.png", map: "Klein landleven", 
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
      ["Nautilussen", "Kwallen"], ["Nautilussen", "Wormen"], 
      ["Nautilussen", "Oertrochozoa"], ["Nautilussen", "Oergeleedpotigen"], ["Nautilussen", "Manteldieren"], 
      ["Nautilussen", "Oerkreeftjes"], ["Nautilussen", "Krill"], ["Nautilussen", "Garnalen"], ["Nautilussen", "Kreeften"], 
      ["Nautilussen", "Krabben"]
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
    input: [
      ["Nautilussen", "Lancetvisjes"], ["Nautilussen", "Agnathen"], ["Nautilussen", "Oerstraalvinnigen"]
    ],
    vers: `Lees in naam van jouw Zorgdrager Die creëerde; Die creëerde de mens uit een bloedklodder
    <br><br>De Bloedklodder (96:1-2)`,
    output: [
      { naam: "Nautilussen", icoon: "icons/Nautilussen.png", map: "Waterdieren", 
        quote: `You don't have to bee Greek to enjoy this one
        <br><br>- Jeff Smith`
      },
      { naam: "Bloed", icoon: "icons/Bloed.png", map: "Biologie",
        quote: `We are linked by blood, and blood is memory without language
        <br><br>- Joyce Oates`
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
      ["Inktvissen", "Licht"], ["Inktvissen", "Kleur"],
      ["Nautilussen", "Licht"], ["Nautilussen", "Kleur"],
      ["Oerchondrichthyes", "Licht"], ["Oerchondrichthyes", "Kleur"],
      ["Oerstraalvinnigen", "Licht"], ["Oerstraalvinnigen", "Kleur"],
      ["Coelacanthen", "Licht"], ["Coelacanthen", "Kleur"],
      ["Tiktaalik", "Licht"], ["Tiktaalik", "Kleur"],
      ["Longvissen", "Licht"], ["Longvissen", "Kleur"],
      ["Haaien", "Licht"], ["Haaien", "Kleur"],
      ["Holocefalen", "Licht"], ["Holocefalen", "Kleur"],
      ["Oerchondrostei", "Licht"], ["Oerchondrostei", "Kleur"],
      ["Wimpelalen", "Licht"], ["Wimpelalen", "Kleur"],
      ["Oerneopterygen", "Licht"], ["Oerneopterygen", "Kleur"],
      ["Oertetrapoden", "Licht"], ["Oertetrapoden", "Kleur"],
      ["Salamanders", "Licht"], ["Salamanders", "Kleur"],
      ["Kikkers", "Licht"], ["Kikkers", "Kleur"],
      ["Padden", "Licht"], ["Padden", "Kleur"],
      ["Oersynapsiden", "Licht"], ["Oersynapsiden", "Kleur"],
      ["Oeranapsiden", "Licht"], ["Oeranapsiden", "Kleur"],
      ["Oerdiapsiden", "Licht"], ["Oerdiapsiden", "Kleur"],
      ["Schildpadden", "Licht"], ["Schildpadden", "Kleur"]
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
      ["Zeeslakken", "Bacteriën"], ["Zeeslakken", "Blauwalgen"], ["Zeeslakken", "Leca"], ["Zeeslakken", "Amoeben"], 
      ["Zeeslakken", "Foraminiferen"], ["Zeeslakken", "Stralendiertjes"], ["Zeeslakken", "Sponzen"],
      ["Zeeslakken", "Rode algen"], ["Zeeslakken", "Groene algen"], ["Zeeslakken", "Roodwieren"], 
      ["Zeeslakken", "Groenwieren"], ["Zeeslakken", "Zeeanemonen"], ["Zeeslakken", "Wormen"]
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
      { naam: "Schorpioenen", icoon: "icons/Schorpioenen.png", map: "Klein landleven", 
        quote: `Scorpions are among the most ancient of terrestrial arthropods, 
        their basic body plan little changed for hundreds of millions of years
        <br><br>- Gary Polis`
      },
      { naam: "Spinnen", icoon: "icons/Spinnen.png", map: "Klein landleven", 
        quote: `The next time you see a spider web, please, pause and look a little closer.
        You'll be seeing one of the most high-performance materials known to man 
        <br><br>- Cheryl Hayashi`
      },
      { naam: "Mijten", icoon: "icons/Mijten.png", map: "Klein landleven", 
        quote: `Go pick up a mite — you’ve likely just found a new species or a fascinating example of nature’s diversity
        <br><br>- Ray Fisher`
      }
    ]
  },
  {
    input: [
      ["Krill", "Bacteriën"], ["Krill", "Detritus"], ["Krill", "Blauwalgen"], ["Krill", "Rode algen"], 
      ["Krill", "Groene algen"], ["Krill", "Amoeben"], ["Krill", "Foraminiferen"], ["Krill", "Stralendiertjes"], 
      ["Krill", "Roodwieren"], ["Krill", "Groenwieren"], ["Krill", "Beerdiertjes"]
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
  {
    input: [
      ["Zwaardstaarten", "Bacteriën"], ["Zwaardstaarten", "Detritus"], ["Zwaardstaarten", "Blauwalgen"], 
      ["Zwaardstaarten", "Leca"], ["Zwaardstaarten", "Schimmel"], ["Zwaardstaarten", "Archaeplastiden"], 
      ["Zwaardstaarten", "Gist"], ["Zwaardstaarten", "Rode algen"], ["Zwaardstaarten", "Groene algen"],
      ["Zwaardstaarten", "Amoeben"], ["Zwaardstaarten", "Foraminiferen"], ["Zwaardstaarten", "Stralendiertjes"],
      ["Zwaardstaarten", "Oercnidaria"], ["Zwaardstaarten", "Oerbilateria"], ["Zwaardstaarten", "Roodwieren"], 
      ["Zwaardstaarten", "Steenwortelalgen"], ["Zwaardstaarten", "Groenwieren"], ["Zwaardstaarten", "Oertrochozoa"],
      ["Zwaardstaarten", "Wormen"], ["Zwaaardstaarten", "Oergeleedpotigen"], ["Zwaardstaarten", "Beerdiertjes"],
      ["Zwaardstaarten", "Oercheliceraten"], ["Zwaardstaarten", "Oerkreeftjes"], ["Zwaardstaarten", "Oerinsecten"],
      ["Zwaardstaarten", "Mijten"], ["Zwaardstaarten", "Krill"], ["Zwaardstaarten", "Paddenstoelen"], 
      ["Zwaardstaarten", "Pissebedden"], ["Zwaardstaarten", "Zilvervisjes"], ["Zwaardstaarten", "Blad"], 
      ["Zwaardstaarten", "Oerpolyneopteren"], ["Zwaardstaarten", "Oerhymenopteren"], ["Zwaardstaarten", "Luizen"], 
      ["Zwaardstaarten", "Kevers"], ["Zwaardstaarten", "Muggen"], ["Zwaardstaarten", "Vliegen"], 
      ["Zwaardstaarten", "Vlinders"], ["Zwaardstaarten", "Krekels"], ["Zwaardstaarten", "Sprinkhanen"], 
      ["Zwaardstaarten", "Wandelende takken"], ["Zwaardstaarten", "Kakkerlakken"], ["Zwaardstaarten", "Termieten"]
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
      ["Schorpioenen", "Oertrochozoa"], ["Schorpioenen", "Wormen"], ["Schorpioenen", "Oergeleedpotigen"], 
      ["Schorpioenen", "Beerdiertjes"], ["Schorpioenen", "Trilobieten"], ["Schorpioenen", "Oercheliceraten"], 
      ["Schorpioenen", "Duizendpoten"], ["Schorpioenen", "Oerkreeftjes"], ["Schorpioenen", "Oerinsecten"], 
      ["Schorpioenen", "Spinnen"], ["Schorpioenen", "Mijten"], ["Schorpioenen", "Zwaardstaarten"],
      ["Schorpioenen", "Krill"], ["Schorpioenen", "Pissebedden"], ["Schorpioenen", "Zilvervisjes"],
      ["Schorpioenen", "Oerpolyneopteren"], ["Schorpioenen", "Oerhymenopteren"], ["Schorpioenen", "Luizen"],
      ["Schorpioenen", "Kevers"], ["Schorpioenen", "Muggen"], ["Schorpioenen", "Vliegen"], ["Schorpioenen", "Vlinders"],
      ["Schorpioenen", "Krekels"], ["Schorpioenen", "Sprinkhanen"], ["Schorpioenen", "Wandelende takken"],
      ["Schorpioenen", "Kakkerlakken"], ["Schorpioenen", "Termieten"]
    ],
    hint: `Het is evolutionair handig als prooien meteen verlamd worden door giftige stofjes.`,
    output: [
      { naam: "Schorpioenen", icoon: "icons/Schorpioenen.png", map: "Klein landleven", 
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
      ["Spinnen", "Oergeleedpotigen"], ["Spinnen", "Oercheliceraten"], ["Spinnen", "Duizendpoten"], 
      ["Spinnen", "Oerkreeftjes"], ["Spinnen", "Oerinsecten"], ["Spinnen", "Mijten"], ["Spinnen", "Pissebedden"], 
      ["Spinnen", "Zilvervisjes"], ["Spinnen", "Oerpolyneopteren"], ["Spinnen", "Oerhymenopteren"], 
      ["Spinnen", "Luizen"], ["Spinnen", "Kevers"], ["Spinnen", "Muggen"], ["Spinnen", "Vliegen"],
      ["Spinnen", "Vlinders"], ["Spinnen", "Krekels"], ["Spinnen", "Sprinkhanen"], ["Spinnen", "Wandelende takken"],
      ["Spinnen", "Kakkerlakken"], ["Spinnen", "Termieten"]
    ],
    output: [
      { naam: "Spinnen", icoon: "icons/Spinnen.png", map: "Klein landleven", 
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
    input: [
      ["Mijten", "Bacteriën"], ["Mijten", "Detritus"], ["Mijten", "Blauwalgen"], ["Mijten", "Schimmel"], ["Mijten", "Gist"], 
      ["Mijten", "Rode algen"], ["Mijten", "Groene algen"], ["Mijten", "Amoeben"], ["Mijten", "Foraminiferen"],
      ["Mijten", "Stralendiertjes"], ["Mijten", "Oerbilateria"], ["Mijten", "Beerdiertjes"]
    ],
    output: [
      { naam: "Mijten", icoon: "icons/Mijten.png", map: "Klein landleven", 
        quote: `Go pick up a mite — you’ve likely just found a new species or a fascinating example of nature’s diversity
        <br><br>- Ray Fisher`
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
    input: ["Korstmos", "Detritus"],
    output: [
      { naam: "Korstmos", icoon: "icons/Korstmos.png", map: "Pril leven", 
        quote: `Fermentation is the exhalation of a substance through the admixture of a ferment which,
        by virtue of its spirit, penetrates the mass and transforms it into its own nature
        <br><br>- Andreas Libavius`
      },
      { naam: "Glucose", icoon: "icons/Glucose.png", map: "Biologie",
       quote: `No matter how closely you examine the water, glucose, and electrolyte salts in the human brain, you can't 
       find the point where these molecules became conscious
       <br><br>- Nassim Taleb`
      }
    ]
  },
  {
    input: ["Truffels", "Detritus"],
    output: [
      { naam: "Truffels", icoon: "icons/Truffels.png", map: "Vruchten",
        quote: `All fungi are edible. Some fungi are only edible once
        <br><br>- Terry Pratchett`
      },
      { naam: "Glucose", icoon: "icons/Glucose.png", map: "Biologie",
       quote: `No matter how closely you examine the water, glucose, and electrolyte salts in the human brain, you can't 
       find the point where these molecules became conscious
       <br><br>- Nassim Taleb`
      }
    ]
  },
  {
    input: ["Paddenstoelen", "Detritus"],
    output: [
      { naam: "Paddenstoelen", icoon: "icons/Paddenstoelen.png", map: "Vruchten",
        quote: `Nature alone is antique, and the oldest art a mushroom
        <br><br>- Thomas Carlyle`
      },
      { naam: "Glucose", icoon: "icons/Glucose.png", map: "Biologie",
       quote: `No matter how closely you examine the water, glucose, and electrolyte salts in the human brain, you can't 
       find the point where these molecules became conscious
       <br><br>- Nassim Taleb`
      }
    ]
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
      { naam: "Tiktaalik", icoon: "icons/Tiktaalik.png", map: "Vissen",
        quote: `Tiktaalik is a fish with a neck and wrists — a mix of features that shows us how bodies were reshaped as 
        vertebrates moved onto land
        <br><br>- Neil Shubin`
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
    input: [
      ["Oerstraalvinnigen", "Oertrochozoa"], ["Oerstraalvinnigen", "Wormen"], ["Oerstraalvinnigen", "Lancetivsjes"], 
      ["Oerstraalvinnigen", "Oergeleedpotigen"], ["Oerstraalvinnigen", "Oerkreeftjes"], 
      ["Oerstraalvinnigen", "Oerinsecten"], ["Oerstraalvinnigen", "Krill"], ["Oerstraalvinnigen", "Garnalen"]
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
    input: [
      ["Oerstraalvinnigen", "Agnathen"]
    ],
    vers: `Lees in naam van jouw Zorgdrager Die creëerde; Die creëerde de mens uit een bloedklodder
    <br><br>De Bloedklodder (96:1-2)`,
    output: [
      { naam: "Oerstraalvinnigen", icoon: "icons/Oerstraalvinnigen.png", map: "Vissen", 
        quote: `In order to see a fish you must watch the water
        <br><br>- Bodhidharma`
      },
      { naam: "Bloed", icoon: "icons/Bloed.png", map: "Biologie",
        quote: `We are linked by blood, and blood is memory without language
        <br><br>- Joyce Oates`
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
      ["Oerchondrichthyes", "Wormen"], ["Oerchondrichthyes", "Lancetvisjes"], ["Oerchondrichthyes", "Oergeleedpotigen"], 
      ["Oerchondrichthyes", "Oerkreeftjes"], ["Oerchondrichthyes", "Oerinsecten"], ["Oerchondrichthyes", "Krill"], 
      ["Oerchondrichthyes", "Garnalen"]
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
    input: [
      ["Oerchondrichthyes", "Agnathen"], ["Oerchondrichthyes", "Oerstraalvinnigen"], ["Oerchondrichthyes", "Coelacanthen"], 
      ["Oerchondrichthyes", "Tiktaalik"], ["Oerchondrichthyes", "Longvissen"], ["Oerchondrichthyes", "Oerchondrostei"],
      ["Oerchondrichthyes", "Wimpelalen"], ["Oerchondrichthyes", "Oerneopterygen"]
    ],
    vers: `Lees in naam van jouw Zorgdrager Die creëerde; Die creëerde de mens uit een bloedklodder
    <br><br>De Bloedklodder (96:1-2)`,
    output: [
      { naam: "Oerchondrichthyes", icoon: "icons/Oerchondrichthyes.png", map: "Vissen",
        quote: `Fishes live in the sea, as men do a-land; the great ones eat up the little ones
        <br><br>- William Shakespeare`
      },
      { naam: "Bloed", icoon: "icons/Bloed.png", map: "Biologie",
        quote: `We are linked by blood, and blood is memory without language
        <br><br>- Joyce Oates`
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
      ["Coelacanthen", "Wormen"], ["Coelacanthen", "Lancetvisjes"], ["Coelacanthen", "Oergeleedpotigen"], 
      ["Coelacanthen", "Oerkreeftjes"], ["Coelacanthen", "Oerinsecten"], ["Coelacanthen", "Krill"], 
      ["Coelacanthen", "Garnalen"]
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
    input: [
      ["Coelacanthen", "Agnathen"], ["Coelacanthen", "Inktvissen"], ["Coelacanthen", "Oerstraalvinnigen"]
    ],
    vers: `Lees in naam van jouw Zorgdrager Die creëerde; Die creëerde de mens uit een bloedklodder
    <br><br>De Bloedklodder (96:1-2)`,
    output: [
      { naam: "Coelacanthen", icoon: "icons/Coelacanthen.png", map: "Vissen",
        quote: `Ideas are like fish. If you want to catch little fish, you can stay in the shallow water.
        But if you want to catch the big fish, you've got to go deeper. Down deep, the fish are more powerful and
        more pure
        <br><br>- David Lynch`
      },
      { naam: "Bloed", icoon: "icons/Bloed.png", map: "Biologie",
        quote: `We are linked by blood, and blood is memory without language
        <br><br>- Joyce Oates`
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
      ["Tiktaalik", "Wormen"], ["Tiktaalik", "Lancetvisjes"], ["Tiktaalik", "Oergeleedpotigen"],
      ["Tiktaalik", "Oerkreeftjes"], ["Tiktaalik", "Oerinsecten"], ["Tiktaalik", "Krill"], ["Tiktaalik", "Pissebedden"], 
      ["Tiktaalik", "Garnalen"]
    ],
    output: [
      { naam: "Tiktaalik", icoon: "icons/Tiktaalik.png", map: "Vissen",
        quote: `Tiktaalik is a fish with a neck and wrists — a mix of features that shows us how bodies were reshaped as 
        vertebrates moved onto land
        <br><br>- Neil Shubin`
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
      ["Longvissen", "Detritus"], ["Longvissen", "Blauwalgen"], ["Longvissen", "Archaeplastiden"], 
      ["Longvissen", "Rode algen"], ["Longvissen", "Groene algen"], ["Longvissen", "Roodwieren"], 
      ["Longvissen", "Groenwieren"], ["Longvissen", "Wormen"], ["Longvissen", "Mos"], ["Longvissen", "Krill"], 
      ["Longvissen", "Oervaatplanten"], ["Longvissen", "Korstmos"], ["Longvissen", "Garnalen"], ["Longvissen", "Blad"], 
      ["Longvissen", "Varens"], ["Longvissen", "Oerzaadplanten"]
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
    input: ["Oerkreeftjes", "Evolutie"],
    hint: `Uit de eerste kreeftachtige verschijnen een hoop herkenbare soorten.`,
    output: [
      { naam: "Pissebedden", icoon: "icons/Pissebedden.png", map: "Klein landleven", 
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
      ["Pissebedden", "Bacteriën"], ["Pissebedden", "Detritus"], ["Pissebedden", "Blauwalgen"], ["Pissebedden", "Schimmel"],
      ["Pissebedden", "Archaeplastiden"], ["Pissebedden", "Gist"], ["Pissebedden", "Rode algen"], 
      ["Pissebedden", "Groene algen"], ["Pissebedden", "Roodwieren"], ["Pissebedden", "Steenwortelalgen"],
      ["Pissebedden", "Groenwieren"], ["Pissebedden", "Mos"], ["Pissebedden", "Oervaatplanten"], 
      ["Pissebedden", "Korstmos"], ["Pissebedden", "Truffels"], ["Pissebedden", "Paddenstoelen"], 
      ["Pissebedden", "Blad"], ["Pissebedden", "Varens"], ["Pissebedden", "Oerzaadplanten"], 
      ["Pissebedden", "Hout"], ["Pissebedden", "Coniferen"], ["Pissebedden", "Palmvarens"], 
      ["Pissebedden", "Ginkgo"]
    ],
    output: [
      { naam: "Pissebedden", icoon: "icons/Pissebedden.png", map: "Klein landleven", 
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
      ["Garnalen", "Bacteriën"], ["Garnalen", "Detritus"], ["Garnalen", "Blauwalgen"], ["Garnalen", "Schimmel"],
      ["Garnalen", "Archaeplastiden"], ["Garnalen", "Gist"], ["Garnalen", "Rode algen"], ["Garnalen", "Groene algen"],
      ["Garnalen", "Roodwieren"], ["Garnalen", "Groenwieren"], ["Garnalen", "Wormen"], ["Garnalen", "Mos"], 
      ["Garnalen", "Oervaatplanten"], ["Garnalen", "Korstmos"], ["Garnalen", "Truffels"], ["Garnalen", "Paddenstoelen"],
      ["Garnalen", "Krill"], ["Garnalen", "Blad"]
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
    input: [
      ["Kreeften", "Bacteriën"], ["Kreeften", "Detritus"], ["Kreeften", "Blauwalgen"], ["Kreeften", "Schimmel"],
      ["Kreeften", "Archaeplastiden"], ["Kreeften", "Gist"], ["Kreeften", "Rode algen"], ["Kreeften", "Groene algen"],
      ["Kreeften", "Roodwieren"], ["Kreeften", "Groenwieren"], ["Kreeften", "Wormen"], ["Kreeften", "Oergeleedpotigen"], 
      ["Kreeften", "Manteldieren"], ["Kreeften", "Mos"], ["Kreeften", "Trilobieten"], ["Kreeften", "Oerkreeftjes"], 
      ["Kreeften", "Oervaatplanten"], ["Kreeften", "Korstmos"], ["Kreeften", "Truffels"], ["Kreeften", "Paddenstoelen"],
      ["Kreeften", "Pissebedden"], ["Kreeften", "Garnalen"], ["Kreeften", "Krabben"], ["Kreeften", "Blad"]
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
    input: [
      ["Kreeften", "Zeeslakken"], ["Kreeften", "Tweekleppigen"]
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
      },
      { naam: "Schelp", icoon: "icons/Schelp.png", map: "Biologie", 
        quote: `I see a broken shell and I remind myself that something might have needed setting free 
        <br><br>- Sara Pennypacker`
      }
    ]
  },
  {
    input: [
      ["Krabben", "Bacteriën"], ["Krabben", "Detritus"], ["Krabben", "Blauwalgen"], ["Krabben", "Schimmel"],
      ["Krabben", "Archaeplastiden"], ["Krabben", "Gist"], ["Krabben", "Rode algen"], ["Krabben", "Groene algen"],
      ["Krabben", "Roodwieren"], ["Krabben", "Groenwieren"], ["Krabben", "Wormen"], ["Krabben", "Oergeleedpotigen"], 
      ["Krabben", "Manteldieren"], ["Krabben", "Mos"], ["Krabben", "Trilobieten"], ["Krabben", "Oerkreeftjes"], 
      ["Krabben", "Oervaatplanten"], ["Krabben", "Korstmos"], ["Krabben", "Truffels"], ["Krabben", "Paddenstoelen"],
      ["Krabben", "Pissebedden"], ["Krabben", "Garnalen"], ["Krabben", "Blad"]
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
    input: [
      ["Krabben", "Zeeslakken"], ["Krabben", "Tweekleppigen"]
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
      },
      { naam: "Schelp", icoon: "icons/Schelp.png", map: "Biologie", 
        quote: `I see a broken shell and I remind myself that something might have needed setting free 
        <br><br>- Sara Pennypacker`
      }
    ]
  },
  {
    input: ["Oerinsecten", "Evolutie"],
    hint: `Met een kleine evolutionaire aanpassing gaan deze kleine beestjes de lucht in.`,
    tijd: 410_000_000,
    output: [
      { naam: "Vleugels", icoon: "icons/Vleugels.png", map: "Biologie", 
        quote: `Until you spread your wings, you'll have no idea how far you can fly
        <br><br>- Napoleon Bonaparte`
      },
      { naam: "Zilvervisjes", icoon: "icons/Zilvervisjes.png", map: "Klein landleven",
        quote: `Silverfish are living fossils, tiny survivors that carry the secrets of hundreds of millions of years of 
        insect evolution
        <br><br>- Norman Platnick`
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
      ["Haaien", "Kwallen"], ["Haaien", "Oertrochozoa"], ["Haaien", "Wormen"], ["Haaien", "Lancetvisjes"],
      ["Haaien", "Manteldieren"], ["Haaien", "Trilobieten"], ["Haaien", "Oerkreeftjes"], ["Haaien", "Krill"], 
      ["Haaien", "Garnalen"], ["Haaien", "Kreeften"], ["Haaien", "Krabben"]
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
    input: [
      ["Haaien", "Agnathen"], ["Haaien", "Inktvissen"], ["Haaien", "Zwaardstaarten"], ["Haaien", "Oerchondrichthyes"], 
      ["Haaien", "Oerstraalvinnigen"], ["Haaien", "Coelacanthen"], ["Haaien", "Tiktaalik"], ["Haaien", "Longvissen"], 
      ["Haaien", "Holocefalen"], ["Haaien", "Oerchondrostei"], ["Haaien", "Wimpelalen"], ["Haaien", "Oerneopterygen"], 
      ["Haaien", "Oertetrapoden"], ["Haaien", "Salamanders"], ["Haaien", "Kikkers"], ["Haaien", "Padden"], 
      ["Haaien", "Oersynapsiden"], ["Haaien", "Oeranapsiden"], ["Haaien", "Oerdiapsiden"], ["Haaien", "Schildpadden"]
    ],
    vers: `Lees in naam van jouw Zorgdrager Die creëerde; Die creëerde de mens uit een bloedklodder
    <br><br>De Bloedklodder (96:1-2)`,
    output: [
      { naam: "Haaien", icoon: "icons/Haaien.png", map: "Vissen", 
        quote: `Sharks are beautiful animals, and if you're lucky enough to see lots of them, that means that you're
        in a healthy ocean. You should be afraid if you are in the ocean and don't see sharks
        <br><br>- Sylvia Earle`
      },
      { naam: "Bloed", icoon: "icons/Bloed.png", map: "Biologie",
        quote: `We are linked by blood, and blood is memory without language
        <br><br>- Joyce Oates`
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
      ["Haaien", "Zeeslakken"], ["Haaien", "Tweekleppigen"]
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
      },
      { naam: "Schelp", icoon: "icons/Schelp.png", map: "Biologie", 
        quote: `I see a broken shell and I remind myself that something might have needed setting free 
        <br><br>- Sara Pennypacker`
      }
    ]
  },
  {
    input: ["Haaien", "Nautilussen"],
    vers: `Lees in naam van jouw Zorgdrager Die creëerde; Die creëerde de mens uit een bloedklodder
    <br><br>De Bloedklodder (96:1-2)`,
    output: [
      { naam: "Haaien", icoon: "icons/Haaien.png", map: "Vissen", 
        quote: `Sharks are beautiful animals, and if you're lucky enough to see lots of them, that means that you're
        in a healthy ocean. You should be afraid if you are in the ocean and don't see sharks
        <br><br>- Sylvia Earle`
      },
      { naam: "Bloed", icoon: "icons/Bloed.png", map: "Biologie",
        quote: `We are linked by blood, and blood is memory without language
        <br><br>- Joyce Oates`
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
      ["Holocefalen", "Wormen"], ["Holocefalen", "Trilobieten"], ["Holocefalen", "Oerkreeftjes"], 
      ["Holocefalen", "Garnalen"], ["Holocefalen", "Krill"], ["Holocefalen", "Kreeften"], ["Holocefalen", "Krabben"]
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
    input: [
      ["Holocefalen", "Zeeslakken"], ["Holocefalen", "Tweekleppigen"]
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
      },
      { naam: "Schelp", icoon: "icons/Schelp.png", map: "Biologie", 
        quote: `I see a broken shell and I remind myself that something might have needed setting free 
        <br><br>- Sara Pennypacker`
      }
    ]
  },
  {
    input: ["Oerstraalvinnigen", "Evolutie"],
    hint: `Ook de straalvinnigen zullen blijven veranderen...`,
    output: [
      { naam: "Oerchondrostei", icoon: "icons/Oerchondrostei.png", map: "Vissen",
        quote: `“Sturgeons seem almost out of time, their armored bodies and slow movements giving the impression of 
        creatures that have quietly ignored the passing ages
        <br><br>- Helen Scales`
      },
      { naam: "Wimpelalen", icoon: "icons/Wimpelalen.png", map: "Vissen",
       quote: `Eels are very peculiar fish. They are so odd that they almost seem like creatures from another world
       <br><br>- Rachel Carson`
      },
      { naam: "Oerneopterygen", icoon: "icons/Oerneopterygen.png", map: "Vissen", 
        quote: `Fishes have evolved an extraordinary diversity of forms and ways of moving, revealing a flexibility in 
        design unmatched among vertebrates
        <br><br>- Melanie Stiassny`
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
    input: ["Blad", "Oervaatplanten"],
    hint: `Stengels vol water en bladeren vol energie - een gouden combinatie.`,
    tijd: 365_000_000,
    output: [
      { naam: "Zaadjes", icoon: "icons/Zaadjes.png", map: "Biologie", 
        quote: `Each day of my life I am sowing seeds that one day I will harvest
        <br><br>- Guatama Buddha`
      },
      { naam: "Varens", icoon: "icons/Varens.png", map: "Planten", 
        quote: `Only spread a fern-frond over a man's head and worldly cares are cast out, and freedom and
        beauty and peace come in
        <br><br>- John Muir`
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
//------------ THRESHOLD 5: CARBOON --------------//
  {
    input: ["Zaadjes", "Oervaatplanten"],
    hint: `Het is tijd voor planten om groot te worden...`,
    tijd: 359_000_000,
    output: [
      { naam: "Oerzaadplanten", icoon: "icons/Oerzaadplanten.png", map: "Planten", 
        quote: `Keep planting new seeds until your mind becomes the earth that gives birth to new worlds
        <br><br>- Curtis Tyrone Jones`
      }
    ],
    uitleg: {
      threshold: {
        titel: "Carboon", 
        tekst: "Je moet eerst nog wat meer halen...",
        requirements: ["Paddenstoelen", "Kreeften", "Vleugels", "Moeras", "Haaien", "Geluid", "Oerchondrostei", 
          "Wimpelalen", "Oerneopterygen", "Bruinkool"]
      },
      normal: {
        titel: "Carboon",
        tekst: `Tijd om met zaadjes en eieren verder het droge op te gaan...`,
      }
    }
  },
  {
    input: ["Tiktaalik", "Evolutie"],
    hint: `De ozonlaag, kleine insecten, planten.. alle ingrediënten zijn er voor de tiktaalik om het land op te gaan.`,
    output: [
      { naam: "Oertetrapoden", icoon: "icons/Oertetrapoden.png", map: "Klein landleven",
        quote: `Tiktaalik shows us that the bones in our hands and wrists were once fins, and that our journey onto 
        land began with creatures very much like fish
        <br><br>- Neil Shubin`
      }
    ],
    uitleg: {
      thresholdElement: {
        naam: "Oerzaadplanten", 
        titel: "Probeer opnieuw in het Carboon",
        tekst: `Eerst moeten de oervaatplanten zich met zaadjes kunnen verspreiden in droge gebieden.`
      }
    }
  },
  {
    input: [
      ["Oertetrapoden", "Oertrochozoa"], ["Oertetrapoden", "Wormen"], ["Oertetrapoden", "Lancetvisjes"], 
      ["Oertetrapoden", "Oergeleedpotigen"], ["Oertetrapoden", "Duizendpoten"], ["Oertetrapoden", "Oerkreeftjes"], 
      ["Oertetrapoden", "Oerinsecten"], ["Oertetrapoden", "Spinnen"], ["Oertetrapoden", "Mijten"], 
      ["Oertetrapoden", "Krill"], ["Oertetrapoden", "Pissebedden"], ["Oertetrapoden", "Garnalen"], 
      ["Oertetrapoden", "Zilvervisjes"], ["Oertetrapoden", "Oerpolyneopteren"], ["Oertetrapoden", "Oerhymenopteren"], 
      ["Oertetrapoden", "Luizen"], ["Oertetrapoden", "Kevers"], ["Oertetrapoden", "Muggen"], ["Oertetrapoden", "Vliegen"], 
      ["Oertetrapoden", "Vlinders"], ["Oertetrapoden", "Krekels"], ["Oertetrapoden", "Sprinkhanen"], 
      ["Oertetrapoden", "Wandelende takken"], ["Oertetrapoden", "Kakkerlakken"], ["Oertetrapoden", "Termieten"]
    ],
    output: [
      { naam: "Oertetrapoden", icoon: "icons/Oertetrapoden.png", map: "Klein landleven",
        quote: `Tiktaalik shows us that the bones in our hands and wrists were once fins, and that our journey onto 
        land began with creatures very much like fish
        <br><br>- Neil Shubin`
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
      ["Oertetrapoden", "Agnathen"], ["Oertetrapoden", "Oerstraalvinnigen"]
    ],
    vers: `Lees in naam van jouw Zorgdrager Die creëerde; Die creëerde de mens uit een bloedklodder
    <br><br>De Bloedklodder (96:1-2)`,
    output: [
      { naam: "Oertetrapoden", icoon: "icons/Oertetrapoden.png", map: "Klein landleven",
        quote: `Tiktaalik shows us that the bones in our hands and wrists were once fins, and that our journey onto 
        land began with creatures very much like fish
        <br><br>- Neil Shubin`
      },
      { naam: "Bloed", icoon: "icons/Bloed.png", map: "Biologie",
        quote: `We are linked by blood, and blood is memory without language
        <br><br>- Joyce Oates`
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
    input: ["Vleugels", "Oerinsecten"],
    hint: `Water, land.. nu is het de beurt aan gevleugelden in de lucht.`,
    output: [
      { naam: "Oerpolyneopteren", icoon: "icons/Oerpolyneopteren.png", map: "Klein landleven", 
        quote: `Polyneoptera represent one of the major early branches of winged insects, helping us trace how wings 
        and terrestrial lifestyles emerged in evolution
        <br><br>- Ben Wipfler`
      },
      { naam: "Oerhymenopteren", icoon: "icons/Oerhymenopteren.png", map: "Klein landleven", 
        quote: `The evolution of ants, bees, and wasps demonstrates how complex social systems and cooperation can arise 
        from simple beginnings
        <br><br>- E.O. Wilson`
      },
      { naam: "Luizen", icoon: "icons/Luizen.png", map: "Klein landleven", 
        quote: `The louse, a wingless parasite, has shaped history far more than its size would suggest
        <br><br>- Hans Zinsser`
      },
      { naam: "Kevers", icoon: "icons/Kevers.png", map: "Klein landleven", 
        quote: `Beetles are endlessly inventive; every species is a tiny masterpiece of adaptation and design
        <br><br>- May Berenbaum`
      },
      { naam: "Muggen", icoon: "icons/Muggen.png", map: "Klein landleven", 
        quote: `A mountain is not nearly as much a wonder as a mosquito
        <br><br>- Mokokoma Mokhonoana`
      },
      { naam: "Vliegen", icoon: "icons/Vliegen.png", map: "Klein landleven", 
        quote: `Flies are marvelous creatures; their wings, eyes, and tiny bodies are engineered for a life 
        we barely notice, yet they touch every corner of our world
        <br><br>- May Berenbaum`
      },
      { naam: "Vlinders", icoon: "icons/Vlinders.png", map: "Klein landleven", 
        quote: `We delight in the beauty of the butterfly, but rarely admit the changes it has gone through to achieve 
        that beauty
        <br><br>- Maya Angelou`
      }
    ],
    uitleg: {
      thresholdElement: {
        naam: "Oerzaadplanten", 
        titel: "Probeer opnieuw in het Carboon",
        tekst: `Eerst moeten de oervaatplanten zich met zaadjes kunnen verspreiden in droge gebieden.`
      }
    }
  },
  {
    input: [
      ["Oerpolyneopteren", "Detritus"], ["Oerpolyneopteren", "Schimmel"], ["Oerpolyneopteren", "Gist"], 
      ["Oerpolyneopteren", "Rode algen"], ["Oerpolyneopteren", "Groene algen"], ["Oerpolyneopteren", "Roodwieren"], 
      ["Oerpolyneopteren", "Steenwortelalgen"], ["Oerpolyneopteren", "Groenwieren"], 
      ["Oerpolyneopteren", "Oergeleedpotigen"], ["Oerpolyneopteren", "Mos"], ["Oerpolyneopteren", "Oercheliceraten"], 
      ["Oerpolyneopteren", "Duizendpoten"], ["Oerpolyneopteren", "Oerkreeftjes"], ["Oerpolyneopteren", "Oerinsecten"], 
      ["Oerpolyneopteren", "Spinnen"], ["Oerpolyneopteren", "Mijten"], ["Oerpolyneopteren", "Krill"], 
      ["Oerpolyneopteren", "Oervaatplanten"], ["Oerpolyneopteren", "Korstmos"], ["Oerpolyneopteren", "Truffels"], 
      ["Oerpolyneopteren", "Paddenstoelen"], ["Oerpolyneopteren", "Pissebedden"], ["Oerpolyneopteren", "Garnalen"], 
      ["Oerpolyneopteren", "Zilvervisjes"], ["Oerpolyneopteren", "Blad"], ["Oerpolyneopteren", "Varens"], 
      ["Oerpolyneopteren", "Oerzaadplanten"], ["Oerpolyneopteren", "Luizen"], ["Oerpolyneopteren", "Muggen"], 
      ["Oerpolyneopteren", "Vliegen"], ["Oerpolyneopteren", "Vlinders"], ["Oerpolyneopteren", "Hout"], 
      ["Oerpolyneopteren", "Coniferen"], ["Oerpolyneopteren", "Palmvarens"], ["Oerpolyneopteren", "Ginkgo"],
      ["Oerpolyneopteren", "Krekels"], ["Oerpolyneopteren", "Termieten"]
    ],
    output: [
      { naam: "Oerpolyneopteren", icoon: "icons/Oerpolyneopteren.png", map: "Klein landleven", 
        quote: `Polyneoptera represent one of the major early branches of winged insects, helping us trace how wings 
        and terrestrial lifestyles emerged in evolution
        <br><br>- Ben Wipfler`
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
      ["Oerhymenopteren", "Detritus"], ["Oerhymenopteren", "Schimmel"], ["Oerhymenopteren", "Gist"], 
      ["Oerhymenopteren", "Rode algen"], ["Oerhymenopteren", "Groene algen"], ["Oerhymenopteren", "Roodwieren"], 
      ["Oerhymenopteren", "Steenwortelalgen"], ["Oerhymenopteren", "Groenwieren"], ["Oerhymenopteren", "Mos"], 
      ["Oerhymenopteren", "Oervaatplanten"], ["Oerhymenopteren", "Korstmos"], ["Oerhymenopteren", "Truffels"], 
      ["Oerhymenopteren", "Paddenstoelen"], ["Oerhymenopteren", "Blad"], ["Oerhymenopteren", "Varens"], 
      ["Oerhymenopteren", "Oerzaadplanten"], ["Oerhymenopteren", "Hout"], ["Oerhymenopteren", "Coniferen"], 
      ["Oerhymenopteren", "Palmvarens"], ["Oerhymenopteren", "Ginkgo"]
    ],
    output: [
      { naam: "Oerhymenopteren", icoon: "icons/Oerhymenopteren.png", map: "Klein landleven", 
        quote: `The evolution of ants, bees, and wasps demonstrates how complex social systems and cooperation can arise 
        from simple beginnings
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
      ["Luizen", "Detritus"], ["Luizen", "Schimmel"], ["Luizen", "Gist"], ["Luizen", "Mos"], ["Luizen", "Oervaatplanten"], 
      ["Luizen", "Korstmos"], ["Luizen", "Truffels"], ["Luizen", "Paddenstoelen"], ["Luizen", "Blad"], 
      ["Luizen", "Oerzaadplanten"], ["Luizen", "Coniferen"], ["Luizen", "Palmvarens"], ["Luizen", "Ginkgo"]
    ],
    output: [
      { naam: "Kevers", icoon: "icons/Kevers.png", map: "Klein landleven", 
        quote: `Beetles are endlessly inventive; every species is a tiny masterpiece of adaptation and design
        <br><br>- May Berenbaum`
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
      ["Muggen", "Bacteriën"], ["Muggen", "Detritus"], ["Muggen", "Blauwalgen"], ["Muggen", "Schimmel"],
      ["Muggen", "Gist"], ["Muggen", "Amoeben"], ["Muggen", "Foraminiferen"], ["Muggen", "Stralendiertjes"],
      ["Muggen", "Varens"], ["Muggen", "Bloed"], ["Muggen", "Oerzaadplanten"], ["Muggen", "Coniferen"], 
      ["Muggen", "Palmvarens"], ["Muggen", "Ginkgo"]
    ],
    output: [
      { naam: "Muggen", icoon: "icons/Muggen.png", map: "Klein landleven", 
        quote: `A mountain is not nearly as much a wonder as a mosquito
        <br><br>- Mokokoma Mokhonoana`
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
      ["Vliegen", "Detritus"], ["Vliegen", "Schimmel"], ["Vliegen", "Mos"], ["Vliegen", "Oervaatplanten"], 
      ["Vliegen", "Korstmos"], ["Vliegen", "Truffels"], ["Vliegen", "Paddenstoelen"], ["Vliegen", "Blad"], 
      ["Vliegen", "Oerzaadplanten"], ["Vliegen", "Coniferen"], ["Vliegen", "Palmvarens"], ["Vliegen", "Ginkgo"]
    ],
    output: [
      { naam: "Vliegen", icoon: "icons/Vliegen.png", map: "Klein landleven", 
        quote: `Flies are marvelous creatures; their wings, eyes, and tiny bodies are engineered for a life 
        we barely notice, yet they touch every corner of our world
        <br><br>- May Berenbaum`
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
      ["Vlinders", "Mos"], ["Vlinders", "Oervaatplanten"], ["Vlinders", "Blad"], ["Vlinders", "Varens"], 
      ["Vlinders", "Oerzaadplanten"], ["Vlinders", "Coniferen"], ["Vlinders", "Palmvarens"], ["Vlinders", "Ginkgo"]
    ],
    output: [
      { naam: "Vlinders", icoon: "icons/Vlinders.png", map: "Klein landleven", 
        quote: `We delight in the beauty of the butterfly, but rarely admit the changes it has gone through to achieve 
        that beauty
        <br><br>- Maya Angelou`
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
    input: ["Oertetrapoden", "Evolutie"],
    hint: `De planten hebben hun zaadjes, nu is het aan de tetrapoden om hun eigen zaadjes te ontwikkelen.`,
    output: [
      { naam: "Ei", icoon: "icons/Ei.png", map: "Biologie",
        quote: `The present was an egg laid by the past that had the future inside its shell
        <br><br>- Zora Hurston`
      },
      { naam: "Salamanders", icoon: "icons/Salamanders.png", map: "Klein landleven",
        quote: `Salamanders are tiny wizards of the animal world: lose a limb, and they simply grow it back, 
        as if nature itself is performing a quiet magic
        <br><br>- Randal Voss`
      },
      { naam: "Kikkers", icoon: "icons/Kikkers.png", map: "Klein landleven",
        quote: `A frog in a well cannot conceive of the ocean
        <br><br>- Zhuangzi`
      },
      { naam: "Padden", icoon: "icons/Padden.png", map: "Klein landleven",
        quote: `The music of all creatures had to do with their loves, even of toads and frogs
        <br><br>- Henry Thoreau`
      }
    ],
    uitleg: {
      thresholdElement: {
        naam: "Oerzaadplanten", 
        titel: "Probeer opnieuw in het Carboon",
        tekst: `Eerst moeten de oervaatplanten zich met zaadjes kunnen verspreiden in droge gebieden.`
      }
    }
  },
  {
    input: [
      ["Salamanders", "Wormen"], ["Salamanders", "Oergeleedpotigen"], ["Salamanders", "Oercheliceraten"],
      ["Salamanders", "Duizendpoten"], ["Salamanders", "Oerkreeftjes"], ["Salamanders", "Oerinsecten"], 
      ["Salamanders", "Spinnen"], ["Salamanders", "Mijten"], ["Salamanders", "Pissebedden"], 
      ["Salamanders", "Zilvervisjes"], ["Salamanders", "Oerpolyneopteren"], ["Salamanders", "Oerhymenopteren"], 
      ["Salamanders", "Luizen"], ["Salamanders", "Kevers"], ["Salamanders", "Muggen"], ["Salamanders", "Vliegen"], 
      ["Salamanders", "Vlinders"], ["Salamanders", "Krekels"], ["Salamanders", "Sprinkhanen"], 
      ["Salamanders", "Wandelende takken"], ["Salamanders", "Kakkerlakken"], ["Salamanders", "Termieten"]
    ],
    output: [
      { naam: "Salamanders", icoon: "icons/Salamanders.png", map: "Klein landleven",
        quote: `Salamanders are tiny wizards of the animal world: lose a limb, and they simply grow it back, 
        as if nature itself is performing a quiet magic
        <br><br>- Randal Voss`
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
      ["Kikkers", "Wormen"], ["Kikkers", "Oergeleedpotigen"], ["Kikkers", "Oercheliceraten"],
      ["Kikkers", "Duizendpoten"], ["Kikkers", "Oerkreeftjes"], ["Kikkers", "Oerinsecten"], 
      ["Kikkers", "Spinnen"], ["Kikkers", "Mijten"], ["Kikkers", "Pissebedden"], 
      ["Kikkers", "Zilvervisjes"], ["Kikkers", "Oerpolyneopteren"], ["Kikkers", "Oerhymenopteren"], 
      ["Kikkers", "Luizen"], ["Kikkers", "Kevers"], ["Kikkers", "Muggen"], ["Kikkers", "Vliegen"], 
      ["Kikkers", "Vlinders"], ["Kikkers", "Krekels"], ["Kikkers", "Sprinkhanen"], 
      ["Kikkers", "Wandelende takken"], ["Kikkers", "Kakkerlakken"], ["Kikkers", "Termieten"]
    ],
    output: [
      { naam: "Kikkers", icoon: "icons/Kikkers.png", map: "Klein landleven",
        quote: `A frog in a well cannot conceive of the ocean
        <br><br>- Zhuangzi`
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
      ["Padden", "Wormen"], ["Padden", "Oergeleedpotigen"], ["Padden", "Oercheliceraten"],
      ["Padden", "Duizendpoten"], ["Padden", "Oerkreeftjes"], ["Padden", "Oerinsecten"], 
      ["Padden", "Spinnen"], ["Padden", "Mijten"], ["Padden", "Pissebedden"], 
      ["Padden", "Zilvervisjes"], ["Padden", "Oerpolyneopteren"], ["Padden", "Oerhymenopteren"], 
      ["Padden", "Luizen"], ["Padden", "Kevers"], ["Padden", "Muggen"], ["Padden", "Vliegen"], 
      ["Padden", "Vlinders"], ["Padden", "Krekels"], ["Padden", "Sprinkhanen"], 
      ["Padden", "Wandelende takken"], ["Padden", "Kakkerlakken"], ["Padden", "Termieten"]
    ],
    output: [
      { naam: "Padden", icoon: "icons/Padden.png", map: "Klein landleven",
        quote: `The music of all creatures had to do with their loves, even of toads and frogs
        <br><br>- Henry Thoreau`
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
    input: ["Bruinkool", "Druk"],
    hint: `Kolen kunnen ook verstenen...`,
    output: [
      { naam: "Steenkool", icoon: "icons/Steenkool.png", map: "Aarde", 
        quote: `Without a whole lot of pressure, a diamond is just a piece of coal
        <br><br>- Miriam`
      }
    ],
    uitleg: {
      thresholdElement: {
        naam: "Oerzaadplanten", 
        titel: "Probeer opnieuw in het Carboon",
        tekst: `Eerst moeten de oervaatplanten zich met zaadjes kunnen verspreiden in droge gebieden.`
      }
    }
  },
  {
    input: ["Oerzaadplanten", "Evolutie"],
    hint: `Zaadjes brengen planten in drogere gebieden, waar ze bomen vormen.`,
    output: [
      { naam: "Hout", icoon: "icons/Hout.png", map: "Biologie", 
        quote: `Nature does nothing in vain; the wood and bark of trees serve both shelter and sustenance
        <br><br>- Aristoteles`
      },
      { naam: "Coniferen", icoon: "icons/Coniferen.png", map: "Planten", 
        quote: `The pine endures the winter winds, its needles unwavering, a friend to the solitary scholar
        <br><br>- Wang Wei`
      },
      { naam: "Palmvarens", icoon: "icons/Palmvarens.png", map: "Planten", 
        quote: `The romance of cycads, the gymnosperms that have been with us so long, can never be matched by any 
        somber row of pines standing in the churchyard of science and memory
        <br><br>- Edith Roberts`
      },
      { naam: "Ginkgo", icoon: "icons/Ginkgo.png", map: "Planten", 
        quote: `This leaf from a tree in the East … has been given to my garden. It reveals a certain secret which 
        pleases me and thoughtful people
        <br><br>- Johann von Goethe`
      }
    ]
  },
  {
    input: [
      ["Hout", "Vuur"], ["Hout", "Lava"], ["Coniferen", "Vuur"], ["Coniferen", "Lava"], ["Palmvarens", "Vuur"],
      ["Palmvarens", "Lava"]
    ],
    output: [
      { naam: "As", icoon: "icons/As.png", map: "Vuur",
        quote: `Ashes to ashes. Dust to dust. We are nothing, but dust and to dust we shall return 
        <br><br>- Alexander Anderson`
      }
    ]
  },
  {
    input: [
      ["Coniferen", "Coniferen"], ["Palmvarens", "Coniferen"], ["Palmvarens", "Palmvarens"], ["Ginkgo", "Coniferen"], 
      ["Ginkgo", "Palmvarens"], ["Ginkgo", "Ginkgo"]
    ],
    hint: `Waar de bomen samenkomen...`,
    output: [
      { naam: "Bos", icoon: "icons/Bos.png", map: "Landschap", 
        quote: `The clearest way into the Universe is through a forest wilderness
        <br><br>- John Muir`
      }
    ]
  },
  {
    input: [
      ["Bos", "Vuur"], ["Bos", "Lava"], ["Bos", "Explosie"], ["Bos", "Granietmagma"], ["Bos", "Bliksem"],
      ["Bos", "Bolbliksem"],
      ["Regenwoud", "Vuur"], ["Regenwoud", "Lava"], ["Regenwoud", "Explosie"], ["Regenwoud", "Granietmagma"], 
      ["Regenwoud", "Bliksem"], ["Regenwoud", "Bolbliksem"],
      ["Tropisch regenwoud", "Vuur"], ["Tropisch regenwoud", "Lava"], ["Tropisch regenwoud", "Explosie"], 
      ["Tropisch regenwoud", "Granietmagma"], ["Tropisch regenwoud", "Bliksem"], ["Tropisch regenwoud", "Bolbliksem"]
    ],
    hint: `Met de eerste bossen, ontstonden ook de eerste bosbranden.`,
    output: [
      { naam: "Brand", icoon: "icons/Brand.png", map: "Vuur", 
        quote: `
        <br><br>- `
      }
    ]
  },
  {
    input: ["Bos", "Regen"],
    hint: `Meer begroeiing, meer vocht, meer leven.`,
    output: [
      { naam: "Regenwoud", icoon: "icons/Regenwoud.png", map: "Landschap", 
        quote: `When we walk into a grove of trees or under an open sky the magic of nature takes over
        and the heaviness of life lifts a little
        <br><br>- Natassia Cassinero`
      }
    ]
  },
  {
    input: ["Ei", "Oertetrapoden"],
    hint: `Het is tijd voor de eerste grote gewervelde dieren om uit hun schulp te komen...`,
    output: [
      { naam: "Oersynapsiden", icoon: "icons/Oersynapsiden.png", map: "Reptielen", 
        quote: `The mammal-like reptiles show us that the boundary between reptiles and mammals is not a sharp line, 
        but a gradual blending of forms
        <br><br>- Robert Bakker`
      },
      { naam: "Oerdiapsiden", icoon: "icons/Oerdiapsiden.png", map: "Reptielen", 
        quote: `Reptiles move with an economy and precision that reflects a body perfectly attuned to its environment 
        — every scale, every motion, a study in efficiency
        <br><br>-David Attenborough`
      },
      { naam: "Oeranapsiden", icoon: "icons/Oeranapsiden.png", map: "Reptielen", 
        quote: `Early reptiles were small, close to the ground, and lived in intimate contact with the surface of the Earth
        <br><br>-Alfred Romer`
      }
    ]
  },
  {
    input: [
      ["Oersynapsiden", "Wormen"], ["Oersynapsiden", "Oergeleedpotigen"], ["Oersynapsiden", "Oercheliceraten"],
      ["Oersynapsiden", "Duizendpoten"], ["Oersynapsiden", "Oerkreeftjes"], ["Oersynapsiden", "Oerinsecten"], 
      ["Oersynapsiden", "Spinnen"], ["Oersynapsiden", "Mijten"], ["Oersynapsiden", "Pissebedden"], 
      ["Oersynapsiden", "Zilvervisjes"], ["Oersynapsiden", "Oerpolyneopteren"], ["Oersynapsiden", "Oerhymenopteren"], 
      ["Oersynapsiden", "Luizen"], ["Oersynapsiden", "Kevers"], ["Oersynapsiden", "Muggen"], ["Oersynapsiden", "Vliegen"], 
      ["Oersynapsiden", "Vlinders"], ["Oersynapsiden", "Krekels"], ["Oersynapsiden", "Sprinkhanen"], 
      ["Oersynapsiden", "Wandelende takken"], ["Oersynapsiden", "Kakkerlakken"], ["Oersynapsiden", "Termieten"]
    ],
    output: [
      { naam: "Oersynapsiden", icoon: "icons/Oersynapsiden.png", map: "Reptielen", 
        quote: `The mammal-like reptiles show us that the boundary between reptiles and mammals is not a sharp line, 
        but a gradual blending of forms
        <br><br>- Robert Bakker`
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
      ["Oersynapsiden", "Zwaardstaarten"], ["Oersynapsiden", "Oertetrapoden"]
    ],
    vers: `Lees in naam van jouw Zorgdrager Die creëerde; Die creëerde de mens uit een bloedklodder
    <br><br>De Bloedklodder (96:1-2)`,
    output: [
      { naam: "Oersynapsiden", icoon: "icons/Oersynapsiden.png", map: "Reptielen", 
        quote: `The mammal-like reptiles show us that the boundary between reptiles and mammals is not a sharp line, 
        but a gradual blending of forms
        <br><br>- Robert Bakker`
      },
      { naam: "Bloed", icoon: "icons/Bloed.png", map: "Biologie",
        quote: `We are linked by blood, and blood is memory without language
        <br><br>- Joyce Oates`
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
      ["Oerdiapsiden", "Wormen"], ["Oerdiapsiden", "Oergeleedpotigen"], ["Oerdiapsiden", "Oercheliceraten"],
      ["Oerdiapsiden", "Duizendpoten"], ["Oerdiapsiden", "Oerkreeftjes"], ["Oerdiapsiden", "Oerinsecten"], 
      ["Oerdiapsiden", "Spinnen"], ["Oerdiapsiden", "Mijten"], ["Oerdiapsiden", "Pissebedden"], 
      ["Oerdiapsiden", "Zilvervisjes"], ["Oerdiapsiden", "Oerpolyneopteren"], ["Oerdiapsiden", "Oerhymenopteren"], 
      ["Oerdiapsiden", "Luizen"], ["Oerdiapsiden", "Kevers"], ["Oerdiapsiden", "Muggen"], ["Oerdiapsiden", "Vliegen"], 
      ["Oerdiapsiden", "Vlinders"], ["Oerdiapsiden", "Krekels"], ["Oerdiapsiden", "Sprinkhanen"], 
      ["Oerdiapsiden", "Wandelende takken"], ["Oerdiapsiden", "Kakkerlakken"], ["Oerdiapsiden", "Termieten"]
    ],
    output: [
      { naam: "Oerdiapsiden", icoon: "icons/Oerdiapsiden.png", map: "Reptielen", 
        quote: `Reptiles move with an economy and precision that reflects a body perfectly attuned to its environment 
        — every scale, every motion, a study in efficiency
        <br><br>-David Attenborough`
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
      ["Oerdiapsiden", "Zwaardstaarten"], ["Oerdiapsiden", "Oertetrapoden"]
    ],
    vers: `Lees in naam van jouw Zorgdrager Die creëerde; Die creëerde de mens uit een bloedklodder
    <br><br>De Bloedklodder (96:1-2)`,
    output: [
      { naam: "Oerdiapsiden", icoon: "icons/Oerdiapsiden.png", map: "Reptielen", 
        quote: `Reptiles move with an economy and precision that reflects a body perfectly attuned to its environment 
        — every scale, every motion, a study in efficiency
        <br><br>-David Attenborough`
      },
      { naam: "Bloed", icoon: "icons/Bloed.png", map: "Biologie",
        quote: `We are linked by blood, and blood is memory without language
        <br><br>- Joyce Oates`
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
      ["Oeranapsiden", "Wormen"], ["Oeranapsiden", "Oergeleedpotigen"], ["Oeranapsiden", "Oercheliceraten"],
      ["Oeranapsiden", "Duizendpoten"], ["Oeranapsiden", "Oerkreeftjes"], ["Oeranapsiden", "Oerinsecten"], 
      ["Oeranapsiden", "Spinnen"], ["Oeranapsiden", "Mijten"], ["Oeranapsiden", "Pissebedden"], 
      ["Oeranapsiden", "Zilvervisjes"], ["Oeranapsiden", "Oerpolyneopteren"], ["Oeranapsiden", "Oerhymenopteren"], 
      ["Oeranapsiden", "Luizen"], ["Oeranapsiden", "Kevers"], ["Oeranapsiden", "Muggen"], ["Oeranapsiden", "Vliegen"], 
      ["Oeranapsiden", "Vlinders"], ["Oeranapsiden", "Krekels"], ["Oeranapsiden", "Sprinkhanen"], 
      ["Oeranapsiden", "Wandelende takken"], ["Oeranapsiden", "Kakkerlakken"], ["Oeranapsiden", "Termieten"]
    ],
    output: [
      { naam: "Oeranapsiden", icoon: "icons/Oeranapsiden.png", map: "Reptielen", 
        quote: `Early reptiles were small, close to the ground, and lived in intimate contact with the surface of the Earth
        <br><br>-Alfred Romer`
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
      ["Oeranapsiden", "Zwaardstaarten"], ["Oeranapsiden", "Oertetrapoden"]
    ],
    vers: `Lees in naam van jouw Zorgdrager Die creëerde; Die creëerde de mens uit een bloedklodder
    <br><br>De Bloedklodder (96:1-2)`,
    output: [
      { naam: "Oeranapsiden", icoon: "icons/Oeranapsiden.png", map: "Reptielen", 
        quote: `Early reptiles were small, close to the ground, and lived in intimate contact with the surface of the Earth
        <br><br>- Alfred Romer`
      },
      { naam: "Bloed", icoon: "icons/Bloed.png", map: "Biologie",
        quote: `We are linked by blood, and blood is memory without language
        <br><br>- Joyce Oates`
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
    input: ["Regenwoud", "Warmte"],
    hint: `Een regenwoud kent al veel diversiteit, maar het ontploft pas echt in de tropen.`,
    output: [
      { naam: "Tropisch regenwoud", icoon: "icons/Tropisch regenwoud.png", map: "Landschap", 
        quote: `The jungle is dark but full of diamonds
        <br><br>- Arthur Miller`
      }
    ]
  },

//------------ THRESHOLD 6: PERM --------------//
  {
    input: ["Oersynapsiden", "Evolutie"],
    hint: `Het is tijd voor zoogdieren.`,
    tijd: 299_000_000,
    output: [
      { naam: "Binnenkort", icoon: "icons/.png", map: "Binnenkort", 
        quote: `
        <br><br>- `
      },
    ],
    uitleg: {
      threshold: {
        titel: "Perm", 
        tekst: "Je moet eerst nog wat meer halen...",
        requirements: ["Vlinders", "Ei", "Steenkool", "Tropisch regenwoud"]
      },
      normal: {
        titel: "Perm",
        tekst: `Tijd om voor de grotere dieren het droge te verkennen...`,
      }
    }
  },
  {
    input: ["Oerpolyneopteren", "Evolutie"],
    hint: `Insecten met langgerekte, rechte vleugels.. we zullen zien wat daaruit komt.`,
    output: [
      { naam: "Krekels", icoon: "icons/Krekels.png", map: "Klein landleven", 
        quote: `I love being outdoors. I love listening to the crickets
        <br><br>- Miranda Kerr`
      },
      { naam: "Sprinkhanen", icoon: "icons/Sprinkhanen.png", map: "Klein landleven", 
        quote: `Now climb, young grasshopper, so your Kung Fu won't be weak
        <br><br>- Hona Andrews`
      },
      { naam: "Wandelende takken", icoon: "icons/Wandelende takken.png", map: "Klein landleven", 
        quote: `Stick insects are masters of disguise, their bodies sculpted by evolution to vanish in plain sight
        <br><br>- Paul Brock`
      },
      { naam: "Kakkerlakken", icoon: "icons/Kakkerlakken.png", map: "Klein landleven", 
        quote: `Both the cockroach and the bird would get along very well without us, although the cockroach would miss us
        most
        <br><br>- Joseph Krutch`
      },
      { naam: "Termieten", icoon: "icons/Termieten.png", map: "Klein landleven", 
        quote: `But once the ants and termites jumped the high barrier that prevents the vast variety of evolving animal
        groups from becoming fully social, they dominated the world
        <br><br>- E.O. Wilson`
      }
    ],
    uitleg: {
      thresholdElement: {
        naam: "Binnenkort", 
        titel: "Probeer opnieuw in het Perm",
        tekst: `Eerst moeten grotere dieren zich over het land verspreiden.`
      }
    }
  },
  {
    input: [
      ["Krekels", "Detritus"], ["Krekels", "Mos"], ["Krekels", "Oervaatplanten"], ["Krekels", "Blad"], 
      ["Krekels", "Zilvervisjes"], ["Krekels", "Luizen"], ["Krekels", "Muggen"], ["Krekels", "Vliegen"], 
      ["Krekels", "Vlinders"], ["Krekels", "Wandelende takken"], ["Krekels", "Varens"], ["Krekels", "Oerzaadplanten"], 
      ["Krekels", "Hout"], ["Krekels", "Coniferen"], ["Krekels", "Palmvarens"], ["Krekels", "Ginkgo"]
    ],
    output: [
      { naam: "Krekels", icoon: "icons/Krekels.png", map: "Klein landleven", 
        quote: `I love being outdoors. I love listening to the crickets
        <br><br>- Miranda Kerr`
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
      ["Sprinkhanen", "Mos"], ["Sprinkhanen", "Oervaatplanten"], ["Sprinkhanen", "Blad"], ["Sprinkhanen", "Zilvervisjes"], 
      ["Sprinkhanen", "Luizen"], ["Sprinkhanen", "Muggen"], ["Sprinkhanen", "Vliegen"], ["Sprinkhanen", "Vlinders"], 
      ["Sprinkhanen", "Krekels"], ["Sprinkhanen", "Wandelende takken"], ["Sprinkhanen", "Varens"], 
      ["Sprinkhanen", "Oerzaadplanten"], ["Sprinkhanen", "Coniferen"], ["Sprinkhanen", "Palmvarens"], 
      ["Sprinkhanen", "Ginkgo"]
    ],
    output: [
      { naam: "Sprinkhanen", icoon: "icons/Sprinkhanen.png", map: "Klein landleven", 
        quote: `Now climb, young grasshopper, so your Kung Fu won't be weak
        <br><br>- Hona Andrews`
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
      ["Wandelende takken", "Mos"], ["Wandelende takken", "Oervaatplanten"], ["Wandelende takken", "Blad"],
      ["Wandelende takken", "Varens"], ["Wandelende takken", "Oerzaadplanten"], ["Wandelende takken", "Coniferen"], 
      ["Wandelende takken", "Palmvarens"], ["Wandelende takken", "Ginkgo"]
    ],
    output: [
      { naam: "Wandelende takken", icoon: "icons/Wandelende takken.png", map: "Klein landleven", 
        quote: `Stick insects are masters of disguise, their bodies sculpted by evolution to vanish in plain sight
        <br><br>- Paul Brock`
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
      ["Kakkerlakken", "Detritus"], ["Kakkerlakken", "Schimmel"], ["Kakkerlakken", "Gist"], ["Kakkerlakken", "Rode algen"], 
      ["Kakkerlakken", "Groene algen"], ["Kakkerlakken", "Roodwieren"], ["Kakkerlakken", "Steenwortelalgen"], 
      ["Kakkerlakken", "Groenwieren"], ["Kakkerlakken", "Mos"], ["Kakkerlakken", "Oervaatplanten"], 
      ["Kakkerlakken", "Korstmos"], ["Kakkerlakken", "Truffels"], ["Kakkerlakken", "Paddenstoelen"], 
      ["Kakkerlakken", "Varens"], ["Kakkerlakken", "Oerzaadplanten"], ["Kakkerlakken", "Coniferen"], 
      ["Kakkerlakken", "Palmvarens"], ["Kakkerlakken", "Ginkgo"]
    ],
    output: [
      { naam: "Kakkerlakken", icoon: "icons/Kakkerlakken.png", map: "Klein landleven", 
        quote: `Both the cockroach and the bird would get along very well without us, although the cockroach would miss us
        most
        <br><br>- Joseph Krutch`
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
      ["Termieten", "Detritus"], ["Termieten", "Schimmel"], ["Termieten", "Rode algen"], ["Termieten", "Groene algen"],
      ["Termieten", "Roodwieren"], ["Termieten", "Steenwortelalgen"], ["Termieten", "Groenwieren"], ["Termieten", "Mos"],
      ["Termieten", "Oervaatplanten"], ["Termieten", "Korstmos"], ["Termieten", "Truffels"], ["Termieten", "Paddenstoelen"],
      ["Termieten", "Varens"], ["Termieten", "Oerzaadplanten"], ["Termieten", "Hout"], ["Termieten", "Coniferen"], 
      ["Termieten", "Palmvarens"], ["Termieten", "Ginkgo"]
    ],
    output: [
      { naam: "Termieten", icoon: "icons/Termieten.png", map: "Klein landleven", 
        quote: `But once the ants and termites jumped the high barrier that prevents the vast variety of evolving animal
        groups from becoming fully social, they dominated the world
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
    input: ["Oeranapsiden", "Evolutie"],
    hint: `Er is er maar 1 overgebleven van de anapsiden, maar wie...`,
    output: [
      { naam: "Schildpadden", icoon: "icons/Schildpadden.png", map: "Reptielen", 
        quote: `Slow but steady wins the race
        <br><br>- Aesopos`
      }
    ]
  },
  {
    input: ["Termieten", "Aarde"],
    hint: `Termieten zijn kunstzinnige beestjes, kijk maar wat ze kunnen met simpele grond.`,
    output: [
      { naam: "Heuvel", icoon: "icons/Heuvel.png", map: "Landschap", 
        quote: `Say, if I only could... I'd make a deal with God and I'd get Him to swap our places.
        I'd be running up that road, be running up that hill.. with no problems
        <br><br>- Kate Bush`
      }
    ]
  },
  {
    input: ["Termieten", "Termieten"],
    hint: `De eerste samenlevingen werden gebouwd door eusociale dieren als termieten en mieren.`,
    output: [
      { naam: "Hiërarchie", icoon: "icons/Hierarchie.png", map: "Samenleving", 
        quote: `Society soon grows used to any state of things which is imposed upon it without explanation
        <br><br>- Edith Wharton`
      }
    ]
  },
  {
    input: [
      ["Schildpadden", "Zee"], ["Schildpadden", "Oceaan"]
    ],
    hint: `Wie o wie wil er terug naar de oceaan?`,
    output: [
      { naam: "Zeeschildpadden", icoon: "icons/Zeeschildpadden.png", map: "Waterdieren", 
        quote: `Try to be like the turtle - at ease in your own shell
        <br><br>- Bill Copeland`
      }
    ]
  },
  {
    input: ["Hiërarchie", "Termieten"],
    hint: `Kijk wat hiërarchie zoal kan brengen...`,
    output: [
      { naam: "Werk", icoon: "icons/Werk.png", map: "Samenleving", 
        quote: `The best preparation for good work tomorrow is to do good work today
        <br><br>- Elbert Hubbard`
      },
      { naam: "Leger", icoon: "icons/Leger.png", map: "Samenleving", 
        quote: `Victory is reserved for those who are willing to pay its price
        <br><br>- Sun Tzu`
      },
      { naam: "Heerser", icoon: "icons/Heerser.png", map: "Samenleving", 
        quote: `He who is to be a good ruler must have first been ruled
        <br><br>- Aristoteles`
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
  "Klein landleven": "icons/Klein landleven.png",
  "Vruchten": "icons/Vruchten.png",
  "Reptielen": "icons/Binnenkort.png",
  "Samenleving": "icons/Samenleving.png"
};

// ----- STATE -----
let openLeft = null;
let openRight = null;
let selected = [];
let unlockedElements = new Set(["Oerknal", "Kou", "Warmte"]);
let introStep = 0;
let lastExplanation = null;
let lastExplanationIsThresholdElement = false;
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
    document.querySelectorAll(".tooltip-floating").forEach(t => t.remove());

    if (el.offsetParent === null) return;

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

  // --- Zoek alle combinaties die matchen ---
  const matches = combinaties.filter(c => {
    if (typeof c.input[0] === "string") {
      return (c.input[0] === a && c.input[1] === b) || (c.input[0] === b && c.input[1] === a);
    }
    return c.input.some(set =>
      (set[0] === a && set[1] === b) || (set[0] === b && set[1] === a)
    );
  });

  // --- Geen match → trillen ---
  if (matches.length === 0) {
    shakeErrorElements(selected.map(e => e.dom));
    selected.forEach(e => e.dom.classList.remove("selected"));
    selected = [];
    return;
  }

  const firstMatch = matches[0];

  // 🔹 1. Threshold-element check
  if (firstMatch.uitleg?.thresholdElement) {
    const needed = firstMatch.uitleg.thresholdElement.naam;
    if (!unlockedElements.has(needed)) {
      showThresholdExplanation(firstMatch.uitleg.thresholdElement, null, () => {
        selected.forEach(e => e.dom.classList.remove("selected"));
        selected = [];
      });
      return; // STOP hier
    }
  }
  
  // 🔹 2. Threshold-requirements check
  if (firstMatch.uitleg?.threshold?.requirements?.length) {
    const normalizedUnlocked = [...unlockedElements].map(e => e.trim().toLowerCase());
    const missing = firstMatch.uitleg.threshold.requirements.filter(
      r => !normalizedUnlocked.includes(r.trim().toLowerCase())
    );
    if (missing.length > 0) {
      showThresholdExplanation(firstMatch.uitleg.threshold, missing, () => {
        selected.forEach(e => e.dom.classList.remove("selected"));
        selected = [];
      });
      return; // STOP hier
    }
  }
  
  // 🔹 3. Alles ok → unlock normale uitleg / nieuwe elementen
  const finalUitleg = firstMatch.uitleg?.normal || null;
  const newElements = [];

  firstMatch.output.forEach(newEl => {
    let map = mappen.find(m => m.naam === newEl.map);
    if (!map) {
      map = { naam: newEl.map, icoon: groepsIconen[newEl.map] || "icons/default.png", elementen: [] };
      mappen.push(map);
    }
    if (!map.elementen.find(e => e.naam === newEl.naam)) map.elementen.push(newEl);
    newElements.push(newEl);
    unlockedElements.add(newEl.naam);
  });

  // 🔹 Special threshold? Alleen als zowel threshold als normal uitleg bestaat
  const isSpecialThreshold = firstMatch.uitleg?.threshold && firstMatch.uitleg?.normal;
  
  // Geef het hele combinaties-object door aan renderNewElements als het een threshold-combinatie is
  renderNewElements(
    newElements,
    firstMatch.vers,
    isSpecialThreshold ? firstMatch : null
  );

  // Reset selectie
  selected.forEach(e => e.dom.classList.remove("selected"));
  selected = [];

  // Update timeline
  if (firstMatch.tijd !== undefined && firstMatch.tijd < currentTime) {
    animateTimeline(Math.max(0, Math.min(maxTime, firstMatch.tijd)));
  }
}

// ----- VISUEEL SCHERM VOOR NIEUWE ELEMENTEN -----
function renderNewElements(elements, vers = null, thresholdOverlay = null) {
  // Verwijder bestaande overlay
  const oldOverlay = document.getElementById("result-overlay");
  if (oldOverlay) oldOverlay.remove();

  const overlay = document.createElement("div");
  overlay.id = "result-overlay";

  // Grid voor de nieuwe elementen
  const grid = document.createElement("div");
  grid.className = "result-grid";

  // Dynamische kolommen afhankelijk van aantal elementen
  let cols;
  switch(elements.length) {
    case 1: cols = 1; break;
    case 2: cols = 2; break;
    case 3: cols = 3; break;
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

  if (vers) {
    const versDiv = document.createElement("div");
    versDiv.className = "vers-text";
    versDiv.innerHTML = vers;
    overlay.appendChild(versDiv);
  }

  // ⚡ Godlike flash
  const flash = document.createElement("div");
  flash.className = "godlike-flash";
  overlay.appendChild(flash);

  document.body.appendChild(overlay);
  requestAnimationFrame(() => overlay.classList.add("visible"));

  flash.addEventListener("animationend", () => flash.remove());

  overlay.onclick = () => {
    overlay.remove();
  
    openLeft = null;
    openRight = null;
    leftSide.innerHTML = "";
    rightSide.innerHTML = "";
    renderClosed();
    updateClosedContainer();
    requestAnimationFrame(() => {
      if (thresholdOverlay) {
        const uitleg = thresholdOverlay.uitleg?.normal;
        if (uitleg) {
          showInfoOverlay(
            uitleg.titel,
            uitleg.tekst,
            uitleg.achtergrond
          );
        }
      }
    });
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

// Hulpfunctie: info-overlay voor threshold-elementen
function showInfoOverlay(title, text, backgroundImage = null) {
  const old = document.getElementById("info-overlay");
  if (old) old.remove();

  const overlay = document.createElement("div");
  overlay.id = "info-overlay";
  overlay.className = "info-overlay fade-in";

  if (backgroundImage) {
    overlay.style.setProperty("--bg-image", `url("${backgroundImage}")`);
  }

  const inner = document.createElement("div");
  inner.className = "info-inner";

  const titleEl = document.createElement("div");
  titleEl.className = "info-title";
  titleEl.textContent = title;

  const textEl = document.createElement("div");
  textEl.className = "info-text";
  textEl.innerHTML = text;

  inner.appendChild(titleEl);
  inner.appendChild(textEl);
  overlay.appendChild(inner);
  document.body.appendChild(overlay);

  overlay.onclick = () => {
    overlay.classList.add("fade-out");
    setTimeout(() => overlay.remove(), 300);
  };
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
    closedContainer.style.pointerEvents = "none";
    document.querySelectorAll(".tooltip-floating").forEach(t => t.remove());
    closedContainer.style.left = "50%";
    closedContainer.style.transform = "translate(-50%, -50%)";
    closedContainer.classList.add("center");
    closedContainer.classList.remove("side");
  } else if (leftOpen && !rightOpen) {
    closedContainer.style.opacity = 1;
    closedContainer.style.pointerEvents = "auto";
    closedContainer.style.left = `${halfWidth + halfWidth/2}px`; // midden rechterhelft
    closedContainer.style.transform = "translate(-50%, -50%)";
    closedContainer.classList.add("side");
    closedContainer.classList.remove("center");
  } else if (!leftOpen && rightOpen) {
    closedContainer.style.opacity = 1;
    closedContainer.style.pointerEvents = "auto";
    closedContainer.style.left = `${halfWidth/2}px`; // midden linkerhelft
    closedContainer.style.transform = "translate(-50%, -50%)";
    closedContainer.classList.add("side");
    closedContainer.classList.remove("center");
  } else {
    closedContainer.style.opacity = 1;
    closedContainer.style.pointerEvents = "auto";
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
    if (typeof c.hint === "string" && c.hint.trim() !== "") {
      availableHints.push(c.hint);
    }
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
