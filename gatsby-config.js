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
        name: `markdown-pages`,
        path: `${__dirname}/src/blog/cancer`
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
    }
  ]
}
