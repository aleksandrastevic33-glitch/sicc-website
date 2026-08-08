/* ─── SICC Product Catalog ─────────────────────────────────
   All product data. Add real image paths when photos are ready.
   ─────────────────────────────────────────────────────────── */

var SICC_PRODUCTS = [

  /* ── PENDANTS ─────────────────────────────── */
  {
    id: 'kolo-pendant-solid',
    name: 'Kolo Pendant – Solid',
    category: 'Pendant',
    price: 55,
    symbolName: 'Kolo (circle)',
    symbolMeaning: 'No beginning. No end. Protection.',
    description: [
      'The circle. No beginning. No end. Protection, plain and simple. Balkan women wore this symbol for centuries. Now it hangs on your chest.',
      'This version is solid. Unbroken. Like your commitment to wearing heritage. Or your stubbornness. Both work.'
    ],
    materials: 'Recycled stainless steel. Handmade in Croatia.',
    size: 'Pendant diameter 2.5cm.',
    tactile: 'Small raised dots along the outer edge of the circle. Run your thumb over them. Stick-and-poke energy. Satisfying.',
    tryOnNote: 'Camera opens. Hold pendant against your chest. We won\'t watch.',
    altText: 'Kolo pendant, solid. Silver circle on white background. Dots around the edge.',
    images: [
      'images/products/kolo-pendant-solid-1.png'
    ],
    tryOnSrc: 'images/deco/pendant-puni.png',
    featured: true
  },

  {
    id: 'kolo-pendant-open',
    name: 'Kolo Pendant – Open',
    category: 'Pendant',
    price: 55,
    symbolName: 'Kolo (circle)',
    symbolMeaning: 'No beginning. No end. But this one breathes.',
    description: [
      'Same circle. Same protection. But this one breathes.',
      'The open version of Kolo has gaps – small windows cut through the steel. Light passes through. Air passes through. Your fingers find the edges.',
      'Not weaker. Just different. Like the difference between a tattoo and steel.'
    ],
    materials: 'Recycled stainless steel. Handmade in Croatia.',
    size: 'Pendant diameter 2.5cm.',
    tactile: 'Raised dots around the solid areas. Your thumb jumps between steel and space. A rhythm.',
    tryOnNote: 'Camera opens. See how light passes through. Or don\'t. We\'re not forcing you.',
    altText: 'Kolo pendant, open. Silver circle with cutouts. White background. Dots on the remaining steel.',
    images: [
      'images/products/kolo-pendant-open-1.png'
    ],
    tryOnSrc: 'images/deco/pendant-prazni.png',
    featured: true
  },

  /* ── EARRINGS ─────────────────────────────── */
  {
    id: 'trokut-earrings',
    name: 'Trokut Earrings',
    category: 'Earrings',
    price: 45,
    symbolName: 'Trokut (triangle)',
    symbolMeaning: 'Sharp. Three points. Like a fork. Like a warning.',
    description: [
      'Three edges. Sharp angles. Not your grandmother\'s earrings. Unless your grandmother was terrifying.',
      'Small but aggressive. Wear them when you need to say "don\'t talk to me" without opening your mouth.'
    ],
    materials: 'Recycled stainless steel. Handmade in Croatia.',
    size: '2cm from top to bottom. Thick hoop – 4mm width.',
    tactile: 'Dots along each edge. Run your finger from point to point. Each dot is a poke. Each poke is a decision.',
    tryOnNote: 'Camera opens. Hold near your ear. Try not to look too intimidating.',
    altText: 'Trokut earrings. Small. Three sharp edges. Silver. Dots on the surface. White background.',
    images: [
      'images/products/trokut-earrings-1.png'
    ],
    tryOnSrc: 'images/deco/trokut.png',
    featured: true
  },

  {
    id: 'kuglice-earrings',
    name: 'Kuglice Earrings',
    category: 'Earrings',
    price: 65,
    symbolName: 'Kuglice (little balls)',
    symbolMeaning: 'Unity. Community. Coming together. Also heavy.',
    description: [
      'Balls on rods. Chunky. Heavy (in a good way). Thick loop that says "I have opinions and you will hear them."',
      'Not delicate. Not subtle. Each little sphere catches the light differently. Wear one or wear both. We don\'t judge.'
    ],
    materials: 'Recycled stainless steel. Handmade in Croatia.',
    size: '3.5cm from top to bottom. Hoop thickness 6mm.',
    tactile: 'Each ball has a single dot. Count them. There are many. A meditation in steel.',
    tryOnNote: 'Camera opens. Prepare for weight. Good weight.',
    altText: 'Kuglice earrings. Large. Silver balls connected by rods. White background. Chunky.',
    images: [
      'images/products/kuglice-earrings-1.png'
    ],
    tryOnSrc: 'images/deco/kuglice.png',
    featured: true
  },

  /* ── RINGS ────────────────────────────────── */
  {
    id: 'kolo-ring-masculine',
    name: 'Kolo Ring – Masculine',
    category: 'Ring',
    price: 75,
    symbolName: 'Kolo (circle)',
    symbolMeaning: 'The protective circle. Wrapped around your finger.',
    description: [
      'The same protective circle. Now wrapped around your finger.',
      'This version is thicker. Heavier. You\'ll feel it when you make a fist. You\'ll feel it when you shake a hand. You\'ll feel it when you forget it\'s there – which you won\'t.'
    ],
    materials: 'Recycled stainless steel. Handmade in Croatia.',
    size: 'Band width 8mm. Available EU sizes 48–64.',
    tactile: 'Dots stamped in a ring around the entire band. Spin it on your finger. Stim for hours. We won\'t tell anyone.',
    tryOnNote: 'Camera opens. Put it on your finger. Make a fist. Feel something.',
    altText: 'Kolo ring, masculine. Thick silver band. Dots all around. White background.',
    images: [
      'images/products/kolo-ring-masc-1.png'
    ],
    tryOnSrc: 'images/deco/muski-prsten.png',
    featured: false
  },

  {
    id: 'kolo-ring-feminine',
    name: 'Kolo Ring – Feminine',
    category: 'Ring',
    price: 65,
    symbolName: 'Kolo (circle)',
    symbolMeaning: 'Same protection. Different proportions.',
    description: [
      'Same protection. Same circle. Just a little less metal between you and the world.',
      'Thinner. Lighter. But don\'t call it delicate. It\'s still steel. It still has dots. It still means something.'
    ],
    materials: 'Recycled stainless steel. Handmade in Croatia.',
    size: 'Band width 4mm. Available EU sizes 44–60.',
    tactile: 'Dots stamped around the band – smaller than the masculine version, but they\'re there. Run your thumb in circles. Calming.',
    tryOnNote: 'Camera opens. Try it. Spin it. See if it fits your energy.',
    altText: 'Kolo ring, feminine. Thin silver band. Small dots. White background. Lighter but not weak.',
    images: [
      'images/products/kolo-ring-fem-1.png'
    ],
    tryOnSrc: 'images/deco/zenski-prsten.png',
    featured: false
  },

  /* ── CHOKER ───────────────────────────────── */
  {
    id: 'mreza-choker',
    name: 'Mreža Choker',
    category: 'Choker',
    price: 95,
    symbolName: 'Mreža (net)',
    symbolMeaning: 'Connection. Interlocking. We\'re all linked.',
    description: [
      'Pearl chokers are for grandmothers. This is for you.',
      'A net of interconnected steel rings. Wraps around your neck like a second skin. Moves with you. Weighs just enough to remind you it\'s there.',
      'Inspired by traditional pearl chokers. But made of steel. Because you\'re not fragile.'
    ],
    materials: 'Recycled stainless steel. Handmade in Croatia. Interlocking rings.',
    size: 'Length 38cm (standard choker). Extender chain to 42cm.',
    tactile: 'Each small ring has a dot. Hundreds of them. Run your fingers across your neck. A secret text nobody else can read.',
    tryOnNote: 'Camera opens. Wrap it around your neck. Feel like royalty. Steel royalty.',
    altText: 'Mreža choker. Silver net of rings. White background. Looks like pearls from far away. It\'s not.',
    images: [
      'images/products/mreza-choker-1.png'
    ],
    tryOnSrc: 'images/deco/ogrlica-mreza.png',
    featured: false
  },

  /* ── SEPTUMS ──────────────────────────────── */
  {
    id: 'polukrug-septum',
    name: 'Polukrug Septum',
    category: 'Septum',
    price: 40,
    symbolName: 'Polukrug (half-circle)',
    symbolMeaning: 'Three curves. Stacked. A pattern.',
    description: [
      'Three half-circles. Connected. Hanging from your septum. Because a normal ring would be too simple.',
      'Stacked. Symmetrical. Satisfying to look at. Even more satisfying to touch.'
    ],
    materials: 'Recycled stainless steel. Handmade in Croatia. Hypoallergenic.',
    size: 'Width 1.5cm. Drops 2.5cm from nose.',
    tactile: 'Dots on each half-circle – three per curve. Run your fingertip along the bottom. Up one curve, down the next. A pattern.',
    tryOnNote: 'Camera opens. Hold near your nose. Pretend it\'s already there.',
    altText: 'Polukrug septum. Three silver half-circles connected. White background. Dots on each curve.',
    images: [
      'images/products/polukrug-septum-1.png'
    ],
    tryOnSrc: 'images/products/polukrug-septum-1.png',
    featured: false
  },

  {
    id: 'suza-septum',
    name: 'Suza Septum',
    category: 'Septum',
    price: 40,
    symbolName: 'Suza (tear)',
    symbolMeaning: 'Sadness? Maybe. Sharpness? Definitely.',
    description: [
      'A tear drop. But sharp at the end. Crying? Maybe. Stabbing? Also maybe.',
      'Wear it when you\'re sad but dangerous. Wear it when you\'re not sad at all but like the shape. We don\'t ask.'
    ],
    materials: 'Recycled stainless steel. Handmade in Croatia. Hypoallergenic.',
    size: 'Length 2cm. Width 1.2cm at widest point.',
    tactile: 'Dots along the rounded edge. None on the sharp point. That\'s just for show – or for pressing. Your choice.',
    tryOnNote: 'Camera opens. Don\'t poke yourself. We warned you.',
    altText: 'Suza septum. Tear drop shape. Sharp point at the end. Silver. White background.',
    images: [
      'images/products/suza-septum-1.png'
    ],
    tryOnSrc: 'images/products/suza-septum-1.png',
    featured: false
  }

];

/* Helper: find product by id */
function getProduct(id) {
  return SICC_PRODUCTS.find(function(p) { return p.id === id; }) || null;
}

/* Helper: featured products */
function getFeaturedProducts() {
  return SICC_PRODUCTS.filter(function(p) { return p.featured; }).slice(0, 3);
}

/* Helper: format price */
function formatPrice(n) {
  return '€' + n;
}
