import { customAlphabet } from 'nanoid'
import { generateSlug } from '../helpers'
import { DateString } from '../types'
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
  releaseDate?: DateString
  name: string
  subtitle?: string
  description?: string | Array<string>
  slug: string
  productUrl?: string
  roaster: RoasterNames
  productionCountry: string

  images: {
    HERO: Image
    BEANS_WHOLE: Image
    BEANS_GROUND: Image
    PACKAGE_FRONT: Image
    PACKAGE_BACK: Image
    PACKAGE_SIDE?: Image
  }

  roastLevel: 'Dark' | 'Medium' | 'Light'
  tastingNotes?: Array<string>
  body?: 'Light' | 'Medium' | 'Full'
  process?:
    | 'Wet-hulled'
    | 'Washed'
    | 'Pulped Natural/Honey'
    | 'Natural/Dry'
    | 'Experimental/Other'
  elevation?: number | [number, number] // meters
  beanVariety?: string
  greenDate?: DateString
  chaffIncluded?: boolean
  originCategory?: 'Single Origin' | 'Blended'

  roastDate: DateString
  grindType: 'Whole' | 'Ground'
  packagingType: string
  packagingDimensions: [number, number, number] // as Height, Width, Depth, in mm
  packagingWeight: number | string // in grams
  resealable: boolean
  degassingValve: boolean
  packageLanguages: Array<string>
  certifiedLabels?: Array<
    | 'Certified Organic'
    | 'Fair Trade'
    | 'Kosher'
    | 'Rainforest Alliance'
    | string
  >
  uncertifiedLabels?: Array<'Organic' | string>
  marketingTerms?: Array<string>
  awards?: Array<Award>

  retailer: string
  location: string
  retailPrice: number // USD
  dateObtained: DateString

  reviewerCoffeeFavorite?: boolean
  reviewerCoffeeNotes?: string
  reviewerWouldDrinkAgain: boolean
  reviewerPackagingFavorite?: boolean
  reviewerPackagingNotes?: string

  producer:
    | ProducerNames
    | {
        name?: string
        locality?: string
        region?: string
        country: string
      }
}

const beans: Array<Bean> = [
  {
    id: 'e9978351e8',
    releaseDate: '2022-02-01',
    name: 'Samuel Degelo Ethiopia',
    slug: 'samuel-degelo-ethiopia-madcap-coffee',
    subtitle: 'New Harvest Light Roast',
    roaster: 'Madcap Coffee',
    productionCountry: 'United States',
    productUrl: 'https://www.madcapcoffee.com/samuel-degelo-ethiopian-single-origin',

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
        src: '/beans/samuel-degelo-ethiopia-madcap-coffee-beans-whole.jpg',
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

    roastLevel: 'Light',
    process: 'Washed',
    beanVariety: 'Kurume, Ethiopia Landrace',
    elevation: [1850, 2050],
    body: 'Light',
    roastDate: '2022-12-19',
    tastingNotes: ['Candied Lime', 'Peach', 'Green Apple'],
    originCategory: 'Single Origin',

    packagingType: 'Metallised Plastic',
    grindType: 'Whole',
    packagingWeight: 226,
    packagingDimensions: [0, 0, 0],
    marketingTerms: ['Traceable', 'Direct Relationships'],
    certifiedLabels: ['1% for the Planet'],
    resealable: true,
    packageLanguages: ['English'],
    degassingValve: true,

    retailer: 'The Coffee Movement // West',
    retailPrice: 23,
    location: '1737 Balboa St, San Francisco, CA 94121',
    dateObtained: '2022-12-29',

    reviewerCoffeeFavorite: true,
    reviewerWouldDrinkAgain: true,

    producer: {
      name: 'Samuel Degelo',
      region: 'Odo Shakisso, Guji',
      country: 'Ethiopia',
    },
  },
]

console.log(generateSlug(beans[0]))

export default beans
