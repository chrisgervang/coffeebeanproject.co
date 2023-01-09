// TODO: research generateStaticParams

import { Container } from '#/components/Container'
import { ItemBlock } from '#/components/ItemBlock'
import { ItemBlockSupportingImages } from '#/components/ItemBlockSupportingImages'
import { Metadata } from '#/components/Metadata'
import {
  MetadataItem,
  transformPercent,
  transformWeight,
  transformElevation
} from '#/components/MetadataItem'
import { fetchBeanBySlug } from '#/lib/getBeans'
import { fetchRoasterByName } from '#/lib/getRoasters'
import { fetchProducerByName } from '#/lib/getProducers'
import { e } from 'easy-tailwind'
import Image from 'next/image'
import { notFound } from 'next/navigation'

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

  return (
    <section className="relative min-h-screen bg-white">
      <Container className="relative h-full h-[80vh]">
        <Image
          priority
          src={bean.images.HERO.src}
          alt={bean.images.HERO.alt}
          fill
          className="object-cover object-center"
        />
      </Container>

      <Container as="article" className="">
        <div
          className={e(
            '-mt-4 bg-brown-600 p-4 text-white rounded-md',
            'relative' // To ensure its above the absolute image above
          )}
        >
          {bean.name}
        </div>

        <ItemBlock
          title="Beans"
          renderSupporting={() => (
            <ItemBlockSupportingImages
              images={[bean.images.BAR_FRONT, bean.images.BAR_BACK]}
            />
          )}
        >
          <Metadata>
            <MetadataItem label="Roast Level" value={bean.roastLevel} />
            <MetadataItem
              label="Elevation"
              value={bean.elevation}
              transformValue={transformElevation}
            />
            <MetadataItem label="Ingredients" value={bean.ingredients} />
            <MetadataItem label="Food Allergen" value={bean.foodAllergen} />
            <MetadataItem
              label="Facility Allergen"
              value={bean.facilityAllergen}
            />
          </Metadata>
        </ItemBlock>

        <ItemBlock
          title="Bag"
          renderSupporting={() => (
            <ItemBlockSupportingImages
              images={[bean.images.PACKAGE_FRONT, bean.images.PACKAGE_BACK]}
            />
          )}
        >
          <Metadata>
            <MetadataItem label="Tasting Notes" value={bean.tastingNotes} />
            <MetadataItem
              label="Weight"
              value={bean.bagWeight}
              transformValue={transformWeight}
            />
            <MetadataItem label="Type" value={bean.packagingType} />
            <MetadataItem label="Wrapper" value={bean.wrapper} />
            <MetadataItem
              label="Certified Labels"
              value={bean.certifiedLabels}
            />
            <MetadataItem
              label="Uncertified Labels"
              value={bean.uncertifiedLabels}
            />
            <MetadataItem label="Marketing Terms" value={bean.marketingTerms} />
          </Metadata>
        </ItemBlock>

        {roaster ? (
          <ItemBlock title="Roaster">
            <Metadata>
              <MetadataItem label="Name" value={roaster.name} />
            </Metadata>
          </ItemBlock>
        ) : null}

        {producer ? (
          <ItemBlock title="Producer">
            <Metadata>
              <MetadataItem label="Producer" value={producer.name} />
              <MetadataItem label="Region" value={producer.region} />
              <MetadataItem label="Country" value={producer.country} />
            </Metadata>
          </ItemBlock>
        ) : null}
      </Container>
    </section>
  )
}
