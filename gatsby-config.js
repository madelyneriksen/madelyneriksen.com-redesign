module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-json',
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './content/',
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Lato', 'Karla']
        }
      }
    },
  ]
}
