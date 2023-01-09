import { fetchBeanBySlug } from '#/lib/getBeans'

export default async function BeanSlugPageHead({ params }: { params?: any }) {
  const bean = await fetchBeanBySlug(params.slug)

  if (!bean) {
    return null
  }

  return (
    <>
      <title>
        {`${bean.name} - The Coffee Bean Project | Cataloging the Worlds Coffee`}
      </title>
      <meta name="title" content={`${bean.name} - The Coffee Bean Project`} />
      <meta
        name="description"
        content={`${bean.roastLevel} coffee by ${bean.roaster}`}
      />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={`https://coffeebeanproject.co/beans/${bean.slug}`}
      />
      <meta
        property="og:title"
        content={`${bean.name} - The Coffee Bean Project`}
      />
      <meta
        property="og:description"
        content={`${bean.roastLevel} coffee by ${bean.roaster}`}
      />
      <meta
        property="og:image"
        content={`https://coffeebeanproject.co/${bean.images.HERO.src}`}
      />
    </>
  )
}
