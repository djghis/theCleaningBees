import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'



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
            <h2><a href='https://www.instagram.com/thecleaningbeesel/' target='-blank' >Follow us on Instagram  
                <span>
                <img className='insta-logo' src="https://www.transparentpng.com/thumb/logo-instagram/z75gfy-instagram-logo-png.png" 
                alt="instagram logo png @transparentpng.com" />
                </span>
            </a></h2>
            <h2>
                <a href='https://www.facebook.com/cleaningeastlothian' target="_blank">Follow us on Facebook  
                  <span><img 
                  className='insta-logo' src="https://www.transparentpng.com/thumb/facebook-logo/new-facebook-logo-12.png" 
                  alt="facebook logo" /></span>
                </a>
            </h2>
                          {data.allInstaNode.edges.map(edge => 
                    <a href={edge.node.original}>
                    <Img className="insta-photo"
                      key={edge.node.id}
                      fixed={edge.node.localFile.childImageSharp.fixed}
                      alt="Photo from instagram"
                    />
                    </a>
                    )}
        </div>
      )
}

export default Instagram