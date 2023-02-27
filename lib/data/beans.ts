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
  processingLocation: string | undefined

  // drying
  dryingMethod: string | undefined // raised beds, etc
  dryingLocation: string | undefined

  // milling
  hullingNotes: string | undefined
  polishingNotes: string | undefined // Is silver skin (aka chaff) removed?
  gradingAndSortingNotes: string | undefined
  millLocation: string | undefined

  // producer
  producer:
    | ProducerNames
    | {
        name: string
        locality: string | undefined
        region: string | undefined
        country: string
      }
  greenDate: DateString | undefined // Parchment removal date.
  producerDescription: string | Array<string> | undefined
  scaaScore: number | undefined

  // roast
  roastLevel: 'Dark' | 'Medium' | 'Light'
  body: 'Light' | 'Medium' | 'Full' | undefined
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
//     src: '/beans/-beans-whole.jpg',
//     alt: 'Whole beans of Samuel Degelo Ethiopian from Mapcap Coffee',
//   },
//   BEANS_GROUND: {
//     src: '/beans/-beans-ground.jpg',
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
// processingLocation: ,

// // drying
// dryingMethod: ,
// dryingLocation: ,

// // milling
// hullingNotes: ,
// polishingNotes: , // Is silver skin (aka chaff) removed?
// gradingAndSortingNotes: ,
// millLocation: ,

// // producer
// producer: ,
// greenDate: ,
// scaaScore: ,

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
    processingLocation: 'Bishan Dimo Washing Station',

    // drying
    dryingMethod: undefined,
    dryingLocation: undefined,

    // milling
    hullingNotes: undefined,
    polishingNotes: undefined, // Is silver skin (aka chaff) removed?
    gradingAndSortingNotes: undefined,
    millLocation: undefined,
    greenDate: undefined,

    // producer
    producer: 'Samuel Degelo',
    producerDescription: undefined,
    scaaScore: undefined,

    // roast
    roastLevel: 'Light',
    body: 'Light',
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
    processingLocation: "Daterra's Wet Mill",

    // drying
    dryingMethod: 'Tree Branch, Raised Beds, Patio + Drum Drier',
    dryingLocation: "Dried on Tree. Stabilized at Daterra's Wet Mill.",

    // milling (dry mill)
    hullingNotes: undefined,
    polishingNotes: undefined, // Is silver skin removed?
    gradingAndSortingNotes: 'Screen 16 + 18',
    millLocation: "Daterra's Dry Mill",

    // producer
    producer: 'Luis Norberto Pascoal',
    greenDate: undefined,
    // https://web.archive.org/web/20230206015430/http://www.daterracoffee.com.br/collection-daterra/
    producerDescription:
      'Not only ripe cherries make fun and bright coffees: Sundrop is made only from dried-on-tree cherries. Thanks to our exclusive technology we’re able to sort out the fruitiest beans that make this cup so awesome. Expect a round and structured body and intense notes of tropical and citric fruits, honey-like sweetness and malic acidity.',
    scaaScore: 88,

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
        label: 'George Howell - Daterra Farm Visit - Brazil 2010',
        url: 'https://web.archive.org/web/20230206034033/https://georgehowellcoffee.com/blogs/farms-and-tours/daterra-farm-visit-brazil-2010',
      },
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
]

console.log(generateSlug(beans[0]))

export default beans
