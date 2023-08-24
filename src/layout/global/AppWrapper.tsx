import { PropsWithChildren, useLayoutEffect } from 'react'
import { NavBar } from '../default/NavBar'
import { Footer } from '../default/Footer'

type Props = PropsWithChildren<{
  title?: string
}>

export const AppWrapper = ({ title = 'MetaBlog', children }: Props) => {
  useLayoutEffect(() => {
    document.title = title

    return
  })
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  )
}
