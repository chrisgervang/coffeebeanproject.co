import { cache } from 'react'
import roasters, { Roaster } from './data/roasters'

export const getRoasters = cache((): Array<Roaster> => roasters)

export async function fetchRoasterByName(name: string | undefined) {
  return getRoasters().find((roaster) => roaster.name === name)
}

export async function fetchRoaster(): Promise<Array<Roaster>> {
  return getRoasters()
}
