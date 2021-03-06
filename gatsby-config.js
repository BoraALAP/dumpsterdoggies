let contentfulConfig
try {
  contentfulConfig = require('./.contentful')
} catch (e) {
  contentfulConfig = {
    production: {
      spaceId: process.env.SPACE_ID,
      accessToken: process.env.ACCESS_TOKEN,
    },
  }
} finally {
  const { spaceId, accessToken } = contentfulConfig.production
  if (!spaceId || !accessToken) {
    throw new Error('Contentful space ID and access token need to be provided.')
  }
}

module.exports = {
  siteMetadata: {
    title: 'Dumpster Doggies',
    description:
      'We are volunteers who work hard to help the strays doggies on our spare time. We provide food, medication and shelter to stray dogs in the Kastamonu area. We will will use every bit of our energy and and every penny you give us to support the doggies. Take action and support us today!',
    siteUrl: 'https://dumpsterdoggies.com/',
    image: '/src/assets/images/favicon.svg',
    menuLinks: [
      {
        name: 'Home',
        slug: '/',
      },
      {
        name: 'About',
        slug: '/about/',
      },
      {
        name: 'Adopt',
        slug: '/adopt/',
      },
      {
        name: 'Blog',
        slug: '/blog/',
      },
      {
        name: 'Contact',
        slug: '/contact/',
      },
      {
        name: 'Spenden',
        slug: '/spenden/',
      },
      {
        name: 'Sponsor a Doggie',
        slug: '/sponsor/',
      },
      {
        name: 'Volunteer',
        slug: '/volunteer/',
      },
    ],
    postsPerFirstPage: 7,
    postsPerPage: 6,
    basePath: '/',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: '/assets/icons/', // See below to configure properly
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/assets/images`,
        name: 'images',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-transition-link',
      options: {
        layout: require.resolve(`./src/components/Layout.tsx`),
      },
    },
    'gatsby-plugin-react-helmet',

    `gatsby-plugin-catch-links`,
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',

    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Raleway:400,500,600', 'Zilla Slab:500,600,700'],
        },
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
          },
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              maxWidth: 650,
              backgroundColor: 'white',
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options:
        process.env.NODE_ENV === 'development'
          ? contentfulConfig.development
          : contentfulConfig.production,
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS,
        head: true,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'DumpsterDoggies',
        short_name: 'DumpsterDoggies',
        start_url: '/',
        background_color: '#f9f7f6',
        theme_color: '#076D8D',
        display: 'minimal-ui',
        icon: './src/assets/images/favicon.svg',
      },
    },
    {
      resolve: `gatsby-plugin-schema-snapshot`,
      options: {
        path: `./src/gatsby/schema/schema.gql`,
        update: process.env.GATSBY_UPDATE_SCHEMA_SNAPSHOT,
      },
    },
  ],
}
