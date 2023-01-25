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
    country: 'United States'
  },
]

export type RoasterNames = typeof roasters[number]['name']

export default roasters
