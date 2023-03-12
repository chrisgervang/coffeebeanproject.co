export interface Roaster {
  id: string
  name: RoasterNames
  location: string
  country: string
}

const roasters = [
  {
    id: '07ef0bfa14',
    name: 'Madcap Coffee' as const,
    location: '1041 Fulton St E, Grand Rapids, MI 49503',
    country: 'United States',
  },
  {
    id: 'fb21d046d1',
    name: 'George Howell Coffee' as const,
    location: '312 School Street, Acton, MA 01720',
    country: 'United States',
  },
  {
    id: 'b3c5c29b26',
    name: 'Artís Coffee' as const,
    location: '1717 Fourth St B, Berkeley, CA 94710',
    country: 'United States',
  },
  {
    id: '418a036552',
    name: 'Captain + Stoker' as const,
    location: '398 E Franklin St., Monterey, CA 93940',
    country: 'United States',
  },
]

export type RoasterNames = typeof roasters[number]['name']

export default roasters
