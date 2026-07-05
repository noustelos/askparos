/* --------------------------------------------------------------------------
   ASK THE ISLAND — scripted demo (no backend; nameless island concierge:
   EN = warm, breezy island voice, EL = clean professional concierge)
   -------------------------------------------------------------------------- */

const ISLAND_SCRIPT = {
  en: {
    greeting: "Welcome to Paros — whitewashed villages, turquoise coves and an island that refuses to be rushed. Ask me about beaches, Naousa evenings, the Antiparos trip, food, ferries or getting around. Plain answers, island pace. Where shall we start?",
    sunset: "Paros does its best work in the evening. Parikia's waterfront faces west — the old windmill by the port and the Kastro quarter catch the full gold. For something quieter, the Paros Park amphitheater area near Monastiri makes the sunset feel like a private screening, and the Pounta side looks across to Antiparos as the sun drops behind it. Go a little early; the light does the rest.",
    antiparos: "Yes — and it's easier than most day trips. The car ferry from Pounta crosses in about ten minutes, and in season passenger boats also leave from Parikia (confirm the schedules). On the other side: Antiparos town's easy lanes, the famous cave with its stalactites up the hill (paid entry), and quieter beaches within walking distance of the port. Half a day works; a full day is better.",
    beach: "Depends on the day's mood — and the wind's. Kolymbithres is the icon: granite rocks sculpted into little coves, calm turquoise water inside Naousa bay. Santa Maria is organized with water sports, Golden Beach is the long sandy classic on the southeast, and Marcello and Krios sit just across Parikia bay for an easy swim near town. If the meltemi is working, stay west or south — Aliki and Faragas keep things gentle.",
    port: "Arrivals are simple here. Ferries land at Parikia, the island's main port and capital — the town is right there, so you can walk to a café before you've decided anything. For Naousa or the east coast there are buses from the port, taxis (limited in high season) and private transfers — arrange one ahead if you land in August. The airport sits south, near Aliki, about 25–30 minutes from Parikia.",
    oneDay: "One day, done properly: morning in Parikia — the Kastro lanes and Panagia Ekatontapiliani, one of Greece's oldest churches. Midday, a swim: Kolymbithres or Marcello, depending on your direction. Afternoon, up to Lefkes for marble lanes and mountain air. The evening belongs to Naousa — the little harbor, the ruined Venetian kastro, dinner by the water. That's the island in one honest day.",
    windy: "The meltemi visits Paros too — but this island made a sport of it. Golden Beach and New Golden Beach turn into a windsurfing stage (worth watching even from a towel). If you'd rather escape the wind, keep to the west and south — Parikia bay, Aliki, Faragas — or go inland: Lefkes is calm, and the Byzantine path to Prodromos is a beautiful hour. The wind rearranges the plan, not the day.",
    food: "You're on the right island. Look for gouna — sun-dried mackerel grilled over coals, a Naousa harbor specialty — plus fresh fish, local cheeses and Paros wine, which the island has made since antiquity. Souma, the local spirit, tends to appear after dinner whether you ordered it or not. Naousa and Parikia have the waterfront tables; Lefkes and Aliki keep it more local. Prices vary with the view.",
    family: "Paros is one of the easier islands with kids. Santa Maria and Golden Beach are organized with shallow entries; Aliki is a calm fishing village with a gentle beach and tavernas a few steps away; Livadia sits right by Parikia. Distances are short, buses are reliable, and Naousa's harbor makes an easy evening walk with ice cream at the end. Keep it slow — the island rewards it.",
    boatTour: "A boat day is the right instinct here. Trips loop around Paros and Antiparos with swimming stops at coves you can't reach by road — often including Despotiko, the uninhabited island with an ancient sanctuary. It's a paid experience, usually a full day with lunch on board. Confirm the route, departure point and sea conditions directly with the provider — the meltemi gets a vote.",
    antiparosTour: "The classic combination: cross to Antiparos and visit the cave. It sits up the hill south of town — hundreds of steps down into serious stalactites (paid entry, sensible shoes). Pair it with Antiparos town and a swim near the port. The ferry from Pounta crosses in about ten minutes; seasonal boats also run from Parikia. Confirm schedules before you plan the day around it.",
    quietVillages: "The quiet is inland, and it's beautiful. Lefkes — the old mountain capital — is marble lanes, amphitheater views and slow coffee. Marpissa and Prodromos are whitewashed and genuinely lived-in, and the Byzantine path linking Lefkes to Prodromos is a lovely walk. Down south, Aliki keeps its fishing-village pace. Go late afternoon, when the light softens and the day-trippers thin out.",
    transfer: "Easily sorted. Paros is compact: the airport sits in the south near Aliki (about 25–30 minutes from Parikia), and ferries arrive at Parikia port. Buses connect the main towns, taxis are limited in peak season, and a private transfer takes the guesswork out of an August arrival. Arrange it before you land and start the holiday at the gangway.",
    photographer: "Good thinking — this light deserves a professional. Golden hour in the Kastro lanes of Parikia, Naousa's little harbor, or the sculpted rocks at Kolymbithres all photograph beautifully, and a local photographer knows exactly when each one works. I can point you to the category — confirm dates, style and details directly with the provider.",
    wedding: "A ceremony on Paros — the island will do most of the decorating. Naousa's harbor, a sunset toward Antiparos, marble lanes in Lefkes: the backdrops are ready. You'll want a local planner for the logistics and a photographer for the moment itself. I can guide you to the right categories; the specifics you'll confirm directly with each provider. Congratulations, by the way.",
    windsurf: "You've come to the right island — Paros is one of Europe's windsurfing capitals. New Golden Beach and Golden Beach on the southeast coast catch the meltemi cleanly and have schools and rental centers for every level (paid — book ahead in July and August). Santa Maria also runs water sports on lighter days. Lessons, gear and conditions: confirm directly with the centers.",
    carRental: "Useful, not mandatory. Buses link Parikia, Naousa, Lefkes and the main beaches well, and taxis and transfers cover arrivals. But a car or small ATV unlocks the island's corners — Faragas, the ancient marble quarries at Marathi, villages between bus times. Roads are good by island standards; August parking in Naousa is its own sport. If you rent, book early in season.",
    fallback: "That one's beyond this little preview. This is a scripted demo of what AskParos could be, so I keep to what I know: beaches, villages, Antiparos, food, ferries and getting around. Try one of those — or, if you'd like the full concierge treatment for your own island, someone's listening.",
    emergency: "First — are you safe right now? For any emergency in Greece, call 112 (European emergency number). For medical help, 166; police, 100; coast guard, 108. If this is urgent, contact them now — I can wait. Once you're safe, I'm here to help with whatever comes next."
  },
  el: {
    greeting: "Καλώς ήρθατε — είμαι ο ψηφιακός concierge για την Πάρο. Μπορώ να βοηθήσω με παραλίες, χωριά, την Αντίπαρο, φαγητό, μετακινήσεις και πρακτικά ζητήματα. Ρωτήστε με ό,τι θέλετε.",
    sunset: "Η παραλιακή της Παροικιάς κοιτάζει δυτικά — ο ανεμόμυλος στο λιμάνι και η συνοικία του Κάστρου είναι τα κλασικά σημεία για το ηλιοβασίλεμα. Για πιο ήσυχη επιλογή, το Πάρκο Πάρου κοντά στο Μοναστήρι, ή η πλευρά της Πούντας με θέα προς την Αντίπαρο. Καλή ιδέα να πάτε λίγο νωρίτερα για καλή θέση.",
    antiparos: "Ναι, είναι από τις πιο εύκολες εκδρομές. Το φέρι από την Πούντα κάνει περίπου δέκα λεπτά, και τη σεζόν υπάρχουν και καραβάκια από την Παροικιά (επιβεβαιώστε τα δρομολόγια). Στην Αντίπαρο: η χώρα με τα ήσυχα σοκάκια, το σπήλαιο με τους σταλακτίτες (με εισιτήριο) και παραλίες σε κοντινή απόσταση από το λιμάνι. Μισή μέρα αρκεί· μια ολόκληρη είναι καλύτερη.",
    beach: "Εξαρτάται από τη διάθεση — και τον αέρα. Οι Κολυμπήθρες είναι το πιο χαρακτηριστικό σκηνικό, με τους σμιλεμένους γρανιτένιους βράχους μέσα στον κόλπο της Νάουσας. Η Σάντα Μαρία είναι οργανωμένη με θαλάσσια σπορ, η Χρυσή Ακτή είναι η μεγάλη αμμουδιά στα νοτιοανατολικά, ενώ ο Μαρτσέλο και ο Κριός είναι βολικές επιλογές απέναντι από την Παροικιά. Με μελτέμι, προτιμήστε δυτικά ή νότια — Αλυκή και Φάραγγας.",
    port: "Οι αφίξεις εδώ είναι απλές. Τα πλοία φτάνουν στην Παροικιά, το κύριο λιμάνι και πρωτεύουσα — η πόλη είναι ακριβώς εκεί. Για Νάουσα και ανατολικές περιοχές υπάρχουν λεωφορεία από το λιμάνι, ταξί (περιορισμένα την υψηλή σεζόν) και ιδιωτικά transfer — κανονίστε το από πριν αν φτάνετε Αύγουστο. Το αεροδρόμιο βρίσκεται νότια, κοντά στην Αλυκή, περίπου 25–30 λεπτά από την Παροικιά.",
    oneDay: "Για μία μέρα: το πρωί Παροικιά — τα σοκάκια του Κάστρου και η Παναγία Εκατονταπυλιανή, από τις παλαιότερες εκκλησίες της Ελλάδας. Το μεσημέρι ένα μπάνιο — Κολυμπήθρες ή Μαρτσέλο, ανάλογα με την κατεύθυνση. Το απόγευμα Λεύκες, με τα μαρμάρινα σοκάκια. Το βράδυ ανήκει στη Νάουσα — λιμανάκι, ενετικό κάστρο, φαγητό δίπλα στο νερό.",
    windy: "Το μελτέμι επισκέπτεται και την Πάρο — αλλά το νησί το έκανε άθλημα. Η Χρυσή Ακτή και η Νέα Χρυσή Ακτή γεμίζουν πανιά windsurfing (αξίζει και μόνο ως θέαμα). Αν προτιμάτε απάνεμα, μείνετε δυτικά και νότια — κόλπος Παροικιάς, Αλυκή, Φάραγγας — ή πηγαίνετε στην ενδοχώρα: οι Λεύκες είναι ήρεμες και το βυζαντινό μονοπάτι προς τον Πρόδρομο είναι όμορφος περίπατος.",
    food: "Δοκιμάστε γούνα — λιαστό σκουμπρί στα κάρβουνα, σπεσιαλιτέ της Νάουσας — φρέσκο ψάρι, τοπικά τυριά και παριανό κρασί, με παράδοση από την αρχαιότητα. Η σούμα, το τοπικό απόσταγμα, συχνά έρχεται στο τέλος του γεύματος. Νάουσα και Παροικιά έχουν τα τραπέζια δίπλα στο νερό· Λεύκες και Αλυκή κρατούν πιο ντόπιο ρυθμό.",
    family: "Η Πάρος είναι από τα πιο εύκολα νησιά για οικογένειες. Η Σάντα Μαρία και η Χρυσή Ακτή είναι οργανωμένες με ρηχά νερά, η Αλυκή είναι ήσυχο ψαροχώρι με απαλή παραλία και ταβέρνες δίπλα, και τα Λιβάδια είναι ακριβώς δίπλα στην Παροικιά. Οι αποστάσεις είναι μικρές και το λιμανάκι της Νάουσας είναι ιδανική βραδινή βόλτα. Κρατήστε το πρόγραμμα απλό.",
    boatTour: "Μια ημερήσια κρουαζιέρα γύρω από Πάρο και Αντίπαρο περιλαμβάνει συνήθως στάσεις για μπάνιο σε κόλπους χωρίς οδική πρόσβαση, συχνά και στο Δεσποτικό, το ακατοίκητο νησί με το αρχαίο ιερό. Είναι πληρωμένη εμπειρία, συνήθως ολοήμερη. Επιβεβαιώστε διαδρομή, σημείο αναχώρησης και θαλάσσιες συνθήκες απευθείας με τον πάροχο.",
    antiparosTour: "Ο κλασικός συνδυασμός: πέρασμα στην Αντίπαρο και επίσκεψη στο σπήλαιο με τους σταλακτίτες (με εισιτήριο — θέλει άνετα παπούτσια). Συμπληρώστε με βόλτα στη χώρα της Αντιπάρου και μπάνιο κοντά στο λιμάνι. Το φέρι από την Πούντα κάνει περίπου δέκα λεπτά· τη σεζόν υπάρχουν και καραβάκια από την Παροικιά. Επιβεβαιώστε τα δρομολόγια εκ των προτέρων.",
    quietVillages: "Η ήσυχη Πάρος είναι στην ενδοχώρα. Οι Λεύκες — η παλιά ορεινή πρωτεύουσα — έχουν μαρμάρινα σοκάκια και αμφιθεατρική θέα. Η Μάρπησσα και ο Πρόδρομος είναι αυθεντικά, ζωντανά χωριά, και το βυζαντινό μονοπάτι Λεύκες–Πρόδρομος είναι όμορφος περίπατος. Νότια, η Αλυκή κρατά ρυθμό ψαροχωριού. Προτιμήστε αργά το απόγευμα, όταν μαλακώνει το φως.",
    transfer: "Η Πάρος είναι βολική: το αεροδρόμιο βρίσκεται νότια, κοντά στην Αλυκή (περίπου 25–30 λεπτά από την Παροικιά), και τα πλοία φτάνουν στο λιμάνι της Παροικιάς. Υπάρχουν λεωφορεία προς τις βασικές περιοχές, ταξί (περιορισμένα στην αιχμή της σεζόν) και ιδιωτικά transfer. Κανονίστε τη μεταφορά πριν φτάσετε για ομαλή άφιξη.",
    photographer: "Ένας τοπικός φωτογράφος γνωρίζει το φως και τα σημεία — τα σοκάκια του Κάστρου στην Παροικιά, το λιμανάκι της Νάουσας, τους βράχους στις Κολυμπήθρες. Μπορώ να σας κατευθύνω στην κατηγορία υπηρεσίας — επιβεβαιώστε ημερομηνίες, στυλ και λεπτομέρειες απευθείας με τον πάροχο.",
    wedding: "Για πρόταση γάμου ή γάμο στην Πάρο, ένας τοπικός planner βοηθά με την οργάνωση και ένας φωτογράφος καταγράφει τη στιγμή. Το λιμανάκι της Νάουσας, το ηλιοβασίλεμα προς την Αντίπαρο ή οι Λεύκες προσφέρουν ιδανικό σκηνικό. Μπορώ να σας κατευθύνω στις κατηγορίες υπηρεσιών — οι λεπτομέρειες επιβεβαιώνονται με κάθε πάροχο.",
    windsurf: "Η Πάρος είναι από τους κορυφαίους προορισμούς windsurfing στην Ευρώπη. Η Νέα Χρυσή Ακτή και η Χρυσή Ακτή στα νοτιοανατολικά πιάνουν καθαρό μελτέμι και έχουν σχολές και ενοικίαση εξοπλισμού για κάθε επίπεδο (πληρωμένη υπηρεσία — κλείστε νωρίς Ιούλιο–Αύγουστο). Η Σάντα Μαρία έχει επίσης θαλάσσια σπορ τις πιο ήπιες μέρες. Επιβεβαιώστε συνθήκες και διαθεσιμότητα με τα κέντρα.",
    carRental: "Χρήσιμο, όχι απαραίτητο. Τα λεωφορεία συνδέουν καλά Παροικιά, Νάουσα, Λεύκες και τις βασικές παραλίες, και τα transfer καλύπτουν τις αφίξεις. Ένα αυτοκίνητο ή ATV όμως ξεκλειδώνει τις πιο απομακρυσμένες γωνιές — Φάραγγας, τα αρχαία λατομεία μαρμάρου στο Μαράθι, χωριά εκτός δρομολογίων. Το πάρκινγκ στη Νάουσα τον Αύγουστο είναι δύσκολο. Αν νοικιάσετε, κλείστε νωρίς τη σεζόν.",
    fallback: "Αυτό δεν το καλύπτω σε αυτή την demo έκδοση. Μπορώ να βοηθήσω με παραλίες, χωριά, την Αντίπαρο, φαγητό, μετακινήσεις και πρακτικά ζητήματα για την Πάρο. Δοκιμάστε μία από αυτές τις κατηγορίες. (Πρόκειται για επίδειξη — το πλήρες AskParos διατίθεται.)",
    emergency: "Πρώτα απ' όλα — είστε ασφαλής αυτή τη στιγμή; Για επείγοντα στην Ελλάδα, καλέστε 112 (Ευρωπαϊκός αριθμός έκτακτης ανάγκης). Για ιατρική βοήθεια 166, αστυνομία 100, λιμενικό 108. Αν είναι επείγον, επικοινωνήστε τώρα — μπορώ να περιμένω. Μόλις είστε ασφαλής, είμαι εδώ να βοηθήσω."
  }
};

/* Known card-prefill questions (must mirror the data-chat-prefill-* attributes
   in index.html) — typed input matching maps these to ISLAND_SCRIPT keys. */
const ISLAND_QUESTIONS = {
  en: {
    boatTour: "Can you suggest a boat trip around Paros and Antiparos?",
    antiparosTour: "Tell me about an Antiparos and cave day trip.",
    quietVillages: "Show me the quiet villages of Paros.",
    transfer: "I need a port or airport transfer.",
    photographer: "Can you arrange a photographer?",
    wedding: "I'm planning a proposal or wedding.",
    windsurf: "Where can I windsurf in Paros?",
    carRental: "Do I need to rent a car?"
  },
  el: {
    boatTour: "Μπορείς να προτείνεις μια βόλτα με σκάφος γύρω από Πάρο και Αντίπαρο;",
    antiparosTour: "Πες μου για μια ημερήσια εκδρομή σε Αντίπαρο και σπήλαιο.",
    quietVillages: "Δείξε μου τα ήσυχα χωριά της Πάρου.",
    transfer: "Χρειάζομαι μεταφορά από το λιμάνι ή το αεροδρόμιο.",
    photographer: "Μπορείς να κανονίσεις φωτογράφο;",
    wedding: "Οργανώνω πρόταση γάμου ή γάμο.",
    windsurf: "Πού μπορώ να κάνω windsurf στην Πάρο;",
    carRental: "Χρειάζεται να νοικιάσω αυτοκίνητο;"
  }
};

const translations = {
  en: {
    pageTitle: "AskParos.ai – Calm, Clear Paros Answers",
    metaDescription: "AskParos.ai is your calm, clear shortcut to Paros: beaches, villages, Antiparos, ferries and food — answered simply, without the ten open tabs.",
    ogTitle: "AskParos.ai – Calm, Clear Paros Answers",
    ogDescription: "Beaches, villages, Antiparos, ferries and food, without the ten open tabs. Ask anything. The island keeps it simple.",
    twitterDescription: "Your calm, clear shortcut to Paros. Useful answers, minimal noise.",
    navHow: "How it works",
    navTours: "Tours",
    navConcierge: "Concierge",
    navEarlyAccess: "Ask AI",
    startAsking: "Start asking",
    seeQuestions: "Try a question",
    heroTitle: "Your calm, clear shortcut to Paros.",
    heroSubtitle: "Beaches, villages, Antiparos, ferries and food, without the ten open tabs.",
    heroValueStrip: "Ask anything. The island keeps it simple.",
    valueReinforce: "Less searching. More sea.",
    previewMode: "Ask the Island",
    chatInstructionLine: "Ask anything about Paros",
    chatEmptyHelper: "Start with a question",
    chatLanguageNote: "Ask in English, Greek, or your own language.",
    chatGreeting: ISLAND_SCRIPT.en.greeting,
    liveDemoBadge: "Live demo",
    chatPlaceholder: "Tap a suggested question below",
    sendButton: "Send",
    thinkingMessage: "Thinking...",
    noReplyMessage: "Sorry, I could not generate a reply.",
    disconnectedMessage: "Sorry, I got disconnected. Please try again.",
    aiAttribution: "This chat is a demo with scripted answers — see our live AI concierge at",
    demoFeature: "Ask the Island",
    questionsTitle: "What needs solving first?",
    questionsIntro: "Beaches, villages, ferries, dinner plans and windy-day backups. Useful answers. No noise.",
    starterLine: "Pick the question closest to today's plan",
    previewLabel: "Ask the Island",
    worksToday: "Ready now",
    questionLabel: "Question",
    viewTourOptions: "See island plans",
    askAnother: "Ask something else",
    seeTips: "See practical tips",
    realGuideSoon: "Scripted demo",
    joinEarlyAccess: "Ask now",
    howEyebrow: "Concierge logic",
    howTitle: "A little planning makes a lighter day.",
    howLanguageTitle: "Ask naturally",
    howLanguageText: "Type in your language. The answer follows your lead.",
    step2Title: "Choosing between options?",
    step2Text: "Compare Naousa or Parikia, boat or beach, bus or private transfer.",
    step3Title: "Need the next move?",
    step3Text: "Get the simple answer first, then ask deeper if the day gets complicated.",
    toursEyebrow: "Sea and villages",
    toursTitle: "Want a proper island day?",
    toursIntro: "Ask about boat trips, the Antiparos crossing, marble villages and easy transfers without overplanning.",
    tourLabelPopular: "Popular",
    tourLabelClassic: "Relaxed",
    tourLabelRomantic: "Romantic",
    tourLabelPractical: "Practical",
    tourBoatTitle: "Want a day on the water?",
    tourBoatText: "Swimming stops, hidden coves and a slow loop around Paros and Antiparos.",
    tourAntiparosTitle: "Curious about Antiparos?",
    tourAntiparosText: "Ask whether the cave, the town and a quiet beach fit your day.",
    tourVillagesTitle: "Want the marble villages?",
    tourVillagesText: "Lefkes lanes, Byzantine paths and slow afternoons inland.",
    tourTransfersTitle: "Need the easiest arrival?",
    tourTransfersText: "Ask about simple port, airport and day-plan transfers.",
    tourStatus: "Ask for ideas",
    partnerDisclosure: "Some links may be partner recommendations.",
    networkEyebrow: "The ASK Network",
    networkTitle: "Not a lone island. A constellation.",
    networkText: "AskParos.ai is part of the ASK AI travel network — sister guides for the places people actually ask about.",
    networkThisSite: "Demo — this site",
    conciergeEyebrow: "Concierge",
    conciergeTitle: "Planning a moment that should feel effortless?",
    conciergeIntro: "Ask about photos, ceremonies, flowers and premium transfers with the right Paros context.",
    conciergeSeoLine: "For couples, families and special moments that need calm local guidance.",
    conciergePhotographersTitle: "Want photos without guessing?",
    conciergePhotographersText: "Couple shoots, honeymoon sessions, family photos and golden-hour frames.",
    conciergeWeddingTitle: "Planning a ceremony?",
    conciergeWeddingText: "Local planners for weddings, elopements and symbolic moments.",
    conciergeFlowersTitle: "Need flowers or a setup?",
    conciergeFlowersText: "Bouquets, ceremony styling and quiet proposal details.",
    conciergeTransfersTitle: "Want a premium transfer?",
    conciergeTransfersText: "Private arrivals and licensed local providers for port and airport days.",
    askAiForOptions: "Ask AI for options",
    conciergeDisclosure: "Featured services may include partner recommendations.",
    instagramAria: "Visit Ask Paros AI on Instagram",
    footerDisclaimer: "Independent visitor guide. Not affiliated with Google or any official tourism authority.",
    allRights: "All rights reserved.",
    privacyLink: "Privacy & Cookies",
    termsLink: "Terms",
    cookieNoticeAria: "Cookie notice",
    cookieText: "This demo sets no tracking cookies. Only your language and banner preference are stored locally in your browser.",
    cookieDismiss: "Got it",
    closeButton: "Close",
    privacyCloseAria: "Close privacy notice",
    privacyTitle: "Privacy Policy",
    privacyP1: "AskParos.ai is currently a demonstration website. It does not collect or store personal data — there are no accounts, no contact forms, and no analytics.",
    privacyP2: "The chat assistant is a scripted demo that runs entirely in your browser. Messages you type are not transmitted or stored anywhere.",
    privacyP3: "Your language and cookie-banner preferences are saved only in your browser's local storage.",
    privacyP5: "For questions about this demo or the domain, contact",
    termsCloseAria: "Close terms notice",
    termsTitle: "Terms",
    termsP1: "Some links may be partner recommendations. Information should be verified before booking or traveling.",
    termsP2: "AskParos.ai is an independent visitor guide and not an official tourism authority.",
    termsP3: "For legal or general information questions, contact",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    languageToggleLabel: "Language",
    questionAction: "✦",
    questions: {
      sunset: "Sunset without the scramble?",
      antiparos: "Is Antiparos worth the trip?",
      beach: "Which beach today?",
      port: "Just landed — what's the move?",
      oneDay: "Paros in one day, done right?",
      windy: "What if the meltemi shows up?",
      food: "Where do I eat like a local?",
      family: "Easy days with the kids?"
    },
    answers: {
      sunset: "Parikia's waterfront and the windmill by the port face the sunset straight on. Paros Park near Monastiri and the Pounta side, looking across to Antiparos, feel calmer.",
      antiparos: "Yes — the crossing from Pounta takes about ten minutes, and seasonal boats also leave from Parikia. The cave, the town and a swim make an easy, satisfying day.",
      beach: "Kolymbithres and Monastiri are sheltered inside Naousa bay. Santa Maria and Golden Beach are organized; Marcello and Krios are an easy swim from Parikia.",
      port: "Ferries arrive at Parikia, right in town. Buses, taxis (limited in season) and pre-arranged transfers cover Naousa and the rest of the island.",
      oneDay: "Keep it edited: Parikia's Kastro and Ekatontapiliani, one swim, Lefkes in the afternoon, Naousa harbor for the evening. A short list is not boring. It is taste.",
      windy: "On meltemi days, keep to the west and south coasts or go inland to Lefkes. Golden Beach turns into a windsurfing stage — worth watching from a towel.",
      food: "Look for gouna (sun-dried fish), fresh seafood, local cheeses and Paros wine. Naousa and Parikia have the waterfront tables; the villages keep it local.",
      family: "Santa Maria, Golden Beach and Aliki have shallow, calm entries. Short distances and easy harbor walks keep days simple for everyone."
    }
  },
  el: {
    pageTitle: "AskParos.ai – Ρώτησε τον οδηγό σου για την Πάρο",
    metaDescription: "Ρώτησε για την Πάρο: παραλίες, χωριά, Αντίπαρος, ακτοπλοϊκά, φαγητό και μετακινήσεις. Απλές, καθαρές απαντήσεις. Χωρίς εφαρμογή. Χωρίς εγγραφή.",
    ogTitle: "AskParos.ai – Ρώτησε τον οδηγό σου για την Πάρο",
    ogDescription: "Ρώτησε για την Πάρο και πάρε καθαρές απαντήσεις για παραλίες, χωριά, Αντίπαρο, φαγητό και μετακινήσεις.",
    twitterDescription: "Ρώτησε για την Πάρο και πάρε καθαρές απαντήσεις για παραλίες, χωριά, Αντίπαρο και τοπικές εμπειρίες.",
    navHow: "Πώς λειτουργεί",
    navTours: "Εκδρομές",
    navConcierge: "Concierge",
    navEarlyAccess: "Ask AI",
    startAsking: "Ξεκίνα την ερώτηση",
    seeQuestions: "Δες παραδείγματα",
    heroTitle: "Ο ήρεμος, καθαρός οδηγός σου για την Πάρο.",
    heroSubtitle: "Παραλίες, χωριά, Αντίπαρος, ακτοπλοϊκά και φαγητό — χωρίς δέκα ανοιχτές καρτέλες.",
    heroValueStrip: "Ρώτησε ό,τι χρειάζεσαι. Το νησί το κρατά απλό.",
    valueReinforce: "Λιγότερο ψάξιμο. Περισσότερη θάλασσα.",
    previewMode: "Ρώτησε το νησί",
    chatInstructionLine: "Ρώτησε ό,τι θέλεις για την Πάρο",
    chatEmptyHelper: "Ξεκίνα με μια ερώτηση",
    chatLanguageNote: "Ρώτησε στα Αγγλικά, στα Ελληνικά ή στη δική σου γλώσσα.",
    chatGreeting: ISLAND_SCRIPT.el.greeting,
    liveDemoBadge: "Ζωντανό demo",
    chatPlaceholder: "Επιλέξτε μια ερώτηση παρακάτω",
    sendButton: "Αποστολή",
    thinkingMessage: "Σκέφτομαι...",
    noReplyMessage: "Συγγνώμη, δεν μπόρεσα να δημιουργήσω απάντηση.",
    disconnectedMessage: "Συγγνώμη, αποσυνδέθηκα. Δοκίμασε ξανά.",
    aiAttribution: "Το chat είναι demo με έτοιμες απαντήσεις — δείτε τον ζωντανό AI concierge στο",
    demoFeature: "Ρώτησε το νησί",
    questionsTitle: "Τι χρειάζεσαι πρώτα;",
    questionsIntro: "Ρώτησε για παραλίες, χωριά, ακτοπλοϊκά, φαγητό ή εναλλακτικές όταν έχει αέρα.",
    starterLine: "Διάλεξε την ερώτηση που ταιριάζει στη σημερινή μέρα",
    previewLabel: "Ρώτησε το νησί",
    worksToday: "Έτοιμο τώρα",
    questionLabel: "Ερώτηση",
    viewTourOptions: "Δες πλάνα για το νησί",
    askAnother: "Άλλη ερώτηση",
    seeTips: "Δες πρακτικές συμβουλές",
    realGuideSoon: "Demo με έτοιμες απαντήσεις",
    joinEarlyAccess: "Ρώτησε τώρα",
    howEyebrow: "Πρακτική καθοδήγηση",
    howTitle: "Λίγος σχεδιασμός κάνει τη μέρα πιο ελαφριά.",
    howLanguageTitle: "Ρώτησε φυσικά",
    howLanguageText: "Γράψε στη γλώσσα σου. Η απάντηση ακολουθεί τη δική σου διατύπωση.",
    step2Title: "Διαλέγεις ανάμεσα σε επιλογές;",
    step2Text: "Σύγκρινε Νάουσα ή Παροικιά, σκάφος ή παραλία, λεωφορείο ή ιδιωτική μεταφορά.",
    step3Title: "Θέλεις το επόμενο βήμα;",
    step3Text: "Πάρε πρώτα την απλή απάντηση και ρώτησε περισσότερα αν χρειαστεί.",
    toursEyebrow: "Θάλασσα και χωριά",
    toursTitle: "Θέλεις μια σωστή μέρα στο νησί;",
    toursIntro: "Ρώτησε για βόλτες με σκάφος, το πέρασμα στην Αντίπαρο, τα μαρμάρινα χωριά και εύκολες μεταφορές.",
    tourLabelPopular: "Δημοφιλές",
    tourLabelClassic: "Χαλαρό",
    tourLabelRomantic: "Ρομαντικό",
    tourLabelPractical: "Πρακτικό",
    tourBoatTitle: "Θέλεις μια μέρα στο νερό;",
    tourBoatText: "Στάσεις για μπάνιο, κρυφοί κόλποι και χαλαρός γύρος σε Πάρο και Αντίπαρο.",
    tourAntiparosTitle: "Σε ενδιαφέρει η Αντίπαρος;",
    tourAntiparosText: "Ρώτησε αν το σπήλαιο, η χώρα και μια ήσυχη παραλία χωράνε στη μέρα σου.",
    tourVillagesTitle: "Θέλεις τα μαρμάρινα χωριά;",
    tourVillagesText: "Σοκάκια στις Λεύκες, βυζαντινά μονοπάτια και αργά απογεύματα στην ενδοχώρα.",
    tourTransfersTitle: "Χρειάζεσαι εύκολη άφιξη;",
    tourTransfersText: "Ρώτησε για απλές μεταφορές από λιμάνι, αεροδρόμιο και ημερήσια πλάνα.",
    tourStatus: "Ρώτησε για ιδέες",
    partnerDisclosure: "Ορισμένοι σύνδεσμοι μπορεί να είναι συνεργατικές προτάσεις.",
    networkEyebrow: "Το δίκτυο ASK",
    networkTitle: "Όχι μοναχικό νησί. Αστερισμός.",
    networkText: "Το AskParos.ai είναι μέρος του δικτύου ταξιδιωτικών AI οδηγών ASK — αδελφοί οδηγοί για τα μέρη που ρωτάει πραγματικά ο κόσμος.",
    networkThisSite: "Demo — αυτό το site",
    conciergeEyebrow: "Concierge",
    conciergeTitle: "Οργανώνεις μια στιγμή που πρέπει να κυλήσει αβίαστα;",
    conciergeIntro: "Ρώτησε για φωτογραφίες, τελετές, λουλούδια και premium μεταφορές με σωστό τοπικό πλαίσιο.",
    conciergeSeoLine: "Για ζευγάρια, οικογένειες και ειδικές στιγμές που χρειάζονται ήρεμη τοπική καθοδήγηση.",
    conciergePhotographersTitle: "Θέλεις φωτογραφίες χωρίς ψάξιμο;",
    conciergePhotographersText: "Couple shoots, honeymoon, οικογενειακές φωτογραφίες και λήψεις στο χρυσό φως.",
    conciergeWeddingTitle: "Σχεδιάζεις τελετή;",
    conciergeWeddingText: "Τοπικοί planners για γάμους, elopements και συμβολικές στιγμές.",
    conciergeFlowersTitle: "Χρειάζεσαι λουλούδια ή setup;",
    conciergeFlowersText: "Ανθοδέσμες, styling τελετής και διακριτικές λεπτομέρειες πρότασης.",
    conciergeTransfersTitle: "Θέλεις premium μεταφορά;",
    conciergeTransfersText: "Ιδιωτικές αφίξεις και αδειοδοτημένοι τοπικοί πάροχοι για λιμάνι και αεροδρόμιο.",
    askAiForOptions: "Ρώτησε το AI για επιλογές",
    conciergeDisclosure: "Οι προτεινόμενες υπηρεσίες μπορεί να περιλαμβάνουν συνεργατικές προτάσεις.",
    instagramAria: "Άνοιγμα του Ask Paros AI στο Instagram",
    footerDisclaimer: "Ανεξάρτητος οδηγός επισκεπτών. Δεν συνδέεται με την Google ή με επίσημο τουριστικό φορέα.",
    allRights: "Με επιφύλαξη παντός δικαιώματος.",
    privacyLink: "Απόρρητο & Cookies",
    termsLink: "Όροι",
    cookieNoticeAria: "Ενημέρωση για cookies",
    cookieText: "Αυτό το demo δεν χρησιμοποιεί cookies παρακολούθησης. Μόνο η γλώσσα και η προτίμησή σου αποθηκεύονται τοπικά στον browser σου.",
    cookieDismiss: "Κατάλαβα",
    closeButton: "Κλείσιμο",
    privacyCloseAria: "Κλείσιμο πολιτικής απορρήτου",
    privacyTitle: "Πολιτική Απορρήτου",
    privacyP1: "Το AskParos.ai είναι αυτή τη στιγμή ιστότοπος επίδειξης (demo). Δεν συλλέγει ούτε αποθηκεύει προσωπικά δεδομένα — δεν υπάρχουν λογαριασμοί, φόρμες επικοινωνίας ή analytics.",
    privacyP2: "Ο βοηθός συνομιλίας είναι scripted demo που εκτελείται εξ ολοκλήρου στον browser σας. Τα μηνύματα που πληκτρολογείτε δεν μεταδίδονται ούτε αποθηκεύονται πουθενά.",
    privacyP3: "Η επιλογή γλώσσας και η προτίμηση για το banner cookies αποθηκεύονται μόνο τοπικά στον browser σας.",
    privacyP5: "Για ερωτήσεις σχετικά με το demo ή το domain, επικοινωνήστε στο",
    termsCloseAria: "Κλείσιμο όρων",
    termsTitle: "Όροι",
    termsP1: "Ορισμένοι σύνδεσμοι μπορεί να είναι συνεργατικές προτάσεις. Οι πληροφορίες πρέπει να επιβεβαιώνονται πριν από κράτηση ή μετακίνηση.",
    termsP2: "Το AskParos.ai είναι ανεξάρτητος οδηγός επισκεπτών και δεν αποτελεί επίσημο τουριστικό φορέα.",
    termsP3: "Για νομικές ή γενικές πληροφορίες, επικοινωνήστε στο",
    menuOpen: "Άνοιγμα μενού",
    menuClose: "Κλείσιμο μενού",
    languageToggleLabel: "Γλώσσα",
    questionAction: "✦",
    questions: {
      sunset: "Πού να δω ηλιοβασίλεμα;",
      antiparos: "Αξίζει η Αντίπαρος;",
      beach: "Ποια παραλία να διαλέξω σήμερα;",
      port: "Μόλις έφτασα — πώς μετακινούμαι;",
      oneDay: "Πώς βλέπω την Πάρο σε μία μέρα;",
      windy: "Τι κάνω αν έχει μελτέμι;",
      food: "Πού να φάω τοπικά;",
      family: "Ιδέες για οικογένειες"
    },
    answers: {
      sunset: "Η παραλιακή της Παροικιάς και ο ανεμόμυλος στο λιμάνι κοιτάζουν το ηλιοβασίλεμα κατάματα. Το Πάρκο Πάρου κοντά στο Μοναστήρι και η πλευρά της Πούντας, με θέα προς την Αντίπαρο, είναι πιο ήρεμα.",
      antiparos: "Ναι — το πέρασμα από την Πούντα κάνει περίπου δέκα λεπτά, και τη σεζόν υπάρχουν και καραβάκια από την Παροικιά. Σπήλαιο, χώρα και ένα μπάνιο φτιάχνουν μια εύκολη, γεμάτη μέρα.",
      beach: "Οι Κολυμπήθρες και το Μοναστήρι είναι προστατευμένες μέσα στον κόλπο της Νάουσας. Η Σάντα Μαρία και η Χρυσή Ακτή είναι οργανωμένες· ο Μαρτσέλο και ο Κριός είναι εύκολο μπάνιο από την Παροικιά.",
      port: "Τα πλοία φτάνουν στην Παροικιά, μέσα στην πόλη. Λεωφορεία, ταξί (περιορισμένα τη σεζόν) και προ-κανονισμένα transfer καλύπτουν τη Νάουσα και το υπόλοιπο νησί.",
      oneDay: "Κράτα το πλάνο απλό: Κάστρο και Εκατονταπυλιανή στην Παροικιά, ένα μπάνιο, Λεύκες το απόγευμα, λιμανάκι της Νάουσας το βράδυ.",
      windy: "Τις μέρες με μελτέμι, προτίμησε δυτικές και νότιες ακτές ή την ενδοχώρα (Λεύκες). Η Χρυσή Ακτή γίνεται σκηνή windsurfing — αξίζει και ως θέαμα.",
      food: "Ψάξε για γούνα (λιαστό ψάρι), φρέσκο ψάρι, τοπικά τυριά και παριανό κρασί. Νάουσα και Παροικιά έχουν τα τραπέζια στο νερό· τα χωριά κρατούν πιο ντόπιο ρυθμό.",
      family: "Σάντα Μαρία, Χρυσή Ακτή και Αλυκή έχουν ρηχά, ήρεμα νερά. Οι μικρές αποστάσεις και οι βόλτες στα λιμανάκια κρατούν τις μέρες απλές για όλους."
    }
  }
};

const preview = document.querySelector("#answer-preview");
const previewQuestion = document.querySelector("#preview-question");
const previewAnswer = document.querySelector("#preview-answer");
const questionCards = document.querySelectorAll(".question-card");
const modalButtons = document.querySelectorAll("[data-modal]");
const closeButtons = document.querySelectorAll("[data-close]");
const siteHeader = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const currentYear = document.querySelector("#current-year");
const cookieBanner = document.querySelector("#cookie-banner");
const dismissCookies = document.querySelector("#dismiss-cookies");
const languageButtons = document.querySelectorAll("[data-language]");
const languageToggle = document.querySelector(".language-toggle");
const workerUrl = "PASTE_ASKPAROS_WORKER_URL_HERE";
const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");
const cookieStorageKey = "askParosCookiePreference";
const languageStorageKey = "preferredLanguage";
let currentLanguage = "en";

if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear());
}

const getStoredValue = (key) => {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
};

const setStoredValue = (key, value) => {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    return;
  }
};

const getCookiePreference = () => getStoredValue(cookieStorageKey);
const setCookiePreference = (value) => setStoredValue(cookieStorageKey, value);

const hideCookieBanner = () => {
  if (!cookieBanner) {
    return;
  }

  cookieBanner.classList.add("is-hidden");
};

const getMeta = (selector) => document.querySelector(selector);

const updateMetaContent = (selector, content) => {
  const meta = getMeta(selector);

  if (meta) {
    meta.setAttribute("content", content);
  }
};

const updateLanguageUrl = (language) => {
  const url = new URL(window.location.href);
  url.searchParams.set("lang", language);
  window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
};

const getInitialLanguage = () => {
  const urlLanguage = new URLSearchParams(window.location.search).get("lang");

  if (urlLanguage === "en" || urlLanguage === "el") {
    return urlLanguage;
  }

  const storedLanguage = getStoredValue(languageStorageKey);

  if (storedLanguage === "en" || storedLanguage === "el") {
    return storedLanguage;
  }

  return "en";
};

const applyTranslations = (language) => {
  const copy = translations[language];

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;

    if (typeof copy[key] === "string") {
      element.textContent = copy[key];
    }
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    element.dataset.i18nAttr.split(",").forEach((pair) => {
      const [attribute, key] = pair.split(":").map((value) => value.trim());

      if (attribute && typeof copy[key] === "string") {
        element.setAttribute(attribute, copy[key]);
      }
    });
  });
};

const updateSeo = (language) => {
  const copy = translations[language];

  document.documentElement.lang = language;
  document.title = copy.pageTitle;
  updateMetaContent('meta[name="description"]', copy.metaDescription);
  updateMetaContent('meta[property="og:title"]', copy.ogTitle);
  updateMetaContent('meta[property="og:description"]', copy.ogDescription);
  updateMetaContent('meta[property="og:locale"]', language === "el" ? "el_GR" : "en_US");
  updateMetaContent('meta[name="twitter:title"]', copy.ogTitle);
  updateMetaContent('meta[name="twitter:description"]', copy.twitterDescription);
};

const updateLanguageToggle = (language) => {
  languageToggle?.setAttribute("aria-label", translations[language].languageToggleLabel);

  languageButtons.forEach((button) => {
    const isActive = button.dataset.language === language;
    button.setAttribute("aria-pressed", String(isActive));

    if (isActive) {
      button.setAttribute("aria-current", "true");
    } else {
      button.removeAttribute("aria-current");
    }
  });
};

const updateQuestionCards = (language) => {
  const copy = translations[language];

  questionCards.forEach((card) => {
    const questionKey = card.dataset.questionKey;
    const questionText = card.querySelector("[data-question-text]");

    if (!questionKey || !copy.questions[questionKey]) {
      return;
    }

    card.dataset.question = copy.questions[questionKey];
    card.dataset.actionLabel = copy.questionAction;

    if (questionText) {
      questionText.textContent = copy.questions[questionKey];
    }
  });
};

const updateActivePreview = (language) => {
  const activeCard = document.querySelector(".question-card.is-active") || questionCards[0];

  if (activeCard) {
    showAnswerPreview(activeCard, false);
  }
};

const updateChatControls = (language) => {
  const copy = translations[language];

  if (userInput) {
    userInput.setAttribute("placeholder", copy.chatPlaceholder);
  }
};

const updateMenuLabel = () => {
  if (!menuToggle) {
    return;
  }

  const copy = translations[currentLanguage];
  const isOpen = siteHeader?.classList.contains("is-menu-open");
  menuToggle.setAttribute("aria-label", isOpen ? copy.menuClose : copy.menuOpen);
};

const setLanguage = (language, options = {}) => {
  const normalizedLanguage = language === "el" ? "el" : "en";

  currentLanguage = normalizedLanguage;
  applyTranslations(normalizedLanguage);
  updateSeo(normalizedLanguage);
  updateLanguageToggle(normalizedLanguage);
  updateQuestionCards(normalizedLanguage);
  updateActivePreview(normalizedLanguage);
  updateChatControls(normalizedLanguage);
  updateMenuLabel();
  setStoredValue(languageStorageKey, normalizedLanguage);

  if (options.updateUrl) {
    updateLanguageUrl(normalizedLanguage);
  }
};

if (cookieBanner && !getCookiePreference()) {
  cookieBanner.classList.remove("is-hidden");
}

dismissCookies?.addEventListener("click", () => {
  setCookiePreference("dismissed");
  hideCookieBanner();
});

const closeMenu = () => {
  if (!siteHeader || !menuToggle) {
    return;
  }

  siteHeader.classList.remove("is-menu-open");
  menuToggle.setAttribute("aria-expanded", "false");
  updateMenuLabel();
};

if (menuToggle && siteHeader && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteHeader.classList.toggle("is-menu-open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    updateMenuLabel();
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.language, { updateUrl: true });
  });
});

document.querySelectorAll('a[href="#top"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    closeMenu();

    window.scrollTo({ top: 0, behavior: "smooth" });

    if (window.location.hash !== "#top") {
      window.history.pushState(null, "", "#top");
    }
  });
});

const askAiHash = "#ask-ai";

const getAskAiLink = (target) => target?.closest?.(`a[href="${askAiHash}"], a[href$="${askAiHash}"]`);

const getAskAiScrollTop = (target) => {
  const scrollMargin = Number.parseFloat(window.getComputedStyle(target).scrollMarginTop) || 0;
  return Math.max(0, target.getBoundingClientRect().top + window.pageYOffset - scrollMargin);
};

const scrollToAskAi = (link) => {
  const chatTarget = document.getElementById("ask-ai");

  if (!chatTarget) {
    return false;
  }

  closeMenu();

  const prefill = link?.dataset[`chatPrefill${currentLanguage === "el" ? "El" : "En"}`];

  if (prefill && userInput && !isIslandReplying) {
    userInput.value = prefill;

    // Cards with a prefill question auto-send into the scripted engine
    // after a beat, so the visitor sees the question before it "goes".
    window.setTimeout(() => {
      sendMessage(prefill);
    }, ISLAND_AUTOSEND_MS);
  }

  const targetTop = getAskAiScrollTop(chatTarget);
  const scrollBehavior = REDUCED_MOTION_QUERY.matches ? "auto" : "smooth";
  window.scrollTo({ top: targetTop, behavior: scrollBehavior });

  window.setTimeout(() => {
    const distance = Math.abs(chatTarget.getBoundingClientRect().top);

    if (distance > 140) {
      window.scrollTo({ top: getAskAiScrollTop(chatTarget), behavior: "auto" });
    }
  }, 520);

  if (window.location.hash !== askAiHash) {
    window.history.pushState(null, "", askAiHash);
  }

  if (userInput && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    window.setTimeout(() => userInput.focus({ preventScroll: true }), 560);
  }

  return true;
};

document.addEventListener("click", (event) => {
  const link = getAskAiLink(event.target);

  if (!link) {
    return;
  }

  if (!scrollToAskAi(link)) {
    return;
  }

  event.preventDefault();
});

function showAnswerPreview(card, shouldScroll = true) {
  if (!preview || !previewQuestion || !previewAnswer) {
    return;
  }

  const copy = translations[currentLanguage];
  const questionKey = card.dataset.questionKey;
  const question = copy.questions[questionKey];
  const answer = copy.answers[questionKey];

  if (!questionKey || !question || !answer) {
    return;
  }

  questionCards.forEach((item) => {
    item.classList.remove("is-active");
    item.setAttribute("aria-pressed", "false");
  });

  card.classList.add("is-active");
  card.setAttribute("aria-pressed", "true");

  previewQuestion.textContent = question;
  previewAnswer.textContent = answer;

  if (shouldScroll) {
    preview.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
}

questionCards.forEach((card, index) => {
  card.setAttribute("aria-pressed", "false");

  card.addEventListener("click", () => {
    if (isIslandReplying) return;

    const question = translations[currentLanguage].questions[card.dataset.questionKey];
    if (!question) return;

    // Keep the answer-preview panel in sync (no scroll), then run the chat
    // flow: prefill so the question is visible for a beat, scroll to the
    // chat card, auto-send into the scripted engine.
    showAnswerPreview(card, false);

    if (userInput) userInput.value = question;
    scrollToAskAi(null);

    window.setTimeout(() => {
      sendMessage(question);
    }, ISLAND_AUTOSEND_MS);
  });

  if (index === 0) {
    card.classList.add("is-active");
    card.setAttribute("aria-pressed", "true");
  }
});

modalButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();

    const modal = document.getElementById(button.dataset.modal);

    if (!modal) {
      return;
    }

    if (typeof modal.showModal === "function") {
      modal.showModal();
      document.body.classList.add("modal-open");
      return;
    }

    modal.setAttribute("open", "");
    document.body.classList.add("modal-open");
  });
});

closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest("dialog");

    if (!modal) {
      return;
    }

    if (typeof modal.close === "function") {
      modal.close();
    } else {
      modal.removeAttribute("open");
    }

    document.body.classList.remove("modal-open");
  });
});

document.querySelectorAll("dialog").forEach((modal) => {
  modal.addEventListener("close", () => {
    document.body.classList.remove("modal-open");
  });
});

function appendMessage(text, className) {
  if (!chatBox) return null;

  const msgDiv = document.createElement("div");
  const id = "msg-" + Date.now() + "-" + Math.random().toString(36).slice(2);

  msgDiv.id = id;
  msgDiv.className = className;
  msgDiv.innerText = text;

  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;

  return id;
}

/* --------------------------------------------------------------------------
   Island scripted engine — resolve, typing dots, word-by-word reveal
   -------------------------------------------------------------------------- */

const REDUCED_MOTION_QUERY = window.matchMedia("(prefers-reduced-motion: reduce)");
const FINE_POINTER_QUERY = window.matchMedia("(hover: hover) and (pointer: fine)");
const ISLAND_TYPING_MS = 800;
const ISLAND_WORD_MS = 45;
const ISLAND_AUTOSEND_MS = 300;
let isIslandReplying = false;

const normalizeChatText = (text) =>
  String(text || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[\s;;.!?…]+$/g, "")
    .replace(/\s+/g, " ")
    .trim();

const EMERGENCY_PATTERNS_EN = [
  /\b(emergency|urgent|help|injured|injury|accident|theft|stolen|robbed|medical|hospital|ambulance|police|danger|dangerous|drowning)\b/,
  /lost .{0,12}passport/,
  /passport .{0,12}(lost|stolen|gone)/
];

const EMERGENCY_STEMS_EL = [
  "επειγον", "βοηθεια", "ατυχημα", "κλοπη", "εκλεψαν", "χαθηκε", "εχασα",
  "τραυματ", "νοσοκομειο", "ασθενοφορο", "αστυνομια", "κινδυν", "πνιγ"
];

const isEmergencyText = (normalized) =>
  EMERGENCY_PATTERNS_EN.some((pattern) => pattern.test(normalized)) ||
  EMERGENCY_STEMS_EL.some((stem) => normalized.includes(stem));

/* Exact-match table: every known question (both languages) → script key.
   Known questions are checked BEFORE the emergency keywords on purpose:
   they are our own scripted texts, and a real emergency never arrives as
   an exact known question. */
const matchKnownQuestion = (normalized) => {
  const languages = ["en", "el"];

  for (const lang of languages) {
    const chipQuestions = translations[lang].questions;
    for (const key of Object.keys(chipQuestions)) {
      if (normalizeChatText(chipQuestions[key]) === normalized) return key;
    }

    const prefillQuestions = ISLAND_QUESTIONS[lang];
    for (const key of Object.keys(prefillQuestions)) {
      if (normalizeChatText(prefillQuestions[key]) === normalized) return key;
    }
  }

  return null;
};

const resolveIslandReply = (text) => {
  const script = ISLAND_SCRIPT[currentLanguage] || ISLAND_SCRIPT.en;
  const normalized = normalizeChatText(text);

  const knownKey = matchKnownQuestion(normalized);
  if (knownKey && script[knownKey]) return script[knownKey];

  if (isEmergencyText(normalized)) return script.emergency;

  return script.fallback;
};

const scrollChatToBottom = () => {
  if (chatBox) chatBox.scrollTop = chatBox.scrollHeight;
};

const showTypingDots = () => {
  const bubble = document.createElement("div");
  bubble.className = "bot-message typing";
  bubble.setAttribute("aria-hidden", "true");

  for (let i = 0; i < 3; i += 1) {
    const dot = document.createElement("span");
    dot.className = "typing-dot";
    bubble.appendChild(dot);
  }

  chatBox.appendChild(bubble);
  scrollChatToBottom();
  return bubble;
};

const revealBotReply = (text, onDone) => {
  const msgDiv = document.createElement("div");
  msgDiv.className = "bot-message";

  const words = String(text).split(" ");
  words.forEach((word, index) => {
    const span = document.createElement("span");
    span.className = "reveal-word";
    span.textContent = index < words.length - 1 ? word + " " : word;
    msgDiv.appendChild(span);
  });

  chatBox.appendChild(msgDiv);
  scrollChatToBottom();

  const spans = msgDiv.children;
  let revealed = 0;

  const timer = window.setInterval(() => {
    if (revealed < spans.length) {
      spans[revealed].classList.add("is-visible");
      revealed += 1;
      if (revealed % 5 === 0) scrollChatToBottom();
    }

    if (revealed >= spans.length) {
      window.clearInterval(timer);
      scrollChatToBottom();
      if (onDone) onDone();
    }
  }, ISLAND_WORD_MS);
};

const deliverIslandReply = (replyText, onDone) => {
  const startReveal = () => revealBotReply(replyText, onDone);

  if (REDUCED_MOTION_QUERY.matches) {
    // Reduced motion: skip the pulsing dots, keep the word-by-word reveal
    // (the reveal is the demo concept, not a vestibular effect).
    startReveal();
    return;
  }

  const dots = showTypingDots();
  window.setTimeout(() => {
    dots.remove();
    startReveal();
  }, ISLAND_TYPING_MS);
};

async function sendMessage(text) {
  const cleanText = String(text || "").trim();

  if (!cleanText) return;
  if (!chatBox || !userInput) return;
  if (isIslandReplying) return;

  const copy = translations[currentLanguage];

  appendMessage(cleanText, "user-message");
  userInput.value = "";
  userInput.disabled = true;
  if (sendBtn) sendBtn.disabled = true;

  const isWorkerConfigured =
    workerUrl &&
    !workerUrl.includes("PASTE_") &&
    !workerUrl.includes("asksantorini") &&
    !workerUrl.includes("workers.dev");

  if (!isWorkerConfigured) {
    isIslandReplying = true;

    deliverIslandReply(resolveIslandReply(cleanText), () => {
      isIslandReplying = false;
      userInput.disabled = false;
      if (sendBtn) sendBtn.disabled = false;
      if (FINE_POINTER_QUERY.matches) {
        userInput.focus({ preventScroll: true });
      }
    });

    return;
  }

  const loadingId = appendMessage(copy.thinkingMessage, "bot-message loading");

  try {
    const response = await fetch(workerUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: cleanText,
        destination: "Paros",
        brand: "AskParos.ai",
        language: currentLanguage
      })
    });

    let data = null;

    try {
      data = await response.json();
    } catch (jsonError) {
      throw new Error("Worker did not return valid JSON.");
    }

    if (!response.ok) {
      throw new Error(data?.error || "Worker request failed.");
    }

    const loadingEl = loadingId ? document.getElementById(loadingId) : null;
    if (loadingEl) loadingEl.remove();

    appendMessage(data?.reply || copy.noReplyMessage, "bot-message");

  } catch (error) {
    console.error("AskParos chat error:", error);

    const loadingEl = loadingId ? document.getElementById(loadingId) : null;
    if (loadingEl) loadingEl.remove();

    appendMessage(copy.disconnectedMessage, "bot-message error");

  } finally {
    userInput.disabled = false;
    if (sendBtn) sendBtn.disabled = false;
    userInput.focus();
  }
}

if (sendBtn && userInput) {
  sendBtn.addEventListener("click", () => {
    sendMessage(userInput.value);
  });

  userInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      sendMessage(userInput.value);
    }
  });
}

setLanguage(getInitialLanguage());
