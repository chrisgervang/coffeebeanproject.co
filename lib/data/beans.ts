import { customAlphabet } from 'nanoid'
import { generateSlug } from '../helpers'
import { DateString, YYYY } from '../types'
import { ProducerNames } from './producers'
import { RoasterNames } from './roasters'

// Generate Random ID
const nanoid = customAlphabet('1234567890abcdef', 10)
console.log(nanoid())

// Generate URL Safe Slug
// console.log(generateSlug(beans[0]))

// TODO: generate slug and ID when adding
// TODO: Ensure id is unique?
// TODO: Strip location and add copywright to images with URL
// TODO: Workflow for adding images with names to bars.
// TODO: SEO best practices for naming images (bar name + maker?)
// TODO: Track price and currency. Allow for currency selector for different regions.
// TODO: I18N for labels.
// TODO: Differentiate guess? end with Question Mark?
// TODO: What happens if given bar, still want to list obtained/price right?
// TODO: Shine/Matte/Linen. Colors: Dual-tone, full-color, monotone.
// TODO: Google Structured Data for Product
// TODO: Project Notes
// TODO: Roaster's recommended grind setting(s), brew method(s)
// TODO: Roaster's Notes
// TODO: Roaster's imagery.
// TODO: Metadata tooltip

export interface Image {
  src: `/${string}`
  alt: string
}

export interface Award {
  body: string
  level: string
  year: number
}

export interface Reference {
  url: `http${string}`
  label: string
}

export interface Bean {
  id: string
  releaseDate: DateString
  name: string
  roaster: RoasterNames
  slug: string
  subtitle: string | undefined
  description: string | Array<string> | undefined
  productUrl: string | undefined

  images: {
    HERO: Image
    BEANS_WHOLE: Image
    BEANS_GROUND: Image
    PACKAGE_FRONT: Image
    PACKAGE_BACK: Image
    PACKAGE_SIDE?: Image
    PACKAGE_BOTTOM?: Image
    PACKAGE_TOP?: Image
    BREW?: Image
    BREW_METHOD?: Image
  }

  // Coffee Plant, Cultivation, Harvesting
  singleOrigin: boolean | undefined
  tastingNotes: Array<string> | undefined
  elevation: number | [number, number] | undefined // meters
  beanVariety: string | undefined
  harvestDate: DateString | undefined
  harvestMonths: string | [string, string] | undefined
  harvestYear: YYYY | undefined
  harvestMethod:
    | 'Strip Picked'
    | 'Selectively Picked'
    | 'Mechanized Harvest'
    | undefined
  peaberrySort: boolean | undefined
  cherryColor: Array<'Red' | 'Orange' | 'Yellow'> | undefined

  // processing
  processingMethod:
    | 'Wet-hulled'
    | 'Washed/Wet'
    | 'Pulped Natural/Honey'
    | 'Natural/Dry'
    | 'Experimental/Other'
    | undefined
  wetMillName: string | undefined
  wetMillUrl: string | undefined
  wetMillCoordinates: [number, number] | undefined // lng, lat

  // drying
  dryingMethod: string | undefined // raised beds, etc

  // milling
  hullingNotes: string | undefined
  polishingNotes: string | undefined // Is silver skin (aka chaff) removed?
  gradingAndSortingNotes: string | undefined
  dryMillName: string | undefined
  dryMillUrl: string | undefined
  dryMillCoordinates: [number, number] | undefined // lng, lat

  // green
  greenDate: DateString | undefined // Parchment removal date.
  greenDescription: string | Array<string> | undefined
  greenUrl: Reference | string | undefined
  scaaScore: number | undefined

  // producer
  producer: ProducerNames
  producerDescription: string | Array<string> | undefined
  producerUrl: Reference | string | undefined

  // export
  exportWarehouseName: string | undefined
  exportWarehouseUrl: string | undefined
  exportWarehouseCoordinates: [number, number] | undefined // lng, lat

  // importer
  importer: string | undefined

  // roast
  roastLevel: 'Dark' | 'Medium' | 'Light'
  body: 'Light/Soft' | 'Medium' | 'Full' | undefined
  roastDate: DateString | undefined
  chaffPrevalent: boolean | undefined
  grindShown: string | undefined

  // package
  packagedGrindType: 'Whole Beans' | 'Ground'
  packagingType: string
  packagingFeatures: Array<string> | undefined
  /**
   * Length, Width, Depth, in mm.
   * The length from side to side.
   * The width from front to back.
   * The depth from top to bottom.
   */
  packagingDimensions: [number, number, number]
  packagingWeight: number | string // in grams
  packageBrewNotes: string | undefined

  certifiedLabels:
    | Array<
        | 'Certified Organic'
        | 'Fair Trade'
        | 'Kosher'
        | 'Rainforest Alliance'
        | string
      >
    | undefined
  uncertifiedLabels: Array<'Organic' | string> | undefined
  marketingTerms: Array<string> | undefined
  awards: Array<Award> | undefined
  packageLanguages: Array<string>

  // retail
  retailer: string
  retailLocation: string
  retailPrice: number // USD
  retailPricePerGram: string // USD. String to preserve decimal.
  dateObtained: DateString
  retailBrewingNotes: string | undefined

  // review
  reviewerCoffeeFavorite: boolean
  reviewerWouldDrinkAgain: boolean
  reviewerCoffeeNotes: string | undefined
  reviewerBrewType: string
  reviewerBrewDose: number // grams
  reviewerBrewGrind: string
  reviewerBrewWaterTemp: number // fahrenheit
  reviewerBrewWaterWeight: number // grams

  reviewerPackagingFavorite: boolean
  reviewerPackagingNotes: string | undefined

  references: Reference | Array<Reference> | undefined
}

// id: ,
// releaseDate: ,
// name: ,
// roaster: ,
// slug: ,
// subtitle: ,
// description: [

// ],
// productUrl:
//   ,

// images: {
//   HERO: {
//     src: '/beans/',
//     alt: 'Samuel Degelo Ethiopian beans from Mapcap Coffee on a fruity green background',
//   },
//   BEANS_WHOLE: {
//     src: '/beans/-whole-beans.jpg',
//     alt: 'Whole beans of Samuel Degelo Ethiopian from Mapcap Coffee',
//   },
//   BEANS_GROUND: {
//     src: '/beans/-ground-beans.jpg',
//     alt: 'Ground beans of Samuel Degelo Ethiopian from Mapcap Coffee',
//   },
//   PACKAGE_FRONT: {
//     src: '/beans/-package-front.jpg',
//     alt: 'Front of Samuel Degelo Ethiopian beans from Mapcap Coffee package',
//   },
//   PACKAGE_BACK: {
//     src: '/beans/-package-back.jpg',
//     alt: 'Back of Samuel Degelo Ethiopian beans from Mapcap Coffee package',
//   },
//   PACKAGE_SIDE: {
//     src: '/beans/-package-side.jpg',
//     alt: 'Side of Samuel Degelo Ethiopian beans from Mapcap Coffee package',
//   },
// },

// // plant
// singleOrigin: true,
// tastingNotes: [],
// elevation: [],
// beanVariety: ,
// harvestDate: ,
// harvestMonths: ,
// harvestYear: ,
// harvestMethod: ,
// peaberrySort: ,
// cherryColor: ,

// // processing
// processingMethod: ,
// wetMillName: ,
// wetMillUrl: ,
// wetMillCoordinates: ,

// // drying
// dryingMethod: ,

// // milling
// hullingNotes: ,
// polishingNotes: , // Is silver skin (aka chaff) removed?
// gradingAndSortingNotes: ,
// dryMillName: ,
// dryMillUrl: ,
// dryMillCoordinates: ,

// // green
// greenDescription: ,
// greenUrl: ,
// greenDate: ,
// scaaScore: ,

// // producer
// producer: ,
// producerDescription: ,
// producerUrl: ,

// // export
// exportWarehouseName: ,
// exportWarehouseUrl: ,
// exportWarehouseCoordinates: ,

// // importer
// importer: ,

// // roast
// roastLevel: ,
// body: ,
// roastDate: ,
// chaffPrevalent: ,
// grindShown: ,

// // physical package
// packagedGrindType: ,
// packagingType: ,
// packagingFeatures: ['Resealable', 'Degassing Valve'],
// packagingDimensions: [],
// packagingWeight: ,

// // package labels
// packageBrewNotes: ,
// certifiedLabels: [],
// uncertifiedLabels: ,
// marketingTerms: [],
// awards: ,
// packageLanguages: [],

// // retail
// retailer: ,
// retailPrice: ,
// retailPricePerGram: ,
// retailLocation: ,
// dateObtained: ,
// retailBrewingNotes: ,

// // review
// reviewerCoffeeFavorite: false,
// reviewerWouldDrinkAgain: true,
// reviewerCoffeeNotes: ,
// reviewerBrewType: 'Kalita HA 185 + Paper Filter',
// reviewerBrewDose: 25, // grams
// reviewerBrewGrind: 'Baratza Encore, M3 Cone Burr, 14',
// reviewerBrewWaterTemp: 204, // fahrenheit
// reviewerBrewWaterWeight: 330, // grams

// reviewerPackagingFavorite: false,
// reviewerPackagingNotes: ,

// references:

const beans: Array<Bean> = [
  {
    id: 'e9978351e8',
    releaseDate: '2022-02-01',
    name: 'Samuel Degelo Ethiopia',
    roaster: 'Madcap Coffee',
    slug: 'samuel-degelo-ethiopia-madcap-coffee',
    subtitle: 'Lime Squeeze',
    description: [
      '"Samuel Degelo’s coffee is a rare taste of an individual producer’s work from a small plot of land in Odo Shakisso, Guji in Ethiopia. A brilliant expression of what’s to love about traditional washed Ethiopian coffee, this euphoric drink tastes like candied ginger with tropical complexity and exquisite nuance.',
      'We first met Samuel in 2019 when his coffee was submitted to the Ethiopian Cup of Excellence, winning 2nd place and achieved the highest scoring washed coffee in the competition. We were in the jury and fell in love with the coffee, knowing immediately that we had to partner with Samuel and bring his coffee to our single origin series."',
    ],
    productUrl:
      'https://web.archive.org/web/20220930025022/https://www.madcapcoffee.com/samuel-degelo-ethiopian-single-origin',

    images: {
      HERO: {
        src: '/beans/samuel-degelo-ethiopia-madcap-coffee.jpg',
        alt: 'Samuel Degelo Ethiopian beans from Mapcap Coffee on a fruity green background',
      },
      BEANS_WHOLE: {
        src: '/beans/samuel-degelo-ethiopia-madcap-coffee-beans-whole.jpg',
        alt: 'Whole beans of Samuel Degelo Ethiopian from Mapcap Coffee',
      },
      BEANS_GROUND: {
        src: '/beans/samuel-degelo-ethiopia-madcap-coffee-beans-ground.jpg',
        alt: 'Ground beans of Samuel Degelo Ethiopian from Mapcap Coffee',
      },
      PACKAGE_FRONT: {
        src: '/beans/samuel-degelo-ethiopia-madcap-coffee-package-front.jpg',
        alt: 'Front of Samuel Degelo Ethiopian beans from Mapcap Coffee package',
      },
      PACKAGE_BACK: {
        src: '/beans/samuel-degelo-ethiopia-madcap-coffee-package-back.jpg',
        alt: 'Back of Samuel Degelo Ethiopian beans from Mapcap Coffee package',
      },
      PACKAGE_SIDE: {
        src: '/beans/samuel-degelo-ethiopia-madcap-coffee-package-side.jpg',
        alt: 'Side of Samuel Degelo Ethiopian beans from Mapcap Coffee package',
      },
      BREW: {
        src: '/beans/samuel-degelo-ethiopia-madcap-coffee-brew.jpg',
        alt: 'Brewed coffee of Samuel Degelo Ethiopian from Mapcap Coffee',
      },
      BREW_METHOD: {
        src: '/beans/samuel-degelo-ethiopia-madcap-coffee-brew-method.jpg',
        alt: 'Brewing Samuel Degelo Ethiopian from Mapcap Coffee with a Kalita Wave',
      },
    },

    // plant
    singleOrigin: true,
    tastingNotes: ['Candied Lime', 'Peach', 'Green Apple'],
    elevation: [1850, 2050],
    beanVariety: 'Kurume + Ethiopia Landrace',
    harvestDate: undefined,
    harvestMonths: undefined,
    harvestYear: undefined,
    harvestMethod: undefined,
    peaberrySort: false,
    cherryColor: undefined,

    // processing
    processingMethod: 'Washed/Wet',
    wetMillName: 'Bishan Dimo Washing Station',
    wetMillUrl: undefined,
    wetMillCoordinates: undefined,

    // drying
    dryingMethod: undefined,

    // milling
    hullingNotes: undefined,
    polishingNotes: undefined, // Is silver skin (aka chaff) removed?
    gradingAndSortingNotes: undefined,
    dryMillName: undefined,
    dryMillUrl: undefined,
    dryMillCoordinates: undefined,

    // green
    greenDescription: undefined,
    greenUrl: undefined,
    greenDate: undefined,
    scaaScore: undefined,

    // producer
    producer: 'Samuel Degelo',
    producerDescription: undefined,
    producerUrl: undefined,

    // export
    exportWarehouseName: undefined,
    exportWarehouseUrl: undefined,
    exportWarehouseCoordinates: undefined,

    // importer
    importer: undefined,

    // roast
    roastLevel: 'Light',
    body: 'Light/Soft',
    roastDate: '2022-12-19',
    chaffPrevalent: true,
    grindShown: 'Baratza Encore, M3 Cone Burr, 14',

    // package
    packagedGrindType: 'Whole Beans',
    packagingType: 'Metallised Plastic Bag',
    packagingFeatures: ['Resealable', 'Degassing Valve'],
    packagingDimensions: [133, 60, 170],
    packagingWeight: 226,

    packageBrewNotes: undefined,
    certifiedLabels: ['1% for the Planet'],
    uncertifiedLabels: undefined,
    marketingTerms: ['Traceable', 'Direct Relationships'],
    awards: undefined,
    packageLanguages: ['English'],

    // retail
    retailer: 'The Coffee Movement // West',
    retailPrice: 23,
    retailPricePerGram: '0.10',
    retailLocation: '1737 Balboa St, San Francisco, CA 94121',
    dateObtained: '2022-12-29',
    retailBrewingNotes:
      "For pour over coffee, grind the beans coarsely and use water that's just below boiling.",

    // review
    reviewerCoffeeFavorite: true,
    reviewerWouldDrinkAgain: true,
    reviewerCoffeeNotes:
      'Tastes like a squeeze of fresh lime, a nice first sip.',
    reviewerBrewType: 'Kalita HA 185 + Paper Filter',
    reviewerBrewDose: 25, // grams
    reviewerBrewGrind: 'Baratza Encore, M3 Cone Burr, 16',
    reviewerBrewWaterTemp: 204, // fahrenheit
    reviewerBrewWaterWeight: 330, // grams

    reviewerPackagingFavorite: false,
    reviewerPackagingNotes: undefined,

    references: undefined,
  },
  {
    id: '69d85707fe',
    releaseDate: '2022-02-11',
    name: 'Daterra Sundrop',
    roaster: 'George Howell Coffee',
    slug: 'daterra-sundrop-george-howell-coffee',
    subtitle: 'Dried-On-Tree Cherries',
    description: [
      '"Sundrop is a fully natural coffee worthy of its name; it is exceptionally smooth and sweet with butterscotch, blueberry, clove, and a touch of guava.',
      'Daterra allowed the cherries to go one step past full maturation while staying on the trees. The coffee is then dried the rest of the way on raised beds until stabilized and ready for hulling."',
    ],
    productUrl:
      'https://web.archive.org/web/20230206041319/https://georgehowellcoffee.com/products/daterra-sundrop-bra-005',

    images: {
      HERO: {
        src: '/beans/daterra-sundrop-george-howell-coffee.jpg',
        alt: 'Daterra Sundrop Brazilian beans from George Howell Coffee on a home brewing background',
      },
      BEANS_WHOLE: {
        src: '/beans/daterra-sundrop-george-howell-coffee-beans-whole.jpg',
        alt: 'Whole beans of Daterra Sundrop Brazilian from George Howell Coffee',
      },
      BEANS_GROUND: {
        src: '/beans/daterra-sundrop-george-howell-coffee-beans-ground.jpg',
        alt: 'Ground beans of Daterra Sundrop Brazilian from George Howell Coffee',
      },
      PACKAGE_FRONT: {
        src: '/beans/daterra-sundrop-george-howell-coffee-package-front.jpg',
        alt: 'Front package of Daterra Sundrop Brazilian beans from George Howell Coffee',
      },
      PACKAGE_BACK: {
        src: '/beans/daterra-sundrop-george-howell-coffee-package-back.jpg',
        alt: 'Back package of Daterra Sundrop Brazilian beans from George Howell Coffee',
      },
      PACKAGE_SIDE: {
        src: '/beans/daterra-sundrop-george-howell-coffee-package-side.jpg',
        alt: 'Side package of Daterra Sundrop Brazilian beans from George Howell Coffee',
      },
    },

    // plant
    singleOrigin: true,
    tastingNotes: ['Blueberry', 'Butterscotch', 'Clove'],
    elevation: [1097, 1189],
    beanVariety: 'Bourbon',
    harvestDate: undefined,
    harvestMonths: ['July', 'August'],
    harvestYear: '2021',
    harvestMethod: 'Mechanized Harvest',
    peaberrySort: false,
    cherryColor: ['Yellow', 'Red'],

    // processing
    processingMethod: 'Natural/Dry',
    wetMillName: "Daterra's Wet Mill",
    wetMillUrl: undefined,
    wetMillCoordinates: undefined,

    // drying
    dryingMethod: 'Dried on Tree, Raised Beds, Patio + Drum Drier',

    // milling (dry mill)
    hullingNotes: undefined,
    polishingNotes: undefined, // Is silver skin removed?
    gradingAndSortingNotes: 'Screen 16 + 18',
    dryMillName: "Daterra's Dry Mill",
    dryMillUrl: undefined,
    dryMillCoordinates: undefined,

    // green
    greenDescription:
      '"Not only ripe cherries make fun and bright coffees: Sundrop is made only from dried-on-tree cherries. Thanks to our exclusive technology we’re able to sort out the fruitiest beans that make this cup so awesome. Expect a round and structured body and intense notes of tropical and citric fruits, honey-like sweetness and malic acidity."',
    greenUrl:
      'https://web.archive.org/web/20230206015430/http://www.daterracoffee.com.br/collection-daterra/',
    greenDate: undefined,
    scaaScore: 88,

    // producer
    producer: 'Luis Norberto Pascoal',
    producerDescription: [
      '"The owner of Daterra, Luis Pascoal, is a key coffee visionary in the quality movement who never tires of tweaking everything he does to improve his coffees and social/environmental policies. Daterra was the first farm in the world to package its raw coffees in sealed packages, preserving its coffee’s subtle nuances over the long oceanic journey to our shores.',
      'Daterra is always innovating and keeping growing concerns, such as climate change, in mind. From planting 150,000 native trees throughout the farm, to composting 14,000 tons of organic matter, to working on establishing corridors to allow the natural passage of wildlife easily throughout the vast farmland, their attention is fixed on sustainability in the face of climate change. Daterra was the first coffee farm in the world to receive The Rainforest Alliance Certification Level A, their highest designation, in 2018. The farm goes above and beyond every year to achieve sustainability through its practices. Technology and consistent innovations help contribute to its ecosystem, protecting the Cerrado Bioma of Brazil, the second most important hot spot in the world.',
      'Our “Sundrop” offering from Daterra is another example of a true naturally-processed Brazilian coffee that exemplifies what sweet notes a natural coffee can produce. Also referred to as a “Cerrado natural,” these cherries are allowed to grow, mature, and dry on the very same branches for the full time it takes until they are ready to be harvested. Unlike the “Full Bloom” profile, “Sundrop” coffee cherries aren’t allowed to soak in water and then have husks removed, and that results in a coffee with bright acidity and a noticeably sweet, fermented cherry note. It can only be achieved through careful monitoring, ensuring a stable, dry climate throughout the entire process where moisture isn’t allowed to interfere and deter quality. The end result is a full-bodied, rich coffee with exceptional honey-like sweetness and malic acidity."',
    ],
    producerUrl: {
      label: 'George Howell - Daterra Farm Visit - Brazil 2010',
      url: 'https://web.archive.org/web/20230206034033/https://georgehowellcoffee.com/blogs/farms-and-tours/daterra-farm-visit-brazil-2010',
    },

    // export
    exportWarehouseName: undefined,
    exportWarehouseUrl: undefined,
    exportWarehouseCoordinates: undefined,

    // importer
    importer: undefined,

    // roast
    roastLevel: 'Light',
    body: undefined,
    roastDate: '2022-12-13',
    chaffPrevalent: false,
    grindShown: 'Baratza Encore, M3 Cone Burr, 14',

    // package
    packagedGrindType: 'Whole Beans',
    packagingType: 'Plastic-lined Paper',
    packagingFeatures: ['Resealable', 'Degassing Valve'],
    packagingDimensions: [140, 78, 216],
    packagingWeight: 341,

    packageBrewNotes: 'Drip, Pour Over Method',
    certifiedLabels: ['Rainforest Alliance Cert. Level A', 'Biotre 1.0'],
    // https://web.archive.org/web/20230206170416/https://www.tricorbraunflex.com/biotre-and-sustainability/biotre-and-sustainability.html
    // Similar to https://web.archive.org/web/20230206223837/https://www.tricorbraunflex.com/12oz-black-biotre-block-bottom-bag-w-valve.html
    uncertifiedLabels: ['Compostable Bag'],
    marketingTerms: undefined,
    awards: undefined,
    packageLanguages: ['English'],

    // retail
    retailer: 'Seattle Coffee Gear',
    retailPrice: 19,
    retailPricePerGram: '0.06',
    retailLocation: '87 Stanford Shopping Center, Palo Alto, CA 94304',
    dateObtained: '2022-12-28',
    retailBrewingNotes: undefined,

    // review
    reviewerCoffeeFavorite: false,
    reviewerWouldDrinkAgain: true,
    reviewerCoffeeNotes: undefined,
    reviewerBrewType: 'Kalita HA 185 + Paper Filter',
    reviewerBrewDose: 25, // grams
    reviewerBrewGrind: 'Baratza Encore, M3 Cone Burr, 14',
    reviewerBrewWaterTemp: 204, // fahrenheit
    reviewerBrewWaterWeight: 330, // grams

    reviewerPackagingFavorite: false,
    reviewerPackagingNotes: 'Numbered "one" on packaging with an ink stamp.',

    references: [
      {
        label: 'The Coffee Collective - Daterra 2010 Visit Part 1',
        url: 'https://web.archive.org/web/20230206035036/http://coffeecollective.blogspot.com/2010/08/daterra-2010-visit-part-1.html',
      },
      {
        label: 'The Coffee Collective - Daterra 2010 Visit Part 2',
        url: 'https://web.archive.org/web/20230206042212/https://coffeecollective.blogspot.com/2010/08/daterra-2010-visit-part-2.html',
      },
      {
        label: 'The Coffee Collective - Daterra 2010 Visit Part 3',
        url: 'https://web.archive.org/web/20230207004328/https://coffeecollective.blogspot.com/2010/08/daterra-2010-visit-part-3.html',
      },
      {
        label: '[2004] Daterra: Not Just Another Coffee Farm',
        url: 'https://web.archive.org/web/20220930183238/https://library.sweetmarias.com/daterra-not-just-another-coffee-farm/',
      },
      {
        label: '[2002] “Cup of Excellence” Auction - Fazenda Boa Vista',
        url: 'https://web.archive.org/web/20150108152129/http://www.sweetmarias.com/boavista2.html',
      },
      {
        label: 'Similar Biotre Packaging',
        url: 'https://web.archive.org/web/20230206223837/https://www.tricorbraunflex.com/12oz-black-biotre-block-bottom-bag-w-valve.html',
      },
    ],
  },
  {
    id: '565a82a8c2',
    releaseDate: '2023-02-26',
    name: 'Peru Valle Inca',
    roaster: 'Artís Coffee',
    slug: 'peru-valle-inca-artis-coffee',
    subtitle: 'From Prudencio Vargas Saenz',
    description: [
      '"Nestled in the Yanatile Valley in the Department of Cusco in the south of Peru, Valle Inca functions as a producer group, where Prudencio Vargas Saenz, who created and runs the group, buys parchment from farmers, reinvesting premiums in the community’s infrastructure to help them continue to improve quality.',
      'At their best, coffees from Valle Inca display elegant honeyed florals, crisp red apple, and a pleasant tannic quality like oolong tea."',
    ],
    productUrl:
      'https://web.archive.org/web/20230203212601/https://shop.artiscoffee.com/products/peru-carlos-alfredo',

    images: {
      HERO: {
        src: '/beans/peru-valle-inca-artis-coffee.jpg',
        alt: 'Peru Valle Inca beans from Artís Coffee on a fruity green background',
      },
      BEANS_WHOLE: {
        src: '/beans/peru-valle-inca-artis-coffee-whole-beans.jpg',
        alt: 'Whole beans of Peru Valle Inca from Artís Coffee',
      },
      BEANS_GROUND: {
        src: '/beans/peru-valle-inca-artis-coffee-ground-beans.jpg',
        alt: 'Ground beans of Peru Valle Inca from Artís Coffee',
      },
      PACKAGE_FRONT: {
        src: '/beans/peru-valle-inca-artis-coffee-package-front.jpg',
        alt: 'Front of Peru Valle Inca beans from Artís Coffee package',
      },
      PACKAGE_BACK: {
        src: '/beans/peru-valle-inca-artis-coffee-package-back.jpg',
        alt: 'Back of Peru Valle Inca beans from Artís Coffee package',
      },
      PACKAGE_SIDE: undefined,
      BREW: {
        src: '/beans/peru-valle-inca-artis-coffee-brew.jpg',
        alt: 'Brewed coffee of Peru Valle Inca from Artís Coffee',
      },
      BREW_METHOD: {
        src: '/beans/peru-valle-inca-artis-coffee-brew-method.jpg',
        alt: 'Brewing Peru Valle Inca coffee from Artís Coffee with a Kalita Wave',
      },
    },

    // plant
    singleOrigin: true,
    tastingNotes: ['Bing cherry', 'Golden raisin', 'Almond pastry'],
    elevation: [1600, 2000],
    beanVariety: 'Caturra + Bourbon + Typica',
    harvestDate: undefined,
    harvestMonths: ['June', 'September'],
    harvestYear: undefined, // 2022?
    harvestMethod: undefined,
    peaberrySort: false,
    cherryColor: undefined,

    // processing
    processingMethod: 'Washed/Wet',
    wetMillName: undefined,
    wetMillUrl: undefined,
    wetMillCoordinates: undefined,

    // drying
    dryingMethod: 'Covered Raised Beds',

    // milling
    hullingNotes: undefined,
    polishingNotes: undefined, // Is silver skin (aka chaff) removed?
    gradingAndSortingNotes: undefined,
    dryMillName: undefined,
    dryMillUrl: undefined,
    dryMillCoordinates: undefined,

    // green
    greenDescription: undefined,
    greenUrl: undefined,
    greenDate: undefined,
    scaaScore: undefined,

    // producer
    producer: 'Prudencio Vargas Saenz',
    producerDescription: [
      '"Prudencio, who lives in nearby Calca and brings the benefits of his former experience as an agricultural loan officer, used to operate outside the aegis of a collective, but after years of running Valle Inca informally, he formalized the organization in 2020 to gain organic certification, Fair Trade certification, and the ability to export on his own.',
      'Member-wise, Valle Inca is growing fast, with 101 plus farmers currently in the fold. It’s no surprise that more and more farmers want to work with Valle Inca; in the community, Prudencio is known for his honesty, trustworthiness, dedication, and drive to invest and reinvest in his community, genuinely engaging their goals and concerns. He also pays higher prices than farmers had access to prior to the founding of Valle Inca, which has helped to improve quality as well as overall community health over time."',
    ],
    producerUrl: {
      label: 'Prudencio of Valle Inca',
      url: 'https://web.archive.org/web/20230223205844/https://redfoxcoffeemerchants.com/prudencio-of-valle-inca-peru/',
    },

    // export
    exportWarehouseName: undefined,
    exportWarehouseUrl: undefined,
    exportWarehouseCoordinates: undefined,

    // importer
    importer: 'Red Fox Coffee Merchants',

    // roast
    roastLevel: 'Medium',
    body: undefined,
    roastDate: '2023-01-05',
    chaffPrevalent: true,
    grindShown: 'Baratza Encore, M3 Cone Burr, 14',

    // physical package
    packagedGrindType: 'Whole Beans',
    packagingType: 'Metallised Plastic Bag',
    packagingFeatures: ['Resealable', 'Degassing Valve'],
    packagingDimensions: [125, 85, 125],
    packagingWeight: 340,

    // package labels
    packageBrewNotes: undefined,
    certifiedLabels: ['Organic', 'Fair Trade'],
    uncertifiedLabels: undefined,
    marketingTerms: undefined,
    awards: undefined,
    packageLanguages: ['English'],

    // retail
    retailer: 'Artís Coffee',
    retailPrice: 22,
    retailPricePerGram: '0.06',
    retailLocation: '1717 Fourth St B, Berkeley, CA 94710',
    dateObtained: '2023-01-08',
    retailBrewingNotes: undefined,

    // review
    reviewerCoffeeFavorite: false,
    reviewerWouldDrinkAgain: true,
    reviewerCoffeeNotes: undefined,
    reviewerBrewType: 'Kalita HA 185 + Paper Filter',
    reviewerBrewDose: 25, // grams
    reviewerBrewGrind: 'Baratza Encore, M3 Cone Burr, 14',
    reviewerBrewWaterTemp: 204, // fahrenheit
    reviewerBrewWaterWeight: 330, // grams

    reviewerPackagingFavorite: false,
    reviewerPackagingNotes: undefined,

    references: [
      {
        label: 'Paying for Coffee: Valle Inca',
        url: 'https://web.archive.org/web/20230223205930/https://redfoxcoffeemerchants.com/paying-for-coffee-valle-inca/',
      },
    ],
  },
]

console.log(generateSlug(beans[0]))

export default beans
