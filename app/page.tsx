import { fetchMostRecentBean, START_OF_DAY_PST } from '#/lib/getBeans'
import Image from 'next/image'
import Link from 'next/link'
import Balancer from 'react-wrap-balancer'
import { Container } from '../components/Container'

import { ChevronRightIcon } from '@heroicons/react/20/solid'

/**
 * Experience the diverse and complex flavors of coffee beans from every corner of the world, as we trace their journey from the farm to your cup.
 * Discover the rich flavors of coffee beans from every region of the world as they journey from farm to cup.
 */

const isToday = (someDate: Date) => {
  const now = new Date()
  return (
    someDate.getDate() == now.getDate() &&
    someDate.getMonth() == now.getMonth() &&
    someDate.getFullYear() == now.getFullYear()
  )
}

export default async function Page() {
  const mostRecentBean = await fetchMostRecentBean()

  return (
    <Container className="relative  h-px min-h-[700px]">
      <div className="grid h-full grid-cols-1 items-center gap-8 sm:grid-cols-2 sm:gap-2">
        <section className="grid gap-2 py-4">
          <h1 className="text-center font-heading text-5xl font-bold text-primary-800 sm:text-left sm:text-7xl">
            <Balancer>Cataloging the world{`'`}s coffee</Balancer>
          </h1>
          <p
            role="doc-subtitle"
            className="text-center font-heading text-lg text-primary-900/50 sm:text-left"
          >
            <Balancer>
              Experience the diverse and complex flavors of coffee beans from every corner of the world, 
              as we trace their journey from the farm to your cup.
            </Balancer>
          </p>
        </section>

        <div className="relative">
          {mostRecentBean ? (
            <Link href={`/bars/${mostRecentBean.slug}`}>
              <div className="grid gap-1">
                <div className="flex items-center justify-between">
                  <span className="bg-primary-800 p-0.5 text-sm text-primary-50">
                    {isToday(
                      new Date(mostRecentBean.releaseDate + START_OF_DAY_PST)
                    )
                      ? 'NEW TODAY'
                      : new Date(
                          mostRecentBean.releaseDate + START_OF_DAY_PST
                        ).toLocaleDateString('en-US')}
                  </span>
                  <div className="text-right text-primary-900/50">
                    {mostRecentBean.productionCountry}
                  </div>
                </div>
                <Image
                  priority
                  src={mostRecentBean.images.HERO.src}
                  alt={mostRecentBean.images.HERO.alt}
                  width={600}
                  height={450}
                  className="bg-primary-100"
                />

                <div>
                  <div className="flex items-center justify-between">
                    <h1 className="font-bold text-primary-900">
                      {mostRecentBean.name}
                    </h1>
                    <ChevronRightIcon className="h-2.5 w-2.5" />
                  </div>

                  <p role="doc-subtitle" className="text-primary-900/50">
                    {mostRecentBean.roaster}
                  </p>
                </div>
              </div>
            </Link>
          ) : null}
        </div>
      </div>
    </Container>
  )
}
