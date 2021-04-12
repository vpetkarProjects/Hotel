import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const ContactUs = () => {
  return (
    <Hero>
      <Banner title='Contact Us' subtitle='Mr. Vishvesh Petkar'>
        <address>
          7/10, Purna Nagar, Chikhali Road, chinchwad, Pune - 411019
        </address>
        <br />
        <FaPhoneAlt />
        <contactNo> +91 99229 36760 </contactNo>
        <br />
        <MdEmail />
        <eMail> vpetkar.projects@gmail.com</eMail>
        <br />
        <br />
        <Link to='/Hotel' className='btn-primary'>
          return home
        </Link>
      </Banner>
    </Hero>
  )
}

export default ContactUs
