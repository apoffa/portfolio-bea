// ============================================================
// DATI DEL PORTFOLIO · Beatrice Perrone
// Tutti i contenuti del sito vivono qui: modifica questo file
// e rilancia `npm run build` per rigenerare le pagine in /portfolio
// ============================================================

const SITE = {
  name: "Beatrice Perrone",
  shortName: "Bea",
  roles: ["Event Management & Coordination", "Communication", "Strategic Marketing"],
  rolesIt: "Eventi · Comunicazione · Marketing strategico",
  tagline: "Progetto esperienze culturali e live, e costruisco strategie di comunicazione che trasformano il pubblico in comunità.",
  email: "beatrice.perrone00@gmail.com",
  phone: "+39 346 737 6095",
  phoneHref: "+393467376095",
  location: "Turin, Italy",
  // intro usata nella hero
  intro: "Mi occupo di eventi e marketing: coordino eventi culturali e live end-to-end, dal concept alla logistica e dall'ospitalità al pubblico, e sviluppo strategie di comunicazione capaci di generare engagement, visibilità e affluenza.",
  cv: "assets/CV_Beatrice-Perrone_en.pdf",
};

const PALETTE = {
  paper: "#FBF6EF",
  ink: "#1B1721",
};

const PROJECTS = [
  {
    slug: "luoghi-comuni",
    num: "01",
    // accent = colore del retro della card e dei dettagli
    accent: "#4A2AF0",
    accentText: "#FFFFFF",
    category: "Curatela & fotografia",
    title: "Luoghi Comuni",
    subtitle:
      "Cantieri e siti monumentali della Verona storica e industriale negli scatti di Gabriele Basilico e Alessandra Chemollo.",
    year: "2022",
    place: "Verona, Italia",
    role: "Jr. Art Curator · Curatela collettiva",
    client: "Fondazione Cariverona · Urbs Picta · IUSVE · ABAV · Università di Verona",
    abstract:
      "Una mostra diffusa dedicata al rapporto tra fotografia e paesaggio, progettata collettivamente: dalla selezione e schedatura delle opere all'allestimento, dal testo curatoriale alla campagna di comunicazione.",
    hero: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/The_Scaliger_Bridge_and_the_Tower_of_Castelvecchio_at_sunset._Verona%2C_Italy.jpg/1920px-The_Scaliger_Bridge_and_the_Tower_of_Castelvecchio_at_sunset._Verona%2C_Italy.jpg",
      alt: "Ponte Scaligero e torre di Castelvecchio al tramonto, Verona",
      credit: "Foto: Ввласенко · Wikimedia Commons · CC BY-SA 3.0",
    },
    gallery: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Ponte_Pietra_Verona_di_notte.jpg/1920px-Ponte_Pietra_Verona_di_notte.jpg",
        alt: "Ponte Pietra a Verona di notte",
        credit: "Foto: Coaterflagman · Wikimedia Commons · CC BY 4.0",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Piazza_Bra_seen_from_the_arenas_%28Verona%29.jpg/1920px-Piazza_Bra_seen_from_the_arenas_%28Verona%29.jpg",
        alt: "Piazza Bra vista dall'Arena di Verona",
        credit: "Foto: Didier Descouens · Wikimedia Commons · CC BY-SA 4.0",
      },
    ],
    body: [
      "<p><strong>LUOGHI COMUNI</strong> nasce da un progetto inedito che ha riunito Fondazione Cariverona, l'Associazione Culturale Urbs Picta e un gruppo di studentesse e studenti di IUSVE, dell'Accademia di Belle Arti di Verona e dell'Università di Verona. L'obiettivo: costruire, nella sua totalità, un progetto curatoriale complesso dedicato al rapporto tra fotografia e paesaggio, attraverso gli sguardi di Gabriele Basilico e Alessandra Chemollo sui cantieri e sui siti monumentali della Verona storica e industriale.</p>",
      "<p>Il workshop ha alternato incontri in aula con tutor e professionisti del settore culturale a sessioni laboratoriali sul campo. Il progetto ha preso forma attraverso visite ai siti, selezione e studio delle opere, stesura del testo curatoriale, progettazione dell'allestimento e redazione del comunicato stampa e della campagna di comunicazione.</p>",
      "<p>Ne è nata una <strong>mostra diffusa</strong> sul territorio di Verona, aperta in tre sedi diverse e arricchita da un programma pubblico di talk, laboratori per diverse fasce d'età e conferenze.</p>",
    ],
    actions: [
      "Selezione, studio e schedatura delle opere fotografiche",
      "Stesura del testo curatoriale e del comunicato stampa",
      "Progettazione dell'allestimento nelle tre sedi",
      "Costruzione della campagna di comunicazione",
      "Coordinamento con tutor, istituzioni e professionisti coinvolti",
    ],
  },
  {
    slug: "tesi-esperienziale",
    num: "02",
    accent: "#22266E",
    accentText: "#FFFFFF",
    category: "Ricerca & marketing esperienziale",
    title: "I musei italiani nel contesto postmoderno",
    subtitle:
      "Un approccio di marketing esperienziale: dallo stato dell'arte alle implicazioni manageriali.",
    year: "2023",
    place: "IUSVE, Verona",
    role: "Tesi magistrale in Web Marketing & Digital Communication",
    client: "Relatore: Prof. Rosin Umberto",
    abstract:
      "Dalla desk analysis alla netnografia, fino alle interviste a chi i musei li vive e li dirige davvero: Rijksmuseum, MAO Torino, London Design Museum, TextielMuseum. Per restituire modelli e step operativi al management culturale.",
    hero: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Glass-roofed_interior_courtyard_of_the_Rijksmuseum_Amsterdam_%282%29.jpg/1920px-Glass-roofed_interior_courtyard_of_the_Rijksmuseum_Amsterdam_%282%29.jpg",
      alt: "Cortile interno con tetto in vetro del Rijksmuseum di Amsterdam",
      credit: "Foto: Ibex73 · Wikimedia Commons · CC BY 4.0",
    },
    gallery: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Rijksmuseum_interior%2C_June_2024.jpg/1920px-Rijksmuseum_interior%2C_June_2024.jpg",
        alt: "Interno del Rijksmuseum di Amsterdam",
        credit: "Foto: PCN02WPS · Wikimedia Commons · CC BY-SA 4.0",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Beyond_Van_Gogh%2C_Immersive_Experience%2C_Egypt_10.jpg/1920px-Beyond_Van_Gogh%2C_Immersive_Experience%2C_Egypt_10.jpg",
        alt: "Installazione immersiva Beyond Van Gogh",
        credit: "Foto: Hassan Hamdy wahidy · Wikimedia Commons · Public domain",
      },
    ],
    body: [
      "<p>Al termine del percorso magistrale in Web Marketing & Digital Communication, sotto la supervisione del Prof. Rosin Umberto, ho sviluppato una ricerca dal titolo <em>“I musei italiani nel contesto postmoderno: un approccio di marketing esperienziale. Dallo stato dell'arte alle implicazioni manageriali nel processo di implementazione dell'esperienza museale”</em>.</p>",
      "<p>Il punto di partenza sono le criticità del patrimonio museale italiano: i difficili equilibri tra frammentarietà e polarizzazione, pubblico e privato, tutela e valorizzazione, e le sfide legate all'accessibilità, con una stima del 78,4% degli italiani che non frequenta i musei. La ricerca indaga la situazione nazionale e internazionale per capire come il marketing esperienziale possa trasformare la visita in esperienza, evidenziando modelli, strategie e tattiche e dotando il management di una panoramica e di linee guida applicabili.</p>",
      "<p>Ho condotto una ricerca qualitativa su un campione di <strong>“musei esperienziali”</strong> basata su desk analysis e analisi netnografica, con un focus sull'analisi dell'offerta e dei linguaggi. Il lavoro di campo ha incluso interviste a operatori culturali di importanti istituzioni in Italia e all'estero: <strong>Rijksmuseum</strong> di Amsterdam, <strong>MAO</strong> di Torino, <strong>London Design Museum</strong> e <strong>TextielMuseum</strong> di Tilburg.</p>",
      "<p>I risultati disegnano un trend globale di trasformazione: i concetti di “interattivo” e “immersivo” diventano centrali, e il marketing esperienziale incrementa l'autonomia finanziaria, incentiva la partecipazione e valorizza le caratteristiche uniche dei siti. Ho sintetizzato il tutto in <strong>4 modelli di museo</strong> e <strong>7 step operativi</strong>, pensati per supportare operatori culturali e management.</p>",
    ],
    models: [
      { n: "1", name: "Il museo esperienziale", desc: "Interattivo e immersivo, progetta la visita come un'esperienza memorabile e multisensoriale." },
      { n: "2", name: "Il museo partecipativo", desc: "Coinvolge la comunità, incentiva la partecipazione e trasforma il pubblico in co-autore." },
      { n: "3", name: "Il museo imprenditoriale", desc: "Costruisce autonomia finanziaria attraverso fonti di ricavo diversificate e partnership." },
      { n: "4", name: "Il museo identitario", desc: "Valorizza l'unicità del sito e del patrimonio come leva distintiva e competitiva." },
    ],
    downloadLabel: "Scarica i 7 step (PDF)",
    downloadHref: "../assets/7-step-esperienza-museale.pdf",
    actions: [
      "Desk analysis e analisi netnografica sull'offerta museale",
      "Interviste a operatori culturali in Italia e all'estero",
      "Individuazione di modelli, strategie e tattiche di marketing esperienziale",
      "Sintesi operativa in 4 modelli e 7 step per il management",
    ],
  },
  {
    slug: "club-silencio",
    num: "03",
    accent: "#EF6E93",
    accentText: "#FFFFFF",
    category: "Social media & eventi culturali",
    title: "Una Notte al Museo",
    subtitle: "Club Silencio apre musei e fondazioni del Nord Italia al pubblico under 30.",
    year: "2022",
    place: "Torino, Italia",
    role: "Social Media Assistant",
    client: "Club Silencio",
    abstract:
      "25+ aperture serali di musei e fondazioni in tutto il Nord Italia per un pubblico under 30. Strategia social, contenuti digitali e presenza in loco per il format “Una Notte al Museo”.",
    hero: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Long_Night_of_Museums_in_%C5%81%C3%B3d%C5%BA_2014_Central_Museum_of_Textiles_05.jpg/1920px-Long_Night_of_Museums_in_%C5%81%C3%B3d%C5%BA_2014_Central_Museum_of_Textiles_05.jpg",
      alt: "Notte dei musei: pubblico serale in un museo del tessile",
      credit: "Foto: Zorro2212 · Wikimedia Commons · CC BY-SA 4.0",
    },
    gallery: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Long_Night_of_Museums_in_%C5%81%C3%B3d%C5%BA_2014_Central_Museum_of_Textiles_01.jpg/1920px-Long_Night_of_Museums_in_%C5%81%C3%B3d%C5%BA_2014_Central_Museum_of_Textiles_01.jpg",
        alt: "Evento serale della Notte dei Musei",
        credit: "Foto: Zorro2212 · Wikimedia Commons · CC BY-SA 4.0",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Long_Night_of_Museums_in_%C5%81%C3%B3d%C5%BA_2014_Central_Museum_of_Textiles_03.jpg/1920px-Long_Night_of_Museums_in_%C5%81%C3%B3d%C5%BA_2014_Central_Museum_of_Textiles_03.jpg",
        alt: "Apertura serale con pubblico giovane in museo",
        credit: "Foto: Zorro2212 · Wikimedia Commons · CC BY-SA 4.0",
      },
    ],
    body: [
      "<p><strong>Club Silencio</strong> è un'organizzazione non-profit nata per rendere la cultura più accessibile ai giovani under 30, attraverso format che trasformano musei ed edifici storici in spazi vivi e contemporanei.</p>",
      "<p>Il format di maggior successo, <strong>“Una Notte al Museo”</strong>, apre al pubblico musei e fondazioni italiane con visite guidate, food &amp; drink, selezioni musicali e intrattenimento a tema culturale. In qualità di Assistente alla Comunicazione ho preso parte all'organizzazione estiva 2022-2023 del palinsesto eventi.</p>",
      "<p>Il mio lavoro ha spaziato dalla promozione di oltre 25 eventi in musei e fondazioni del Nord Italia alla gestione dei canali social dell'organizzazione, con lo sviluppo di contenuti digitali pensati per massimizzare engagement, visibilità e partecipazione. Durante gli eventi ho fornito supporto operativo e logistico on site.</p>",
    ],
    actions: [
      "Promozione di 25+ eventi in musei e fondazioni del Nord Italia",
      "Gestione dei canali social e pianificazione del piano editoriale",
      "Creazione di contenuti digitali: video, grafiche e copywriting",
      "Supporto operativo e logistico durante gli eventi",
      "Strategie di engagement per il target under 30",
    ],
  },
  {
    slug: "villaggio-della-salute",
    num: "04",
    accent: "#6F97E8",
    accentText: "#FFFFFF",
    category: "Eventi & digital education",
    title: "Villaggio della Salute",
    subtitle: "“Genitori e figli nell'era dei social”: un incontro pubblico sul digitale in famiglia.",
    year: "2023",
    place: "Straconi, Italia",
    role: "Rappresentante agenzia · Relatrice esperta di digitale",
    client: "Involucra Agency",
    abstract:
      "“Genitori e figli nell'era dei social”: un incontro pubblico con le psicoterapeute di Spazio Ascolto, in cui ho rappresentato Involucra portando il punto di vista della comunicazione digitale.",
    hero: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Audience_at_the_Access_to_Arts_Conference_Chandigarh.jpg/1920px-Audience_at_the_Access_to_Arts_Conference_Chandigarh.jpg",
      alt: "Pubblico in ascolto durante una conferenza",
      credit: "Foto: Wikilover90 · Wikimedia Commons · CC BY-SA 4.0",
    },
    gallery: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Person_looking_at_smartphone_in_the_dark_%282%29.jpg/1920px-Person_looking_at_smartphone_in_the_dark_%282%29.jpg",
        alt: "Persona che guarda lo smartphone al buio",
        credit: "Foto: Japanexperterna.se · Wikimedia Commons · CC BY-SA 2.0",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Man_using_smartphone_outdoors.jpg/1920px-Man_using_smartphone_outdoors.jpg",
        alt: "Uomo che usa lo smartphone all'aperto",
        credit: "Foto: Bhullargraphic · Wikimedia Commons · CC BY-SA 4.0",
      },
    ],
    body: [
      "<p>Nell'ambito del <strong>Villaggio della Salute</strong>, l'agenzia Involucra ha curato l'incontro <strong>“Genitori e figli nell'era dei social”</strong>, un momento di confronto dedicato alle famiglie e al rapporto tra crescita, benessere e mondo digitale.</p>",
      "<p>L'evento ha visto la partecipazione delle Dott.sse <strong>Fulvia Piobalbo</strong> e <strong>Manuela Devalle</strong>, psicoterapeute di Spazio Ascolto, con Involucra come partner di marketing. In rappresentanza dell'agenzia ho portato il punto di vista della comunicazione digitale, intervenendo come relatrice ed esperta di digitale.</p>",
      "<p>L'obiettivo era offrire ai genitori strumenti concreti per affrontare l'educazione digitale dei figli: dalla consapevolezza nell'uso dei social alla costruzione di abitudini più sane, senza demonizzare la tecnologia, ma imparando a gestirla in famiglia.</p>",
    ],
    actions: [
      "Rappresentanza dell'agenzia Involucra durante l'evento",
      "Intervento come relatrice ed esperta di digitale",
      "Supporto alla costruzione del format e della comunicazione",
      "Coordinamento con le relatrici e gli organizzatori",
    ],
  },
  {
    slug: "giornata-del-giappone",
    num: "05",
    accent: "#E2402B",
    accentText: "#FFFFFF",
    category: "Eventi & esperienze immersive",
    title: "Giornata del Giappone",
    subtitle: "Una giornata intera di laboratori, workshop ed eventi dedicati alla cultura giapponese.",
    year: "2024 e 2025",
    place: "Forte di Bard, Valle d'Aosta",
    role: "Events Specialist",
    client: "Forte di Bard",
    abstract:
      "A partire dalla mostra “Eroi, evoluzione di un mito. Dal Giappone antico al contemporaneo”, ho costruito una giornata capace di attivare ogni spazio del Forte. Tutte le attività in sold out.",
    hero: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Fushimi-Inari-taisha_sembon-torii_500px_photo_%28188687425%29.jpg/1920px-Fushimi-Inari-taisha_sembon-torii_500px_photo_%28188687425%29.jpg",
      alt: "Sentiero di torii rossi al santuario Fushimi Inari-taisha, Kyoto",
      credit: "Foto: Chi King · Wikimedia Commons · CC BY 3.0",
    },
    gallery: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Origami_cranes_in_Nagasaki.jpg/1920px-Origami_cranes_in_Nagasaki.jpg",
        alt: "Gru di origami colorate a Nagasaki",
        credit: "Foto: TimMilesWright · Wikimedia Commons · CC0",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Kintsugi_art.jpg/1920px-Kintsugi_art.jpg",
        alt: "Ciotola riparata con la tecnica del kintsugi",
        credit: "Foto: martinjhoward2 · Wikimedia Commons · CC BY-SA 2.0",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Japanese_tea_ceremony_20100502_Japan_Matsuri_07.jpg/1920px-Japanese_tea_ceremony_20100502_Japan_Matsuri_07.jpg",
        alt: "Cerimonia del tè giapponese al Japan Matsuri",
        credit: "Foto: Georges Seguin (Okki) · Wikimedia Commons · CC BY-SA 3.0",
      },
    ],
    body: [
      "<p>Dalla mostra <strong>“Eroi, evoluzione di un mito. Dal Giappone antico al contemporaneo”</strong> del Forte di Bard è nata l'idea di una <strong>Giornata del Giappone</strong>: un progetto a tutto tondo capace di coinvolgere tutti gli spazi del Forte e tutti i suoi pubblici, con l'obiettivo di creare un'esperienza immersiva che animasse il luogo a 360°.</p>",
      "<p>Ho strutturato un palinsesto di laboratori, workshop, eventi e momenti performativi dedicati alla cultura giapponese, costruendo una giornata a incastro in cui ogni attività trovasse il proprio spazio e il proprio ritmo.</p>",
      "<p>Gli <strong>spazi attivi</strong> hanno incluso la mostra con visite guidate, le sale conferenze con teatro, conferenza tematica ed esibizioni, le sale private per workshop e attività e il ristorante con menu a tema, il tutto coordinato da un allestimento dedicato degli ambienti.</p>",
      "<p>Sul fronte <strong>logistico</strong> ho curato le prenotazioni anticipate dei laboratori, una tariffa comprensiva dell'intera giornata e slot orari a incastro per ogni attività. Il risultato: <strong>sold out</strong> per ogni evento in programma.</p>",
    ],
    actions: [
      "Ideazione e strutturazione del palinsesto della giornata",
      "Attivazione di tutti gli spazi del Forte (mostra, conferenze, workshop, ristorante)",
      "Allestimento a tema e coordinamento degli ambienti",
      "Gestione di prenotazioni, tariffa giornaliera e slot orari",
      "Coordinamento on site di laboratori ed eventi",
    ],
    results: ["Sold out per ogni evento in programma."],
  },
  {
    slug: "gianna-nannini",
    num: "06",
    accent: "#FF5D4D",
    accentText: "#FFFFFF",
    category: "Live & logistica eventi",
    title: "Sei nell'anima · Festival European Leg",
    subtitle: "La tappa del tour europeo estivo di Gianna Nannini al Forte di Bard.",
    year: "2025",
    place: "Forte di Bard, Valle d'Aosta",
    role: "Logistica evento · Coordinamento on site · Hospitality",
    client: "Sei nell'anima · Festival European Leg 2025",
    abstract:
      "Coordinamento on site e gestione completa del rider hospitality per la data valdostana del tour di Gianna Nannini: catering, ristorante, backstage, camerini e assistenza durante l'evento.",
    hero: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Beach-Please-2022-crowd-stage-lights-night-performance.jpg/1920px-Beach-Please-2022-crowd-stage-lights-night-performance.jpg",
      alt: "Pubblico e luci del palco durante un concerto serale",
      credit: "Foto: PinkBeachPlanet · Wikimedia Commons · CC BY-SA 4.0",
    },
    gallery: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Musicians_performing_on_stage_at_a_night_concert_featuring_vibrant_lights_and_energetic_atmosphere.jpg/1920px-Musicians_performing_on_stage_at_a_night_concert_featuring_vibrant_lights_and_energetic_atmosphere.jpg",
        alt: "Musicisti sul palco durante un concerto notturno",
        credit: "Foto: Shixart1985 · Wikimedia Commons · CC BY 2.0",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/A_large_crowd_enjoys_a_music_concert_illuminated_by_colorful_lights_and_a_stunning_stage_display.jpg/1920px-A_large_crowd_enjoys_a_music_concert_illuminated_by_colorful_lights_and_a_stunning_stage_display.jpg",
        alt: "Grande pubblico a un concerto illuminato da luci colorate",
        credit: "Foto: Shixart1985 · Wikimedia Commons · CC BY 2.0",
      },
    ],
    body: [
      "<p>Il <strong>“Sei nell'anima · Festival European Leg 2025”</strong> è il tour estivo nei festival che ha portato Gianna Nannini, tra luglio e settembre 2025, in Italia e in Europa. Una produzione importante, con esigenze organizzative e di ospitalità elevate.</p>",
      "<p>Per la data del Forte di Bard ho seguito la <strong>logistica dell'evento</strong>, il <strong>coordinamento on site</strong> e la gestione completa delle richieste del <strong>rider hospitality</strong>: dalle necessità di catering e ristorante all'allestimento di backstage e camerini, fino all'assistenza durante tutto lo svolgimento dell'evento.</p>",
      "<p>Un lavoro fatto di precisione e tempestività, in cui ogni dettaglio, dagli orari alle esigenze dell'artista e della produzione, contribuisce alla riuscita di una serata live.</p>",
    ],
    actions: [
      "Logistica dell'evento e coordinamento on site",
      "Gestione delle richieste del rider hospitality",
      "Coordinamento di catering e ristorante",
      "Allestimento di backstage e camerini",
      "Assistenza durante l'evento",
    ],
  },
  {
    slug: "compay-segundo",
    num: "07",
    accent: "#E3A13C",
    accentText: "#1B1721",
    category: "Live & logistica eventi",
    title: "Grupo Compay Segundo",
    subtitle: "Il son cubano del Buena Vista Social Club arriva al Forte di Bard.",
    year: "2026",
    place: "Forte di Bard, Valle d'Aosta",
    role: "Logistica evento · Coordinamento on site · Hospitality",
    client: "Vívelo International Tour",
    abstract:
      "L'autentico son cubano del Buena Vista Social Club, oggi guidato da Salvador Repilado Labrada. Per il Vívelo International Tour ho seguito logistica, on site e ospitalità della band.",
    hero: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/FIL_2012_-_Orquesta_Buena_Vista_Social_Club_2.JPG/1920px-FIL_2012_-_Orquesta_Buena_Vista_Social_Club_2.JPG",
      alt: "Orquesta Buena Vista Social Club dal vivo",
      credit: "Foto: XIIIfromTOKYO · Wikimedia Commons · CC BY-SA 3.0",
    },
    gallery: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/ZMF_2015_Buena_Vista_Social_Club_Orchestra_IMGP9348.JPG/1920px-ZMF_2015_Buena_Vista_Social_Club_Orchestra_IMGP9348.JPG",
        alt: "Orchestra Buena Vista Social Club in concerto",
        credit: "Foto: Ice Boy Tell · Wikimedia Commons · CC BY-SA 3.0",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Buena_Vista_Social_Club_ZMF_2015_IMGP9070.jpg/1920px-Buena_Vista_Social_Club_ZMF_2015_IMGP9070.jpg",
        alt: "Musicista del Buena Vista Social Club sul palco",
        credit: "Foto: Ice Boy Tell · Wikimedia Commons · CC BY-SA 4.0",
      },
    ],
    body: [
      "<p>Il <strong>Grupo Compay Segundo</strong> è tornato in Italia nell'estate 2026 con il <strong>“Vívelo International Tour”</strong>, una tournée estiva di 14 date che porta sui palchi italiani l'autentico <em>son cubano</em>.</p>",
      "<p>Partita a fine luglio da Giulianova, la tournée celebra l'eredità musicale del leggendario artista, oggi portata avanti dal figlio <strong>Salvador Repilado Labrada</strong>, contrabbassista e testimone diretto del progetto Buena Vista Social Club.</p>",
      "<p>Per la tappa al Forte di Bard ho curato la logistica dell'evento, il coordinamento on site e la gestione delle richieste del rider hospitality: catering, ristorante, backstage, camerini e assistenza durante l'evento.</p>",
    ],
    actions: [
      "Logistica dell'evento e coordinamento on site",
      "Gestione delle richieste del rider hospitality",
      "Coordinamento di catering e ristorante",
      "Allestimento di backstage e camerini",
      "Assistenza durante l'evento",
    ],
  },
  {
    slug: "cosmo-matinee",
    num: "08",
    accent: "#F2B752",
    accentText: "#1B1721",
    category: "Live & logistica eventi",
    title: "Cosmo · Matinée Tour",
    subtitle: "Un concerto alle prime luci dell'alba: “La fonte” in un viaggio sonoro dal risveglio.",
    year: "2026",
    place: "Forte di Bard, Valle d'Aosta",
    role: "Logistica evento · Coordinamento on site · Hospitality",
    client: "Matinée Tour 2026 · Cosmo",
    abstract:
      "Concerti alle 6 e 7 del mattino: un format fuori dagli schemi che richiede accoglienza a orari inconsueti e una logistica pensata per trasformare l'alba in un'esperienza unica.",
    hero: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Sunrise_at_viru_bog.jpg/1920px-Sunrise_at_viru_bog.jpg",
      alt: "Alba su una palude luminosa",
      credit: "Foto: Abrget47j · Wikimedia Commons · CC BY-SA 3.0",
    },
    gallery: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Sunrise_over_Benmore_Range%2C_New_Zealand.jpg/1920px-Sunrise_over_Benmore_Range%2C_New_Zealand.jpg",
        alt: "Alba sulla catena montuosa del Benmore Range, Nuova Zelanda",
        credit: "Foto: Michal Klajban · Wikimedia Commons · CC BY-SA 4.0",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Tessellated_Pavement_Sunrise_Landscape.jpg/1920px-Tessellated_Pavement_Sunrise_Landscape.jpg",
        alt: "Alba su Tessellated Pavement, Tasmania",
        credit: "Foto: JJ Harrison · Wikimedia Commons · CC BY-SA 2.5",
      },
    ],
    body: [
      "<p>Il <strong>Matinée Tour 2026</strong> di Cosmo è un format innovativo: i concerti si tengono alle prime luci dell'alba, spesso intorno alle 06:00 o alle 07:00 del mattino. L'artista presenta il suo album <strong>“La fonte”</strong>, trasformando il live in un viaggio sonoro dal risveglio all'inizio della giornata.</p>",
      "<p>Un evento fuori dagli schemi che richiede un'organizzazione altrettanto speciale: accoglienza a orari inconsueti, gestione delle luci e dell'atmosfera all'alba e una logistica pensata per accompagnare pubblico e produzione in un'esperienza unica.</p>",
      "<p>Per la data al Forte di Bard ho seguito la logistica dell'evento, il coordinamento on site e la gestione delle richieste del rider hospitality: catering, ristorante, backstage, camerini e assistenza durante l'evento.</p>",
    ],
    actions: [
      "Logistica dell'evento e coordinamento on site",
      "Gestione delle richieste del rider hospitality",
      "Coordinamento di catering e ristorante",
      "Allestimento di backstage e camerini",
      "Assistenza durante l'evento",
    ],
  },
];

const ABOUT = {
  bio: [
    "<p>Mi chiamo Beatrice Perrone e lavoro tra <strong>eventi, comunicazione e marketing strategico</strong>. Oggi sono Events Specialist al Forte di Bard, dove coordino end-to-end un portfolio di eventi pubblici e privati, festival culturali, concerti dal vivo con artisti internazionali, produzioni teatrali, conferenze, workshop e incentive.</p>",
    "<p>Prima di arrivare in Valle d'Aosta ho lavorato in <strong>Involucra</strong> come Social Media Manager e in <strong>Club Silencio</strong> come Social Media Assistant, costruendo strategie di comunicazione e contenuti per brand, musei e fondazioni. Ho una laurea magistrale in Web Marketing &amp; Digital Communication e una laurea in Scienze e Tecniche Psicologiche: un mix che mi permette di leggere il pubblico, oltre che i numeri.</p>",
    "<p>Credo in eventi <strong>sostenibili, curati e pensati per l'esperienza</strong> delle persone: il dettaglio fa la differenza, e la cura parte dall'ascolto del pubblico.</p>",
  ],
  experience: [
    { role: "Events Specialist", org: "Forte di Bard, Bard", period: "2024 · oggi" },
    { role: "Social Media Manager", org: "Involucra Agency, Torino", period: "2023 · 2024" },
    { role: "Social Media Assistant", org: "Club Silencio, Torino", period: "2022" },
    { role: "Jr. Art Curator", org: "M.A.D.S. Gallery, Milano", period: "2022" },
    { role: "Marketing & Communication Associate", org: "JEBV, Verona", period: "2021 · 2022" },
  ],
  skills: [
    "Event management & coordination",
    "Comunicazione e copywriting",
    "Social media strategy",
    "Content creation (video & grafica)",
    "Budget e logistica eventi",
    "Marketing strategico",
    "Sostenibilità & audience engagement",
  ],
  languages: [
    { lang: "Italiano", level: "Madrelingua" },
    { lang: "English", level: "C1 · IELTS (British Council)" },
    { lang: "Español", level: "B2" },
    { lang: "Français", level: "B2" },
    { lang: "Português", level: "B2" },
  ],
  education: [
    { title: "Master in Web Marketing & Digital Communication", org: "IUSVE, Verona", period: "2020 · 2023" },
    { title: "Laurea in Scienze e Tecniche Psicologiche", org: "Università di Torino", period: "2015 · 2018" },
    { title: "Liceo Linguistico", org: "I.I.S. Norberto Bobbio, Carignano", period: "2010 · 2015" },
  ],
  certifications: [
    "Visual Art Collections Management & Curating · Fondazione Cariverona",
    "Foundations of UX Design · Google",
    "Google Digital Training · Google",
    "Excel Skills for Business · Macquarie University",
  ],
};

module.exports = { SITE, PROJECTS, ABOUT, PALETTE };