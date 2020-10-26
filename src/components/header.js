import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      backgroundImage: 'url(../images/bee-background.jpeg)',
      background: `#547E6C`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1200,
        padding: `1rem 0rem`,
      }}
    >
      <h1 style={{ margin: 0}}>
        <Link
          to="/"
          style={{
            fontFamily: 'Liu Jian Mao Cao',
            color: `#FEE249`,
            textDecoration: `none`,
           
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
