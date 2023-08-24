import { ComponentPropsWithoutRef, PropsWithChildren } from 'react'

type Props = PropsWithChildren<ComponentPropsWithoutRef<'code'>>

export const CodePreviewer = (props: Props) => {
  return (
    <div
      className={`${props.className} code-preview d-flex  rounded-1 p-1 bg-secondary-50`}
    >
      {props.children}
    </div>
  )
}
