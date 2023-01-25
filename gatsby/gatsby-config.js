import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: 'Slicks Slices',
    siteURL: 'https://gatsby.pizza',
    description: 'The best pizza in Zürich',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: '0kkqmo64',
        dataset: 'production',
        watchMode: true,
        apiVersion: '2023-01-20',
        token: process.env.SANITY_TOKEN,
      },
    },
  ]
};
