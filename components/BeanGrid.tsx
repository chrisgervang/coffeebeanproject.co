import { Bean } from '#/lib/data/beans'
import { e } from 'easy-tailwind'
import Image from 'next/image'
import Link from 'next/link'

type BeanGridProps = {
  title: string
  hideTitle?: boolean

  data: Array<Bean>
}

export function BeanGrid({ title, hideTitle, data }: BeanGridProps) {
  return (
    <>
      <h2 className={hideTitle ? 'sr-only' : ''}>{title}</h2>

      <div
        className={e('grid grid-cols-1 gap-y-10 gap-x-6', 'grid-cols-2', {
          sm: 'grid-cols-3',
          lg: 'grid-cols-4',
        })}
      >
        {data.map((bean) => (
          <Link key={bean.id} href={`/beans/${bean.slug}`} className="group cursor-pointer">
            {/*  aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8  */}
            <div className="relative h-[300px] w-full overflow-hidden">
              <Image
                src={bean.images.PACKAGE_FRONT.src}
                alt={bean.images.PACKAGE_FRONT.alt}
                width={300}
                height={400}
                className="absolute h-full w-full object-contain object-center transition-opacity group-hover:opacity-0"
              />
              <Image
                src={bean.images.PACKAGE_BACK.src}
                alt={bean.images.PACKAGE_BACK.alt}
                width={300}
                height={400}
                className="absolute h-full w-full object-contain object-center opacity-0 transition-opacity group-hover:opacity-100"
              />
            </div>
            <div className="text-center">
              <h3 className="mt-4 text-sm text-primary-900/50">{bean.roaster}</h3>
              <p className="text-md mt-1 font-medium text-primary-900">
                {bean.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}
