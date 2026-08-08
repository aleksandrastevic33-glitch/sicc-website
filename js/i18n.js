/* ─── Sicc i18n ────────────────────────────────────────────────
   Language strings for EN (English) and HR (Croatian).
   t('key')           — returns string in current language
   pt(product, field) — returns localised product field
   setLang('hr'|'en') — switches language, persists, refreshes
   ─────────────────────────────────────────────────────────── */

var SICC_LANG = (function() {
  try { return localStorage.getItem('sicc-lang') || 'en'; } catch(e) { return 'en'; }
})();

var SICC_I18N = {

  /* ══════════════════════════════════════════════════════════
     ENGLISH
     ══════════════════════════════════════════════════════════ */
  en: {
    lang_label: 'HR',

    /* Nav */
    nav_home:    'Home',
    nav_shop:    'Shop',
    nav_about:   'About',
    nav_contact: 'Contact',
    nav_footer:  'Sicc. from skin to skin.',

    /* Cart */
    cart_title:       'Your steel.',
    cart_empty:       'Your cart is empty.',
    cart_empty_sub:   "Like your baba's patience.",
    cart_fill:        'Fill it →',
    cart_checkout:    'Checkout',
    cart_keep:        'Keep looking →',
    cart_warning:     "Leaving it? We'll wait. Not long.",
    cart_signup_done: "You're on the list. Don't expect newsletters.",

    /* Footer */
    footer_signup_h3:         'Get on the list.',
    footer_signup_p:          "Or don't. We'd miss you, but we won't beg.",
    footer_email_placeholder: 'your@email.com',
    footer_subscribe:         'Subscribe',
    footer_rights:            'Sicc. All rights reserved. Probably.',
    footer_tagline:           'from skin to skin.',

    /* Home */
    home_brand1_html: "Sicc is not another jewelry brand.<br>It's not a souvenir. It's not a trend.<br>It's not trying to be your friend.",
    home_brand2:      'Old symbols. Recycled steel. No apologies.',
    home_featured:    'Selected pieces',
    home_interlude2_html: 'Sicanje is a centuries-old tradition of protective tattooing. Catholic women in the Balkans marked their skin with circles, crosses, spirals. Not for decoration. For <strong>protection</strong>. Identity. Prayer.',
    home_cta_h2_html: 'Every piece<br>means something.',
    home_cta_p:       'Nine pieces. Each one a symbol. Each one stainless steel. Each one made in Croatia.',
    home_cta_btn:     'See everything →',

    /* Shop */
    shop_h1:  'Shop.',
    shop_sub: 'Nine pieces. All steel. All handmade in Croatia.',

    /* Product modal */
    product_materials: 'Materials',
    product_size:      'Size',
    product_tactile:   'Tactile note',
    product_add:       'Add to cart',
    product_tryon:     'Try it on',
    product_leave:     'Or leave it. Someone else will take it.',

    /* About */
    about_h1:           'Sicc is not another jewelry brand.',
    about_s1_h2:        'What is Sicanje?',
    about_s1_p1:        'Before the ink, there was the symbol. Sicanje is the traditional tattoo practice of Catholic women in the Balkans – Croatia, Bosnia, Herzegovina. For centuries, they marked their hands, fingers, chests, and necks with protective symbols: crosses, circles, spirals, lines.',
    about_s1_p2:        "Not decoration. Protection. Identity. Prayer. The practice nearly disappeared. Then it came back. Now it's on your jewelry.",
    about_s2_h2:        'What we do',
    about_s2_p:         'We take those old symbols – the ones your grandmother wore – and cast them in recycled stainless steel. Same symbols. New material. No needle. No pain. No fading.',
    about_s3_h2:        'The dots',
    about_s3_p1:        "Every piece of Sicc jewelry has small raised dots. They're not random. They're a nod to the stick-and-poke technique – the original way Sicanje tattoos were made. Dot by dot. Poke by poke.",
    about_s3_p2:        "Touch them. Fidget with them. That's the point.",
    about_s4_h2:        'Sustainability',
    about_s4_p1:        "Recycled steel. Local hands. No bullshit. We don't greenwash. We don't need to. Recycled materials cost more. We pay it anyway. Local production takes longer. We wait anyway.",
    about_s4_p2:        "You want fast fashion? Go elsewhere. You want symbols that last? You're in the right place.",
    about_s5_h2:        'The name and tagline',
    about_s5_p1:        'Sicc is pronounced “sick.” It’s short for Sicanje. It also means cool, awesome, badass. Both apply.',
    about_s5_p2:        'from skin to skin. The symbols traveled from traditional tattooed skin to yours. Via steel. No needle required.',
    about_symbols_h2:   'The symbols.',
    about_symbols_note: "There are more. We're still researching. We'll add them when we're sure.",
    about_symbols: [
      { name: 'Circle (kolo)',       meaning: "No beginning. No end. Protection. That's it." },
      { name: 'Cross (križ)',   meaning: 'Not just Christian. Older than that. Sun. Stars. Four directions. Balance.' },
      { name: 'Spiral (spirala)',    meaning: 'Movement. Life. Growth. Not standing still.' },
      { name: 'Ball (lopta)',        meaning: 'Unity. Community. Coming together. Also looks good on a ring.' },
      { name: 'Lines (crte)',        meaning: 'Boundaries. Protection. Keeping things in. Keeping things out.' },
      { name: 'Triangle (trokut)',   meaning: 'Sharp. Three points. Warning. Or just a nice shape.' },
      { name: 'Tear (suza)',         meaning: 'Sadness? Maybe. Sharpness? Definitely.' },
      { name: 'Net (mreža)',    meaning: "Connection. Interlocking. We're all linked." }
    ],

    /* Contact */
    contact_h1:                  'Talk to us.',
    contact_sub:                 "Or don't. We're not going to beg.",
    contact_name_label:          'Name',
    contact_name_opt:            '(optional)',
    contact_name_placeholder:    "or don't tell us, we won't mind",
    contact_email_label:         'Email *',
    contact_email_placeholder:   'your@email.com',
    contact_message_label:       'Message',
    contact_message_placeholder: 'say what you need to say',
    contact_send:                'Send',
    contact_note:                "We'll reply. Might take a day or two. We're busy making steel things.",
    contact_or_email:            'Or just email:',
    contact_instagram:           'Instagram:',
    contact_success:             'Message sent.',
    contact_success_sub:         'We got it. Give us a day or two.',

    /* 404 */
    notfound_h2:      "This page isn't here.",
    notfound_p:       'Neither were half our ancestors at some point. Displaced. Lost. Wandering. They figured it out. So can you.',
    notfound_shop:    'Go to the shop →',
    notfound_home:    'Go home →',
    notfound_tagline: 'from skin to skin.',

    /* Checkout */
    checkout_h1:                  'Almost yours.',
    checkout_order_h2:            'Your order',
    checkout_nothing:             'Nothing here.',
    checkout_contact_h2:          'Contact',
    checkout_email_label:         'Email *',
    checkout_shipping_h2:         'Shipping',
    checkout_name_label:          'Full name *',
    checkout_address_label:       'Address *',
    checkout_city_label:          'City *',
    checkout_postal_label:        'Postal code *',
    checkout_country_label:       'Country *',
    checkout_country_placeholder: 'Croatia',
    checkout_payment_h2:          'Payment',
    checkout_payment_note:        'Secure payment processing coming soon. For now, contact us directly at <a href="mailto:hello@sicc.com">hello@sicc.com</a> to complete your order.',
    checkout_btn:                 'Pay. Wear. Repeat.',
    checkout_success_h1:          'Order placed.',
    checkout_success_p:           "We'll be in touch shortly. Your steel is on its way.",
    checkout_success_btn:         'Back home →',

    back_to_shop:  'Back to shop',
    tryon_hint:    'Tap anywhere on the camera view to place the jewelry. Scroll or pinch to resize.',
    tryon_flip:    'Flip camera',
    tryon_capture: 'Save photo',

    products: {}  /* English reads directly from SICC_PRODUCTS */
  },

  /* ══════════════════════════════════════════════════════════
     CROATIAN
     ══════════════════════════════════════════════════════════ */
  hr: {
    lang_label: 'EN',

    /* Nav */
    nav_home:    'Početna',
    nav_shop:    'Trgovina',
    nav_about:   'O nama',
    nav_contact: 'Kontakt',
    nav_footer:  'Sicc. od kože do kože.',

    /* Cart */
    cart_title:       'Tvoj čelik.',
    cart_empty:       'Košarica je prazna.',
    cart_empty_sub:   'Kao babina strpljivost.',
    cart_fill:        'Ispuni je →',
    cart_checkout:    'Na blagajnu',
    cart_keep:        'Nastavi gledati →',
    cart_warning:     'Odlaziš? Čekat ćemo. Ne predugo.',
    cart_signup_done: 'Na listi si. Ne očekuj biltene.',

    /* Footer */
    footer_signup_h3:         'Budi na listi.',
    footer_signup_p:          'Ili ne. Nedostajat ćeš nam, ali nećemo moliti.',
    footer_email_placeholder: 'tvoj@email.com',
    footer_subscribe:         'Pretplati se',
    footer_rights:            'Sicc. Sva prava pridržana. Vjerojatno.',
    footer_tagline:           'od kože do kože.',

    /* Home */
    home_brand1_html: 'Sicc nije još jedan brend nakita.<br>Nije suvenir. Nije trend.<br>Ne pokušava biti tvoj prijatelj.',
    home_brand2:      'Stari simboli. Reciklirani čelik. Bez isprika.',
    home_featured:    'Odabrani komadi',
    home_interlude2_html: 'Sicanje je stoljetna tradicija zaštitnog tetoviranja. Katoličke žene na Balkanu označavale su svoju kožu krugovima, križevima, spiralama. Ne radi dekoracije. Radi <strong>zaštite</strong>. Identiteta. Molitve.',
    home_cta_h2_html: 'Svaki komad<br>nešto znači.',
    home_cta_p:       'Devet komada. Svaki jedan simbol. Svaki od nehrđajućeg čelika. Svaki napravljen u Hrvatskoj.',
    home_cta_btn:     'Vidi sve →',

    /* Shop */
    shop_h1:  'Trgovina.',
    shop_sub: 'Devet komada. Sve od čelika. Sve ručno izrađeno u Hrvatskoj.',

    /* Product modal */
    product_materials: 'Materijali',
    product_size:      'Veličina',
    product_tactile:   'Taktilna napomena',
    product_add:       'Dodaj u košaricu',
    product_tryon:     'Isprobaj',
    product_leave:     'Ili ostavi. Netko drugi će uzeti.',

    /* About */
    about_h1:           'Sicc nije još jedan brend nakita.',
    about_s1_h2:        'Što je Sicanje?',
    about_s1_p1:        'Prije tinte, postojao je simbol. Sicanje je tradicionalna praksa tetoviranja katoličkih žena na Balkanu – u Hrvatskoj, Bosni i Hercegovini. Stoljećima su označavale ruke, prste, grudi i vrat zaštitnim simbolima: križevima, krugovima, spiralama, linijama.',
    about_s1_p2:        'Ne radi dekoracije. Zaštita. Identitet. Molitva. Praksa je zamalo nestala. Potom se vratila. Sad je na tvojem nakitu.',
    about_s2_h2:        'Što radimo',
    about_s2_p:         'Uzimamo te stare simbole – one koje je nosila tvoja baka – i lijevamo ih u reciklirani nehrđajući čelik. Isti simboli. Novi materijal. Bez igle. Bez boli. Bez blijeđenja.',
    about_s3_h2:        'Točkice',
    about_s3_p1:        'Svaki komad Sicc nakita ima male izbočene točkice. Nisu slučajne. Odraz su stick-and-poke tehnike – izvornog načina na koji su se izrađivale Sicanje tetovaže. Točka po točka. Ubod po ubod.',
    about_s3_p2:        'Dodirni ih. Vrpoljci se s njima. To je poanta.',
    about_s4_h2:        'Održivost',
    about_s4_p1:        'Reciklirani čelik. Lokalne ruke. Bez gluposti. Ne zeleno-peremo. Ne trebamo. Reciklirani materijali koštaju više. Svejedno plaćamo. Lokalna proizvodnja traje dulje. Svejedno čekamo.',
    about_s4_p2:        'Hoćeš brzu modu? Idi drugdje. Hoćeš simbole koji traju? Na pravom si mjestu.',
    about_s5_h2:        'Ime i slogan',
    about_s5_p1:        'Sicc se čita “sick”. Skraćenica je za Sicanje. Znači i kul, super, odlično. Oboje se primjenjuje.',
    about_s5_p2:        'od kože do kože. Simboli su putovali s tradicionalne tetovane kože na tvoju. Putem čelika. Bez igle.',
    about_symbols_h2:   'Simboli.',
    about_symbols_note: 'Ima ih još. Još istražujemo. Dodati ćemo ih kad budemo sigurni.',
    about_symbols: [
      { name: 'Krug (kolo)',         meaning: 'Nema početka. Nema kraja. Zaštita. To je to.' },
      { name: 'Križ (križ)', meaning: 'Nije samo kršćansko. Starije od toga. Sunce. Zvijezde. Četiri strane svijeta. Ravnoteža.' },
      { name: 'Spirala (spirala)',   meaning: 'Kretanje. Život. Rast. Ne stajati na mjestu.' },
      { name: 'Lopta (lopta)',       meaning: 'Jedinstvo. Zajednica. Dolaženje zajedno. I lijepo izgleda na prstenu.' },
      { name: 'Crte (crte)',         meaning: 'Granice. Zaštita. Zadržavati stvari unutra. Zadržavati stvari vani.' },
      { name: 'Trokut (trokut)',     meaning: 'Oštro. Tri točke. Upozorenje. Ili samo lijep oblik.' },
      { name: 'Suza (suza)',         meaning: 'Tuga? Možda. Oštrina? Definitivno.' },
      { name: 'Mreža (mreža)', meaning: 'Veza. Isprepletenost. Svi smo povezani.' }
    ],

    /* Contact */
    contact_h1:                  'Razgovarajmo.',
    contact_sub:                 'Ili nemoj. Nećemo moliti.',
    contact_name_label:          'Ime',
    contact_name_opt:            '(neobavezno)',
    contact_name_placeholder:    'ili ne reci nam, svejedno nam je',
    contact_email_label:         'Email *',
    contact_email_placeholder:   'tvoj@email.com',
    contact_message_label:       'Poruka',
    contact_message_placeholder: 'reci što trebaš reći',
    contact_send:                'Pošalji',
    contact_note:                'Odgovorit ćemo. Može potrajati dan-dva. Zauzeti smo izradom čeličnih stvari.',
    contact_or_email:            'Ili samo pošalji email:',
    contact_instagram:           'Instagram:',
    contact_success:             'Poruka poslana.',
    contact_success_sub:         'Primili smo je. Daj nam dan-dva.',

    /* 404 */
    notfound_h2:      'Ova stranica ne postoji.',
    notfound_p:       'Ni pola naših predaka nije postojalo negdje u jednom trenutku. Raseljeni. Izgubljeni. U lutanju. Smislili su kako. I ti možeš.',
    notfound_shop:    'Idi u trgovinu →',
    notfound_home:    'Idi kući →',
    notfound_tagline: 'od kože do kože.',

    /* Checkout */
    checkout_h1:                  'Gotovo tvoje.',
    checkout_order_h2:            'Tvoja narudžba',
    checkout_nothing:             'Ništa ovdje.',
    checkout_contact_h2:          'Kontakt',
    checkout_email_label:         'Email *',
    checkout_shipping_h2:         'Dostava',
    checkout_name_label:          'Puno ime *',
    checkout_address_label:       'Adresa *',
    checkout_city_label:          'Grad *',
    checkout_postal_label:        'Poštanski broj *',
    checkout_country_label:       'Država *',
    checkout_country_placeholder: 'Hrvatska',
    checkout_payment_h2:          'Plaćanje',
    checkout_payment_note:        'Sigurna obrada plaćanja uskoro stiže. Za sada nas kontaktirajte izravno na <a href="mailto:hello@sicc.com">hello@sicc.com</a> za dovršetak narudžbe.',
    checkout_btn:                 'Plati. Nosi. Ponovi.',
    checkout_success_h1:          'Narudžba primljena.',
    checkout_success_p:           'Javit ćemo se uskoro. Tvoj čelik je na putu.',
    checkout_success_btn:         'Natrag kući →',

    back_to_shop:  'Natrag u trgovinu',
    tryon_hint:    'Tapkaj bilo gdje na prikazu kamere za postavljanje nakita. Skrolaj ili štipni za promjenu veličine.',
    tryon_flip:    'Okreni kameru',
    tryon_capture: 'Spremi foto',

    /* ── Croatian product translations ─────────────────────── */
    products: {
      'kolo-pendant-solid': {
        name: 'Kolo Privjesak – Puni',
        symbolMeaning: 'Nema početka. Nema kraja. Zaštita.',
        description: [
          'Krug. Nema početka. Nema kraja. Zaštita, jednostavno i izravno. Balkanske žene nosile su ovaj simbol stoljećima. Sad visi na tvojim grudima.',
          'Ova verzija je puna. Neprekinuta. Kao tvoja predanost nošenju baštine. Ili tvoja tvrdoglavost. Oboje funkcionira.'
        ],
        materials: 'Reciklirani nehrđajući čelik. Ručno izrađeno u Hrvatskoj.',
        size: 'Promjer privjeska 2.5cm.',
        tactile: 'Male izbočene točkice duž vanjskog ruba kruga. Prevuci palcem. Energija stick-and-poke. Zadovoljavajuće.',
        altText: 'Kolo privjesak, puni. Srebrni krug na bijeloj pozadini. Točkice oko ruba.'
      },
      'kolo-pendant-open': {
        name: 'Kolo Privjesak – Otvoreni',
        symbolMeaning: 'Nema početka. Nema kraja. Ali ovaj diše.',
        description: [
          'Isti krug. Ista zaštita. Ali ovaj diše.',
          'Otvorena verzija Kola ima praznine – male prozore izrezane kroz čelik. Prolazi svjetlo. Prolazi zrak. Prsti nalaze rubove.',
          'Nije slabiji. Samo drugačiji. Kao razlika između tetovaže i čelika.'
        ],
        materials: 'Reciklirani nehrđajući čelik. Ručno izrađeno u Hrvatskoj.',
        size: 'Promjer privjeska 2.5cm.',
        tactile: 'Izbočene točkice na punim dijelovima. Palac skače između čelika i prostora. Ritam.',
        altText: 'Kolo privjesak, otvoreni. Srebrni krug s izrezima. Bijela pozadina. Točkice na preostalom čeliku.'
      },
      'trokut-earrings': {
        name: 'Trokut Naušnice',
        symbolMeaning: 'Oštro. Tri točke. Kao vilica. Kao upozorenje.',
        description: [
          'Tri ruba. Oštri kutovi. Nisu naušnice tvoje bake. Osim ako tvoja baka nije bila zastrašujuća.',
          'Male ali agresivne. Nosi ih kad trebaš reći „ne razgovaraj sa mnom“ bez otvaranja usta.'
        ],
        materials: 'Reciklirani nehrđajući čelik. Ručno izrađeno u Hrvatskoj.',
        size: '2cm od vrha do dna. Debela karika – širina 4mm.',
        tactile: 'Točkice duž svakog ruba. Prevuci prstom od točke do točke. Svaka točkica je ubod. Svaki ubod je odluka.',
        altText: 'Trokut naušnice. Male. Tri oštra ruba. Srebrne. Točkice na površini. Bijela pozadina.'
      },
      'kuglice-earrings': {
        name: 'Kuglice Naušnice',
        symbolMeaning: 'Jedinstvo. Zajednica. Dolaženje zajedno. I teško.',
        description: [
          'Kuglice na šipkama. Glomazne. Teške (na dobar način). Debela karika koja kaže „imam mišljenja i čuti ćeš ih.“',
          'Nije nježno. Nije suptilno. Svaka mala sfera hvata svjetlo drugačije. Nosi jednu ili obje. Ne sudimo.'
        ],
        materials: 'Reciklirani nehrđajući čelik. Ručno izrađeno u Hrvatskoj.',
        size: '3.5cm od vrha do dna. Debljina karike 6mm.',
        tactile: 'Svaka kuglica ima jednu točkicu. Broji ih. Ima ih mnogo. Meditacija u čeliku.',
        altText: 'Kuglice naušnice. Velike. Srebrne kuglice spojene šipkama. Bijela pozadina. Glomazne.'
      },
      'kolo-ring-masculine': {
        name: 'Kolo Prsten – Muški',
        symbolMeaning: 'Zaštitni krug. Omotan oko prsta.',
        description: [
          'Isti zaštitni krug. Sad omotan oko prsta.',
          'Ova verzija je deblji. Teži. Osjetit ćeš ga kad stisneš šaku. Osjetit ćeš ga pri rukovanju. Osjetit ćeš ga kad zaboraviš da je tu – što nećeš.'
        ],
        materials: 'Reciklirani nehrđajući čelik. Ručno izrađeno u Hrvatskoj.',
        size: 'Širina prstena 8mm. Dostupne EU veličine 48–64.',
        tactile: 'Točkice utisnute u prsten oko cijelog pojasa. Vrti ga na prstu. Stimuliraj satima. Nećemo nikome reći.',
        altText: 'Kolo prsten, muški. Debeli srebrni pojas. Točkice unaokolo. Bijela pozadina.'
      },
      'kolo-ring-feminine': {
        name: 'Kolo Prsten – Ženski',
        symbolMeaning: 'Ista zaštita. Drugačije proporcije.',
        description: [
          'Ista zaštita. Isti krug. Samo malo manje metala između tebe i svijeta.',
          'Tanji. Lakši. Ali ne zovi ga nježnim. Još uvijek je čelik. Još uvijek ima točkice. Još uvijek nešto znači.'
        ],
        materials: 'Reciklirani nehrđajući čelik. Ručno izrađeno u Hrvatskoj.',
        size: 'Širina prstena 4mm. Dostupne EU veličine 44–60.',
        tactile: 'Točkice utisnute oko pojasa – manje od muške verzije, ali tu su. Vrtuljaj palcem u krug. Smirujuće.',
        altText: 'Kolo prsten, ženski. Tanki srebrni pojas. Male točkice. Bijela pozadina. Lakši ali ne slab.'
      },
      'mreza-choker': {
        name: 'Mreža Ogrlica',
        symbolMeaning: 'Veza. Isprepletenost. Svi smo povezani.',
        description: [
          'Biserne ogrlice su za bake. Ovo je za tebe.',
          'Mreža isprepletenih čeličnih prstena. Obavija se oko vrata poput druge kože. Kreće se s tobom. Dovoljno teži da te podsjeća da je tu.',
          'Inspirirano tradicionalnim bisernim ogrlicama. Ali od čelika. Jer nisi krhka.'
        ],
        materials: 'Reciklirani nehrđajući čelik. Ručno izrađeno u Hrvatskoj. Isprepleteni prsteni.',
        size: 'Duljina 38cm (standardna ogrlica). Lančić za produženje do 42cm.',
        tactile: 'Svaki mali prsten ima točkicu. Stotine njih. Prevuci prstima po vratu. Tajni tekst koji nitko drugi ne može čitati.',
        altText: 'Mreža ogrlica. Srebrna mreža prstena. Bijela pozadina. Izgleda kao biseri izdaleka. Nije.'
      },
      'polukrug-septum': {
        name: 'Polukrug Septum',
        symbolMeaning: 'Tri luka. Složeni. Uzorak.',
        description: [
          'Tri polukruga. Spojena. Vise s tvojeg septuma. Jer obična karika bi bila prejednostavna.',
          'Složeni. Simetrični. Zadovoljstvo gledati. Još veće zadovoljstvo dodirivati.'
        ],
        materials: 'Reciklirani nehrđajući čelik. Ručno izrađeno u Hrvatskoj. Hipoalergeno.',
        size: 'Širina 1.5cm. Visi 2.5cm od nosa.',
        tactile: 'Točkice na svakom polukrugu – tri po luku. Prevuci vrškom prsta po dnu. Gore jednim lukom, dolje sljedećim. Uzorak.',
        altText: 'Polukrug septum. Tri spojena srebrna polukruga. Bijela pozadina. Točkice na svakom luku.'
      },
      'suza-septum': {
        name: 'Suza Septum',
        symbolMeaning: 'Tuga? Možda. Oštrina? Definitivno.',
        description: [
          'Kap suze. Ali s oštrim krajem. Plačeš? Možda. Bodenje? Takóđer možda.',
          'Nosi ga kad si tužan ali opasan. Nosi ga kad uopće nisi tužan ali ti se sviđa oblik. Ne pitamo.'
        ],
        materials: 'Reciklirani nehrđajući čelik. Ručno izrađeno u Hrvatskoj. Hipoalergeno.',
        size: 'Duljina 2cm. Širina 1.2cm na najširem dijelu.',
        tactile: 'Točkice duž zaobljenog ruba. Nijedna na oštrom vrhu. To je samo za show – ili za pritiskanje. Tvoj izbor.',
        altText: 'Suza septum. Oblik suze. Oštar vrh. Srebrna. Bijela pozadina.'
      }
    }
  }
};

/* ── Public helpers ───────────────────────────────────────── */

function t(key) {
  var strings = SICC_I18N[SICC_LANG] || SICC_I18N.en;
  if (strings.hasOwnProperty(key)) return strings[key];
  return SICC_I18N.en.hasOwnProperty(key) ? SICC_I18N.en[key] : key;
}

/* Return localised product field, falling back to EN */
function pt(product, field) {
  if (SICC_LANG === 'hr') {
    var hrProds = SICC_I18N.hr.products;
    if (hrProds && hrProds[product.id] && hrProds[product.id][field] !== undefined) {
      return hrProds[product.id][field];
    }
  }
  return product[field];
}

/* Set language, persist, refresh page */
function setLang(lang) {
  SICC_LANG = lang;
  try { localStorage.setItem('sicc-lang', lang); } catch(e) {}
  updateStaticText();
  if (window.SiccRouter) SiccRouter.refresh();
  if (window.SiccCart)   SiccCart.render();
}

/* Update static HTML elements (nav, cart sidebar) */
function updateStaticText() {
  var map = [
    ['.menu-link[data-label="01"]', 'nav_home'],
    ['.menu-link[data-label="02"]', 'nav_shop'],
    ['.menu-link[data-label="03"]', 'nav_about'],
    ['.menu-link[data-label="04"]', 'nav_contact']
  ];
  map.forEach(function(pair) {
    var el = document.querySelector(pair[0]);
    if (el) el.textContent = t(pair[1]);
  });

  var selectors = {
    '.menu-footer-line':   'nav_footer',
    '.cart-title':         'cart_title',
    '.cart-warning':       'cart_warning'
  };
  Object.keys(selectors).forEach(function(sel) {
    var el = document.querySelector(sel);
    if (el) el.textContent = t(selectors[sel]);
  });

  var checkoutBtn = document.getElementById('cart-checkout-btn');
  if (checkoutBtn) checkoutBtn.textContent = t('cart_checkout');

  var shopBtn = document.getElementById('cart-shop-btn');
  if (shopBtn) shopBtn.textContent = t('cart_keep');

  var langBtn = document.getElementById('lang-btn');
  if (langBtn) langBtn.textContent = t('lang_label');

  var tryonHint = document.querySelector('.tryon-hint');
  if (tryonHint) tryonHint.textContent = t('tryon_hint');

  var tryonFlip = document.getElementById('tryon-flip');
  if (tryonFlip) tryonFlip.textContent = t('tryon_flip');

  var tryonCapture = document.getElementById('tryon-capture');
  if (tryonCapture) tryonCapture.textContent = t('tryon_capture');

  /* Update <html lang> attribute */
  document.documentElement.lang = SICC_LANG;
}

/* Run on initial page load (scripts are at end of <body>) */
updateStaticText();
