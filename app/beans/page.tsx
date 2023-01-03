import { BeanGrid } from '#/components/BeanGrid'
import { Container } from '#/components/Container'
import { fetchBeans } from '#/lib/getBeans'

export default async function BeansPage() {
  const beans = await fetchBeans()

  return (
    <Container className="my-2">
      <BeanGrid title="Beans" hideTitle data={beans} />
    </Container>
  )
}
