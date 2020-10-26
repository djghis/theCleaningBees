import React, { Component } from 'react'
import './menu.css'
import { Link } from 'gatsby'
// import MenuButton from './menu-button';


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
        onClick={this.props.handleMouseDown}
        className={visibility}>
        <h1 
        style={{ marginTop: 55}}
        >
        {/* <MenuButton /> */}
        <Link
          to="/"
          style={{
            fontFamily: 'Liu Jian Mao Cao',
            color: `white`,
            textDecoration: `none`,
            // fontSize: '2.5rem',
          }}
          activeStyle={{
             color: "#FFC20E" 
             }}
        >
          Home
        </Link>
      </h1> 
      <h1 
      // style={{ margin: 0}}
      >
        <Link
          to="/price-list"
          style={{
            fontFamily: 'Liu Jian Mao Cao',
            color: `white`,
            textDecoration: `none`,
            // fontSize: '2.5rem',
          }}
          activeStyle={{
             color: "#FFC20E" 
             }}
        >
          Price List
        </Link>
      </h1> 
      <h1
      //  style={{ margin: 0}}
       >
        <Link
          to="/faqs"
          style={{
            fontFamily: 'Liu Jian Mao Cao',
            color: `white`,
            textDecoration: `none`,
            // fontSize: '2.5rem',
          }}
          activeStyle={{
             color: "#FFC20E" 
             }}
        >
          FAQS
        </Link>
      </h1> 
      <h1 
      // style={{ margin: 0}}
      >
        <Link
          to="/meet-the-team"
          style={{
            fontFamily: 'Liu Jian Mao Cao',
            color: `white`,
            textDecoration: `none`,
            // fontSize: '2.5rem',
          }}
          activeStyle={{
             color: "#FFC20E" 
             }}
        >
          The Bee Team
        </Link>
      </h1> 
      <h1 
      // style={{ margin: 0}}
      >
        <Link
          to="/social-media"
          style={{
            fontFamily: 'Liu Jian Mao Cao',
            color: `white`,
            textDecoration: `none`,
            fontSize: '2.5rem',
          }}
          activeStyle={{
             color: "#FFC20E" 
             }}
        >
          Social Media
        </Link>
      </h1> 
      <h1
      //  style={{ margin: 0}}
      >
        <Link
          to="/contact-us"
          style={{
            fontFamily: 'Liu Jian Mao Cao',
            color: `white`,
            textDecoration: `none`,
            // fontSize: '2.5rem',
          }}
          activeStyle={{
             color: "#FFC20E" 
             }}
        >
          Contact Us
        </Link>
      </h1> 
      <h1
      //  style={{ margin: 0}}
      >
        <Link
          to="/covid-safe"
          style={{
            fontFamily: 'Liu Jian Mao Cao',
            color: `white`,
            textDecoration: `none`,
            // fontSize: '2.5rem',
          }}
          activeStyle={{
             color: "#FFC20E" 
             }}
        >
          Covid Safe
        </Link>
      </h1> 
        </div>
      </>
    )
  }
}


export default Menu
