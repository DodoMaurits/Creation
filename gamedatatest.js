// ---------------- DATA ------------------
const mappen = [
  {
    naam: "Heelal", icoon: "icons/Heelal.png", 
    elementen: [
      { naam: "Oerknal", icoon: "icons/Oerknal.png" },
      { naam: "Ster", icoon: "icons/Ster.png" },
      { naam: "Sterrenstelsel", icoon: "icons/Sterrenstelsel.png" },
      { naam: "Supernova", icoon: "icons/Supernova.png" },
      { naam: "Zwart Gat", icoon: "icons/Zwartgat.png" },
      { naam: "Asteroïden", icoon: "icons/Asteroïden.png" },
      { naam: "Planeet", icoon: "icons/Planeet.png" },
      { naam: "Uranus", icoon: "icons/Uranus.png" },
      { naam: "Neptunus", icoon: "icons/Neptunus.png" },
      { naam: "Jupiter", icoon: "icons/Jupiter.png" },
      { naam: "Saturnus", icoon: "icons/Saturnus.png" },
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
      { naam: "Roest", icoon: "icons/Roest.png" },
      { naam: "Silicium", icoon: "icons/Silicium.png" },
      { naam: "Kalk", icoon: "icons/Kalk.png" },
      { naam: "Aluminium", icoon: "icons/Aluminium.png" },
      { naam: "Gips", icoon: "icons/Gips.png" },
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
      { naam: "Kwarts", icoon: "icons/Kwarts.png" },
      { naam: "Mica", icoon: "icons/Mica.png" },
      { naam: "Veldspaat", icoon: "icons/Veldspaat.png" },
      { naam: "Jade", icoon: "icons/Jade.png" },
      { naam: "Zand", icoon: "icons/Zand.png" },
      { naam: "Klei", icoon: "icons/Klei.png" },
      { naam: "Glas", icoon: "icons/Glas.png" },
      { naam: "Tufsteen", icoon: "icons/Tufsteen.png" },
      { naam: "Kleisteen", icoon: "icons/Kleisteen.png" },
      { naam: "Leisteen", icoon: "icons/Leisteen.png" },
      { naam: "Steenzout", icoon: "icons/Steenzout.png" },
      { naam: "Schalie", icoon: "icons/Schalie.png" },
      { naam: "Fylliet", icoon: "icons/Fylliet.png" },
      { naam: "Schist", icoon: "icons/Schist.png" },
      { naam: "Gneis", icoon: "icons/Gneis.png" },
      { naam: "Zandsteen", icoon: "icons/Zandsteen.png" },
      { naam: "Kwartsiet", icoon: "icons/Kwartsiet.png" },
      { naam: "Kalksteen", icoon: "icons/Kalksteen.png" },
      { naam: "Marmer", icoon: "icons/Marmer.png" },
      { naam: "Calciet", icoon: "icons/Calciet.png" },
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
      { naam: "Kelpwoud", icoon: "icons/Kelpwoud.png" },
      { naam: "Savanne", icoon: "icons/Savanne.png" },
      { naam: "Duinen", icoon: "icons/Duinen.png" },
      { naam: "Weide", icoon: "icons/Weide.png" },
      { naam: "Steppe", icoon: "icons/Steppe.png" },
      { naam: "Prairie", icoon: "icons/Prairie.png" },
      { naam: "Fynbos", icoon: "icons/Fynbos.png" }
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
      { naam: "Paddenstoelen", icoon: "icons/Paddenstoelen.png" },
      { naam: "Bruinwieren", icoon: "icons/Bruinwieren.png" }
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
      { naam: "Zeeschildpadden", icoon: "icons/Zeeschildpadden.png" },
      { naam: "Octopussen", icoon: "icons/Octopussen.png" },
      { naam: "Reuzeninktvissen", icoon: "icons/Reuzeninktvissen.png" },
      { naam: "Zeekoeien", icoon: "icons/Zeekoeien.png" }, /*60*/
      { naam: "Blauwe vinvissen", icoon: "icons/Blauwe vinvissen.png" }, /*34*/
      { naam: "Potvissen", icoon: "icons/Potvissen.png" }, /*34*/
      { naam: "Bultruggen", icoon: "icons/Bultruggen.png" }, /*15*/
      { naam: "Grijze walvissen", icoon: "icons/Grijze walvissen.png" }, /*15*/
      { naam: "Orka", icoon: "icons/Orka.png" }, /*15*/
      { naam: "Narwallen", icoon: "icons/Narwallen.png" }, /*15*/
      { naam: "Dolfijnen", icoon: "icons/Dolfijnen.png" } /*15*/
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
      { naam: "Geluid", icoon: "icons/Geluid.png" },
      { naam: "Verdriet", icoon: "icons/Verdriet.png" },
      { naam: "Empathie", icoon: "icons/Empathie.png" },
      { naam: "Trots", icoon: "icons/Trots.png" },
      { naam: "Jaloezie", icoon: "icons/Jaloezie.png" }
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
      { naam: "Spookhaaien", icoon: "icons/Spookhaaien.png" },
      { naam: "Zeeduivels", icoon: "icons/Zeeduivels.png" },
      { naam: "Manta", icoon: "icons/Manta.png" }, /*66*/
      { naam: "Kabeljauwen", icoon: "icons/Kabeljauwen.png" }, /*40*/
      { naam: "Maanvissen", icoon: "icons/Maanvissen.png" }, /*40*/
      { naam: "Forel", icoon: "icons/Forel.png" }, /*40*/
      { naam: "Kogelvissen", icoon: "icons/Kogelvissen.png" }, /*40*/
      { naam: "Papegaaivissen", icoon: "icons/Papegaaivissen.png" }, /*30*/
      { naam: "Platvissen", icoon: "icons/Platvissen.png" }, /*30*/
      { naam: "Vliegvissen", icoon: "icons/Vliegvissen.png" }, /*30*/
      { naam: "Zeepaardjes", icoon: "icons/Zeepaardjes.png" }, /*20*/
      { naam: "Clownvissen", icoon: "icons/Clownvissen.png" }, /*20*/
      { naam: "Doktersvissen", icoon: "icons/Doktersvissen.png" }, /*20*/
      { naam: "Koraalduivels", icoon: "icons/Koraalduivels.png" }, /*20*/
      { naam: "Piranha", icoon: "icons/Piranha.png" }, /*20*/
      { naam: "Karpers", icoon: "icons/Karpers.png" }, /*10*/
      { naam: "Snoeken", icoon: "icons/Snoeken.png" }, /*10*/
      { naam: "Meervallen", icoon: "icons/Meervallen.png" }, /*10*/
      { naam: "Tonijn", icoon: "icons/Tonijn.png" }, /*10*/
      { naam: "Zalm", icoon: "icons/Zalm.png" }, /*10*/
      { naam: "Makreel", icoon: "icons/Makreel.png" }, /*10*/
      { naam: "Paling", icoon: "icons/Paling.png" }, /*10*/
      { naam: "Haring", icoon: "icons/Haring.png" } /*10*/

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
      { naam: "Lieveheersbeestjes", icoon: "icons/Lieveheersbeestjes.png" },
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
      { naam: "Oerzaadplanten", icoon: "icons/Oerzaadplanten.png" },
      { naam: "Oermagnoliden", icoon: "icons/Oermagnoliden.png" },
      { naam: "Oermonocotylen", icoon: "icons/Oermonocotylen.png" },
      { naam: "Oereudicoten", icoon: "icons/Oereudicoten.png" },
      { naam: "Gras", icoon: "icons/Gras.png" }, /*80*/
      { naam: "Oerfabiden", icoon: "icons/Oerfabiden.png" }, /*95*/
      { naam: "Oermalviden", icoon: "icons/Oermalviden.png" }, /*95*/
      { naam: "Oercarryophyllales", icoon: "icons/Oercaryophyllales.png" }, /*95*/
      { naam: "Oerasteriden", icoon: "icons/Oerasteriden.png" }, /*95*/
      { naam: "Oerericales", icoon: "icons/Oerericales.png" }, /*95*/
      { naam: "Oerlamiden", icoon: "icons/Oerlamiden.png" }, /*95*/
      { naam: "Oercampanuliden", icoon: "icons/Oercampanuliden.png" }, /*95*/
      { naam: "Vetplanten", icoon: "icons/Vetplanten.png" }, /*80*/
      { naam: "Buxus", icoon: "icons/Buxus.png" }, /*80*/
      { naam: "Brandnetels", icoon: "icons/Brandnetels.png" }, /*60*/
      { naam: "Oerfagales", icoon: "icons/Oerfagales.png" }, /*50*/
      { naam: "Agave", icoon: "icons/Agave.png" }, /*40*/
      { naam: "Aloë Vera", icoon: "icons/Aloe vera.png" }, /*40*/
      { naam: "Cactussen", icoon: "icons/Cactussen.png" }, /*40*/
      { naam: "Heide", icoon: "icons/Heide.png" }, /*40*/
      { naam: "Lavendel", icoon: "icons/Lavendel.png" }, /*25*/
      { naam: "Klavers", icoon: "icons/Klavers.png" }, /*20*/
      { naam: "Kroos", icoon: "icons/Kroos.png" }, /*20*/
      { naam: "Zonnedauw", icoon: "icons/Zonnedauw.png" }, /*10*/
      { naam: "Venusvliegenvanger", icoon: "icons/Venusvliegenvanger.png" }, /*10*/
      { naam: "Waterriet", icoon: "icons/Waterriet.png" }, /*4*/
      { naam: "Suikerriet", icoon: "icons/Suikerriet.png" } /*4*/
    ]
  },
  {
    naam: "Smaakmakers", icoon: "icons/Smaakmakers.png", 
    elementen: [
      { naam: "Truffels", icoon: "icons/Truffels.png" },
      { naam: "Steranijs", icoon: "icons/Steranijs.png" },
      { naam: "Kruidnagel", icoon: "icons/Kruidnagel.png" }, /*40*/
      { naam: "Gember", icoon: "icons/Gember.png" }, /*35*/
      { naam: "Kurkuma", icoon: "icons/Kurkuma.png" }, /*35*/
      { naam: "Munt", icoon: "icons/Munt.png" }, /*25*/
      { naam: "Tijm", icoon: "icons/Tijm.png" }, /*5*/
      { naam: "Nootmuskaat", icoon: "icons/Nootmuskaat.png" }, /*10*/
      { naam: "Kaneel", icoon: "icons/Kaneel.png" }, /*10*/
      { naam: "Peper", icoon: "icons/Peper.png" }, /*10*/
      { naam: "Kardemom", icoon: "icons/Kardemom.png" }, /*10*/
      { naam: "Mosterd", icoon: "icons/Mosterd.png" }, /*5*/
      { naam: "Knoflook", icoon: "icons/Knoflook.png" }, /*5*/
      { naam: "Ui", icoon: "icons/Ui.png" }, /*5*/
      { naam: "Bieslook", icoon: "icons/Bieslook.png" }, /*5*/
      { naam: "Basilicum", icoon: "icons/Basilicum.png" }, /*5*/
      { naam: "Chilipepers", icoon: "icons/Chilipepers.png" }, /*3*/
      { naam: "Oregano", icoon: "icons/Oregano.png" }, /*3*/
      { naam: "Salie", icoon: "icons/Salie.png" }, /*3*/
      { naam: "Anijs", icoon: "icons/Anijs.png" }, /*2*/
      { naam: "Komijn", icoon: "icons/Komijn.png" }, /*2*/
      { naam: "Dille", icoon: "icons/Dille.png" }, /*2*/
      { naam: "Koriander", icoon: "icons/Koriander.png" }, /*2*/
      { naam: "Peterselie", icoon: "icons/Peterselie.png" } /*2*/
    ]
  },
  {
    naam: "Materialen", icoon: "icons/Materialen.png", 
    elementen: [
      { naam: "Zijde", icoon: "icons/Zijde.png" },
      { naam: "Hout", icoon: "icons/Hout.png" },
      { naam: "Vlas", icoon: "icons/Vlas.png" }, /*50*/
      { naam: "Papyrusriet", icoon: "icons/Papyrusriet.png" }, /*20*/
      { naam: "Hennep", icoon: "icons/Hennep.png" }, /*20*/
      { naam: "Katoen", icoon: "icons/Katoen.png" }, /*20*/
      { naam: "Kapok", icoon: "icons/Kapok.png" }, /*20*/
      { naam: "Rotan", icoon: "icons/Rotan.png" }, /*10*/
      { naam: "Jute", icoon: "icons/Jute.png" }, /*5*/
      { naam: "Bamboe", icoon: "icons/Bamboe.png" } /*4*/
    ]
  },
  {
    naam: "Bomen", icoon: "icons/Bomen.png",
    elementen: [
      { naam: "Coniferen", icoon: "icons/Coniferen.png" },
      { naam: "Palmvarens", icoon: "icons/Palmvarens.png" },
      { naam: "Ginkgo", icoon: "icons/Ginkgo.png" },
      { naam: "Magnolia", icoon: "icons/Magnolia.png" },
      { naam: "Tulpenbomen", icoon: "icons/Tulpenbomen.png" },
      { naam: "Laurierbomen", icoon: "icons/Laurierbomen.png" },
      { naam: "Platanen", icoon: "icons/Platanen.png" },
      { naam: "Iepen", icoon: "icons/Iepen.png" }, /*50*/
      { naam: "Populieren", icoon: "icons/Populieren.png" }, /*50*/
      { naam: "Eucalyptus", icoon: "icons/Eucalyptus.png" }, /*50*/
      { naam: "Paardenkastanjes", icoon: "icons/Paardenkastanjes.png" }, /*50*/
      { naam: "Lindes", icoon: "icons/Lindes.png" }, /*50*/
      { naam: "Esdoorns", icoon: "icons/Esdoorns.png" }, /*50*/
      { naam: "Elzen", icoon: "icons/Elzen.png" }, /*50*/
      { naam: "Eiken", icoon: "icons/Eiken.png" }, /*50*/
      { naam: "Beuken", icoon: "icons/Beuken.png" }, /*50*/
      { naam: "Berken", icoon: "icons/Berken.png" }, /*50*/
      { naam: "Essen", icoon: "icons/Essen.png" }, /*40*/
      { naam: "Wierookbomen", icoon: "icons/Wierookbomen.png" }, /*40*/
      { naam: "Mirre", icoon: "icons/Mirre.png" }, /*40*/
      { naam: "Japanse kers", icoon: "icons/Japanse kers.png" }, /*20*/
      { naam: "Acacia", icoon: "icons/Acacia.png" }, /*20*/
      { naam: "Zeepnoten", icoon: "icons/Zeepnoten.png" }, /*20*/
      { naam: "Wilgen", icoon: "icons/Wilgen.png" }, /*10*/
      { naam: "Oliepalmen", icoon: "icons/Oliepalmen.png" }, /*10*/
      { naam: "Rubberbomen", icoon: "icons/Rubberbomen.png" }, /*5*/
      { naam: "Sheabomen", icoon: "icons/Sheabomen.png" }, /*5*/
      { naam: "Arganbomen", icoon: "icons/Arganbomen.png" }, /*5*/
      { naam: "Teak", icoon: "icons/Teak.png" }, /*5*/
      { naam: "Baobabs", icoon: "icons/Baobabs.png" } /*5*/
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
      { naam: "Tyrannosauriërs", icoon: "icons/Tyrannosauriërs.png" },
      { naam: "Slangen", icoon: "icons/Slangen.png" },
      { naam: "Gekko's", icoon: "icons/Gekko's.png" },
      { naam: "Leguanen", icoon: "icons/Leguanen.png" },
      { naam: "Krokodillen", icoon: "icons/Krokodillen.png" }
    ]
  },
  {
    naam: "Samenleving", icoon: "icons/Samenleving.png", 
    elementen: [
      { naam: "Hiërarchie", icoon: "icons/Hierarchie.png" },
      { naam: "Werk", icoon: "icons/Werk.png" },
      { naam: "Leger", icoon: "icons/Leger.png" },
      { naam: "Heerser", icoon: "icons/Heerser.png" },
      { naam: "Gemeenschap", icoon: "icons/Gemeenschap.png" }
    ]
  },
  {
    naam: "Zoogdieren", icoon: "icons/Zoogdieren.png", 
    elementen: [
      { naam: "Oercynodonten", icoon: "icons/Oercynodonten.png" },
      { naam: "Oerplacentalia", icoon: "icons/Oerplacentalia.png" },
      { naam: "Oerbuideldieren", icoon: "icons/Oerbuideldieren.png" },
      { naam: "Vogelbekdieren", icoon: "icons/Vogelbekdieren.png" },
      { naam: "Vleermuizen", icoon: "icons/Vleermuizen.png" }, /*60*/
      { naam: "Klipdassen", icoon: "icons/Klipdassen.png" }, /*60*/
      { naam: "Oerslurfdieren", icoon: "icons/Oerslurfdieren.png" }, /*60*/
      { naam: "Aardvarkens", icoon: "icons/Aardvarkens.png" }, /*60*/
      { naam: "Luiaarden", icoon: "icons/Luiaarden.png" }, /*50*/
      { naam: "Miereneters", icoon: "icons/Miereneters.png" }, /*50*/
      { naam: "Bevers", icoon: "icons/Bevers.png" }, /*30*/
      { naam: "Kangoeroes", icoon: "icons/Kangoeroes.png" }, /*25*/
      { naam: "Wombats", icoon: "icons/Wombats.png" }, /*25*/
      { naam: "Koala", icoon: "icons/Koala.png" }, /*25*/
      { naam: "Oerknaagdieren", icoon: "icons/Oerknaagdieren.png" }, /*10*/
      { naam: "Gordeldieren", icoon: "icons/Gordeldieren.png" }, /*10*/
      { naam: "Mollen", icoon: "icons/Mollen.png" }, /*10*/
      { naam: "Egels", icoon: "icons/Egels.png" }, /*10*/
      { naam: "Spitsmuizen", icoon: "icons/Spitsmuizen.png" }, /*10*/
      { naam: "Konijnen", icoon: "icons/Konijnen.png" }, /*10*/
      { naam: "Hazen", icoon: "icons/Hazen.png" }, /*10*/
      { naam: "Olifanten", icoon: "icons/Olifanten.png" }, /*7*/
      { naam: "Mammoeten", icoon: "icons/Mammoeten.png" }, /*5*/
      { naam: "Prairiehonden", icoon: "icons/Prairiehonden.png" }, /*5*/
      { naam: "Ratten", icoon: "icons/Ratten.png" }, /*2*/
      { naam: "Capibara", icoon: "icons/Capibara.png" }, /*2*/
      { naam: "Eekhoorns", icoon: "icons/Eekhoorns.png" }, /*2*/
      { naam: "Stekelvarkens", icoon: "icons/Stekelvarkens.png" }, /*2*/
      { naam: "Muizen", icoon: "icons/Muizen.png" }, /*2*/
      { naam: "Hamsters", icoon: "icons/Hamsters.png" } /*2*/
    ]
  },
  {
    naam: "Vogels", icoon: "icons/Vogels.png", 
    elementen: [
      { naam: "Archaeopteryx", icoon: "icons/Archaeopteryx.png" },
      { naam: "Pinguïns", icoon: "icons/Pinguïns.png" }, /*60*/
      { naam: "Reigers", icoon: "icons/Reigers.png" }, /*50*/
      { naam: "Uilen", icoon: "icons/Uilen.png" }, /*45*/
      { naam: "Flamingo", icoon: "icons/Flamingo.png" }, /*45*/
      { naam: "Spechten", icoon: "icons/Spechten.png" }, /*45*/
      { naam: "Gieren", icoon: "icons/Gieren.png" }, /*30*/
      { naam: "Struisvogels", icoon: "icons/Struisvogels.png" }, /*30*/
      { naam: "Secretarisvogels", icoon: "icons/Secretarisvogels.png" }, /*30*/
      { naam: "Kolibries", icoon: "icons/Kolibries.png" }, /*25*/
      { naam: "Duiven", icoon: "icons/Duiven.png" }, /*20*/
      { naam: "Arenden", icoon: "icons/Arenden.png" }, /*20*/
      { naam: "Zwaluwen", icoon: "icons/Zwaluwen.png" }, /*20*/
      { naam: "Spreeuwen", icoon: "icons/Spreeuwen.png" }, /*20*/
      { naam: "Kraaien", icoon: "icons/Kraaien.png" }, /*20*/
      { naam: "Ooievaars", icoon: "icons/Ooievaars.png" }, /*20*/
      { naam: "Meeuwen", icoon: "icons/Meeuwen.png" }, /*15*/
      { naam: "Aalscholvers", icoon: "icons/Aalscholvers.png" }, /*15*/
      { naam: "Papegaaiduikers", icoon: "icons/Papegaaiduikers.png" }, /*15*/
      { naam: "Eenden", icoon: "icons/Eenden.png" }, /*15*/
      { naam: "Ganzen", icoon: "icons/Ganzen.png" }, /*15*/
      { naam: "Zwanen", icoon: "icons/Zwanen.png" }, /*15*/
      { naam: "Kieviten", icoon: "icons/Kieviten.png" }, /*15*/
      { naam: "Kippen", icoon: "icons/Kippen.png" }, /*15*/
      { naam: "Pauwen", icoon: "icons/Pauwen.png" }, /*10*/
      { naam: "Papegaaien", icoon: "icons/Papegaaien.png" }, /*10*/
      { naam: "Mussen", icoon: "icons/Mussen.png" }, /*10*/
      { naam: "Vinken", icoon: "icons/Vinken.png" }, /*10*/
      { naam: "Fazanten", icoon: "icons/Fazanten.png" } /*10*/
    ]
  },
  {
    naam: "Bloemen", icoon: "icons/Bloemen.png", 
    elementen: [
      { naam: "Waterlelies", icoon: "icons/Waterlelies.png" }, /*125*/
      { naam: "Orchideeën", icoon: "icons/Orchideeën.png" }, /*100*/
      { naam: "Pioenrozen", icoon: "icons/Pioenrozen.png" }, /*95*/
      { naam: "Klaprozen", icoon: "icons/Klaprozen.png" }, /*95*/
      { naam: "Lotussen", icoon: "icons/Lotussen.png" }, /*95*/
      { naam: "Hortensia", icoon: "icons/Hortensia.png" }, /*90*/
      { naam: "Viooltjes", icoon: "icons/Viooltjes.png" }, /*85*/
      { naam: "Narcissen", icoon: "icons/Narcissen.png" }, /*70*/
      { naam: "Amaryllissen", icoon: "icons/Amaryllissen.png" }, /*70*/
      { naam: "Krokussen", icoon: "icons/Krokussen.png" }, /*50*/
      { naam: "Gladiolen", icoon: "icons/Gladiolen.png" }, /*50*/
      { naam: "Freesia", icoon: "icons/Freesia.png" }, /*50*/
      { naam: "Rozen", icoon: "icons/Rozen.png" }, /*50*/
      { naam: "Rododendron", icoon: "icons/Rododendron.png" }, /*40*/
      { naam: "Lelies", icoon: "icons/Lelies.png" }, /*40*/
      { naam: "Hyacinten", icoon: "icons/Hyacinten.png" }, /*40*/
      { naam: "Boterbloemen", icoon: "icons/Boterbloemen.png" }, /*40*/
      { naam: "Clematissen", icoon: "icons/Clematissen.png" }, /*35*/
      { naam: "Anjers", icoon: "icons/Anjers.png" }, /*30*/
      { naam: "Paardenbloemen", icoon: "icons/Paardenbloemen.png" }, /*30*/
      { naam: "Chrysanten", icoon: "icons/Chrysanten.png" }, /*25*/
      { naam: "Irissen", icoon: "icons/Irissen.png" }, /*20*/
      { naam: "Gerbera", icoon: "icons/Gerbera.png" }, /*20*/
      { naam: "Protea", icoon: "icons/Protea.png" }, /*15*/
      { naam: "Tulpen", icoon: "icons/Tulpen.png" }, /*15*/
      { naam: "Hibiscus", icoon: "icons/Hibiscus.png" }, /*10*/
      { naam: "Geraniums", icoon: "icons/Geraniums.png" }, /*10*/
      { naam: "Madeliefjes", icoon: "icons/Madeliefjes.png" }, /*2*/
      { naam: "Goudsbloemen", icoon: "icons/Goudsbloemen.png" }, /*2*/
      { naam: "Zonnebloemen", icoon: "icons/Zonnebloemen.png" } /*2*/
    ]
  },
  {
    naam: "Genotwaren", icoon: "icons/Genotwaren.png", 
    elementen: [
      { naam: "Honing", icoon: "icons/Honing.png" },
      { naam: "Hop", icoon: "icons/Hop.png" }, /*60*/
      { naam: "Theeplanten", icoon: "icons/Theeplanten.png" }, /*40*/
      { naam: "Rooibos", icoon: "icons/Rooibos.png" }, /*10*/
      { naam: "Coca", icoon: "icons/Coca.png" }, /*4*/
      { naam: "Suiker", icoon: "icons/Suiker.png" }, /*4*/
      { naam: "Tabaksplanten", icoon: "icons/Tabaksplanten.png" }, /*3*/
      { naam: "Koffieplanten", icoon: "icons/Koffieplanten.png" }, /*3*/
      { naam: "Jasmijn", icoon: "icons/Jasmijn.png" }, /*3*/
      { naam: "Kamille", icoon: "icons/Kamille.png" } /*2*/
    ]
  },
  {
    naam: "Fruit", icoon: "icons/Fruit.png", 
    elementen: [
      { naam: "Druiven", icoon: "icons/Druiven.png" },
      { naam: "Appels", icoon: "icons/Appels.png" }, /*50*/
      { naam: "Peren", icoon: "icons/Peren.png" }, /*50*/
      { naam: "Pruimen", icoon: "icons/Pruimen.png" }, /*50*/
      { naam: "Bosbessen", icoon: "icons/Bosbessen.png" }, /*40*/
      { naam: "Zuurzakken", icoon: "icons/Zuurzakken.png" }, /*30*/
      { naam: "Doerians", icoon: "icons/Doerians.png" }, /*30*/
      { naam: "Vijgen", icoon: "icons/Vijgen.png" }, /*30*/
      { naam: "Aardbeien", icoon: "icons/Aardbeien.png" }, /*30*/
      { naam: "Olijven", icoon: "icons/Olijven.png" }, /*25*/
      { naam: "Abrikozen", icoon: "icons/Abrikozen.png" }, /*20*/
      { naam: "Kersen", icoon: "icons/Kersen.png" }, /*20*/
      { naam: "Perziken", icoon: "icons/Perziken.png" }, /*20*/
      { naam: "Granaatappels", icoon: "icons/Granaatappels.png" }, /*20*/
      { naam: "Mandarijnen", icoon: "icons/Mandarijnen.png" }, /*20*/
      { naam: "Guaves", icoon: "icons/Guaves.png" }, /*20*/
      { naam: "Mango", icoon: "icons/Mango.png" }, /*20*/
      { naam: "Papaja", icoon: "icons/Papaja.png" }, /*20*/
      { naam: "Frambozen", icoon: "icons/Frambozen.png" }, /*15*/
      { naam: "Avocado", icoon: "icons/Avocado.png" }, /*10*/
      { naam: "Kokos", icoon: "icons/Kokos.png" }, /*10*/
      { naam: "Bananen", icoon: "icons/Bananen.png" }, /*10*/
      { naam: "Ananas", icoon: "icons/Ananas.png" }, /*10*/
      { naam: "Lychee", icoon: "icons/Lychee.png" }, /*10*/
      { naam: "Kaki", icoon: "icons/Kaki.png" }, /*5*/
      { naam: "Kiwi", icoon: "icons/Kiwi.png" }, /*5*/
      { naam: "Dadels", icoon: "icons/Dadels.png" } /*5*/
    ]
  },
  {
    naam: "Groenten", icoon: "icons/Groenten.png", 
    elementen: [
      { naam: "Komkommers", icoon: "icons/Komkommers.png" }, /*30*/
      { naam: "Meloenen", icoon: "icons/Meloenen.png" }, /*30*/
      { naam: "Watermeloenen", icoon: "icons/Watermeloenen.png" }, /*30*/
      { naam: "Pompoenen", icoon: "icons/Pompoenen.png" }, /*30*/
      { naam: "Courgettes", icoon: "icons/Courgettes.png" }, /*30*/
      { naam: "Bieten", icoon: "icons/Bieten.png" }, /*30*/
      { naam: "Spinazie", icoon: "icons/Spinazie.png" }, /*30*/
      { naam: "Cassave", icoon: "icons/Cassave.png" }, /*10*/
      { naam: "Zoete aardappelen", icoon: "icons/Zoete aardappelen.png" }, /*5*/
      { naam: "Aubergines", icoon: "icons/Aubergines.png" }, /*5*/
      { naam: "Radijsjes", icoon: "icons/Radijsjes.png" }, /*5*/
      { naam: "Kool", icoon: "icons/Kool.png" }, /*5*/
      { naam: "Rabarber", icoon: "icons/Rabarber.png" }, /*5*/
      { naam: "Asperges", icoon: "icons/Asperges.png" }, /*5*/
      { naam: "Prei", icoon: "icons/Prei.png" }, /*5*/
      { naam: "Paprika", icoon: "icons/Paprika.png" }, /*3*/
      { naam: "Tomaten", icoon: "icons/Groenten.png" }, /*3*/
      { naam: "Aardappelen", icoon: "icons/Aardappelen.png" }, /*3*/
      { naam: "Selderij", icoon: "icons/Selderij.png" }, /*2*/
      { naam: "Venkel", icoon: "icons/Venkel.png" }, /*2*/
      { naam: "Artisjokken", icoon: "icons/Artisjokken.png" }, /*2*/
      { naam: "Wortelen", icoon: "icons/Wortelen.png" }, /*2*/
      { naam: "Sla", icoon: "icons/Sla.png" }, /*2*/
      { naam: "Andijvie", icoon: "icons/Andijvie.png" } /*2*/
    ]
  },
  {
    naam: "Granen", icoon: "icons/Granen.png", 
    elementen: [
      { naam: "Rijst", icoon: "icons/Rijst.png" }, /*5*/
      { naam: "Maïs", icoon: "icons/Mais.png" }, /*5*/
      { naam: "Tarwe", icoon: "icons/Tarwe.png" }, /*5*/
      { naam: "Gerst", icoon: "icons/Gerst.png" }, /*5*/
      { naam: "Haver", icoon: "icons/Haver.png" }, /*5*/
      { naam: "Sorghum", icoon: "icons/Sorghum.png" }, /*4*/
      { naam: "Gierst", icoon: "icons/Gierst.png" } /*4*/
    ]
  },
  {
    naam: "Zaden", icoon: "icons/Zaden.png", 
    elementen: [
      { naam: "Erwten", icoon: "icons/Erwten.png" }, /*50*/
      { naam: "Walnoten", icoon: "icons/Walnoten.png" }, /*50*/
      { naam: "Kastanjes", icoon: "icons/Kastanjes.png" }, /*50*/
      { naam: "Hazelnoten", icoon: "icons/Hazelnoten.png" }, /*50*/
      { naam: "Soja", icoon: "icons/Soja.png" }, /*30*/
      { naam: "Kikkererwten", icoon: "icons/Kikkererwten.png" }, /*30*/
      { naam: "Boekweit", icoon: "icons/Boekweit.png" }, /*30*/
      { naam: "Cacao", icoon: "icons/Cacao.png" }, /*30*/
      { naam: "Amandelen", icoon: "icons/Amandelen.png" }, /*20*/
      { naam: "Pinda", icoon: "icons/Pinda.png" }, /*20*/
      { naam: "Linzen", icoon: "icons/Linzen.png" }, /*20*/
      { naam: "Pistache", icoon: "icons/Pistache.png" }, /*20*/
      { naam: "Kola", icoon: "icons/Kola.png" }, /*20*/
      { naam: "Paranoten", icoon: "icons/Paranoten.png" }, /*15*/
      { naam: "Sesam", icoon: "icons/Sesam.png" }, /*15*/
      { naam: "Cashew", icoon: "icons/Cashew.png" }, /*5*/
      { naam: "Quinoa", icoon: "icons/Quinoa.png" }, /*5*/
      { naam: "Sperziebonen", icoon: "icons/Sperziebonen.png" }, /*5*/
      { naam: "Kidneybonen", icoon: "icons/Kidneybonen.png" } /*5*/
    ]
  },
  {
    naam: "Carnivoren", icoon: "icons/Carnivoren.png", 
    elementen: [
      { naam: "Oerhondachtigen", icoon: "icons/Oerhondachtigen.png" }, /*55*/
      { naam: "Oerkatachtigen", icoon: "icons/Oerkatachtigen.png" }, /*55*/
      { naam: "Walrussen", icoon: "icons/Walrussen.png" }, /*20*/
      { naam: "Zeehonden", icoon: "icons/Zeehonden.png" }, /*20*/
      { naam: "Zeeleeuwen", icoon: "icons/Zeeleeuwen.png" }, /*20*/
      { naam: "Otters", icoon: "icons/Otters.png" }, /*15*/
      { naam: "Dassen", icoon: "icons/Dassen.png" }, /*15*/
      { naam: "Wolven", icoon: "icons/Wolven.png" }, /*10*/
      { naam: "Beren", icoon: "icons/Beren.png" }, /*10*/
      { naam: "Wasberen", icoon: "icons/Wasberen.png" }, /*10*/
      { naam: "Marters", icoon: "icons/Marters.png" }, /*10*/
      { naam: "Wezels", icoon: "icons/Wezels.png" }, /*10*/
      { naam: "Lynxen", icoon: "icons/Lynxen.png" }, /*8*/
      { naam: "Poema", icoon: "icons/Poema.png" }, /*8*/
      { naam: "Katten", icoon: "icons/Katten.png" }, /*8*/
      { naam: "Stokstaartjes", icoon: "icons/Stokstaartjes.png" }, /*8*/
      { naam: "Tijgers", icoon: "icons/Tijgers.png" }, /*6*/
      { naam: "Jaguars", icoon: "icons/Jaguars.png" }, /*6*/
      { naam: "Civetkatten", icoon: "icons/Civetkatten.png" }, /*6*/
      { naam: "Fossa", icoon: "icons/Fossa.png" }, /*6*/
      { naam: "Leeuwen", icoon: "icons/Carnivoren.png" }, /*6*/
      { naam: "Hyena", icoon: "icons/Hyena.png" }, /*6*/
      { naam: "Cheeta", icoon: "icons/Cheeta.png" }, /*6*/
      { naam: "Luipaarden", icoon: "icons/Luipaarden.png" }, /*6*/
      { naam: "Vossen", icoon: "icons/Vossen.png" }, /*5*/
      { naam: "Wilde honden", icoon: "icons/Wilde honden.png" }, /*5*/
      { naam: "Zonneberen", icoon: "icons/Zonneberen.png" }, /*5*/
      { naam: "Pandaberen", icoon: "icons/Pandaberen.png" } /*4*/
    ]
  },
  {
    naam: "Primaten", icoon: "icons/Primaten.png", 
    elementen: [
      { naam: "Oerprimaten", icoon: "icons/Oerprimaten.png" }, /*50*/
      { naam: "Lemuren", icoon: "icons/Lemuren.png" }, /*10*/
      { naam: "Makaken", icoon: "icons/Makaken.png" }, /*10*/
      { naam: "Oermensapen", icoon: "icons/Oermensapen.png" }, /*10*/
      { naam: "Neusapen", icoon: "icons/Neusapen.png" }, /*10*/
      { naam: "Langoeren", icoon: "icons/Langoeren.png" }, /*10*/
      { naam: "Bavianen", icoon: "icons/Bavianen.png" }, /*10*/
      { naam: "Galago", icoon: "icons/Galago.png" }, /*10*/
      { naam: "Lori", icoon: "icons/Lori.png" }, /*2*/
      { naam: "Spookdiertjes", icoon: "icons/Spookdiertjes.png" }, /*2*/
      { naam: "Kapucijnapen", icoon: "icons/Kapucijnapen.png" }, /*2*/
      { naam: "Slingerapen", icoon: "icons/Slingerapen.png" }, /*2*/
      { naam: "Brulapen", icoon: "icons/Brulapen.png" }, /*2*/
      { naam: "Saki", icoon: "icons/Saki.png" }, /*2*/
      { naam: "Gorilla", icoon: "icons/Gorilla.png" }, /*2*/
      { naam: "Chimpansees", icoon: "icons/Chimpansees.png" }, /*2*/
      { naam: "Gibbons", icoon: "icons/Gibbons.png" }, /*2*/
      { naam: "Orang-oetans", icoon: "icons/Orang-oetans.png" }, /*2*/
      { naam: "Bonobo", icoon: "icons/Bonobo.png" } /*2*/
    ]
  },
  {
    naam: "Hoefdieren", icoon: "icons/Hoefdieren.png", 
    elementen: [
      { naam: "Oerevenhoevigen", icoon: "icons/Oerevenhoevigen.png" },
      { naam: "Oeronevenhoevigen", icoon: "icons/Oeronevenhoevigen.png" },
      { naam: "Tapirs", icoon: "icons/Tapirs.png" }, /*50*/
      { naam: "Gaffelantilopes", icoon: "icons/Gaffelantilopes.png" }, /*20*/
      { naam: "Nijlpaarden", icoon: "icons/Nijlpaarden.png" }, /*15*/
      { naam: "Neushoorns", icoon: "icons/Neushoorns.png" }, /*10*/
      { naam: "Okapi", icoon: "icons/Okapi.png" }, /*5*/
      { naam: "Giraffen", icoon: "icons/Giraffen.png" }, /*5*/
      { naam: "Gnoes", icoon: "icons/Gnoes.png" }, /*5*/
      { naam: "Gazellen", icoon: "icons/Gazellen.png" }, /*5*/
      { naam: "Runderen", icoon: "icons/Runderen.png" }, /*5*/
      { naam: "Geiten", icoon: "icons/Geiten.png" }, /*5*/
      { naam: "Schapen", icoon: "icons/Schapen.png" }, /*5*/
      { naam: "Ezels", icoon: "icons/Ezels.png" }, /*3*/
      { naam: "Zebra", icoon: "icons/Zebra.png" }, /*3*/
      { naam: "Rendieren", icoon: "icons/Rendieren.png" }, /*2*/
      { naam: "Lama", icoon: "icons/Lama.png" }, /*2*/
      { naam: "Alpaca", icoon: "icons/Alpaca.png" }, /*2*/
      { naam: "Steenbokken", icoon: "icons/Steenbokken.png" }, /*2*/
      { naam: "Kamelen", icoon: "icons/Kamelen.png" }, /*2*/
      { naam: "Dromedarissen", icoon: "icons/Dromedarissen.png" }, /*2*/
      { naam: "Elanden", icoon: "icons/Elanden.png" }, /*2*/
      { naam: "Zwijnen", icoon: "icons/Zwijnen.png" }, /*2*/
      { naam: "Herten", icoon: "icons/Herten.png" }, /*2*/
      { naam: "Impala", icoon: "icons/Impala.png" }, /*2*/
      { naam: "Paarden", icoon: "icons/Paarden.png" }, /*2*/
      { naam: "Buffels", icoon: "icons/Buffels.png" }, /*2*/
      { naam: "Bizons", icoon: "icons/Bizons.png" } /*2*/
    ]
  }
];
