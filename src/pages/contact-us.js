import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Instalogo from '../images/logo-insta.png'
import Fblogo from '../images/facebook-logo.png'
import PhoneIcon from '../images/phone-icon.png'
import EmailIcon from '../images/email-icon.png'
import ContactForm from "../components/contact-form"


const ContactUs = () => (
  <Layout>
    <SEO title="Contact us" />
    <h1>Contact Us</h1>
    <p>here are all the way you can contact us:</p>
    
    <div className="Contact-us">
    <h3
      style={{
            fontFamily: 'Anahaw',}}
    ><a href='tel:00447985731129'><span><img className='insta-logo' src={PhoneIcon} alt='phone icon' /></span>: 07985 731129</a></h3><br/>
    <h3
      style={{
            fontFamily: 'Anahaw',}}
    ><a href='mailto:hellocleaningbees@gmail.com?subject=Please send me more info.'><span><img className='insta-logo' src={EmailIcon} alt='email icon' /></span>: hellocleaningbees@gmail.com</a></h3>
    <h1>You can also find us on social medias</h1>
    </div>
    <ContactForm />
    <div>
    <h2
      style={{
            fontFamily: 'Anahaw',}}
    >
      <a href='https://www.instagram.com/thecleaningbeesel/' target="_blank">Follow us on Instagram  
        <span><img 
        className='insta-logo' src={Instalogo} 
        alt="instagram logo" /></span>
      </a>
    </h2>
    <h2
      style={{
            fontFamily: 'Anahaw',}}
    >
      <a href='https://www.facebook.com/cleaningeastlothian' target="_blank">Follow us on Facebook  
        <span><img 
        className='insta-logo' src={Fblogo} 
        alt="facebook logo" /></span>
      </a>
    </h2>
     
    </div>
    
    
  </Layout>
)

export default ContactUs