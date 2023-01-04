import { MakerNames } from './makers'
import { OriginNames } from './origins'

// Generate Random ID
// const nanoid = customAlphabet('1234567890abcdef', 10)
// console.log(nanoid())

// Generate URL Safe Slug
// console.log(urlSlug('Dominican Republic Dark 72% Schoki Chocolate'))

// TODO: Generic ingridients: Cocoa Mass, Sugar, Cocoa Nibs, Strawberries, etc...
// TODO: generate slug and ID when adding
// TODO: Ensure id is unique?
// TODO: Strip location and add copywright to images with URL
// TODO: Workflow for adding images with names to bars.
// TODO: Where does roast-type go?
// TODO: SEO best practices for naming images (bar name + maker?)
// TODO: Track price and currency. Allow for currency selector for different regions.
// TODO: I18N for labels.
// TODO: Differentiate retailer and location purchased??
// TODO: Differentiate guess? end with Question Mark?
// TODO: Location if online? domain?
// TODO: What happens if given bar, still want to list obtained/price right?
// TODO: filter by published: true? last updated date?
// TODO: Packaging print language? Shine/Matte/Linen. Colors: Dual-tone, full-color, monotone.

export interface Image {
  src: `/${string}`
  alt: string
}

export interface Bar {
  id: string
  name: string
  slug: string
  maker: MakerNames

  images: {
    HERO: Image
    BAR_FRONT: Image
    BAR_BACK: Image
    PACKAGE_FRONT: Image
    PACKAGE_BACK: Image
    PACKAGE_INSIDE?: Image
  }

  barType: 'Dark' | 'Dark Milk' | 'Milk' | 'White'
  percent: number
  barWeight: number // in grams
  barDimensions: [number, number, number] // as Height, Width, Depth, in mm
  ingredients: Array<string>
  foodAllergen?: Array<string>
  facilityAllergen?: Array<string>

  packagingType: string
  packagingDimensions: [number, number, number] // as Height, Width, Depth, in mm
  wrapper?: string
  certifiedLabels?: Array<string>
  uncertifiedLabels?: Array<string>
  marketingTerms?: Array<string>
  tastingNotes?: Array<string>
  insidePrinting?: boolean

  origin:
    | OriginNames
    | {
        producer?: string
        region?: string
        country: string
      }
}

const bars: Array<Bar> = [
  {
    id: 'd8e2e9afee',
    name: 'Coffee Crunch',
    slug: 'coffee-crunch-olive-and-sinclair-chocolate-co',
    maker: 'Olive & Sinclair Chocolate Co',

    images: {
      HERO: {
        src: '/bars/coffee-crunch-olive-and-sinclair-chocolate-co.jpg',
        alt: 'Coffee Crunch bar from Olive & Sinclair Chocolate Co on a marble table with a laptop and coffee cup',
      },
      BAR_FRONT: {
        src: '/bars/coffee-crunch-olive-and-sinclair-chocolate-co-bar-front.jpg',
        alt: 'Front of Coffee Crunch bar from Olive & Sinclair Chocolate Co with a custom branded bar',
      },
      BAR_BACK: {
        src: '/bars/coffee-crunch-olive-and-sinclair-chocolate-co-bar-back.jpg',
        alt: 'Back of Coffee Crunch bar from Olive & Sinclair Chocolate Co',
      },
      PACKAGE_FRONT: {
        src: '/bars/coffee-crunch-olive-and-sinclair-chocolate-co-package-front.jpg',
        alt: 'Front of Coffee Crunch bar from Olive & Sinclair Chocolate Co package',
      },
      PACKAGE_BACK: {
        src: '/bars/coffee-crunch-olive-and-sinclair-chocolate-co-package-back.jpg',
        alt: 'Back of Coffee Crunch bar from Olive & Sinclair Chocolate Co package',
      },
    },

    barType: 'Dark',
    percent: 67,
    barWeight: 71,
    barDimensions: [0, 0, 0],
    ingredients: ['Cacao Beans', 'Brown Sugar', 'Coffee Beans'],
    foodAllergen: ['Nuts'],

    packagingType: 'Box',
    packagingDimensions: [98, 135, 10],
    wrapper: 'Metallised plastic',
    marketingTerms: [
      'Small Batch',
      'Artisan',
      'Slow Roasted',
      'Stone Ground',
      'Hand Crafted',
    ],
    uncertifiedLabels: ['Non GMO', 'All Natural', 'Gluten Free'],

    origin: {
      country: 'Dominican Republic',
    },
  },
  {
    id: '3b2e8a2a3d',
    name: 'Kope Coffee 60% Dark Milk Chocolate & Nibs',
    slug: 'kope-coffee-60-dark-milk-chocolate-nibs-manoa-chocolate',
    maker: 'Manoa Chocolate',

    images: {
      HERO: {
        src: '/bars/kope-coffee-60-dark-milk-chocolate-nibs-manoa-chocolate.jpg',
        alt: 'Kope Coffee 60% Dark Milk Chocolate & Nibs bar from Manoa Chocolate exploded with nibs on a brown background',
      },
      BAR_FRONT: {
        src: '/bars/kope-coffee-60-dark-milk-chocolate-nibs-manoa-chocolate-bar-front.jpg',
        alt: 'Front of Kope Coffee 60% Dark Milk Chocolate & Nibs bar from Manoa Chocolate with a geometric triangle pattern',
      },
      BAR_BACK: {
        src: '/bars/kope-coffee-60-dark-milk-chocolate-nibs-manoa-chocolate-bar-back.jpg',
        alt: 'Back of Kope Coffee 60% Dark Milk Chocolate & Nibs bar from Manoa Chocolate',
      },
      PACKAGE_FRONT: {
        src: '/bars/kope-coffee-60-dark-milk-chocolate-nibs-manoa-chocolate-package-front.jpg',
        alt: 'Front of Kope Coffee 60% Dark Milk Chocolate & Nibs bar from Manoa Chocolate package',
      },
      PACKAGE_BACK: {
        src: '/bars/kope-coffee-60-dark-milk-chocolate-nibs-manoa-chocolate-package-back.jpg',
        alt: 'Back of Kope Coffee 60% Dark Milk Chocolate & Nibs bar from Manoa Chocolate package',
      },
    },

    barType: 'Dark Milk',
    percent: 60,
    barWeight: 60,
    barDimensions: [0, 0, 0],
    ingredients: [
      'Cacao',
      'Organic Cane Sugar',
      'Organic Whole Milk Powder',
      'Cocoa Butter',
      'Hawaiian Coffee',
    ],
    facilityAllergen: ['Dairy', 'Nuts'],

    packagingType: 'Envelope',
    packagingDimensions: [158, 90, 9],
    wrapper: 'Plant-based Cellulose',
    marketingTerms: [
      'Bean to Bar',
      'Pairings',
      'Artwork by',
      'Biodegradable',
      'Recycled',
    ],
    insidePrinting: true,

    origin: {
      country: 'unknown',
    },
  },
  {
    id: '1f81c6b0b3',
    name: 'Dominican Republic Dark 72%',
    slug: 'dominican-republic-dark-72-schoki-chocolate',
    maker: 'Schoki Chocolate',

    images: {
      HERO: {
        src: '/bars/dominican-republic-dark-72-schoki-chocolate.jpg',
        alt: 'Dominican Republic Dark 72% bar from Schoki Chocolate on a green background',
      },
      BAR_FRONT: {
        src: '/bars/dominican-republic-dark-72-schoki-chocolate-bar-front.jpg',
        alt: 'Front of Dominican Republic Dark 72% bar from Schoki Chocolate with a traditional mold pattern',
      },
      BAR_BACK: {
        src: '/bars/dominican-republic-dark-72-schoki-chocolate-bar-back.jpg',
        alt: 'Back of Dominican Republic Dark 72% bar from Schoki Chocolate',
      },
      PACKAGE_FRONT: {
        src: '/bars/dominican-republic-dark-72-schoki-chocolate-package-front.jpg',
        alt: 'Front of Dominican Republic Dark 72% bar from Schoki Chocolate package',
      },
      PACKAGE_BACK: {
        src: '/bars/dominican-republic-dark-72-schoki-chocolate-package-back.jpg',
        alt: 'Back of Dominican Republic Dark 72% bar from Schoki Chocolate package',
      },
    },

    barType: 'Dark',
    percent: 72,
    barWeight: 65,
    barDimensions: [0, 0, 0],
    ingredients: [
      'Organic Cacao Beans',
      'Organic Cane Sugar',
      'Organic Cocoa Butter',
    ],
    facilityAllergen: ['Peanuts', 'Tree Nuts', 'Dairy'],

    packagingType: 'Envelope',
    packagingDimensions: [175, 82, 11],
    wrapper: 'Foil',
    marketingTerms: ['Bean to Bar', 'Crafted', 'Ethically Sourced'],
    insidePrinting: true,

    origin: 'Zorzal Reserve',
  },
]

export default bars
