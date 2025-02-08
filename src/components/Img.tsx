import Image from 'next/image'

export interface ImageType {
  url: string
  width: number
  height: number
}

export function Img({ image }: { image: ImageType }) {
  return <Image src={image.url} alt='' width={image.width} height={image.height} />
}
