/* eslint-disable no-undef */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.mariuzzo.com`,
    title: `Mariuzzo`,
    description: `Experience on programming and lymphoma.`,
    keywords: [`Code`, `Lymphoma`, `Blog`, `Rubens`, `Mariuzzo`],
    author: `Rubens Mariuzzo`
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
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: `language-`,
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              languageExtensions: [],
              prompt: {
                user: `root`,
                host: `localhost`,
                global: false
              },
              escapeEntities: {}
            }
          }
        ]
      }
    },
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
        pluginConfig: {
          head: true,
          respectDNT: true
        }
      }
    }
  ]
}
