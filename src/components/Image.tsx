import { ComponentPropsWithoutRef } from 'react'

type ImageProps = ComponentPropsWithoutRef<'img'>

export const Image = (props: ImageProps) => {
  return <img {...props} alt={props.alt ?? 'Une image'} />
}
