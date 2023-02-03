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
  }

  // plant
  singleOrigin: boolean | undefined
  tastingNotes: Array<string> | undefined
  elevation: number | [number, number] | undefined // meters
  beanVariety: string | undefined
  harvestDate: DateString | undefined
  harvestMonth: string | undefined
  harvestYear: YYYY | undefined
  harvestMethod: 'Strip Picked' | 'Selectively Picked' | undefined

  // processing
  processingMethod:
    | 'Wet-hulled'
    | 'Washed'
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
  greenDate: DateString | undefined // Parchment removal date.

  // producer
  producer:
    | ProducerNames
    | {
        name: string
        locality: string | undefined
        region: string | undefined
        country: string
      }

  // roast
  roastLevel: 'Dark' | 'Medium' | 'Light'
  body: 'Light' | 'Medium' | 'Full' | undefined
  roastDate: DateString | undefined
  chaffPrevalent: boolean | undefined
  grindShown: string | undefined

  // package
  packagedGrindType: 'Whole' | 'Ground' | string
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

  certifiedLabels: Array<
    | 'Certified Organic'
    | 'Fair Trade'
    | 'Kosher'
    | 'Rainforest Alliance'
    | string
  > | undefined
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
  reatilBrewingNotes: string | undefined

  // review
  reviewerCoffeeFavorite: boolean
  reviewerWouldDrinkAgain: boolean
  reviewerCoffeeNotes: string | undefined
  reviewerBrewType: string,
  reviewerBrewDose: number, // grams
  reviewerBrewGrind: string,
  reviewerBrewWaterTemp: number, // fahrenheit
  reviewerBrewWaterWeight: number, // grams

  reviewerPackagingFavorite: boolean
  reviewerPackagingNotes: string | undefined
}

const beans: Array<Bean> = [
  {
    id: 'e9978351e8',
    releaseDate: '2022-02-01',
    name: 'Samuel Degelo Ethiopia',
    roaster: 'Madcap Coffee',
    slug: 'samuel-degelo-ethiopia-madcap-coffee',
    subtitle: 'New Harvest Light Roast',
    description: [
      '"Samuel Degelo’s coffee is a rare taste of an individual producer’s work from a small plot of land in Odo Shakisso, Guji in Ethiopia. A brilliant expression of what’s to love about traditional washed Ethiopian coffee, this euphoric drink tastes like candied ginger with tropical complexity and exquisite nuance.',
      'We first met Samuel in 2019 when his coffee was submitted to the Ethiopian Cup of Excellence, winning 2nd place and achieved the highest scoring washed coffee in the competition. We were in the jury and fell in love with the coffee, knowing immediately that we had to partner with Samuel and bring his coffee to our single origin series."'
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
    },

    // plant
    singleOrigin: true,
    tastingNotes: ['Candied Lime', 'Peach', 'Green Apple'],
    elevation: [1850, 2050],
    beanVariety: 'Kurume, Ethiopia Landrace',
    harvestDate: undefined,
    harvestMonth: undefined,
    harvestYear: undefined,
    harvestMethod: undefined,

    // processing
    processingMethod: 'Washed',
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
    reatilBrewingNotes: 'For pour over, grind coarse and use water temp just below boil.',

    // review
    reviewerCoffeeFavorite: true,
    reviewerWouldDrinkAgain: true,
    reviewerCoffeeNotes: 'Tastes as if fresh lime was squeezed into the cup. Excellent first impression.',
    reviewerBrewType: 'Kalita HA 185 + Paper Filter',
    reviewerBrewDose: 25, // grams
    reviewerBrewGrind: 'Baratza Encore, M3 Cone Burr, 16',
    reviewerBrewWaterTemp: 204, // fahrenheit
    reviewerBrewWaterWeight: 330, // grams
    
    reviewerPackagingFavorite: false,
    reviewerPackagingNotes: undefined,
  },
]

console.log(generateSlug(beans[0]))

export default beans
