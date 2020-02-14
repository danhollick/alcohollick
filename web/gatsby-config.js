module.exports = {
  siteMetadata: {
    title: `alcohollick`,
    description: `Persoal site of Dan Hollick, a Product Designer and amatuer coder from South Africa living in sunny Norway.`,
    author: `dan hollick`,
    url: 'https://www.alcohollick.com', // No trailing slash allowed!
    image:
      'https://cdn.sanity.io/images/h2w4qpx8/production/8c8ab9aff37b358a8db3bf9a6555964b706d8a78-2870x1486.png?h=400&fit=max', // Path to your image you placed in the 'static' folder
    twitterUsername: '@danhollick',
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Designer + Coder`,
        short_name: `alchollick`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#0038FE`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'h2w4qpx8',
        dataset: 'production',
        options: {
          watchMode: true,
          overlayDrafts: true,
        },
        // a token with read permissions is required
        // if you have a private dataset
        // token: process.env.MY_SANITY_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'fonts',
        path: `${__dirname}/src/fonts/`,
      },
    },
    // {
    //   resolve: 'gatsby-transformer-remark',
    //   options: {
    //     plugins: ['@weknow/gatsby-remark-twitter'],
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
