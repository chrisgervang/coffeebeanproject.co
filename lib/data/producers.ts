// TODO: Differentiate producer from origin?

export interface Producer {
  id: string
  name: ProducerNames
  region: string | undefined
  locality: string | undefined
  country: string
}

const producers = [
  {
    id: '668ee3d1df',
    name: 'Samuel Degelo' as const,
    locality: 'Odo Shakisso',
    region: 'Guji',
    country: 'Ethiopia',
  },
]

export type ProducerNames = typeof producers[number]['name']

export default producers
