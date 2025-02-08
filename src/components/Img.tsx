import { Media } from '@/payload-types'
import Image from 'next/image'

export function Img({ image }: { image: Media }) {
  return (
    <Image src={image?.url || ''} alt='' width={image?.width || 0} height={image?.height || 0} />
  )
}
