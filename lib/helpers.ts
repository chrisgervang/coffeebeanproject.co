import { Bean } from './data/beans'

export function generateSlug(bean: Bean) {
  const string = `${bean.name} ${bean.roaster}`

  // TODO: Regex to strip for safe url vars
  return string.replace(/\s/g, '-').replace('%', '').toLowerCase()
}
