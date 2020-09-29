import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      backgroundImage: 'url(../images/bee-background.jpeg)',
      background: `#ffdd1a`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1200,
        padding: `1rem 1rem`,
      }}
    >
      <h1 style={{ margin: 0}}>
        <Link
          to="/"
          style={{
            fontFamily: 'Liu Jian Mao Cao',
            color: `white`,
            textDecoration: `none`,
            fontSize: '2rem',
          }}
        >
        We buzz around your hive making it Bee-utiful and clean so you don't have to!
          {/* {siteTitle} */}
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
