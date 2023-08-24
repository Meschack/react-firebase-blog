import { Link } from 'react-router-dom'
import { NewsletterForm } from '../../components/NewsletterForm'
import { Logo } from '../../components/Logo'

export const Footer = () => {
  return (
    <footer className='bg-secondary-100 pt-5 pb-1'>
      <div className='content d-flex align-items-center flex-direction-column gap-5'>
        <div className='d-grid informations gap-4'>
          <div className='d-grid gap-2'>
            <div className='about'>
              <h3>About</h3>
              <p className='fs-2'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
                voluptatem eaque alias ducimus reiciendis cumque magnam numquam
                labore iusto. Dolores placeat est omnis, quia ab officia
                quisquam totam sint inventore?
              </p>
            </div>
            <div className='contacts-infos'>
              <ul>
                <li>
                  <strong>Email : </strong>contact@domain.com
                </li>
                <li>
                  <strong>Phone : </strong>00 229 54 14 22 05
                </li>
              </ul>
            </div>
          </div>
          <div className='quick-links'>
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>

              <li>
                <Link to='/about'>About</Link>
              </li>

              <li>
                <Link to='/blog'>Blog</Link>
              </li>

              <li>
                <Link to='/contact'>Home</Link>
              </li>
            </ul>
          </div>
          <div className='categories'>
            <h3>Categories</h3>
            <ul>
              <li>
                <Link to='/category/technology'>Technology</Link>
              </li>
              <li>
                <Link to='/category/lifestyle'>Lifestyle</Link>
              </li>
              <li>
                <Link to='/category/travel'>Travel</Link>
              </li>
              <li>
                <Link to='/category/business'>Business</Link>
              </li>
              <li>
                <Link to='/category/ai'>AI</Link>
              </li>
            </ul>
          </div>
          <div className='newsletter'>
            <NewsletterForm />
          </div>
        </div>

        <div className='w-full d-flex justify-content-space-between'>
          <div className='copywright'>
            <Logo />
          </div>

          <div className='terms'>
            <ul className='d-flex align-items-center justify-content-space-between gap-1'>
              <li>
                <Link to={'/'}>Terms of Use</Link>
              </li>
              <li>
                <Link to={'/'}>Privacy Policy</Link>
              </li>
              <li>
                <Link to={'/'}>Cookie Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
