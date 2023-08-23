import { ComponentPropsWithoutRef } from 'react'

type ButtonProps = ComponentPropsWithoutRef<'img'>

export const Image = (props: ButtonProps) => {
  return <img {...props} />
}
