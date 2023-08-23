import { Link } from 'react-router-dom'

import { NewsletterForm } from '../../components/NewsletterForm.tsx'

export const Footer = () => {
  return (
    <footer>
      <div className='content'>
        <div className='row'>
          <div className='col-'>
            <div className='about'>
              <h3>About</h3>
              <p>
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
          <div className='col-'>
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
          <div className='col-'>
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
          <div className='col-'>
            <NewsletterForm />
          </div>
        </div>

        <div className='row'></div>
      </div>
    </footer>
  )
}
