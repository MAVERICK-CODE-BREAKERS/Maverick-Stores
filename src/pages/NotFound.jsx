import React from 'react'
import error from './../assets/error.jpeg'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <img src={error} alt='error' srcset='' width='100%' max-height='50%' />
      <p className='text-center lead py-3'>
        In a forgiving mood? Let them keep their jobs
      </p>
      <p className='text-center'>
        Return to{' '}
        <Link to='/'>
          <span className='text-danger'>Homepage</span>
        </Link>
      </p>
    </div>
  )
}

export default NotFound
