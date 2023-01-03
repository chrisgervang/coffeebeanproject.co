import { cache } from 'react'
import producers, { Producer } from './data/producers'

export const getProducers = cache((): Array<Producer> => producers)

export async function fetchProducerByName(name: string | undefined) {
  return getProducers().find((producer) => producer.name === name)
}

export async function fetchProducers(): Promise<Array<Producer>> {
  return getProducers()
}
