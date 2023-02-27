// TODO: Differentiate producer from origin?

export interface Producer {
  id: string
  name: ProducerNames
  farmName: string | undefined
  locality: string | undefined
  region: string | undefined
  country: string
}

const producers = [
  {
    id: '668ee3d1df',
    name: 'Samuel Degelo' as const,
    farmName: undefined,
    locality: 'Odo Shakisso',
    region: 'Guji',
    country: 'Ethiopia',
  },
  {
    id: 'dbe90f5579',
    name: 'Luis Norberto Pascoal' as const,
    farmName: 'Daterra',
    locality: undefined,
    region: 'Cerrado',
    country: 'Brazil',
  },
  {
    id: '08aeebc67b',
    name: 'Prudencio Vargas Saenz' as const,
    farmName: 'Valle Inca',
    locality: 'Yanatile Valley',
    region: 'Cusco',
    country: 'Peru',
  },
]

export type ProducerNames = typeof producers[number]['name']

export default producers
