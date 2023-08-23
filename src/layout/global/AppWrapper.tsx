import { ComponentPropsWithoutRef, PropsWithChildren } from 'react'
import { NavBar } from '../default/NavBar'
import { Footer } from '../default/Footer'

type Props = PropsWithChildren<ComponentPropsWithoutRef<'div'>>

export const AppWrapper = ({ children }: Props) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  )
}
