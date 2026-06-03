import React from 'react'
import { useState } from "react";
import ContactUs from '../components/contact/HeroContact.jsx';
import ContactUsExtended from '../components/contact/ContactUsExtended.jsx';
import Footer from '../components/Footer.jsx';

const Contact = () => {
  return (
    <div>
      <ContactUs />
      <ContactUsExtended/>
      <Footer/>
    </div>
  )
}

export default Contact
