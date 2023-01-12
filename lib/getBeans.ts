import _ from 'lodash'
import { cache } from 'react'
import beans, { Bean } from './data/beans'

export type PageProps = {
  params?: any
  children?: React.ReactNode
}
export type Category = {
  name: string
  slug: string
  count: number
  items: Omit<Category, 'items'>[]
}

const START_OF_DAY_PST = 'T00:00:01-0800'

export const getBeans = cache(
  (): Array<Bean> =>
    beans.filter(
      ({ releaseDate }) =>
        new Date(releaseDate + START_OF_DAY_PST) <= new Date()
    )
)

export async function fetchBeanBySlug(slug: string | undefined) {
  return getBeans().find((bean) => bean.slug === slug)
}

export async function fetchBeanById(id: string | undefined) {
  return getBeans().find((bean) => bean.id === id)
}

export async function fetchMostRecentBean() {
  const beans = getBeans()
  const today = new Date()

  const closestBar = _.minBy(
    beans,
    (bean) =>
      today.getTime() - new Date(bean.releaseDate + START_OF_DAY_PST).getTime()
  )

  return closestBar
}

export async function fetchBeans(): Promise<Array<Bean>> {
  return getBeans()
}
