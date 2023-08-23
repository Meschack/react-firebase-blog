import { Button } from './Button'

export const NewsletterForm = () => {
  return (
    <div className='newsletter-form bg-white p-2 rounded-2 d-flex gap-2 flex-direction-column text-center'>
      <h3>Weekly Newsletter</h3>
      <p>Get blog articles and offers via email</p>

      <form action='' className='d-flex gap-1 flex-direction-column'>
        <input
          type='email'
          className='form-control p-1 rounded-1'
          placeholder='Your Email'
        />

        <Button type='submit' className='bg-primary p-1 rounded-1 text-white'>
          Subsribe
        </Button>
      </form>
    </div>
  )
}
