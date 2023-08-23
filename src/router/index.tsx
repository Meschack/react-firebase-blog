import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { About } from '../pages/About'
import { BlogListing } from '../pages/BlogListing'
import { SinglePost } from '../pages/SinglePost'
import { SingleCategory } from '../pages/SingleCategory'
import { Contact } from '../pages/Contact'

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />

      <Route path='/blog' element={<BlogListing />}>
        <Route path=':slug' element={<SinglePost />} />
      </Route>

      <Route path='/category'>
        <Route path=':category' element={<SingleCategory />} />
      </Route>
    </Routes>
  )
}
