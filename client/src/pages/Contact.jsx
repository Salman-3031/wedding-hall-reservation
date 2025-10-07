import React from 'react'
import ContactHero from '../components/Contact/ContactHero'
import ContactInfo from '../components/Contact/ContactInfo'
import ContactForm from '../components/Contact/ContactForm'
import FindUsOnGoogle from '../components/Contact/FindUsOnGoogle'

const Contact = () => {
  return (
    <div>
      <ContactHero/>
      <ContactInfo/>
      <FindUsOnGoogle/>
      <ContactForm/>
    </div>
  )
}

export default Contact