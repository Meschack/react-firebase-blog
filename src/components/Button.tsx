import { ComponentPropsWithoutRef, PropsWithChildren } from 'react'

type Props = PropsWithChildren<ComponentPropsWithoutRef<'button'>>

export const Button = (props: Props) => {
  return <button {...props}>{props.children}</button>
}
