import React from 'react'
import error from './../assets/error.jpeg'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'

const NotFound = () => {
  return (
    <Container>
      <img src={error} alt='error' srcset='' width='100%' max-height='50%' />
      <p className='text-center lead py-3'>
        In a forgiving mood? Let them keep their jobs
      </p>
      <p className='text-center'>
        Return to{' '}
        <Link to='/' style={{ textDecoration: 'none' }}>
          <span className='text-danger'>Homepage</span>
        </Link>
      </p>
    </Container>
  )
}

export default NotFound
