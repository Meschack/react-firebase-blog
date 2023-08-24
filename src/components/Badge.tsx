import { ComponentPropsWithoutRef, PropsWithChildren } from 'react'

type BadgeProps = PropsWithChildren<ComponentPropsWithoutRef<'div'>>

export const Badge = (props: BadgeProps) => {
  return (
    <div {...props} className={`${props.className} badge rounded-1`}>
      <div>{props.children}</div>
    </div>
  )
}
