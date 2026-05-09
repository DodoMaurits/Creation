// ---------------- DATA ------------------
const mappen = [
  {
    naam: "Heelal", icoon: "icons/Heelal.png", 
    elementen: [
      { naam: "Oerknal", icoon: "icons/Oerknal.png" },
      { naam: "Ster", icoon: "icons/Ster.png" },
      { naam: "Sterrenstelsel", icoon: "icons/Sterrenstelsel.png" },
      { naam: "Supernova", icoon: "icons/Supernova.png" },
      { naam: "Asteroïden", icoon: "icons/Asteroïden.png" },
      { naam: "Planeet", icoon: "icons/Planeet.png" },
      { naam: "Zwart Gat", icoon: "icons/Zwartgat.png" },
      { naam: "Jupiter", icoon: "icons/Jupiter.png" },
      { naam: "Saturnus", icoon: "icons/Saturnus.png" },
      { naam: "Uranus", icoon: "icons/Uranus.png" },
      { naam: "Neptunus", icoon: "icons/Neptunus.png" },
      { naam: "Mars", icoon: "icons/Mars.png" },
      { naam: "De Aarde", icoon: "icons/De_Aarde.png" },
      { naam: "Venus", icoon: "icons/Venus.png" },
      { naam: "Mercurius", icoon: "icons/Mercurius.png" },
      { naam: "De Maan", icoon: "icons/Maan.png" }
    ]
  },
  {
    naam: "Krachten", icoon: "icons/Krachten.png",
    elementen: [
      { naam: "Warmte", icoon: "icons/Warmte.png" },
      { naam: "Kou", icoon: "icons/Kou.png" },
      { naam: "Zwaartekracht", icoon: "icons/Zwaartekracht.png" },
      { naam: "Straling", icoon: "icons/Straling.png" },
      { naam: "Elektriciteit", icoon: "icons/Elektriciteit.png" },
      { naam: "Radioactiviteit", icoon: "icons/Radioactiviteit.png" },
      { naam: "Platentektoniek", icoon: "icons/Platentektoniek.png" },
      { naam: "Aardbeving", icoon: "icons/Aardbeving.png" },
      { naam: "Magnetisme", icoon: "icons/Magnetisme.png" },
      { naam: "Druk", icoon: "icons/Druk.png" },
      { naam: "Leven", icoon: "icons/Leven.png" },
      { naam: "Dood", icoon: "icons/Dood.png" }
    ]
  },
  {
    naam: "Chemie", icoon: "icons/Chemie.png", 
    elementen: [
      { naam: "Quarks", icoon: "icons/Quarks.png" },
      { naam: "Atomen", icoon: "icons/Atomen.png" },
      { naam: "IJzer", icoon: "icons/IJzer.png" },
      { naam: "Koper", icoon: "icons/Koper.png" },
      { naam: "Zilver", icoon: "icons/Zilver.png" },
      { naam: "Goud", icoon: "icons/Goud.png" },
      { naam: "Lood", icoon: "icons/Lood.png" },
      { naam: "Zink", icoon: "icons/Zink.png" },
      { naam: "Tin", icoon: "icons/Tin.png" },
      { naam: "Zout", icoon: "icons/Zout.png" },
      { naam: "Steenzout", icoon: "icons/Steenzout.png" },
      { naam: "Roest", icoon: "icons/Roest.png" },
      { naam: "Silicium", icoon: "icons/Silicium.png" },
      { naam: "Kalk", icoon: "icons/Kalk.png" },
      { naam: "Aluminium", icoon: "icons/Aluminium.png" },
      { naam: "Kwarts", icoon: "icons/Kwarts.png" },
      { naam: "Gips", icoon: "icons/Gips.png" },
      { naam: "Calciet", icoon: "icons/Calciet.png" },
      { naam: "Sulfaat", icoon: "icons/Sulfaat.png" },
      { naam: "Nitraat", icoon: "icons/Nitraat.png" },
      { naam: "Zwavel", icoon: "icons/Zwavel.png" },
      { naam: "Kwik", icoon: "icons/Kwik.png" },
      { naam: "Alcohol", icoon: "icons/Alcohol.png" }
    ]
  },
  {
    naam: "Lucht", icoon: "icons/Lucht.png", 
    elementen: [
      { naam: "Gas", icoon: "icons/Gas.png" },
      { naam: "Rook", icoon: "icons/Rook.png" },
      { naam: "Damp", icoon: "icons/Damp.png" },
      { naam: "Wolk", icoon: "icons/Wolk.png" },
      { naam: "Lucht", icoon: "icons/Lucht.png" },
      { naam: "Wind", icoon: "icons/Wind.png" },
      { naam: "Storm", icoon: "icons/Storm.png" },
      { naam: "Orkaan", icoon: "icons/Orkaan.png" },
      { naam: "Mist", icoon: "icons/Mist.png" },
      { naam: "Regenboog", icoon: "icons/Regenboog.png" },
      { naam: "Zuurstof", icoon: "icons/Zuurstof.png" },
      { naam: "Ozon", icoon: "icons/Ozon.png" }
    ]
  },
  {
    naam: "Water", icoon: "icons/Water.png", 
    elementen: [
      { naam: "IJs", icoon: "icons/IJs.png" },
      { naam: "Water", icoon: "icons/Water.png" },
      { naam: "Meer", icoon: "icons/Meer.png" },
      { naam: "Zee", icoon: "icons/Zee.png" },
      { naam: "Oceaan", icoon: "icons/Oceaan.png" },
      { naam: "Golf", icoon: "icons/Golf.png" },
      { naam: "Regen", icoon: "icons/Regen.png" },
      { naam: "Zure regen", icoon: "icons/Zure_regen.png" },
      { naam: "Rivier", icoon: "icons/Rivier.png" },
      { naam: "Lagune", icoon: "icons/Lagune.png" },
      { naam: "Sneeuw", icoon: "icons/Sneeuw.png" },
      { naam: "Hagel", icoon: "icons/Hagel.png" },
      { naam: "Ven", icoon: "icons/Ven.png" },
      { naam: "Overstroming", icoon: "icons/Overstroming.png" },
      { naam: "Slijm", icoon: "icons/Slijm.png" },
      { naam: "Aardolie", icoon: "icons/Aardolie.png" }
    ]
  },
  {
    naam: "Vuur", icoon: "icons/Vuur.png", 
    elementen: [
      { naam: "Vuur", icoon: "icons/Vuur.png" },
      { naam: "Lava", icoon: "icons/Lava.png" },
      { naam: "Granietmagma", icoon: "icons/Granietmagma.png" },
      { naam: "Magmadamp", icoon: "icons/Magmadamp.png" },
      { naam: "As", icoon: "icons/As.png" },
      { naam: "Plasma", icoon: "icons/Plasma.png" },
      { naam: "Bliksem", icoon: "icons/Bliksem.png" },
      { naam: "Bolbliksem", icoon: "icons/Bolbliksem.png" },
      { naam: "Explosie", icoon: "icons/Explosie.png" },
      { naam: "Zonnewind", icoon: "icons/Zonnewind.png" },
      { naam: "Noorderlicht", icoon: "icons/Noorderlicht.png" },
      { naam: "Brand", icoon: "icons/Brand.png" }
    ]
  },
  {
    naam: "Aarde", icoon: "icons/Aarde.png", 
    elementen: [
      { naam: "Graniet", icoon: "icons/Graniet.png" },
      { naam: "Basalt", icoon: "icons/Basalt.png" },
      { naam: "Obsidiaan", icoon: "icons/Obsidiaan.png" },
      { naam: "Mica", icoon: "icons/Mica.png" },
      { naam: "Veldspaat", icoon: "icons/Veldspaat.png" },
      { naam: "Zand", icoon: "icons/Zand.png" },
      { naam: "Klei", icoon: "icons/Klei.png" },
      { naam: "Glas", icoon: "icons/Glas.png" },
      { naam: "Tufsteen", icoon: "icons/Tufsteen.png" },
      { naam: "Kleisteen", icoon: "icons/Kleisteen.png" },
      { naam: "Leisteen", icoon: "icons/Leisteen.png" },
      { naam: "Schalie", icoon: "icons/Schalie.png" },
      { naam: "Fylliet", icoon: "icons/Fylliet.png" },
      { naam: "Schist", icoon: "icons/Schist.png" },
      { naam: "Gneis", icoon: "icons/Gneis.png" },
      { naam: "Zandsteen", icoon: "icons/Zandsteen.png" },
      { naam: "Kwartsiet", icoon: "icons/Kwartsiet.png" },
      { naam: "Kalksteen", icoon: "icons/Kalksteen.png" },
      { naam: "Marmer", icoon: "icons/Marmer.png" },
      { naam: "Gipssteen", icoon: "icons/Gipssteen.png" },
      { naam: "Aarde", icoon: "icons/Aarde.png" },
      { naam: "Krijt", icoon: "icons/Krijt.png" },
      { naam: "Veen", icoon: "icons/Veen.png" },
      { naam: "Bruinkool", icoon: "icons/Bruinkool.png" },
      { naam: "Steenkool", icoon: "icons/Steenkool.png" }
    ]
  },
  {
    naam: "Landschap", icoon: "icons/Landschap.png", 
    elementen: [
      { naam: "Vulkaan", icoon: "icons/Vulkaan.png" },
      { naam: "Berg", icoon: "icons/Berg.png" },
      { naam: "Poolgebied", icoon: "icons/Poolgebied.png" },
      { naam: "Woestijn", icoon: "icons/Woestijn.png" },
      { naam: "Oase", icoon: "icons/Oase.png" },
      { naam: "Eiland", icoon: "icons/Eiland.png" },
      { naam: "Kust", icoon: "icons/Kust.png" },
      { naam: "Strand", icoon: "icons/Strand.png" },
      { naam: "Klif", icoon: "icons/Klif.png" },
      { naam: "Waterval", icoon: "icons/Waterval.png" },
      { naam: "Rif", icoon: "icons/Rif.png" },
      { naam: "Toendra", icoon: "icons/Toendra.png" },
      { naam: "Moeras", icoon: "icons/Moeras.png" },
      { naam: "Bos", icoon: "icons/Bos.png" },
      { naam: "Regenwoud", icoon: "icons/Regenwoud.png" },
      { naam: "Tropisch regenwoud", icoon: "icons/Tropisch regenwoud.png" },
      { naam: "Heuvel", icoon: "icons/Heuvel.png" },
      { naam: "Kelpwoud", icoon: "icons/Kelpwoud.png" }
    ]
  },
  {
    naam: "Pril leven", icoon: "icons/Pril_leven.png", 
    elementen: [
      { naam: "Luca", icoon: "icons/Luca.png" },
      { naam: "Bacteriën", icoon: "icons/Bacteriën.png" },
      { naam: "Virus", icoon: "icons/Virus.png" },
      { naam: "Stromatolieten", icoon: "icons/Stromatolieten.png" },
      { naam: "Blauwalgen", icoon: "icons/Blauwalgen.png" },
      { naam: "Leca", icoon: "icons/Leca.png" },
      { naam: "Archaeplastiden", icoon: "icons/Archaeplastiden.png" },
      { naam: "Rode algen", icoon: "icons/Rode_algen.png" },
      { naam: "Groene algen", icoon: "icons/Groene_algen.png" },
      { naam: "Steenwortelalgen", icoon: "icons/Steenwortelalgen.png" },
      { naam: "Roodwieren", icoon: "icons/Roodwieren.png" },
      { naam: "Groenwieren", icoon: "icons/Groenwieren.png" },
      { naam: "Foraminiferen", icoon: "icons/Foraminiferen.png" },
      { naam: "Stralendiertjes", icoon: "icons/Stralendiertjes.png" },
      { naam: "Amoeben", icoon: "icons/Amoeben.png" },
      { naam: "Parasieten", icoon: "icons/Parasieten.png" },
      { naam: "Oercnidaria", icoon: "icons/Oercnidaria.png" },
      { naam: "Oerbilateria", icoon: "icons/Oerbilateria.png" },
      { naam: "Schimmel", icoon: "icons/Schimmel.png" },
      { naam: "Gist", icoon: "icons/Gist.png" },
      { naam: "Korstmos", icoon: "icons/Korstmos.png" },
      { naam: "Paddenstoelen", icoon: "icons/Paddenstoelen.png" }
    ]
  },
  {
    naam: "Biologie", icoon: "icons/Biologie.png", 
    elementen: [
      { naam: "Evolutie", icoon: "icons/Evolutie.png" },
      { naam: "Fotosynthese", icoon: "icons/Fotosynthese.png" },
      { naam: "Glucose", icoon: "icons/Glucose.png" },
      { naam: "Schelp", icoon: "icons/Schelp.png" },
      { naam: "Bot", icoon: "icons/Bot.png" },
      { naam: "Weefsel", icoon: "icons/Weefsel.png" },
      { naam: "Spieren", icoon: "icons/Spieren.png" },
      { naam: "Gif", icoon: "icons/Gif.png" },
      { naam: "Detritus", icoon: "icons/Detritus.png" },
      { naam: "Parel", icoon: "icons/Parel.png" },
      { naam: "Wortels", icoon: "icons/Wortels.png" },
      { naam: "Tand", icoon: "icons/Tand.png" },
      { naam: "Oog", icoon: "icons/Oog.png" },
      { naam: "Bloed", icoon: "icons/Bloed.png" },
      { naam: "Vleugels", icoon: "icons/Vleugels.png" },
      { naam: "Blad", icoon: "icons/Blad.png" },
      { naam: "Zaadjes", icoon: "icons/Zaadjes.png" },
      { naam: "Ei", icoon: "icons/Ei.png" },
      { naam: "Veer", icoon: "icons/Veer.png" },
      { naam: "Bloem", icoon: "icons/Bloem.png" }
    ]
  },
  {
    naam: "Waterdieren", icoon: "icons/Waterdieren.png", 
    elementen: [
      { naam: "Sponzen", icoon: "icons/Sponzen.png" },
      { naam: "Koraal", icoon: "icons/Koraal.png" },
      { naam: "Kwallen", icoon: "icons/Kwallen.png" },
      { naam: "Zeeanemonen", icoon: "icons/Zeeanemonen.png" },
      { naam: "Wormen", icoon: "icons/Wormen.png" },
      { naam: "Oertrochozoa", icoon: "icons/Oertrochozoa.png" },
      { naam: "Zeesterren", icoon: "icons/Zeesterren.png" },
      { naam: "Zee-egels", icoon: "icons/Zee-egels.png" },
      { naam: "Manteldieren", icoon: "icons/Manteldieren.png" },
      { naam: "Beerdiertjes", icoon: "icons/Beerdiertjes.png" },
      { naam: "Zeeslakken", icoon: "icons/Zeeslakken.png" },
      { naam: "Tweekleppigen", icoon: "icons/Tweekleppigen.png" },
      { naam: "Inktvissen", icoon: "icons/Inktvissen.png" },
      { naam: "Nautilussen", icoon: "icons/Nautilussen.png" },
      { naam: "Zeeschildpadden", icoon: "icons/Zeeschildpadden.png" }
    ]
  },
    {
    naam: "Brein", icoon: "icons/Brein.png", 
    elementen: [
      { naam: "Zenuwen", icoon: "icons/Zenuwen.png" },
      { naam: "Tast", icoon: "icons/Tast.png" },
      { naam: "Licht", icoon: "icons/Licht.png" },
      { naam: "Brein", icoon: "icons/Brein.png" },
      { naam: "Pijn", icoon: "icons/Pijn.png" },
      { naam: "Geur", icoon: "icons/Geur.png" },
      { naam: "Smaak", icoon: "icons/Smaak.png" },
      { naam: "Kleur", icoon: "icons/Kleur.png" },
      { naam: "Angst", icoon: "icons/Angst.png" },
      { naam: "Vreugde", icoon: "icons/Vreugde.png" },
      { naam: "Drift", icoon: "icons/Drift.png" },
      { naam: "Woede", icoon: "icons/Woede.png" },
      { naam: "Afkeer", icoon: "icons/Afkeer.png" },
      { naam: "Verbazing", icoon: "icons/Verbazing.png" },
      { naam: "Geluid", icoon: "icons/Geluid.png" }
    ]
  },
  {
    naam: "Vissen", icoon: "icons/Vissen.png", 
    elementen: [
      { naam: "Lancetvisjes", icoon: "icons/Lancetvisjes.png" },
      { naam: "Agnathen", icoon: "icons/Agnathen.png" },
      { naam: "Oerstraalvinnigen", icoon: "icons/Oerstraalvinnigen.png" },
      { naam: "Coelacanthen", icoon: "icons/Coelacanthen.png" },
      { naam: "Tiktaalik", icoon: "icons/Tiktaalik.png" },
      { naam: "Haaien", icoon: "icons/Haaien.png" },
      { naam: "Spookhaaien", icoon: "icons/Spookhaaien.png" }
    ]
  },
  {
    naam: "Geleedpotigen", icoon: "icons/Geleedpotigen.png", 
    elementen: [
      { naam: "Oergeleedpotigen", icoon: "icons/Oergeleedpotigen.png" },
      { naam: "Trilobieten", icoon: "icons/Trilobieten.png" },
      { naam: "Oercheliceraten", icoon: "icons/Oercheliceraten.png" },
      { naam: "Oerkreeftjes", icoon: "icons/Oerkreeftjes.png" },
      { naam: "Oerinsecten", icoon: "icons/Oerinsecten.png" },
      { naam: "Zeeschorpioenen", icoon: "icons/Zeeschorpioenen.png" },
      { naam: "Oerspinachtigen", icoon: "icons/Oerspinachtigen.png" },
      { naam: "Zwaardstaarten", icoon: "icons/Zwaardstaarten.png" },
      { naam: "Krill", icoon: "icons/Krill.png" },
      { naam: "Aasgarnalen", icoon: "icons/Aasgarnalen.png" },
      { naam: "Zeepissebedden", icoon: "icons/Zeepissebedden.png" },
      { naam: "Zeepokken", icoon: "icons/Zeepokken.png" },
      { naam: "Vlokreeftjes", icoon: "icons/Vlokreeftjes.png" },
      { naam: "Oertienpotigen", icoon: "icons/Oertienpotigen.png" },
      { naam: "Garnalen", icoon: "icons/Garnalen.png" },
      { naam: "Kreeften", icoon: "icons/Kreeften.png" },
      { naam: "Krabben", icoon: "icons/Krabben.png" },
      { naam: "Heremietkreeften", icoon: "icons/Heremietkreeften.png" },
      { naam: "Reuzenpissebedden", icoon: "icons/Reuzenpissebedden.png" },
      { naam: "Waterspinnen", icoon: "icons/Waterspinnen.png" }
    ]
  },
  {
    naam: "Klein landleven", icoon: "icons/Klein landleven.png", 
    elementen: [
      { naam: "Duizendpoten", icoon: "icons/Duizendpoten.png" },
      { naam: "Zilvervisjes", icoon: "icons/Zilvervisjes.png" },
      { naam: "Schorpioenen", icoon: "icons/Schorpioenen.png" },
      { naam: "Hooiwagens", icoon: "icons/Hooiwagens.png" },
      { naam: "Spinnen", icoon: "icons/Spinnen.png" },
      { naam: "Mijten", icoon: "icons/Mijten.png" },
      { naam: "Teken", icoon: "icons/Teken.png" },
      { naam: "Pissebedden", icoon: "icons/Pissebedden.png" },
      { naam: "Oerpolyneopteren", icoon: "icons/Oerpolyneopteren.png" },
      { naam: "Oerhymenopteren", icoon: "icons/Oerhymenopteren.png" },
      { naam: "Libellen", icoon: "icons/Libellen.png" },
      { naam: "Luizen", icoon: "icons/Luizen.png" },
      { naam: "Kevers", icoon: "icons/Kevers.png" },
      { naam: "Muggen", icoon: "icons/Muggen.png" },
      { naam: "Vliegen", icoon: "icons/Vliegen.png" },
      { naam: "Vlinders", icoon: "icons/Vlinders.png" },
      { naam: "Oertetrapoden", icoon: "icons/Oertetrapoden.png" },
      { naam: "Salamanders", icoon: "icons/Salamanders.png" },
      { naam: "Kikkers", icoon: "icons/Kikkers.png" },
      { naam: "Padden", icoon: "icons/Padden.png" },
      { naam: "Krekels", icoon: "icons/Krekels.png" },
      { naam: "Sprinkhanen", icoon: "icons/Sprinkhanen.png" },
      { naam: "Wandelende takken", icoon: "icons/Wandelende takken.png" },
      { naam: "Kakkerlakken", icoon: "icons/Kakkerlakken.png" },
      { naam: "Termieten", icoon: "icons/Termieten.png" },
      { naam: "Slakken", icoon: "icons/Slakken.png" },
      { naam: "Mieren", icoon: "icons/Mieren.png" },
      { naam: "Wespen", icoon: "icons/Wespen.png" },
      { naam: "Bijen", icoon: "icons/Bijen.png" }
    ]
  },
  {
    naam: "Planten", icoon: "icons/Planten.png", 
    elementen: [
      { naam: "Mos", icoon: "icons/Mos.png" },
      { naam: "Oervaatplanten", icoon: "icons/Oervaatplanten.png" },
      { naam: "Varens", icoon: "icons/Varens.png" },
      { naam: "Oerzaadplanten", icoon: "icons/Oerzaadplanten.png" }
    ]
  },
  {
    naam: "Smaakmakers", icoon: "icons/Smaakmakers.png", 
    elementen: [
      { naam: "Truffels", icoon: "icons/Truffels.png" }
    ]
  },
  {
    naam: "Materialen", icoon: "icons/Materialen.png", 
    elementen: [
      { naam: "Zijde", icoon: "icons/Zijde.png" },
      { naam: "Hout", icoon: "icons/Hout.png" }
    ]
  },
  {
    naam: "Bomen", icoon: "icons/Bomen.png",
    elementen: [
      { naam: "Coniferen", icoon: "icons/Coniferen.png" },
      { naam: "Palmvarens", icoon: "icons/Palmvarens.png" },
      { naam: "Ginkgo", icoon: "icons/Ginkgo.png" }
    ]
  },
  {
    naam: "Reptielen", icoon: "icons/Reptielen.png", 
    elementen: [
      { naam: "Oersynapsiden", icoon: "icons/Oersynapsiden.png" },
      { naam: "Oerdiapsiden", icoon: "icons/Oerdiapsiden.png" },
      { naam: "Oeranapsiden", icoon: "icons/Oeranapsiden.png" },
      { naam: "Schildpadden", icoon: "icons/Schildpadden.png" },
      { naam: "Pterosauriërs", icoon: "icons/Pterosauriërs.png" },
      { naam: "Lepidosauriërs", icoon: "icons/Lepidosauriërs.png" },
      { naam: "Crurotarsi", icoon: "icons/Crurotarsi.png" },
      { naam: "Oerdinosauriërs", icoon: "icons/Oerdinosauriërs.png" },
      { naam: "Oermaniraptoren", icoon: "icons/Oermaniraptoren.png" },
      { naam: "Sauropoden", icoon: "icons/Sauropoden.png" },
      { naam: "Stegosauriërs", icoon: "icons/Stegosauriërs.png" },
      { naam: "Tyrannosauriërs", icoon: "icons/Tyrannosauriërs.png" }
    ]
  },
  {
    naam: "Samenleving", icoon: "icons/Samenleving.png", 
    elementen: [
      { naam: "Hiërarchie", icoon: "icons/Hierarchie.png" },
      { naam: "Werk", icoon: "icons/Werk.png" },
      { naam: "Leger", icoon: "icons/Leger.png" },
      { naam: "Heerser", icoon: "icons/Heerser.png" }
    ]
  },
  {
    naam: "Zoogdieren", icoon: "icons/Zoogdieren.png", 
    elementen: [
      { naam: "Oercynodonten", icoon: "icons/Oercynodonten.png" }
    ]
  },
  {
    naam: "Vogels", icoon: "icons/Vogels.png", 
    elementen: [
      { naam: "Archaeopteryx", icoon: "icons/Archaeopteryx.png" }
    ]
  }
];

const combinaties = [
  {
    input: ["Oerknal", "Kou"],
    /*hint: `Hm.. Wat zal er gebeuren wanneer energie de ruimte krijgt? Afkoelen dus...`,*/
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
    /*hint: `Kou remt chaotische energie af... benieuwd wat de kleine bouwstenen gaan doen`,*/
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
    /*hint: `Een gas kan zo heet worden dat atomen uit elkaar vallen in geladen deeltjes.`,*/
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
    /*hint: `Hm.. Wat als de straling sterk genoeg is atomen te splitsen?`,*/
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
    /*hint: `Laat de bouwstenen elkaar aantrekken, dan zal er pas echt iets zweven...`,*/
    output: [
      { naam: "Gas", icoon: "icons/Gas.png", map: "Lucht",
      quote: `Hydrogen is a light, odorless gas, which, given enough time, turns into people 
      <br><br>- Edward Harrison`
      }
    ]
  },
  {
    input: ["Gas", "Kou"],
    /*hint: `Brrr.. zwevend onder 0 zal het bevriezen`,*/
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
    /*hint: `Hoe meer opeengepakte massa, hoe groter de kans op een ontploffing`,*/
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
    /*hint: `... ... ... BOEM!`,*/
    output: [
      { naam: "Explosie", icoon: "icons/Explosie.png", map: "Vuur",
      quote: `As in an explosion, I would erupt with all the wonderful things I saw and understood in this world
      <br><br>- Boris Pasternak`
      }
    ]
  },
  {
    input: ["Ster", "Warmte"],
    /*hint: `De corona is de extreemhete buitenlaag van de zon, waar het effect van de hitte zichtbaar wordt.`,*/
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
    /*hint: `Uiteindelijk verliest elke ster het gevecht van de natuurkrachten...`,*/
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
      ["Ster", "Gas"], ["Ster", "IJzer"]
    ],
    /*hint: `Kijk hoe het blijft hangen in een baan rond haar ster...`,*/
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
    /*hint: `Zo veel sterren.. het lijken wel witte melkslierten rond het afvoerputje`,*/
    vers: `En de Zon stroomt naar haar Bestemming, <br>dat is de bepaling van de Macht, van de Wijsheid
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
    /*hint: `Als daar alles implodeert onder de zwaartekracht, prikken we dan geen gaten in ons systeem?`,*/
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
      ["Asteroïden", "Venus"], ["Asteroïden", "Mercurius"], ["Asteroïden", "De Maan"],
      ["Planeet", "Planeet"], ["Planeet", "Mars"], ["Planeet", "Venus"], 
      ["Planeet", "Mercurius"], ["Planeet", "De Maan"]
    ],
    /*hint: `Wow.. een spectaculaire botsing maakt alles heet en vloeibaar...`,*/
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
    /*hint: `Ik ken een paar planeten, dat zijn grote vriendelijke gasreuzen`,*/
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
    /*hint: `De schoonheid van sommige planeten wil ik gekoeld bewaard...`,*/
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
    /*hint: `Als ijzer zijn baan om de zon vindt, kan het wel eens iets moois opleveren...`,*/
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
    /*hint: `Ook het vuur van lava moet ooit rusten en bedaren...`,*/
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
    /*hint: `De Aarde.. daar past een mooi broertje bij voor de nacht.`,*/
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
    /*hint: `Stenen worden compacter onder druk en hitte, zo ook graniet.`,*/
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
    /*hint: `Laat magma de aardkorst in beweging houden...`,*/
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
    /*hint: `Al die beweging op dat aardoppervlak, dat zal vast iets doen met de kern.`,*/
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
    /*hint: `Lava beweegt, dus laat het ook naar boven komen...`,*/
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
    /*hint: `Die platentektoniek kan nog wel eens voor wat stenen reliëf zorgen...`,*/
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
    /*hint: `Ik zie potentie in granietmagma.. laat maar even rusten.`,*/
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
    /*hint: `Als plasma van de Zon te dichtbij komt, vallen de atomen neer als dansend licht.`,*/
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
      ["Vulkaan", "Platentektoniek"], ["Berg", "Platentektoniek"]
    ],
    output: [
      { naam: "Aardbeving", icoon: "icons/Aardbeving.png", map: "Krachten", 
        quote: `An earthquake achieves what the law promises but does not in practice maintain - the equality of all men
        <br><br>- Ignazio Silone`
      }
    ]
  },
  {
    input: [
      ["Magmadamp", "Kou"], ["Regen", "Magmadamp"]
    ],
    /*hint: `Het neerregenen van magmadamp is een scheikundig feestje...`,*/
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
    /*hint: `Een bijzonder goedje komt vrij wanneer zwavel zich mengt in de chemische soep van magmadamp.`,*/
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
    /*hint: `Nu zijn de omstandigheden juist om water te laten vloeien.`,*/
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
    /*hint: `We moeten ook een plek hebben waar het altijd koud is en vol ijs.`,*/
    output: [
      { naam: "Poolgebied", icoon: "icons/Poolgebied.png", map: "Landschap", 
        quote: `The only place on Earth that is still as it should be. May we never tame it
        <br><br>- Andrew Denton`
      }
    ]
  },
  {
    input: [
      ["Water", "IJzer"], ["Lucht", "IJzer"]
    ],
    /*hint: `Oei, dat gebeurt er dus als ijzer oxideert...`,*/
    output: [
      { naam: "Roest", icoon: "icons/Roest.png", map: "Chemie", 
        quote: `None can destroy iron, but its own rust can. Likewise none can destroy a person, but its own mindset can
        <br><br>- Ratan Tata`
      }
    ]
  },
  {
    input: ["Vuur", "Water"],
    /*hint: `Een big splash, vuur gedoofd en de energie kringelt omhoog...`,*/
    output: [
      { naam: "Damp", icoon: "icons/Damp.png", map: "Lucht", 
        quote: `Enthusiasm is the steam that drives the engine
        <br><br>- Napoleon Hill`
      }
    ]
  },
  {
    input: ["Lava", "Water"],
    /*hint: `Een big splash, vuur gedoofd en de energie kringelt omhoog...`,*/
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
    /*hint: `Erosie, erosie, erosie...`,*/
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
    /*hint: `Wat een glinsteringen, is het nog wel obsidiaan of kijk ik er dwars doorheen?`,*/
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
    /*hint: `De zichtbare invloed van de Maan zit 'm in de getijden.`,*/
    output: [
      { naam: "Golf", icoon: "icons/Golf.png", map: "Water", 
        quote: `You don't understand. You're not a wave. You're part of the ocean 
        <br><br>- Morrie Schwartz`
      }
    ]
  },
  {
    input: ["As", "Water"],
    /*hint: `As? Laat maar aanpappen en nathouden, dat wordt vanzelf weer wat.`,*/
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
    /*hint: `Hoe meer water, hoe beter.`,*/
    output: [
      { naam: "Meer", icoon: "icons/Meer.png", map: "Water", 
        quote: `Make your heart like a lake <br>with a calm, still surface and great depths of kindness
        <br><br>- Lao Tzu`
      }
    ]
  },
  {
    input: [
      ["Damp", "Kou"], ["Damp", "Damp"]
    ],
    /*hint: `Nog iets meer damp en ik zie geen hand voor ogen.`,*/
    output: [
      { naam: "Mist", icoon: "icons/Mist.png", map: "Lucht", 
        quote: `In nature, everything has a job. The job of the fog is to beautify further the existing beauties
        <br><br>- Mehmet Hdan`
      }
    ]
  },
  {
    input: [
      ["Damp", "Zwaartekracht"], ["Damp", "De Aarde"], ["Damp", "Planeet"], ["Damp", "Water"]
    ],
    /*hint: `Dampen pakken zich samen in nieuwe formaties...`,*/
    output: [
      { naam: "Wolk", icoon: "icons/Wolk.png", map: "Lucht", 
        quote: `The sky and the sun are always there. It's the clouds that come and go 
        <br><br>- Rachel Joyce`
      }
    ]
  },
  {
    input: [
      ["Wolk", "De Aarde"], ["Wolk", "Planeet"]
    ],
    /*hint: `Wolken kringelen rond... het is tijd om de planeten lucht te geven.`,*/
    vers: `En Wij maakten van de hemel een beschermend dak, <br>maar zij wenden zich af van haar signalen 
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
    /*hint: `Water op land kan verzanden...`,*/
    output: [
      { naam: "Ven", icoon: "icons/Ven.png", map: "Water", 
        quote: `Feather footed through the plashy fen passes the questing vole 
        <br><br>- Evelyn Waugh`
      }
    ]
  },
  {
    input: ["Zand", "Zand"],
    /*hint: `Zand zo ver je kan kijken.. dat kan ook mooi zijn.`,*/
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
    /*hint: `Wat een glinsteringen, is het nog wel tufsteen of kijk ik er dwars doorheen?`,*/
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
    /*hint: `Kan je stenen ook kleien? Waarom niet.`,*/
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
    /*hint: `Meer water? Of een zee van water...`,*/
    output: [
      { naam: "Zee", icoon: "icons/Zee.png", map: "Water", 
        quote: `Water is the driving force of all nature
        <br><br>- Leonardo da Vinci`
      }
    ]
  },
  {
    input: [
      ["Wolk", "Kou"], ["Wolk", "Zwaartekracht"], ["Wolk", "Water"], ["Wolk", "Berg"]
    ],
    /*hint: `Laat de wolken niet neerdalen, wie weet wat er dan gebeurt.`,*/
    output: [
      { naam: "Regen", icoon: "icons/Regen.png", map: "Water", 
        quote: `It can't rain all the time 
        <br><br>- James O'Barr`
      }
    ]
  },
  {
    input: [
      ["Wolk", "Ster"], ["Regen", "Ster"], ["Licht", "Wolk"], ["Licht", "Regen"]
    ],
    /*hint: `Als het licht schijnt door de regendruppels.. je weet wel waar ik naartoe wil.`,*/
    output: [
      { naam: "Regenboog", icoon: "icons/Regenboog.png", map: "Lucht", 
        quote: `Somewhere over the rainbow, skies are blue, and the dreams that you dare to dream really do come true
        <br><br>- Judy Garland`
      }
    ]
  },
  {
    input: [
      ["Wolk", "Rook"], ["Regen", "Rook"]
    ],
    /*hint: `Oei, oei, regen uit zwarte wolken.`,*/
    output: [
      { naam: "Zure regen", icoon: "icons/Zure_regen.png", map: "Water", 
        quote: `Tragedy is like strong acid - it dissolves away all but the very gold of truth 
        <br><br>- D.H. Lawrence`
      }
    ]
  },
  {
    input: [
      ["Wolk", "Wolk"], ["Wind", "Wolk"], ["Wind", "Wind"], ["Regen", "Wind"]
    ],
    /*hint: `Wanneer de wolken samenkomen, barst het los.`,*/
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
    /*hint: `Ik zucht bij verschillende temperaturen in de lucht.`,*/
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
      ["Woestijn", "Water"], ["Woestijn", "Meer"], ["Woestijn", "Ven"], ["Woestijn", "Rivier"]
    ],
    /*hint: `In de droogste gebieden komt het water soms gewoon uit de grond.`,*/
    output: [
      { naam: "Oase", icoon: "icons/Oase.png", map: "Landschap", 
        quote: `All that the historians give us are little oases in the desert of time, and we linger fondly in these,
        forgetting the vast tracks betwewen one and another that were trodden by the weary generations of men
        <br><br>- J.A. Spender`
      }
    ]
  },
  {
    input: [
      ["Kleisteen", "Warmte"], ["Kleisteen", "Druk"]
    ],
    /*hint: `Hm.. is er nog een stenen metamorfose door druk en hitte te bedenken?`,*/
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
    /*hint: `Hm.. wat houd je over als zout water snel verdampt?`,*/
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
    /*hint: `Een speciale plek is daar waar de berg het water raakt..`,*/
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
    /*hint: `Ik heb meer zee nodig om in te schuilen.`,*/
    output: [
      { naam: "Oceaan", icoon: "icons/Oceaan.png", map: "Water", 
        quote: `Individually, we are one drop. Together, we are an ocean 
        <br><br>- Ryunosuke Akutagawa`
      }
    ]
  },
  {
    input: ["Regen", "Kou"],
    /*hint: `Wat als druppels dwarrelen als kristallen?`,*/
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
    /*hint: `Er mist nog iets.. harde regenbolletjes?`,*/
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
    /*hint: `Bergen zouden glijbanen kunnen zijn van wolken naar de zee...`,*/
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
    /*hint: `Kijk.. als de regen maar zuur genoeg is, weekt het vanzelf de elementen los.`,*/
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
    /*hint: `Kijk.. als de regen maar zuur genoeg is, weekt het vanzelf de elementen los.`,*/
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
    /*hint: `Kijk.. als de regen maar zuur genoeg is, weekt het vanzelf de elementen los.`,*/
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
    /*hint: `Kijk.. als de regen maar zuur genoeg is, weekt het vanzelf de elementen los.`,*/
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
    /*hint: `Bliksem is zo heet dat bij inslag en dampwolk kan ontstaan met knetterend spectaculair resultaat.`,*/
    output: [
      { naam: "Bolbliksem", icoon: "icons/Bolbliksem.png", map: "Vuur", 
        quote: `Ball lightning is one of the most enigmatic atmospheric phenomena: small, glowing spheres that appear 
        during thunderstorms, with behavior that remains only partially understood
        <br><br>- Martin Uman`
      }
    ]
  }, 
  {
    input: [
      ["Wind", "Storm"], ["Storm", "Storm"], ["Storm", "Regen"]
    ],
    /*hint: `Het mag ook megalomaner: meer storm, meer wind...`,*/
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
    /*hint: `Het mag ook megalomaner: meer storm, meer wind...`,*/
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
    /*hint: `Ook zout kan door de grond zakken en dan wordt het zwaar.`,*/
    output: [
      { naam: "Steenzout", icoon: "icons/Steenzout.png", map: "Chemie", 
        quote: `Salt is the only rock directly consumed by man 
        <br><br>- Margaret Visser`
      }
    ]
  },
  {
    input: [
      ["Zout", "Meer"], ["Kust", "Meer"], ["Strand", "Meer"], ["Rif", "Kust"]
    ],
    /*hint: `Ken je die zoute meren langs de kust?`,*/
    output: [
      { naam: "Lagune", icoon: "icons/Lagune.png", map: "Water", 
        quote: `Out to sea, the calm lagoon waters were darkening, while the commets overhead glowed brighter, omens 
        in the gloaming
        <br><br>- Julian May`
      }
    ]
  },
  {
    input: [
      ["Gipssteen", "Water"], ["Gipssteen", "Meer"], ["Gipssteen", "Zee"], ["Gipssteen", "Oceaan"],
      ["Rivier", "Gipssteen"]
    ],
    /*hint: `Het eroderen van meer stenen kan nog wel eens van pas komen...`,*/
    output: [
      { naam: "Gips", icoon: "icons/Gips.png", map: "Chemie", 
        quote: `The broken bone, once set together, is stronger than ever 
        <br><br>- John Lyly`
      }
    ]
  },
  {
    input: [
      ["Kust", "Graniet"], ["Kust", "Basalt"], ["Kust", "Berg"], ["Rivier", "Berg"], ["Zandsteen", "Kust"],
      ["Kalksteen", "Kust"], ["Krijt", "Kust"]
    ],
    /*hint: `Bij de hoge rots.. pas op dat je niet van de rand van de wereld valt!`,*/
    output: [
      { naam: "Klif", icoon: "icons/Klif.png", map: "Landschap", 
        quote: `Be like the cliff against which the waves continually break; but it stands firm and tames the fury
        of the water around it
        <br><br>- Marcus Aurelius`
      }
    ]
  },
  {
    input: ["Kust", "Zand"],
    /*hint: `Versleten steen aan de kust kan slijten tot zachte grond.`,*/
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
    /*hint: `Slaat het weer om? Dan wordt de kust als eerste de dupe...`,*/
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
    /*hint: `De oceaanvloer die zich een weg naar boven baant? Dat kan natuurlijk ook.`,*/
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
    /*hint: `Silicium verhardt en kan verzanden in steen.`,*/
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
    /*hint: `Tot op het bot verkalken... dat wordt weer steen.`,*/
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
    /*hint: `Onder hoge druk wordt alles... vast?`,*/
    output: [
      { naam: "Fylliet", icoon: "icons/Fylliet.png", map: "Aarde", 
        quote: `Phyllite shows a silky sheen due to the minute scales of mica developed by metamorphism 
        <br><br>- Rollin Salisbury`
      }
    ]
  },
  {
    input: [
      ["Klif", "Meer"], ["Klif", "Rivier"]
    ],
    /*hint: `Laat het water niet over het randje vallen..`,*/
    output: [
      { naam: "Waterval", icoon: "icons/Waterval.png", map: "Landschap", 
        quote: `As long as I live, I'll hear waterfalls and birds and winds sing... I'll acquaint myself with the glaciers
        and wild gardens, and get as near the heart of the world as I can
        <br><br>- John Muir`
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
    /*hint: `Het mooiste steen ontstaat onder hoge druk en warmte.`,*/
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
    /*hint: `Mijn favoriete steen moet nog komen.. en het komt uit wit gesteente.`,*/
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
    /*hint: `Een mineraal ontbreekt nog.. uit verwering van wit gesteente.`,*/
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
    /*hint: `Waar zure regen soms niet goed voor kan zijn..`,*/
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
    /*hint: `Fylliet is slechts een tussenstadium.. er komt nog meer.`,*/
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
    /*hint: `Kijk.. als de regen maar zuur genoeg is, weekt het vanzelf de elementen los.`,*/
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
    /*hint: `Waar zure regen soms niet goed voor kan zijn..`,*/
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
    /*hint: `Nu zijn de omstandigheden juist.. de vijfde natuurkracht strijdend voor diens voortbestaan.`,*/
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
    vers: `En Wij hebben uit water alles wat leeft gemaakt. <br>Zien zij dan niet?
    <br><br>De Profeten (21:30)`,
    uitleg: {
      threshold: {
        titel: "Leven", 
        tekst: "Je moet eerst nog wat meer halen...",
      },
      normal: {
        achtergrond: "afb/eersteleven.png",
        titel: "NATUURKRACHT VIJF: LEVEN",
        tekst: `
        <span>Oceanen en plasma's - water en vuur - zijn nodig voor het creëren van leven uit niet-leven. In 1952 bootsten
        wetenschappers dit proces voor het eerst na in een lab, waarbij een vroege aardatmosfeer elektrische schokken te 
        verduren kreeg. Binnen enkele dagen dreven eenvoudige organische moleculen als roze slib van aminozuren op het
        water. Dit gebeurde in het groot toen de Maan noog veel dichter bij de Aarde stond. Blikseminslagen van boven en
        spuwende vulkanen van onder maakten van de oceaan een chemische soep: de oersoep.</span>
        <br><br>
        <span>Elektrische ontladingen zijn nodig om nieuwe moleculen te vormen, omdat temperaturen normaal te kil zijn.
        En omgekeerd konden atomen zich pas vormen toen het Heelal koel genoeg was. Toch zijn uitzonderlijke omstandigheden
        nodig om deze moleculen aan elkaar vast te rijgen om zo eiwitten en koolhydraten te vormen. De Aarde bood precies 
        die omstandigheden waar chemisch rijke magma uit haar binnenste door de oceaanbodem sijpelde, beschermd tegen 
        zonnestraling en meteorietenbombardementen.</span>
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
    /*hint: `Een grotere schok is nodig om de motortjes van die zombiecellen te laten blijven draaien...`,*/
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
      ["Bacteriën", "Sulfaat"], ["Moeras", "Bacteriën"]
    ],
    /*hint: `Sommige micro-organismen kunnen sulfaat goed gebruiken.`,*/
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
    /*hint: `Hoe meer bacteriën, hoe meer variatie...`,*/
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
    /*hint: `Kolonies bacteriën zo groot als rotsen? Now we're talking.`,*/
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
    input: ["Detritus", "Druk"],
    /*hint: `Organisch materiaal zinkt naar de bodem en komt onder hoge druk te staan.`,*/
    output: [
      { naam: "Aardolie", icoon: "icons/Aardolie.png", map: "Water", 
        quote: `Petroleum is the product of a distillation from great depth and issues from the primitive rocks
        beneath which the forces of all volcanic action lie
        <br><br>- Alexander von Humboldt`
      }
    ]
  },
  {
    input: ["Detritus", "Bacteriën"],
    /*hint: `De een zijn dood is de ander zijn brood in de voedselketen.`,*/
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
    /*hint: `Bacteriën zijn geavanceerde cellen, maar die cel kan nog veel geavanceerder.`,*/
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
      ["Bruinwieren", "Ster"], ["Bruinwieren", "Licht"],
      ["Steenwortelalgen", "Ster"], ["Steenwortelalgen", "Licht"],
      ["Groenwieren", "Ster"], ["Groenwieren", "Licht"],
      ["map:Planten", "Ster"], ["map:Planten", "Licht"],
      ["map:Bomen", "Ster"], ["map:Bomen", "Licht"],
      ["map:Bloemen", "Ster"], ["map:Bloemen", "Licht"],
      ["map:Fruit", "Ster"], ["map:Fruit", "Licht"],
      ["map:Groenten", "Ster"], ["map:Groenten", "Licht"],
      ["map:Granen", "Ster"], ["map:Granen", "Licht"]
    ],
    /*hint: `Het regent zonnestralen en dus regent het voedsel voor archaeplastiden.`,*/
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
    input: [
      ["Leca", "Basalt"], ["Leca", "Klei"], ["Aarde", "Leca"] 
    ],
    /*hint: `Als zelfs 1 cel kleine voetjes kan hebben, dan leerde het lopen op de bodem.`,*/
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
    /*hint: `Wat gebruikt een eencellige als schild? Juist ja, een zandkorrel.`,*/
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
      ["Foraminiferen", "Roodwieren"], ["Foraminiferen", "Bruinwieren"], ["Foraminiferen", "Steenwortelalgen"], 
      ["Foraminiferen", "Groenwieren"]
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
    /*hint: `Het vroegste skelet bestond uit silicium.. en er was maar 1 cel voor nodig.`,*/
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
      ["Stralendiertjes", "Roodwieren"], ["Stralendiertjes", "Steenwortelalgen"], ["Stralendiertjes", "Groenwieren"]
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
    /*hint: `De een zijn dood is de ander zijn brood.. maar wat zijn ze broodnodig.`,*/
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
    /*hint: `Schimmel eet dood materiaal, planten hebben fotosynthese, maar welke eerste meercelligen aten leven?`,*/
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
    /*hint: `Kent u endosymbiose? Het is wat je krijgt als de ene cel in de ander leeft en zo het geheel iets nieuws wordt.`,*/
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
    /*hint: `UV-straling splitst zuurstof op en vormt tezamen met zuurstof iets nieuws.`,*/
    output: [
      { naam: "Ozon", icoon: "icons/Ozon.png", map: "Lucht", 
        quote: `Man must rise above the Earth to the top of the atmosphere and beyond - for only thus will he fully
        understand the world in which he lives
        <br><br>- Socrates`
      }
    ]
  },
  {
    input: ["Zuurstof", "Gas"],
    output: [
      { naam: "Nitraat", icoon: "icons/Nitraat.png", map: "Chemie", 
        quote: `For nitrates are not the land, nor phosphates, nor the fiber of the cotton. They are its trace, 
        its breath, but the land is so much more 
        <br><br>- John Steinbeck`
      }
    ]
  },
  {
    input: ["Zuurstof", "Zwavel"],
    output: [
      { naam: "Sulfaat", icoon: "icons/Sulfaat.png", map: "Chemie", 
        quote: `Sulfate ion, when present in significant amount, tends to inhibit the growth of gypsum 
        <br><br>- Linus Pauling`
      }
    ]
  },
  {
    input: [
      ["Amoeben", "Evolutie"], ["Amoeben", "Amoeben"], ["Slakken", "Glucose"]
    ],
    /*hint: `Als Amoeben samenkomen gaan ze functioneren als één grote zwam van...`,*/
    tijd: 900_000_000,
    output: [
      { naam: "Slijm", icoon: "icons/Slijm.png", map: "Water", 
        quote: `Even the lowliest forms of life, the molds and slimes, are far more intricate than we had imagined 
        <br><br>- Lewis Thomas`
      }
    ]
  },
  {
    input: ["Foraminiferen", "Druk"],
    /*hint: `Die kleine schelpjes van foraminiferen leveren onder druk ook iets moois op.`,*/
    output: [
      { naam: "Krijt", icoon: "icons/Krijt.png", map: "Aarde", 
        quote: `Teachers can change lives with just the right mix of chalk and challenges
        <br><br>- Joyce Meyer`
      }
    ]
  },
  {
    input: [
      ["Foraminiferen", "Zand"], ["Oertrochozoa", "Kalk"]
    ],
    /*hint: `Kijk wat foraminiferen met zand doen of weekdieren met kalk...`,*/
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
    /*hint: `Kijk, nu kan het land worden omgeploegd door schimmels voor de anderen om op te leven.`,*/
    vers: `En een teken voor hen is de dode aarde, Wij brengen haar tot leven <br>en brengen daaruit graan waaarvan zij eten
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
    /*hint: `Sommige eencellige schimmels specialiseren zich in suikers.`,*/
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
    /*hint: `Wat nou... als sponzen skeletten zouden maken?`,*/
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
      ["Koraal", "Bacteriën"], ["Koraal", "Blauwalgen"], ["Koraal", "Groene algen"], ["Koraal", "Rode algen"],
      ["Koraal", "Amoeben"], ["Koraal", "Foraminiferen"], ["Koraal", "Stralendiertjes"], ["Koraal", "Krill"],
      ["Koraal", "Vlokreeftjes"]
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
    /*hint: `Meercelligheid heeft als voordeel dat het kan specialiseren in bewegen en de directe omgeving meten.`,*/
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
    /*hint: `Die plantencellen reageren op licht.. laten we ze verschillende kleuren geven.`,*/
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
    /*hint: `Gesuikerde schimmels.. dat kan niet goed zijn voor het brein.`,*/
    output: [
      { naam: "Alcohol", icoon: "icons/Alcohol.png", map: "Chemie",
        quote: `Reality is an illusion that occurs duo to the lack of alcohol
        <br><br>- W.C. Fields`
      }
    ]
  },
  {
    input: ["Spieren", "Leca"],
    /*hint: `Laat de eencellige dieren eerst vertakken in twee ideeën over de beweging van hun lichaam.`,*/
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
    input: [
      ["Koraal", "Kalk"], ["Oerbilateria", "Kalk"], ["Wormen", "Kalk"], ["Zeesterren", "Kalk"]
    ],
    /*hint: `Wat leven wel niet met een beetje kalk kan doen...`,*/
    vers: `Toen maakten Wij van de Druppel een Bloedklodder, daarna maakten Wij van de Bloedklodder een kneedbaar klompje,
    daarna maakten Wij van het kneedbaar klompje Botten, daarna bekleedden Wij de Botten met Vlees, toen lieten Wij het 
    groeien tot een nieuwe Creatie
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
      ["Koraal", "Koraal"], ["Roodwieren", "Kalk"], ["Koraal", "Sponzen"], ["Koraal", "Zeeanemonen"]
    ],
    /*hint: `Een onderwaterlandschap? Ik zeg meer koraal.`,*/
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
    /*hint: `Geef planten ook een lichaam, wier schoonheid ik waardeer.`,*/
    output: [
      { naam: "Roodwieren", icoon: "icons/Roodwieren.png", map: "Pril leven", 
        quote: `To know how it feels to be seaweed you have to get in the water 
        <br><br>- Saul Bellow`
      }
    ]
  },
  {
    input: ["Groene algen", "Kalk"],
    /*hint: `Ook algen kunnen skeletten maken...`,*/
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
    /*hint: `Geef planten ook een lichaam, wier schoonheid ik waardeer.`,*/
    tijd: 700_000_000,
    output: [
      { naam: "Groenwieren", icoon: "icons/Groenwieren.png", map: "Pril leven", 
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
    /*hint: `Ik houd van symmetrie, maar kan jij je symmetrische dieren voorstellen?`,*/
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
      ["Kwallen", "Oertrochozoa"], ["Kwallen", "Wormen"], ["Kwallen", "Beerdiertjes"], ["Kwallen", "Krill"],
      ["Kwallen", "Vlokreeftjes"]
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
      ["Zeeanemonen", "Oerbilateria"], ["Zeeanemonen", "Oertrochozoa"], ["Zeeanemonen", "Wormen"], 
      ["Zeeanemonen", "Beerdiertjes"], ["Zeeanemeonen", "Krill"], ["Zeeanemonen", "Vlokreeftjes"]
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
//------------ DOOD --------------//
  {
    input: [
      ["map:Pril leven", "Radioactiviteit"], ["map:Pril leven", "IJs"], ["map:Pril leven", "Gif"],
      ["map:Vissen", "Radioactiviteit"],
      ["map:Planten", "Radioactiviteit"],
      ["map:Smaakmakers", "Radioactiviteit"],
      ["map:Bloemen", "Radioactiviteit"],
      ["map:Fruit", "Radioactiviteit"],
      ["map:Groenten", "Radioactiviteit"],
      ["map:Granen", "Radioactiviteit"],
      /* --- BIOLOGIE --- */
      ["Weefsel", "Radioactiviteit"], 
      ["Spieren", "Radioactiviteit"], 
      ["Wortels", "Radioactiviteit"], ["Wortels", "Gif"], 
      ["Blad", "Radioactiviteit"], ["Blad", "Gif"], 
      ["Bloem", "Radioactiviteit"], ["Bloem", "Gif"],
      /* --- WATERDIEREN --- */
      ["Sponzen", "Radioactiviteit"], ["Sponzen", "Gif"], 
      ["Kwallen", "Radioactiviteit"], ["Kwallen", "Gif"], 
      ["Zeeanemonen", "Radioactiviteit"], ["Zeeanemonen", "Gif"], 
      ["Wormen", "Radioactiviteit"], ["Wormen", "Gif"], 
      ["Oertrochozoa", "Radioactiviteit"], ["Oertrochozoa", "Gif"],
      ["Zeesterren", "Radioactiviteit"], ["Zeesterren", "Gif"], 
      ["Manteldieren", "Radioactiviteit"], ["Manteldieren", "Gif"], 
        ["Beerdiertjes", "Gif"], 
      ["Inktvissen", "Radioactiviteit"], ["Inktvissen", "Gif"],
      /* --- KLEIN LANDLEVEN --- */ 
      ["Duizendpoten", "Radioactiviteit"], ["Duizendpoten", "Gif"],
      ["Zilvervisjes", "Radioactiviteit"], ["Zilvervisjes", "Gif"],
      ["Hooiwagens", "Radioactiviteit"], ["Hooiwagens", "Gif"], 
      ["Spinnen", "Radioactiviteit"], ["Spinnen", "Gif"], 
      ["Mijten", "Radioactiviteit"], ["Mijten", "Gif"], 
      ["Teken", "Radioactiviteit"], ["Teken", "Gif"], 
      ["Pissebedden", "Radioactiviteit"], ["Pissebedden", "Gif"], 
      ["Oerpolyneopteren", "Radioactiviteit"], ["Oerpolyneopteren", "Gif"],
      ["Oerhymenopteren", "Radioactiviteit"], ["Oerhymenopteren", "Gif"], 
      ["Libellen", "Radioactiviteit"], ["Libellen", "Gif"], 
      ["Luizen", "Radioactiviteit"], ["Luizen", "Gif"], 
      ["Kevers", "Radioactiviteit"], ["Kevers", "Gif"], 
      ["Muggen", "Radioactiviteit"], ["Muggen", "Gif"], 
      ["Vliegen", "Radioactiviteit"], ["Vliegen", "Gif"],
      ["Vlinders", "Radioactiviteit"], ["Vlinders", "Gif"], 
      ["Krekels", "Radioactiviteit"], ["Krekels", "Gif"], 
      ["Sprinkhanen", "Radioactiviteit"], ["Sprinkhanen", "Gif"], 
      ["Wandelende takken", "Radioactiviteit"], ["Wandelende takken", "Gif"], 
        ["Kakkerlakken", "Gif"], 
      ["Termieten", "Radioactiviteit"], ["Termieten", "Gif"], 
      ["Mieren", "Radioactiviteit"], ["Mieren", "Gif"],
      ["Wespen", "Radioactiviteit"], ["Wespen", "Gif"], 
      ["Bijen", "Radioactiviteit"], ["Bijen", "Gif"],
      /* --- VISSEN --- */
      ["Lancetvisjes", "Gif"], ["Agnathen", "Gif"], ["Haaien", "Gif"], ["Spookhaaien", "Gif"], ["Zeeduivels", "Gif"], 
      ["Manta", "Gif"], ["Zalm", "Gif"], ["Haring", "Gif"], ["Snoeken", "Gif"], ["Kabeljauwen", "Gif"], 
      ["Manvissen", "Gif"], ["Forel", "Gif"], ["Papegaaivissen", "Gif"], ["Platvissen", "Gif"], ["Karpers", "Gif"], 
      ["Vliegvissen", "Gif"], ["Meervallen", "Gif"], ["Tonijn", "Gif"], ["Makreel", "Gif"], ["Paling", "Gif"],
      ["Zeepaardjes", "Gif"], ["Kogelvissen", "Gif"], ["Clownvissen", "Gif"], ["Doktersvissen", "Gif"], 
      ["Koraalduivels", "Gif"], ["Piranha", "Gif"], 
      /* --- GENOTWAREN --- */
      ["Agave", "Radioactiviteit"], 
      ["Suikerriet", "Radioactiviteit"], 
      ["Coca", "Radioactiviteit"], 
      ["Hop", "Radioactiviteit"], 
      ["Theeplanten", "Radioactiviteit"], 
      ["Lavendel", "Radioactiviteit"], 
      ["Tabaksplanten", "Radioactiviteit"], 
      ["Koffieplanten", "Radioactiviteit"], 
      ["Jasmijn", "Radioactiviteit"], 
      ["Kamille", "Radioactiviteit"],
      /* --- MATERIALEN --- */
      ["Papyrusriet", "Radioactiviteit"],
      ["Rotan", "Radioactiviteit"],
      ["Bamboe", "Radioactiviteit"],
      ["Hennep", "Radioactiviteit"],
      ["Vlas", "Radioactiviteit"]
    ],
    /*hint: `Aan al het leven komt een einde... behalve aan leven zelf?`,*/
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
      ["map:Geleedpotigen", "Radioactiviteit"], ["map:Geleedpotigen", "Gif"], 
      ["map:Reptielen", "Radioactiviteit"], ["map:Reptielen", "Gif"], 
      ["map:Zoogdieren", "Radioactiviteit"], ["map:Zoogdieren", "Gif"],
      ["map:Vogels", "Radioactiviteit"], ["map:Vogels", "Gif"],
      /* --- WATERDIEREN --- */
      ["Koraal", "Radioactiviteit"], ["Koraal", "Gif"], 
      ["Zee-egels", "Radioactiviteit"], ["Zee-egels", "Gif"], 
      ["Zeeschildpadden", "Radioactiviteit"], ["Zeeschildpadden", "Gif"],
      /* --- KLEIN LANDLEVEN --- */
        ["Schorpioenen", "Gif"], 
      ["Oertetrapoden", "Radioactiviteit"], ["Oertetrapoden", "Gif"],
      ["Salamanders", "Radioactiviteit"], ["Salamanders", "Gif"],
      ["Kikkers", "Radioactiviteit"], ["Kikkers", "Gif"],
      ["Padden", "Radioactiviteit"], ["Padden", "Gif"]
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
      /* --- WATERDIEREN --- */
      ["Zeeslakken", "Radioactiviteit"], ["Zeeslakken", "Gif"], 
      ["Tweekleppigen", "Radioactiviteit"], ["Tweekleppigen", "Gif"],
      ["Nautilussen", "Radioactiviteit"], ["Nautilussen", "Gif"],
      /* --- KLEIN LANDLEVEN --- */
      ["Slakken", "Radioactiviteit"], ["Slakken", "Zout"], ["Slakken", "Steenzout"], ["Slakken", "Gif"]
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
      ["map:Bomen", "Radioactiviteit"],
      /* --- GENOTWAREN --- */
      ["Wierookbomen", "Radioactiviteit"], 
      ["Mirre", "Radioactiviteit"],
      /* --- MATERIALEN --- */
     ["Rubberbomen", "Radioactiviteit"]
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
      { naam: "Hout", icoon: "icons/Hout.png", map: "Materialen", 
        quote: `Nature does nothing in vain; the wood and bark of trees serve both shelter and sustenance
        <br><br>- Aristoteles`
      }
    ]
  },
  {
    input: [
      ["map:Pril leven", "Vuur"], ["map:Pril leven", "Lava"],
      ["map:Vissen", "Vuur"], ["map:Vissen", "Lava"],
      ["map:Klein landleven", "Vuur"], ["map:Klein landleven", "Lava"],
      ["map:Planten", "Vuur"], ["map:Planten", "Lava"],
      ["map:Smaakmakers", "Vuur"], ["map:Smaakmakers", "Lava"],
      ["map:Bomen", "Vuur"], ["map:Bomen", "Lava"],
      ["map:Reptielen", "Lava"], 
      ["map:Zoogdieren", "Lava"],
      ["map:Vogels", "Lava"],
      ["map:Bloemen", "Vuur"], ["map:Bloemen", "Lava"],
      ["map:Fruit", "Vuur"], ["map:Fruit", "Lava"],
      ["map:Groenten", "Vuur"], ["map:Groenten", "Lava"],
      ["map:Granen", "Vuur"], ["map:Granen", "Lava"],
      /* --- BIOLOGIE --- */
      ["Weefsel", "Vuur"], ["Weefsel", "Lava"],
      ["Spieren", "Vuur"], ["Spieren", "Lava"],
      ["Wortels", "Vuur"], ["Wortels", "Lava"],
      ["Oog", "Vuur"], ["Oog", "Lava"],
      ["Vleugels", "Vuur"], ["Vleugels", "Lava"],
      ["Blad", "Vuur"], ["Blad", "Lava"],
      ["Zaadjes", "Vuur"], ["Zaadjes", "Lava"],
      ["Ei", "Vuur"], ["Ei", "Lava"],
      ["Bloem", "Vuur"], ["Bloem", "Lava"],
      /* --- WATERDIEREN --- */
      ["Sponzen", "Vuur"], ["Sponzen", "Lava"],
      ["Koraal", "Lava"], 
      ["Kwallen", "Vuur"], ["Kwallen", "Lava"],
      ["Zeeanemonen", "Vuur"], ["Zeeanemonen", "Lava"],
      ["Wormen", "Vuur"], ["Wormen", "Lava"],
      ["Oertrochozoa", "Vuur"], ["Oertrochozoa", "Lava"],
      ["Zeesterren", "Vuur"], ["Zeesterren", "Lava"],
      ["Zee-egels", "Lava"], 
      ["Manteldieren", "Vuur"], ["Manteldieren", "Lava"],
      ["Beerdiertjes", "Vuur"], ["Beerdiertjes", "Lava"],
      ["Inktvissen", "Vuur"], ["Inktvissen", "Lava"],
      ["Zeeslakken", "Vuur"], ["Zeeslakken", "Lava"],
      ["Tweekleppigen", "Vuur"], ["Tweekleppigen", "Lava"],
      ["Nautilussen", "Vuur"], ["Nautilussen", "Lava"],
      ["Zeeschildpadden", "Vuur"],
      /* --- BREIN --- */
      ["Brein", "Vuur"], ["Brein", "Lava"],
      /* --- GELEEDPOTIGEN --- */
      ["Oergeleedpotigen", "Vuur"], ["Oergeleedpotigen", "Lava"],
      ["Trilobieten", "Lava"],
      ["Oercheliceraten", "Vuur"], ["Oercheliceraten", "Lava"],
      ["Oerkreeftjes", "Vuur"], ["Oerkreeftjes", "Lava"],
      ["Oerinsecten", "Vuur"], ["Oerinsecten", "Lava"],
      ["Zeeschorpioenen", "Lava"],
      ["Oerspinachtigen", "Vuur"], ["Oerspinachtigen", "Lava"],
      ["Zwaardstaarten", "Vuur"],
      ["Krill", "Vuur"], ["Krill", "Lava"],
      ["Aasgarnalen", "Vuur"], ["Aasgarnalen", "Lava"],
      ["Zeepissebedden", "Vuur"], ["Zeepissebedden", "Lava"],
      ["Zeepokken", "Vuur"],
      ["Vlokreeftjes", "Vuur"], ["Vlokreeftjes", "Lava"],
      ["Oertienpotigen", "Vuur"], ["Oertienpotigen", "Lava"],
      ["Reuzenpissebedden", "Vuur"],
      ["Garnalen", "Vuur"], ["Garnalen", "Lava"],
      ["Kreeften", "Vuur"],
      ["Krabben", "Vuur"],
      ["Heremietkrabben", "Vuur"],
      ["Waterspinnen", "Vuur"], ["Waterspinnen", "Lava"],
      /* --- GENOTWAREN --- */
      ["Agave", "Vuur"], ["Agave", "Lava"],
      ["Suikerriet", "Vuur"], ["Suikerriet", "Lava"],
      ["Coca", "Vuur"], ["Coca", "Lava"],
      ["Hop", "Vuur"], ["Hop", "Lava"],
      ["Wierookbomen", "Vuur"], ["Wierookbomen", "Lava"],
      ["Mirre", "Vuur"], ["Mirre", "Lava"],
      ["Theeplanten", "Vuur"], ["Theeplanten", "Lava"],
      ["Lavendel", "Vuur"], ["Lavendel", "Lava"],
      ["Tabaksplanten", "Vuur"], ["Tabaksplanten", "Lava"],
      ["Koffieplanten", "Vuur"], ["Koffieplanten", "Lava"],
      ["Jasmijn", "Vuur"], ["Jasmijn", "Lava"],
      ["Kamille", "Vuur"], ["Kamille", "Lava"],
      /* --- MATERIALEN --- */
      ["Papyrusriet", "Vuur"], ["Papyrusriet", "Lava"],
      ["Rotan", "Vuur"], ["Rotan", "Lava"],
      ["Bamboe", "Vuur"], ["Bamboe", "Lava"],
      ["Hennep", "Vuur"], ["Hennep", "Lava"],
      ["Rubberbomen", "Vuur"], ["Rubberbomen", "Lava"],
      ["Vlas", "Vuur"], ["Vlas", "Lava"]
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
      ["map:Reptielen", "Vuur"], 
      ["map:Zoogdieren", "Vuur"],
      ["map:Vogels", "Vuur"],
      /* --- WATERDIEREN --- */
      ["Koraal", "Vuur"], ["Zee-egels", "Vuur"], ["Zeeschildpadden", "Vuur"],
      /* --- GELEEDPOTIGEN --- */
      ["Trilobieten", "Vuur"], ["Zeeschorpioenen", "Vuur"], ["Zwaardstaarten", "Vuur"], ["Zeepokken", "Vuur"],
      ["Reuzenpissebedden", "Vuur"], ["Kreeften", "Vuur"], ["Krabben", "Vuur"], ["Heremietkrabben", "Vuur"]
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
      ["map:Pril leven", "Dood"],
      ["map:Vissen", "Dood"],
      ["map:Planten", "Dood"],
      ["map:Smaakmakers", "Dood"],
      ["map:Bloemen", "Dood"],
      ["map:Fruit", "Dood"],
      ["map:Groenten", "Dood"], 
      ["map:Granen", "Dood"],
      /* --- BIOLOGIE --- */
      ["Weefsel", "Dood"], ["Spieren", "Dood"], ["Wortels", "Dood"], ["Oog", "Dood"], ["Vleugels", "Dood"], ["Blad", "Dood"], 
      ["Zaadjes", "Dood"], ["Ei", "Dood"], ["Bloem", "Dood"],
      /* --- WATERDIEREN --- */
      ["Sponzen", "Dood"], ["Kwallen", "Dood"], ["Zeeanemonen", "Dood"], ["Wormen", "Dood"], ["Oertrochozoa", "Dood"],
      ["Zeesterren", "Dood"], ["Manteldieren", "Dood"], ["Beerdiertjes", "Dood"], ["Inktvissen", "Dood"],
      /* --- BREIN --- */
      ["Brein", "Dood"],
      /* --- KLEIN LANDLEVEN --- */
      ["Duizendpoten", "Dood"], ["Zilvervisjes", "Dood"], ["Hooiwagens", "Dood"], ["Spinnen", "Dood"], ["Mijten", "Dood"], 
      ["Teken", "Dood"], ["Pissebedden", "Dood"], ["Oerpolyneopteren", "Dood"], ["Oerhymenopteren", "Dood"], ["Libellen", "Dood"], 
      ["Luizen", "Dood"], ["Kevers", "Dood"], ["Muggen", "Dood"], ["Vliegen", "Dood"], ["Vlinders", "Dood"], ["Krekels", "Dood"], 
      ["Sprinkhanen", "Dood"], ["Wandelende takken", "Dood"], ["Kakkerlakken", "Dood"], ["Termieten", "Dood"], ["Mieren", "Dood"],
      ["Wespen", "Dood"], ["Bijen", "Dood"],
      /* --- GENOTWAREN --- */
      ["Agave", "Dood"], ["Suikerriet", "Dood"], ["Coca", "Dood"], ["Hop", "Dood"], ["Theeplanten", "Dood"], ["Lavendel", "Dood"], 
      ["Tabaksplanten", "Dood"], ["Koffieplanten", "Dood"], ["Jasmijn", "Dood"], ["Kamille", "Dood"],
      /* --- MATERIALEN --- */
      ["Papyrusriet", "Dood"], ["Rotan", "Dood"], ["Bamboe", "Dood"], ["Hennep", "Dood"], ["Vlas", "Dood"]
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
      ["map:Geleedpotigen", "Dood"], 
      ["map:Reptielen", "Dood"], 
      ["map:Zoogdieren", "Dood"],
      ["map:Vogels", "Dood"],
      /* --- WATERDIEREN --- */
      ["Koraal", "Dood"], 
      ["Zee-egels", "Dood"], 
      ["Zeeschildpadden", "Dood"],
      /* --- KLEIN LANDLEVEN --- */
      ["Schorpioenen", "Dood"], 
      ["Oertetrapoden", "Dood"],
      ["Salamanders", "Dood"],
      ["Kikkers", "Dood"],
      ["Padden", "Dood"]
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
      /* --- WATERDIEREN --- */
      ["Zeeslakken", "Dood"],
      ["Tweekleppigen", "Dood"],
      ["Nautilussen", "Dood"],
      /* --- KLEIN LANDLEVEN --- */
      ["Slakken", "Dood"]
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
      ["map:Bomen", "Dood"],
      /* --- GENOTWAREN --- */
      ["Wierookbomen", "Dood"], ["Mirre", "Dood"],
      /* --- MATERIALEN --- */
     ["Rubberbomen", "Dood"]
    ],
    output: [
      { naam: "Detritus", icoon: "icons/Detritus.png", map: "Biologie", 
        quote: `I choose not to make a graveyard of my body for the rotting corpses of dead animals 
        <br><br>- George Shaw`
      },
      { naam: "Hout", icoon: "icons/Hout.png", map: "Materialen", 
        quote: `Nature does nothing in vain; the wood and bark of trees serve both shelter and sustenance
        <br><br>- Aristoteles`
      }
    ]
  },
//------------ ZENUWEN --------------//
  {
    input: [
      /* --- PRIL LEVEN --- */
      ["Zenuwen", "Parasieten"],
      /* --- GELEEDPOTIGEN --- */
      ["Zeepokken", "Zenuwen"]
    ],
    hint: `Wat voel ik?`,
    output: [
      { naam: "Tast", icoon: "icons/Tast.png", map: "Brein", 
        quote: `Too often we underestimate the power of touch 
        <br><br>- Leo Buscaglia`
      }
    ]
  },
  {
    input: [
      /* --- PRIL LEVEN --- */
      ["Oercnidaria", "Zenuwen"], 
      /* --- WATERDIEREN --- */
      ["Koraal", "Zenuwen"], ["Kwallen", "Zenuwen"], ["Zeeanemonen", "Zenuwen"], 
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
      /* --- PRIL LEVEN --- */
      ["Oerbilateria", "Zenuwen"], 
      /* --- WATERDIEREN --- */
      ["Tweekleppigen", "Zenuwen"]
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
      /* --- WATERDIEREN --- */
      ["Wormen", "Zenuwen"], ["Oertrochozoa", "Zenuwen"], ["Beerdiertjes", "Zenuwen"],
      /* --- VISSEN --- */
      ["Lancetvisjes", "Zenuwen"], 
      /* --- OERGELEEDPOTIGEN --- */
      ["Oergeleedpotigen", "Zenuwen"]
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
    input:
      /* --- WATERDIEREN --- */
      ["Manteldieren", "Zenuwen"],
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
    input: [
      /* --- KLEIN LANDLEVEN --- */
      ["Mijten", "Zenuwen"], ["Luizen", "Zenuwen"]
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
      { naam: "Smaak", icoon: "icons/Smaak.png", map: "Brein",
        quote: `Eat bitter, taste sweet
        <br><br>- Rick Riordan`
      }
    ]
  },
  {
    input: [
      /* --- GELEEDPOTIGEN --- */
      ["Oercheliceraten", "Zenuwen"], 
      ["Oerspinnen", "Zenuwen"], 
      ["Oertienpotigen", "Zenuwen"], 
      ["Waterspinnen", "Zenuwen"]
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
      { naam: "Oog", icoon: "icons/Oog.png", map: "Biologie", 
        quote: `Eye contact is way more intimate than words will ever be 
        <br><br>- Faraaz Kazi`
      }
    ]
  },
  {
    input: [
      /* --- GELEEDPOTIGEN --- */
      ["Oerkreeftjes", "Zenuwen"],
      ["Krill", "Zenuwen"],
      ["Aasgarnalen", "Zenuwen"],
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
      }
    ]
  },
  {
    input: [
      /* --- KLEIN LANDLEVEN --- */
      ["Duizendpoten", "Zenuwen"], ["Hooiwagens", "Zenuwen"], ["Pissebedden", "Zenuwen"]
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
      { naam: "Smaak", icoon: "icons/Smaak.png", map: "Brein",
        quote: `Eat bitter, taste sweet
        <br><br>- Rick Riordan`
      }
    ]
  },
  {
    input: [
      /* --- GELEEDPOTIGEN --- */
      ["Zeepissebedden", "Zenuwen"],
      ["Reuzenpissebedden", "Zenuwen"]
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
      { naam: "Smaak", icoon: "icons/Smaak.png", map: "Brein",
        quote: `Eat bitter, taste sweet
        <br><br>- Rick Riordan`
      }
    ]
  },
  {
    input: [
      /* --- GELEEDPOTIGEN --- */
      ["Trilobieten", "Zenuwen"], 
      /* --- KLEIN LANDLEVEN --- */
      ["Oerpolyneopteren", "Zenuwen"]
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
      /* --- KLEIN LANDLEVEN --- */
      ["Schorpioenen", "Zenuwen"], ["Spinnen", "Zenuwen"]
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
    input: [
      /* --- WATERDIEREN --- */
      ["Zeeslakken", "Zenuwen"], 
      /* --- VISSEN --- */
      ["Agnathen", "Zenuwen"], ["Zeeduivels", "Zenuwen"], ["Platvissen", "Zenuwen"], ["Piranha", "Zenuwen"], 
      /* --- GELEEDPOTIGEN --- */
      ["Oerinsecten", "Zenuwen"], ["Vlokreeftjes", "Zenuwen"], ["Garnalen", "Zenuwen"], ["Kreeften", "Zenuwen"], 
      ["Krabben", "Zenuwen"], ["Heremietkreeften", "Zenuwen"], ["Zeeschorpioenen", "Zenuwen"], 
      /* --- KLEIN LANDLEVEN ---*/
      ["Zilvervisjes", "Zenuwen"], ["Termieten", "Zenuwen"], ["Wandelende takken", "Zenuwen"], 
      ["Kakkerlakken", "Zenuwen"], ["Oerhymenopteren", "Zenuwen"], ["Slakken", "Zenuwen"]
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
    input: [
      /* --- WATERDIEREN --- */
      ["Inktvissen", "Zenuwen"], ["Nautilussen", "Zenuwen"], ["Octopussen", "Zenuwen"],
      /* --- VISSEN --- */
      ["Clownvissen", "Zenuwen"], ["Doktersvissen", "Zenuwen"], ["Papegaaivissen", "Zenuwen"], ["Karpers", "Zenuwen"], 
      ["Zeepaardjes", "Zenuwen"], ["Vliegvissen", "Zenuwen"], ["Maanvissen", "Zenuwen"], ["Goudvissen", "Zenuwen"],
      /* --- GELEEDPOTIGEN --- */
      ["Zwaardstaarten", "Zenuwen"],
      /* --- KLEIN LANDLEVEN --- */
      ["Muggen", "Zenuwen"], ["Vliegen", "Zenuwen"], ["Kevers", "Zenuwen"], ["Vlinders", "Zenuwen"],
      ["Libellen", "Zenuwen"], ["Mieren", "Zenuwen"], ["Wespen", "Zenuwen"], ["Bijen", "Zenuwen"],
      /* --- REPTIELEN --- */
      ["Slangen", "Zenuwen"]
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
      /* --- VISSEN --- */
      ["Oerstraalvinnigen", "Zenuwen"], ["Kabeljauwen", "Zenuwen"], ["Snoeken", "Zenuwen"], ["Meervallen", "Zenuwen"], 
      ["Paling", "Zenuwen"]
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
      ["map:Zoogdieren", "Zenuwen"], 
      ["map:Vogels", "Zenuwen"],
      /* --- WATERDIEREN --- */
      ["Zeeschildpadden", "Zenuwen"],
      /* --- VISSEN --- */
      ["Coelacanthen", "Zenuwen"], ["Tiktaalik", "Zenuwen"], ["Haaien", "Zenuwen"], ["Spookhaaien", "Zenuwen"], 
      ["Manta", "Zenuwen"], ["Tonijn", "Zenuwen"], ["Zalm", "Zenuwen"], ["Haring", "Zenuwen"], 
      ["Makreel", "Zenuwen"], ["Forel", "Zenuwen"],
      /* --- KLEIN LANDLEVEN --- */
      ["Krekels", "Zenuwen"], ["Sprinkhanen", "Zenuwen"],
      ["Oertetrapoden", "Zenuwen"], ["Salamanders", "Zenuwen"], ["Kikkers", "Zenuwen"], ["Padden", "Zenuwen"],
      /* --- REPTIELEN --- */
      ["Oersynapsiden", "Zenuwen"], ["Oeranapsiden", "Zenuwen"], ["Oerdiapsiden", "Zenuwen"], ["Schildpadden", "Zenuwen"],
      ["Pterosauriërs", "Zenuwen"], ["Lepidosauriërs", "Zenuwen"], ["Crurotarsi", "Zenuwen"], 
      ["Oerdinosauriërs", "Zenuwen"], ["Oermaniraptoren", "Zenuwen"], ["Sauropoden", "Zenuwen"], 
      ["Stegosauriërs", "Zenuwen"], ["Tyrannosauriërs", "Zenuwen"], ["Gekko's", "Zenuwen"], ["Leguanen", "Zenuwen"],
      ["Krokodillen", "Zenuwen"]
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
//------------ BASISEMOTIES --------------//
  {
    input: [
      ["map:Reptielen", "Storm"], ["map:Reptielen", "Orkaan"], ["map:Reptielen", "Pijn"],
      ["map:Zoogdieren", "Storm"], ["map:Zoogdieren", "Orkaan"], ["map:Zoogdieren", "Pijn"],
      ["map:Vogels", "Storm"], ["map:Vogels", "Orkaan"], ["map:Vogels", "Pijn"],
      /* --- WATERDIEREN --- */
      ["Zeeslakken", "Pijn"], 
      ["Inktvissen", "Storm"], ["Inktvissen", "Orkaan"], ["Inktvissen", "Pijn"],
      ["Octopussen", "Storm"], ["Octopussen", "Orkaan"], ["Octopussen", "Pijn"],
      ["Nautilussen", "Storm"], ["Nautilussen", "Orkaan"], ["Nautilussen", "Pijn"],
      ["Zeeschildpadden", "Storm"], ["Zeeschildpadden", "Orkaan"], ["Zeeschildpadden", "Pijn"],
      /* --- VISSEN --- */
      ["Agnathen", "Pijn"], ["Zeeduivels", "Pijn"], ["Platvissen", "Pijn"], ["Piranha", "Pijn"], ["Clownvissen", "Pijn"],
      ["Doktersvissen", "Pijn"], ["Papegaaivissen", "Pijn"], ["Karpers", "Pijn"], ["Zeepaardjes", "Pijn"], 
      ["Vliegvissen", "Pijn"], ["Maanvissen", "Pijn"], ["Koraalduivels", "Pijn"], ["Kogelvissen", "Pijn"], 
      ["Oerstraalvinnigen", "Pijn"], ["Kabeljauwen", "Pijn"], ["Snoeken", "Pijn"], ["Meervallen", "Pijn"],
      ["Paling", "Pijn"], ["Haaien", "Pijn"], ["Spookhaaien", "Pijn"], ["Manta", "Pijn"], ["Coelacanthen", "Pijn"],
      ["Tiktaalik", "Pijn"], ["Tonijn", "Pijn"], ["Zalm", "Pijn"], ["Haring", "Pijn"], ["Makreel", "Pijn"],
      ["Forel", "Pijn"],
      /* --- GELEEDPOTIGEN --- */
      ["Oergeleedpotigen", "Pijn"], ["Oercheliceraten", "Pijn"], ["Oerspinnen", "Pijn"], ["Oertienpotigen", "Pijn"], 
      ["Waterspinnen", "Pijn"], ["Trilobieten", "Pijn"], ["Oerkreeftjes", "Pijn"], ["Krill", "Pijn"], 
      ["Aasgarnalen", "Pijn"], ["Zeepissebedden", "Pijn"], ["Reuzenpissebedden", "Pijn"], ["Oerinsecten", "Pijn"], 
      ["Vlokreeftjes", "Pijn"], ["Garnalen", "Pijn"], ["Kreeften", "Pijn"], ["Krabben", "Pijn"], 
      ["Heremietkreeften", "Pijn"], ["Zeeschorpioenen", "Pijn"], ["Zwaardstaarten", "Pijn"], 
      /* --- KLEIN LANDLEVEN --- */
      ["Oerpolyneopteren", "Pijn"], ["Duizendpoten", "Pijn"], ["Hooiwagens", "Pijn"], ["Pissebedden", "Pijn"], 
      ["Schorpioenen", "Pijn"], ["Spinnen", "Pijn"], ["Zilvervisjes", "Pijn"], ["Termieten", "Pijn"],
      ["Wandelende takken", "Pijn"], ["Kakkerlakken", "Pijn"], ["Oerhymenopteren", "Pijn"], ["Slakken", "Pijn"], 
      ["Muggen", "Pijn"], ["Vliegen", "Pijn"], ["Krekels", "Pijn"], ["Vlinders", "Pijn"], ["Libellen", "Pijn"], 
      ["Mieren", "Pijn"], ["Wespen", "Pijn"], ["Bijen", "Pijn"], ["Kevers", "Pijn"], ["Sprinkhanen", "Pijn"],  
      ["Oertetrapoden", "Storm"], ["Oertetrapoden", "Orkaan"], ["Oertetrapoden", "Pijn"],
      ["Salamanders", "Storm"], ["Salamanders", "Orkaan"], ["Salamanders", "Pijn"],
      ["Kikkers", "Storm"], ["Kikkers", "Orkaan"], ["Kikkers", "Pijn"],
      ["Padden", "Storm"], ["Padden", "Orkaan"], ["Padden", "Pijn"]
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
      ["map:Reptielen", "Virus"], ["map:Reptielen", "Schimmel"], ["map:Reptielen", "Parasieten"], 
      ["map:Zoogdieren", "Virus"], ["map:Zoogdieren", "Schimmel"], ["map:Zoogdieren", "Parasieten"],
      ["map:Vogels", "Virus"], ["map:Vogels", "Schimmel"], ["map:Vogels", "Parasieten"],
      /* --- WATERDIEREN --- */
      ["Zeeslakken", "Virus"], ["Zeeslakken", "Schimmel"], ["Zeeslakken", "Parasieten"], 
      ["Inktvissen", "Virus"], ["Inktvissen", "Schimmel"], ["Inktvissen", "Parasieten"],
      ["Octopussen", "Virus"], ["Octopussen", "Schimmel"], ["Octopussen", "Parasieten"],
      ["Nautilussen", "Virus"], ["Nautilussen", "Schimmel"], ["Nautilussen", "Parasieten"],
      ["Zeeschildpadden", "Virus"], ["Zeeschildpadden", "Schimmel"], ["Zeeschildpadden", "Parasieten"],
      /* --- VISSEN --- */
      ["Agnathen", "Virus"], ["Agnathen", "Schimmel"], ["Agnathen", "Parasieten"], 
      ["Zeeduivels", "Virus"], ["Zeeduivels", "Schimmel"], ["Zeeduivels", "Parasieten"], 
      ["Platvissen", "Virus"], ["Platvissen", "Schimmel"], ["Platvissen", "Parasieten"], 
      ["Piranha", "Virus"], ["Piranha", "Schimmel"], ["Piranha", "Parasieten"], 
      ["Clownvissen", "Virus"], ["Clownvissen", "Schimmel"], ["Clownvissen", "Parasieten"],
      ["Doktersvissen", "Virus"], ["Doktersvissen", "Schimmel"], ["Doktersvissen", "Parasieten"], 
      ["Papegaaivissen", "Virus"], ["Papegaaivissen", "Schimmel"], ["Papegaaivissen", "Parasieten"], 
      ["Karpers", "Virus"], ["Karpers", "Schimmel"], ["Karpers", "Parasieten"], 
      ["Zeepaardjes", "Virus"], ["Zeepaardjes", "Schimmel"], ["Zeepaardjes", "Parasieten"], 
      ["Vliegvissen", "Virus"], ["Vliegvissen", "Schimmel"], ["Vliegvissen", "Parasieten"], 
      ["Maanvissen", "Virus"], ["Maanvissen", "Schimmel"], ["Maanvissen", "Parasieten"], 
      ["Koraalduivels", "Virus"], ["Koraalduivels", "Schimmel"], ["Koraalduivels", "Parasieten"], 
      ["Kogelvissen", "Virus"], ["Kogelvissen", "Schimmel"], ["Kogelvissen", "Parasieten"], 
      ["Oerstraalvinnigen", "Virus"], ["Oerstraalvinnigen", "Schimmel"], ["Oerstraalvinnigen", "Parasieten"], 
      ["Kabeljauwen", "Virus"], ["Kabeljauwen", "Schimmel"], ["Kabeljauwen", "Parasieten"], 
      ["Snoeken", "Virus"], ["Snoeken", "Schimmel"], ["Snoeken", "Parasieten"], 
      ["Meervallen","Virus"], ["Meervallen", "Schimmel"], ["Meervallen", "Parasieten"],
      ["Paling", "Virus"], ["Paling", "Schimmel"], ["Paling", "Parasieten"], 
      ["Haaien", "Virus"], ["Haaien", "Schimmel"], ["Haaien", "Parasieten"], 
      ["Spookhaaien", "Virus"], ["Spookhaaien", "Schimmel"], ["Spookhaaien", "Parasieten"], 
      ["Manta", "Virus"], ["Manta", "Schimmel"], ["Manta", "Parasieten"], 
      ["Coelacanthen", "Virus"], ["Coelacanthen", "Schimmel"], ["Coelacanthen", "Parasieten"],
      ["Tiktaalik", "Virus"], ["Tiktaalik", "Schimmel"], ["Tiktaalik", "Parasieten"], 
      ["Tonijn", "Virus"], ["Tonijn", "Schimmel"], ["Tonijn", "Parasieten"], 
      ["Zalm", "Virus"], ["Zalm", "Schimmel"], ["Zalm", "Parasieten"], 
      ["Haring", "Virus"], ["Haring", "Schimmel"], ["Haring", "Parasieten"], 
      ["Makreel", "Virus"], ["Makreel", "Schimmel"], ["Makreel", "Parasieten"],
      ["Forel", "Virus"], ["Forel", "Schimmel"], ["Forel", "Parasieten"],
      /* --- GELEEDPOTIGEN --- */
      ["Oergeleedpotigen", "Virus"], ["Oergeleedpotigen", "Parasieten"], 
      ["Oercheliceraten", "Virus"], ["Oercheliceraten", "Parasieten"], 
      ["Oerspinnen", "Virus"], ["Oerspinnen", "Parasieten"], 
      ["Oertienpotigen", "Virus"], ["Oertienpotigen", "Parasieten"],
      ["Waterspinnen", "Virus"], ["Waterspinnen", "Parasieten"], 
      ["Trilobieten", "Virus"], ["Trilobieten", "Parasieten"], 
      ["Oerkreeftjes", "Virus"], ["Oerkreeftjes", "Parasieten"], 
      ["Krill", "Virus"], ["Krill", "Parasieten"], 
      ["Aasgarnalen", "Virus"], ["Aasgarnalen", "Parasieten"], 
      ["Zeepissebedden", "Virus"], ["Zeepissebedden", "Parasieten"], 
      ["Reuzenpissebedden", "Virus"], ["Reuzenpissebedden", "Schimmel"], ["Reuzenpissebedden", "Parasieten"], 
      ["Oerinsecten", "Virus"], ["Oerinsecten", "Parasieten"], 
      ["Vlokreeftjes", "Virus"], ["Vlokreeftjes", "Parasieten"], 
      ["Garnalen", "Virus"], ["Garnalen", "Schimmel"], ["Garnalen", "Parasieten"], 
      ["Kreeften", "Virus"], ["Kreeften", "Schimmel"], ["Kreeften", "Parasieten"], 
      ["Krabben", "Virus"], ["Krabben", "Schimmel"], ["Krabben", "Parasieten"], 
      ["Heremietkreeften", "Virus"], ["Heremietkreeften", "Schimmel"], ["Heremietkreeften", "Parasieten"], 
      ["Zeeschorpioenen", "Virus"], ["Zeeschorpioenen", "Schimmel"], ["Zeeschorpioenen", "Parasieten"], 
      ["Zwaardstaarten", "Virus"], ["Zwaardstaarten", "Parasieten"], 
      /* --- KLEIN LANDLEVEN --- */
      ["Oerpolyneopteren", "Virus"], ["Oerpolyneopteren", "Parasieten"], 
      ["Duizendpoten", "Virus"], ["Duizendpoten", "Parasieten"], 
      ["Hooiwagens", "Virus"], ["Hooiwagens", "Parasieten"], 
      ["Pissebedden", "Virus"], ["Pissebedden", "Parasieten"], 
      ["Schorpioenen", "Virus"], ["Schorpioenen", "Parasieten"], 
      ["Spinnen", "Virus"], ["Spinnen", "Parasieten"], 
      ["Zilvervisjes", "Virus"], ["Zilvervisjes", "Parasieten"], 
      ["Termieten", "Virus"], ["Termieten", "Parasieten"],
      ["Wandelende takken", "Virus"], ["Wandelende takken", "Parasieten"], 
      ["Kakkerlakken", "Virus"], ["Kakkerlakken", "Parasieten"], 
      ["Oerhymenopteren", "Virus"], ["Oerhymenopteren", "Parasieten"], 
      ["Slakken", "Virus"], ["Slakken", "Parasieten"], 
      ["Muggen", "Virus"], ["Muggen", "Parasieten"], 
      ["Vliegen", "Virus"], ["Vliegen", "Parasieten"], 
      ["Krekels", "Virus"], ["Krekels", "Parasieten"], 
      ["Vlinders", "Virus"], ["Vlinders", "Parasieten"], 
      ["Libellen", "Virus"], ["Libellen", "Parasieten"], 
      ["Mieren", "Virus"], ["Mieren", "Parasieten"], 
      ["Wespen", "Virus"], ["Wespen", "Parasieten"], 
      ["Bijen", "Virus"], ["Bijen", "Parasieten"], 
      ["Kevers", "Virus"], ["Kevers", "Parasieten"], 
      ["Sprinkhanen", "Virus"], ["Sprinkhanen", "Parasieten"],  
      ["Oertetrapoden", "Virus"], ["Oertetrapoden", "Schimmel"], ["Oertetrapoden", "Parasieten"], 
      ["Salamanders", "Virus"], ["Salamanders", "Schimmel"], ["Salamanders", "Parasieten"], 
      ["Kikkers", "Virus"], ["Kikkers", "Schimmel"], ["Kikkers", "Parasieten"], 
      ["Padden", "Virus"], ["Padden", "Schimmel"], ["Padden", "Parasieten"]
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
      ["map:Reptielen", "map:Reptielen"], ["map:Zoogdieren", "map:Zoogdieren"], ["map:Vogels", "map:Vogels"],
      /* --- WATERDIEREN --- */
      ["Zeeslakken", "Zeeslakken"], ["Inktvissen", "Inktvissen"], ["Octopussen", "Octopussen"], 
      ["Nautilussen", "Nautilussen"], ["Zeeschildpadden", "Zeeschildpadden"],
      /* --- VISSEN --- */
      ["Agnathen", "Agnathen"], ["Zeeduivels", "Zeeduivels"], ["Platvissen", "Platvissen"], ["Piranha", "Piranha"], 
      ["Clownvissen", "Clownvissen"], ["Doktersvissen", "Doktersvissen"], ["Papegaaivissen", "Papegaaivissen"], 
      ["Karpers", "Karpers"], ["Zeepaardjes", "Zeepaardjes"], ["Vliegvissen", "Vliegvissen"], 
      ["Maanvissen", "Maanvissen"], ["Koraalduivels", "Koraalduivels"], ["Kogelvissen", "Kogelvissen"], 
      ["Oerstraalvinnigen", "Oerstraalvinnigen"], ["Kabeljauwen", "Kabeljauwen"], ["Snoeken", "Snoeken"], 
      ["Meervallen", "Meervallen"], ["Paling", "Paling"], ["Haaien", "Haaien"], ["Spookhaaien", "Spookhaaien"], 
      ["Manta", "Manta"], ["Coelacanthen", "Coelacanthen"], ["Tiktaalik", "Tiktaalik"], ["Tonijn", "Tonijn"], 
      ["Zalm", "Zalm"], ["Haring", "Haring"], ["Makreel", "Makreel"], ["Forel", "Forel"],
      /* --- GELEEDPOTIGEN --- */
      ["Oergeleedpotigen", "Oergeleedpotigen"], ["Oercheliceraten", "Oercheliceraten"], ["Oerspinnen", "Oerspinnen"], 
      ["Oertienpotigen", "Oertienpotigen"], ["Waterspinnen", "Waterspinnen"], ["Trilobieten", "Trilobieten"], 
      ["Oerkreeftjes", "Oerkreeftjes"], ["Krill", "Krill"], ["Aasgarnalen", "Aasgarnalen"], 
      ["Zeepissebedden", "Zeepissebedden"], ["Reuzenpissebedden", "Reuzenpissebedden"], ["Oerinsecten", "Oerinsecten"], 
      ["Vlokreeftjes", "Vlokreeftjes"], ["Garnalen", "Garnalen"], ["Kreeften", "Kreeften"], ["Krabben", "Krabben"], 
      ["Heremietkreeften", "Heremietkreeften"], ["Zeeschorpioenen", "Zeeschorpioenen"], 
      ["Zwaardstaarten", "Zwaardstaarten"], 
      /* --- KLEIN LANDLEVEN --- */
      ["Oerpolyneopteren", "Oerpolyneopteren"], ["Duizendpoten", "Duizendpoten"], ["Hooiwagens", "Hooiwagens"], 
      ["Pissebedden", "Pissebedden"], ["Schorpioenen", "Schorpioenen"], ["Spinnen", "Spinnen"], 
      ["Zilvervisjes", "Zilvervisjes"], ["Termieten", "Termieten"], ["Wandelende takken", "Wandelende takken"], 
      ["Kakkerlakken", "Kakkerlakken"], ["Oerhymenopteren", "Oerhymenopteren"], /*Slakken + slijm*/
      ["Muggen", "Muggen"], ["Vliegen", "Vliegen"], ["Krekels", "Krekels"], ["Vlinders", "Vlinders"], 
      ["Libellen", "Libellen"], ["Mieren", "Mieren"], ["Wespen", "Wespen"], ["Bijen", "Bijen"], ["Kevers", "Kevers"], 
      ["Sprinkhanen", "Sprinkhanen"], ["Oertetrapoden", "Oertetrapoden"], ["Salamanders", "Salamanders"],
      ["Kikkers", "Kikkers"], ["Padden", "Padden"]
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
    input: ["Slakken", "Slakken"],
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
      { naam: "Slijm", icoon: "icons/Slijm.png", map: "Water", 
        quote: `Even the lowliest forms of life, the molds and slimes, are far more intricate than we had imagined 
        <br><br>- Lewis Thomas`
      }
    ]
  },
  {
    input: [
      ["map:Reptielen", "Explosie"], ["map:Reptielen", "Noorderlicht"], ["map:Reptielen", "Bliksem"], 
      ["map:Reptielen", "Sneeuw"], ["map:Reptielen", "Hagel"], ["map:Reptielen", "Bolbliksem"],
      ["map:Reptielen", "Overstroming"], 
      ["map:Zoogdieren", "Explosie"], ["map:Zoogdieren", "Noorderlicht"], ["map:Zoogdieren", "Noorderlicht"],
      ["map:Zoogdieren", "Sneeuw"], ["map:Zoogdieren", "Hagel"], ["map:Zoogdieren", "Bolbliksem"],
      ["map:Zoogdieren", "Overstroming"],
      ["map:Vogels", "Explosie"], ["map:Vogels", "Noorderlicht"], ["map:Vogels", "Noorderlicht"],
      ["map:Vogels", "Sneeuw"], ["map:Vogels", "Hagel"], ["map:Vogels", "Bolbliksem"],
      ["map:Vogels", "Overstroming"],

      /* --- WATERDIEREN --- */
      ["Inktvissen", "Licht"], ["Inktvissen", "Kleur"],
      ["Nautilussen", "Licht"], ["Nautilussen", "Kleur"],
      ["Zeeschildpadden", "Licht"], ["Zeeschildpadden", "Kleur"], 
      ["Octopussen", "Explosie"], ["Octopussen", "Noorderlicht"], ["Octopussen", "Bliksem"],
      ["Octopussen", "Sneeuw"], ["Octopussen", "Hagel"], ["Octopussen", "Bolbliksem"], 
      ["Octopussen", "Overstroming"], ["Octopussen", "Licht"], ["Octopussen", "Kleur"], 

      /* --- KLEIN LANDLEVEN --- */
      ["Oertetrapoden", "Explosie"], ["Oertetrapoden", "Noorderlicht"], ["Oertetrapoden", "Bliksem"], 
      ["Oertetrapoden", "Sneeuw"], ["Oertetrapoden", "Hagel"], ["Oertetrapoden", "Bolbliksem"], 
      ["Oertetrapoden", "Overstroming"], 
      ["Salamanders", "Explosie"], ["Salamanders", "Noorderlicht"], ["Salamanders", "Bliksem"], ["Salamanders", "Sneeuw"],
      ["Salamanders", "Hagel"], ["Salamanders", "Bolbliksem"], ["Salamanders", "Overstroming"], 
      ["Kikkers", "Explosie"], ["Kikkers", "Noorderlicht"], ["Kikkers", "Bliksem"], ["Kikkers", "Sneeuw"], 
      ["Kikkers", "Hagel"] ,["Kikkers", "Bolbliksem"], ["Kikkers", "Overstroming"], 
      ["Padden", "Explosie"], ["Padden", "Noorderlicht"], ["Padden", "Bliksem"], ["Padden", "Sneeuw"], 
      ["Padden", "Hagel"], ["Padden", "Bolbliksem"], ["Padden", "Overstroming"]
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
//------------ THRESHOLD 3: CAMBRISCHE EXPLOSIE --------------//
  {
    input: ["Oerbilateria", "Evolutie"],
    /*hint: `Nu zijn de omstandigheden juist om de bilateria te laten floreren...`,*/
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
      ["Wormen", "Bacteriën"], ["Wormen", "Detritus"], ["Wormen", "Blauwalgen"], ["Wormen", "Leca"], 
      ["Wormen", "Schimmel"], ["Wormen", "Sponzen"], ["Wormen", "Archaeplastiden"], ["Wormen", "Gist"], 
      ["Wormen", "Rode algen"], ["Wormen", "Groene algen"], ["Wormen", "Amoeben"], ["Wormen", "Foraminiferen"], 
      ["Wormen", "Stralendiertjes"], ["Wormen", "Oercnidaria"], ["Wormen", "Oerbilateria"], ["Wormen", "Groenwieren"], 
      ["Wormen", "Beerdiertjes"], ["Wormen", "Krill"], ["Wormen", "Vlokreeftjes"]
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
      ["Oertrochozoa", "Bacteriën"], ["Oertrochozoa", "Detritus"], ["Oertrochozoa", "Blauwalgen"], 
      ["Oertrochozoa", "Leca"], ["Oertrochozoa", "Schimmel"], ["Oertrochozoa", "Sponzen"], 
      ["Oertrochozoa", "Archaeplastiden"], ["Oertrochozoa", "Gist"], ["Oertrochozoa", "Rode algen"], 
      ["Oertrochozoa", "Groene algen"], ["Oertrochozoa", "Amoeben"], ["Oertrochozoa", "Foraminiferen"], 
      ["Oertrochozoa", "Stralendiertjes"], ["Oertrochozoa", "Oercnidaria"], ["Oertrochozoa", "Oerbilateria"], 
      ["Oertrochozoa", "Groenwieren"], ["Oertrochozoa", "Wormen"], ["Oertrochozoa", "Beerdiertjes"], 
      ["Oertrochozoa", "Krill"], ["Oertrochozoa", "Vlokreeftjes"]
    ],
    /*hint: `Voor de bewuste dieren is eten meer dan alleen een beloning.`,*/
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
      ["Zeesterren", "Archaeplastiden"], ["Zeesterren", "Groene algen"], ["Zeesterren", "Rode algen"], 
      ["Zeesterren", "Roodwieren"], ["Zeesterren", "Groenwieren"], 
      ["Zeesterren", "Amoeben"], ["Zeesterren", "Foraminiferen"], ["Zeesterren", "Stralendiertjes"], 
      ["Zeesterren", "Oercnidaria"], ["Zeesterren", "Oerbilateria"], ["Zeesterren", "Sponzen"], ["Zeesterren", "Koraal"], 
      ["Zeesterren", "Wormen"], ["Zeesterren", "Oertrochozoa"], 
      ["Zeestserren", "Krill"], ["Zeestserren", "Vlokreeftjes"]
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
    input: ["Zeestserren", "Garnalen"],
    vers: `Lees in naam van jouw Zorgdrager Die creëerde; <br>Die creëerde de mens uit een bloedklodder
    <br><br>De Bloedklodder (96:1-2)`,
    output: [
      { naam: "Zeesterren", icoon: "icons/Zeesterren.png", map: "Waterdieren", 
        quote: `In the tidal pools the starfish cling to the rocks while the waves break over them 
        <br><br>- Rachel Carson`
      },
      { naam: "Bloed", icoon: "icons/Bloed.png", map: "Biologie",
        quote: `We are linked by blood, and blood is memory without language
        <br><br>- Joyce Oates`
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
    input: ["Oerbilateria", "Bot"],
    /*hint: `Die kleine vooroudertjes van de wormen waren heel handig met botten.`,*/
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
        tekst: `Alles moet netjes klaarstaan voor de Cambrische Explosie kan beginnen...
        <br><br>Eerst nodig: wormen.`
      }
    }
  },
  {
    input: [
      ["Lancetvisjes", "Bacteriën"], ["Lancetvisjes", "Detritus"], ["Lancetvisjes", "Blauwalgen"], 
      ["Lancetvisjes", "Leca"], 
      ["Lancetvisjes", "Archaeplastiden"], ["Lancetvisjes", "Groene algen"], ["Lancetvisjes", "Rode algen"], 
      ["Lancetvisjes", "Amoeben"], ["Lancetvisjes", "Foraminiferen"], ["Lancetvisjes", "Stralendiertjes"], 
      ["Lancetvisjes", "Schimmel"], ["Lancetvisjes", "Gist"], 
      ["Lancetvisjes", "Oercnidaria"], ["Lancetvisjes", "Oerbilateria"],
      ["Lancetvisjes", "Oertrochozoa"], ["Lancetvisjes", "Krill"], ["Lancetvisjes", "Vlokreeftjes"]
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
      /* --- PRIL LEVEN --- */
      ["Agnathen", "Detritus"], ["Agnathen", "Oercnidaria"], ["Agnathen", "Oerbilateria"], 
      ["Agnathen", "Wormen"], ["Agnathen", "Oertrochozoa"], 
      ["Agnathen", "Zeeslakken"], ["Agnathen", "Tweekleppigen"],
      /* --- VISSEN --- */
      ["Agnathen", "Lancetvisjes"],
      /* --- GELEEDPOTIGEN --- */
      ["Agnathen", "Oergeleedpotigen"], ["Agnathen", "Oercheliceraten"], ["Agnathen", "Oerkreeftjes"],
      ["Agnathen", "Oerinsecten"], ["Agnathen", "Oerspinnen"], ["Agnathen", "Krill"], ["Agnathen", "Aasgarnalen"], 
      ["Agnathen", "Zeepissebedden"], ["Agnathen", "Vlokreeftjes"], ["Agnathen", "Oertienpotigen"], 
      ["Agnathen", "Garnalen"], ["Agnathen", "Waterspinnen"]
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
      ["Agnathen", "Zeeslakken"], ["Agnathen", "Tweekleppigen"]
    ],
    output: [
      { naam: "Schelp", icoon: "icons/Schelp.png", map: "Biologie", 
        quote: `I see a broken shell and I remind myself that something might have needed setting free 
        <br><br>- Sara Pennypacker`
      }
    ]
  },
  {
    input: [
      ["Oergeleedpotigen", "Bacteriën"], ["Oergeleedpotigen", "Detritus"], ["Oergeleedpotigen", "Blauwalgen"], 
      ["Oergeleedpotigen", "Rode algen"], ["Oergeleedpotigen", "Groene algen"], 
      ["Oergeleedpotigen", "Amoeben"], ["Oergeleedpotigen", "Foraminiferen"], ["Oergeleedpotigen", "Stralendiertjes"], 
      ["Oergeleedpotigen", "Oercnidaria"], ["Oergeleedpotigen", "Oerbilateria"],
      ["Oergeleedpotigen", "Schimmel"], ["Oergeleedpotigen", "Gist"], 
      ["Oergeleedpotigen", "Wormen"], ["Oergeleedpotigen", "Oertrochozoa"], ["Oergeleedpotigen", "Beerdiertjes"], 
      ["Oergeleedpotigen", "Krill"], ["Oergeleedpotigen", "Vlokreeftjes"]
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
      ["Manteldieren", "Leca"], 
      ["Manteldieren", "Archaeplastiden"], ["Manteldieren", "Rode algen"], ["Manteldieren", "Groene algen"], 
      ["Manteldieren", "Amoeben"], ["Manteldieren", "Foraminiferen"], ["Manteldieren", "Stralendiertjes"], 
      ["Manteldieren", "Schimmel"], ["Manteldieren", "Gist"], 
      ["Manteldieren", "Oercnidaria"], ["Manteldieren", "Oerbilateria"], 
      ["Manteldieren", "Wormen"], ["Manteldieren", "Oertrochozoa"], ["Manteldieren", "Beerdiertjes"], 
      ["Manteldieren", "Krill"], ["Manteldieren", "Vlokreeftjes"]
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
      ["Beerdiertjes", "Leca"], 
      ["Beerdiertjes", "Rode algen"], ["Beerdiertjes", "Groene algen"], 
      ["Beerdiertjes", "Amoeben"], ["Beerdiertjes", "Foraminiferen"], ["Beerdiertjes", "Stralendiertjes"], 
      ["Beerdiertjes", "Oercnidaria"], ["Beerdiertjes", "Oerbilateria"],
      ["Beerdiertjes", "Schimmel"], ["Beerdiertjes", "Gist"]
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
      ["Zee-egels", "Bacteriën"], ["Zee-egels", "Detritus"], ["Zee-egels", "Blauwalgen"], ["Zee-egels", "Leca"],
      ["Zee-egels", "Archaeplastiden"], ["Zee-egels", "Groene algen"], ["Zee-egels", "Rode algen"], 
      ["Zee-egels", "Groenwieren"], ["Zee-egels", "Roodwieren"], ["Zee-egels", "Bruinwieren"],
      ["Zee-egels", "Amoeben"], ["Zee-egels", "Foraminiferen"], ["Zee-egels", "Stralendiertjes"], 
      ["Zee-egels", "Oercnidaria"], ["Zee-egels", "Oerbilateria"], 
      ["Zee-egels", "Schimmel"], ["Zee-egels", "Gist"], 
      ["Zee-egels", "Sponzen"], 
      ["Zee-egels", "Wormen"], ["Zee-egels", "Oertrochozoa"], ["Zee-egels", "Beerdiertjes"]
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
    /*hint: `Hoe zit het met algen in zoet water?`,*/
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
    /*hint: `Geaard en geworteld komen sommige planten verder...`,*/
    output: [
      { naam: "Wortels", icoon: "icons/Wortels.png", map: "Biologie", 
        quote: `Let the gentle bush dig its root deep and spread upward to split the boulder 
        <br><br>- Carl Sandburg`
      }
    ]
  },
  {
    input: ["Oertrochozoa", "Evolutie"],
    /*hint: `Van trochozoa is het een kleine stap naar de weekdieren.`,*/
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
      /* --- WATERDIEREN --- */
      ["Inktvissen", "Kwallen"],["Inktvissen", "Wormen"], ["Inktvissen", "Oertrochozoa"], ["Inktvissen", "Zeesterren"], 
      ["Inktvissen", "Zee-egels"], ["Inktvissen", "Manteldieren"], 
      /* --- +schelp --- */
      ["Inktvissen", "Zeeslakken"], ["Inktvissen", "Tweekleppigen"], 
      /* --- VISSEN --- */
      ["Inktvissen", "Lancetvisjes"], 
      /* --- GELEEDPOTIGEN --- */
      ["Inktvissen", "map:Geleedpotigen"] /* zeepokken, heremietkreeften +schelp */
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
      /* --- VISSEN --- */
      ["Inktvissen", "Agnathen"], ["Inktvissen", "Oerstraalvinnigen"],
      ["Platvissen", "Inktvissen"], ["Clownvissen", "Inktvissen"], ["Doktersvissen", "Inktvissen"], 
      ["Zalm", "Inktvissen"], ["Kabeljauwen", "Inktvissen"], ["Haring", "Inktvissen"], ["Makreel", "Inktvissen"],
      ["Karpers", "Inktvissen"], ["Forel", "Inktvissen"], ["Meervallen", "Inktvissen"], ["Paling", "Inktvissen"], 
      ["Zeepaardjes", "Inktvissen"], ["Piranha", "Inktvissen"], ["Goudvissen", "Inktvissen"]
    ],
    vers: `Lees in naam van jouw Zorgdrager Die creëerde; <br>Die creëerde de mens uit een bloedklodder
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
    input: [
      ["Inktvissen", "Zeeslakken"], ["Inktvissen", "Tweekleppigen"], ["Inktvissen", "Zeepokken"],
      ["Inktvissen", "Heremietkreeften"]
    ],
    output: [
      { naam: "Schelp", icoon: "icons/Schelp.png", map: "Biologie", 
        quote: `I see a broken shell and I remind myself that something might have needed setting free 
        <br><br>- Sara Pennypacker`
      }
    ]
  },
  {
    input: ["Oertrochozoa", "Schelp"],
    /*hint: `Geef bescherming aan de trochozoa want zij zijn zo week.`,*/
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
      ["Zeeslakken", "Bacteriën"], ["Zeeslakken", "Blauwalgen"], ["Zeeslakken", "Leca"], 
      ["Zeeslakken", "Archaeplastiden"], ["Zeeslakken", "Groene algen"], ["Zeeslakken", "Rode algen"], 
      ["Zeeslakken", "Roodwieren"], ["Zeeslakken", "Groenwieren"], ["Zeeslakken", "Bruinwieren"], 
      ["Zeeslakken", "Amoeben"], ["Zeeslakken", "Foraminiferen"], ["Zeeslakken", "Stralendiertjes"], 
      ["Zeeslakken", "Sponzen"], ["Zeeslakken", "Zeeanemonen"], ["Zeeslakken", "Wormen"]
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
      ["Tweekleppigen", "Detritus"], ["Tweekleppigen", "Bacteriën"], ["Tweekleppigen", "Blauwalgen"],
      ["Tweekleppigen", "Leca"], 
      ["Tweekleppigen", "Archaeplastiden"], ["Tweekleppigen", "Groene algen"], ["Tweekleppigen", "Rode algen"],
      ["Tweekleppigen", "Amoeben"], ["Tweekleppigen", "Foraminiferen"], ["Tweekleppigen", "Stralendiertjes"]
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
    input: ["Agnathen", "Evolutie"],
    /*hint: `Agnathen zouden iets kunnen bedenken om voedsel te vermalen, maar wat...`,*/
    output: [
      { naam: "Tand", icoon: "icons/Tand.png", map: "Biologie", 
        quote: `Behind every smile there's teeth
        <br><br>- Confucius`
      }
    ]
  },
  {
    input: ["Oergeleedpotigen", "Evolutie"],
    /*hint: `Geleedpotigen zouden nog wel eens divers kunnen worden...`,*/
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
    input: [
      ["Mos", "IJs"], ["Mos", "Poolgebied"], ["Mos", "Sneeuw"], 
      ["Korstmos", "IJs"], ["Korstmos", "Poolgebied"], ["Korstmos", "Sneeuw"],
      ["Gras", "IJs"], ["Gras", "Poolgebied"], ["Gras", "Sneeuw"]
    ],
    /*hint: `Aan de rand van het poolgebied bevindt zich begroeiing.`,*/
    output: [
      { naam: "Toendra", icoon: "icons/Toendra.png", map: "Landschap", 
        quote: `Over lowland, over snow and tundra span arches, raised by the rising sun. See: the light is winning! 
        And the stream is streaming towards open minds and towards seeds dreaming of growth
        <br><br>- Einar Skjaeraasen`
      }
    ]
  },
  {
    input: ["Inktvissen", "Schelp"],
    /*hint: `Er zijn nog weekdieren zonder schelp...`,*/
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
      /* --- WATERDIEREN --- */
      ["Nautilussen", "Kwallen"],["Nautilussen", "Wormen"], ["Nautilussen", "Oertrochozoa"], ["Nautilussen", "Zeesterren"], 
      ["Nautilussen", "Zee-egels"], ["Nautilussen", "Manteldieren"], 
      /* --- +schelp --- */
      ["Nautilussen", "Zeeslakken"], ["Nautilussen", "Tweekleppigen"], 
      /* --- VISSEN --- */
      ["Nautilussen", "Lancetvisjes"], 
      /* --- GELEEDPOTIGEN --- */
      ["Nautilussen", "map:Geleedpotigen"] /* zeepokken, heremietkreeften +schelp */
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
      /* --- VISSEN --- */
      ["Nautilussen", "Agnathen"], ["Nautilussen", "Oerstraalvinnigen"],
      ["Platvissen", "Nautilussen"], ["Clownvissen", "Nautilussen"], ["Doktersvissen", "Nautilussen"], 
      ["Zalm", "Nautilussen"], ["Kabeljauwen", "Nautilussen"], ["Haring", "Nautilussen"], ["Makreel", "Nautilussen"],
      ["Karpers", "Nautilussen"], ["Forel", "Nautilussen"], ["Meervallen", "Nautilussen"], ["Paling", "Nautilussen"], 
      ["Zeepaardjes", "Nautilussen"], ["Piranha", "Nautilussen"], ["Goudvissen", "Nautilussen"]
    ],
    vers: `Lees in naam van jouw Zorgdrager Die creëerde; <br>Die creëerde de mens uit een bloedklodder
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
    input: [
      ["Nautilussen", "Zeeslakken"], ["Nautilussen", "Tweekleppigen"], ["Nautilussen", "Zeepokken"],
      ["Nautilussen", "Heremietkreeften"]
    ],
    output: [
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
    /*hint: `Oh wat kan die zandkorrel irritant zijn voor schelpdieren.`,*/
    output: [
      { naam: "Parel", icoon: "icons/Parel.png", map: "Biologie", 
        quote: `We build a shell around it, like an oyster dealing with a painful particle of grit, coating it 
        with smooth pearl layers in order to cope
        <br><br>- Neil Gaiman`
      }
    ]
  },
  {
    input: ["Oercheliceraten", "Evolutie"],
    /*hint: `Cheliceraten laten zien hoeveel schorpioenen en spinnen eigenlijk gemeen hebben.`,*/
    output: [
      { naam: "Zeeschorpioenen", icoon: "icons/Zeeschorpioenen.png", map: "Geleedpotigen", 
        quote: `Some eurypterids reached enormous size, with powerful appendages adapted for grasping and cutting prey
        <br><br>- Erik Tetlie`
      },
      { naam: "Oerspinachtigen", icoon: "icons/Oerspinachtigen.png", map: "Geleedpotigen", 
        quote: `Arachnids are defined by their eight legs and highly specialized predatory adaptations
        <br><br>- Herbert Levi`
      },
      { naam: "Zwaardstaarten", icoon: "icons/Zwaardstaarten.png", map: "Geleedpotigen",
        quote: `The horseshoe crab is a reminder that survival does not always require change
        <br><br>- Stephen Gould`
      },
      { naam: "Krill", icoon: "icons/Krill.png", map: "Geleedpotigen", 
        quote: `Tiny creatures such as krill form the living foundation of ocean life
        <br><br>- Sylvia Earle`
      },
      { naam: "Aasgarnalen", icoon: "icons/Aasgarnalen.png", map: "Geleedpotigen", 
        quote: `Brine shrimp are extremophiles, capable of thriving in hypersaline lakes where few other animals can 
        survive
        <br><br>- Diane McCauley`
      }
    ]
  },
  {
    input: [
      ["Zeeschorpioenen", "Oertrochozoa"], ["Zeeschorpioenen", "Wormen"], ["Zeeschorpioenen", "Oergeleedpotigen"], 
      ["Zeeschorpioenen", "Beerdiertjes"], ["Zeeschorpioenen", "Trilobieten"], ["Zeeschorpioenen", "Oercheliceraten"], 
      ["Zeeschorpioenen", "Oerkreeftjes"], ["Zeeschorpioenen", "Oerinsecten"], ["Zeeschorpioenen", "Zwaardstaarten"], 
      ["Zeeschorpioenen", "Krill"]
    ],
    /*hint: `Het is evolutionair handig als prooien meteen verlamd worden door giftige stofjes.`,*/
    output: [
      { naam: "Zeeschorpioenen", icoon: "icons/Zeeschorpioenen.png", map: "Geleedpotigen", 
        quote: `Some eurypterids reached enormous size, with powerful appendages adapted for grasping and cutting prey
        <br><br>- Erik Tetlie`
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
      ["Oerspinachtigen", "Oertrochozoa"], ["Oerspinachtigen", "Wormen"], ["Oerspinachtigen", "Oergeleedpotigen"], 
      ["Oerspinachtigen", "Beerdiertjes"], ["Oerspinachtigen", "Trilobieten"], ["Oerspinachtigen", "Oercheliceraten"], 
      ["Oerspinachtigen", "Oerkreeftjes"], ["Oerspinachtigen", "Oerinsecten"], ["Oerspinachtigen", "Krill"]
    ],
    output: [
      { naam: "Oerspinachtigen", icoon: "icons/Oerspinachtigen.png", map: "Geleedpotigen", 
        quote: `Arachnids are defined by their eight legs and highly specialized predatory adaptations
        <br><br>- Herbert Levi`
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
      ["Aasgarnalen", "Bacteriën"], ["Aasgarnalen", "Detritus"], ["Aasgarnalen", "Blauwalgen"], 
      ["Aasgarnalen", "Rode algen"], ["Aasgarnalen", "Groene algen"], ["Aasgarnalen", "Amoeben"], 
      ["Aasgarnalen", "Foraminiferen"], ["Aasgarnalen", "Stralendiertjes"], ["Aasgarnalen", "Roodwieren"], 
      ["Aasgarnalen", "Groenwieren"], ["Aasgarnalen", "Beerdiertjes"]
    ],
    output: [
      { naam: "Aasgarnalen", icoon: "icons/Aasgarnalen.png", map: "Geleedpotigen", 
        quote: `Brine shrimp are extremophiles, capable of thriving in hypersaline lakes where few other animals can 
        survive
        <br><br>- Diane McCauley`
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
    /*hint: `Het is tijd voor planten en geleedpotigen om het land te verkennen...`,*/
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
      },
      normal: {
        achtergrond: "afb/siluur.jpg",
        titel: "SILUUR 444-419 MA",
        tekst: `
        <span>Een plotselinge ijstijd leidde tot minder ondiepe zeeën. Veel habitats gingen verloren en ecosystemen stortten
        in. De oudst bekende massa-extinctie vond plaats en trof aldus het mariene leven, aangezien vrijwel al het leven
        zich nog onder water bevond. Naar schatting verdween circa 60-85 procent van alle mariene soorten, waaronder veel
        trilobieten en koralen.</span>
        <br><br>
        <span>De periode na de eerste massa-extinctie werd omgedoopt tot Siluur. Het mariene leven herstelde zich in een 
        warm klimaat met hoge zeespiegel, waarin koralen zich opnieuw goed konden gedijen en grote koraalriffen vormen. De
        pas geëvolueerde kaakvissen met een deels verbeend skelet floreerden in deze periode, waarbij sommige exemplaren
        tot wel een meter groot konden groeien. Zeeschorpioenen daarentegen bereikten resuachtige proporties van meerdere 
        meters lang.</span>
        <br><br>
        <span>Het Siluur was ook een cruciale periode in de overgang naar het landleven, nu sommige steenwortelalgen zich
        naast mos ook evolueerden tot de eerste landplanten met bladeren en vaatstelsels. Na 3 miljard jaar in het water
        te hebben geleefd, moest op land naar nieuwe manieren worden gezocht om zowel te beschermen tegen droogte - middels
        een dikke beschermlaag - als CO2 of zuurstof op te kunnen nemen. Bladeren boden hiervoor een oplossing dankzij 
        kleine huidmondjes (poriën) die CO2 binnenlaten en water reguleren.</span>
        <br><br>
        <span>Voor grotere planten was ook de zwaartekracht een uitdaging. Nieuwe evolutionaire aanpassingen met stengels
        of hout en een pompend vaatstelsel waren cruciaal om voedingsstoffen en water tegen de zwaartekracht in naar alle
        delen van het lichaam te transporteren. Tot slot leefden ook de eerste dieren op land bestaande uit eenvoudige
        geleedpotige, zoals schorpioenen en voorlopers van de mijten en duizendpoten, die tijdelijk konden overleven op land,
        maar altijd dichtbij de ondiepe zeeën of brakwater bleven.</span>`,
      }
    }
  },
  {
    input: ["Schimmel", "Evolutie"],
    /*hint: `Schimmel heeft nog zo veel potentie...`,*/
    output: [
      { naam: "Korstmos", icoon: "icons/Korstmos.png", map: "Pril leven", 
        quote: `Fermentation is the exhalation of a substance through the admixture of a ferment which,
        by virtue of its spirit, penetrates the mass and transforms it into its own nature
        <br><br>- Andreas Libavius`
      },
      { naam: "Paddenstoelen", icoon: "icons/Paddenstoelen.png", map: "Pril leven",
        quote: `Nature alone is antique, and the oldest art a mushroom
        <br><br>- Thomas Carlyle`
      },
      { naam: "Truffels", icoon: "icons/Truffels.png", map: "Smaakmakers",
        quote: `All fungi are edible. Some fungi are only edible once
        <br><br>- Terry Pratchett`
      }
    ]
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
    input: ["Paddenstoelen", "Detritus"],
    output: [
      { naam: "Paddenstoelen", icoon: "icons/Paddenstoelen.png", map: "Pril leven",
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
    input: ["Agnathen", "Bot"],
    /*hint: `In tegenstelling tot de kraakbeenvissen zijn botten voor agnathen geen gek idee.`,*/
    tijd: 415_000_000,
    output: [
      { naam: "Oerstraalvinnigen", icoon: "icons/Oerstraalvinnigen.png", map: "Vissen", 
        quote: `In order to see a fish you must watch the water
        <br><br>- Bodhidharma`
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
      }
    ]
  },
  {
    input: [
      /* --- PRIL LEVEN --- */
      ["Oerstraalvinnigen", "Detritus"], ["Oerstraalvinnigen", "Oercnidaria"], ["Oerstraalvinnigen", "Oerbilateria"], 
      ["Oerstraalvinnigen", "Wormen"], ["Oerstraalvinnigen", "Oertrochozoa"], 
      ["Oerstraalvinnigen", "Zeeslakken"], ["Oerstraalvinnigen", "Tweekleppigen"],
      /* --- VISSEN --- */
      ["Oerstraalvinnigen", "Lancetvisjes"],
      /* --- GELEEDPOTIGEN --- */
      ["Oerstraalvinnigen", "Oergeleedpotigen"], ["Oerstraalvinnigen", "Oercheliceraten"], 
      ["Oerstraalvinnigen", "Oerkreeftjes"],
      ["Oerstraalvinnigen", "Oerinsecten"], ["Oerstraalvinnigen", "Oerspinnen"], ["Oerstraalvinnigen", "Krill"], 
      ["Oerstraalvinnigen", "Aasgarnalen"], 
      ["Oerstraalvinnigen", "Zeepissebedden"], ["Oerstraalvinnigen", "Vlokreeftjes"], 
      ["Oerstraalvinnigen", "Oertienpotigen"], 
      ["Oerstraalvinnigen", "Garnalen"], ["Oerstraalvinnigen", "Waterspinnen"]
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
    vers: `Lees in naam van jouw Zorgdrager Die creëerde; <br>Die creëerde de mens uit een bloedklodder
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
      ["Oerstraalvinnigen", "Zeeslakken"], ["Oerstraalvinnigen", "Tweekleppigen"]
    ],
    output: [
      { naam: "Schelp", icoon: "icons/Schelp.png", map: "Biologie", 
        quote: `I see a broken shell and I remind myself that something might have needed setting free 
        <br><br>- Sara Pennypacker`
      }
    ]
  },
  {
    input: [
      /* --- PRIL LEVEN --- */
      ["Coelacanthen", "Wormen"], ["Coelacanthen", "Oertrochozoa"],
      /* --- GELEEDPOTIGEN --- */
      ["Coelacanthen", "Oergeleedpotigen"], ["Coelacanthen", "Oercheliceraten"], ["Coelacanthen", "Oerkreeftjes"],
      ["Coelacanthen", "Oerinsecten"], ["Coelacanthen", "Oerspinnen"], ["Coelacanthen", "Krill"], 
      ["Coelacanthen", "Aasgarnalen"], 
      ["Coelacanthen", "Zeepissebedden"], ["Coelacanthen", "Vlokreeftjes"], ["Coelacanthen", "Oertienpotigen"], 
      ["Coelacanthen", "Garnalen"], ["Coelacanthen", "Krabben"], ["Coelacanthen", "Waterspinnen"]
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
      /* --- PRIL LEVEN --- */
      ["Tiktaalik", "Detritus"], ["Tiktaalik", "Oercnidaria"], ["Tiktaalik", "Oerbilateria"], 
      ["Tiktaalik", "Wormen"], ["Tiktaalik", "Oertrochozoa"], 
      ["Tiktaalik", "Zeeslakken"], ["Tiktaalik", "Tweekleppigen"],
      /* --- VISSEN --- */
      ["Tiktaalik", "Lancetvisjes"],
      /* --- GELEEDPOTIGEN --- */
      ["Tiktaalik", "Oergeleedpotigen"], ["Tiktaalik", "Oercheliceraten"], ["Tiktaalik", "Oerkreeftjes"],
      ["Tiktaalik", "Oerinsecten"], ["Tiktaalik", "Oerspinnen"], ["Tiktaalik", "Krill"], ["Tiktaalik", "Aasgarnalen"], 
      ["Tiktaalik", "Zeepissebedden"], ["Tiktaalik", "Vlokreeftjes"], ["Tiktaalik", "Oertienpotigen"], 
      ["Tiktaalik", "Garnalen"], ["Tiktaalik", "Waterspinnen"]
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
      ["Tiktaalik", "Agnathen"], ["Tiktaalik", "Oerstraalvinnigen"]
    ],
    vers: `Lees in naam van jouw Zorgdrager Die creëerde; <br>Die creëerde de mens uit een bloedklodder
    <br><br>De Bloedklodder (96:1-2)`,
    output: [
      { naam: "Tiktaalik", icoon: "icons/Tiktaalik.png", map: "Vissen",
        quote: `Tiktaalik is a fish with a neck and wrists — a mix of features that shows us how bodies were reshaped as 
        vertebrates moved onto land
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
    input: [
      ["Tiktaalik", "Zeeslakken"], ["Tiktaalik", "Tweekleppigen"]
    ],
    output: [
      { naam: "Schelp", icoon: "icons/Schelp.png", map: "Biologie", 
        quote: `I see a broken shell and I remind myself that something might have needed setting free 
        <br><br>- Sara Pennypacker`
      }
    ]
  },
  {
    input: [
      ["Zeeslakken", "Zand"], ["Zeeslakken", "Klei"], ["Zeeslakken", "Kust"], ["Zeeslakken", "Strand"], 
      ["Zeeslakken", "Eiland"], ["Zeeslakken", "Zuurstof"], ["Zeeslakken", "Aarde"]
    ],
    /*hint: `Zo'n schelp zal vast ook van pas komen als je het land op wilt.`,*/
    tijd: 420_000_000,
    output: [
      { naam: "Slakken", icoon: "icons/Slakken.png", map: "Klein landleven", 
        quote: `We should learn from the snail: it has devised a home that is both exquisite and functional
        <br><br>- Frank Wright`
      }
    ]
  },
  {
    input: [
      ["Slakken", "Bacteriën"], ["Slakken", "Detritus"], ["Slakken", "Blauwalgen"], ["Slakken", "Schimmel"],
      ["Slakken", "Archaeplastiden"], ["Slakken", "Gist"], ["Slakken", "Rode algen"], ["Slakken", "Groene algen"],
      ["Slakken", "Roodwieren"], ["Slakken", "Steenwortelalgen"], ["Slakken", "Groenwieren"], ["Slakken", "Mos"], 
      ["Slakken", "Oervaatplanten"], ["Slakken", "Korstmos"], ["Slakken", "Truffels"], ["Slakken", "Paddenstoelen"],
      ["Slakken", "Blad"], ["Slakken", "Varens"], ["Slakken", "Oerzaadplanten"]
    ],
    output: [
      { naam: "Slakken", icoon: "icons/Slakken.png", map: "Klein landleven", 
        quote: `We should learn from the snail: it has devised a home that is both exquisite and functional
        <br><br>- Frank Wright`
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
    input: ["Tand", "Agnathen"],
    /*hint: `Voor grote roofvissen is kraakbeen genoeg, maar zijn scherpe tanden wel handig.`,*/
    tijd: 415_000_000,
    output: [
      { naam: "Haaien", icoon: "icons/Haaien.png", map: "Vissen", 
        quote: `Sharks are beautiful animals, and if you're lucky enough to see lots of them, that means that you're
        in a healthy ocean. You should be afraid if you are in the ocean and don't see sharks
        <br><br>- Sylvia Earle`
      },
      { naam: "Spookhaaien", icoon: "icons/Spookhaaien.png", map: "Vissen", 
        quote: `Chimaeras are among the strangest of living fishes, with features unlike those of any other group
        <br><br>- Peter Last`
      }
    ]
  },
  {
    input: [
      /* --- PRIL LEVEN --- */
      ["Haaien", "Oercnidaria"], ["Haaien", "Oerbilateria"],
      /* --- WATERDIEREN --- */
      ["Haaien", "Kwallen"], ["Haaien", "Wormen"], ["Haaien", "Oertrochozoa"], 
      ["Haaien", "Zeesterren"], ["Haaien", "Zee-egels"],
      ["Haaien", "Zeeslakken"], ["Haaien", "Tweekleppigen"], /* +schelp */
      /* --- VISSEN --- */
      ["Haaien", "Lancetvisjes"], 
      /* --- GELEEDPOTIGEN --- */
      ["Haaien", "map:Geleedpotigen"] /* zeepokken, heremietkreeften +schelp */
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
      /* --- WATERDIEREN --- */
      ["Haaien", "Inktvissen"], ["Haaien", "Octopussen"], 
      ["Haaien", "Nautilussen"], /* +schelp*/
      /* --- VISSEN --- */
      ["Haaien", "Agnathen"], ["Haaien", "Haaien"], ["Haaien", "Spookhaaien"], ["Haaien", "Coelacanthen"],
      ["Haaien", "Tiktaalik"], ["Haaien", "Oerstraalvinnigen"], ["Haaien", "Zeeduivels"], ["Haaien", "Manta"],
      ["Haaien", "Platvissen"], ["Haaien", "Clownvissen"], ["Haaien", "Doktersvissen"], ["Haaien", "Papegaaivissen"],
      ["Haaien", "Koraalduivels"], ["Haaien", "Kogelvissen"], ["Haaien", "Tonijn"], ["Haaien", "Zalm"],
      ["Haaien", "Kabeljauwen"], ["Haaien", "Haring"], ["Haaien", "Makreel"], ["Haaien", "Karpers"],
      ["Haaien", "Snoeken"], ["Haaien", "Forel"], ["Haaien", "Meervallen"], ["Haaien", "Paling"],
      ["Haaien", "Zeepaardjes"], ["Haaien", "Vliegvissen"], ["Haaien", "Piranha"], ["Haaien", "Maanvissen"],
      ["Haaien", "Goudvissen"]
    ],
    vers: `Lees in naam van jouw Zorgdrager Die creëerde; <br>Die creëerde de mens uit een bloedklodder
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
      ["Haaien", "Zeeslakken"], ["Haaien", "Tweekleppigen"], ["Haaien", "Nautilussen"],
      ["Haaien", "Zeepokken"], ["Haaien", "Heremietkreeften"]
    ],
    output: [
      { naam: "Schelp", icoon: "icons/Schelp.png", map: "Biologie", 
        quote: `I see a broken shell and I remind myself that something might have needed setting free 
        <br><br>- Sara Pennypacker`
      }
    ]
  },
  {
    input: [
      /* --- WATERDIEREN --- */
      ["Spookhaaien", "Wormen"], ["Spookhaaien", "Oertrochozoa"],
      ["Spookhaaien", "Zeeslakken"], ["Spookhaaien", "Tweekleppigen"], 
      /* --- GELEEDPOTIGEN --- */
      ["Spookhaaien", "map:Geleedpotigen"]
    ],
    output: [
      { naam: "Spookhaaien", icoon: "icons/Spookhaaien.png", map: "Vissen", 
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
      ["Spookhaaien", "Zeeslakken"], ["Spookhaaien", "Tweekleppigen"], ["Spookhaaien", "Zeepokken"]
    ],
    output: [
      { naam: "Schelp", icoon: "icons/Schelp.png", map: "Biologie", 
        quote: `I see a broken shell and I remind myself that something might have needed setting free 
        <br><br>- Sara Pennypacker`
      }
    ]
  },
  {
    input: ["Oerkreeftjes", "Evolutie"],
    /*hint: `Uit de eerste kreeftachtige verschijnen een hoop herkenbare soorten.`,*/
    output: [
      { naam: "Zeepissebedden", icoon: "icons/Zeepissebedden.png", map: "Geleedpotigen", 
        quote: `Marine littoral isopods are highly mobile scavengers, often found in large numbers along rocky shorelines
        <br><br>- Gary Poore`
      },
      { naam: "Zeepokken", icoon: "icons/Zeepokken.png", map: "Geleedpotigen", 
        quote: `Despite their immobility as adults, barnacles are active filter feeders, relying on water movement to 
        bring food particles within reach
        <br><br>- Graham Walker`
      },
      { naam: "Vlokreeftjes", icoon: "icons/Vlokreeftjes.png", map: "Geleedpotigen", 
        quote: `Many amphipods are important scavengers, playing a key role in the breakdown of organic matter in aquatic 
        ecosystems
        <br><br>- Gary Poore`
      },
      { naam: "Oertienpotigen", icoon: "icons/Oertienpotigen.png", map: "Geleedpotigen", 
        quote: `The evolution of decapods reflects a long history of ecological diversification in marine environments
        <br><br>- H. Komai`
      }
    ]
  },
  {
    input: ["Oerinsecten", "Evolutie"],
    /*hint: `Met een kleine evolutionaire aanpassing gaan deze kleine beestjes de lucht in.`,*/
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
    ]
  },
  {
    input: ["Oerspinachtigen", "Evolutie"],
    /*hint: `Daar gingen de voorouders van de spinnen en schorpioenen ieder hun eigen weg.`,*/
    tijd: 390_000_000,
    output: [
      { naam: "Schorpioenen", icoon: "icons/Schorpioenen.png", map: "Klein landleven", 
        quote: `Scorpions are among the most ancient of terrestrial arthropods, 
        their basic body plan little changed for hundreds of millions of years
        <br><br>- Gary Polis`
      },
      { naam: "Hooiwagens", icoon: "icons/Hooiwagens.png", map: "Klein landleven", 
        quote: `Unlike spiders, harvestmen do not produce silk or venom, relying instead on scavenging and simple predation
        <br><br>- Mark Harvey`
      },
      { naam: "Spinnen", icoon: "icons/Spinnen.png", map: "Klein landleven", 
        quote: `The next time you see a spider web, please, pause and look a little closer.
        You'll be seeing one of the most high-performance materials known to man 
        <br><br>- Cheryl Hayashi`
      },
      { naam: "Mijten", icoon: "icons/Mijten.png", map: "Klein landleven", 
        quote: `Go pick up a mite — you’ve likely just found a new species or a fascinating example of nature’s diversity
        <br><br>- Ray Fisher`
      },
      { naam: "Teken", icoon: "icons/Teken.png", map: "Klein landleven", 
        quote: `Ticks are among the most important vectors of disease in terrestrial ecosystems
        <br><br>- Alan Bowman`
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
    /*hint: `Het is evolutionair handig als prooien meteen verlamd worden door giftige stofjes.`,*/
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
      ["Hooiwagens", "Bacteriën"], ["Hooiwagens", "Detritus"], ["Hooiwagens", "Blauwalgen"], ["Hooiwagens", "Schimmel"], 
      ["Hooiwagens", "Gist"], ["Hooiwagens", "Rode algen"], ["Hooiwagens", "Groene algen"], ["Hooiwagens", "Amoeben"], 
      ["Hooiwagens", "Foraminiferen"], ["Hooiwagens", "Stralendiertjes"], ["Hooiwagens", "Oerbilateria"], 
      ["Hooiwagens", "Beerdiertjes"]
    ],
    output: [
      { naam: "Hooiwagens", icoon: "icons/Hooiwagens.png", map: "Klein landleven", 
        quote: `Unlike spiders, harvestmen do not produce silk or venom, relying instead on scavenging and simple predation
        <br><br>- Mark Harvey`
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
    input: [
      ["Teken", "Bacteriën"], ["Teken", "Detritus"], ["Teken", "Blauwalgen"], ["Teken", "Schimmel"], ["Teken", "Gist"], 
      ["Teken", "Rode algen"], ["Teken", "Groene algen"], ["Teken", "Amoeben"], ["Teken", "Foraminiferen"],
      ["Teken", "Stralendiertjes"], ["Teken", "Oerbilateria"], ["Teken", "Beerdiertjes"]
    ],
    output: [
      { naam: "Teken", icoon: "icons/Teken.png", map: "Klein landleven", 
        quote: `Ticks are among the most important vectors of disease in terrestrial ecosystems
        <br><br>- Alan Bowman`
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
      ["Oervaatplanten", "Ven"], ["Varens", "Ven"]
    ],
    /*hint: `Een broeinest voor leven is dichte begroeiing en laag stilstaand water.`,*/
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
    /*hint: `Sommige planten zouden er goed aan doen met grote opperlvaktes meer zonlicht te pakken.`,*/
    output: [
      { naam: "Blad", icoon: "icons/Blad.png", map: "Biologie", 
        quote: `How beautiful the leaves grow old. How full of light and colour are their last days
        <br><br>- John Burroughs`
      }
    ]
  },
  {
    input: ["Zeepissebedden", "Oceaan"],
    /*hint: `In de krochten van de oceaan nemen pissebedden grote vormen aan.`,*/
    output: [
      { naam: "Reuzenpissebedden", icoon: "icons/Reuzenpissebedden.png", map: "Geleedpotigen", 
        quote: `These large isopods are scavengers of the deep ocean floor, feeding on carcasses and organic debris
        <br><br>- Diva Abele`
      },
    ]
  },
  {
    input: [
      ["Zeepissebedden", "Zand"], ["Zeepissebedden", "Klei"], ["Zeepissebedden", "Kust"], ["Zeepissebedden", "Strand"],
      ["Zeepissebedden", "Eiland"], ["Zeepissebedden", "Zuurstof"], ["Zeepissebedden", "Aarde"]
    ],
    /*hint: `Pissebedden zouden ook prima op het land kunnen gedijen...`,*/
    output: [
      { naam: "Pissebedden", icoon: "icons/Pissebedden.png", map: "Klein landleven", 
        quote: `Everything from the humble woodlouse to specks of dust moving through a ray of sunlight.
        Each tells a story
        <br><br>- Fennel Hudson`
      },
    ]
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
    input: ["Oertienpotigen", "Evolutie"],
    /*hint: `Sommige tienpotigen bewegen zijwaarts en anderen vooruit.`,*/
    output: [
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
      },
      { naam: "Heremietkreeften", icoon: "icons/Heremietkreeften.png", map: "Geleedpotigen",
        quote: `The growth of hermit crabs is constrained by their dependence on finding progressively larger shells
        <br><br>- Martin West`
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
    input: [
      ["Heremietkreeften", "Bacteriën"], ["Heremietkreeften", "Detritus"], ["Heremietkreeften", "Blauwalgen"], 
      ["Heremietkreeften", "Schimmel"], ["Heremietkreeften", "Archaeplastiden"], ["Heremietkreeften", "Gist"], 
      ["Heremietkreeften", "Rode algen"], ["Heremietkreeften", "Groene algen"], ["Heremietkreeften", "Roodwieren"], 
      ["Heremietkreeften", "Groenwieren"], ["Heremietkreeften", "Wormen"], ["Heremietkreeften", "Oergeleedpotigen"], 
      ["Heremietkreeften", "Manteldieren"], ["Heremietkreeften", "Mos"], ["Heremietkreeften", "Trilobieten"], 
      ["Heremietkreeften", "Oerkreeftjes"], ["Heremietkreeften", "Oervaatplanten"], ["Heremietkreeften", "Korstmos"], 
      ["Heremietkreeften", "Truffels"], ["Heremietkreeften", "Paddenstoelen"], ["Heremietkreeften", "Pissebedden"], 
      ["Heremietkreeften", "Garnalen"], ["Heremietkreeften", "Blad"]
    ],
    output: [
      { naam: "Heremietkreeften", icoon: "icons/Heremietkreeften.png", map: "Geleedpotigen",
        quote: `
        <br><br>- `
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
      ["Heremietkreeften", "Zeeslakken"], ["Heremietkreeften", "Tweekleppigen"]
    ],
    output: [
      { naam: "Heremietkreeften", icoon: "icons/Heremietkreeften.png", map: "Geleedpotigen",
        quote: `
        <br><br>- `
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
      ["Spinnen", "Rivier"], ["Spinnen", "Meer"], ["Spinnen", "Ven"]
    ],
    /*hint: `Onder water spinnen webben als lucht gevulde duikklokken tussen de waterplanten.`,*/
    output: [
      { naam: "Waterspinnen", icoon: "icons/Waterspinnen.png", map: "Geleedpotigen", 
        quote: `The diving bell spider constructs an օդome of silk filled with air, allowing it to live and hunt beneath 
        the surface
        <br><br>- Rainer Foelix`
      }
    ]
  },
  {
    input: ["Spinnen", "Glucose"],
    /*hint: `Geef de spin wat ze nodig heeft en ze maakt er iets moois van.`,*/
    output: [
      { naam: "Zijde", icoon: "icons/Zijde.png", map: "Materialen", 
        quote: `Silk does for the body what diamonds do for the hand
        <br><br>- Oscar de la Renta`
      }
    ]
  },
  {
    input: ["Moeras", "Detritus"],
    /*hint: `Al dat dood organisch materiaal is nooit weg en kan ophopen in laag water.`,*/
    output: [
      { naam: "Veen", icoon: "icons/Veen.png", map: "Aarde", 
        quote: `Peatlands hold the carbon and stories of our past and are key to a livable future
        <br><br>- Catherine Fitzgerald`
      }
    ]
  },
  {
    input: ["Blad", "Oervaatplanten"],
    /*hint: `Stengels vol water en bladeren vol energie - een gouden combinatie.`,*/
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
    /*hint: `Met vegetatie onder druk groeit brandstof als kool.`,*/
    output: [
      { naam: "Bruinkool", icoon: "icons/Bruinkool.png", map: "Aarde", 
        quote: `Even coal shimmers in the light
        <br><br>- Jocelyn Murray`
      }
    ]
  },
  {
    input: ["Bruinkool", "Druk"],
    /*hint: `Kolen kunnen ook verstenen...`,*/
    output: [
      { naam: "Steenkool", icoon: "icons/Steenkool.png", map: "Aarde", 
        quote: `Without a whole lot of pressure, a diamond is just a piece of coal
        <br><br>- Miriam`
      }
    ]
  },
//------------ THRESHOLD 5: CARBOON --------------//
  {
    input: ["Zaadjes", "Oervaatplanten"],
    /*hint: `Het is tijd voor planten om groot te worden...`,*/
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
      },
      normal: {
        achtergrond: "afb/carboon.jpg",
        titel: "CARBOON 359-299 MA",
        tekst: `
        <span>De eerste uitgestrekte, dichtbegroeide bossen van varens en vroege zaadplanten in de laaggelegen 
        moerasgebieden die nu delen van Europa en Noord-Amerika beslaan, groeiden enorm in aantallen en produceerden zo 
        enorme hoeveelheden organisch materiaal. Omdat er nog geen micro-organismen of schimmels waren die hars en lignine 
        efficiënt konden afbreken, werden veel plantenresten behouden in veen, dat in de loop van miljoenen jaren door 
        sedimentatie en druk werd omgezet in steenkool - vandaar de naam van deze periode.</span>
        <br><br>
        <span>Ongeveer 90 procent van de huidige steenkoollagen stamt uit de latere periode van 330-260 miljoen jaar 
        geleden. Het Carboon werd gekenmerkt door rijke zoetwater- en mariene ecosystemen. Zoet water werd gedomineerd door
        mollusken, schorpioenen en grote kraakbeenvissen, terwijl de oceanen complexe riffen en stekelhuidigen huisvestten. 
        In de lucht en op het land verschenen reusachtige geleedpotigen, zoals de libelachtige meganeura met een 
        spanwijdte tot 70 centimer, maar ook de eerste spinnen, duizendpoten en landslakken.</span>
        <br><br>
        <span>De uitgestrekte bossen hadden ook gevolgen voor het klimaat en de geochemie van de Aarde. Planten verdubbelden
        mogelijk de fotosynthesesnelheid, waardoor het totale energiebudget van de biosfeer toenam en dus meer organismen 
        konden worden ondersteund. Door wortel- en bladwerking versnelden ze de verwering van gesteenten, waardoor koolstof
        uit de atmosfeer gemakkelijker werd gebodnen en begraven in bodems en sedimenten. Dit leidde tot een stijging van 
        zuurstofniveaus in de atmosfeer tot circa 30-35 procent, wat op zijn beurt nieuwe chemische reacties in de 
        aardkorst mogelijk maakte en bijdroeg aan de vorming van veel van de mineralen die we vandaag kennen.</span>`,
      }
    }
  },
  {
    input: ["Vleugels", "Oerinsecten"],
    /*hint: `Water, land.. nu is het de beurt aan gevleugelden in de lucht.`,*/
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
      { naam: "Libellen", icoon: "icons/Libellen.png", map: "Klein landleven", 
        quote: `The beauteous dragonfly's dancing by the waves of the rivulet glancing; she dances here and she dances
        there, the glimmering, glittering flutterer fair
        <br><br>- Heinrich Heine`
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
    ]
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
    input: [
      ["Tiktaalik", "Evolutie"], ["Tiktaalik", "Aarde"], ["Tiktaalik", "Moeras"], ["Tiktaalik", "Ven"], 
      ["Tiktaalik", "Kust"], ["Tiktaalik", "Strand"], ["Tiktaalik", "Zand"]
    ],
    /*hint: `De ozonlaag, kleine insecten, planten.. alle ingrediënten zijn er voor de tiktaalik om het land op te gaan.`,*/
    output: [
      { naam: "Oertetrapoden", icoon: "icons/Oertetrapoden.png", map: "Klein landleven",
        quote: `Tiktaalik shows us that the bones in our hands and wrists were once fins, and that our journey onto 
        land began with creatures very much like fish
        <br><br>- Neil Shubin`
      }
    ]
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
    vers: `Lees in naam van jouw Zorgdrager Die creëerde; <br>Die creëerde de mens uit een bloedklodder
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
    input: ["Oerzaadplanten", "Evolutie"],
    /*hint: `Zaadjes brengen planten in drogere gebieden, waar ze bomen vormen.`,*/
    output: [
      { naam: "Hout", icoon: "icons/Hout.png", map: "Materialen", 
        quote: `Nature does nothing in vain; the wood and bark of trees serve both shelter and sustenance
        <br><br>- Aristoteles`
      },
      { naam: "Coniferen", icoon: "icons/Coniferen.png", map: "Bomen", 
        quote: `The pine endures the winter winds, its needles unwavering, a friend to the solitary scholar
        <br><br>- Wang Wei`
      },
      { naam: "Palmvarens", icoon: "icons/Palmvarens.png", map: "Bomen", 
        quote: `The romance of cycads, the gymnosperms that have been with us so long, can never be matched by any 
        somber row of pines standing in the churchyard of science and memory
        <br><br>- Edith Roberts`
      },
      { naam: "Ginkgo", icoon: "icons/Ginkgo.png", map: "Bomen", 
        quote: `This leaf from a tree in the East … has been given to my garden. It reveals a certain secret which 
        pleases me and thoughtful people
        <br><br>- Johann von Goethe`
      }
    ]
  },
  {
    input: ["Oertetrapoden", "Evolutie"],
    /*hint: `De planten hebben hun zaadjes, nu is het aan de tetrapoden om hun eigen zaadjes te ontwikkelen.`,*/
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
    ]
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
    input: [
      ["Hout", "Vuur"], ["Hout", "Lava"]
    ],
    output: [
      { naam: "As", icoon: "icons/As.png", map: "Vuur",
        quote: `Ashes to ashes. Dust to dust. We are nothing, but dust and to dust we shall return 
        <br><br>- Alexander Anderson`
      }
    ]
  },
  {
    input: ["map:Bomen", "map:Bomen"],
    /*hint: `Waar de bomen samenkomen...`,*/
    output: [
      { naam: "Bos", icoon: "icons/Bos.png", map: "Landschap", 
        quote: `The clearest way into the Universe is through a forest wilderness
        <br><br>- John Muir`
      }
    ]
  },
  {
    input: ["Ei", "Oertetrapoden"],
    /*hint: `Het is tijd voor de eerste grote gewervelde dieren om uit hun schulp te komen...`,*/
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
      ["Oersynapsiden", "Zwaardstaarten"], ["Oersynapsiden", "Oertetrapoden"], ["Oersynapsiden", "Oercynodonten"]
    ],
    vers: `Lees in naam van jouw Zorgdrager Die creëerde; <br>Die creëerde de mens uit een bloedklodder
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
      ["Oerdiapsiden", "Zwaardstaarten"], ["Oerdiapsiden", "Oertetrapoden"], ["Oerdiapsiden", "Oercynodonten"]
    ],
    vers: `Lees in naam van jouw Zorgdrager Die creëerde; <br>Die creëerde de mens uit een bloedklodder
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
      ["Oeranapsiden", "Zwaardstaarten"], ["Oeranapsiden", "Oertetrapoden"], ["Oeranapsiden", "Oercynodonten"]
    ],
    vers: `Lees in naam van jouw Zorgdrager Die creëerde; <br>Die creëerde de mens uit een bloedklodder
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
    input: [
      ["Bos", "Vuur"], ["Bos", "Lava"], ["Bos", "Explosie"], ["Bos", "Granietmagma"], ["Bos", "Bliksem"],
      ["Bos", "Bolbliksem"],
      ["Regenwoud", "Vuur"], ["Regenwoud", "Lava"], ["Regenwoud", "Explosie"], ["Regenwoud", "Granietmagma"], 
      ["Regenwoud", "Bliksem"], ["Regenwoud", "Bolbliksem"],
      ["Tropisch regenwoud", "Vuur"], ["Tropisch regenwoud", "Lava"], ["Tropisch regenwoud", "Explosie"], 
      ["Tropisch regenwoud", "Granietmagma"], ["Tropisch regenwoud", "Bliksem"], ["Tropisch regenwoud", "Bolbliksem"]
    ],
    /*hint: `Met de eerste bossen, ontstonden ook de eerste bosbranden.`,*/
    output: [
      { naam: "Brand", icoon: "icons/Brand.png", map: "Vuur", 
        quote: `No time to grieve for roses when the forests are burning
        <br><br>- Zbigniew Herbert`
      }
    ]
  },
  {
    input: ["Bos", "Regen"],
    /*hint: `Meer begroeiing, meer vocht, meer leven.`,*/
    output: [
      { naam: "Regenwoud", icoon: "icons/Regenwoud.png", map: "Landschap", 
        quote: `When we walk into a grove of trees or under an open sky the magic of nature takes over
        and the heaviness of life lifts a little
        <br><br>- Natassia Cassinero`
      }
    ]
  },
  {
    input: ["Regenwoud", "Warmte"],
    /*hint: `Een regenwoud kent al veel diversiteit, maar het ontploft pas echt in de tropen.`,*/
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
    /*hint: `Het is tijd voor zoogdieren.`,*/
    tijd: 260_000_000,
    output: [
      { naam: "Haar", icoon: "icons/Haar.png", map: "Biologie", 
        quote: `And forget not that the earth delights to feel your bare feet and the winds long to play with your hair 
        <br><br>- Khalid Gibran`
      },
      { naam: "Oercynodonten", icoon: "icons/Oercynodonten.png", map: "Zoogdieren", 
        quote: `Mammals are distinguished by their care of the young, their warm blood, and their adaptability, 
        making them the most intimate companions of humans
        <br><br>- Richard Dawkins`
      }
    ],
    uitleg: {
      threshold: {
        titel: "Perm", 
        tekst: "Je moet eerst nog wat meer halen...",
      },
      normal: {
        achtergrond: "afb/perm.png",
        titel: "PERM 299-252 MA",
        tekst: `
        <span>Het supercontinent Pangea werd voltooid en resulteerde in een overwegend continentaal en droger klimaat met
        uitgestrekte woestijnen en seizoensgebonden moerassen. In deze omstandigheden diversifieerde de landdieren de 
        landdieren zich sterk. Binnen de sauropsiden werden de reptielen dominant en breidden izch uit naar uiteenlopende
        niches. Tegelijkertijd vertakten de synapsiden als voorlopers van de zoogdieren van kleine nisecteneters tot grote
        roofdieren.</span>`,
      }
    }
  },
  {
    input: [
      ["Oercynodonten", "Wormen"], ["Oercynodonten", "Oergeleedpotigen"], ["Oercynodonten", "Oercheliceraten"], 
      ["Oercynodonten", "Duizendpoten"], ["Oercynodonten", "Oerinsecten"], ["Oercynodonten", "Spinnen"], 
      ["Oercynodonten", "Pissebedden"], ["Oercynodonten", "Zilvervisjes"], ["Oercynodonten", "Oerpolyneopteren"], 
      ["Oercynodonten", "Oerhymenopteren"], ["Oercynodonten", "Luizen"], ["Oercynodonten", "Kevers"], 
      ["Oercynodonten", "Muggen"], ["Oercynodonten", "Vliegen"], ["Oercynodonten", "Krekels"], 
      ["Oercynodonten", "Sprinkhanen"], ["Oercynodonten", "Kakkerlakken"], ["Oercynodonten", "Termieten"]
    ],
    output: [
      { naam: "Oercynodonten", icoon: "icons/Oercynodonten.png", map: "Zoogdieren", 
        quote: `Mammals are distinguished by their care of the young, their warm blood, and their adaptability, 
        making them the most intimate companions of humans
        <br><br>- Richard Dawkins`
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
    input: ["Oercynodonten", "Slakken"],
    output: [
      { naam: "Oercynodonten", icoon: "icons/Oercynodonten.png", map: "Zoogdieren", 
        quote: `Mammals are distinguished by their care of the young, their warm blood, and their adaptability, 
        making them the most intimate companions of humans
        <br><br>- Richard Dawkins`
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
    input: ["Oerpolyneopteren", "Evolutie"],
    /*hint: `Insecten met langgerekte, rechte vleugels.. we zullen zien wat daaruit komt.`,*/
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
    ]
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
    input: ["Oerdiapsiden", "Evolutie"],
    /*hint: `Reptielen verspreidden al snel naar water, land en lucht.`,*/
    tijd: 230_000_000,
    output: [
      { naam: "Pterosauriërs", icoon: "icons/Pterosauriërs.png", map: "Reptielen", 
        quote: `Pterosaurs were not simply reptiles that flew; they were animals exquisitely adapted to the air, with wings
        unlike anything seen before or since.
        <br><br>- David Unwin`
      },
      { naam: "Lepidosauriërs", icoon: "icons/Lepidosauriërs.png", map: "Reptielen", 
        quote: `Reptiles are exquisitely adapted to their worlds, their skins, their senses, their movements all tuned to 
        the finest details of their surroundings
        <br><br>- Rachel Carson`
      },
      { naam: "Crurotarsi", icoon: "icons/Crurotarsi.png", map: "Reptielen", 
        quote: `Crocodilians are superbly built predators, their bodies low and powerful, moving with a stealth and 
        efficiency that has changed little over time
        <br><br>- David Attenborough`
      },
      { naam: "Oerdinosauriërs", icoon: "icons/Oerdinosauriërs.png", map: "Reptielen", 
        quote: `Dinosaurs are the best way to teach kids, and adults, the immensity of geologic time
        <br><br>- Robert Bakker`
      }
    ]
  },
  {
    input: [
      ["Pterosauriërs", "Wormen"], ["Pterosauriërs", "Oergeleedpotigen"], ["Pterosauriërs", "Oercheliceraten"],
      ["Pterosauriërs", "Duizendpoten"], ["Pterosauriërs", "Oerkreeftjes"], ["Pterosauriërs", "Oerinsecten"], 
      ["Pterosauriërs", "Spinnen"], ["Pterosauriërs", "Mijten"], ["Pterosauriërs", "Pissebedden"], 
      ["Pterosauriërs", "Zilvervisjes"], ["Pterosauriërs", "Oerpolyneopteren"], ["Pterosauriërs", "Oerhymenopteren"], 
      ["Pterosauriërs", "Luizen"], ["Pterosauriërs", "Kevers"], ["Pterosauriërs", "Muggen"], ["Pterosauriërs", "Vliegen"], 
      ["Pterosauriërs", "Vlinders"], ["Pterosauriërs", "Krekels"], ["Pterosauriërs", "Sprinkhanen"], 
      ["Pterosauriërs", "Wandelende takken"], ["Pterosauriërs", "Kakkerlakken"], ["Pterosauriërs", "Termieten"]
    ],
    output: [
      { naam: "Pterosauriërs", icoon: "icons/Pterosauriërs.png", map: "Reptielen", 
        quote: `Pterosaurs were not simply reptiles that flew; they were animals exquisitely adapted to the air, with wings
        unlike anything seen before or since.
        <br><br>- David Unwin`
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
      ["Pterosauriërs", "Zwaardstaarten"], ["Pterosauriërs", "Oertetrapoden"], ["Pterosauriërs", "Oercynodonten"]
    ],
    vers: `Lees in naam van jouw Zorgdrager Die creëerde; <br>Die creëerde de mens uit een bloedklodder
    <br><br>De Bloedklodder (96:1-2)`,
    output: [
      { naam: "Pterosauriërs", icoon: "icons/Pterosauriërs.png", map: "Reptielen", 
        quote: `Pterosaurs were not simply reptiles that flew; they were animals exquisitely adapted to the air, with wings
        unlike anything seen before or since.
        <br><br>- David Unwin`
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
      ["Lepidosauriërs", "Wormen"], ["Lepidosauriërs", "Oergeleedpotigen"], ["Lepidosauriërs", "Oercheliceraten"],
      ["Lepidosauriërs", "Duizendpoten"], ["Lepidosauriërs", "Oerkreeftjes"], ["Lepidosauriërs", "Oerinsecten"], 
      ["Lepidosauriërs", "Spinnen"], ["Lepidosauriërs", "Mijten"], ["Lepidosauriërs", "Pissebedden"], 
      ["Lepidosauriërs", "Zilvervisjes"], ["Lepidosauriërs", "Oerpolyneopteren"], ["Lepidosauriërs", "Oerhymenopteren"], 
      ["Lepidosauriërs", "Luizen"], ["Lepidosauriërs", "Kevers"], ["Lepidosauriërs", "Muggen"], 
      ["Lepidosauriërs", "Vliegen"], ["Lepidosauriërs", "Vlinders"], ["Lepidosauriërs", "Krekels"], 
      ["Lepidosauriërs", "Sprinkhanen"], ["Lepidosauriërs", "Wandelende takken"], ["Lepidosauriërs", "Kakkerlakken"], 
      ["Lepidosauriërs", "Termieten"]
    ],
    output: [
      { naam: "Lepidosauriërs", icoon: "icons/Lepidosauriërs.png", map: "Reptielen", 
        quote: `Reptiles are exquisitely adapted to their worlds, their skins, their senses, their movements all tuned to 
        the finest details of their surroundings
        <br><br>- Rachel Carson`
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
      ["Lepidosauriërs", "Zwaardstaarten"], ["Lepidosauriërs", "Oertetrapoden"], ["Lepidosauriërs", "Oercynodonten"]
    ],
    vers: `Lees in naam van jouw Zorgdrager Die creëerde; <br>Die creëerde de mens uit een bloedklodder
    <br><br>De Bloedklodder (96:1-2)`,
    output: [
      { naam: "Lepidosauriërs", icoon: "icons/Lepidosauriërs.png", map: "Reptielen", 
        quote: `Reptiles are exquisitely adapted to their worlds, their skins, their senses, their movements all tuned to 
        the finest details of their surroundings
        <br><br>- Rachel Carson`
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
      ["Crurotarsi", "Wormen"], ["Crurotarsi", "Oergeleedpotigen"], ["Crurotarsi", "Oercheliceraten"],
      ["Crurotarsi", "Duizendpoten"], ["Crurotarsi", "Oerkreeftjes"], ["Crurotarsi", "Oerinsecten"], 
      ["Crurotarsi", "Spinnen"], ["Crurotarsi", "Mijten"], ["Crurotarsi", "Pissebedden"], 
      ["Crurotarsi", "Zilvervisjes"], ["Crurotarsi", "Oerpolyneopteren"], ["Crurotarsi", "Oerhymenopteren"], 
      ["Crurotarsi", "Luizen"], ["Crurotarsi", "Kevers"], ["Crurotarsi", "Muggen"], ["Crurotarsi", "Vliegen"], 
      ["Crurotarsi", "Vlinders"], ["Crurotarsi", "Krekels"], ["Crurotarsi", "Sprinkhanen"], 
      ["Crurotarsi", "Wandelende takken"], ["Crurotarsi", "Kakkerlakken"], ["Crurotarsi", "Termieten"]
    ],
    output: [
      { naam: "Crurotarsi", icoon: "icons/Crurotarsi.png", map: "Reptielen", 
        quote: `Crocodilians are superbly built predators, their bodies low and powerful, moving with a stealth and 
        efficiency that has changed little over time
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
      ["Crurotarsi", "Zwaardstaarten"], ["Crurotarsi", "Oertetrapoden"], ["Crurotarsi", "Oercynodonten"]
    ],
    vers: `Lees in naam van jouw Zorgdrager Die creëerde; <br>Die creëerde de mens uit een bloedklodder
    <br><br>De Bloedklodder (96:1-2)`,
    output: [
      { naam: "Crurotarsi", icoon: "icons/Crurotarsi.png", map: "Reptielen", 
        quote: `Crocodilians are superbly built predators, their bodies low and powerful, moving with a stealth and 
        efficiency that has changed little over time
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
    input: [
      ["Oerdinosauriërs", "Wormen"], ["Oerdinosauriërs", "Oergeleedpotigen"], ["Oerdinosauriërs", "Oercheliceraten"],
      ["Oerdinosauriërs", "Duizendpoten"], ["Oerdinosauriërs", "Oerkreeftjes"], ["Oerdinosauriërs", "Oerinsecten"], 
      ["Oerdinosauriërs", "Spinnen"], ["Oerdinosauriërs", "Mijten"], ["Oerdinosauriërs", "Pissebedden"], 
      ["Oerdinosauriërs", "Zilvervisjes"], ["Oerdinosauriërs", "Oerpolyneopteren"], ["Oerdinosauriërs", "Oerhymenopteren"], 
      ["Oerdinosauriërs", "Luizen"], ["Oerdinosauriërs", "Kevers"], ["Oerdinosauriërs", "Muggen"], 
      ["Oerdinosauriërs", "Vliegen"], ["Oerdinosauriërs", "Vlinders"], ["Oerdinosauriërs", "Krekels"], 
      ["Oerdinosauriërs", "Sprinkhanen"], ["Oerdinosauriërs", "Wandelende takken"], ["Oerdinosauriërs", "Kakkerlakken"], 
      ["Oerdinosauriërs", "Termieten"]
    ],
    output: [
      { naam: "Oerdinosauriërs", icoon: "icons/Oerdinosauriërs.png", map: "Reptielen", 
        quote: `Dinosaurs are the best way to teach kids, and adults, the immensity of geologic time
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
      ["Crurotarsi", "Zwaardstaarten"], ["Crurotarsi", "Oertetrapoden"], ["Crurotarsi", "Oercynodonten"]
    ],
    vers: `Lees in naam van jouw Zorgdrager Die creëerde; <br>Die creëerde de mens uit een bloedklodder
    <br><br>De Bloedklodder (96:1-2)`,
    output: [
      { naam: "Oerdinosauriërs", icoon: "icons/Oerdinosauriërs.png", map: "Reptielen", 
        quote: `Dinosaurs are the best way to teach kids, and adults, the immensity of geologic time
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
    input: ["Oeranapsiden", "Evolutie"],
    /*hint: `Er is er maar 1 overgebleven van de anapsiden, maar wie...`,*/
    tijd: 260_000_000,
    output: [
      { naam: "Schildpadden", icoon: "icons/Schildpadden.png", map: "Reptielen", 
        quote: `Slow but steady wins the race
        <br><br>- Aesopos`
      }
    ]
  },
  {
    input: [
      ["Schildpadden", "Detritus"], ["Schildpadden", "Rode algen"], ["Schildpadden", "Groene algen"], 
      ["Schildpadden", "Roodwieren"], ["Schildpadden", "Groenwieren"], ["Schildpadden", "Wormen"], 
      ["Schildpadden", "Mos"], ["Schildpadden", "Duizendpoten"], ["Schildpadden", "Oerinsecten"], 
      ["Schildpadden", "Spinnen"], ["Schildpadden", "Oervaatplanten"], ["Schildpadden", "Pissebedden"],
      ["Schildpadden", "Blad"], ["Schildpadden", "Varens"], ["Schildpadden", "Oerzaadplanten"],
      ["Schildpadden", "Kevers"], ["Schildpadden", "Muggen"], ["Schildpadden", "Vliegen"], ["Schildpadden", "Vlinders"],
      ["Schildpadden", "Krekels"], ["Schildpadden", "Sprinkhanen"], ["Schildpadden", "Wandelende takken"],
      ["Schildpadden", "Kakkerlakken"], ["Schildpadden", "Termieten"]
    ],
    output: [
      { naam: "Schildpadden", icoon: "icons/Schildpadden.png", map: "Reptielen", 
        quote: `Slow but steady wins the race
        <br><br>- Aesopos`
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
      ["Termieten", "Aarde"], ["Mieren", "Aarde"]
    ],
    /*hint: `Termieten zijn kunstzinnige beestjes, kijk maar wat ze kunnen met simpele grond.`,*/
    output: [
      { naam: "Heuvel", icoon: "icons/Heuvel.png", map: "Landschap", 
        quote: `Say, if I only could... I'd make a deal with God and I'd get Him to swap our places.
        I'd be running up that road, be running up that hill.. with no problems
        <br><br>- Kate Bush`
      }
    ]
  },
  {
    input: [
      ["Termieten", "Termieten"], ["Mieren", "Mieren"]
    ],
    /*hint: `De eerste samenlevingen werden gebouwd door eusociale dieren als termieten en mieren.`,*/
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
    /*hint: `Wie o wie wil er terug naar de oceaan?`,*/
    output: [
      { naam: "Zeeschildpadden", icoon: "icons/Zeeschildpadden.png", map: "Waterdieren", 
        quote: `Try to be like the turtle - at ease in your own shell
        <br><br>- Bill Copeland`
      }
    ]
  },
  {
    input: [
      /* --- PRIL LEVEN --- */
      ["Zeeschildpadden", "Groene algen"], ["Zeeschildpadden", "Rode algen"],
      ["Zeeschildpadden", "Groenwieren"], ["Zeeschildpadden", "Roodwieren"], ["Zeeschildpadden", "Bruinwieren"],
      /* --- WATERDIEREN --- */
      ["Zeeschildpadden", "Sponzen"], ["Zeeschildpadden", "Koraal"], ["Zeeschildpadden", "Kwallen"], 
      ["Zeeschildpadden", "Zeeanemonen"], ["Zeeschildpadden", "Wormen"], ["Zeeschildpadden", "Oertrochozoa"], 
      ["Zeeschildpadden", "Zeesterren"], ["Zeeschildpadden", "Zee-egels"], ["Zeeschildpadden", "Manteldieren"], 
      /* --- +schelp --- */
      ["Zeeschildpadden", "Zeeslakken"], ["Zeeschildpadden", "Tweekleppigen"], 
      /* --- VISSEN --- */
      ["Zeeschildpadden", "Lancetvisjes"], 
      /* --- GELEEDPOTIGEN --- */
      ["Zeeschildpadden", "map:Geleedpotigen"] /* zeepokken, heremietkreeften +schelp */
    ],
    output: [
      { naam: "Zeeschildpadden", icoon: "icons/Zeeschildpadden.png", map: "Waterdieren", 
        quote: `Try to be like the turtle - at ease in your own shell
        <br><br>- Bill Copeland`
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
      /* --- WATERDIEREN --- */
      ["Zeeschildpadden", "Inktvissen"], ["Zeeschildpadden", "Nautilussen"], ["Zeeschildpadden", "Octopussen"],
      /* --- VISSEN --- */
      ["Zeeschildpadden", "Agnathen"], ["Zeeschildpadden", "Oerstraalvinnigen"],
      ["Platvissen", "Zeeschildpadden"], ["Clownvissen", "Zeeschildpadden"], ["Doktersvissen", "Zeeschildpadden"], 
      ["Kabeljauwen", "Zeeschildpadden"], ["Haring", "Zeeschildpadden"], ["Makreel", "Zeeschildpadden"],
      ["Paling", "Zeeschildpadden"], ["Zeepaardjes", "Zeeschildpadden"]
    ],
    vers: `Lees in naam van jouw Zorgdrager Die creëerde; <br>Die creëerde de mens uit een bloedklodder
    <br><br>De Bloedklodder (96:1-2)`,
    output: [
      { naam: "Zeeschildpadden", icoon: "icons/Zeeschildpadden.png", map: "Waterdieren", 
        quote: `Try to be like the turtle - at ease in your own shell
        <br><br>- Bill Copeland`
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
      ["Zeeschildpadden", "Zeeslakken"], ["Zeeschildpadden", "Tweekleppigen"], ["Zeeschildpadden", "Nautilussen"],
      ["Zeeschildpadden", "Zeepokken"], ["Zeeschildpadden", "Heremietkreeften"]
    ],
    output: [
      { naam: "Schelp", icoon: "icons/Schelp.png", map: "Biologie", 
        quote: `I see a broken shell and I remind myself that something might have needed setting free 
        <br><br>- Sara Pennypacker`
      }
    ]
  },
  {
    input: [
      ["Hiërarchie", "Termieten"], ["Hiërarchie", "Mieren"]
    ],
    /*hint: `Kijk wat hiërarchie zoal kan brengen...`,*/
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
  },
//------------ THRESHOLD 7: JURA --------------//
  {
    input: ["Oerdinosauriërs", "Evolutie"],
    hint: `Ook dinosauriërs vertakken in vele soorten.`,
    tijd: 201_000_000,
    output: [
      { naam: "Oermaniraptoren", icoon: "icons/Oermaniraptoren.png", map: "Reptielen", 
        quote: `Maniraptoran dinosaurs display a remarkable combination of speed, dexterity, and keen senses, hinting at 
        the evolutionary roots of modern birds
        <br><br>- Philip Currie`
      },
      { naam: "Sauropoden", icoon: "icons/Sauropoden.png", map: "Reptielen", 
        quote: `Sauropods were the gentle giants of the Mesozoic, moving with ponderous grace, their immense bodies 
        shaping the landscapes they traversed
        <br><br>- John McIntosh`
      },
      { naam: "Stegosauriërs", icoon: "icons/Stegosauriërs.png", map: "Reptielen", 
        quote: `Stegosaurs are among the most iconic of dinosaurs, with their plated backs and spiked tails, suggesting 
        both defense and display in equal measure
        <br><br>- Peter Galton`
      },
      { naam: "Tyrannosauriërs", icoon: "icons/Tyrannosauriërs.png", map: "Reptielen", 
        quote: `Tyrannosaurs were the apex predators of their time, with massive skulls, powerful jaws, and a body built 
        for both hunting and intimidation
        <br><br>- Jack Horner`
      }
    ],
    uitleg: {
      threshold: {
        titel: "Jura", 
        tekst: "Je moet eerst nog wat meer halen...",
      },
      normal: {
        achtergrond: "afb/jura.png",
        titel: "JURA 201-145 MA",
        tekst: `
        <span>Opnieuw vond een grote sterfte aan soorten leven plaats, maar dit keer is de aanleiding tot dusver nog 
        onbekend. Gedacht wordt aan een meteoriet, klimaatverandering, vulkanisme of het vrijkomen van methaan uit de
        oceaanbodem. Het heeft de kaarten van het evolutiespel op land flink door elkaar geschud, maar vooral in zee waren 
        de gevolgen ernstig. Circa 20 procent van de mariene families stierf uit, waaronder veel grote zeereptielen. 
        De dinosauriërs zouden juist van deze gebeurtenis hebben geprofiteerd en werden nog dominanter op land. 
        In totaal stierf mogelijk ongeveer 75 procent van alle diersoorten uit.</span>
        <br><br>
        <span>Deze periode is vernoemd naar het Jura-gebergte op de Zwitsers-Franse grens, waar veel gesteenten uit deze 
        tijd aan het oppervlak liggen. Op de zeebodem leefden veel diersoorten die er nu nog zijn, zoals oesters, 
        slangsterren, zeesterren en zee-egels. In deze periode kwamen ook kreeftachtigen sterk tot ontwikkeling, 
        waaronder krabben, kreeften, garnalen en zelfs pissebedden (op land). Sommige waterdieren profiteerden van de 
        Trias-Jura-massaextinctie, waaronder de plesiosauriërs (zeereptielen), ichthyosauriërs (reptielachtige 
        zeereptielen), haaien en krokodilachtige zeereptielen.</span>
        <br><br>
        Op land varieerden soorten dinosauriërs van plantenetende stegosauriërs (met rijen stekels of botplaten op de rug) 
        en sauropoden (met zeer lange nekken en tevens de langste en zwaarste landdieren die ooit hebben geleefd), tot 
        vleesetende theropoden en de vliegende pterosauriërs. Zoogdieren waren kleine, onopvallende dieren die meestal 
        ’s nachts leefden om confrontaties met dinosauriërs uit de weg te gaan, zoals de fruitafossor (een insecteneter 
        van circa 15 centimeter) of otterachtige viseters. De flora werd gedomineerd door palmvarens, boomvarens en 
        coniferen of kegeldragers (voorouders van veel naaldbomen), wat wijst op een overwegend warm en vochtig klimaat.
        </span>`,
      }
    }
  },
  {
    input: ["Rode algen", "Leca"],
    hint: `Van rood is het een kleine stap naar bruin.. in het algenmeen.`,
    output: [
      { naam: "Bruinwieren", icoon: "icons/Bruinwieren.png", map: "Pril leven", 
        quote: `Kelp forests are the towering cities of the sea, providing shelter, food, and life to countless marine 
        organisms
        <br><br>- Jeremy Jackson`
      }
    ]
  },
  {
    input: ["Oertrochozoa", "Brein"],
    hint: `Laten we één creatie alles geven: hyperintelligentie, razendsnel camouflagevermogen, zuignappen, leervermogen,
    de beste ogen, inkt spuiten, jetpropulsie... en 3 harten.`,
    output: [
      { naam: "Octopussen", icoon: "icons/Octopussen.png", map: "Waterdieren", 
        quote: `We split from our common ancestor with the octopus half a billion years ago. And yet, you can make friends
        with an octopus
        <br><br>- Sy Montgomery`
      }
    ]
  },
  {
    input: [
      /* --- WATERDIEREN --- */
      ["Octopussen", "Kwallen"],["Octopussen", "Wormen"], ["Octopussen", "Oertrochozoa"], ["Octopussen", "Zeesterren"], 
      ["Octopussen", "Zee-egels"], ["Octopussen", "Manteldieren"], 
      /* --- +schelp --- */
      ["Octopussen", "Zeeslakken"], ["Octopussen", "Tweekleppigen"], 
      /* --- VISSEN --- */
      ["Octopussen", "Lancetvisjes"], 
      /* --- GELEEDPOTIGEN --- */
      ["Octopussen", "map:Geleedpotigen"] /* zeepokken, heremietkreeften +schelp */
    ],
    output: [
      { naam: "Octopussen", icoon: "icons/Octopussen.png", map: "Waterdieren", 
        quote: `We split from our common ancestor with the octopus half a billion years ago. And yet, you can make friends
        with an octopus
        <br><br>- Sy Montgomery`
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
      /* --- WATERDIEREN --- */
      ["Octopussen", "Inktvissen"], ["Octopussen", "Nautilussen"],
      /* --- VISSEN --- */
      ["Octopussen", "Agnathen"], ["Octopussen", "Oerstraalvinnigen"],
      ["Platvissen", "Octopussen"], ["Clownvissen", "Octopussen"], ["Doktersvissen", "Octopussen"], 
      ["Zalm", "Octopussen"], ["Kabeljauwen", "Octopussen"], ["Haring", "Octopussen"], ["Makreel", "Octopussen"],
      ["Karpers", "Octopussen"], ["Forel", "Octopussen"], ["Meervallen", "Octopussen"], ["Paling", "Octopussen"], 
      ["Zeepaardjes", "Octopussen"], ["Piranha", "Octopussen"], ["Goudvissen", "Octopussen"]
    ],
    vers: `Lees in naam van jouw Zorgdrager Die creëerde; <br>Die creëerde de mens uit een bloedklodder
    <br><br>De Bloedklodder (96:1-2)`,
    output: [
      { naam: "Octopussen", icoon: "icons/Octopussen.png", map: "Waterdieren", 
        quote: `We split from our common ancestor with the octopus half a billion years ago. And yet, you can make friends
        with an octopus
        <br><br>- Sy Montgomery`
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
      ["Octopussen", "Zeeslakken"], ["Octopussen", "Tweekleppigen"], ["Octopussen", "Nautilussen"],
      ["Octopussen", "Zeepokken"], ["Octopussen", "Heremietkreeften"]
    ],
    output: [
      { naam: "Schelp", icoon: "icons/Schelp.png", map: "Biologie", 
        quote: `I see a broken shell and I remind myself that something might have needed setting free 
        <br><br>- Sara Pennypacker`
      }
    ]
  },
  {
    input: [
      ["Oermaniraptoren", "Evolutie"], ["Oermaniraptoren", "Lucht"]
    ],
    hint: `Wie o wie voelt zich vogelvrij genoeg?`,
    tijd: 150_000_000,
    output: [
      { naam: "Veer", icoon: "icons/Veer.png", map: "Biologie", 
        quote: `Let me be as a feather strong, with purpose, yet light at heart, able to bend, and, tho I might become
        frayed, able to pull myself together again
        <br><br>- Anita Sams`
      },
      { naam: "Archaeopteryx", icoon: "icons/Archaeopteryx.png", map: "Vogels", 
        quote: `Archaeopteryx shows us that the boundary between dinosaurs and birds was once blurred, with feathers, 
        wings, and a skeletal form that could take to the air
        <br><br>- Alan Feduccia`
      }
    ]
  },
  {
    input: ["Bruinwieren", "Bruinwieren"],
    hint: `Al gedacht aan bossen onder water?`,
    output: [
      { naam: "Kelpwoud", icoon: "icons/Kelpwoud.png", map: "Landschap", 
        quote: `Kelp forests are among the most productive and dynamic ecosystems on Earth, forming underwater jungles 
        that shelter thousands of species
        <br><br>- Nancy Foster`
      }
    ]
  },
//------------ THRESHOLD 8: KRIJT --------------//
  {
    input: [
      ["Zaadjes", "Evolutie"], ["Zaadjes", "Blad"]
    ],
    hint: `Het is tijd voor bloemen, die zaadjes accentueren met kleurrijke blaadjes.`,
    tijd: 145_000_000,
    output: [
      { naam: "Bloem", icoon: "icons/Bloem.png", map: "Biologie", 
        quote: `You're only here for a short visit. Don't hurry, don't worry. And be sure to smell the flowers along the
        way
        <br><br>- Walter Hagen`
      }
    ],
    uitleg: {
      threshold: {
        titel: "Krijt", 
        tekst: "Je moet eerst nog wat meer halen...",
      },
      normal: {
        achtergrond: "afb/krijt.jpg",
        titel: "KRIJT 145-66 MA",
        tekst: `
        <span></span>`,
      }
    }
  },
  {
    input: [
      ["Oerstraalvinnigen", "Druk"], ["Oerstraalvinnigen", "Bacteriën"]
    ],
    hint: `Onder grote druk presteren sommige straalvinnigen het best.`,
    tijd: 100_000_000,
    output: [
      { naam: "Zeeduivels", icoon: "icons/Zeeduivels.png", map: "Vissen", 
        quote: `Few creatures of the sea appear as grotesque and yet as perfectly adapted as the anglerfish, 
        a silent hunter of the ocean floor
        <br><br>- David Attenborough`
      }
    ]
  },
  {
    input: [
      /* --- WATERDIEREN --- */
      ["Zeeduivels", "Wormen"], ["Zeeduivels", "Oertrochozoa"], 
      /* --- VISSEN --- */
      ["Zeeduivels", "Lancetvisjes"], 
      /* --- GELEEDPOTIGEN --- */
      ["Zeeduivels", "map:Geleedpotigen"] /* zeepokken, heremietkreeften +schelp */
    ],
    output: [
      { naam: "Zeeduivels", icoon: "icons/Zeeduivels.png", map: "Vissen", 
        quote: `Few creatures of the sea appear as grotesque and yet as perfectly adapted as the anglerfish, 
        a silent hunter of the ocean floor
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
      /* --- VISSEN --- */
      ["Zeeduivels", "Agnathen"], ["Zeeduivels", "Coelacanthen"], ["Zeeduivels", "Tiktaalik"], 
      ["Zeeduivels", "Oerstraalvinnigen"], ["Zeeduivels", "Platvissen"], ["Zeeduivels", "Clownvissen"], 
      ["Zeeduivels", "Doktersvissen"], ["Zeeduivels", "Papegaaivissen"], ["Zeeduivels", "Koraalduivels"], 
      ["Zeeduivels", "Tonijn"], ["Zeeduivels", "Zalm"], ["Zeeduivels", "Kabeljauwen"], ["Zeeduivels", "Haring"], 
      ["Zeeduivels", "Makreel"], ["Zeeduivels", "Karpers"], ["Zeeduivels", "Snoeken"], ["Zeeduivels", "Forel"], 
      ["Zeeduivels", "Meervallen"], ["Zeeduivels", "Paling"], ["Zeeduivels", "Zeepaardjes"], ["Zeeduivels", "Piranha"], 
      ["Zeeduivels", "Goudvissen"]
    ],
    vers: `Lees in naam van jouw Zorgdrager Die creëerde; <br>Die creëerde de mens uit een bloedklodder
    <br><br>De Bloedklodder (96:1-2)`,
    output: [
      { naam: "Zeeduivels", icoon: "icons/Zeeduivels.png", map: "Vissen", 
        quote: `Few creatures of the sea appear as grotesque and yet as perfectly adapted as the anglerfish, 
        a silent hunter of the ocean floor
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
    input: [
      ["Zeeduivels", "Zeepokken"], ["Zeeduivels", "Heremietkreeften"]
    ],
    output: [
      { naam: "Schelp", icoon: "icons/Schelp.png", map: "Biologie", 
        quote: `I see a broken shell and I remind myself that something might have needed setting free 
        <br><br>- Sara Pennypacker`
      }
    ]
  },
  {
    input: ["Oerhymenopteren", "Evolutie"],
    hint: `Vliesvleugelige insecten hebben nu vrij spel dankzij de bloemmetjes van het Krijt.`,
    tijd: 120_000_000,
    output: [
      { naam: "Mieren", icoon: "icons/Mieren.png", map: "Klein landleven", 
        quote: `Ants are good citizens, they place group interest first; but they carry it so far, they have few or no 
        political rights. An ant doesn't have the vote, apparently; he just has his duties
        <br><br>- Clarence Day`
      },
      { naam: "Wespen", icoon: "icons/Wespen.png", map: "Klein landleven", 
        quote: `Wasps are among the most efficient insect predators, provisioning their nests with paralyzed prey for 
        their larvae
        <br><br>- Edward Wilson`
      },
      { naam: "Bijen", icoon: "icons/Bijen.png", map: "Klein landleven", 
        quote: `As a bee without harming the flower, its colour or scent, flies away, collecting only the honey, even so
        should the sage wander in the village
        <br><br>- Gautama Buddha`
      }
    ]
  },
  {
    input: ["Lepidosauriërs", "Evolutie"],
    hint: `Vergeet de lepidosauriërs niet!`,
    tijd: 70_000_000,
    output: [
      { naam: "Slangen", icoon: "icons/Slangen.png", map: "Reptielen", 
        quote: `The snake sheds its skin, but not its nature
        <br><br>- Aristoteles`
      },
      { naam: "Gekko's", icoon: "icons/Gekko's.png", map: "Reptielen", 
        quote: `Geckos can run up walls and across ceilings with ease, their feet equipped with millions of microscopic 
        hairs that cling by the slightest forces
        <br><br>- Kellar Autumn`
      },
      { naam: "Leguanen", icoon: "icons/Leguanen.png", map: "Reptielen", 
        quote: `Iguanas bask for hours in the sun, conserving energy, their stillness broken only by slow, deliberate 
        movements
        <br><br>- David Attenborough`
      }
    ]
  },
  {
    input: ["Crurotarsi", "Evolutie"],
    hint: `In het Krijt namen de crurotarsi toch wel hele bekende vormen aan.`,
    tijd: 70_000_000,
    output: [
      { naam: "Krokodillen", icoon: "icons/Krokodillen.png", map: "Reptielen", 
        quote: `The crocodile is the most dangerous of the creatures of the Nile, seizing its prey suddenly and dragging 
        it beneath the water
        <br><br>- Herodotus`
      }
    ]
  },
  {
    input: [
      ["Bloem", "Ven"], ["Bloem", "Moeras"], ["Bloem", "Kevers"]
    ],
    hint: `De oudste bloem gedijt goed in het moeras.`,
    tijd: 125_000_000,
    output: [
      { naam: "Waterlelies", icoon: "icons/Waterlelies.png", map: "Bloemen", 
        quote: `It took me time to understand my water lilies. I had planted them for the pleasure of it; 
        I grew them without ever thinking of painting them
        <br><br>- Claude Monet`
      }
    ]
  },
  {
    input: [
      ["Bloem", "Zaadjes"], ["Bloem", "Tropisch regenwoud"]
    ],
    hint: `De oudste bloem maakte een belangrijke ontwikkeling door in de tropen.`,
    tijd: 100_000_000,
    output: [
      { naam: "Steranijs", icoon: "icons/Steranijs.png", map: "Smaakmakers", 
        quote: `The fruit of star anise forms a star-shaped cluster of carpels, each containing a single seed
        <br><br>- K.R. Kirtikar`
      }
    ]
  },
  {
    input: ["Bloem", "Oerzaadplanten"],
    hint: `Zaadplanten gaan goed samen met bloemmetjes.`,
    tijd: 135_000_000,
    output: [
      { naam: "Oermagnoliden", icoon: "icons/Oermagnoliden.png", map: "Planten", 
        quote: `The origin of flowering plants is one of the greatest mysteries in evolutionary biology
        <br><br>- Charles Darwin`
      },
      { naam: "Oermonocotylen", icoon: "icons/Oermonocotylen.png", map: "Planten", 
        quote: `In monocotyledons the stem grows without secondary thickening, giving rise to forms that are often elegant, 
        flexible, and perfectly suited to their environment
        <br><br>- Katherine Esau`
      },
      { naam: "Oereudicoten", icoon: "icons/Oereudicoten.png", map: "Planten", 
        quote: `In dicotyledons the capacity for secondary growth allows the plant to build strength, branching complexity, 
        and longevity
        <br><br>- Arthur Cronquist`
      }
    ]
  },
  {
    input: ["Bijen", "Bloem"],
    hint: `Sommige bloemen en insecten zijn goed in lekkernijen.`,
    vers: `Uit haar buik komt een drank van verschillende kleuren, daarin is genezing voor de mens, aldus zit daarin
    zeker een teken voor de mensen die nadenken
    <br><br>De Bij (16:69)`,
    output: [
      { naam: "Honing", icoon: "icons/Honing.png", map: "Genotwaren", 
        quote: `Honey is the only food which includes all the substances necessary to sustain life, including enzymes, 
        vitamins, minerals, and water
        <br><br>- John Kellogg`
      }
    ]
  },
  {
    input: ["Oermagnoliden", "Wind"],
    hint: `Sommige magnoliden bestuiven met de wind.`,
    tijd: 95_000_000,
    output: [
      { naam: "Tulpenbomen", icoon: "icons/Tulpenbomen.png", map: "Bomen", 
        quote: `The tulip tree rises tall and straight, bearing large, distinctive leaves and tulip-like flowers high in 
        its crown
        <br><br>- Donald Peattie`
      }
    ]
  },
  {
    input: ["Oermagnoliden", "Evolutie"],
    hint: `De kernlijn van de magnoliden is die van de magnolia.`,
    tijd: 95_000_000,
    output: [
      { naam: "Magnolia", icoon: "icons/Magnolia.png", map: "Bomen", 
        quote: `Magnolia flowers are among the most primitive of the angiosperms, with numerous petals arranged in a 
        simple, elegant form
        <br><br>- Armen Takhtajan`
      }
    ]
  },
  {
    input: ["Oermagnoliden", "Blad"],
    hint: `Sommige magnoliden gaan voorts op hun geurige bladeren.`,
    tijd: 70_000_000,
    output: [
      { naam: "Laurierbomen", icoon: "icons/Laurierbomen.png", map: "Bomen", 
        quote: `The laurel has been associated since antiquity with honor and victory, its leaves woven into crowns
        <br><br>- Plinius de Oudere`
      }
    ]
  },
  {
    input: ["Oermagnoliden", "Zaadjes"],
    hint: `Sommige magnoliden gaan voorts op hun geurige zaadjes.`,
    tijd: 70_000_000,
    output: [
      { naam: "Nootmuskaat", icoon: "icons/Nootmuskaat.png", map: "Smaakmakers", 
        quote: `Nutmeg is the seed of an evergreen tree, valued for its warm, aromatic spice used in both sweet and 
        savory dishes
        <br><br>- Harold McGee`
      },
      { naam: "Peper", icoon: "icons/Peper.png", map: "Smaakmakers", 
        quote: `Black pepper has been one of the most widely traded spices in history
        <br><br>- Andrew Dalby`
      }
    ]
  },
  {
    input: [
      ["Oermagnoliden", "Kevers"], ["Oermagnoliden", "Bloem"]
    ],
    hint: `Sommige magnoliden komen verder met de kevers.`,
    tijd: 95_000_000,
    output: [
      { naam: "Magnolia", icoon: "icons/Magnolia.png", map: "Bomen", 
        quote: `Magnolia flowers are among the most primitive of the angiosperms, with numerous petals arranged in a 
        simple, elegant form
        <br><br>- Armen Takhtajan`
      },
      { naam: "Tulpenbomen", icoon: "icons/Tulpenbomen.png", map: "Bomen", 
        quote: `The tulip tree rises tall and straight, bearing large, distinctive leaves and tulip-like flowers high in 
        its crown
        <br><br>- Donald Peattie`
      }
    ]
  },
  {
    input: ["Oermagnoliden", "Hout"],
    tijd: 70_000_000,
    output: [
      { naam: "Avocado", icoon: "icons/Avocado.png", map: "Fruit", 
        quote: `The avocado is a large berry with a single seed and a soft, buttery flesh rich in oil
        <br><br>- Harold McGee`
      },
      { naam: "Tulpenbomen", icoon: "icons/Tulpenbomen.png", map: "Bomen", 
        quote: `The tulip tree rises tall and straight, bearing large, distinctive leaves and tulip-like flowers high in 
        its crown
        <br><br>- Donald Peattie`
      },
      { naam: "Magnolia", icoon: "icons/Magnolia.png", map: "Bomen", 
        quote: `Magnolia flowers are among the most primitive of the angiosperms, with numerous petals arranged in a 
        simple, elegant form
        <br><br>- Armen Takhtajan`
      },
      { naam: "Kaneel", icoon: "icons/Kaneel.png", map: "Smaakmakers", 
        quote: `Cinnamon is obtained from the inner bark of a tropical evergreen tree, which curls into quills as it dries
        <br><br>- Harold McGee`
      }
    ]
  },
  {
    input: ["Oermagnoliden", "Bos"],
    hint: `Sommige magnoliden voelen zich van nature thuis in de bossen.`,
    tijd: 70_000_000,
    output: [
      { naam: "Laurierbomen", icoon: "icons/Laurierbomen.png", map: "Bomen", 
        quote: `The laurel has been associated since antiquity with honor and victory, its leaves woven into crowns
        <br><br>- Plinius de Oudere`
      },
      { naam: "Tulpenbomen", icoon: "icons/Tulpenbomen.png", map: "Bomen", 
        quote: `The tulip tree rises tall and straight, bearing large, distinctive leaves and tulip-like flowers high in 
        its crown
        <br><br>- Donald Peattie`
      },
      { naam: "Nootmuskaat", icoon: "icons/Nootmuskaat.png", map: "Smaakmakers", 
        quote: `Nutmeg is the seed of an evergreen tree, valued for its warm, aromatic spice used in both sweet and 
        savory dishes
        <br><br>- Harold McGee`
      }
    ]
  },
  {
    input: ["Oermonocotylen", "Evolutie"],
    hint: `Monocotylen evolueren sprieten en verspreiden uiteindelijk over de hele wereld.`,
    tijd: 80_000_000,
    output: [
      { naam: "Gras", icoon: "icons/Gras.png", map: "Planten", 
        quote: `Grasses are the most widespread and successful of all plants; they may seem humble, 
        but they rule the plains and feed the world
        <br><br>- Peter Raven`
      }
    ]
  },
  {
    input: [
      ["Oereudicoten", "Water"], ["Oereudicoten", "Woestijn"]
    ],
    hint: `Sommige eudicoten voelen zich van nature thuis in de woestijn.`,
    tijd: 95_000_000,
    output: [
      { naam: "Vetplanten", icoon: "icons/Vetplanten.png", map: "Planten", 
        quote: `The fleshy tissues of succulents are specialized for water storage, giving them their characteristic
        thickened form
        <br><br>- Peter Raven`
      }
    ]
  },
  {
    input: [
      ["Oereudicoten", "Meer"], ["Oereudicoten", "Ven"], ["Oereudicoten", "Moeras"], ["Oereudicoten", "Kevers"]
    ],
    hint: `Sommige eudicoten voelen zich van nature thuis in stilstaand water.`,
    tijd: 100_000_000,
    output: [
      { naam: "Lotussen", icoon: "icons/Lotussen.png", map: "Bloemen", 
        quote: `Just as a lotus flower is born in water, grows in water and rises out of water to stand above it unsoiled
        <br><br>- Gautama Buddha`
      }
    ]
  },
  {
    input: [
      ["Oereudicoten", "Wind"], ["Oereudicoten", "Hout"], ["Oereudicoten", "Rivier"], ["Oereudicoten", "Overstroming"]
    ],
    hint: `Sommige eudicoten van de rivieren bestuiven met de wind.`,
    tijd: 115_000_000,
    output: [
      { naam: "Platanen", icoon: "icons/Platanen.png", map: "Bomen", 
        quote: `The plane tree is notable for its broad leaves and its bark, which flakes away in patches to reveal 
        lighter layers beneath
        <br><br>- John Loudon`
      }
    ]
  },
  {
    input: [
      ["Oereudicoten", "Kalk"], ["Oereudicoten", "Gif"], ["Oereudicoten", "Blad"]
    ],
    hint: `Sommige eudicoten kiezen voor kalk.`,
    tijd: 80_000_000,
    output: [
      { naam: "Buxus", icoon: "icons/Buxus.png", map: "Planten", 
        quote: `Box is an evergreen shrub with small, dense leaves and a compact, slow-growing habit
        <br><br>- W.J. Bean`
      }
    ]
  },
  {
    input: ["Oereudicoten", "Evolutie"],
    hint: `Het succes van de eudicoten is te zien aan de vele vormen van evolutie.`,
    tijd: 95_000_000,
    output: [
      { naam: "Oerfabiden", icoon: "icons/Oerfabiden.png", map: "Planten", 
        quote: `Fabids are distinguished in part by their frequent ability to form nitrogen-fixing symbioses with bacteria
        <br><br>- Peter Raven`
      },
      { naam: "Oermalviden", icoon: "icons/Oermalviden.png", map: "Planten", 
        quote: `A defining feature of many malvids is the presence of specialized chemical defenses within their tissues
        <br><br>- Peter Raven`
      },
      { naam: "Oercaryophyllales", icoon: "icons/Oercaryophyllales.png", map: "Planten", 
        quote: `A defining feature of Caryophyllales is their frequent ability to thrive in stressful habitats such as 
        deserts and salt marshes
        <br><br>- Peter Raven`
      },
      { naam: "Oerasteriden", icoon: "icons/Oerasteriden.png", map: "Planten", 
        quote: `Asterids are characterized by sympetalous flowers, in which the petals are fused into a tube or funnel 
        shape
        <br><br>- Peter Raven`
      }
    ]
  },
  {
    input: [
      ["Oereudicoten", "Glucose"], ["Laurierbomen", "Oereudicoten"], ["Acacia", "Oereudicoten"], ["Wilgen", "Oereudicoten"],
      ["Populieren", "Oereudicoten"], ["Eiken", "Oereudicoten"], ["Essen", "Oereudicoten"], ["Olijven", "Oereudicoten"]
    ],
    hint: `Sommige eudicoten bouwen voort op het vermeerderen van hun glucose.`,
    tijd: 90_000_000,
    output: [
      { naam: "Druiven", icoon: "icons/Druiven.png", map: "Fruit", 
        quote: `The grapevine is a woody climber that produces berries arranged in bunches
        <br><br>- Julia Morton`
      }
    ]
  },
  {
    input: ["Oereudicoten", "Kevers"],
    tijd: 95_000_000,
    output: [
      { naam: "Lotussen", icoon: "icons/Lotussen.png", map: "Bloemen", 
        quote: `Just as a lotus flower is born in water, grows in water and rises out of water to stand above it unsoiled
        <br><br>- Gautama Buddha`
      },
      { naam: "Pioenrozen", icoon: "icons/Pioenrozen.png", map: "Bloemen", 
        quote: `The peony produces large, often fragrant blossoms that may appear briefly but with great abundance
        <br><br>- Michael Dirr`
      }
    ]
  },
  {
    input: ["Oereudicoten", "Vlinders"],
    hint: `Sommige eudicoten kiezen voor de vlinders.`,
    tijd: 95_000_000,
    output: [
      { naam: "Klaprozen", icoon: "icons/Klaprozen.png", map: "Bloemen", 
        quote: `Carrying a poppy he passes through the quarrel
        <br><br>- Kobayashi Issa`
      },
      { naam: "Pioenrozen", icoon: "icons/Pioenrozen.png", map: "Bloemen", 
        quote: `The peony produces large, often fragrant blossoms that may appear briefly but with great abundance
        <br><br>- Michael Dirr`
      }
    ]
  },
  {
    input: ["Oereudicoten", "Bos"],
    hint: `Sommige eudicoten voelen zich thuis in de bossen.`,
    tijd: 80_000_000,
    output: [
      { naam: "Platanen", icoon: "icons/Platanen.png", map: "Bomen", 
        quote: `The plane tree is notable for its broad leaves and its bark, which flakes away in patches to reveal 
        lighter layers beneath
        <br><br>- John Loudon`
      },
      { naam: "Buxus", icoon: "icons/Buxus.png", map: "Planten", 
        quote: `Box is an evergreen shrub with small, dense leaves and a compact, slow-growing habit
        <br><br>- W.J. Bean`
      },
      { naam: "Druiven", icoon: "icons/Druiven.png", map: "Fruit", 
        quote: `The grapevine is a woody climber that produces berries arranged in bunches
        <br><br>- Julia Morton`
      }
    ]
  },
  {
    input: ["Oereudicoten", "Bijen"],
    hint: `Sommige eudicoten komen verder met de bijtjes.`,
    tijd: 95_000_000,
    output: [
      { naam: "Lotussen", icoon: "icons/Lotussen.png", map: "Bloemen", 
        quote: `Just as a lotus flower is born in water, grows in water and rises out of water to stand above it unsoiled
        <br><br>- Gautama Buddha`
      },
      { naam: "Klaprozen", icoon: "icons/Klaprozen.png", map: "Bloemen", 
        quote: `Carrying a poppy he passes through the quarrel
        <br><br>- Kobayashi Issa`
      },
      { naam: "Pioenrozen", icoon: "icons/Pioenrozen.png", map: "Bloemen", 
        quote: `The peony produces large, often fragrant blossoms that may appear briefly but with great abundance
        <br><br>- Michael Dirr`
      }
    ]
  },
  {
    input: [
      ["Magnolia", "Oermagnoliden"], ["Laurierbomen", "Oermagnoliden"], ["Acacia", "Oermagnoliden"], 
      ["Vijgen", "Oermagnoliden"], ["Eiken", "Oermagnoliden"], ["Teak", "Oermagnoliden"]
    ],
    tijd: 70_000_000,
    output: [
      { naam: "Peper", icoon: "icons/Peper.png", map: "Smaakmakers", 
        quote: `Black pepper has been one of the most widely traded spices in history
        <br><br>- Andrew Dalby`
      }
    ]
  },
  {
    input: [
      ["Gras", "Zand"], ["Gras", "Kust"], ["Gras", "Strand"]
    ],
    hint: `Langs de kust vormt gras en zand een muur.`,
    output: [
      { naam: "Duinen", icoon: "icons/Duinen.png", map: "Landschap", 
        quote: `Coastal dunes are living landscapes, where sand and grass work together, shaped by wind and sea into 
        ever-changing forms
        <br><br>- Hans van der Maarel`
      }
    ]
  },
  {
    input: ["Gras", "Woestijn"],
    hint: `Ook aan het eind van de woestijn moet het ooit weer groen kleuren..`,
    output: [
      { naam: "Savanne", icoon: "icons/Savanne.png", map: "Landschap", 
        quote: `Lions rest in the shade of scattered trees while gazelles graze, elephants wander in ponderous silence, 
        and the plain itself pulses with life
        <br><br>- David Attenborough`
      }
    ]
  },
  {
    input: ["Gras", "Gras"],
    hint: `Gras, gras, gras...`,
    output: [
      { naam: "Weide", icoon: "icons/Weide.png", map: "Landschap", 
        quote: `The boy and the girl going hand in hand through a meadow
        <br><br>- Edward Steichen`
      }
    ]
  },
  {
    input: [
      ["Duinen", "Oereudicoten"], ["Weide", "Oereudicoten"], ["Steppe", "Oereudicoten"], ["Prairie", "Oereudicoten"]
    ],
    tijd: 95_000_000,
    output: [
      { naam: "Klaprozen", icoon: "icons/Klaprozen.png", map: "Bloemen", 
        quote: `Carrying a poppy he passes through the quarrel
        <br><br>- Kobayashi Issa`
      }
    ]
  },
  {
    input: ["Weide", "Weide"],
    hint: `Sommige landschappen veranderen door weides zover je kunt kijken..`,
    output: [
      { naam: "Steppe", icoon: "icons/Steppe.png", map: "Landschap", 
        quote: `Vast, open plains stretch to the horizon, dotted with grazing animals, burrowing rodents, 
        and the ever-watchful predators that stalk between them
        <br><br>- George Schaller`
      }
    ]
  },
  {
    input: ["Steppe", "Regen"],
    hint: `De Noord-Amerikaanse graslanden lijken steppes, ware het niet dat het er meer regent..`,
    output: [
      { naam: "Prairie", icoon: "icons/Prairie.png", map: "Landschap", 
        quote: `I was born on the prairies where the wind blew free and there was nothing to break the light of the sun
        <br><br>- Geronimo`
      }
    ]
  },
//------------ THRESHOLD 9: DINOSAURIËRS UITGESTORVEN 66 Ma --------------//
  {
    input: ["Oercynodonten", "Evolutie"],
    hint: `Verschillen tussen de eerste zoogdieren zaten in de cloaca, placenta en buidel.`,
    tijd: 66_000_000,
    output: [
      { naam: "Oerplacentalia", icoon: "icons/Oerplacentalia.png", map: "Zoogdieren", 
        quote: `The placenta enables an intimate physiological connection between mother and embryo, supporting growth, 
        nourishment, and protection
        <br><br>- Knox Hays`
      },
      { naam: "Oerbuideldieren", icoon: "icons/Oerbuideldieren.png", map: "Zoogdieren", 
        quote: `The pouch of marsupials provides a protected environment in which the young attach to a teat and continue 
        their growth
        <br><br>- Jill Pemberton`
      },
      { naam: "Vogelbekdieren", icoon: "icons/Vogelbekdieren.png", map: "Zoogdieren", 
        quote: `I feel akin to the platypus. An orphan in a family. A swimmer, a recluse. Part bird, part fish, part lizard
        <br><br>- Trevor Dunn`
      }
    ],
    uitleg: {
      threshold: {
        titel: "Dinosauriërs uitgestorven", 
        tekst: "Je moet eerst nog wat meer halen...",
      },
      normal: {
        achtergrond: "afb/paleogeen.jpg",
        titel: "DINOSAURIËRS UITGESTORVEN 66 MA",
        tekst: `
        <span></span>`,
      }
    }
  },
  {
    input: [
      ["Agnathen", "Lucht"], ["Agnathen", "Oceaan"], ["Vleugels", "Agnathen"]
    ],
    hint: `Geef botloze agnathen vleugels en majestueuze vissen zullen zweven in en boven de oceaan.`,
    output: [
      { naam: "Manta", icoon: "icons/Manta.png", map: "Vissen", 
        quote: `Watching a manta ray glide past is like witnessing a bird in flight beneath the sea
        <br><br>- Andrea Marshall`
      }
    ]
  },
  {
    input: ["Oerstraalvinnigen", "Kou"],
    tijd: 10_000_000,
    output: [
      { naam: "Zalm", icoon: "icons/Zalm.png", map: "Vissen", 
        quote: `Salmon live in two worlds, born in freshwater, maturing in the ocean, and returning with unerring instinct to the 
        rivers of their birth
        <br><br>- Colin Braithwaite`
      },
      { naam: "Haring", icoon: "icons/Haring.png", map: "Vissen", 
        quote: `In their millions, herring transform the sea into a living, shifting mirror of light and motion
        <br><br>- Rachel Carson`
      },
      { naam: "Snoeken", icoon: "icons/Snoeken.png", map: "Vissen", 
        quote: `The pike waits in stillness, a master of ambush, its presence almost invisible until the moment of attack
        <br><br>- Hugh Falkus`
      }
    ]
  },
  {
    input: [
      ["Oerstraalvinnigen", "IJs"], ["Oerstraalvinnigen", "Poolgebied"]
    ],
    hint: `Sommige straalvinnigen voelen zich thuis in de arctische wateren.`,
    tijd: 40_000_000,
    output: [
      { naam: "Kabeljauwen", icoon: "icons/Kabeljauwen.png", map: "Vissen", 
        quote: `The cod is a creature of the cold northern seas, moving in great numbers through deep waters, 
        a cornerstone of marine ecosystems
        <br><br>- Daniel Pauly`
      }
    ]
  },
  {
    input: [
      ["Oerstraalvinnigen", "Ster"], ["Oerstraalvinnigen", "Licht"], ["Oerstraalvinnigen", "De Maan"]
    ],
    hint: `Sommige straalvinnigen houden van zonnebaden aan het wateroppervlak.`,
    tijd: 40_000_000,
    output: [
      { naam: "Maanvissen", icoon: "icons/Maanvissen.png", map: "Vissen", 
        quote: `Mola mola appears almost otherworldly, a giant, flattened fish that seems more like a drifting fragment of the sea 
        itself than a conventional animal
        <br><br>- Bruce Collette`
      }
    ]
  },
  {
    input: ["Oerstraalvinnigen", "Berg"],
    hint: `Sommige straalvinnigen voelen zich thuis in bergstromen en beekjes.`,
    tijd: 40_000_000,
    output: [
      { naam: "Forel", icoon: "icons/Forel.png", map: "Vissen", 
        quote: `The trout is a fish of clear, cold waters, whose presence is often revealed only by a sudden rise or flash 
        beneath the surface
        <br><br>- Hugh Falkus`
      }
    ]
  },
  {
    input: ["Oerstraalvinnigen", "Zand"],
    hint: `Sommige straalvinnigen produceren zand door koraal te vermalen en anderen verdwijnen erin.`,
    tijd: 30_000_000,
    output: [
      { naam: "Papegaaivissen", icoon: "icons/Papegaaivissen.png", map: "Vissen", 
        quote: `The parrotfish, with its beak-like teeth and brilliant colors, transforms coral into sand, playing a vital role 
        in the creation of tropical beaches
        <br><br>- Peter Sale`
      },
      { naam: "Platvissen", icoon: "icons/Platvissen.png", map: "Vissen", 
        quote: `The flatfish is a master of camouflage, lying flush against the seabed and blending seamlessly with sand and sediment
        <br><br>- David Attenborough`
      }
    ]
  },
  {
    input: [
      /* --- WATERDIEREN --- */
      ["Platvissen", "Wormen"], ["Platvissen", "Oertrochozoa"], 
      /* --- VISSEN --- */
      ["Platvissen", "Lancetvisjes"],
      /* --- GELEEDPOTIGEN ---*/
      ["Platvissen", "Oergeleedpotigen"], ["Platvissen", "Oercheliceraten"], ["Platvissen", "Oerkreefjtes"],
      ["Platvissen", "Oerinsecten"], ["Platvissen", "Oerspinnen"], ["Platvissen", "Krill"],
      ["Platvissen", "Aasgarnalen"], ["Platvissen", "Zeepissebedden"], ["Platvissen", "Vlokreeftjes"],
      ["Platvissen", "Oertienpotigen"], ["Platvissen", "Garnalen"], ["Platvissen", "Waterspinnen"]
    ],
    output: [
      { naam: "Platvissen", icoon: "icons/Platvissen.png", map: "Vissen", 
        quote: `The flatfish is a master of camouflage, lying flush against the seabed and blending seamlessly with sand and sediment
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
    input: ["Oerstraalvinnigen", "Meer"],
    hint: `Sommige straalvinnigen voelen zich thuis in de zoete meren.`,
    tijd: 10_000_000,
    output: [
      { naam: "Karpers", icoon: "icons/Karpers.png", map: "Vissen", 
        quote: `The carp moves slowly through still waters, a patient survivor in environments where few other fish persist
        <br><br>- David Attenborough`
      },
      { naam: "Snoeken", icoon: "icons/Snoeken.png", map: "Vissen", 
        quote: `The pike waits in stillness, a master of ambush, its presence almost invisible until the moment of attack
        <br><br>- Hugh Falkus`
      },
      { naam: "Forel", icoon: "icons/Forel.png", map: "Vissen", 
        quote: `The trout is a fish of clear, cold waters, whose presence is often revealed only by a sudden rise or flash 
        beneath the surface
        <br><br>- Hugh Falkus`
      }
    ]
  },
  {
    input: [
      ["Oerstraalvinnigen", "Lucht"], ["Oerstraalvinnigen", "Wind"]
    ],
    hint: `Sommige straalvinnigen willen niks liever dan de lucht in.`,
    tijd: 30_000_000,
    output: [
      { naam: "Vliegvissen", icoon: "icons/Vliegvissen.png", map: "Vissen", 
        quote: `Fly fishing is as much about the rhythm of water and air as it is about catching fish; it is a form of quiet
        observation of nature
        <br><br>- John Gierach`
      }
    ]
  },
  {
    input: [
      ["Oerstraalvinnigen", "Ven"], ["Oerstraalvinnigen", "Kroos"], ["Oerstraalvinnigen", "Waterriet"]
    ],
    hint: `Sommige straalvinnigen voelen zich thuis in de troebele vennetjes.`,
    tijd: 10_000_000,
    output: [
      { naam: "Karpers", icoon: "icons/Karpers.png", map: "Vissen", 
        quote: `The carp moves slowly through still waters, a patient survivor in environments where few other fish persist
        <br><br>- David Attenborough`
      },
      { naam: "Snoeken", icoon: "icons/Snoeken.png", map: "Vissen", 
        quote: `The pike waits in stillness, a master of ambush, its presence almost invisible until the moment of attack
        <br><br>- Hugh Falkus`
      },
      { naam: "Meervallen", icoon: "icons/Meervallen.png", map: "Vissen", 
        quote: `The catfish is an ancient and highly adapted fish, perfectly suited to life in dark, slow-moving waters 
        where sight is of little use
        <br><br>- Herbert Boschung`
      }
    ]
  },
  {
    input: ["Oerstraalvinnigen", "Zee"],
    hint: `Sommige straalvinnigen zwemmen het liefst alle wereldzeeën over.`,
    tijd: 10_000_000,
    output: [
      { naam: "Tonijn", icoon: "icons/Tonijn.png", map: "Vissen", 
        quote: `Few fish embody the scale and energy of the open ocean as completely as the tuna, a creature built for speed and endurance
        <br><br>- Callum Roberts`
      },
      { naam: "Zalm", icoon: "icons/Zalm.png", map: "Vissen", 
        quote: `Salmon live in two worlds, born in freshwater, maturing in the ocean, and returning with unerring instinct to the 
        rivers of their birth
        <br><br>- Colin Braithwaite`
      },
      { naam: "Makreel ", icoon: "icons/Makreel.png", map: "Vissen", 
        quote: `In great shoals, mackerel move like a single living wave, shifting and turning in perfect unison
        <br><br>- Alister Hardy`
      },
      { naam: "Paling ", icoon: "icons/Paling.png", map: "Vissen", 
        quote: `The eel’s life cycle remains one of the great mysteries of zoology, involving transformations and migrations that span 
        thousands of kilometres
        <br><br>- Frederik Kendall`
      }
    ]
  },
  {
    input: ["Oerstraalvinnigen", "Kust"],
    hint: `Sommige straalvinnigen voelen zich het meest thuis in ondiepe kustwateren.`,
    tijd: 20_000_000,
    output: [
      { naam: "Kabeljauwen", icoon: "icons/Kabeljauwen.png", map: "Vissen", 
        quote: `The cod is a creature of the cold northern seas, moving in great numbers through deep waters, 
        a cornerstone of marine ecosystems
        <br><br>- Daniel Pauly`
      },
      { naam: "Makreel ", icoon: "icons/Makreel.png", map: "Vissen", 
        quote: `In great shoals, mackerel move like a single living wave, shifting and turning in perfect unison
        <br><br>- Alister Hardy`
      },
      { naam: "Paling ", icoon: "icons/Paling.png", map: "Vissen", 
        quote: `The eel’s life cycle remains one of the great mysteries of zoology, involving transformations and migrations that span 
        thousands of kilometres
        <br><br>- Frederik Kendall`
      },
      { naam: "Zeepaardjes ", icoon: "icons/Zeepaardjes.png", map: "Vissen", 
        quote: `Male seahorses receive eggs from the female and incubate them in a ventral brood pouch, where the embryos develop 
        until birth
        <br><br>- Sara Lourie`
      }
    ]
  },
  {
    input: ["Oerstraalvinnigen", "Oceaan"],
    hint: `Sommige straalvinnigen voelen zich thuis diep in de immense oceanen.`,
    tijd: 40_000_000,
    output: [
      { naam: "Zeeduivels", icoon: "icons/Zeeduivels.png", map: "Vissen", 
        quote: `Few creatures of the sea appear as grotesque and yet as perfectly adapted as the anglerfish, 
        a silent hunter of the ocean floor
        <br><br>- David Attenborough`
      },
      { naam: "Platvissen", icoon: "icons/Platvissen.png", map: "Vissen", 
        quote: `The flatfish is a master of camouflage, lying flush against the seabed and blending seamlessly with sand and sediment
        <br><br>- David Attenborough`
      },
      { naam: "Maanvissen", icoon: "icons/Maanvissen.png", map: "Vissen", 
        quote: `Mola mola appears almost otherworldly, a giant, flattened fish that seems more like a drifting fragment of the sea 
        itself than a conventional animal
        <br><br>- Bruce Collette`
      },
      { naam: "Tonijn", icoon: "icons/Tonijn.png", map: "Vissen", 
        quote: `Few fish embody the scale and energy of the open ocean as completely as the tuna, a creature built for speed and endurance
        <br><br>- Callum Roberts`
      }
    ]
  },
  {
    input: ["Oerstraalvinnigen", "Sneeuw"],
    hint: `Sommige straalvinnigen voelen zich thuis in het koude smeltwater van sneeuw.`,
    tijd: 10_000_000,
    output: [
      { naam: "Kabeljauwen", icoon: "icons/Kabeljauwen.png", map: "Vissen", 
        quote: `The cod is a creature of the cold northern seas, moving in great numbers through deep waters, 
        a cornerstone of marine ecosystems
        <br><br>- Daniel Pauly`
      },
      { naam: "Forel", icoon: "icons/Forel.png", map: "Vissen", 
        quote: `The trout is a fish of clear, cold waters, whose presence is often revealed only by a sudden rise or flash 
        beneath the surface
        <br><br>- Hugh Falkus`
      }
    ]
  },
  {
    input: ["Oerstraalvinnigen", "Rivier"],
    hint: `Sommige straalvinnigen voelen zich thuis in de rivieren.`,
    tijd: 10_000_000,
    output: [
      { naam: "Karpers", icoon: "icons/Karpers.png", map: "Vissen", 
        quote: `The carp moves slowly through still waters, a patient survivor in environments where few other fish persist
        <br><br>- David Attenborough`
      },
      { naam: "Forel", icoon: "icons/Forel.png", map: "Vissen", 
        quote: `The trout is a fish of clear, cold waters, whose presence is often revealed only by a sudden rise or flash 
        beneath the surface
        <br><br>- Hugh Falkus`
      },
      { naam: "Zalm", icoon: "icons/Zalm.png", map: "Vissen", 
        quote: `Salmon live in two worlds, born in freshwater, maturing in the ocean, and returning with unerring instinct to the 
        rivers of their birth
        <br><br>- Colin Braithwaite`
      }
    ]
  },
  {
    input: ["Oerstraalvinnigen", "Zuurstof"],
    hint: `Sommige straalvinnigen excelleren in de meest zuurstofrijke wateren.`,
    tijd: 10_000_000,
    output: [
      { naam: "Tonijn", icoon: "icons/Tonijn.png", map: "Vissen", 
        quote: `Few fish embody the scale and energy of the open ocean as completely as the tuna, a creature built for speed and endurance
        <br><br>- Callum Roberts`
      },
      { naam: "Haring", icoon: "icons/Haring.png", map: "Vissen", 
        quote: `In their millions, herring transform the sea into a living, shifting mirror of light and motion
        <br><br>- Rachel Carson`
      },
      { naam: "Makreel ", icoon: "icons/Makreel.png", map: "Vissen", 
        quote: `In great shoals, mackerel move like a single living wave, shifting and turning in perfect unison
        <br><br>- Alister Hardy`
      }
    ]
  },
  {
    input: [
      ["Oerstraalvinnigen", "Schelp"], ["Oerstraalvinnigen", "Zeeslakken"], ["Oerstraalvinnigen", "Tweekleppigen"]
    ],
    hint: `De angst van de schelpdieren zijn straalvinnigen die ze kunnen doorboren.`,
    tijd: 40_000_000,
    output: [
      { naam: "Kogelvissen", icoon: "icons/Kogelvissen.png", map: "Vissen", 
        quote: `Few fish combine such vulnerability in appearance with such extreme defensive capability as the pufferfish
        <br><br>- David Attenborough`
      }
    ]
  },
  {
    input: [
      ["Oerstraalvinnigen", "Koraal"], ["Oerstraalvinnigen", "Rif"], ["Oerstraalvinnigen", "Zeeanemeonen"]
    ],
    hint: `Sommige straalvinnigen voelen zich thuis in de wereld van de koraalriffen.`,
    tijd: 20_000_000,
    output: [
      { naam: "Papegaaivissen", icoon: "icons/Papegaaivissen.png", map: "Vissen", 
        quote: `The parrotfish, with its beak-like teeth and brilliant colors, transforms coral into sand, playing a vital role 
        in the creation of tropical beaches
        <br><br>- Peter Sale`
      },
      { naam: "Clownvissen", icoon: "icons/Clownvissen.png", map: "Vissen", 
        quote: `Few marine relationships are as iconic as that between clownfish and sea anemones
        <br><br>- Nancy Knowlton`
      },
      { naam: "Doktersvissen", icoon: "icons/Doktersvissen.png", map: "Vissen", 
        quote: `Surgeonfish are named for the sharp, scalpel-like spines located near the base of their tails
        <br><br>- David Bellwood`
      },
      { naam: "Koraalduivels", icoon: "icons/Koraalduivels.png", map: "Vissen", 
        quote: `The lionfish is a striking predator, equipped with venomous spines and elaborate fins that make it both beautiful and 
        dangerous
        <br><br>- James Morris`
      }
    ]
  },
  {
    input: [
      /* --- GELEEDPOTIGEN --- */
      ["Koraalduivels", "Oergeleedpotigen"], ["Koraalduivels", "Oerkreeftjes"], ["Koraalduivels", "Oerinsecten"],
      ["Koraalduivels", "Krill"], ["Koraalduivels", "Aasgarnalen"], ["Koraalduivels", "Vlokreeftjes"],
      ["Koraalduivels", "Garnalen"],
    ],
    output: [
      { naam: "Koraalduivels", icoon: "icons/Koraalduivels.png", map: "Vissen", 
        quote: `The lionfish is a striking predator, equipped with venomous spines and elaborate fins that make it both beautiful and 
        dangerous
        <br><br>- James Morris`
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
      /* --- VISSEN --- */
      ["Koraalduivels", "Agnathen"], ["Koraalduivels", "Oerstraalvinnigen"], ["Koraalduivels", "Clownvissen"], 
      ["Koraalduivels", "Doktersvissen"], ["Koraalduivels", "Papegaaivissen"], ["Koraalduivels", "Zeepaardjes"],
      ["Koraalduivels", "Goudvissen"]
    ],
    vers: `Lees in naam van jouw Zorgdrager Die creëerde; <br>Die creëerde de mens uit een bloedklodder
    <br><br>De Bloedklodder (96:1-2)`,
    output: [
      { naam: "Koraalduivels", icoon: "icons/Koraalduivels.png", map: "Vissen", 
        quote: `The lionfish is a striking predator, equipped with venomous spines and elaborate fins that make it both beautiful and 
        dangerous
        <br><br>- James Morris`
      },
      { naam: "Gif", icoon: "icons/Gif.png", map: "Biologie",
       quote: `All things are poisons, for there is nothing without poisonous qualities. It is only the dose which 
       makes a thing poison
       <br><br>- Paracelsus`
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
    input: ["Moeras", "Oerstraalvinnigen"],
    hint: `Sommige straalvinnigen voelen zich thuis in de moerassen.`,
    tijd: 10_000_000,
    output: [
      { naam: "Karpers", icoon: "icons/Karpers.png", map: "Vissen", 
        quote: `The carp moves slowly through still waters, a patient survivor in environments where few other fish persist
        <br><br>- David Attenborough`
      },
      { naam: "Snoeken", icoon: "icons/Snoeken.png", map: "Vissen", 
        quote: `The pike waits in stillness, a master of ambush, its presence almost invisible until the moment of attack
        <br><br>- Hugh Falkus`
      },
      { naam: "Meervallen", icoon: "icons/Meervallen.png", map: "Vissen", 
        quote: `The catfish is an ancient and highly adapted fish, perfectly suited to life in dark, slow-moving waters 
        where sight is of little use
        <br><br>- Herbert Boschung`
      },
      { naam: "Paling ", icoon: "icons/Paling.png", map: "Vissen", 
        quote: `The eel’s life cycle remains one of the great mysteries of zoology, involving transformations and migrations that span 
        thousands of kilometres
        <br><br>- Frederik Kendall`
      }
    ]
  },
  {
    input: ["Tropisch regenwoud", "Oerstraalvinnigen"],
    hint: `Sommige straalvinnigen voelen zich thuis in het tropisch regenwoud.`,
    tijd: 20_000_000,
    output: [
      { naam: "Piranha", icoon: "icons/Piranha.png", map: "Vissen", 
        quote: `In the Amazon River system, piranhas are far more often scavengers and opportunists than the fearsome predators of
        popular imagination
        <br><br>- Herbert Axelrod`
      }
    ]
  },
  {
    input: [
      /* --- VISSEN --- */
      ["Piranha", "Agnathen"], ["Piranha", "Oerstraalvinnigen"], ["Piranha", "Clownvissen"], 
      ["Piranha", "Doktersvissen"], ["Piranha", "Zalm"], ["Piranha", "Haring"], ["Piranha", "Makreel"], 
      ["Piranha", "Karpers"], ["Piranha", "Snoeken"], ["Piranha", "Forel"], ["Piranha", "Meervallen"], 
      ["Piranha", "Paling"], ["Piranha", "Goudvissen"]
    ],
    vers: `Lees in naam van jouw Zorgdrager Die creëerde; <br>Die creëerde de mens uit een bloedklodder
    <br><br>De Bloedklodder (96:1-2)`,
    output: [
      { naam: "Piranha", icoon: "icons/Piranha.png", map: "Vissen", 
        quote: `In the Amazon River system, piranhas are far more often scavengers and opportunists than the fearsome 
        predators of popular imagination
        <br><br>- Herbert Axelrod`
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
      ["Archaeopteryx", "IJs"], ["Archaeopteryx", "Poolgebied"], ["Archaeopteryx", "Sneeuw"],
    ],
    hint: `Sommige archaeopteryx voelen zich thuis in ijs en sneeuw.`,
    tijd: 60_000_000,
    output: [
      { naam: "Pinguïns", icoon: "icons/Pinguïns.png", map: "Vogels", 
        quote: `Our wings serve as flippers that carry us across the ocean; not in the sky! Why, us penguins have so 
        much fun time in the water, we don't even want to fly!
        <br><br>- Jasmin Martin`
      }
    ]
  },
  {
    input: ["Archaeopteryx", "De Maan"],
    hint: `Sommige archaeopteryx voelen zich thuis in de nacht.`,
    tijd: 45_000_000,
    output: [
      { naam: "Uilen", icoon: "icons/Uilen.png", map: "Vogels", 
        quote: `When the owl sings, the night is silent
        <br><br>- Charles de Leusse`
      }
    ]
  },
  {
    input: ["Archaeopteryx", "Berg"],
    hint: `Sommige archaeopteryx voelen zich thuis in de bergen.`,
    tijd: 20_000_000,
    output: [
      { naam: "Duiven", icoon: "icons/Duiven.png", map: "Vogels", 
        quote: `Few birds are as closely associated with human history as the pigeon, a species that has served as 
        messenger, companion, and symbol across cultures
        <br><br>- Colin Tudge`
      },
      { naam: "Arenden", icoon: "icons/Arenden.png", map: "Vogels", 
        quote: `The eagle does not chase the world; it watches it shrink beneath its wings.
        <br><br>- Mary Oliver`
      }
    ]
  },
  {
    input: [
      ["Archaeopteryx", "Meer"], ["Archaeopteryx", "Rivier"],
    ],
    hint: `Sommige archaeopteryx voelen zich thuis in rustig vaarwater.`,
    tijd: 15_000_000,
    output: [
      { naam: "Eenden", icoon: "icons/Eenden.png", map: "Vogels", 
        quote: `Waterfowl move as part of the landscape itself, never separate from the rivers that carry them
        <br><br>- Wangari Maathai`
      },
      { naam: "Ganzen", icoon: "icons/Ganzen.png", map: "Vogels", 
        quote: `Wild geese fly south; their cries drift away across the empty autumn sky
        <br><br>- Li Bai`
      },
      { naam: "Zwanen", icoon: "icons/Zwanen.png", map: "Vogels", 
        quote: `Wild geese and swans cross the cold river, their shadows vanishing into the pale sky above the water
        <br><br>- Du Fu`
      }
    ]
  },
  {
    input: ["Archaeopteryx", "Lucht"],
    hint: `Sommige archaeopteryx voelen zich het meest thuis hoog in de lucht.`,
    tijd: 20_000_000,
    output: [
      { naam: "Zwaluwen", icoon: "icons/Zwaluwen.png", map: "Vogels", 
        quote: `The swallow carries the scent of distant gardens across skies that never remain the same
        <br><br>- Rumi`
      },
      { naam: "Arenden", icoon: "icons/Arenden.png", map: "Vogels", 
        quote: `The eagle does not chase the world; it watches it shrink beneath its wings.
        <br><br>- Mary Oliver`
      },
      { naam: "Spreeuwen", icoon: "icons/Spreeuwen.png", map: "Vogels", 
        quote: `A flock of starlings behaves like a fluid in motion, continuously reshaping itself without losing cohesion
        <br><br>- Giorgio Parisi`
      }
    ]
  },
  {
    input: ["Archaeopteryx", "Ven"],
    hint: `Sommige archaeopteryx voelen zich thuis in de begroeide vennetjes.`,
    tijd: 20_000_000,
    output: [
      { naam: "Ooievaars", icoon: "icons/Ooievaars.png", map: "Vogels", 
        quote: `The arrival of the stork has long been associated with renewal and the return of life to the landscape 
        in spring
        <br><br>- Peter Scott`
      },
      { naam: "Eenden", icoon: "icons/Eenden.png", map: "Vogels", 
        quote: `Waterfowl move as part of the landscape itself, never separate from the rivers that carry them
        <br><br>- Wangari Maathai`
      }
    ]
  },
  {
    input: ["Archaeopteryx", "Zee"],
    hint: `Sommige archaeopteryx voelen zich thuis bij de zee.`,
    tijd: 15_000_000,
    output: [
      { naam: "Meeuwen", icoon: "icons/Meeuwen.png", map: "Vogels", 
        quote: `The gull follows the tide and the ships, never belonging to land or sea, but to the space between them
        <br><br>- Virginia Woolf`
      },
      { naam: "Aalscholvers", icoon: "icons/Aalscholvers.png", map: "Vogels", 
        quote: `Cormorants dive into the river, vanishing beneath the surface and returning like shadows of the water 
        itself
        <br><br>- Matsuo Basho`
      },
      { naam: "Pinguïns", icoon: "icons/Pinguïns.png", map: "Vogels", 
        quote: `Our wings serve as flippers that carry us across the ocean; not in the sky! Why, us penguins have so 
        much fun time in the water, we don't even want to fly!
        <br><br>- Jasmin Martin`
      }
    ]
  },
  {
    input: [
      ["Archaeopteryx", "Regen"], ["Archaeopteryx", "Storm"], ["Archaeopteryx", "Wind"], ["Archaeopteryx", "Strand"],
      ["Archaeopteryx", "Duinen"],
    ],
    hint: `Sommige archaeopteryx voelen zich thuis bij het strand.`,
    tijd: 15_000_000,
    output: [
      { naam: "Meeuwen", icoon: "icons/Meeuwen.png", map: "Vogels", 
        quote: `The gull follows the tide and the ships, never belonging to land or sea, but to the space between them
        <br><br>- Virginia Woolf`
      }
    ]
  },
  {
    input: ["Archaeopteryx", "Kust"],
    hint: `Sommige archaeopteryx voelen zich thuis aan de kust.`,
    tijd: 15_000_000,
    output: [
      { naam: "Meeuwen", icoon: "icons/Meeuwen.png", map: "Vogels", 
        quote: `The gull follows the tide and the ships, never belonging to land or sea, but to the space between them
        <br><br>- Virginia Woolf`
      },
      { naam: "Aalscholvers", icoon: "icons/Aalscholvers.png", map: "Vogels", 
        quote: `Cormorants dive into the river, vanishing beneath the surface and returning like shadows of the water 
        itself
        <br><br>- Matsuo Basho`
      }
    ]
  },
  {
    input: ["Archaeopteryx", "Oceaan"],
    hint: `Sommige archaeopteryx voelen zich thuis bij de oceaan.`,
    tijd: 15_000_000,
    output: [
      { naam: "Papegaaiduikers", icoon: "icons/Papegaaiduikers.png", map: "Vogels", 
        quote: `The cliffs were alive with puffins, each one a small spark of colour against stone and wind
        <br><br>- Robert Macfarlane`
      }
    ]
  },
  {
    input: ["Archaeopteryx", "Lagune"],
    hint: `Sommige archaeopteryx voelen zich thuis in de lagune.`,
    tijd: 45_000_000,
    output: [
      { naam: "Flamingo", icoon: "icons/Flamingo.png", map: "Vogels", 
        quote: `Flamingos gather in shallow lakes where the water becomes a mirror for their colour, 
        turning the landscape itself into something unreal
        <br><br>- Alexander von Humboldt`
      }
    ]
  },
  {
    input: ["Archaeopteryx", "Klif"],
    hint: `Sommige archaeopteryx voelen zich thuis bij de kliffen.`,
    tijd: 15_000_000,
    output: [
      { naam: "Papegaaiduikers", icoon: "icons/Papegaaiduikers.png", map: "Vogels", 
        quote: `The cliffs were alive with puffins, each one a small spark of colour against stone and wind
        <br><br>- Robert Macfarlane`
      },
      { naam: "Arenden", icoon: "icons/Arenden.png", map: "Vogels", 
        quote: `The eagle does not chase the world; it watches it shrink beneath its wings.
        <br><br>- Mary Oliver`
      },
      { naam: "Duiven", icoon: "icons/Duiven.png", map: "Vogels", 
        quote: `Few birds are as closely associated with human history as the pigeon, a species that has served as 
        messenger, companion, and symbol across cultures
        <br><br>- Colin Tudge`
      }
    ]
  },
  {
    input: ["Archaeopteryx", "Bot"],
    hint: `Sommige archaeopteryx feesten bij de kadavers.`,
    tijd: 30_000_000,
    output: [
      { naam: "Gieren", icoon: "icons/Gieren.png", map: "Vogels", 
        quote: `The vultures describe wide circles in the sky, watching the earth below with an unblinking vigilance
        <br><br>- Alexander von Humboldt`
      }
    ]
  },
  {
    input: [
      ["Archaeopteryx", "Moeras"], ["Waterriet", "Archaeopteryx"]
    ],
    hint: `Sommige archaeopteryx voelen zich thuis bij het moerasriet.`,
    tijd: 50_000_000,
    output: [
      { naam: "Reigers", icoon: "icons/Reigers.png", map: "Vogels", 
        quote: `A heron stands motionless at the water’s edge, then strikes with a suddenness that breaks the 
        illusion of stillnes
        <br><br>- J.A. Baker`
      }
    ]
  },
  {
    input: ["Archaeopteryx", "Zaadjes"],
    tijd: 10_000_000,
    output: [
      { naam: "Mussen", icoon: "icons/Mussen.png", map: "Vogels", 
        quote: `A sparrow hops - and the quiet of the garden is suddenly complete
        <br><br>- Kobayashi Issa`
      },
      { naam: "Kippen", icoon: "icons/Kippen.png", map: "Vogels", 
        quote: `The capercaillie belongs to the deep forest, where its presence is known more by sound than by sight
        <br><br>- Fridtjof Nansen`
      },
      { naam: "Duiven", icoon: "icons/Duiven.png", map: "Vogels", 
        quote: `Few birds are as closely associated with human history as the pigeon, a species that has served as 
        messenger, companion, and symbol across cultures
        <br><br>- Colin Tudge`
      }
    ]
  },
  {
    input: ["Archaeopteryx", "Hout"],
    hint: `Sommige archaeopteryx voelen zich thuis in de bomen.`,
    tijd: 45_000_000,
    output: [
      { naam: "Spechten", icoon: "icons/Spechten.png", map: "Vogels", 
        quote: `The tapping of a woodpecker is the forest counting time in small, exact beats
        <br><br>- Annie Dillard`
      }
    ]
  },
  {
    input: ["Archaeopteryx", "map:Bomen"],
    tijd: 20_000_000,
    output: [
      { naam: "Spechten", icoon: "icons/Spechten.png", map: "Vogels", 
        quote: `The tapping of a woodpecker is the forest counting time in small, exact beats
        <br><br>- Annie Dillard`
      },
      { naam: "Spreeuwen", icoon: "icons/Spreeuwen.png", map: "Vogels", 
        quote: `A flock of starlings behaves like a fluid in motion, continuously reshaping itself without losing cohesion
        <br><br>- Giorgio Parisi`
      }
    ]
  },
  {
    input: ["Archaeopteryx", "Bos"],
    hint: `Sommige archaeopteryx voelen zich thuis in het bos.`,
    tijd: 20_000_000,
    output: [
      { naam: "Uilen", icoon: "icons/Uilen.png", map: "Vogels", 
        quote: `When the owl sings, the night is silent
        <br><br>- Charles de Leusse`
      },
      { naam: "Vinken", icoon: "icons/Vinken.png", map: "Vogels", 
        quote: `The small bird sings not to be heard, but because the world asks for sound
        <br><br>- Mary Oliver`
      },
      { naam: "Fazanten", icoon: "icons/Fazanten.png", map: "Vogels", 
        quote: `A pheasant bursts from the grass, scattering silence into wings and colour
        <br><br>- Wang Wei`
      },
      { naam: "Kraaien", icoon: "icons/Kraaien.png", map: "Vogels", 
        quote: `Crows return to their nests as the sun sets beyond the river, their dark shapes crossing the fading light
        <br><br>- Ma Zhiyuan`
      }
    ]
  },
  {
    input: ["Archaeopteryx", "Tropisch regenwoud"],
    hint: `Sommige archaeopteryx voelen zich thuis in het tropisch regenwoud.`,
    tijd: 10_000_000,
    output: [
      { naam: "Kolibries", icoon: "icons/Kolibries.png", map: "Vogels", 
        quote: `The hummingbird is a fragment of the rainbow, suspended in air
        <br><br>- Pablo Neruda`
      },
      { naam: "Pauwen", icoon: "icons/Pauwen.png", map: "Vogels", 
        quote: `In the garden, the peacock walks as if it remembers a lost paradise
        <br><br>- Rumi`
      },
      { naam: "Papegaaien", icoon: "icons/Papegaaien.png", map: "Vogels", 
        quote: `Parrots flash through the forest like fragments of fire moving between trees
        <br><br>- Alexander von Humboldt`
      },
      { naam: "Kippen", icoon: "icons/Kippen.png", map: "Vogels", 
        quote: `The capercaillie belongs to the deep forest, where its presence is known more by sound than by sight
        <br><br>- Fridtjof Nansen`
      }
    ]
  },
  {
    input: ["Bloem", "Archaeopteryx"],
    tijd: 25_000_000,
    output: [
      { naam: "Kolibries", icoon: "icons/Kolibries.png", map: "Vogels", 
        quote: `The hummingbird is a fragment of the rainbow, suspended in air
        <br><br>- Pablo Neruda`
      }
    ]
  },
  {
    input: [
      ["Oermagnoliden", "Water"], ["Oermagnoliden", "Vliegen"]
    ],
    hint: `Sommige magnoliden bouwen voort op hun wateropslag.`,
    tijd: 30_000_000,
    output: [
      { naam: "Zuurzakken", icoon: "icons/Zuurzakken.png", map: "Fruit", 
        quote: `The flesh of the soursop is creamy and fragrant, combining sweetness with a sharp, refreshing acidity
        <br><br>- Elhadi M. Yahia`
      }
    ]
  },
  {
    input: ["Oermagnoliden", "Tropisch regenwoud"],
    hint: `Sommige magnoliden voelen zich van nature thuis in het tropisch regenwoud.`,
    tijd: 10_000_000,
    output: [
      { naam: "Nootmuskaat", icoon: "icons/Nootmuskaat.png", map: "Smaakmakers", 
        quote: `Nutmeg is the seed of an evergreen tree, valued for its warm, aromatic spice used in both sweet and 
        savory dishes
        <br><br>- Harold McGee`
      },
      { naam: "Kaneel", icoon: "icons/Kaneel.png", map: "Smaakmakers", 
        quote: `Cinnamon is obtained from the inner bark of a tropical evergreen tree, which curls into quills as it dries
        <br><br>- Harold McGee`
      },
      { naam: "Zuurzakken", icoon: "icons/Zuurzakken.png", map: "Fruit", 
        quote: `The flesh of the soursop is creamy and fragrant, combining sweetness with a sharp, refreshing acidity
        <br><br>- Elhadi M. Yahia`
      },
      { naam: "Avocado", icoon: "icons/Avocado.png", map: "Fruit", 
        quote: `The avocado is a large berry with a single seed and a soft, buttery flesh rich in oil
        <br><br>- Harold McGee`
      },
      { naam: "Peper", icoon: "icons/Peper.png", map: "Smaakmakers", 
        quote: `Black pepper has been one of the most widely traded spices in history
        <br><br>- Andrew Dalby`
      }
    ]
  },
  {
    input: ["Oermagnoliden", "Bijen"],
    hint: `Sommige magnoliden komen verder met de bijtjes.`,
    tijd: 10_000_000,
    output: [
      { naam: "Tulpenbomen", icoon: "icons/Tulpenbomen.png", map: "Bomen", 
        quote: `The tulip tree rises tall and straight, bearing large, distinctive leaves and tulip-like flowers high in 
        its crown
        <br><br>- Donald Peattie`
      },
      { naam: "Peper", icoon: "icons/Peper.png", map: "Smaakmakers", 
        quote: `Black pepper has been one of the most widely traded spices in history
        <br><br>- Andrew Dalby`
      },
      { naam: "Zuurzakken", icoon: "icons/Zuurzakken.png", map: "Fruit", 
        quote: `The flesh of the soursop is creamy and fragrant, combining sweetness with a sharp, refreshing acidity
        <br><br>- Elhadi M. Yahia`
      }
    ]
  },
  {
    input: ["Oermonocotylen", "Zwavel"],
    hint: `Sommige monocotylen verleggen de focus naar zwavel.`,
    tijd: 5_000_000,
    output: [
      { naam: "Asperges", icoon: "icons/Asperges.png", map: "Groenten", 
        quote: `Asparagus is valued for its tender young shoots, which are harvested before they become woody
        <br><br>- Harold McGee`
      },
      { naam: "Knoflook", icoon: "icons/Knoflook.png", map: "Smaakmakers", 
        quote: `Without garlic I simply would not care to live
        <br><br>- Louis Diat`
      },
      { naam: "Ui", icoon: "icons/Ui.png", map: "Smaakmakers", 
        quote: `Life is like an onion. You peel it off one layer at a time and sometimes you weep
        <br><br>- Carl Sandburg`
      },
      { naam: "Prei", icoon: "icons/Prei.png", map: "Groenten", 
        quote: `The leek grows slowly, its pale stem formed in the dark soil before reaching the light
        <br><br>- Harold McGee`
      },
      { naam: "Bieslook", icoon: "icons/Bieslook.png", map: "Smaakmakers", 
        quote: `Allium schoenoprasum produces fine, grass-like leaves and small purple flowers in rounded clusters
        <br><br>- Maud Grieve`
      }
    ]
  },
  {
    input: ["Oermonocotylen", "Water"],
    hint: `Sommige monocotylen bouwen voort op hun wateropslag.`,
    tijd: 10_000_000,
    output: [
      { naam: "Kokos", icoon: "icons/Kokos.png", map: "Fruit", 
        quote: `The coconut palm is one of the most useful trees in the world, providing food, drink, fiber, and shelter 
        for millions of people
        <br><br>- Harold Clifford`
      },
      { naam: "Agave", icoon: "icons/Agave.png", map: "Genotwaren", 
        quote: `The agave grows in a slow, patient rosette, holding its strength for many years before sending up a 
        single towering flower stalk
        <br><br>- Armen Takhtajan`
      },
      { naam: "Aloë Vera", icoon: "icons/Aloe vera.png", map: "Planten", 
        quote: `Aloe has been valued in traditional medicine for its ability to calm and repair damaged skin tissue
        <br><br>- James Duke`
      }
    ]
  },
  {
    input: [
      ["Oermonocotylen", "Meer"], ["Oermonocotylen", "Ven"]
    ],
    hint: `Sommige monocotylen voelen zich thuis bij stilstaand water.`,
    tijd: 20_000_000,
    output: [
      { naam: "Papyrusriet", icoon: "icons/Papyrusriet.png", map: "Materialen", 
        quote: `The papyrus plant serves many uses: from it are made boats, sails, mats, cords, and above all the material 
        on which we write
        <br><br>- Plinius de Oudere`
      },
      { naam: "Kroos", icoon: "icons/Kroos.png", map: "Planten", 
        quote: `Duckweed consists of tiny floating plants that form green mats on still freshwater surfaces
        <br><br>- John Anderson`
      }
    ]
  },
  {
    input: [
      ["Oermonocotylen", "Zee"], ["Oermonocotylen", "Zout"], ["Oermonocotylen", "Oceaan"], ["Oermonocotylen", "Kust"],
      ["Oermonocotylen", "Strand"]
    ],
    hint: `Welke monocotylen kunnen hun zaden laten drijven en verspreiden over zeeën en oceanen?`,
    tijd: 10_000_000,
    output: [
      { naam: "Kokos", icoon: "icons/Kokos.png", map: "Fruit", 
        quote: `The coconut palm is one of the most useful trees in the world, providing food, drink, fiber, and shelter 
        for millions of people
        <br><br>- Harold Clifford`
      }
    ]
  },
  {
    input: [
      ["Oermonocotylen", "Woestijn"], ["Oermonocotylen", "Blad"]
    ],
    hint: `Sommige monocotylen voelen zich thuis in de woestijn.`,
    tijd: 40_000_000,
    output: [
      { naam: "Agave", icoon: "icons/Agave.png", map: "Genotwaren", 
        quote: `The agave grows in a slow, patient rosette, holding its strength for many years before sending up a 
        single towering flower stalk
        <br><br>- Armen Takhtajan`
      },
      { naam: "Aloë Vera", icoon: "icons/Aloe vera.png", map: "Planten", 
        quote: `Aloe has been valued in traditional medicine for its ability to calm and repair damaged skin tissue
        <br><br>- James Duke`
      }
    ]
  },
  {
    input: ["Oermonocotylen", "Oase"],
    hint: `Sommige monocotylen voelen zich thuis in de oases van woestijnen.`,
    tijd: 5_000_000,
    output: [
      { naam: "Dadels", icoon: "icons/Dadels.png", map: "Fruit", 
        quote: `Dates are among the sweetest and most nourishing of fruits, sustaining those who dwell in arid lands
        <br><br>- Ibn al-Awwam`
      },
      { naam: "Agave", icoon: "icons/Agave.png", map: "Genotwaren", 
        quote: `The agave grows in a slow, patient rosette, holding its strength for many years before sending up a 
        single towering flower stalk
        <br><br>- Armen Takhtajan`
      },
      { naam: "Aloë Vera", icoon: "icons/Aloe vera.png", map: "Planten", 
        quote: `Aloe has been valued in traditional medicine for its ability to calm and repair damaged skin tissue
        <br><br>- James Duke`
      }
    ]
  },
  {
    input: ["Oermonocotylen", "Rivier"],
    hint: `Sommige monocotylen voelen zich thuis langs de oevers van rivieren.`,
    tijd: 20_000_000,
    output: [
      { naam: "Papyrusriet", icoon: "icons/Papyrusriet.png", map: "Materialen", 
        quote: `The papyrus plant serves many uses: from it are made boats, sails, mats, cords, and above all the material 
        on which we write
        <br><br>- Plinius de Oudere`
      }
    ]
  },
  {
    input: ["Oermonocotylen", "Glucose"],
    hint: `Sommige monocotylen varen volledig op hun het vermeerderen van hun glucose.`,
    tijd: 5_000_000,
    output: [
      { naam: "Bananen", icoon: "icons/Bananen.png", map: "Fruit", 
        quote: `Banana fruits develop in large hanging clusters, ripening from green to yellow as sugars accumulate
        <br><br>- Paul Allen`
      },
      { naam: "Ananas", icoon: "icons/Ananas.png", map: "Fruit", 
        quote: `The pineapple is a tropical fruit composed of many fused berries forming a single, fleshy structure
        <br><br>- Harold McGee`
      },
      { naam: "Dadels", icoon: "icons/Dadels.png", map: "Fruit", 
        quote: `Dates are among the sweetest and most nourishing of fruits, sustaining those who dwell in arid lands
        <br><br>- Ibn al-Awwam`
      }
    ]
  },
  {
    input: ["Oermonocotylen", "Gif"],
    hint: `Sommige monocotylen maken van gif hun strategie en redding.`,
    output: [
      { naam: "Narcissen", icoon: "icons/Narcissen.png", map: "Bloemen", 
        quote: `The narcissus has long been cultivated for its ornamental value and its association with the 
        arrival of spring
        <br><br>- Anna Pavord`
      }
    ]
  },
  {
    input: ["Oermonocotylen", "Wortels"],
    hint: `Sommige monocotylen gaan voorts op het groot maken van hun wortels.`,
    tijd: 35_000_000,
    output: [
      { naam: "Gember", icoon: "icons/Gember.png", map: "Smaakmakers", 
        quote: `Ginger is both a spice and a medicine, its sharp flavor matched by its long history of human use
        <br><br>- James Duke`
      },
      { naam: "Kurkuma", icoon: "icons/Kurkuma.png", map: "Smaakmakers", 
        quote: `The rhizome of turmeric contains a deep yellow pigment and is widely used in cooking and 
        traditional practices
        <br><br>- Maud Grieve`
      }
    ]
  },
  {
    input: ["Oermonocotylen", "Moeras"],
    hint: `Sommige monocotylen voelen zich thuis in het moeras.`,
    tijd: 20_000_000,
    output: [
      { naam: "Papyrusriet", icoon: "icons/Papyrusriet.png", map: "Materialen", 
        quote: `The papyrus plant serves many uses: from it are made boats, sails, mats, cords, and above all the material 
        on which we write
        <br><br>- Plinius de Oudere`
      },
      { naam: "Kroos", icoon: "icons/Kroos.png", map: "Planten", 
        quote: `Duckweed consists of tiny floating plants that form green mats on still freshwater surfaces
        <br><br>- John Anderson`
      },
      { naam: "Irissen", icoon: "icons/Irissen.png", map: "Bloemen", 
        quote: `The iris flower rises on a slender stem, its petals unfolding in quiet symmetry above sword-like leaves
        <br><br>- W.J. Bean`
      }
    ]
  },
  {
    input: ["Oermonocotylen", "Zaadjes"],
    tijd: 10_000_000,
    output: [
      { naam: "Kokos", icoon: "icons/Kokos.png", map: "Fruit", 
        quote: `The coconut palm is one of the most useful trees in the world, providing food, drink, fiber, and shelter 
        for millions of people
        <br><br>- Harold Clifford`
      },
      { naam: "Kardemom", icoon: "icons/Kardemom.png", map: "Smaakmakers", 
        quote: `Cardamom is prized in cooking for the fragrance of its seeds, which are released only 
        when the pods are broken
        <br><br>- Maud Grieve`
      }
    ]
  },
  {
    input: ["Oermonocotylen", "Kevers"],
    hint: `Sommige monocotylen gaan voorts samen met de kevers.`,
    tijd: 35_000_000,
    output: [
      { naam: "Lelies", icoon: "icons/Lelies.png", map: "Bloemen", 
        quote: `A single lily stands, pure and untouched, its white petals opening to the quiet of the day
        <br><br>- Yosa Buson`
      },
      { naam: "Gember", icoon: "icons/Gember.png", map: "Smaakmakers", 
        quote: `Ginger is both a spice and a medicine, its sharp flavor matched by its long history of human use
        <br><br>- James Duke`
      },
      { naam: "Kurkuma", icoon: "icons/Kurkuma.png", map: "Smaakmakers", 
        quote: `The rhizome of turmeric contains a deep yellow pigment and is widely used in cooking and 
        traditional practices
        <br><br>- Maud Grieve`
      },
      { naam: "Orchideeën", icoon: "icons/Orchideeën.png", map: "Bloemen", 
        quote: `The orchid is mother nature's masterpiece
        <br><br>- Robyn`
      }
    ]
  },
  {
    input: ["Oermonocotylen", "Vliegen"],
    output: [
      { naam: "Orchideeën", icoon: "icons/Orchideeën.png", map: "Bloemen", 
        quote: `The orchid is mother nature's masterpiece
        <br><br>- Robyn`
      }
    ]
  },
  {
    input: ["Oermonocotylen", "Vlinders"],
    hint: `Sommige monocotylen kiezen voor de vlinders.`,
    tijd: 40_000_000,
    output: [
      { naam: "Gladiolen", icoon: "icons/Gladiolen.png", map: "Bloemen", 
        quote: `The tall, sword-like form of the gladiolus gave rise to its symbolic association with battle and loss.
        <br><br>- Christopher Brickell`
      },
      { naam: "Lelies", icoon: "icons/Lelies.png", map: "Bloemen", 
        quote: `A single lily stands, pure and untouched, its white petals opening to the quiet of the day
        <br><br>- Yosa Buson`
      }
    ]
  },
  {
    input: ["Oermonocotylen", "Hout"],
    tijd: 5_000_000,
    output: [
      { naam: "Oliepalmen", icoon: "icons/Oliepalmen.png", map: "Bomen", 
        quote: `The dance of the palm trees, the oceans calling, the first rays of sun and heaven is here
        <br><br>- Michael Dolan`
      },
      { naam: "Dadels", icoon: "icons/Dadels.png", map: "Fruit", 
        quote: `Dates are among the sweetest and most nourishing of fruits, sustaining those who dwell in arid lands
        <br><br>- Ibn al-Awwam`
      }
    ]
  },
  {
    input: ["Oermonocotylen", "Bos"],
    hint: `Sommige monocotylen voelen zich thuis in het bos.`,
    tijd: 40_000_000,
    output: [
      { naam: "Lelies", icoon: "icons/Lelies.png", map: "Bloemen", 
        quote: `A single lily stands, pure and untouched, its white petals opening to the quiet of the day
        <br><br>- Yosa Buson`
      },
      { naam: "Hyacinten", icoon: "icons/Hyacinten.png", map: "Bloemen", 
        quote: `The garden was adorned with hyacinth and roses, as if Eden itself remembered the purity of first creation
        <br><br>- John Milton`
      }
    ]
  },
  {
    input: ["Oermonocotylen", "Tropisch regenwoud"],
    hint: `Sommige monocotylen voelen zich thuis in het tropisch regenwoud.`,
    tijd: 10_000_000,
    output: [
      { naam: "Rotan", icoon: "icons/Rotan.png", map: "Materialen", 
        quote: `Rattans are among the most useful products of the forest, supplying canes for endless 
        purposes of native industry
        <br><br>- Henry Forbes`
      },
      { naam: "Oliepalmen", icoon: "icons/Oliepalmen.png", map: "Bomen", 
        quote: `The dance of the palm trees, the oceans calling, the first rays of sun and heaven is here
        <br><br>- Michael Dolan`
      },
      { naam: "Bananen", icoon: "icons/Bananen.png", map: "Fruit", 
        quote: `Banana fruits develop in large hanging clusters, ripening from green to yellow as sugars accumulate
        <br><br>- Paul Allen`
      },
      { naam: "Orchideeën", icoon: "icons/Orchideeën.png", map: "Bloemen", 
        quote: `The orchid is mother nature's masterpiece
        <br><br>- Robyn`
      },
      { naam: "Gember", icoon: "icons/Gember.png", map: "Smaakmakers", 
        quote: `Ginger is both a spice and a medicine, its sharp flavor matched by its long history of human use
        <br><br>- James Duke`
      },
      { naam: "Kurkuma", icoon: "icons/Kurkuma.png", map: "Smaakmakers", 
        quote: `The rhizome of turmeric contains a deep yellow pigment and is widely used in cooking and 
        traditional practices
        <br><br>- Maud Grieve`
      },
      { naam: "Kardemom", icoon: "icons/Kardemom.png", map: "Smaakmakers", 
        quote: `Cardamom is prized in cooking for the fragrance of its seeds, which are released only 
        when the pods are broken
        <br><br>- Maud Grieve`
      }
    ]
  },
  {
    input: ["Oermonocotylen", "Bijen"],
    hint: `Sommige monocotylen gedijen goed bij de bijen.`,
    tijd: 5_000_000,
    output: [
      { naam: "Tulpen", icoon: "icons/Tulpen.png", map: "Bloemen", 
        quote: `Tulips open with the light of spring, their petals responding directly to warmth and sun
        <br><br>- Elizabeth Murray`
      },
      { naam: "Hyacinten", icoon: "icons/Hyacinten.png", map: "Bloemen", 
        quote: `The garden was adorned with hyacinth and roses, as if Eden itself remembered the purity of first creation
        <br><br>- John Milton`
      },
      { naam: "Narcissen", icoon: "icons/Narcissen.png", map: "Bloemen", 
        quote: `The narcissus has long been cultivated for its ornamental value and its association with the 
        arrival of spring
        <br><br>- Anna Pavord`
      },
      { naam: "Irissen", icoon: "icons/Irissen.png", map: "Bloemen", 
        quote: `The iris flower rises on a slender stem, its petals unfolding in quiet symmetry above sword-like leaves
        <br><br>- W.J. Bean`
      },
      { naam: "Krokussen", icoon: "icons/Krokussen.png", map: "Bloemen", 
        quote: `Welcome, wild harbinger of spring! To this small nook of Earth
        <br><br>- Bernard Barton`
      }
    ]
  },
  {
    input: [
      ["Oermonocotylen", "Magnolia"], ["Oermonocotylen", "Laurierbomen"], ["Oermonocotylen", "Vijgen"],
      ["Oermonocotylen", "Teak"]
    ],
    tijd: 20_000_000,
    output: [
      { naam: "Rotan", icoon: "icons/Rotan.png", map: "Materialen", 
        quote: `Rattans are among the most useful products of the forest, supplying canes for endless 
        purposes of native industry
        <br><br>- Henry Forbes`
      }
    ]
  },
  {
    input: [
      ["Gras", "Meer"], ["Gras", "Ven"], ["Gras", "Moeras"]
    ],
    hint: `Sommige grassen vinden hun thuis bij stilstaand of kabbelend water.`,
    tijd: 4_000_000,
    output: [
      { naam: "Waterriet", icoon: "icons/Waterriet.png", map: "Planten", 
        quote: `Man is but a reed, the most feeble thing in nature, but he is a thinking reed
        <br><br>- Blaise Pascal`
      },
      { naam: "Suikerriet", icoon: "icons/Suikerriet.png", map: "Genotwaren", 
        quote: `Now let the cane, whose swelling juices fill the full-extended stalk, be reared with skill
        <br><br>- James Grainger`
      },
      { naam: "Rijst", icoon: "icons/Rijst.png", map: "Granen", 
        quote: `Rice is the basis of nourishment for all under heaven
        <br><br>- Wang Zhen`
      }
    ]
  },
  {
    input: ["Gras", "Rivier"],
    hint: `Sommige grassen vinden hun thuis bij rivieren en beekjes.`,
    tijd: 4_000_000,
    output: [
      { naam: "Waterriet", icoon: "icons/Waterriet.png", map: "Planten", 
        quote: `Man is but a reed, the most feeble thing in nature, but he is a thinking reed
        <br><br>- Blaise Pascal`
      },
      { naam: "Suikerriet", icoon: "icons/Suikerriet.png", map: "Genotwaren", 
        quote: `Now let the cane, whose swelling juices fill the full-extended stalk, be reared with skill
        <br><br>- James Grainger`
      },
      { naam: "Rijst", icoon: "icons/Rijst.png", map: "Granen", 
        quote: `Rice is the basis of nourishment for all under heaven
        <br><br>- Wang Zhen`
      },
      { naam: "Maïs", icoon: "icons/Mais.png", map: "Granen", 
        quote: `Maize grows in rows of kernels, each ear shaped by long cultivation
        <br><br>- Barbara McClintock`
      }
    ]
  },
  {
    input: ["Gras", "Overstroming"],
    hint: `Sommige grassen gedijen goed bij overstroming.`,
    tijd: 5_000_000,
    output: [
      { naam: "Rijst", icoon: "icons/Rijst.png", map: "Granen", 
        quote: `Rice is the basis of nourishment for all under heaven
        <br><br>- Wang Zhen`
      },
      { naam: "Maïs", icoon: "icons/Mais.png", map: "Granen", 
        quote: `Maize grows in rows of kernels, each ear shaped by long cultivation
        <br><br>- Barbara McClintock`
      }
    ]
  },
  {
    input: ["Gras", "Glucose"],
    hint: `Sommige grassen specialiseren zich in alsmaar meer glucose.`,
    tijd: 4_000_000,
    output: [
      { naam: "Suikerriet", icoon: "icons/Suikerriet.png", map: "Genotwaren", 
        quote: `Now let the cane, whose swelling juices fill the full-extended stalk, be reared with skill
        <br><br>- James Grainger`
      }
    ]
  },
  {
    input: ["Gras", "Zaadjes"],
    tijd: 4_000_000,
    output: [
      { naam: "Maïs", icoon: "icons/Mais.png", map: "Granen", 
        quote: `Maize grows in rows of kernels, each ear shaped by long cultivation
        <br><br>- Barbara McClintock`
      },
      { naam: "Rijst", icoon: "icons/Rijst.png", map: "Granen", 
        quote: `Rice is the basis of nourishment for all under heaven
        <br><br>- Wang Zhen`
      },
      { naam: "Sorghum", icoon: "icons/Sorghum.png", map: "Granen", 
        quote: `The sorghum fields were dense and tall, their red tassels blazing like a sea of blood in the sun
        <br><br>- Mo Yan`
      },
      { naam: "Gierst", icoon: "icons/Gierst.png", map: "Granen", 
        quote: `Millet grows quickly and thrives even in poor and dry soils where other grains fail
        <br><br>- Olivier de Serres`
      }
    ]
  },
  {
    input: ["Gras", "Tropisch regenwoud"],
    hint: `Sommige grassen voelen zich thuis in het tropisch regenwoud.`,
    tijd: 4_000_000,
    output: [
      { naam: "Bamboe", icoon: "icons/Bamboe.png", map: "Materialen", 
        quote: `Notice that the stiffest tree is most easily cracked, while the bamboo or willow survives by bending with 
        the wind
        <br><br>- Bruce Lee`
      },
      { naam: "Suikerriet", icoon: "icons/Suikerriet.png", map: "Genotwaren", 
        quote: `Now let the cane, whose swelling juices fill the full-extended stalk, be reared with skill
        <br><br>- James Grainger`
      },
      { naam: "Maïs", icoon: "icons/Mais.png", map: "Granen", 
        quote: `Maize grows in rows of kernels, each ear shaped by long cultivation
        <br><br>- Barbara McClintock`
      }
    ]
  },
  {
    input: [
      ["Gras", "Archaeopteryx"], ["Weide", "Archaeopteryx"]
    ],
    hint: `Sommige archaeopteryx voelen zich thuis op de grasweides.`,
    tijd: 15_000_000,
    output: [
      { naam: "Kieviten", icoon: "icons/Kieviten.png", map: "Vogels", 
        quote: `The lapwing tumbles and twists over the fields, its flight full of sudden turns and restless energy
        <br><br>- Richard Jefferies`
      }
    ]
  },
  {
    input: ["Buxus", "Archaeopteryx"],
    tijd: 10_000_000,
    output: [
      { naam: "Fazanten", icoon: "icons/Fazanten.png", map: "Vogels", 
        quote: `A pheasant bursts from the grass, scattering silence into wings and colour
        <br><br>- Wang Wei`
      },
      { naam: "Vinken", icoon: "icons/Vinken.png", map: "Vogels", 
        quote: `The small bird sings not to be heard, but because the world asks for sound
        <br><br>- Mary Oliver`
      }
    ]
  },
  {
    input: ["Savanne", "Archaeopteryx"],
    hint: `Sommige archaeopteryx voelen zich thuis op de savanne.`,
    tijd: 25_000_000,
    output: [
      { naam: "Gieren", icoon: "icons/Gieren.png", map: "Vogels", 
        quote: `The vultures describe wide circles in the sky, watching the earth below with an unblinking vigilance
        <br><br>- Alexander von Humboldt`
      },
      { naam: "Struisvogels", icoon: "icons/Struisvogels.png", map: "Vogels", 
        quote: `The ostrich is the largest living bird, powerful on the ground yet unable to take to the air
        <br><br>- Richard Lydekker`
      },
      { naam: "Secretarisvogels", icoon: "icons/Secretarisvogels.png", map: "Vogels", 
        quote: `The secretarybird moves across the African savanna with long, deliberate strides, searching the ground 
        for snakes and insects
        <br><br>- Derek Ratcliffe`
      }
    ]
  },
  {
    input: ["Savanne", "Oermonocotylen"],
    hint: `Sommige monocotylen voelen zich thuis op de savanne.`,
    tijd: 50_000_000,
    output: [
      { naam: "Gladiolen", icoon: "icons/Gladiolen.png", map: "Bloemen", 
        quote: `The tall, sword-like form of the gladiolus gave rise to its symbolic association with battle and loss.
        <br><br>- Christopher Brickell`
      }
    ]
  },
  {
    input: ["Savanne", "Gras"],
    hint: `Sommige grassen voelen zich thuis op de savanne.`,
    tijd: 4_000_000,
    output: [
      { naam: "Sorghum", icoon: "icons/Sorghum.png", map: "Granen", 
        quote: `The sorghum fields were dense and tall, their red tassels blazing like a sea of blood in the sun
        <br><br>- Mo Yan`
      },
      { naam: "Gierst", icoon: "icons/Gierst.png", map: "Granen", 
        quote: `Millet grows quickly and thrives even in poor and dry soils where other grains fail
        <br><br>- Olivier de Serres`
      }
    ]
  },
  {
    input: ["Weide", "Oermonocotylen"],
    hint: `Sommige monocotylen ontpoppen zich op de grasweides.`,
    tijd: 50_000_000,
    output: [
      { naam: "Narcissen", icoon: "icons/Narcissen.png", map: "Bloemen", 
        quote: `The narcissus has long been cultivated for its ornamental value and its association with the 
        arrival of spring
        <br><br>- Anna Pavord`
      },
      { naam: "Krokussen", icoon: "icons/Krokussen.png", map: "Bloemen", 
        quote: `Welcome, wild harbinger of spring! To this small nook of Earth
        <br><br>- Bernard Barton`
      }
    ]
  },
  {
    input: [
      ["Weide", "Gras"], ["Steppe", "Gras"]
    ],
    hint: `Sommige grassen voelen zich thuis in de weides en steppen.`,
    tijd: 5_000_000,
    output: [
      { naam: "Tarwe", icoon: "icons/Tarwe.png", map: "Granen", 
        quote: `If I am worth anything later, I am worth something now. For wheat is wheat, even if people think it is a 
        grass in the beginning
        <br><br>- Vincent van Gogh`
      },
      { naam: "Gerst", icoon: "icons/Gerst.png", map: "Granen", 
        quote: `Among cereals, barley is notable for its resilience and ability to grow in a wide range of climates
        <br><br>- Jack Harlan`
      },
      { naam: "Haver", icoon: "icons/Haver.png", map: "Granen", 
        quote: `Oats are of a cleansing quality and are used more for feeding than for bread
        <br><br>- John Gerard`
      }
    ]
  },
  {
    input: ["Steppe", "Archaeopteryx"],
    hint: `Sommige archaeopteryx voelen zich thuis op de steppe.`,
    tijd: 20_000_000,
    output: [
      { naam: "Ganzen", icoon: "icons/Ganzen.png", map: "Vogels", 
        quote: `Wild geese fly south; their cries drift away across the empty autumn sky
        <br><br>- Li Bai`
      },
      { naam: "Arenden", icoon: "icons/Arenden.png", map: "Vogels", 
        quote: `The eagle does not chase the world; it watches it shrink beneath its wings.
        <br><br>- Mary Oliver`
      }
    ]
  },
  {
    input: ["Oerfabiden", "Water"],
    hint: `Sommige fabiden bouwen voort op hun wateropslag.`,
    tijd: 30_000_000,
    output: [
      { naam: "Meloenen", icoon: "icons/Meloenen.png", map: "Groenten", 
        quote: `Melons require warmth and careful tending, but reward the grower with delicate and sweet flesh
        <br><br>- Olivier de Serres`
      },
      { naam: "Watermeloenen", icoon: "icons/Watermeloenen.png", map: "Groenten", 
        quote: `When one has tasted watermelon, he knows what the angels eat
        <br><br>- Mark Twain`
      },
      { naam: "Komkommers", icoon: "icons/Komkommers.png", map: "Groenten", 
        quote: `The cucumber is of a cooling nature and is much desired in the heat
        <br><br>- Plinius de Oudere`
      }
    ]
  },
  {
    input: ["Oerfabiden", "Berg"],
    hint: `Sommige fabiden voelen zich thuis in de bergen.`,
    tijd: 20_000_000,
    output: [
      { naam: "Amandelen", icoon: "icons/Amandelen.png", map: "Zaden", 
        quote: `The almond hastens to blossom before the spring is sure
        <br><br>- Virgilius`
      },
      { naam: "Abrikozen", icoon: "icons/Abrikozen.png", map: "Fruit", 
        quote: `Apricots require warmth and careful cultivation, but yield fruit of exquisite sweetness
        <br><br>- Olivier de Serres`
      },
      { naam: "Kersen", icoon: "icons/Kersen.png", map: "Fruit", 
        quote: `The cherries hung like drops of blood in the summer sun
        <br><br>- D.H. Lawrence`
      },
      { naam: "Perziken", icoon: "icons/Perziken.png", map: "Fruit", 
        quote: `The peach ripens in silence, gathering sweetness from the sun
        <br><br>- Paul Valéry`
      },
      { naam: "Coca", icoon: "icons/Coca.png", map: "Genotwaren", 
        quote: `The leaves of the coca plant, when processed, yield a substance that produces remarkable stimulation 
        and relief from fatigue
        <br><br>- Sigmund Freud`
      }
    ]
  },
  {
    input: ["Oerfabiden", "Zand"],
    tijd: 20_000_000,
    output: [
      { naam: "Acacia", icoon: "icons/Acacia.png", map: "Bomen", 
        quote: `The acacias stood scattered over the plain, each tree casting a thin, sharp shadow upon the grass
        <br><br>- Henry Stanley`
      },
      { naam: "Pinda", icoon: "icons/Pinda.png", map: "Zaden", 
        quote: `The peanut is remarkable in that its fruit develops underground
        <br><br>- Charles Millspaugh`
      }
    ]
  },
  {
    input: [
      ["Oerfabiden", "Meer"], ["Oerfabiden", "Ven"]
    ],
    hint: `Sommige fabiden voelen zich thuis bij meertjes en vennetjes.`,
    tijd: 50_000_000,
    output: [
      { naam: "Wilgen", icoon: "icons/Wilgen.png", map: "Bomen", 
        quote: `She wept beneath the willow boughs
        <br><br>- Christina Rossetti`
      },
      { naam: "Populieren", icoon: "icons/Populieren.png", map: "Bomen", 
        quote: `Poplars stand along the riverbank, whispering in the wind
        <br><br>- Virgilius`
      }
    ]
  },
  {
    input: [
      ["Oerfabiden", "Woestijn"], ["Oerfabiden", "Oase"]
    ],
    hint: `Sommige fabiden voelen zich thuis in de woestijn.`,
    tijd: 30_000_000,
    output: [
      { naam: "Meloenen", icoon: "icons/Meloenen.png", map: "Groenten", 
        quote: `Melons require warmth and careful tending, but reward the grower with delicate and sweet flesh
        <br><br>- Olivier de Serres`
      },
      { naam: "Watermeloenen", icoon: "icons/Watermeloenen.png", map: "Groenten", 
        quote: `When one has tasted watermelon, he knows what the angels eat
        <br><br>- Mark Twain`
      }
    ]
  },
  {
    input: ["Oerfabiden", "Wind"],
    tijd: 30_000_000,
    output: [
      { naam: "Iepen", icoon: "icons/Iepen.png", map: "Bomen", 
        quote: `The elm trees stand like guardians of the quiet lane
        <br><br>- John Clare`
      },
      { naam: "Wilgen", icoon: "icons/Wilgen.png", map: "Bomen", 
        quote: `She wept beneath the willow boughs
        <br><br>- Christina Rossetti`
      },
      { naam: "Populieren", icoon: "icons/Populieren.png", map: "Bomen", 
        quote: `Poplars stand along the riverbank, whispering in the wind
        <br><br>- Virgilius`
      },
      { naam: "Hennep", icoon: "icons/Hennep.png", map: "Materialen", 
        quote: `From hemp are made ropes of great strength; its seed is sometimes used as food or medicine
        <br><br>- Plinius de Oudere`
      }
    ]
  },
  {
    input: ["Oerfabiden", "Rivier"],
    tijd: 30_000_000,
    output: [
      { naam: "Wilgen", icoon: "icons/Wilgen.png", map: "Bomen", 
        quote: `She wept beneath the willow boughs
        <br><br>- Christina Rossetti`
      },
      { naam: "Populieren", icoon: "icons/Populieren.png", map: "Bomen", 
        quote: `Poplars stand along the riverbank, whispering in the wind
        <br><br>- Virgilius`
      },
      { naam: "Soja", icoon: "icons/Soja.png", map: "Zaden", 
        quote: `Soybeans enrich the soil through nitrogen fixation and provide a high-protein crop
        <br><br>- O.W. Willcox`
      },
      { naam: "Hop", icoon: "icons/Hop.png", map: "Genotwaren", 
        quote: `Hop adds bitterness to the drink and preserves it from spoiling
        <br><br>- Hildegard von Bingen`
      }
    ]
  },
  {
    input: [
      ["Oerfabiden", "Kust"], ["Oerfabiden", "Duinen"]
    ],
    hint: `Sommige fabiden voelen zich thuis in de duinen.`,
    tijd: 30_000_000,
    output: [
      { naam: "Wilgen", icoon: "icons/Wilgen.png", map: "Bomen", 
        quote: `She wept beneath the willow boughs
        <br><br>- Christina Rossetti`
      },
      { naam: "Populieren", icoon: "icons/Populieren.png", map: "Bomen", 
        quote: `Poplars stand along the riverbank, whispering in the wind
        <br><br>- Virgilius`
      },
      { naam: "Klavers", icoon: "icons/Klavers.png", map: "Planten", 
        quote: `Clover enriches the soil and is excellent fodder for cattle
        <br><br>- John Evelyn`
      }
    ]
  },
  {
    input: ["Oerfabiden", "Overstroming"],
    tijd: 30_000_000,
    output: [
      { naam: "Populieren", icoon: "icons/Populieren.png", map: "Bomen", 
        quote: `Poplars stand along the riverbank, whispering in the wind
        <br><br>- Virgilius`
      }
    ]
  },
  {
    input: ["Oerfabiden", "Nitraat"],
    hint: `Sommige fabiden floreren door nitraat.`,
    tijd: 60_000_000,
    output: [
      { naam: "Brandnetels", icoon: "icons/Brandnetels.png", map: "Planten", 
        quote: `The nettle grows among the ruins and the broken hedge
        <br><br>- John Clare`
      },
      { naam: "Hop", icoon: "icons/Hop.png", map: "Genotwaren", 
        quote: `Hop adds bitterness to the drink and preserves it from spoiling
        <br><br>- Hildegard von Bingen`
      }
    ]
  },
  {
    input: ["Oerfabiden", "Glucose"],
    hint: `Sommige fabiden specialiseren zich in het vermeerderen van hun glucose.`,
    tijd: 50_000_000,
    output: [
      { naam: "Watermeloenen", icoon: "icons/Watermeloenen.png", map: "Groenten", 
        quote: `When one has tasted watermelon, he knows what the angels eat
        <br><br>- Mark Twain`
      },
      { naam: "Meloenen", icoon: "icons/Meloenen.png", map: "Groenten", 
        quote: `Melons require warmth and careful tending, but reward the grower with delicate and sweet flesh
        <br><br>- Olivier de Serres`
      },
      { naam: "Vijgen", icoon: "icons/Vijgen.png", map: "Fruit", 
        quote: `The fig tree yields its fruit freely, a gift of the warm earth
        <br><br>- Ovidius`
      },
      { naam: "Aardbeien", icoon: "icons/Aardbeien.png", map: "Fruit", 
        quote: `Wild strawberries are the sweetest reward of wandering in the fields
        <br><br>- Henry Thoreau`
      },
      { naam: "Perziken", icoon: "icons/Perziken.png", map: "Fruit", 
        quote: `The peach ripens in silence, gathering sweetness from the sun
        <br><br>- Paul Valéry`
      },
      { naam: "Pruimen", icoon: "icons/Pruimen.png", map: "Fruit", 
        quote: `Season of mists and mellow fruitfulness, close bosom-friend of the maturing sun
        <br><br>- John Keats`
      }
    ]
  },
  {
    input: ["Oerfabiden", "Gif"],
    hint: `Sommige fabiden maken van gif hun strategie en redding.`,
    tijd: 40_000_000,
    output: [
      { naam: "Coca", icoon: "icons/Coca.png", map: "Genotwaren", 
        quote: `The leaves of the coca plant, when processed, yield a substance that produces remarkable stimulation 
        and relief from fatigue
        <br><br>- Sigmund Freud`
      }
    ]
  },
  {
    input: ["Oerfabiden", "Wortels"],
    tijd: 10_000_000,
    output: [
      { naam: "Cassave", icoon: "icons/Cassave.png", map: "Groenten", 
        quote: `Manioc is indispensable to the subsistence of many Amazonian peoples
        <br><br>- Richard Spruce`
      }
    ]
  },
  {
    input: ["Oerfabiden", "Zaadjes"],
    hint: `Sommige fabiden gaan hun weg voorts door het gebruik van hun zaadjes.`,
    tijd: 5_000_000,
    output: [
      { naam: "Kikkererwten", icoon: "icons/Kikkererwten.png", map: "Zaden", 
        quote: `Chickpeas are eaten both green and dried, and are thought to produce warmth in the body
        <br><br>- Dioscorides`
      },
      { naam: "Linzen", icoon: "icons/Linzen.png", map: "Zaden", 
        quote: `Lentils are of great use as food, though they produce a dulling effect on the mind
        <br><br>- Plinius de Oudere`
      },
      { naam: "Erwten", icoon: "icons/Erwten.png", map: "Zaden", 
        quote: `The pea is a crop that gives both pleasure and sustenance in the garden
        <br><br>- William Cobbett`
      },
      { naam: "Sperziebonen", icoon: "icons/Sperziebonen.png", map: "Zaden", 
        quote: `The beans are eaten while the pods are yet tender and green
        <br><br>- John Gerard`
      },
      { naam: "Kidneybonen", icoon: "icons/Kidneybonen.png", map: "Zaden", 
        quote: `The kidney bean is cultivated for its edible seeds, which are highly nutritious when properly cooked
        <br><br>- John Lindley`
      },
      { naam: "Soja", icoon: "icons/Soja.png", map: "Zaden", 
        quote: `Soybeans enrich the soil through nitrogen fixation and provide a high-protein crop
        <br><br>- O.W. Willcox`
      }
    ]
  },
  {
    input: ["Oerfabiden", "Vlinders"],
    output: [
      { naam: "Brandnetels", icoon: "icons/Brandnetels.png", map: "Planten", 
        quote: `The nettle grows among the ruins and the broken hedge
        <br><br>- John Clare`
      }
    ]
  },
  {
    input: ["Oerfabiden", "Hout"],
    tijd: 30_000_000,
    output: [
      { naam: "Oerfagales", icoon: "icons/Oerfagales.png", map: "Planten", 
        quote: `Oak, beech, and other timber trees form the strength of our forests and ships
        <br><br>- John Evelyn`
      },
      { naam: "Wilgen", icoon: "icons/Wilgen.png", map: "Bomen", 
        quote: `She wept beneath the willow boughs
        <br><br>- Christina Rossetti`
      },
      { naam: "Populieren", icoon: "icons/Populieren.png", map: "Bomen", 
        quote: `Poplars stand along the riverbank, whispering in the wind
        <br><br>- Virgilius`
      },
      { naam: "Iepen", icoon: "icons/Iepen.png", map: "Bomen", 
        quote: `The elm trees stand like guardians of the quiet lane
        <br><br>- John Clare`
      }
    ]
  },
  {
    input: ["Oerfabiden", "Bos"],
    hint: `Sommige fabiden voelen zich thuis in de bossen.`,
    tijd: 50_000_000,
    output: [
      { naam: "Oerfagales", icoon: "icons/Oerfagales.png", map: "Planten", 
        quote: `Oak, beech, and other timber trees form the strength of our forests and ships
        <br><br>- John Evelyn`
      },
      { naam: "Iepen", icoon: "icons/Iepen.png", map: "Bomen", 
        quote: `The elm trees stand like guardians of the quiet lane
        <br><br>- John Clare`
      },
      { naam: "Kersen", icoon: "icons/Kersen.png", map: "Fruit", 
        quote: `The cherries hung like drops of blood in the summer sun
        <br><br>- D.H. Lawrence`
      },
      { naam: "Appels", icoon: "icons/Appels.png", map: "Fruit", 
        quote: `The apple tree is a sign of love and youth
        <br><br>- William Blake`
      },
      { naam: "Peren", icoon: "icons/Peren.png", map: "Fruit", 
        quote: `The pear tree bears its fruit with quiet patience in the orchard
        <br><br>- Henry Thoreau`
      }
    ]
  },
  {
    input: ["Oerfabiden", "Tropisch regenwoud"],
    hint: `Sommige fabiden voelen zich thuis in het tropisch regenwoud.`,
    tijd: 5_000_000,
    output: [
      { naam: "Rubberbomen", icoon: "icons/Rubberbomen.png", map: "Materialen", 
        quote: `The rubber tree yields a milky latex which can be coagulated into a material of great elasticity
        <br><br>- Henry Wickham`
      },
      { naam: "Coca", icoon: "icons/Coca.png", map: "Genotwaren", 
        quote: `The leaves of the coca plant, when processed, yield a substance that produces remarkable stimulation 
        and relief from fatigue
        <br><br>- Sigmund Freud`
      },
      { naam: "Sperziebonen", icoon: "icons/Sperziebonen.png", map: "Zaden", 
        quote: `The beans are eaten while the pods are yet tender and green
        <br><br>- John Gerard`
      },
      { naam: "Kidneybonen", icoon: "icons/Kidneybonen.png", map: "Zaden", 
        quote: `The kidney bean is cultivated for its edible seeds, which are highly nutritious when properly cooked
        <br><br>- John Lindley`
      }
    ]
  },
  {
    input: ["Oerfabiden", "Bloem"],
    output: [
      { naam: "Rozen", icoon: "icons/Rozen.png", map: "Bloemen", 
        quote: `Love and a red rose can't be hid
        <br><br>- Thomas Holcroft`
      },
      { naam: "Vlas", icoon: "icons/Vlas.png", map: "Materialen", 
        quote: `Flax, slender in stem, yields threads for linen when ripened in the sun
        <br><br>- Virgilius`
      }
    ]
  },
  {
    input: ["Oerfabiden", "Wespen"],
    hint: `Sommige fabiden en hun zoete vruchten gaan goed samen met de wespen.`,
    tijd: 50_000_000,
    output: [
      { naam: "Vijgen", icoon: "icons/Vijgen.png", map: "Fruit", 
        quote: `The fig tree yields its fruit freely, a gift of the warm earth
        <br><br>- Ovidius`
      },
      { naam: "Appels", icoon: "icons/Appels.png", map: "Fruit", 
        quote: `The apple tree is a sign of love and youth
        <br><br>- William Blake`
      },
      { naam: "Peren", icoon: "icons/Peren.png", map: "Fruit", 
        quote: `The pear tree bears its fruit with quiet patience in the orchard
        <br><br>- Henry Thoreau`
      },
      { naam: "Kersen", icoon: "icons/Kersen.png", map: "Fruit", 
        quote: `The cherries hung like drops of blood in the summer sun
        <br><br>- D.H. Lawrence`
      },
      { naam: "Pruimen", icoon: "icons/Pruimen.png", map: "Fruit", 
        quote: `Season of mists and mellow fruitfulness, close bosom-friend of the maturing sun
        <br><br>- John Keats`
      },
      { naam: "Perziken", icoon: "icons/Perziken.png", map: "Fruit", 
        quote: `The peach ripens in silence, gathering sweetness from the sun
        <br><br>- Paul Valéry`
      }
    ]
  },
  {
    input: ["Oerfabiden", "Bijen"],
    hint: `Sommige fabiden gaan samen voorts met de bijtjes.`,
    tijd: 30_000_000,
    output: [
      { naam: "Rozen", icoon: "icons/Rozen.png", map: "Bloemen", 
        quote: `Love and a red rose can't be hid
        <br><br>- Thomas Holcroft`
      },
      { naam: "Pompoenen", icoon: "icons/Pompoenen.png", map: "Groenten", 
        quote: `The pumpkin ripened beneath the mellow sun of autumn
        <br><br>- Washington Irving`
      },
      { naam: "Courgettes", icoon: "icons/Courgettes.png", map: "Groenten", 
        quote: `Zucchini is a versatile squash that absorbs flavors while remaining delicate in texture
        <br><br>- Elizabeth Schneider`
      },
      { naam: "Watermeloenen", icoon: "icons/Watermeloenen.png", map: "Groenten", 
        quote: `When one has tasted watermelon, he knows what the angels eat
        <br><br>- Mark Twain`
      },
      { naam: "Aardbeien", icoon: "icons/Aardbeien.png", map: "Fruit", 
        quote: `Wild strawberries are the sweetest reward of wandering in the fields
        <br><br>- Henry Thoreau`
      }
    ]
  },
  {
    input: ["Oerfabiden", "Savanne"],
    hint: `Sommige fabiden voelen zich thuis in de savanne.`,
    tijd: 10_000_000,
    output: [
      { naam: "Acacia", icoon: "icons/Acacia.png", map: "Bomen", 
        quote: `The acacias stood scattered over the plain, each tree casting a thin, sharp shadow upon the grass
        <br><br>- Henry Stanley`
      },
      { naam: "Cassave", icoon: "icons/Cassave.png", map: "Groenten", 
        quote: `Manioc is indispensable to the subsistence of many Amazonian peoples
        <br><br>- Richard Spruce`
      },
      { naam: "Pinda", icoon: "icons/Pinda.png", map: "Zaden", 
        quote: `The peanut is remarkable in that its fruit develops underground
        <br><br>- Charles Millspaugh`
      },
      { naam: "Pompoenen", icoon: "icons/Pompoenen.png", map: "Groenten", 
        quote: `The pumpkin ripened beneath the mellow sun of autumn
        <br><br>- Washington Irving`
      },
      { naam: "Courgettes", icoon: "icons/Courgettes.png", map: "Groenten", 
        quote: `Zucchini is a versatile squash that absorbs flavors while remaining delicate in texture
        <br><br>- Elizabeth Schneider`
      }
    ]
  },
  {
    input: ["Oerfabiden", "Weide"],
    hint: `Sommige fabiden voelen zich thuis in de grasweides.`,
    tijd: 50_000_000,
    output: [
      { naam: "Klavers", icoon: "icons/Klavers.png", map: "Planten", 
        quote: `Clover enriches the soil and is excellent fodder for cattle
        <br><br>- John Evelyn`
      },
      { naam: "Aardbeien", icoon: "icons/Aardbeien.png", map: "Fruit", 
        quote: `Wild strawberries are the sweetest reward of wandering in the fields
        <br><br>- Henry Thoreau`
      },
      { naam: "Vlas", icoon: "icons/Vlas.png", map: "Materialen", 
        quote: `Flax, slender in stem, yields threads for linen when ripened in the sun
        <br><br>- Virgilius`
      },
      { naam: "Brandnetels", icoon: "icons/Brandnetels.png", map: "Planten", 
        quote: `The nettle grows among the ruins and the broken hedge
        <br><br>- John Clare`
      }
    ]
  },
  {
    input: ["Oerfabiden", "Steppe"],
    hint: `Sommige fabiden voelen zich thuis op de steppe.`,
    tijd: 20_000_000,
    output: [
      { naam: "Hop", icoon: "icons/Hop.png", map: "Genotwaren", 
        quote: `Hop adds bitterness to the drink and preserves it from spoiling
        <br><br>- Hildegard von Bingen`
      },
      { naam: "Klavers", icoon: "icons/Klavers.png", map: "Planten", 
        quote: `Clover enriches the soil and is excellent fodder for cattle
        <br><br>- John Evelyn`
      },
      { naam: "Linzen", icoon: "icons/Linzen.png", map: "Zaden", 
        quote: `Lentils are of great use as food, though they produce a dulling effect on the mind
        <br><br>- Plinius de Oudere`
      },
      { naam: "Kikkererwten", icoon: "icons/Kikkererwten.png", map: "Zaden", 
        quote: `Chickpeas are eaten both green and dried, and are thought to produce warmth in the body
        <br><br>- Dioscorides`
      },
      { naam: "Hennep", icoon: "icons/Hennep.png", map: "Materialen", 
        quote: `From hemp are made ropes of great strength; its seed is sometimes used as food or medicine
        <br><br>- Plinius de Oudere`
      }
    ]
  },
  {
    input: [
      ["Oerfabiden", "Buxus"], ["Oerfabiden", "Wilgen"], ["Oerfabiden", "Klavers"], ["Oerfabiden", "Brandnetels"],
      ["Oerfabiden", "Elzen"]
    ],
    tijd: 60_000_000,
    output: [
      { naam: "Hop", icoon: "icons/Hop.png", map: "Genotwaren", 
        quote: `Hop adds bitterness to the drink and preserves it from spoiling
        <br><br>- Hildegard von Bingen`
      }
    ]
  },
 {
    input: [
      ["Oermalviden", "Vuur"], ["Oermalviden", "Lava"], ["Oermalviden", "Brand"]
    ],
    hint: `Er zijn malviden die handig inspelen op brand en vuur.`,
    tijd: 50_000_000,
    output: [
      { naam: "Eucalyptus", icoon: "icons/Eucalyptus.png", map: "Bomen", 
        quote: `In the blue haze of eucalyptus the land seems endless and still
        <br><br>- Banjo Paterson`
      }
    ]
  },
  {
    input: [
      ["Oermalviden", "Berg"], ["Oermalviden", "Steppe"]
    ],
    hint: `Sommige malviden voelen zich thuis op bergen en steppes.`,
    tijd: 15_000_000,
    output: [
      { naam: "Pistache", icoon: "icons/Pistache.png", map: "Zaden", 
        quote: `The pistachio is a nut esteemed for its pleasant flavor and introduced from Syria
        <br><br>- Plinius de Oudere`
      },
      { naam: "Granaatappels", icoon: "icons/Granaatappels.png", map: "Fruit", 
        quote: `The pomegranate opens like a secret heart full of blood-red jewels
        <br><br>- D.H. Lawrence`
      }
    ]
  },
  {
    input: ["Oermalviden", "Zwavel"],
    hint: `Sommige malviden verleggen de focus naar zwavel.`,
    tijd: 30_000_000,
    output: [
      { naam: "Doerians", icoon: "icons/Doerians.png", map: "Fruit", 
        quote: `The durian is the king of fruits in Malaya, though its smell is offensive to many
        <br><br>- Henry Ridley`
      }
    ]
  },
  {
    input: ["Oermalviden", "Woestijn"],
    hint: `Sommige malviden voelen zich thuis in de woestijn.`,
    output: [
      { naam: "Wierookbomen", icoon: "icons/Wierookbomen.png", map: "Genotwaren", 
        quote: `Arabia produces frankincense from trees guarded against winged serpents
        <br><br>- Herodotos`
      },
      { naam: "Mirre", icoon: "icons/Mirre.png", map: "Genotwaren", 
        quote: `Myrrh is among the most esteemed of perfumes, used both in medicine and sacred rites
        <br><br>- Plinius de Oudere`
      },
      { naam: "Pistache", icoon: "icons/Pistache.png", map: "Zaden", 
        quote: `The pistachio is a nut esteemed for its pleasant flavor and introduced from Syria
        <br><br>- Plinius de Oudere`
      }
    ]
  },
  {
    input: ["Oermalviden", "Wind"],
    tijd: 50_000_000,
    output: [
      { naam: "Esdoorns", icoon: "icons/Esdoorns.png", map: "Bomen", 
        quote: `Under the maple’s crimson leaves the year seems to pause in flame
        <br><br>- Henry Longfellow`
      }
    ]
  },
  {
    input: ["Oermalviden", "Oase"],
    tijd: 20_000_000,
    output: [
      { naam: "Wierookbomen", icoon: "icons/Wierookbomen.png", map: "Genotwaren", 
        quote: `Arabia produces frankincense from trees guarded against winged serpents
        <br><br>- Herodotos`
      },
      { naam: "Granaatappels", icoon: "icons/Granaatappels.png", map: "Fruit", 
        quote: `The pomegranate opens like a secret heart full of blood-red jewels
        <br><br>- D.H. Lawrence`
      }
    ]
  },
  {
    input: ["Oermalviden", "Rivier"],
    hint: `Sommige malviden voelen zich thuis bij de rivier.`,
    tijd: 20_000_000,
    output: [
      { naam: "Katoen", icoon: "icons/Katoen.png", map: "Materialen", 
        quote: `Cotton threads bind together the fabric of modern industry and commerce
        <br><br>- John Ruskin`
      },
      { naam: "Lindes", icoon: "icons/Lindes.png", map: "Bomen", 
        quote: `Beneath the linden walks a gentler air, where thought may rest
        <br><br>- Alexander Pope`
      },
      { naam: "Esdoorns", icoon: "icons/Esdoorns.png", map: "Bomen", 
        quote: `Under the maple’s crimson leaves the year seems to pause in flame
        <br><br>- Henry Longfellow`
      },
      { naam: "Jute", icoon: "icons/Jute.png", map: "Materialen", 
        quote: `Jute became indispensable in the manufacture of sacks for global trade
        <br><br>- Andrew Watt`
      }
    ]
  },
  {
    input: ["Oermalviden", "Glucose"],
    tijd: 8_000_000,
    output: [
      { naam: "Esdoorns", icoon: "icons/Esdoorns.png", map: "Bomen", 
        quote: `Under the maple’s crimson leaves the year seems to pause in flame
        <br><br>- Henry Longfellow`
      },
      { naam: "Lychee", icoon: "icons/Lychee.png", map: "Fruit", 
        quote: `A single lychee carried a thousand miles is worth the fall of an empire
        <br><br>- Du Mu`
      },
      { naam: "Mandarijnen", icoon: "icons/Mandarijnen.png", map: "Fruit", 
        quote: `Cultivated fruits such as oranges exhibit remarkable variation under human selection
        <br><br>- Charles Darwin`
      },
      { naam: "Mango", icoon: "icons/Mango.png", map: "Fruit", 
        quote: `The mango blossom perfumes the air like the promise of spring
        <br><br>- Kalidasa`
      }
    ]
  },
  {
    input: ["Oermalviden", "Gif"],
    hint: `Sommige malviden maken van gif hun strategie en redding.`,
    tijd: 5_000_000,
    output: [
      { naam: "Cashew", icoon: "icons/Cashew.png", map: "Zaden", 
        quote: `The cashew tree stands in the coastal heat, its fruit both strange and familiar in the Indian landscape
        <br><br>- V.S. Naipaul`
      },
      { naam: "Paardenkastanjes", icoon: "icons/Paardenkastanjes.png", map: "Bomen", 
        quote: `Beneath the chestnut’s spreading shade the village children played
        <br><br>- William Wordsworth`
      },
      { naam: "Cacao", icoon: "icons/Cacao.png", map: "Genotwaren", 
        quote: `Cocoa gives warmth and strength to the fatigued traveller
        <br><br>- James Thomson`
      },
      { naam: "Kola", icoon: "icons/Kola.png", map: "Genotwaren", 
        quote: `The kola nut is chewed for its stimulating effect and is of great social importance among the peoples 
        of West Africa
        <br><br>- William Johnson`
      }
    ]
  },
  {
    input: ["Oermalviden", "Wortels"],
    tijd: 5_000_000,
    output: [
      { naam: "Radijsjes", icoon: "icons/Radijsjes.png", map: "Groenten", 
        quote: `The radish root is of a sharp and biting taste, eaten chiefly when young
        <br><br>- John Gerard`
      }
    ]
  },
  {
    input: ["Oermalviden", "Blad"],
    tijd: 5_000_000,
    output: [
      { naam: "Kool", icoon: "icons/Kool.png", map: "Groenten", 
        quote: `The humble cabbage is often the foundation of the simplest meals
        <br><br>- Charles Lamb`
      }
    ]
  },
  {
    input: ["Oermalviden", "Zaadjes"],
    tijd: 10_000_000,
    output: [
      { naam: "Mosterd", icoon: "icons/Mosterd.png", map: "Smaakmakers", 
        quote: `Mustard is hot and biting, and good to stir the humours of the body
        <br><br>- Nicholas Culpeper`
      },
      { naam: "Cacao", icoon: "icons/Cacao.png", map: "Genotwaren", 
        quote: `Cocoa gives warmth and strength to the fatigued traveller
        <br><br>- James Thomson`
      },
      { naam: "Pistache", icoon: "icons/Pistache.png", map: "Zaden", 
        quote: `The pistachio is a nut esteemed for its pleasant flavor and introduced from Syria
        <br><br>- Plinius de Oudere`
      },
      { naam: "Cashew", icoon: "icons/Cashew.png", map: "Zaden", 
        quote: `The cashew tree stands in the coastal heat, its fruit both strange and familiar in the Indian landscape
        <br><br>- V.S. Naipaul`
      }
    ]
  },
  {
    input: ["Oermalviden", "Kevers"],
    tijd: 30_000_000,
    output: [
      { naam: "Doerians", icoon: "icons/Doerians.png", map: "Fruit", 
        quote: `The durian is the king of fruits in Malaya, though its smell is offensive to many
        <br><br>- Henry Ridley`
      },
      { naam: "Cacao", icoon: "icons/Cacao.png", map: "Genotwaren", 
        quote: `Cocoa gives warmth and strength to the fatigued traveller
        <br><br>- James Thomson`
      }
    ]
  },
  {
    input: ["Oermalviden", "Vliegen"],
    tijd: 5_000_000,
    output: [
      { naam: "Doerians", icoon: "icons/Doerians.png", map: "Fruit", 
        quote: `The durian is the king of fruits in Malaya, though its smell is offensive to many
        <br><br>- Henry Ridley`
      },
      { naam: "Cacao", icoon: "icons/Cacao.png", map: "Genotwaren", 
        quote: `Cocoa gives warmth and strength to the fatigued traveller
        <br><br>- James Thomson`
      },
      { naam: "Papaja", icoon: "icons/Papaja.png", map: "Fruit", 
        quote: `There are fruits of great softness, which melt upon the tongue
        <br><br>- Hernán Cortés`
      }
    ]
  },
  {
    input: ["Oermalviden", "Vlinders"],
    hint: `Sommige malviden vinden hun weg met de vlinders.`,
    tijd: 10_000_000,
    output: [
      { naam: "Hibiscus", icoon: "icons/Hibiscus.png", map: "Bloemen", 
        quote: `The hibiscus lends color and grace to tropical gardens
        <br><br>- David Faichild`
      },
      { naam: "Mandarijnen", icoon: "icons/Mandarijnen.png", map: "Fruit", 
        quote: `Cultivated fruits such as oranges exhibit remarkable variation under human selection
        <br><br>- Charles Darwin`
      },
      { naam: "Granaatappels", icoon: "icons/Granaatappels.png", map: "Fruit", 
        quote: `The pomegranate opens like a secret heart full of blood-red jewels
        <br><br>- D.H. Lawrence`
      },
      { naam: "Mango", icoon: "icons/Mango.png", map: "Fruit", 
        quote: `The mango blossom perfumes the air like the promise of spring
        <br><br>- Kalidasa`
      }
    ]
  },
  {
    input: ["Oermalviden", "Hout"],
    tijd: 50_000_000,
    output: [
      { naam: "Eucalyptus", icoon: "icons/Eucalyptus.png", map: "Bomen", 
        quote: `In the blue haze of eucalyptus the land seems endless and still
        <br><br>- Banjo Paterson`
      },
      { naam: "Lindes", icoon: "icons/Lindes.png", map: "Bomen", 
        quote: `Beneath the linden walks a gentler air, where thought may rest
        <br><br>- Alexander Pope`
      },
      { naam: "Esdoorns", icoon: "icons/Esdoorns.png", map: "Bomen", 
        quote: `Under the maple’s crimson leaves the year seems to pause in flame
        <br><br>- Henry Longfellow`
      }
    ]
  },
  {
    input: ["Oermalviden", "Bos"],
    hint: `Sommige malviden voelen zich thuis in het bos.`,
    tijd: 50_000_000,
    output: [
      { naam: "Esdoorns", icoon: "icons/Esdoorns.png", map: "Bomen", 
        quote: `Under the maple’s crimson leaves the year seems to pause in flame
        <br><br>- Henry Longfellow`
      },
      { naam: "Lindes", icoon: "icons/Lindes.png", map: "Bomen", 
        quote: `Beneath the linden walks a gentler air, where thought may rest
        <br><br>- Alexander Pope`
      },
      { naam: "Paardenkastanjes", icoon: "icons/Paardenkastanjes.png", map: "Bomen", 
        quote: `Beneath the chestnut’s spreading shade the village children played
        <br><br>- William Wordsworth`
      }
    ]
  },
  {
    input: ["Oermalviden", "Tropisch regenwoud"],
    hint: `Sommige malviden voelen zich thuis in het tropisch regenwoud.`,
    tijd: 20_000_000,
    output: [
      { naam: "Cacao", icoon: "icons/Cacao.png", map: "Genotwaren", 
        quote: `Cocoa gives warmth and strength to the fatigued traveller
        <br><br>- James Thomson`
      },
      { naam: "Doerians", icoon: "icons/Doerians.png", map: "Fruit", 
        quote: `The durian is the king of fruits in Malaya, though its smell is offensive to many
        <br><br>- Henry Ridley`
      },
      { naam: "Kapok", icoon: "icons/Kapok.png", map: "Materialen", 
        quote: `The gigantic forest trees rise like columns, among them the lofty cotton tree
        <br><br>- Alfred Wallace`
      },
      { naam: "Kola", icoon: "icons/Kola.png", map: "Genotwaren", 
        quote: `The kola nut is chewed for its stimulating effect and is of great social importance among the peoples 
        of West Africa
        <br><br>- William Johnson`
      },
      { naam: "Zeepnoten", icoon: "icons/Zeepnoten.png", map: "Bomen", 
        quote: `Sapindus yields fruits rich in saponin, extensively used as a substitute for soap
        <br><br>- George Watt`
      },
      { naam: "Guaves", icoon: "icons/Guaves.png", map: "Fruit", 
        quote: `Guavas hang in the heat, soft and fragrant in the tropical air
        <br><br>- Patrick Fermor`
      }
    ]
  },
  {
    input: ["Oermalviden", "Bloem"],
    hint: `Sommige malviden floreren in de strategie van de opvallende bloem.`,
    tijd: 40_000_000,
    output: [
      { naam: "Hibiscus", icoon: "icons/Hibiscus.png", map: "Bloemen", 
        quote: `The hibiscus lends color and grace to tropical gardens
        <br><br>- David Faichild`
      },
      { naam: "Geraniums", icoon: "icons/Geraniums.png", map: "Bloemen", 
        quote: `Geraniums are the comfort of windows, faithful and unpretending
        <br><br>- Elizabeth von Arnim`
      },
      { naam: "Kruidnagel", icoon: "icons/Kruidnagel.png", map: "Smaakmakers", 
        quote: `The scent of cloves carries the memory of the islands
        <br><br>- Haji Amrullah`
      }
    ]
  },
  {
    input: ["Oermalviden", "Wespen"],
    hint: `Sommige malviden gaan goed samen met de wespen.`,
    tijd: 10_000_000,
    output: [
      { naam: "Mango", icoon: "icons/Mango.png", map: "Fruit", 
        quote: `The mango blossom perfumes the air like the promise of spring
        <br><br>- Kalidasa`
      },
      { naam: "Lychee", icoon: "icons/Lychee.png", map: "Fruit", 
        quote: `A single lychee carried a thousand miles is worth the fall of an empire
        <br><br>- Du Mu`
      },
      { naam: "Papaja", icoon: "icons/Papaja.png", map: "Fruit", 
        quote: `There are fruits of great softness, which melt upon the tongue
        <br><br>- Hernán Cortés`
      },
      { naam: "Guaves", icoon: "icons/Guaves.png", map: "Fruit", 
        quote: `Guavas hang in the heat, soft and fragrant in the tropical air
        <br><br>- Patrick Fermor`
      }
    ]
  },
  {
    input: ["Oermalviden", "Bijen"],
    hint: `Sommige malviden gaan samen voorts met de bijen.`,
    tijd: 5_000_000,
    output: [
      { naam: "Lindes", icoon: "icons/Lindes.png", map: "Bomen", 
        quote: `Beneath the linden walks a gentler air, where thought may rest
        <br><br>- Alexander Pope`
      },
      { naam: "Mosterd", icoon: "icons/Mosterd.png", map: "Smaakmakers", 
        quote: `Mustard is hot and biting, and good to stir the humours of the body
        <br><br>- Nicholas Culpeper`
      },
      { naam: "Kool", icoon: "icons/Kool.png", map: "Groenten", 
        quote: `The humble cabbage is often the foundation of the simplest meals
        <br><br>- Charles Lamb`
      },
      { naam: "Radijsjes", icoon: "icons/Radijsjes.png", map: "Groenten", 
        quote: `The radish root is of a sharp and biting taste, eaten chiefly when young
        <br><br>- John Gerard`
      },
      { naam: "Mango", icoon: "icons/Mango.png", map: "Fruit", 
        quote: `The mango blossom perfumes the air like the promise of spring
        <br><br>- Kalidasa`
      }
    ]
  },
  {
    input: ["Oermalviden", "Savanne"],
    hint: `Sommige malviden voelen zich thuis op de savanne.`,
    tijd: 5_000_000,
    output: [
      { naam: "Baobabs", icoon: "icons/Baobabs.png", map: "Bomen", 
        quote: `The baobab stands like a monument to endurance in the dry lands
        <br><br>- Richard Baker`
      },
      { naam: "Cashew", icoon: "icons/Cashew.png", map: "Zaden", 
        quote: `The cashew tree stands in the coastal heat, its fruit both strange and familiar in the Indian landscape
        <br><br>- V.S. Naipaul`
      },
      { naam: "Mirre", icoon: "icons/Mirre.png", map: "Genotwaren", 
        quote: `Myrrh is among the most esteemed of perfumes, used both in medicine and sacred rites
        <br><br>- Plinius de Oudere`
      },
      { naam: "Eucalyptus", icoon: "icons/Eucalyptus.png", map: "Bomen", 
        quote: `In the blue haze of eucalyptus the land seems endless and still
        <br><br>- Banjo Paterson`
      }
    ]
  },
  {
    input: ["Oermalviden", "Weide"],
    hint: `Sommige malviden voelen zich thuis op uitgestrekte grasweides.`,
    tijd: 5_000_000,
    output: [
      { naam: "Kool", icoon: "icons/Kool.png", map: "Groenten", 
        quote: `The humble cabbage is often the foundation of the simplest meals
        <br><br>- Charles Lamb`
      },
      { naam: "Radijsjes", icoon: "icons/Radijsjes.png", map: "Groenten", 
        quote: `The radish root is of a sharp and biting taste, eaten chiefly when young
        <br><br>- John Gerard`
      },
      { naam: "Mosterd", icoon: "icons/Mosterd.png", map: "Smaakmakers", 
        quote: `Mustard is hot and biting, and good to stir the humours of the body
        <br><br>- Nicholas Culpeper`
      },
      { naam: "Geraniums", icoon: "icons/Geraniums.png", map: "Bloemen", 
        quote: `Geraniums are the comfort of windows, faithful and unpretending
        <br><br>- Elizabeth von Arnim`
      }
    ]
  },
  {
    input: ["Oercaryophyllales", "Berg"],
    hint: `Sommige caryophyllales voelen zich thuis in de bergen.`,
    tijd: 5_000_000,
    output: [
      { naam: "Quinoa", icoon: "icons/Quinoa.png", map: "Zaden", 
        quote: `Quinoa represents the resilience of traditional Andean agriculture
        <br><br>- Miguel Altieri`
      },
      { naam: "Anjers", icoon: "icons/Anjers.png", map: "Bloemen", 
        quote: `The fairest flowers o’ the season are the carnations
        <br><br>- William Shakespeare`
      },
      { naam: "Rabarber", icoon: "icons/Rabarber.png", map: "Groenten", 
        quote: `Rhubarb is valued both for its root in medicine and its leafstalks in food
        <br><br>- John Gerard`
      }
    ]
  },
  {
    input: [
      ["Oercaryophyllales", "Zand"], ["Oercaryophyllales", "Woestijn"]
    ],
    hint: `Sommige caryophyllales voelen zich thuis in de woestijn.`,
    tijd: 40_000_000,
    output: [
      { naam: "Cactussen", icoon: "icons/Cactussen.png", map: "Planten", 
        quote: `The cactus is the silent guardian of the arid land
        <br><br>- Zane Grey`
      }
    ]
  },
  {
    input: [
      ["Oercaryophyllales", "Ven"], ["Oercaryophyllales", "Moeras"], ["Oercaryophyllales", "Spinnen"],
      ["Oercaryophyllales", "Bladluizen"], ["Oercaryophyllales", "Vliegen"], ["Oercaryophyllales", "Muggen"]
    ],
    hint: `Sommige caryophyllales weten insecten te verteren in moerassen.`,
    tijd: 10_000_000,
    output: [
      { naam: "Zonnedauw", icoon: "icons/Zonnedauw.png", map: "Planten", 
        quote: `The sundew catches flies by means of a sticky fluid on its leaves
        <br><br>- John Ellis`
      },
      { naam: "Venusvliegenvanger", icoon: "icons/Venusvliegenvanger.png", map: "Planten", 
        quote: `The sensitive leaves respond to touch in a manner almost animal-like
        <br><br>- Francis Darwin`
      }
    ]
  },
  {
    input: ["Oercaryophyllales", "Zout"],
    hint: `Sommige caryophyllales neigen naar zoute bodems.`,
    tijd: 5_000_000,
    output: [
      { naam: "Bieten", icoon: "icons/Bieten.png", map: "Groenten", 
        quote: `Sugar extracted from the beet has altered the economics of agriculture in temperate lands
        <br><br>- George Marsh`
      },
      { naam: "Quinoa", icoon: "icons/Quinoa.png", map: "Zaden", 
        quote: `Quinoa represents the resilience of traditional Andean agriculture
        <br><br>- Miguel Altieri`
      }
    ]
  },
  {
    input: ["Oercaryophyllales", "Kust"],
    tijd: 30_000_000,
    output: [
      { naam: "Bieten", icoon: "icons/Bieten.png", map: "Groenten", 
        quote: `Sugar extracted from the beet has altered the economics of agriculture in temperate lands
        <br><br>- George Marsh`
      },
      { naam: "Anjers", icoon: "icons/Anjers.png", map: "Bloemen", 
        quote: `The fairest flowers o’ the season are the carnations
        <br><br>- William Shakespeare`
      }
    ]
  },
  {
    input: [
      ["Oercaryophyllales", "Glucose"], ["Oercaryophyllales", "Wortels"]
    ],
    tijd: 35_000_000,
    output: [
      { naam: "Bieten", icoon: "icons/Bieten.png", map: "Groenten", 
        quote: `Sugar extracted from the beet has altered the economics of agriculture in temperate lands
        <br><br>- George Marsh`
      },
    ]
  },
  {
    input: ["Oercaryophyllales", "Gif"],
    hint: `Sommige caryophyllales kiezen de strategie van het gif.`,
    tijd: 10_000_000,
    output: [
      { naam: "Rabarber", icoon: "icons/Rabarber.png", map: "Groenten", 
        quote: `Rhubarb is valued both for its root in medicine and its leafstalks in food
        <br><br>- John Gerard`
      },
      { naam: "Zonnedauw", icoon: "icons/Zonnedauw.png", map: "Planten", 
        quote: `The sundew catches flies by means of a sticky fluid on its leaves
        <br><br>- John Ellis`
      },
      { naam: "Venusvliegenvanger", icoon: "icons/Venusvliegenvanger.png", map: "Planten", 
        quote: `The sensitive leaves respond to touch in a manner almost animal-like
        <br><br>- Francis Darwin`
      }
    ]
  },
  {
    input: ["Oercaryophyllales", "Blad"],
    tijd: 35_000_000,
    output: [
      { naam: "Spinazie", icoon: "icons/Spinazie.png", map: "Groenten", 
        quote: `Spinach stands in our culture for what is green, clean, and strengthening
        <br><br>- Michael Pollan`
      }
    ]
  },
  {
    input: ["Oercaryophyllales", "Zaadjes"],
    tijd: 5_000_000,
    output: [
      { naam: "Quinoa", icoon: "icons/Quinoa.png", map: "Zaden", 
        quote: `Quinoa represents the resilience of traditional Andean agriculture
        <br><br>- Miguel Altieri`
      }
    ]
  },
  {
    input: ["Oercaryophyllales", "Bijen"],
    hint: `Sommige caryophyllales gaan samen voorts met de bijtjes.`,
    tijd: 30_000_000,
    output: [
      { naam: "Anjers", icoon: "icons/Anjers.png", map: "Bloemen", 
        quote: `The fairest flowers o’ the season are the carnations
        <br><br>- William Shakespeare`
      },
      { naam: "Boekweit", icoon: "icons/Boekweit.png", map: "Zaden", 
        quote: `Buckwheat is the food of the simple man
        <br><br>- Lev Tolstoy`
      }
    ]
  },
  {
    input: ["Oercaryophyllales", "Duinen"],
    tijd: 30_000_000,
    output: [
      { naam: "Anjers", icoon: "icons/Anjers.png", map: "Bloemen", 
        quote: `The fairest flowers o’ the season are the carnations
        <br><br>- William Shakespeare`
      }
    ]
  },
  {
    input: ["Oercaryophyllales", "Weide"],
    hint: `Sommige caryophyllales voelen zich thuis in de grasweides.`,
    tijd: 30_000_000,
    output: [
      { naam: "Spinazie", icoon: "icons/Spinazie.png", map: "Groenten", 
        quote: `Spinach stands in our culture for what is green, clean, and strengthening
        <br><br>- Michael Pollan`
      },
      { naam: "Bieten", icoon: "icons/Bieten.png", map: "Groenten", 
        quote: `Sugar extracted from the beet has altered the economics of agriculture in temperate lands
        <br><br>- George Marsh`
      },
      { naam: "Anjers", icoon: "icons/Anjers.png", map: "Bloemen", 
        quote: `The fairest flowers o’ the season are the carnations
        <br><br>- William Shakespeare`
      },
      { naam: "Boekweit", icoon: "icons/Boekweit.png", map: "Zaden", 
        quote: `Buckwheat is the food of the simple man
        <br><br>- Lev Tolstoy`
      }
    ]
  },
  {
    input: ["Oercaryophyllales", "Steppe"],
    hint: `Sommige caryophyllales voelen zich thuis op de steppe.`,
    tijd: 30_000_000,
    output: [
      { naam: "Boekweit", icoon: "icons/Boekweit.png", map: "Zaden", 
        quote: `Buckwheat is the food of the simple man
        <br><br>- Lev Tolstoy`
      },
      { naam: "Rabarber", icoon: "icons/Rabarber.png", map: "Groenten", 
        quote: `Rhubarb is valued both for its root in medicine and its leafstalks in food
        <br><br>- John Gerard`
      }
    ]
  },
  {
    input: ["Oerasteriden", "Evolutie"],
    hint: `Vergeet niet hoeveel soorten wel niet voortkomen uit de voorouderlijke asteriden.`,
    output: [
      { naam: "Oerericales", icoon: "icons/Oerericales.png", map: "Planten", 
        quote: `The Ericales are a morphologically diverse order characterized by frequent adaptations to nutrient-poor 
        and acidic soils, often including evergreen shrubs with ericoid leaves
        <br><br>- K.A. Kron`
      },
      { naam: "Oerlamiden", icoon: "icons/Oerlamiden.png", map: "Planten", 
        quote: `The Lamiales are characterized by a predominance of sympetalous flowers, often bilaterally symmetrical, 
        and a tendency toward specialized pollination systems
        <br><br>- Richard Olmstead`
      },
      { naam: "Oercampanuliden", icoon: "icons/Oercampanuliden.png", map: "Planten", 
        quote: `The campanulid clade contains numerous lineages with highly modified flowers, often exhibiting reduced 
        perianth parts and adaptations to specialized pollination systems
        <br><br>- P.F. Stevens`
      },
      { naam: "Hortensia", icoon: "icons/Hortensia.png", map: "Bloemen", 
        quote: `Hydrangeas change colour with the soil, a most curious and pleasing effect
        <br><br>- Christopher Lloyd`
      }
    ]
  },
  {
    input: [
      ["Oerasteriden", "Bloem"], ["Oerasteriden", "Bos"]
    ],
    hint: `Sommige asteriden volgen een aparte lijn van bekende bosbloemen.`,
    output: [
      { naam: "Hortensia", icoon: "icons/Hortensia.png", map: "Bloemen", 
        quote: `Hydrangeas change colour with the soil, a most curious and pleasing effect
        <br><br>- Christopher Lloyd`
      }
    ]
  },
  {
    input: ["Steppe", "Oermonocotylen"],
    hint: `Sommige monocotylen voelen zich thuis op de steppe.`,
    tijd: 15_000_000,
    output: [
      { naam: "Tulpen", icoon: "icons/Tulpen.png", map: "Bloemen", 
        quote: `Tulips open with the light of spring, their petals responding directly to warmth and sun
        <br><br>- Elizabeth Murray`
      },
      { naam: "Irissen", icoon: "icons/Irissen.png", map: "Bloemen", 
        quote: `The iris flower rises on a slender stem, its petals unfolding in quiet symmetry above sword-like leaves
        <br><br>- W.J. Bean`
      }
    ]
  },
  {
    input: [
      ["Pinguïns", "Dood"], ["Ganzen", "Dood"], ["Zwanen", "Dood"], ["Kraaien", "Dood"], ["Papegaaien", "Dood"]
    ],
    hint: `Verdriet is een complexe emotie die veel vraagt van sociale dieren.`,
    output: [
      { naam: "Verdriet", icoon: "icons/Verdriet.png", map: "Brein", 
        quote: `A feeling of sadness and longing, that is not akin to pain, and resembles sorrow only, as the mist
        resembles the rain
        <br><br>- Henry Longfellow`
      }
    ]
  },
  {
    input: [
      ["Pinguïns", "Vreugde"], ["Arenden", "Vreugde"], ["Ganzen", "Vreugde"], ["Zwanen", "Vreugde"], 
      ["Flamingo", "Vreugde"], ["Fazanten", "Vreugde"], ["Kraaien", "Vreugde"], ["Pauwen", "Vreugde"], 
      ["Papegaaien", "Vreugde"]
    ],
    hint: `Voor wie het zo ervaart mag trots zijn op het eten.`,
    output: [
      { naam: "Trots", icoon: "icons/Trots.png", map: "Brein", 
        quote: `It's a fine thing to rise above pride, but you must have pride in order to do so
        <br><br>- Georges Bernanos`
      }
    ]
  },
  {
    input: [
      ["Pinguïns", "Pinguïns"], ["Duiven", "Duiven"], ["Eenden", "Eenden"], ["Ganzen", "Ganzen"], ["Zwanen", "Zwanen"],
      ["Zwaluwen", "Zwaluwen"], ["Spreeuwen", "Spreeuwen"], ["Ooievaars", "Ooievaars"], ["Meeuwen", "Meeuwen"],
      ["Papegaaiduikers", "Papegaaiduikers"], ["Aalscholvers", "Aalscholvers"], ["Flamingo", "Flamingo"], 
      ["Mussen", "Mussen"], ["Vinken", "Vinken"], ["Kieviten", "Kieviten"]
    ],
    hint: `Van de grote dieren zijn er ook die liever samen leven.`,
    output: [
      { naam: "Gemeenschap", icoon: "icons/Gemeenschap.png", map: "Samenleving", 
        quote: `Small communities grow great through harmony, great ones fall to pieces through discord
        <br><br>- Sallust`
      }
    ]
  },
  {
    input: [
      ["Kippen", "Hiërarchie"], ["Fazanten", "Hiërarchie"], ["Kraaien", "Hiërarchie"], ["Pauwen", "Hiërarchie"],
      ["Papegaaien", "Hiërarchie"]
    ],
    hint: `Met hiërarchie komt ook een nieuwe emotie vrij bij hen die er last van hebben.`,
    output: [
      { naam: "Jaloezie", icoon: "icons/Jaloezie.png", map: "Brein", 
        quote: `Envy is the art of counting the other fellow's blessings instead of your own
        <br><br>- Harold Coffin`
      }
    ]
  },
  {
    input: [
      ["Kippen", "Kippen"], ["Fazanten", "Fazanten"], ["Pauwen", "Pauwen"]
    ],
    output: [
      { naam: "Drift", icoon: "icons/Drift.png", map: "Brein", 
        quote: `Desire and force between them are responsible for all our actions; desire causes our voluntary acts,
        force our involuntary
        <br><br>- Blaise Pascal`
      },
      { naam: "Jaloezie", icoon: "icons/Jaloezie.png", map: "Brein", 
        quote: `Envy is the art of counting the other fellow's blessings instead of your own
        <br><br>- Harold Coffin`
      }
    ]
  },
  {
    input: [
      ["Kraaien", "Kraaien"], ["Papegaaien", "Papegaaien"]
    ],
    output: [
      { naam: "Drift", icoon: "icons/Drift.png", map: "Brein", 
        quote: `Desire and force between them are responsible for all our actions; desire causes our voluntary acts,
        force our involuntary
        <br><br>- Blaise Pascal`
      },
      { naam: "Jaloezie", icoon: "icons/Jaloezie.png", map: "Brein", 
        quote: `Envy is the art of counting the other fellow's blessings instead of your own
        <br><br>- Harold Coffin`
      },
      { naam: "Gemeenschap", icoon: "icons/Gemeenschap.png", map: "Samenleving", 
        quote: `Small communities grow great through harmony, great ones fall to pieces through discord
        <br><br>- Sallust`
      }
    ]
  },
  {
    input: [
      ["Suikerriet", "Ster"], ["Suikerriet", "Licht"], ["Suikerriet", "Fotosynthese"]
    ],
    hint: `In hun sappige stengels verwerkt suikerriet met behulp van de zon hun glucose tot sacharose.`,
    tijd: 4_000_000,
    output: [
      { naam: "Suiker", icoon: "icons/Suiker.png", map: "Genotwaren", 
        quote: `Sugar is a substance that has taken hold of the modern world like a drug
        <br><br>- William Dufty`
      }
    ]
  },
  {
    input: ["map:Granen", "Archaeopteryx"],
    hint: `Sommige archaeopteryx doen zich tegoed aan granen en zaadjes`,
    tijd: 10_000_000,
    output: [
      { naam: "Mussen", icoon: "icons/Mussen.png", map: "Vogels", 
        quote: `A sparrow hops - and the quiet of the garden is suddenly complete
        <br><br>- Kobayashi Issa`
      }
    ]
  },
  {
    input: ["Oerfagales", "Berg"],
    hint: `Sommige fagales voelen zich thuis in bergachtig gebied.`,
    tijd: 50_000_000,
    output: [
      { naam: "Walnoten", icoon: "icons/Walnoten.png", map: "Zaden", 
        quote: `The walnut carries strength within a guarded shell
        <br><br>- John Ruskin`
      },
      { naam: "Elzen", icoon: "icons/Elzen.png", map: "Bomen", 
        quote: `Alders are the silent pioneers of wet ground and riverbanks
        <br><br>- Richard Mabey`
      },
      { naam: "Berken", icoon: "icons/Berken.png", map: "Bomen", 
        quote: `The birch is the emblem of the northern wilderness
        <br><br>- Henry Thoreau`
      }
    ]
  },
  {
    input: [
      ["Oerfagales", "Ven"], ["Oerfagales", "Rivier"], ["Oerfagales", "Moeras"]
    ],
    hint: `Sommige fagales voelen zich thuis bij waterige grond.`,
    tijd: 50_000_000,
    output: [
      { naam: "Elzen", icoon: "icons/Elzen.png", map: "Bomen", 
        quote: `Alders are the silent pioneers of wet ground and riverbanks
        <br><br>- Richard Mabey`
      },
      { naam: "Berken", icoon: "icons/Berken.png", map: "Bomen", 
        quote: `The birch is the emblem of the northern wilderness
        <br><br>- Henry Thoreau`
      }
    ]
  },
  {
    input: ["Oerfagales", "Wind"],
    tijd: 50_000_000,
    output: [
      { naam: "Elzen", icoon: "icons/Elzen.png", map: "Bomen", 
        quote: `Alders are the silent pioneers of wet ground and riverbanks
        <br><br>- Richard Mabey`
      },
      { naam: "Berken", icoon: "icons/Berken.png", map: "Bomen", 
        quote: `The birch is the emblem of the northern wilderness
        <br><br>- Henry Thoreau`
      },
      { naam: "Hazelaars", icoon: "icons/Hazelaars.png", map: "Zaden", 
        quote: `The hazel is the tree of wisdom and poetic inspiration
        <br><br>- Robert Graves`
      },
      { naam: "Beuken", icoon: "icons/Beuken.png", map: "Bomen", 
        quote: `Beech woods are remarkable for their smooth trunks and noble height
        <br><br>- Gilbert White`
      }
    ]
  },
  {
    input: ["Oerfagales", "Zaadjes"],
    tijd: 50_000_000,
    output: [
      { naam: "Hazelnoten", icoon: "icons/Hazelnoten.png", map: "Zaden", 
        quote: `The hazel is the tree of wisdom and poetic inspiration
        <br><br>- Robert Graves`
      },
      { naam: "Kastanjes", icoon: "icons/Kastanjes.png", map: "Zaden", 
        quote: `Under the spreading chestnut tree, I sold you and you sold me
        <br><br>- George Orwell`
      },
      { naam: "Eiken", icoon: "icons/Eiken.png", map: "Bomen", 
        quote: `The mighty oak was once a little nut
        <br><br>- Alfred Tennyson`
      },
      { naam: "Walnoten", icoon: "icons/Walnoten.png", map: "Zaden", 
        quote: `The walnut carries strength within a guarded shell
        <br><br>- John Ruskin`
      }
    ]
  },
  {
    input: ["Oerfagales", "Bos"],
    hint: `Veel fagales voelen zich thuis in het bos en creëren tezamen grote loofbossen.`,
    tijd: 50_000_000,
    output: [
      { naam: "Beuken", icoon: "icons/Beuken.png", map: "Bomen", 
        quote: `Beech woods are remarkable for their smooth trunks and noble height
        <br><br>- Gilbert White`
      },
      { naam: "Eiken", icoon: "icons/Eiken.png", map: "Bomen", 
        quote: `The mighty oak was once a little nut
        <br><br>- Alfred Tennyson`
      },
      { naam: "Kastanjes", icoon: "icons/Kastanjes.png", map: "Zaden", 
        quote: `Under the spreading chestnut tree, I sold you and you sold me
        <br><br>- George Orwell`
      },
      { naam: "Berken", icoon: "icons/Berken.png", map: "Bomen", 
        quote: `The birch is the emblem of the northern wilderness
        <br><br>- Henry Thoreau`
      },
      { naam: "Hazelnoten", icoon: "icons/Hazelnoten.png", map: "Zaden", 
        quote: `The hazel is the tree of wisdom and poetic inspiration
        <br><br>- Robert Graves`
      }
    ]
  },
  {
    input: ["Oerericales", "Berg"],
    hint: `Sommige ericales voelen zich thuis in de bergen.`,
    tijd: 40_000_000,
    output: [
      { naam: "Theeplanten", icoon: "icons/Theeplanten.png", map: "Genotwaren", 
        quote: `Tea is a religion of the art of life
        <br><br>- Okakura Kakuzo`
      },
      { naam: "Bosbessen", icoon: "icons/Bosbessen.png", map: "Fruit", 
        quote: `I have been in the woods all afternoon, and my body has become a simple thing, tasting berries and
        listening
        <br><br>- Mary Oliver`
      }
    ]
  },
  {
    input: [
      ["Oerericales", "Zand"], ["Oerericales", "Duinen"], ["Oerericales", "Gras"], ["Oerericales", "Weide"]
    ],
    hint: `Sommige ericales voelen zich thuis in de zanderige duinen.`,
    tijd: 40_000_000,
    output: [
      { naam: "Heide", icoon: "icons/Heide.png", map: "Planten", 
        quote: `The heather spreads like a purple sea across the hills
        <br><br>- W.H. Hudson`
      }
    ]
  },
  {
    input: ["Oerericales", "Woestijn"],
    hint: `Sommige ericales voelen zich thuis in de woestijn.`,
    tijd: 5_000_000,
    output: [
      { naam: "Arganbomen", icoon: "icons/Arganbomen.png", map: "Bomen", 
        quote: `The argan tree gives us oil, shade, and life in a difficult land
        <br><br>- Fatima Tihihit`
      }
    ]
  },
  {
    input: [
      ["Oerericales", "Glucose"], ["Oerericales", "Bos"]
    ],
    hint: `Sommige ericales leven in de bossen en richten zich op hun vruchten.`,
    tijd: 5_000_000,
    output: [
      { naam: "Kaki", icoon: "icons/Kaki.png", map: "Fruit", 
        quote: `Even a persimmon is enough for a small life of contentment
        <br><br>- Kobayashi Issa`
      },
      { naam: "Kiwi", icoon: "icons/Kiwi.png", map: "Fruit", 
        quote: `The vine of the kiwifruit requires patience but rewards abundance
        <br><br>- Barbara Platts`
      },
      { naam: "Bosbessen", icoon: "icons/Bosbessen.png", map: "Fruit", 
        quote: `I have been in the woods all afternoon, and my body has become a simple thing, tasting berries and
        listening
        <br><br>- Mary Oliver`
      }
    ]
  },
  {
    input: [
      ["Oerericales", "Gif"], ["Oerericales", "Blad"]
    ],
    hint: `Sommige ericales kiezen voor de strategie van het gif.`,
    output: [
      { naam: "Theeplanten", icoon: "icons/Theeplanten.png", map: "Genotwaren", 
        quote: `Tea is a religion of the art of life
        <br><br>- Okakura Kakuzo`
      }
    ]
  },
  {
    input: ["Oerericales", "Hout"],
    tijd: 5_000_000,
    output: [
      { naam: "Arganbomen", icoon: "icons/Arganbomen.png", map: "Bomen", 
        quote: `The argan tree gives us oil, shade, and life in a difficult land
        <br><br>- Fatima Tihihit`
      },
      { naam: "Sheabomen", icoon: "icons/Sheabomen.png", map: "Bomen", 
        quote: `Vitellaria paradoxa is a long-lived tree of the dry savanna, deeply adapted to fire and drought
        <br><br>- Daniel Hall`
      }
    ]
  },
  {
    input: ["Oerericales", "Tropisch regenwoud"],
    hint: `Sommige ericales voelen zich thuis in het tropische Amazonewoud.`,
    tijd: 15_000_000,
    output: [
      { naam: "Paranoten", icoon: "icons/Paranoten.png", map: "Zaden", 
        quote: `Brazil nut trees are among the most important non-timber forest products of the Amazon
        <br><br>- T.H. Hollowell`
      }
    ]
  },
  {
    input: [
      ["Oerericales", "Vlinders"], ["Oerericales", "Bijen"]
    ],
    tijd: 40_000_000,
    output: [
      { naam: "Heide", icoon: "icons/Heide.png", map: "Planten", 
        quote: `The heather spreads like a purple sea across the hills
        <br><br>- W.H. Hudson`
      },
      { naam: "Theeplanten", icoon: "icons/Theeplanten.png", map: "Genotwaren", 
        quote: `Tea is a religion of the art of life
        <br><br>- Okakura Kakuzo`
      },
      { naam: "Bosbessen", icoon: "icons/Bosbessen.png", map: "Fruit", 
        quote: `I have been in the woods all afternoon, and my body has become a simple thing, tasting berries and
        listening
        <br><br>- Mary Oliver`
      }
    ]
  },
  {
    input: ["Oerericales", "Savanne"],
    hint: `Sommige ericales voelen zich thuis op de savanne.`,
    tijd: 5_000_000,
    output: [
      { naam: "Sheabomen", icoon: "icons/Sheabomen.png", map: "Bomen", 
        quote: `Vitellaria paradoxa is a long-lived tree of the dry savanna, deeply adapted to fire and drought
        <br><br>- Daniel Hall`
      }
    ]
  },
  {
    input: [
      ["Oerericales", "Wilgen"], ["Oerericales", "Populieren"], ["Oerericales", "Esdoorns"], ["Oerericales", "Eiken"],
      ["Oerericales", "Essen"]
    ],
    tijd: 5_000_000,
    output: [
      { naam: "Kiwi", icoon: "icons/Kiwi.png", map: "Fruit", 
        quote: `The vine of the kiwifruit requires patience but rewards abundance
        <br><br>- Barbara Platts`
      }
    ]
  },
  {
    input: ["Oerlamiden", "Water"],
    tijd: 5_000_000,
    output: [
      { naam: "Tomaten", icoon: "icons/Groenten.png", map: "Groenten", 
        quote: `A ripe tomato is one of the simplest and greatest pleasures of eating
        <br><br>- Alice Waters`
      }
    ]
  },
  {
    input: ["Oerlamiden", "Berg"],
    hint: `Sommige lamiden voelen zich thuis in de bergen.`,
    tijd: 3_000_000,
    output: [
      { naam: "Oregano", icoon: "icons/Oregano.png", map: "Smaakmakers", 
        quote: `Oregano is the taste of the Mediterranean itself
        <br><br>- Elizabeth David`
      },
      { naam: "Aardappels", icoon: "icons/Aardappels.png", map: "Groenten", 
        quote: `The potato is a most valuable root for sustenance
        <br><br>- James Boswell`
      },
      { naam: "Salie", icoon: "icons/Salie.png", map: "Smaakmakers", 
        quote: `Sage is singularly good for the head and brain
        <br><br>- Nicholas Culpeper`
      },
      { naam: "Jasmijn", icoon: "icons/Jasmijn.png", map: "Genotwaren", 
        quote: `Jasmine opens in the night like a secret
        <br><br>- Adonis`
      },
      { naam: "Tomaten", icoon: "icons/Groenten.png", map: "Groenten", 
        quote: `A ripe tomato is one of the simplest and greatest pleasures of eating
        <br><br>- Alice Waters`
      }
    ]
  },
  {
    input: ["Oerlamiden", "Wind"],
    tijd: 40_000_000,
    output: [
      { naam: "Essen", icoon: "icons/Essen.png", map: "Bomen", 
        quote: `The ash stands by the water and shapes the land around it
        <br><br>- William Morris`
      }
    ]
  },
  {
    input: [
      ["Oerlamiden", "Ven"], ["Oerlamiden", "Moeras"]
    ],
    hint: `Sommige lamiden voelen zich thuis bij stilstaand water.`,
    tijd: 25_000_000,
    output: [
      { naam: "Essen", icoon: "icons/Essen.png", map: "Bomen", 
        quote: `The ash stands by the water and shapes the land around it
        <br><br>- William Morris`
      },
      { naam: "Munt", icoon: "icons/Munt.png", map: "Smaakmakers", 
        quote: `Fresh mint transforms the simplest dish into something alive
        <br><br>- Julia Child`
      }
    ]
  },
  {
    input: [
      ["Oerlamiden", "Kust"], ["Oerlamiden", "Zout"]
    ],
    hint: `Sommige lamiden voelen zich thuis aan de kust.`,
    tijd: 25_000_000,
    output: [
      { naam: "Olijven", icoon: "icons/Olijven.png", map: "Fruit", 
        quote: `The olive is a gift of the gods to man
        <br><br>- Homeros`
      },
      { naam: "Lavendel", icoon: "icons/Lavendel.png", map: "Genotwaren", 
        quote: `The hills were covered with lavender, stretching like a purple sea
        <br><br>- Peter Mayle`
      }
    ]
  },
  {
    input: ["Oerlamiden", "Rivier"],
    hint: `Sommige lamiden voelen zich thuis bij rivieroevers.`,
    tijd: 5_000_000,
    output: [
      { naam: "Munt", icoon: "icons/Munt.png", map: "Smaakmakers", 
        quote: `Fresh mint transforms the simplest dish into something alive
        <br><br>- Julia Child`
      },
      { naam: "Basilicum", icoon: "icons/Basilicum.png", map: "Smaakmakers", 
        quote: `Without basil, Italian cooking loses its soul
        <br><br>- Marcella Hazen`
      }
    ]
  },
  {
    input: ["Oerlamiden", "Kalk"],
    hint: `Sommige lamiden houden van een kalkrijke grond.`,
    tijd: 20_000_000,
    output: [
      { naam: "Tijm", icoon: "icons/Tijm.png", map: "Smaakmakers", 
        quote: `Thyme comforts the head and strengthens the senses
        <br><br>- William Turner`
      }
    ]
  },
  {
    input: ["Oerlamiden", "Glucose"],
    tijd: 3_000_000,
    output: [
      { naam: "Zoete aardappelen", icoon: "icons/Zoete aardappelen.png", map: "Groenten", 
        quote: `The sweet potato is part of the ancient food heritage of the Andes
        <br><br>- Carlos Ochoa`
      },
      { naam: "Aardappels", icoon: "icons/Aardappels.png", map: "Groenten", 
        quote: `The potato is a most valuable root for sustenance
        <br><br>- James Boswell`
      },
      { naam: "Tomaten", icoon: "icons/Groenten.png", map: "Groenten", 
        quote: `A ripe tomato is one of the simplest and greatest pleasures of eating
        <br><br>- Alice Waters`
      },
      { naam: "Paprika", icoon: "icons/Paprika.png", map: "Groenten", 
        quote: `Peppers show how a wild plant becomes a domestic staple through selection for flavor and form
        <br><br>- Michael Pollan`
      }
    ]
  },
  {
    input: ["Oerlamiden", "Gif"],
    hint: `Sommige lamiden kiezen voor de strategie van gif.`,
    tijd: 3_000_000,
    output: [
      { naam: "Tabaksplanten", icoon: "icons/Tabaksplanten.png", map: "Genotwaren", 
        quote: `The herb which the inhabitants call uppowoc is of great estimation among them
        <br><br>- Thomas Hariot`
      },
      { naam: "Aardappels", icoon: "icons/Aardappels.png", map: "Groenten", 
        quote: `The potato is a most valuable root for sustenance
        <br><br>- James Boswell`
      },
      { naam: "Chilipepers", icoon: "icons/Chilipepers.png", map: "Smaakmakers", 
        quote: `The chili pepper transformed human experience of flavor through pain and heat
        <br><br>- Michael Pollan`
      },
      { naam: "Koffieplanten", icoon: "icons/Koffieplanten.png", map: "Genotwaren", 
        quote: `Coffee has shaped societies, economies, and daily habits across the globe
        <br><br>- Mark Pendergrast`
      }
    ]
  },
  {
    input: ["Oerlamiden", "Wortels"],
    hint: `Sommige lamiden concentreren zich op hun wortels.`,
    tijd: 3_000_000,
    output: [
      { naam: "Aardappels", icoon: "icons/Aardappels.png", map: "Groenten", 
        quote: `The potato is a most valuable root for sustenance
        <br><br>- James Boswell`
      },
      { naam: "Zoete aardappelen", icoon: "icons/Zoete aardappelen.png", map: "Groenten", 
        quote: `The sweet potato is part of the ancient food heritage of the Andes
        <br><br>- Carlos Ochoa`
      }
    ]
  },
  {
    input: ["Oerlamiden", "Blad"],
    tijd: 20_000_000,
    output: [
      { naam: "Munt", icoon: "icons/Munt.png", map: "Smaakmakers", 
        quote: `Fresh mint transforms the simplest dish into something alive
        <br><br>- Julia Child`
      },
      { naam: "Salie", icoon: "icons/Salie.png", map: "Smaakmakers", 
        quote: `Sage is singularly good for the head and brain
        <br><br>- Nicholas Culpeper`
      },
      { naam: "Basilicum", icoon: "icons/Basilicum.png", map: "Smaakmakers", 
        quote: `Without basil, Italian cooking loses its soul
        <br><br>- Marcella Hazen`
      },
      { naam: "Oregano", icoon: "icons/Oregano.png", map: "Smaakmakers", 
        quote: `Oregano is the taste of the Mediterranean itself
        <br><br>- Elizabeth David`
      }
    ]
  },
  {
    input: ["Oerlamiden", "Zaadjes"],
    tijd: 15_000_000,
    output: [
      { naam: "Sesam", icoon: "icons/Sesam.png", map: "Zaden", 
        quote: `Sesam is one of the oldest oilseed crops known to cultivation
        <br><br>- George Watt`
      },
      { naam: "Koffieplanten", icoon: "icons/Koffieplanten.png", map: "Genotwaren", 
        quote: `Coffee has shaped societies, economies, and daily habits across the globe
        <br><br>- Mark Pendergrast`
      }
    ]
  },
  {
    input: ["Oerlamiden", "Hout"],
    tijd: 10_000_000,
    output: [
      { naam: "Teak", icoon: "icons/Teak.png", map: "Bomen", 
        quote: `Teak thrives in tropical forests where seasonal rains shape its growth
        <br><br>- Hugh Cleghorn`
      },
      { naam: "Olijven", icoon: "icons/Olijven.png", map: "Fruit", 
        quote: `The olive is a gift of the gods to man
        <br><br>- Homeros`
      },
      { naam: "Essen", icoon: "icons/Essen.png", map: "Bomen", 
        quote: `The ash stands by the water and shapes the land around it
        <br><br>- William Morris`
      }
    ]
  },
  {
    input: ["Oerlamiden", "Bos"],
    hint: `Sommige lamiden voelen zich thuis in de bossen.`,
    tijd: 40_000_000,
    output: [
      { naam: "Essen", icoon: "icons/Essen.png", map: "Bomen", 
        quote: `The ash stands by the water and shapes the land around it
        <br><br>- William Morris`
      }
    ]
  },
  {
    input: ["Oerlamiden", "Tropisch regenwoud"],
    hint: `Sommige lamiden voelen zich thuis in het tropisch regenwoud.`,
    tijd: 5_000_000,
    output: [
      { naam: "Teak", icoon: "icons/Teak.png", map: "Bomen", 
        quote: `Teak thrives in tropical forests where seasonal rains shape its growth
        <br><br>- Hugh Cleghorn`
      },
      { naam: "Koffieplanten", icoon: "icons/Koffieplanten.png", map: "Genotwaren", 
        quote: `Coffee has shaped societies, economies, and daily habits across the globe
        <br><br>- Mark Pendergrast`
      },
      { naam: "Tabaksplanten", icoon: "icons/Tabaksplanten.png", map: "Genotwaren", 
        quote: `The herb which the inhabitants call uppowoc is of great estimation among them
        <br><br>- Thomas Hariot`
      },
      { naam: "Basilicum", icoon: "icons/Basilicum.png", map: "Smaakmakers", 
        quote: `Without basil, Italian cooking loses its soul
        <br><br>- Marcella Hazen`
      },
      { naam: "Aubergines", icoon: "icons/Aubergines.png", map: "Groenten", 
        quote: `The aubergine is a vegetable which absorbs flavors like a sponge
        <br><br>- Elizabeth David`
      }
    ]
  },
  {
    input: ["Oerlamiden", "Vlinders"],
    tijd: 20_000_000,
    output: [
      { naam: "Lavendel", icoon: "icons/Lavendel.png", map: "Genotwaren", 
        quote: `The hills were covered with lavender, stretching like a purple sea
        <br><br>- Peter Mayle`
      },
      { naam: "Jasmijn", icoon: "icons/Jasmijn.png", map: "Genotwaren", 
        quote: `Jasmine opens in the night like a secret
        <br><br>- Adonis`
      },
      { naam: "Salie", icoon: "icons/Salie.png", map: "Smaakmakers", 
        quote: `Sage is singularly good for the head and brain
        <br><br>- Nicholas Culpeper`
      },
      { naam: "Tijm", icoon: "icons/Tijm.png", map: "Smaakmakers", 
        quote: `Thyme comforts the head and strengthens the senses
        <br><br>- William Turner`
      }
    ]
  },
  {
    input: ["Oerlamiden", "Bijen"],
    tijd: 20_000_000,
    output: [
      { naam: "Lavendel", icoon: "icons/Lavendel.png", map: "Genotwaren", 
        quote: `The hills were covered with lavender, stretching like a purple sea
        <br><br>- Peter Mayle`
      },
      { naam: "Jasmijn", icoon: "icons/Jasmijn.png", map: "Genotwaren", 
        quote: `Jasmine opens in the night like a secret
        <br><br>- Adonis`
      },
      { naam: "Koffieplanten", icoon: "icons/Koffieplanten.png", map: "Genotwaren", 
        quote: `Coffee has shaped societies, economies, and daily habits across the globe
        <br><br>- Mark Pendergrast`
      }
    ]
  },
  {
    input: ["Oerlamiden", "Duinen"],
    tijd: 20_000_000,
    output: [
      { naam: "Tijm", icoon: "icons/Tijm.png", map: "Smaakmakers", 
        quote: `Thyme comforts the head and strengthens the senses
        <br><br>- William Turner`
      },
      { naam: "Oregano", icoon: "icons/Oregano.png", map: "Smaakmakers", 
        quote: `Oregano is the taste of the Mediterranean itself
        <br><br>- Elizabeth David`
      }
    ]
  },
  {
    input: ["Oerlamiden", "Weide"],
    hint: `Sommige lamiden voelen zich thuis op de grasweides.`,
    tijd: 20_000_000,
    output: [
      { naam: "Lavendel", icoon: "icons/Lavendel.png", map: "Genotwaren", 
        quote: `The hills were covered with lavender, stretching like a purple sea
        <br><br>- Peter Mayle`
      },
      { naam: "Tijm", icoon: "icons/Tijm.png", map: "Smaakmakers", 
        quote: `Thyme comforts the head and strengthens the senses
        <br><br>- William Turner`
      },
      { naam: "Salie", icoon: "icons/Salie.png", map: "Smaakmakers", 
        quote: `Sage is singularly good for the head and brain
        <br><br>- Nicholas Culpeper`
      },
      { naam: "Oregano", icoon: "icons/Oregano.png", map: "Smaakmakers", 
        quote: `Oregano is the taste of the Mediterranean itself
        <br><br>- Elizabeth David`
      }
    ]
  },
  {
    input: ["Oerlamiden", "Steppe"],
    hint: `Sommige lamiden voelen zich thuis op de steppe.`,
    tijd: 15_000_000,
    output: [
      { naam: "Salie", icoon: "icons/Salie.png", map: "Smaakmakers", 
        quote: `Sage is singularly good for the head and brain
        <br><br>- Nicholas Culpeper`
      },
      { naam: "Tijm", icoon: "icons/Tijm.png", map: "Smaakmakers", 
        quote: `Thyme comforts the head and strengthens the senses
        <br><br>- William Turner`
      },
      { naam: "Oregano", icoon: "icons/Oregano.png", map: "Smaakmakers", 
        quote: `Oregano is the taste of the Mediterranean itself
        <br><br>- Elizabeth David`
      },
      { naam: "Sesam", icoon: "icons/Sesam.png", map: "Zaden", 
        quote: `Sesam is one of the oldest oilseed crops known to cultivation
        <br><br>- George Watt`
      }
    ]
  },
  {
    input: [
      ["Oerlamiden", "Laurierbomen"], ["Oerlamiden", "Buxus"], ["Oerlamiden", "Vijgen"], ["Oerlamiden", "Acacia"],
      ["Oerlamiden", "Heide"], ["Oerlamiden", "Olijven"]
    ],
    tijd: 40_000_000,
    output: [
      { naam: "Jasmijn", icoon: "icons/Jasmijn.png", map: "Genotwaren", 
        quote: `Jasmine opens in the night like a secret
        <br><br>- Adonis`
      }
    ]
  },
  {
    input: ["Oercampanuliden", "Water"],
    tijd: 2_000_000,
    output: [
      { naam: "Selderij", icoon: "icons/Selderij.png", map: "Groenten", 
        quote: `Celery gives depth to simple broths and stews
        <br><br>- Elizabeth David`
      },
      { naam: "Sla", icoon: "icons/Sla.png", map: "Groenten", 
        quote: `A salad without lettuce is like a day without sunshine
        <br><br>- Jean Brillat-Savarin`
      },
      { naam: "Andijvie", icoon: "icons/Andijvie.png", map: "Groenten", 
        quote: `The faint bitterness of endive sharpens the appetite
        <br><br>- M.F.K. Fisher`
      }
    ]
  },
  {
    input: ["Oercampanuliden", "Berg"],
    hint: `Sommige campanuliden voelen zich thuis in de bergen.`,
    tijd: 2_000_000,
    output: [
      { naam: "Paardenbloemen", icoon: "icons/Paardenbloemen.png", map: "Bloemen", 
        quote: `The dandelion is one of the commonest and yet most welcome of spring flowers
        <br><br>- John Burroughs`
      },
      { naam: "Madeliefjes", icoon: "icons/Madeliefjes.png", map: "Bloemen", 
        quote: `The common daisy and meadow flowers spread their cheerful face
        <br><br>- William Wordsworth`
      },
      { naam: "Margrieten", icoon: "icons/Margrieten.png", map: "Bloemen", 
        quote: `The ox-eye daisy fills the summer fields with a quiet brightness
        <br><br>- Richard Jefferies`
      }
    ]
  },
  {
    input: ["Oercampanuliden", "Klei"],
    hint: `Sommige campanuliden doen het goed met hun poten in de klei.`,
    tijd: 2_000_000,
    output: [
      { naam: "Kamille", icoon: "icons/Kamille.png", map: "Genotwaren", 
        quote: `Chamomile tea is like a small act of peace
        <br><br>- M.F.K. Fisher`
      },
      { naam: "Goudsbloemen", icoon: "icons/Goudsbloemen.png", map: "Bloemen", 
        quote: `The marigold opens at the sun’s coming and shuts at his going
        <br><br>- John Gerard`
      }
    ]
  },
  {
    input: ["Oercampanuliden", "Wind"],
    hint: `Sommige campanuliden verspreiden hun zaadjes via de wind.`,
    tijd: 30_000_000,
    output: [
      { naam: "Paardenbloemen", icoon: "icons/Paardenbloemen.png", map: "Bloemen", 
        quote: `The dandelion is one of the commonest and yet most welcome of spring flowers
        <br><br>- John Burroughs`
      }
    ]
  },
  {
    input: [
      ["Oercampanuliden", "Ven"], ["Oercampanuliden", "Moeras"]
    ],
    hint: `Sommige campanuliden voelen zich thuis bij stilstaand water`,
    tijd: 2_000_000,
    output: [
      { naam: "Selderij", icoon: "icons/Selderij.png", map: "Groenten", 
        quote: `Celery gives depth to simple broths and stews
        <br><br>- Elizabeth David`
      }
    ]
  },
  {
    input: ["Oercampanuliden", "Kust"],
    hint: `Sommige campanuliden voelen zich thuis aan de kust.`,
    tijd: 2_000_000,
    output: [
      { naam: "Venkel", icoon: "icons/Venkel.png", map: "Groenten", 
        quote: `Fennel is of great use for improving sight
        <br><br>- Plinius de Oudere`
      }
    ]
  },
  {
    input: ["Oercampanuliden", "Rivier"],
    hint: `Sommige campanuliden voelen zich thuis bij de rivier.`,
    tijd: 2_000_000,
    output: [
      { naam: "Selderij", icoon: "icons/Selderij.png", map: "Groenten", 
        quote: `Celery gives depth to simple broths and stews
        <br><br>- Elizabeth David`
      },
      { naam: "Wortelen", icoon: "icons/Wortelen.png", map: "Groenten", 
        quote: `Carrots store their energy in the root, which becomes sweeter over time
        <br><br>- Harold McGee`
      }
    ]
  },
  {
    input: ["Oercampanuliden", "Gif"],
    hint: `Sommige campanuliden kiezen voor de strategie van gif.`,
    tijd: 25_000_000,
    output: [
      { naam: "Chrysanten", icoon: "icons/Chrysanten.png", map: "Bloemen", 
        quote: `The flower that lasts into the fading year carries a nobler kind of beauty.
        <br><br>- John Ruskin`
      }
    ]
  },
  {
    input: ["Oercampanuliden", "Wortels"],
    tijd: 20_000_000,
    output: [
      { naam: "Wortelen", icoon: "icons/Wortelen.png", map: "Groenten", 
        quote: `Carrots store their energy in the root, which becomes sweeter over time
        <br><br>- Harold McGee`
      }
    ]
  },
  {
    input: ["Oercampanuliden", "Blad"],
    hint: `Sommige campanuliden specialiseren zich in hun bladeren.`,
    tijd: 2_000_000,
    output: [
      { naam: "Sla", icoon: "icons/Sla.png", map: "Groenten", 
        quote: `A salad without lettuce is like a day without sunshine
        <br><br>- Jean Brillat-Savarin`
      },
      { naam: "Andijvie", icoon: "icons/Andijvie.png", map: "Groenten", 
        quote: `The faint bitterness of endive sharpens the appetite
        <br><br>- M.F.K. Fisher`
      },
      { naam: "Artisjokken", icoon: "icons/Artisjokken.png", map: "Groenten", 
        quote: `The artichoke is valued for its heart, hidden beneath protective bracts
        <br><br>- Alan Davidson`
      },
      { naam: "Peterselie", icoon: "icons/Peterselie.png", map: "Smaakmakers", 
        quote: `Parsley is one of the most essential herbs in European cooking
        <br><br>- Elizabeth David`
      }
    ]
  },
  {
    input: ["Oercampanuliden", "Zaadjes"],
    tijd: 2_000_000,
    output: [
      { naam: "Venkel", icoon: "icons/Venkel.png", map: "Groenten", 
        quote: `Fennel is of great use for improving sight
        <br><br>- Plinius de Oudere`
      },
      { naam: "Koriander", icoon: "icons/Koriander.png", map: "Smaakmakers", 
        quote: `Cilantro has a distinctive aroma that some people perceive as soapy
        <br><br>- Harold McGee`
      },
      { naam: "Anijs", icoon: "icons/Anijs.png", map: "Smaakmakers", 
        quote: `Anise helps ease the breath and clears the chest
        <br><br>- Dioscorides`
      },
      { naam: "Komijn", icoon: "icons/Komijn.png", map: "Smaakmakers", 
        quote: `Cumin is valued for its warming properties and strong flavor
        <br><br>- Plinius de Oudere`
      }
    ]
  },
  {
    input: ["Oercampanuliden", "Bos"],
    hint: `Sommige campanuliden voelen zich thuis in het bos.`,
    tijd: 20_000_000,
    output: [
      { naam: "Japanse kers", icoon: "icons/Japanse kers.png", map: "Bomen", 
        quote: `Cherry blossoms fall — the temple bell rings in the evening wind
        <br><br>- Yosa Buson`
      },
      { naam: "Chrysanten", icoon: "icons/Chrysanten.png", map: "Bloemen", 
        quote: `The flower that lasts into the fading year carries a nobler kind of beauty.
        <br><br>- John Ruskin`
      }
    ]
  },
  {
    input: ["Oercampanuliden", "Vlinders"],
    tijd: 2_000_000,
    output: [
      { naam: "Paardenbloemen", icoon: "icons/Paardenbloemen.png", map: "Bloemen", 
        quote: `The dandelion is one of the commonest and yet most welcome of spring flowers
        <br><br>- John Burroughs`
      },
      { naam: "Kamille", icoon: "icons/Kamille.png", map: "Genotwaren", 
        quote: `Chamomile tea is like a small act of peace
        <br><br>- M.F.K. Fisher`
      },
      { naam: "Goudsbloemen", icoon: "icons/Goudsbloemen.png", map: "Bloemen", 
        quote: `The marigold opens at the sun’s coming and shuts at his going
        <br><br>- John Gerard`
      },
      { naam: "Madeliefjes", icoon: "icons/Madeliefjes.png", map: "Bloemen", 
        quote: `The common daisy and meadow flowers spread their cheerful face
        <br><br>- William Wordsworth`
      }
    ]
  },
  {
    input: ["Oercampanuliden", "Bijen"],
    tijd: 2_000_000,
    output: [
      { naam: "Paardenbloemen", icoon: "icons/Paardenbloemen.png", map: "Bloemen", 
        quote: `The dandelion is one of the commonest and yet most welcome of spring flowers
        <br><br>- John Burroughs`
      },
      { naam: "Kamille", icoon: "icons/Kamille.png", map: "Genotwaren", 
        quote: `Chamomile tea is like a small act of peace
        <br><br>- M.F.K. Fisher`
      },
      { naam: "Koriander", icoon: "icons/Koriander.png", map: "Smaakmakers", 
        quote: `Cilantro has a distinctive aroma that some people perceive as soapy
        <br><br>- Harold McGee`
      }
    ]
  },
  {
    input: ["Oercampanuliden", "Weide"],
    hint: `Sommige campanuliden voelen zich thuis in grasweides.`,
    tijd: 2_000_000,
    output: [
      { naam: "Koriander", icoon: "icons/Koriander.png", map: "Smaakmakers", 
        quote: `Cilantro has a distinctive aroma that some people perceive as soapy
        <br><br>- Harold McGee`
      },
      { naam: "Madeliefjes", icoon: "icons/Madeliefjes.png", map: "Bloemen", 
        quote: `The common daisy and meadow flowers spread their cheerful face
        <br><br>- William Wordsworth`
      },
      { naam: "Margrieten", icoon: "icons/Margrieten.png", map: "Bloemen", 
        quote: `The ox-eye daisy fills the summer fields with a quiet brightness
        <br><br>- Richard Jefferies`
      },
      { naam: "Kamille", icoon: "icons/Kamille.png", map: "Genotwaren", 
        quote: `Chamomile tea is like a small act of peace
        <br><br>- M.F.K. Fisher`
      },
      { naam: "Paardenbloemen", icoon: "icons/Paardenbloemen.png", map: "Bloemen", 
        quote: `The dandelion is one of the commonest and yet most welcome of spring flowers
        <br><br>- John Burroughs`
      }
    ]
  },
  {
    input: ["Oercampanuliden", "Steppe"],
    hint: `Sommige campanuliden voelen zich thuis op de steppe.`,
    tijd: 2_000_000,
    output: [
      { naam: "Dille", icoon: "icons/Dille.png", map: "Smaakmakers", 
        quote: `Dill doth ease and comfort the inward parts of man
        <br><br>- John Gerard`
      },
      { naam: "Anijs", icoon: "icons/Anijs.png", map: "Smaakmakers", 
        quote: `Anise helps ease the breath and clears the chest
        <br><br>- Dioscorides`
      },
      { naam: "Venkel", icoon: "icons/Venkel.png", map: "Groenten", 
        quote: `Fennel is of great use for improving sight
        <br><br>- Plinius de Oudere`
      },
      { naam: "Komijn", icoon: "icons/Komijn.png", map: "Smaakmakers", 
        quote: `Cumin is valued for its warming properties and strong flavor
        <br><br>- Plinius de Oudere`
      }
    ]
  },
  {
    input: ["Oercampanuliden", "Prairie"],
    hint: `Sommige campanuliden voelen zich thuis op de prairie.`,
    tijd: 2_000_000,
    output: [
      { naam: "Zonnebloemen", icoon: "icons/Zonnebloemen.png", map: "Bloemen", 
        quote: `Van Gogh’s sunflowers are no longer flowers, but suns captured on canvas
        <br><br>- André Breton`
      }
    ]
  },
  {
    input: [
      ["Verdriet", "Pinguïns"], ["Verdriet", "Ganzen"], ["Verdriet", "Zwanen"], ["Verdriet", "Kraaien"],
      ["Verdriet", "Papegaaien"]
    ],
    hint: `Wat verdriet wel niet kan doen.`,
    output: [
      { naam: "Empathie", icoon: "icons/Empathie.png", map: "Brein", 
        quote: `I do not ask the wounded person how he feels, I myself become the wounded person
        <br><br>- Walt Whitman`
      }
    ]
  },
  {
    input: [
      ["Jaloezie", "Kippen"], ["Jaloezie", "Fazanten"], ["Jaloezie", "Kraaien"], ["Jaloezie", "Pauwen"],
      ["Jaloezie", "Papegaaien"]
    ],
    output: [
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
      ["Heide", "Vuur"], ["Heide", "Berg"], ["Heide", "Kust"], ["Heide", "Brand"], ["Heide", "Heuvel"], 
      ["Heide", "Bloem"], ["Heide", "Gras"], ["Heide", "Vetplanten"], ["Heide", "Aloë Vera"], ["Heide", "Gladiolen"],
      ["Heide", "Heide"]
    ],
    hint: `Het Kaapse florarijk van heidevuur en bloemen is 's werelds rijkste gebieden aan plantensoorten.`,
    output: [
      { naam: "Fynbos", icoon: "icons/Fynbos.png", map: "Landschap", 
        quote: `Fynbos is not a forest or a grassland, but a world of its own
        <br><br>- Rita Hill`
      }
    ]
  },
  {
    input: ["Fynbos", "Oerfabiden"],
    hint: `Sommige fabiden voelen zich thuis in het fynbos.`,
    tijd: 10_000_000,
    output: [
      { naam: "Rooibos", icoon: "icons/Rooibos.png", map: "Genotwaren", 
        quote: `Rooibos is uniquely South African, shaped by the harshness of the Cederberg
        <br><br>- Annelise le Roux`
      }
    ]
  },
  {
    input: ["Fynbos", "Oercampanuliden"],
    hint: `Sommige campanuliden voelen zich thuis in het fynbos.`,
    tijd: 20_000_000,
    output: [
      { naam: "Gerbera", icoon: "icons/Gerbera.png", map: "Bloemen", 
        quote: `The genus Gerbera produces flowers of remarkable brilliance
        <br><br>- William Aiton`
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
  "Smaakmakers": "icons/Smaakmakers.png",
  "Bomen": "icons/Bomen.png",
  "Reptielen": "icons/Reptielen.png",
  "Samenleving": "icons/Samenleving.png",
  "Zoogdieren": "icons/Zoogdieren.png",
  "Vogels": "icons/Vogels.png",
  "Bloemen": "icons/Bloemen.png",
  "Genotwaren": "icons/Genotwaren.png",
  "Fruit": "icons/Fruit.png",
  "Groenten": "icons/Groenten.png",
  "Materialen": "icons/Materialen.png",
  "Granen": "icons/Granen.png",
  "Zaden": "icons/Zaden.png"
};

// ----- STATE -----
let openLeft = null;
let openRight = null;
let selected = [];
let unlockedElements = new Set(["Oerknal", "Kou", "Warmte"]);
let introStep = 0;
let lastExplanation = null;
let lastExplanationIsThresholdElement = false;
let hintDeck = [];
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
const hintButton = document.getElementById("hint-button");
const hintBubble = document.getElementById("hint-bubble");

const norm = s => String(s).trim().toLowerCase();
const pairs = input => (Array.isArray(input[0]) ? input : [input]);
const inMap = n => mappen.some(m => m.elementen.some(e => norm(e.naam) === norm(n)));
const known = n =>
  unlockedElements.has(norm(n)) ||
  mappen.some(m => m.elementen.some(e => norm(e.naam) === norm(n)));

hintButton.onclick = showHint;

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
function matchElement(rule, el) {
  if (!rule || !el) return false;

  if (typeof rule !== "string") return false;

  // map support
  if (rule.startsWith("map:")) {
    const mapNaam = rule.slice(4);
    return (el.map || el.mapNaam) === mapNaam;
  }

  // normal element match
  return el.naam === rule;
}

function matchPair(set, selected) {
  const [a, b] = selected;

  return (
    matchElement(set[0], a) && matchElement(set[1], b)
  ) || (
    matchElement(set[0], b) && matchElement(set[1], a)
  );
}

function normalizeInput(input) {
  // al correct formaat
  if (Array.isArray(input[0])) return input;

  // single pair → wrap in array
  return [input];
}

function checkCombination() {
  if (selected.length < 2) return;

  const matches = combinaties.filter(c =>
    normalizeInput(c.input).some(set =>
      matchPair(set, selected)
    )
  );
  
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
    const normalizedUnlocked = [
      ...new Set([
        ...unlockedElements,
        ...mappen.flatMap(m => m.elementen.map(e => e.naam))
      ])
    ].map(e => e.trim().toLowerCase());
      
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

  const versText = firstMatch.vers || null;

  // SPECIAL THRESHOLD ELEMENT?
  const hasThreshold = !!firstMatch.uitleg?.threshold;
  const hasNormal = !!firstMatch.uitleg?.normal;
  const shouldShowInfo = !(hasThreshold && hasNormal);  
  
  renderNewElements(
    newElements,
    versText,
    firstMatch
  );
  
  lastExplanation = finalUitleg || null;
  newElements.forEach(el => unlockedElements.add(el.naam));

  refreshHintDeck();

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

// ----- VISUEEL SCHERM VOOR NIEUWE ELEMENTEN -----
function renderNewElements(elements, vers = null, thresholdOverlay = null) {
  // Verwijder bestaande overlay
  const oldOverlay = document.getElementById("result-overlay");
  if (oldOverlay) oldOverlay.remove();

  const hasThreshold = !!thresholdOverlay?.uitleg?.threshold;
  const hasNormal = !!thresholdOverlay?.uitleg?.normal;

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

    // 🔹 kleine random X + Y beweging (millimeters/subtiel)
    const moveX = (Math.random() * 20 - 10).toFixed(1) + "px";
    const moveY = (Math.random() * 10 - 5).toFixed(1) + "px";
    
    // 🔹 random duur zodat alles onafhankelijk beweegt
    const duration = (6 + Math.random() * 6).toFixed(2) + "s"; // 6–12 sec
    
    quote.style.setProperty("--move-x", moveX);
    quote.style.setProperty("--move-y", moveY);
    quote.style.setProperty("--dur", duration);

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

  // ✅ CASE 1: alleen normal → info-button tonen
  if (!hasThreshold && hasNormal) {
    const uitleg = thresholdOverlay.uitleg.normal;
  
    const infoBtn = document.createElement("div");
    infoBtn.className = "info-button";
    infoBtn.textContent = "i";
  
    const popup = document.createElement("div");
    popup.className = "info-popup";
  
    const box = document.createElement("div");
    box.className = "info-popup-box";
  
    const title = document.createElement("div");
    title.className = "info-popup-title";
    title.innerHTML = uitleg.titel;
  
    const text = document.createElement("div");
    text.className = "info-popup-text";
    text.innerHTML = uitleg.tekst;
  
    box.appendChild(title);
    box.appendChild(text);
    popup.appendChild(box);
  
    overlay.appendChild(infoBtn);
    overlay.appendChild(popup);
  }

  document.body.appendChild(overlay);
  requestAnimationFrame(() => overlay.classList.add("visible"));

  flash.addEventListener("animationend", () => flash.remove());

  overlay.addEventListener("click", (e) => {
    // ❌ klik op info-button of popup → NIET sluiten
    if (
      e.target.closest(".info-button") ||
      e.target.closest(".info-popup") ||
      e.target.closest(".info-popup-box")
    ) {
      return;
    }
  
    overlay.remove();
  
    openLeft = null;
    openRight = null;
    leftSide.innerHTML = "";
    rightSide.innerHTML = "";
    renderClosed();
    updateClosedContainer();
  
    requestAnimationFrame(() => {
      // ✅ CASE 2: threshold + normal
      if (hasThreshold && hasNormal) {
        const uitleg = thresholdOverlay.uitleg.normal;
  
        if (uitleg) {
          showInfoOverlay(
            uitleg.titel,
            uitleg.tekst,
            uitleg.achtergrond
          );
        }
      }
    });
  });
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
    
    // Permanente tooltip op mobiel
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
    const mapIcons = document.querySelectorAll(".icon.map");
    const gridClosed = document.querySelector(".grid-closed");
    const closedContainerCenter = document.querySelector("#closed-container.center");
    if (mappen.length > 20 && mappen.length <= 25) {
      mapIcons.forEach(icon => {
        icon.style.width = "130px";
        icon.style.height = "130px";
      });
      if (gridClosed) gridClosed.style.maxWidth = "730px";
      if (closedContainerCenter) closedContainerCenter.style.width = "730px";
    }
    if (mappen.length > 25) {
      mapIcons.forEach(icon => {
        icon.style.width = "117px";
        icon.style.height = "117px";
      });
      if (gridClosed) gridClosed.style.maxWidth = "802px";
      if (closedContainerCenter) closedContainerCenter.style.width = "802px";
    }
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
    if (totalElements > 25) {
      grid.style.gridTemplateColumns = "repeat(6, 100px)";
      grid.style.columnGap = "30px";
      grid.style.rowGap = "10px";
    } else if (totalElements > 16) {
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
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function canShowHint(c) {
  return !!c.hint?.trim()
    && pairs(c.input).some(([a, b]) => inMap(a) && inMap(b))
    && c.output.some(o => !inMap(o.naam))
    && (!c.uitleg?.thresholdElement?.naam || known(c.uitleg.thresholdElement.naam))
    && !(c.uitleg?.threshold?.requirements || []).some(r => !known(r));
}

function refreshHintDeck() {
  const hints = combinaties
    .map((c, id) => ({ ...c, id }))
    .filter(canShowHint);

  hintDeck = [
    ...shuffle(hints.filter(h => h.tijd == null)),
    ...hints.filter(h => h.tijd != null).sort((a, b) => b.tijd - a.tijd)
  ];

  const on = hintDeck.length > 0;
  hintButton.classList.toggle("disabled", !on);
  hintButton.style.pointerEvents = on ? "auto" : "none";
}

function hideHint() {
  clearTimeout(hintTimer);
  hintTimer = 0;
  hintVisible = false;
  hintBubble.classList.remove("visible");
}

function showHint() {
  if (hintVisible) return hideHint();

  if (!hintDeck.length) refreshHintDeck();
  const hint = hintDeck.shift();
  if (!hint) return;

  hintBubble.innerHTML = hint.hint;
  hintBubble.classList.add("visible");
  hintVisible = true;

  clearTimeout(hintTimer);
  hintTimer = setTimeout(hideHint, 4000);
}

hintButton.onclick = showHint;
refreshHintDeck();
