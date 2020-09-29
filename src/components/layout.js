/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */


import React, { Component } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Header from "../components/header"

import "./layout.css"
import MenuButton from "./menu-button"
import Menu from './menu'




class Layout extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      visible: false,
    }
  }

  handleMouseDown = (event) => {
    // this.changeHamburger();
    this.toggleMenu();
    console.log('clicked');
    event.preventDefault();
  }

  // handleMouseDown = (event) => {
  //   this.toggleMenu();
  //   this.changeHamburger();
  //   console.log('clicked')
  // }
  

  // changeHamburger = (e) => {
  //   e.classNameList.toggle("change");
  // }

  toggleMenu = () => {
    this.setState({ 
      visible: !this.state.visible
    })
  }

  render() {
    const children = this.props.children
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            
            <Header
              siteTitle={data.site.siteMetadata.title}
            />

            <div
              style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `0px 1rem 1rem`,
                paddingTop: 0,
              }}
            >
            
              <MenuButton handleMouseDown={this.handleMouseDown} />
              <Menu handleMouseDown={this.handleMouseDown} menuVisibility={this.state.visible} siteTitle={data.site.siteMetadata.title} />
              <main>{children}</main>
              <footer>
                  © {new Date().getFullYear()}, Built by 
                  {` `}
                  <a href="https://www.linkedin.com/in/ghislain-mercier/">GG</a>
             </footer>
            </div>
          </>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout



 // import React, {Component} from "react"
// import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
// import { Link } from "gatsby"


// import Header from "./header"
// import "./layout.css"

// class Layout extends Component{
//   constructor(props, context, {children}) {
//     super(props, context, {children})
//   this.state = {
//     visible:false
//   }
// }

//   toggleMenu = () => {
//     this.setState({
//       visible: !this.state.visible
//     })
//   }

//   render () {
//     return (
//       <>
//     <div>
//       <Header siteTitle={data.site.siteMetadata.title} />
//       <div
//         style={{
//           margin: `0 auto`,
//           maxWidth: 960,
//           padding: `0 1.0875rem 1.45rem`,
//         }}
//       >   
//         <main>{children}</main>
//         {document.querySelector("#Container")}
//          </div> 
//       <footer>
//           © {new Date().getFullYear()}, Built by 
//           {` `}
//           <a href="https://www.linkedin.com/in/ghislain-mercier/">GG</a>
//       </footer>
//         </div>
//     </>
//     )
    
//   }

//   Layout.propTypes = {
//     children: PropTypes.node.isRequired,
//   }


// export default Layout












 // import React from "react"
// import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
// import { Link } from "gatsby"

// import Header from "./header"
// import "./layout.css"

// const Layout = ({ children }) => {
//   const data = useStaticQuery(graphql`
//     query SiteTitleQuery {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//     }
//   `)

  

//   return (
//     <>
//     <div>
//       <Header siteTitle={data.site.siteMetadata.title} />
//       <div
//         style={{
//           margin: `0 auto`,
//           maxWidth: 960,
//           padding: `0 1.0875rem 1.45rem`,
//         }}
//       >
//       {/* <nav role="navigation">
//   <div id="menuToggle">
   
//     <input type="checkbox" />
    
    
//     <span></span>
//     <span></span>
//     <span></span>
    
    
//     <ul id="menu"> */}
//     {/* <div id="mySidenav" class="sidenav"></div>
//     <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a> */}
//       <h1 style={{ margin: 0}}><Link
//           to="/"
//           style={{
//             fontFamily: 'Liu Jian Mao Cao',
//             color: `white`,
//             textDecoration: `none`,
//             fontSize: '2rem',
//           }}
//         >
//           <li></li>Home
//           </Link>
//       </h1>
//       <h1 style={{ margin: 0}}><Link
//           to="/faqs"
//           style={{
//             fontFamily: 'Liu Jian Mao Cao',
//             color: `white`,
//             textDecoration: `none`,
//             fontSize: '2rem',
//           }}
//         >
//           <li></li>FAQS
//           </Link>
//       </h1>
//       <h1 style={{ margin: 0}}><Link
//           to="/meet-the-team"
//           style={{
//             fontFamily: 'Liu Jian Mao Cao',
//             color: `white`,
//             textDecoration: `none`,
//             fontSize: '2rem',
//           }}
//         >
//           <li></li>The Bee Team
//           </Link>
//       </h1>
//       <h1 style={{ margin: 0}}><Link
//           to="/social-media"
//           style={{
//             fontFamily: 'Liu Jian Mao Cao',
//             color: `white`,
//             textDecoration: `none`,
//             fontSize: '2rem',
//           }}
//         >
//           <li></li>Socials Medias
//           </Link>
//       </h1>
//       <h1 style={{ margin: 0}}><Link
//           to="/contact-us"
//           style={{
//             fontFamily: 'Liu Jian Mao Cao',
//             color: `white`,
//             textDecoration: `none`,
//             fontSize: '2rem',
//           }}
//         >
//           <li></li>Contact Us
//           </Link>
//       </h1>
      
//     {/* </ul>
//   </div>
// </nav> */}
    
//     {/* <div id="main">
//     <span onclick="openNav()">open</span> */}
//         <main>{children}</main>
//     {/* </div> */}
//       </div> 
//       <footer>
//           © {new Date().getFullYear()}, Built by 
//           {` `}
//           <a href="https://www.linkedin.com/in/ghislain-mercier/">GG</a>
//       </footer>
//         </div>
//     </>
//   )
// }

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

// export default Layout
