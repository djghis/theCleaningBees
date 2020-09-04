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
              likes
              comments
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
      console.log(data.allInstaNode.edges)
      return (
        <div>
                {data.allInstaNode.edges.map(edge => 
                    <a href={edge.node.original}>
                    <Img 
                      fixed={edge.node.localFile.childImageSharp.fixed}
                    />
                    </a>
                    )}
            </div>
      )
}

export default Instagram