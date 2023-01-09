// TODO: research generateStaticParams

import { Container } from '#/components/Container'
import { ItemBlock } from '#/components/ItemBlock'
import { ItemBlockSupportingImages } from '#/components/ItemBlockSupportingImages'
import { Metadata } from '#/components/Metadata'
import {
  MetadataItem,
  DimensionsMetadataItem,
  // IngredientMetadataItem,
  transformDimensions,
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
            'flex flex-row items-center gap-1',
            '-mt-4 min-h-[80px] bg-brown-600 px-4 py-1 text-white rounded-md',
            'relative' // To ensure its above the absolute image above
          )}
        >
          <div className="flex flex-col justify-center">
            <h1>{bean.name}</h1>
            {bean.subtitle ? (
              <p role="doc-subtitle" className="opacity-50">
                {bean.subtitle}
              </p>
            ) : null}
          </div>

          {bean.productUrl ? (
            <a
              rel="noreferrer"
              target="_blank"
              href={bean.productUrl}
              className="ml-auto flex-shrink-0 rounded font-bold"
            >
              Buy Now
            </a>
          ) : null}
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
            {/* <IngredientMetadataItem
              label="Ingredients"
              value={bean.ingredients}
            />
            <MetadataItem label="Food Allergen" value={bean.foodAllergen} />
            <MetadataItem
              label="Facility Allergen"
              value={bean.facilityAllergen}
            /> */}
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
            {/* <MetadataItem label="Wrapper" value={bean.wrapper} /> */}
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
        ) : typeof bean.producer !== 'string' ? (
          <ItemBlock title="Origin">
            <Metadata>
              <MetadataItem label="Producer" value={bean.producer.name} />
              <MetadataItem label="Region" value={bean.producer.region} />
              <MetadataItem label="Country" value={bean.producer.country} />
            </Metadata>
          </ItemBlock>
        ) : null}
      </Container>
    </section>
  )
}
