import React from "react"
import Instagram from "../components/instagram"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"



const SocialMedia = () => (
  <Layout>
    <SEO title="Social Media" />
    <div className='social-media' >
  
    <h1>Social Media</h1>
    <p>Here are some pics from instagram</p>
    
     <Instagram />
   
    </div>
    
  </Layout>
)

export default SocialMedia