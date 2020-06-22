require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Lazum Site and Store`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_TOKEN,
      },
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {        
        langKeyDefault: 'en',
        langKeyForNull: 'en',
        prefixDefault: true,
        useLangKeyLayout: false,
      }
    }
  ],
}
