module.exports = {
  siteMetadata: {
    title: `The Cleaning Bees`,
    description: `cleaner, cleaners, house clean, lothian, east lothian, North Berwick, Gullane, Dirleton, clean bees, cleen bees, beesy cleaning, busy cleaning, best clean team`,
    author: `Gg`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `41197762923`
      },
    },
    {
      resolve: `gatsby-transformer-sharp`
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The cleaning Bees`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ff0`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
