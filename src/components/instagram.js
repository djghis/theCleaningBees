import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import Instalogo from '../images/logo-insta.png'
import Fblogo from '../images/facebook-logo.png'



const Instagram = () => {
    const data = useStaticQuery(graphql`
    query {
        allInstaNode {
          edges {
            node {
              id
              mediaType
              preview
              original
              timestamp
              caption
              localFile {
                childImageSharp {
                  fixed(width: 150, height: 150) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
              # Only available with the public api scraper
              thumbnails {
                src
                config_width
                config_height
              }
              dimensions {
                height
                width
              }
            }
          }
        }
      }
    `)
      return (
        <div >
           {data.allInstaNode.edges.map(edge => 
                    <a href={edge.node.original} target="_blank" rel="noreferrer">
                    <Img className="insta-photo"
                      key={edge.node.id}
                      fixed={edge.node.localFile.childImageSharp.fixed}
                      alt="Photo from instagram"
                    />
                    </a>
                    )}
            <h2
              style={{
            fontFamily: 'Anahaw',}}
            ><a href='https://www.instagram.com/thecleaningbeesel/' target='_blank' rel="noreferrer" >Follow us on Instagram  
                <span>
                <img className='insta-logo' src={Instalogo} 
                alt="instagram logo png @transparentpng.com" />
                </span>
            </a></h2>
            <h2
              style={{
            fontFamily: 'Anahaw',}}
            >
                <a href='https://www.facebook.com/cleaningeastlothian' target="_blank" rel="noreferrer">Follow us on Facebook  
                  <span><img 
                  className='insta-logo' src={Fblogo} 
                  alt="facebook logo" /></span>
                </a>
            </h2>
                         
        </div>
      )
}

export default Instagram