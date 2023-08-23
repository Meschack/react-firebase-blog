import { PropsWithChildren } from 'react'
import { NavBar } from '../default/NavBar'
import { Footer } from '../default/Footer'

export const AppWrapper = ({ children }: PropsWithChildren) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  )
}
