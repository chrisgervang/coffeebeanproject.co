// TODO: research generateStaticParams

import { Container } from '#/components/Container'
import { ItemBlock } from '#/components/ItemBlock'
import { ItemBlockPackagingImages } from '#/components/ItemBlockPackagingImages'
import { ItemBlockSupportingImages } from '#/components/ItemBlockSupportingImages'
import { Metadata } from '#/components/Metadata'
import {
  DimensionsMetadataItem,
  ElevationMetadataItem,
  AwardsMetadataItem,
  MetadataItem,
  transformDimensions,
  transformElevation,
  transformPrice,
  transformTruthy,
  transformWeight,
  transformTempurature,
} from '#/components/MetadataItem'
import { fetchBeanBySlug } from '#/lib/getBeans'
import { fetchProducerByName } from '#/lib/getProducers'
import { fetchRoasterByName } from '#/lib/getRoasters'
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
                by {bean.roaster} in {roaster?.country}
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
            {/* plant */}
            <MetadataItem 
              label="Single Origin" 
              value={bean.singleOrigin} 
              transformValue={transformTruthy}
            />
            <MetadataItem label="Tasting Notes" value={bean.tastingNotes} />
            <ElevationMetadataItem
              label="Elevation"
              value={bean.elevation}
              transformValue={transformElevation}
            />
            <MetadataItem label="Variety" value={bean.beanVariety} />
            { bean.harvestDate ? 
              <MetadataItem label="Harvest Date" value={bean.harvestDate} /> :
              <>
                <MetadataItem label="Harvest Month" value={bean.harvestMonth} />
                <MetadataItem label="Harvest Year" value={bean.harvestYear} />
              </>
            }
            <MetadataItem label="Harvest Method" value={bean.harvestMethod} />
            {/* processing */}
            <MetadataItem label="Processing Method" value={bean.processingMethod} />
            <MetadataItem label="Processing Location" value={bean.processingLocation} />
            {/* drying */}
            <MetadataItem label="Drying Method" value={bean.dryingMethod} />
            <MetadataItem label="Drying Location" value={bean.dryingLocation} />
            {/* milling */}
            <MetadataItem label="Hulling Notes" value={bean.hullingNotes} />
            <MetadataItem label="Polishing Notes" value={bean.polishingNotes} />
            <MetadataItem label="Grading And Sorting Notes" value={bean.gradingAndSortingNotes} />
            <MetadataItem label="Mill Location" value={bean.millLocation} />
            <MetadataItem label="Green Date" value={bean.greenDate} />
            {/* roast */}
            <MetadataItem label="Roast Level" value={bean.roastLevel} />
            <MetadataItem label="Body" value={bean.body} />
            <MetadataItem label="Roast Date" value={bean.roastDate} />
            <MetadataItem 
              label="Chaff Prevalent" 
              value={bean.chaffPrevalent} 
              transformValue={transformTruthy} 
            />
            <MetadataItem label="Grind Pictured" value={bean.grindShown} />
          </Metadata>
        </ItemBlock>

        <ItemBlock
          title="Packaging"
          renderSupporting={() => (
            <ItemBlockPackagingImages
              front={bean.images.PACKAGE_FRONT}
              side={bean.images.PACKAGE_SIDE}
              back={bean.images.PACKAGE_BACK}
            />
          )}
        >
          <Metadata>
            <MetadataItem label="Grind" value={bean.packagedGrindType} />
            {/* physical */}
            <MetadataItem label="Type" value={bean.packagingType} />
            <MetadataItem label="Features" value={bean.packagingFeatures} />
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
            {/* labels */}
            <MetadataItem
              label="Certified Labels"
              value={bean.certifiedLabels}
            />
            <MetadataItem
              label="Uncertified Labels"
              value={bean.uncertifiedLabels}
            />
            <MetadataItem label="Marketing Terms" value={bean.marketingTerms} />
            <AwardsMetadataItem
              label="Awards"
              value={bean.awards}
            />
            <MetadataItem
              label="Packaging Languages"
              value={bean.packageLanguages}
            />
          </Metadata>
        </ItemBlock>

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
          <ItemBlock title="Producer">
            <Metadata>
              <MetadataItem label="Single Origin" value={bean.singleOrigin} />
              <MetadataItem label="Producer" value={bean.producer.name} />
              <MetadataItem label="Locality" value={bean.producer.locality} />
              <MetadataItem label="Region" value={bean.producer.region} />
              <MetadataItem label="Country" value={bean.producer.country} />
            </Metadata>
          </ItemBlock>
        ) : null}

        {roaster ? (
          <ItemBlock title="Roaster">
            <Metadata>
              <MetadataItem label="Name" value={roaster.name} />
              <MetadataItem label="Roastery" value={roaster.location} />
              <MetadataItem
                label="Production Country"
                value={roaster.country}
              />
            </Metadata>
          </ItemBlock>
        ) : null}

        <ItemBlock title="Retailer">
          <Metadata>
            <MetadataItem label="Name" value={bean.retailer} />
            <MetadataItem
              label="Price"
              value={bean.retailPrice}
              transformValue={transformPrice}
            />
            <MetadataItem
              label="Price / Gram"
              value={bean.retailPricePerGram}
              transformValue={transformPrice}
            />
            <MetadataItem label="Location" value={bean.retailLocation} />
            <MetadataItem label="Obtained" value={bean.dateObtained} />
            <MetadataItem label="Brewing Notes" value={bean.reatilBrewingNotes} />
          </Metadata>
        </ItemBlock>

        <ItemBlock title="Review">
          <Metadata>
            <MetadataItem 
              label="Favorite Coffee"
              value={bean.reviewerCoffeeFavorite} 
              transformValue={transformTruthy}
            />
            <MetadataItem 
              label="Drink Again?" 
              value={bean.reviewerWouldDrinkAgain}
              transformValue={transformTruthy}
            />
            <MetadataItem label="Coffee Notes" value={bean.reviewerCoffeeNotes} />
            <MetadataItem label="Brew" value={bean.reviewerBrewType} />
            <MetadataItem
              label="Dose"
              value={bean.reviewerBrewDose}
              transformValue={transformWeight}
            />
            <MetadataItem label="Grind" value={bean.reviewerBrewGrind} />
            <MetadataItem
              label="Water Temp"
              value={bean.reviewerBrewWaterTemp}
              transformValue={transformTempurature}
            />
            <MetadataItem
              label="Water Weight"
              value={bean.reviewerBrewWaterWeight}
              transformValue={transformWeight}
            />

            <MetadataItem 
              label="Favorite Packaging" 
              value={bean.reviewerPackagingFavorite} 
              transformValue={transformTruthy}
            />
            <MetadataItem label="Packaging Notes" value={bean.reviewerPackagingNotes} />
          </Metadata>
        </ItemBlock>

      </Container>
    </section>
  )
}
