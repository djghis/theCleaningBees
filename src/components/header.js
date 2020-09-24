import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#ffdd1a`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0}}>
        <Link
          to="/"
          style={{
            fontFamily: 'Liu Jian Mao Cao',
            color: `white`,
            textDecoration: `none`,
            fontSize: '4rem',
          }}
        >
          {siteTitle}
        </Link>
      </h1> 
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
