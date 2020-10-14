import React from "react"
import ImageBee from "../components/image-bee"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import "./index.module.css"



const IndexPage = () => (
  <div className="bee-background" >
  <Layout>
    <SEO title="Home" />
    <h1
    style={{
            fontSize: '4rem',
          }}
    >Covid Safe</h1>
    <p>With the current guidelines we want to assure all measures are in place to keep you
    and your household as safe as possible</p>
    <br/>
    <p>Before we enter your home we always:</p>
    <p>*Take our temperature</p>
    <p>*Antibac our hands</p>
    <p>*Put on our masks</p>
    <p>We are asking our clients to <b>NOT</b> be at home, or stay within one room while we buzz round
    making it clean and safe!</p>
    <p>Thank you for your support</p>
    <p>The Cleanning Bees.</p>
  </Layout>
  </div>
)

export default IndexPage
