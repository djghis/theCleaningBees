import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ImageNat from "../components/imagenat"
import ImageBex from "../components/imagebex"
import NatBio from "../components/natBio"
import BexBio from "../components/bexBio"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Meet the Team</h1>
    <p>This our Lovely team that will come to dust, clean and Scrubbbb</p>
    <div className="bio">
      <ImageNat />
      <br></br>
      <ImageBex />
      <NatBio />
      <br></br>
      <BexBio />
    </div>
  </Layout>
)

export default SecondPage
