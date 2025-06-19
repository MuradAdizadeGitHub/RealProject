import React from 'react'
import ContactUsForm from "../components/ContactUsForm/index.jsx";
import { Helmet } from 'react-helmet-async';
function ContactUs() {
    return (
        <>
          <Helmet>
         <title>Alov servis - Kombi servis,Ucuz və zəmanətli işlər üçün bizimlə əlaqə saxlayın.</title>
      </Helmet>
            <ContactUsForm/>
        </>
    )
}

export default ContactUs
