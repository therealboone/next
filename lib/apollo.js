import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://sandbox.teamcornett.com/next/graphql', // Replace with your WordPress GraphQL endpoint
  }),
  cache: new InMemoryCache(),
});

export default client;
