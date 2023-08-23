export const NewsletterForm = () => {
  return (
    <div className='newsletter-form'>
      <h3>Weekly Newsletter</h3>
      <p>Get blog articles and offers via email</p>

      <form action=''>
        <div className='form-group'>
          <input
            type='email'
            className='form-control'
            placeholder='Your Email'
          />
        </div>

        <button type='submit'>Subscribe</button>
      </form>
    </div>
  )
}
