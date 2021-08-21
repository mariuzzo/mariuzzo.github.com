/* eslint-disable no-undef */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.mariuzzo.com`,
    title: `Mariuzzo`
  },
  plugins: [
    { resolve: `gatsby-plugin-typescript` },
    { resolve: `gatsby-plugin-styled-components` },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown`
      }
    },
    { resolve: `gatsby-transformer-remark` },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mariuzzo`,
        short_name: `Mariuzzo`,
        start_url: `/`,
        background_color: `#202020`,
        theme_color: `#f9f8f8`,
        display: `standalone`,
        icon: `src/images/icon.png`
      }
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
        ignore: [`**/*.styles.(js|ts)?(x)`]
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ['G-BVNP5VG5EZ'],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          head: true,
          respectDNT: true
        }
      }
    }
  ]
}
