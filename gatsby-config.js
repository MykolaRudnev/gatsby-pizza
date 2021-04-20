import dotenv from 'dotenv';

dotenv.config({ paht: '.env' });

export default {
  siteMetadata: {
    title: `Slick Slices`,
    siteUrl: 'https://gatsby.pizza',
    description: 'The best pizza in Lublin!',
    twitter: '@slicksSlices',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      // this is the name of the plagin you are adding
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'w3ebil5w',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
