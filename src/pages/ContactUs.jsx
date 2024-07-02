import React from 'react'
import ContactUsForm from "../components/ContactUsForm/index.jsx";
import { Helmet } from 'react-helmet-async';
function ContactUs() {
    return (
        <>
          <Helmet>
        <title>alovservis.az | Contact Us</title>
      </Helmet>
            <ContactUsForm/>
        </>
    )
}

export default ContactUs
