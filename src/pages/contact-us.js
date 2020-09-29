import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


const ContactUs = () => (
  <Layout>
    <SEO title="Contact us" />
    <h1>Contact Us</h1>
    <p>here are all the way you can contact us:</p>
    
    <div className="Contact-us">
    <h2><a href='tel:00447985731129'>Phone us on: 07985 731129</a></h2><br/>
    <h2><a href='mailto:hellocleaningbees@gmail.com'>Email us to: hellocleaningbees@gmail.com</a></h2>
    <h1>You can also find us on social medias</h1>
    </div>
    <div>
    <h2>
      <a href='https://www.instagram.com/thecleaningbeesel/' target="_blank">Follow us on Instagram  
        <span><img 
        className='insta-logo' src="https://www.transparentpng.com/thumb/logo-instagram/z75gfy-instagram-logo-png.png" 
        alt="instagram logo" /></span>
      </a>
    </h2>
    <h2>
      <a href='https://www.facebook.com/cleaningeastlothian' target="_blank">Follow us on Facebook  
        <span><img 
        className='insta-logo' src="https://www.transparentpng.com/thumb/facebook-logo/new-facebook-logo-12.png" 
        alt="facebook logo" /></span>
      </a>
    </h2>
     
    </div>
    
    
  </Layout>
)

export default ContactUs