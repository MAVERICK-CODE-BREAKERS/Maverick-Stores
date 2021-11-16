import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import styledInstallment from './Installment.Module.css'

const Installment = () => {
  return (
    <main className={styledInstallment.installmentBody}>
      {/* <p> Home installment</p> */}
      <Container >
      {/* <img src={error} alt='error' srcset='' width='100%' max-height='50%' /> */}
      <h3 className='text-center py-3 text-dark '>
        <b className={styledInstallment.bolder}>Terms and Conditions</b>
      </h3>
      {/* <p className='text-center lead py-3'>
        In a forgiving mood? Let them keep their jobs
      </p> */}
      <p className=''>
      Maverick Digital Store provides loans for users to buy gadgets. This service lets you pick up a gadget of your choice with a little down-payment. user first have to make 30% down to get a three-month or a six-month loan. interest rates are between 5% and 8% per month depending on the duration of the loan.
       
      </p>
      <h4 className={styledInstallment.bold}>
      Requirements
      </h4>
      <p className=''>
      For you to be eligible for this offer, you need to provide the documents/information listed below:     
      </p>
      <ul>
          <li>Valid id - International Passport, Driver’s License, National ID or Voter’s Card</li>
          <li>BVN</li>
          <li>ATM Card</li>
          <li>You must also be a regular income earner</li>
      </ul>
      <p className=''>
      With this flexible plan, money will no longer be a factor in getting your dream gadgets. To get started,
      <Link to='/installmentForm' style={{ textDecoration: 'none' }}>
          <span className='text-info'> here </span>
        </Link>
      to submit your details and a representative will contact you within 12hours.    
      </p>
    </Container>
    </main>
  )
}

export default Installment
