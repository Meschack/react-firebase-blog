import { ComponentPropsWithoutRef } from 'react'
import { Image } from './Image'

type ImageProps = ComponentPropsWithoutRef<'img'>

export const Avatar = (props: ImageProps) => {
  return <Image className={`${props.className} avatar`} {...props} />
}
