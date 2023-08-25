import { Link } from 'react-router-dom'
import { NewsletterForm } from '../../components/NewsletterForm'
import { Logo } from '../../components/Logo'

export const Footer = () => {
  return (
    <footer className='bg-secondary-100 pt-5 pb-1'>
      <div className='content d-flex align-items-center flex-direction-column gap-5'>
        <div className='d-flex align-items-start gap-5 justify-content-space-between informations'>
          <div className='container'>
            <div className='about'>
              <h3>About</h3>
              <p className='text-justify text-secondary-600'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                rem exercitationem ipsam et mollitia ipsa recusandae dolorem
                nostrum. Aliquam, nisi. Voluptate placeat ex facere ipsam fuga
                corporis, dolore suscipit quia. Tempore aperiam odit modi, minus
                eligendi quis provident quaerat illum repudiandae corporis optio
                dolorem tenetur omnis est voluptatibus voluptatem culpa mollitia
                blanditiis! Aliquid suscipit impedit hic. Quis, nemo sapiente
                quo aut ullam soluta beatae ea dolorum cupiditate, adipisci
                odio?
              </p>
            </div>
            <div className='contacts-infos mt-2'>
              <ul>
                <li>
                  <strong>Email : </strong>
                  <span className=''>contact@domain.com</span>
                </li>
                <li>
                  <strong>Phone : </strong>
                  <span className=''>00 229 54 14 22 05</span>
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

        <div className='w-full d-flex justify-content-space-between pt-1 border-top-1 border-secondary-400'>
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
