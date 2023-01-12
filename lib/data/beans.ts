import { customAlphabet } from 'nanoid'
import { RoasterNames } from './roasters'
import { ProducerNames } from './producers'
import { generateSlug } from '../helpers'

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
// TODO: Differentiate retailer and location purchased??
// TODO: Differentiate guess? end with Question Mark?
// TODO: Location if online? domain?
// TODO: What happens if given bar, still want to list obtained/price right?
// TODO: filter by published: true? last updated date?
// TODO: Packaging print language? Shine/Matte/Linen. Colors: Dual-tone, full-color, monotone.
// TODO: Google Structured Data for Product

export interface Image {
  src: `/${string}`
  alt: string
}

export interface Bean {
  id: string
  name: string
  subtitle?: string
  slug: string
  roaster: RoasterNames
  productUrl?: string

  images: {
    HERO: Image
    BAR_FRONT: Image
    BAR_BACK: Image
    PACKAGE_FRONT: Image
    PACKAGE_BACK: Image
    PACKAGE_INSIDE?: Image
  }

  roastLevel?: 'Dark' | 'Medium' | 'Light'
  tastingNotes?: Array<string>
  body?: 'Light' | 'Medium' | 'Full'
  process?: 'Wet-hulled' | 'Washed' | 'Pulped Natural/Honey' | 'Natural/Dry' | 'Experimental/Other'
  elevation?: number | [number, number] // meters
  beanVariety?: string
  greenDate?: string
  chaffIncluded?: boolean

  roastDate: string
  grindType: 'Whole' | 'Ground'
  packagingType: string
  packagingDimensions: [number, number, number] // as Height, Width, Depth, in mm
  packagingWeight: number | string // in grams
  resealable?: boolean
  packageLanguages?: Array<string>
  

  certifiedLabels?: 'Certified Organic' | 'Fair Trade' | 'Kosher' | 'Rainforest Alliance'
  uncertifiedLabels?: 'Organic'
  marketingTerms?: Array<string>

  retailer: string
  location: string
  retailPrice: number // USD
  dateObtained: string

  producer:
    | ProducerNames
    | {
        name?: string
        region?: string
        country: string
      }
}

const beans: Array<Bean> = [
  {
    id: '1f81c6b0b3',
    name: 'Samuel Degelo Ethiopia',
    slug: 'samuel-degelo-ethiopia-madcap-coffee',
    roaster: 'Madcap Coffee',

    images: {
      HERO: {
        src: '/beans/samuel-degelo-ethiopia-madcap-coffee.jpg',
        alt: 'Samuel Degelo Ethiopian beans from Mapcap Coffee on a green background',
      },
      BAR_FRONT: {
        src: '/beans/dominican-republic-dark-72-schoki-chocolate-bar-front.jpg',
        alt: 'Front of Dominican Republic Dark 72% bar from Schoki Chocolate with a traditional mold pattern',
      },
      BAR_BACK: {
        src: '/beans/dominican-republic-dark-72-schoki-chocolate-bar-back.jpg',
        alt: 'Back of Dominican Republic Dark 72% bar from Schoki Chocolate',
      },
      PACKAGE_FRONT: {
        src: '/beans/dominican-republic-dark-72-schoki-chocolate-package-front.jpg',
        alt: 'Front of Dominican Republic Dark 72% bar from Schoki Chocolate package',
      },
      PACKAGE_BACK: {
        src: '/beans/dominican-republic-dark-72-schoki-chocolate-package-back.jpg',
        alt: 'Back of Dominican Republic Dark 72% bar from Schoki Chocolate package',
      },
    },

    roastLevel: 'Light',
    process: 'Washed',
    beanVariety: 'Kurume, Ethiopia Landrace',
    elevation: [1850, 2050],
    body: 'Light',
    roastDate: '',
    tastingNotes: [
      'Candied Lime',
      'Peach',
      'Green Apple'
    ],
    
    packagingType: 'Bag',
    grindType: 'Whole',
    packagingWeight: 226,
    packagingDimensions: [0,0,0],
    // marketingTerms: ['Bean to Bar', 'Crafted', 'Ethically Sourced'],
    resealable: true,

    retailer: '',
    retailPrice: 0,
    location: '',
    dateObtained: '',

    producer: 'Samuel Degelo',
  },
]

console.log(generateSlug(beans[0]))

export default beans
