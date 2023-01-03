import { cache } from 'react'
import beans, { Bean } from './data/beans'
import { generateSlug } from './helpers'

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

export const getBeans = cache((): Array<Bean> => beans)

export async function fetchBeanBySlug(slug: string | undefined) {
  return getBeans().find((bean) => generateSlug(bean) === slug)
}

export async function fetchBeanById(id: string | undefined) {
  return getBeans().find((bean) => bean.id === id)
}

export async function fetchMostRecentBean() {
  // TODO: Fetch by publication date?
  return getBeans()[0]
}

export async function fetchBeans(): Promise<Array<Bean>> {
  return getBeans()
}
