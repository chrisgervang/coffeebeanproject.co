'use client'

import { Image as ImageType } from '#/lib/data/beans'
import { e } from 'easy-tailwind'
import Image from 'next/image'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

type ItemBlockPackagingImagesProps = {
  scheme?: 'split'
  front: ImageType
  side?: ImageType
  back: ImageType
}

export function ItemBlockPackagingImages({
  scheme = 'split',
  front,
  side,
  back,
}: ItemBlockPackagingImagesProps) {
  return scheme === 'split' ? (
    <div
      className={e(
        'grid grid-flow-row place-items-center gap-4',
        side ? 'grid-cols-2' : 'grid-cols-2'
      )}
    >
      <Zoom zoomImg={{ src: front.src }} classDialog="zoom-image">
        <Image
          src={front.src}
          alt={front.alt}
          width={500}
          height={700}
          quality={90}
        />
      </Zoom>
      {side ? (
        <Zoom zoomImg={{ src: side.src }} classDialog="zoom-image">
          <Image
            src={side.src}
            alt={side.alt}
            width={500}
            height={700}
            quality={90}
          />
        </Zoom>
      ) : null}
      <Zoom zoomImg={{ src: back.src }} classDialog="zoom-image">
        <Image
          src={back.src}
          alt={back.alt}
          width={500}
          height={700}
          quality={90}
        />
      </Zoom>
    </div>
  ) : null
}
