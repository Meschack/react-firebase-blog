import { Link } from 'react-router-dom'
// import { Icon } from '../../components/Icon'
import { Logo } from '../../components/Logo'

export const NavBar = () => {
  return (
    <header className='header'>
      <Logo />

      <nav className='nav'>
        <ul>
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

      <div className='actions'>
        <form action=''>
          <input type='text' name='search' id='search' placeholder='Search' />
          {/* <button type='submit' title='Search an article'>
            <Icon icon='search-outline' />
          </button> */}
        </form>

        <div className='theme-toggler'></div>
      </div>
    </header>
  )
}
