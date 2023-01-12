// TODO: research generateStaticParams

import { Container } from '#/components/Container'
import { ItemBlock } from '#/components/ItemBlock'
import { ItemBlockSupportingImages } from '#/components/ItemBlockSupportingImages'
import { ItemBlockPackagingImages } from '#/components/ItemBlockPackagingImages'
import { Metadata } from '#/components/Metadata'
import {
  AwardsMetadataItem,
  DimensionsMetadataItem,
  MetadataItem,
  transformDimensions,
  transformPercent,
  transformWeight,
  transformElevation,
  ElevationMetadataItem,
  transformTruthy
} from '#/components/MetadataItem'
import { fetchBeanBySlug } from '#/lib/getBeans'
import { fetchRoasterByName } from '#/lib/getRoasters'
import { fetchProducerByName } from '#/lib/getProducers'
import { e } from 'easy-tailwind'
import { ArrowRightIcon } from '@heroicons/react/20/solid'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Balancer from 'react-wrap-balancer'

export default async function BeanSlugPage({ params }: { params?: any }) {
  const bean = await fetchBeanBySlug(params.slug)
  const roaster = await fetchRoasterByName(bean?.roaster)
  const producer =
    typeof bean?.producer === 'string'
      ? await fetchProducerByName(bean?.producer)
      : undefined

  if (!bean) {
    return notFound()
  }

  const isUnreleased =
    new Date(bean.releaseDate + 'T00:00:01-0800') >= new Date()

  return (
    <section className="relative min-h-screen">
      <div className="bg-primary-100/25">
        <Container className="relative h-[40vh] sm:h-[80vh]">
          <Image
            priority
            src={bean.images.HERO.src}
            alt={bean.images.HERO.alt}
            fill
            className="object-cover object-center"
          />
        </Container>
      </div>

      <Container as="article">
        <div className="flex flex-col gap-2 py-4 sm:flex-row sm:gap-10">
          <section className="flex-2">
            <h1 className="mb-2 font-heading text-4xl font-bold text-primary-800">
              <Balancer>
                {bean.name}{' '}
                {bean.subtitle ? (
                  <span className="font-normal text-primary-900/75">
                    {bean.subtitle}
                  </span>
                ) : null}
              </Balancer>
            </h1>

            <p className="mb-2 text-primary-900/50">
              <Balancer>
                by {bean.roaster} in {bean.productionCountry}
              </Balancer>
            </p>
          </section>

          <div className="flex-3">
            {isUnreleased ? (
              <div className="mb-2 inline-flex items-center gap-1 bg-primary-700 p-0.5 text-primary-100">
                <ExclamationTriangleIcon className="h-2.5 w-2.5" />
                <span>
                  This bean hasn{`'`}t been published yet, information may
                  change.
                </span>
              </div>
            ) : null}

            {bean.description ? (
              Array.isArray(bean.description) ? (
                bean.description.map((description, index) => (
                  <p key={index} className="mb-2 text-primary-900/50">
                    {description}
                  </p>
                ))
              ) : (
                <p className="mb-2 text-primary-900/50">{bean.description}</p>
              )
            ) : null}

            {bean.productUrl ? (
              <a
                rel="noreferrer"
                target="_blank"
                href={bean.productUrl}
                className="flex items-center gap-1 text-primary-900/50 hover:text-primary-900"
              >
                <ArrowRightIcon className="h-2.5 w-2.5" />
                <span>
                  {new URL(bean.productUrl).hostname.replace('www.', '')}
                </span>
              </a>
            ) : null}
          </div>
        </div>

        <ItemBlock
          title="Beans"
          renderSupporting={() => (
            <ItemBlockSupportingImages
              images={[bean.images.BEANS_WHOLE, bean.images.BEANS_GROUND]}
            />
          )}
        >
          <Metadata>
            <MetadataItem label="Roast Level" value={bean.roastLevel} />
            <MetadataItem label="Processing" value={bean.process} />
            <ElevationMetadataItem
              label="Elevation"
              value={bean.elevation}
              transformValue={transformElevation}
            />
            <MetadataItem label="Body" value={bean.body} />
            <MetadataItem label="Variety" value={bean.beanVariety} />
            <MetadataItem label="Origin Category" value={bean.originCategory} />
            <MetadataItem label="Tasting Notes" value={bean.tastingNotes} />
            <MetadataItem label="Roast Date" value={bean.roastDate} />
          </Metadata>
        </ItemBlock>

        <ItemBlock
          title="Bag"
          renderSupporting={() => (
            <ItemBlockPackagingImages
              front={bean.images.PACKAGE_FRONT}
              side={bean.images.PACKAGE_SIDE}
              back={bean.images.PACKAGE_BACK}
            />
          )}
        >
          <Metadata>
            <DimensionsMetadataItem
              label="Dimensions"
              value={bean.packagingDimensions}
              transformValue={transformDimensions}
            />
            <MetadataItem
              label="Weight"
              value={bean.packagingWeight}
              transformValue={transformWeight}
            />
            <MetadataItem label="Type" value={bean.packagingType} />
            <MetadataItem label="Grind Type" value={bean.grindType} />
            <MetadataItem
              label="Certified Labels"
              value={bean.certifiedLabels}
            />
            <MetadataItem
              label="Uncertified Labels"
              value={bean.uncertifiedLabels}
            />
            <MetadataItem label="Marketing Terms" value={bean.marketingTerms} />
            <MetadataItem 
              label="Resealable" 
              value={bean.resealable} 
              transformValue={transformTruthy}
            />
            <MetadataItem 
              label="Degassing Valve" 
              value={bean.degassingValve}
              transformValue={transformTruthy}
            />
            <MetadataItem label="Packaging Languages" value={bean.packageLanguages} />
          </Metadata>
        </ItemBlock>

        {roaster ? (
          <ItemBlock title="Roaster">
            <Metadata>
              <MetadataItem label="Name" value={roaster.name} />
              <MetadataItem
                label="Production Country"
                value={bean.productionCountry}
              />
            </Metadata>
          </ItemBlock>
        ) : null}

        {producer ? (
          <ItemBlock title="Producer">
            <Metadata>
              <MetadataItem label="Producer" value={producer.name} />
              <MetadataItem label="Locality" value={producer.locality} />
              <MetadataItem label="Region" value={producer.region} />
              <MetadataItem label="Country" value={producer.country} />
            </Metadata>
          </ItemBlock>
        ) : typeof bean.producer !== 'string' ? (
          <ItemBlock title="Origin">
            <Metadata>
              <MetadataItem label="Producer" value={bean.producer.name} />
              <MetadataItem label="Locality" value={bean.producer.locality} />
              <MetadataItem label="Region" value={bean.producer.region} />
              <MetadataItem label="Country" value={bean.producer.country} />
            </Metadata>
          </ItemBlock>
        ) : null}
      </Container>
    </section>
  )
}
