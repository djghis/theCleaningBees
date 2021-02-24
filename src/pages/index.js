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
    <h1 className="title">The Cleaning Bees</h1>
    <h2>"We buzz around your hive making it Beeutiful and clean so you don't have to."</h2>
  </Layout>
  </div>
)

export default IndexPage
