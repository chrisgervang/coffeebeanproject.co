export interface Maker {
  id: string
  name: MakerNames
}

const makers = [
  {
    id: '07ef0bfa14',
    name: 'Schoki Chocolate' as const,
  },
]

export type MakerNames = typeof makers[number]['name']

export default makers
