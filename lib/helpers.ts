import { Bean } from './data/beans'

export function generateSlug(bean: Bean) {
  const string = `${bean.name} ${bean.roaster}`

  // TODO: Regex to strip for safe url vars
  return string.replace(/\s/g, '-').replace('%', '').toLowerCase()
}

export function parseProductUrl(productUrl: string) {
  const url = new URL(productUrl)
  if (!url.hostname.includes('web.archive.org')) {
    return url.hostname.replace('www.', '')
  }
  const regex = /https:\/\/web\.archive\.org\/web\/\d*\//gm
  const originalUrl = productUrl.replace(regex, '')
  return new URL(originalUrl).hostname.replace('www.', '')
}
