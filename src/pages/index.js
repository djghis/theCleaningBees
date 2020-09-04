import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello Lovelies</h1>
    <p>Welcome the Cleaning Bees.</p>
    <p>We will come and clean your House/offices.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
    <Link to="/page-2/">Meet the Team</Link> <br />
  </Layout>
)

export default IndexPage
