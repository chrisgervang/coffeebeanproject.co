'use client'

import { Image as ImageType } from '#/lib/data/beans'
import Image from 'next/image'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

type ItemBlockSupportingImagesProps = {
  scheme?: 'split'
  images: Array<ImageType> | ImageType
}

export function ItemBlockSupportingImages({
  scheme = 'split',
  images,
}: ItemBlockSupportingImagesProps) {
  if (!Array.isArray(images)) {
    return (
      <div className="grid grid-cols-1 gap-4">
        <Zoom zoomImg={{ src: images.src }} classDialog="zoom-image">
          <Image src={images.src} alt={images.alt} width={500} height={500} />
        </Zoom>
      </div>
    )
  }
  const [firstImage, secondImage] = images
  return scheme === 'split' ? (
    <div className="grid grid-cols-2 gap-4">
      <Zoom zoomImg={{ src: firstImage.src }} classDialog="zoom-image">
        <Image
          src={firstImage.src}
          alt={firstImage.alt}
          width={500}
          height={500}
        />
      </Zoom>
      <Zoom zoomImg={{ src: secondImage.src }} classDialog="zoom-image">
        <Image
          src={secondImage.src}
          alt={secondImage.alt}
          width={500}
          height={500}
        />
      </Zoom>
    </div>
  ) : null
}
