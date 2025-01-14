interface Bean {
  name: string
  roaster: string
  productUrl?: string
  retailer: string
  location: string
  retailPrice: number // USD
  dateObtained: string
}

const vault: Array<Bean> = [
  {
    name: 'Daterra Sundrop',
    roaster: 'George Howell Coffee',
    productUrl:
      'https://web.archive.org/web/20230203211237/https://georgehowellcoffee.com/products/daterra-sundrop-bra-005',
    retailer: 'Seattle Coffee Gear',
    location: '87 Stanford Shopping Center, Palo Alto, CA 94304',
    retailPrice: 19,
    dateObtained: '2022-12-28',
  },
  {
    name: 'Peru Valle Inca',
    roaster: 'Artís Coffee',
    productUrl:
      'https://web.archive.org/web/20230203212601/https://shop.artiscoffee.com/products/peru-carlos-alfredo',
    retailer: 'Artís Coffee',
    location: '1717 Fourth St B, Berkeley, CA 94710',
    retailPrice: 22,
    dateObtained: '2023-01-08',
  },
  {
    name: 'Påtår',
    roaster: 'IKEA',
    productUrl:
      'https://web.archive.org/web/20221006084451/https://www.ikea.com/us/en/p/patar-ground-coffee-medium-roast-organic-utz-certified-100-arabica-beans-30324239/',
    retailer: 'IKEA',
    location: '4400 Shellmound Street, Emeryville, CA 94608',
    retailPrice: 9.99,
    dateObtained: '2023-01-14',
  },
  {
    name: 'Kenya Gatugi',
    roaster: 'Captain + Stoker',
    productUrl:
      'https://web.archive.org/web/20230203224735/https://captainandstoker.com/products/kenya-gatugi',
    retailer: 'Captain + Stoker',
    location: '398 E Franklin St., Monterey, CA 93940',
    retailPrice: 26,
    dateObtained: '2023-01-23',
    /**
     * Found wet mill!! https://web.archive.org/web/20230203231411/https://www.kencaffee.coop/gatugi-wet-mill/
     * Gatugi Wet Mill for washing, fermenting, and drying: https://goo.gl/maps/xWswYqLeu9dayW1c7
     * -0.5290377526213221, 36.96189025696007
     * Othaya Coffee Dry Mill for further processing: https://goo.gl/maps/V3y52FPPXjYLVJjh6
     * -0.5484545547316462, 36.94449048177562
     * KCCE Export Warehouse: https://goo.gl/maps/Brtk2UDdFXk1VLbi9
     * Example of a similar green (but not exact):
     * https://web.archive.org/web/20211209065356/https://royalcoffee.com/product/47369/
     * https://web.archive.org/web/20211026024636/https://royalcoffee.com/product/49670/
     */
  },
]

export {}

// {
//   id: '65bd8cb329',
//   name: 'Udzungwa 70% with Nibs',
//   subtitle: 'Organic Vegan Dark',
//   slug: 'udzungwa-70-with-nibs-organic-vegan-dark-original-beans',
//   maker: 'Original Beans',
//   productUrl: 'https://originalbeans.com/shop/bars/udzungwa-70-chocolate',

//   images: {
//     HERO: {
//       src: '/bars/udzungwa-70-with-nibs-organic-vegan-dark-original-beans.jpg',
//       alt: 'Udzungwa 70% with Nibs Organic Vegan Dark bar from Original Beans embedded in a pile of cacao beans',
//     },
//     BAR_FRONT: {
//       src: '/bars/udzungwa-70-with-nibs-organic-vegan-dark-original-beans-bar-front.jpg',
//       alt: 'Front of Udzungwa 70% with Nibs Organic Vegan Dark bar from Original Beans with a radiating pattern',
//     },
//     BAR_BACK: {
//       src: '/bars/udzungwa-70-with-nibs-organic-vegan-dark-original-beans-bar-back.jpg',
//       alt: 'Back of Udzungwa 70% with Nibs Organic Vegan Dark bar from Original Beans',
//     },
//     PACKAGE_FRONT: {
//       src: '/bars/udzungwa-70-with-nibs-organic-vegan-dark-original-beans-package-front.jpg',
//       alt: 'Front of Udzungwa 70% with Nibs Organic Vegan Dark bar from Original Beans package',
//     },
//     PACKAGE_BACK: {
//       src: '/bars/udzungwa-70-with-nibs-organic-vegan-dark-original-beans-package-back.jpg',
//       alt: 'Back of Udzungwa 70% with Nibs Organic Vegan Dark bar from Original Beans package',
//     },
//   },

//   barType: 'Dark',
//   percent: 70,
//   barWeight: 70,
//   barDimensions: [155, 75, 8],
//   ingredients: [
//     'Organic Cacao Mass',
//     'Organic Raw Cane Sugar',
//     'Organic Cacao Butter',
//     'Organic Cacao Beans',
//   ],
//   facilityAllergen: ['Nuts'],

//   packagingType: 'Envelope',
//   packagingDimensions: [158, 80, 9],
//   wrapper: 'Biodegradable',
//   marketingTerms: ['On Bar One Tree', 'Rare', 'Ultra Rare'],
//   certifiedLabels: ['Organic'], // CH-BIO-006
//   packageLanguages: [
//     'English',
//     'German',
//     'French',
//     'Portuguese',
//     'Dutch',
//     'Danish',
//     'Russian',
//     'Arabic',
//   ],

//   retailer: 'Olive Tree Marketplace',
//   location: 'Ocean Beach',
//   retailPrice: 6.49,
//   dateObtained: '2023-01-07',

//   origin: {
//     region: 'Udzungwa Park',
//     country: 'Tanzania',
//   },
//   beanVariety: 'Trinitario',
// },
// {
//   id: '9548da595f',
//   name: 'Lavender Flowers + Red Salt',
//   slug: 'lavender-flowers-plus-red-salt-antidote-chocolate',
//   maker: 'Antidote Chocolate',
//   productUrl: 'https://antidotechoco.com/products/lavender-red-salt-84',

//   images: {
//     HERO: {
//       src: '/bars/lavender-flowers-plus-red-salt-antidote-chocolate.jpg',
//       alt: 'Lavender Flowers + Red Salt bar from Antidote Chocolate floating on a teal background',
//     },
//     BAR_FRONT: {
//       src: '/bars/lavender-flowers-plus-red-salt-antidote-chocolate-bar-front.jpg',
//       alt: 'Front of Lavender Flowers + Red Salt bar from Antidote Chocolate with a custom branded bar',
//     },
//     BAR_BACK: {
//       src: '/bars/lavender-flowers-plus-red-salt-antidote-chocolate-bar-back.jpg',
//       alt: 'Back of Lavender Flowers + Red Salt bar from Antidote Chocolate',
//     },
//     PACKAGE_FRONT: {
//       src: '/bars/lavender-flowers-plus-red-salt-antidote-chocolate-package-front.jpg',
//       alt: 'Front of Lavender Flowers + Red Salt bar from Antidote Chocolate package',
//     },
//     PACKAGE_BACK: {
//       src: '/bars/lavender-flowers-plus-red-salt-antidote-chocolate-package-back.jpg',
//       alt: 'Back of Lavender Flowers + Red Salt bar from Antidote Chocolate package',
//     },
//   },

//   barType: 'Dark',
//   percent: 84,
//   barWeight: 65,
//   barDimensions: [155, 62, 8],
//   ingredients: [
//     'Cacao Beans',
//     'Whole Cane Sugar',
//     'Cacao Butter',
//     'Lavender Flowers',
//     'Red Alaea Salt',
//     'Sunflower Lecithin',
//   ],
//   facilityAllergen: ['Milk', 'Soy', 'Nuts'],

//   packagingType: 'Box',
//   packagingDimensions: [182, 69, 10],
//   wrapper: 'Metallised plastic',
//   marketingTerms: [
//     'Love',
//     'Less Sugar',
//     'Endorphin Boosting',
//     'Minimal Processing',
//     'Mood',
//     'Female Creator',
//   ],
//   certifiedLabels: ['Kosher'], // International Kosher Council
//   uncertifiedLabels: ['Gluten-free', 'Vegan'],
//   productionLocationHighlighted: true,
//   packageLanguages: ['English', 'German', 'French'],

//   retailer: 'Blackmarket Bakery',
//   location: 'North Park',
//   retailPrice: 7.5,
//   dateObtained: '2022-12-16',

//   origin: {
//     region: 'Manabi Province',
//     country: 'Ecuador',
//   },
//   beanVariety: 'Arriba Nacional',
// },
// {
//   id: 'cdc0143f5b',
//   name: 'Caramel Crack',
//   subtitle: 'Organic 50% dark milk chocolate',
//   slug: 'caramel-crack-organic-50-dark-milk-chocolate-torroir-chocolate',
//   maker: 'Terroir Chocolate',
//   productUrl:
//     'https://www.tcchocolate.com/products/caramel-crack-60-dark-milk',

//   images: {
//     HERO: {
//       src: '/bars/caramel-crack-organic-50-dark-milk-chocolate-torroir-chocolate.jpg',
//       alt: 'Caramel Crack Organic 50% dark milk chocolate bar from Terroir Chocolate on shattered sugar glass and a red background',
//     },
//     BAR_FRONT: {
//       src: '/bars/caramel-crack-organic-50-dark-milk-chocolate-torroir-chocolate-bar-front.jpg',
//       alt: 'Front of Caramel Crack Organic 50% dark milk chocolate bar from Terroir Chocolate with a custom branded bar',
//     },
//     BAR_BACK: {
//       src: '/bars/caramel-crack-organic-50-dark-milk-chocolate-torroir-chocolate-bar-back.jpg',
//       alt: 'Back of Caramel Crack Organic 50% dark milk chocolate bar from Terroir Chocolate',
//     },
//     PACKAGE_FRONT: {
//       src: '/bars/caramel-crack-organic-50-dark-milk-chocolate-torroir-chocolate-package-front.jpg',
//       alt: 'Front of Caramel Crack Organic 50% dark milk chocolate bar from Terroir Chocolate package',
//     },
//     PACKAGE_BACK: {
//       src: '/bars/caramel-crack-organic-50-dark-milk-chocolate-torroir-chocolate-package-back.jpg',
//       alt: 'Back of Caramel Crack Organic 50% dark milk chocolate bar from Terroir Chocolate package',
//     },
//   },

//   barType: 'Dark Milk',
//   percent: 50,
//   barWeight: 57,
//   barDimensions: [150, 76, 5],
//   ingredients: [
//     'Organic Cocoa Beans',
//     'Organic Cane Sugar',
//     'Organic Cocoa Butter',
//     'Organic Whole Milk Powder',
//     [
//       'MN Maple Toffee',
//       [
//         'Organic Cane Sugar',
//         'Organic Butter',
//         'Organic Maple Syrup',
//         'Sea Salt',
//       ],
//     ],
//   ],
//   foodAllergen: ['Milk'],
//   barDamaged: true,

//   packagingType: 'Envelope',
//   packagingDimensions: [165, 80, 8],
//   wrapper: 'Foil with Paper Backing',
//   marketingTerms: [
//     'Organic',
//     'Tasting Notes',
//     'Texture',
//     'Finish',
//     'Crafted',
//     'Bean to Bar',
//   ],
//   certifiedLabels: ['USDA Organic'], // MCIA
//   uncertifiedLabels: ['Gluten-free', 'Soy-free'],
//   productionLocationHighlighted: true,

//   retailer: 'Blackmarket Bakery',
//   location: 'North Park',
//   retailPrice: 7.5,
//   dateObtained: '2022-12-16',

//   origin: {
//     country: 'Unknown',
//   },
// },
// {
//   id: '2d32855f96',
//   name: 'Dark & Salty',
//   subtitle: 'Dark Chocolate & Vanilla-Infused Sea Salt',
//   slug: 'dark-and-salty-dark-chocolate-and-vanilla-infused-sea-salt-xocolatl-small-batch-chocolate',
//   maker: 'Xocolatl Small Batch Chocolate',
//   productUrl: 'https://xocolatlchocolate.com/products/dark-salty',

//   images: {
//     HERO: {
//       src: '/bars/dark-and-salty-dark-chocolate-and-vanilla-infused-sea-salt-xocolatl-small-batch-chocolate.jpg',
//       alt: 'Dark & Salty Dark Chocolate & Vanilla-Infused Sea Salt bar from Xocolatl Small Batch Chocolate in cast iron pan with salt',
//     },
//     BAR_FRONT: {
//       src: '/bars/dark-and-salty-dark-chocolate-and-vanilla-infused-sea-salt-xocolatl-small-batch-chocolate-bar-front.jpg',
//       alt: 'Front of Dark & Salty Dark Chocolate & Vanilla-Infused Sea Salt bar from Xocolatl Small Batch Chocolate with a custom branded bar',
//     },
//     BAR_BACK: {
//       src: '/bars/dark-and-salty-dark-chocolate-and-vanilla-infused-sea-salt-xocolatl-small-batch-chocolate-bar-back.jpg',
//       alt: 'Back of Dark & Salty Dark Chocolate & Vanilla-Infused Sea Salt bar from Xocolatl Small Batch Chocolate',
//     },
//     PACKAGE_FRONT: {
//       src: '/bars/dark-and-salty-dark-chocolate-and-vanilla-infused-sea-salt-xocolatl-small-batch-chocolate-package-front.jpg',
//       alt: 'Front of Dark & Salty Dark Chocolate & Vanilla-Infused Sea Salt bar from Xocolatl Small Batch Chocolate package',
//     },
//     PACKAGE_BACK: {
//       src: '/bars/dark-and-salty-dark-chocolate-and-vanilla-infused-sea-salt-xocolatl-small-batch-chocolate-package-back.jpg',
//       alt: 'Back of Dark & Salty Dark Chocolate & Vanilla-Infused Sea Salt bar from Xocolatl Small Batch Chocolate package',
//     },
//   },

//   barType: 'Dark',
//   percent: 80,
//   barWeight: 75,
//   barDimensions: [148, 72, 7],
//   ingredients: [
//     'Organic Cacao',
//     'Organic Cane Sugar',
//     'Vanilla-infused Sea Salt',
//   ],
//   facilityAllergen: ['Peanuts', 'Tree Nuts'],

//   packagingType: 'Paper Wrap',
//   packagingDimensions: [152, 76, 10],
//   wrapper: 'Foil with Paper Backing',
//   marketingTerms: ['Small Batch', 'Fair Trade'],
//   uncertifiedLabels: ['Gluten-free', 'Soy-free', 'Dairy-free'],
//   productionLocationHighlighted: true,

//   retailer: 'Blackmarket Bakery',
//   location: 'North Park',
//   retailPrice: 10,
//   dateObtained: '2022-12-16',

//   origin: {
//     country: 'Uganda',
//   },
// },
// {
//   id: 'dab435f9c9',
//   name: 'Pink Sea Salt',
//   subtitle: 'Unroasted Dark Chocolate',
//   slug: 'pink-sea-salt-unroasted-dark-chocolate-raaka-chocolate',
//   maker: 'Raaka Chocolate',
//   productUrl: 'https://www.raakachocolate.com/products/pink-sea-salt',

//   images: {
//     HERO: {
//       src: '/bars/pink-sea-salt-unroasted-dark-chocolate-raaka-chocolate.jpg',
//       alt: 'Pink Sea Salt Unroasted Dark Chocolate bar from Raaka Chocolate on rippled linen tablecloth',
//     },
//     BAR_FRONT: {
//       src: '/bars/pink-sea-salt-unroasted-dark-chocolate-raaka-chocolate-bar-front.jpg',
//       alt: 'Front of Pink Sea Salt Unroasted Dark Chocolate bar from Raaka Chocolate with a custom branded bar',
//     },
//     BAR_BACK: {
//       src: '/bars/pink-sea-salt-unroasted-dark-chocolate-raaka-chocolate-bar-back.jpg',
//       alt: 'Back of Pink Sea Salt Unroasted Dark Chocolate bar from Raaka Chocolate',
//     },
//     PACKAGE_FRONT: {
//       src: '/bars/pink-sea-salt-unroasted-dark-chocolate-raaka-chocolate-package-front.jpg',
//       alt: 'Front of Pink Sea Salt Unroasted Dark Chocolate bar from Raaka Chocolate package',
//     },
//     PACKAGE_BACK: {
//       src: '/bars/pink-sea-salt-unroasted-dark-chocolate-raaka-chocolate-package-back.jpg',
//       alt: 'Back of Pink Sea Salt Unroasted Dark Chocolate bar from Raaka Chocolate package',
//     },
//   },

//   barType: 'Dark',
//   percent: 71,
//   barWeight: 51,
//   barDimensions: [134, 61, 6],
//   ingredients: [
//     'Organic Cacao Beans',
//     'Organic Cane Sugar',
//     'Organic Maple Sugar',
//     'Organic Cocoa Butter',
//     'Peruvian Pink Sea Salt',
//   ],

//   packagingType: 'Paper Wrap',
//   packagingDimensions: [136, 63, 7],
//   wrapper: 'Foil with Paper Backing',
//   marketingTerms: ['Bean to Bar', 'Unroasted', 'Transparent'],
//   certifiedLabels: ['Non GMO', 'USDA Organic', 'Transparent Trade'],
//   uncertifiedLabels: ['Vegan', 'Gluten Free', 'Soy Free', 'Nut Free'],
//   productionLocationHighlighted: true,

//   retailer: 'Blackmarket Bakery',
//   location: 'North Park',
//   retailPrice: 7,
//   dateObtained: '2022-12-16',

//   origin: 'Zorzal Reserve',
// },
// {
//   id: 'd8e2e9afee',
//   name: 'Coffee Crunch',
//   slug: 'coffee-crunch-olive-and-sinclair-chocolate-co',
//   maker: 'Olive & Sinclair Chocolate Co',
//   productUrl: 'https://www.oliveandsinclair.com/shop/coffee-chocolate-bar',

//   images: {
//     HERO: {
//       src: '/bars/coffee-crunch-olive-and-sinclair-chocolate-co.jpg',
//       alt: 'Coffee Crunch bar from Olive & Sinclair Chocolate Co on a marble table with a laptop and coffee cup',
//     },
//     BAR_FRONT: {
//       src: '/bars/coffee-crunch-olive-and-sinclair-chocolate-co-bar-front.jpg',
//       alt: 'Front of Coffee Crunch bar from Olive & Sinclair Chocolate Co with a custom branded bar',
//     },
//     BAR_BACK: {
//       src: '/bars/coffee-crunch-olive-and-sinclair-chocolate-co-bar-back.jpg',
//       alt: 'Back of Coffee Crunch bar from Olive & Sinclair Chocolate Co',
//     },
//     PACKAGE_FRONT: {
//       src: '/bars/coffee-crunch-olive-and-sinclair-chocolate-co-package-front.jpg',
//       alt: 'Front of Coffee Crunch bar from Olive & Sinclair Chocolate Co package',
//     },
//     PACKAGE_BACK: {
//       src: '/bars/coffee-crunch-olive-and-sinclair-chocolate-co-package-back.jpg',
//       alt: 'Back of Coffee Crunch bar from Olive & Sinclair Chocolate Co package',
//     },
//   },

//   barType: 'Dark', // Not listed, inferred from percent
//   percent: 67,
//   barWeight: 71,
//   barDimensions: [94, 132, 7],
//   ingredients: ['Cacao Beans', 'Brown Sugar', 'Coffee Beans'],
//   foodAllergen: ['Nuts'],

//   packagingType: 'Box',
//   packagingDimensions: [98, 135, 10],
//   wrapper: 'Metallised plastic',
//   marketingTerms: [
//     'Small Batch',
//     'Artisan',
//     'Slow Roasted',
//     'Stone Ground',
//     'Hand Crafted',
//   ],
//   uncertifiedLabels: ['Non GMO', 'All Natural', 'Gluten Free'],
//   productionLocationHighlighted: true,

//   retailer: 'Blackmarket Bakery',
//   location: 'North Park',
//   retailPrice: 7,
//   dateObtained: '2022-12-16',

//   origin: {
//     country: 'Dominican Republic',
//   },
// },
// {
//   id: '3b2e8a2a3d',
//   name: 'Kope X Coffee',
//   subtitle: '60% Dark Milk Chocolate & Nibs',
//   slug: 'kope-x-coffee-60-dark-milk-chocolate-and-nibs-manoa-chocolate',
//   maker: 'Manoa Chocolate',
//   productUrl:
//     'https://manoachocolate.com/products/breakfast-chocolate-bar-kona-coffee-cacao-nibs',

//   images: {
//     HERO: {
//       src: '/bars/kope-coffee-60-dark-milk-chocolate-nibs-manoa-chocolate.jpg',
//       alt: 'Kope Coffee 60% Dark Milk Chocolate & Nibs bar from Manoa Chocolate exploded with nibs on a brown background',
//     },
//     BAR_FRONT: {
//       src: '/bars/kope-coffee-60-dark-milk-chocolate-nibs-manoa-chocolate-bar-front.jpg',
//       alt: 'Front of Kope Coffee 60% Dark Milk Chocolate & Nibs bar from Manoa Chocolate with a geometric triangle pattern',
//     },
//     BAR_BACK: {
//       src: '/bars/kope-coffee-60-dark-milk-chocolate-nibs-manoa-chocolate-bar-back.jpg',
//       alt: 'Back of Kope Coffee 60% Dark Milk Chocolate & Nibs bar from Manoa Chocolate',
//     },
//     PACKAGE_FRONT: {
//       src: '/bars/kope-coffee-60-dark-milk-chocolate-nibs-manoa-chocolate-package-front.jpg',
//       alt: 'Front of Kope Coffee 60% Dark Milk Chocolate & Nibs bar from Manoa Chocolate package',
//     },
//     PACKAGE_BACK: {
//       src: '/bars/kope-coffee-60-dark-milk-chocolate-nibs-manoa-chocolate-package-back.jpg',
//       alt: 'Back of Kope Coffee 60% Dark Milk Chocolate & Nibs bar from Manoa Chocolate package',
//     },
//   },

//   barType: 'Dark Milk',
//   percent: 60,
//   barWeight: 60,
//   barDimensions: [141, 73, 7],
//   ingredients: [
//     'Cacao',
//     'Organic Cane Sugar',
//     'Organic Whole Milk Powder',
//     'Cocoa Butter',
//     'Hawaiian Coffee',
//   ],
//   facilityAllergen: ['Dairy', 'Nuts'],

//   packagingType: 'Envelope',
//   packagingDimensions: [158, 90, 9],
//   wrapper: 'Plant-based Cellulose',
//   marketingTerms: [
//     'Bean to Bar',
//     'Pairings',
//     'Artwork by',
//     'Biodegradable',
//     'Recycled',
//   ],
//   insidePrinting: true,
//   productionLocationHighlighted: true,

//   retailer: 'Kilauea Market + Cafe',
//   location: '2555 Ala Namahana Pkwy B1, Kilauea, HI 96754',
//   retailPrice: 10,
//   dateObtained: '2022-12-5',

//   origin: {
//     country: 'unknown',
//   },
// },
