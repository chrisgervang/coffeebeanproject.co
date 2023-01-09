import { fetchMostRecentBean } from '#/lib/getBeans'
import Image from 'next/image'
import Link from 'next/link'
import Balancer from 'react-wrap-balancer'
import { Container } from '../components/Container'

export default async function Page() {
  const mostRecentBean = await fetchMostRecentBean()

  return (
    <Container className="relative h-[90vh]">
      <Link href={`/beans/${mostRecentBean.slug}`}>
        <Image
          priority
          src={mostRecentBean.images.HERO.src}
          alt={mostRecentBean.images.HERO.alt}
          fill
          className="object-cover object-center"
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer bg-brown-600 p-2 text-white rounded-md">
          <h1>
            {mostRecentBean.name}
          </h1>

          {mostRecentBean.subtitle ? (
            <p role="doc-subtitle" className="opacity-50">
              <Balancer>{mostRecentBean.subtitle}</Balancer>
            </p>
          ) : null}
        </div>
      </Link>
    </Container>
  )
}
