import React, { Component } from 'react'
import './menu.css'
import { Link } from 'gatsby'
import MenuButton from './menu-button';


class Menu extends Component {
  render() {
      let visibility = "hide";

      if (this.props.menuVisibility) {
          visibility = "show";
      }


    return (
      <>
        <div 
        role="navigation menu"
        aria-label='nav bar'
        id='fly-out-menu'
        onMouseDown={this.props.handleMouseDown}
        className={visibility}>
        <h1 style={{ margin: 0}}>
        {/* <MenuButton /> */}
        <div id="mdiv">
          <div class="mdiv">
          <div class="md"></div>
          </div>
        </div>
        <Link
          to="/"
          style={{
            fontFamily: 'Liu Jian Mao Cao',
            color: `white`,
            textDecoration: `none`,
            fontSize: '4rem',
          }}
        >
          Home
        </Link>
      </h1> 
      <h1 style={{ margin: 0}}>
        <Link
          to="/price-list"
          style={{
            fontFamily: 'Liu Jian Mao Cao',
            color: `white`,
            textDecoration: `none`,
            fontSize: '4rem',
          }}
        >
          Price List
        </Link>
      </h1> 
      <h1 style={{ margin: 0}}>
        <Link
          to="/faqs"
          style={{
            fontFamily: 'Liu Jian Mao Cao',
            color: `white`,
            textDecoration: `none`,
            fontSize: '4rem',
          }}
        >
          FAQS
        </Link>
      </h1> 
      <h1 style={{ margin: 0}}>
        <Link
          to="/meet-the-team"
          style={{
            fontFamily: 'Liu Jian Mao Cao',
            color: `white`,
            textDecoration: `none`,
            fontSize: '4rem',
          }}
        >
          The Bee Team
        </Link>
      </h1> 
      <h1 style={{ margin: 0}}>
        <Link
          to="/social-media"
          style={{
            fontFamily: 'Liu Jian Mao Cao',
            color: `white`,
            textDecoration: `none`,
            fontSize: '4rem',
          }}
        >
          Social Media
        </Link>
      </h1> 
      <h1 style={{ margin: 0}}>
        <Link
          to="/contact-us"
          style={{
            fontFamily: 'Liu Jian Mao Cao',
            color: `white`,
            textDecoration: `none`,
            fontSize: '4rem',
          }}
        >
          Contact Us
        </Link>
      </h1> 
        </div>
      </>
    )
  }
}


export default Menu
