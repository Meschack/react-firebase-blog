import { Link } from 'react-router-dom'
// import { Icon } from '../../components/Icon'
import { Logo } from '../../components/Logo'

export const NavBar = () => {
  return (
    <header className='header d-flex align-items-center justify-content-space-between py-2'>
      <Logo />

      <nav className='nav'>
        <ul className='d-flex align-items-center gap-3'>
          <li>
            <Link to='/home'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/blog'>Blog</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>

      <div className='actions d-flex align-items-center gap-2'>
        <form action='' className='d-flex align-items-center gap-0'>
          <input type='text' name='search' id='search' placeholder='Search' />
          {/* <button type='submit' title='Search an article'>
            <Icon icon='search-outline' />
          </button> */}
        </form>

        <div className='theme-toggler rounded-3 bg-secondary-100'></div>
      </div>
    </header>
  )
}
