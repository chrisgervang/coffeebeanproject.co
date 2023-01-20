export interface Maker {
  id: string
  name: MakerNames
}

const makers = [
  {
    id: '07ef0bfa14',
    name: 'Schoki Chocolate' as const,
  },
  {
    id: '5a1d356c26',
    name: 'Manoa Chocolate' as const,
  },
  {
    id: '37d76a0451',
    name: 'Olive & Sinclair Chocolate Co' as const,
  },
  {
    id: '4c283dad0d',
    name: 'Raaka Chocolate' as const,
  },
  {
    id: '4c5e3ee85f',
    name: 'Xocolatl Small Batch Chocolate' as const,
  },
  {
    id: '75269ba864',
    name: 'Terroir Chocolate' as const,
  },
  {
    id: '139446e064',
    name: 'Antidote Chocolate' as const,
  },
  {
    id: 'ffab80adbc',
    name: 'Original Beans' as const,
  },
  {
    id: 'fdc42eea5a',
    name: 'Fine & Raw Chocolate' as const,
  },
  {
    id: 'cd2184a66b',
    name: 'Casa Bosques Chocolates' as const,
  },
  {
    id: 'c633f63113',
    name: 'SAL de IBIZA' as const,
  },
  {
    id: 'c7c483b8ce',
    name: 'ICAM Chocolate' as const,
  },
  {
    id: '27ae402dd7',
    name: 'Rózsavölgyi Csokoládé' as const,
  },
  {
    id: 'b89ceeee28',
    name: 'Belvie Chocolate' as const,
  },
  {
    id: 'd9ee5dfb23',
    name: 'Chocolate Naive' as const,
  },
  {
    id: '1cad973d60',
    name: 'Exquisito Chocolates' as const,
  },
  {
    id: 'c772fe5d0b',
    name: 'Firetree Chocolate' as const,
  },
  {
    id: '32e54752c5',
    name: 'Dandelion Chocolate' as const,
  },
]

export type MakerNames = typeof makers[number]['name']

export default makers
