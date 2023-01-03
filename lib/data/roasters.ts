export interface Roaster {
  id: string
  name: RoasterNames
  location: string
}

const roasters = [
  {
    id: '07ef0bfa14',
    name: 'Madcap Coffee' as const,
    location: 'Grand Rapids, MI'
  },
]

export type RoasterNames = typeof roasters[number]['name']

export default roasters
