import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { About } from '../pages/About'
import { BlogListing } from '../pages/BlogListing'
import { SinglePost } from '../pages/SinglePost'
import { SingleCategory } from '../pages/SingleCategory'
import { Contact } from '../pages/Contact'
import { Author } from '../pages/Author'

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />

      <Route path='/blog' element={<BlogListing />} />
      <Route path='/blog/:slug' element={<SinglePost />} />

      <Route path='/category/:category'>
        <Route path='' element={<SingleCategory />} />
      </Route>

      <Route path='/author/:author'>
        <Route path='' element={<Author />} />
      </Route>
    </Routes>
  )
}
