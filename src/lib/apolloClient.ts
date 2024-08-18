import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

/* 
  This is the Apollo configuration file for connecting to craftcms GraphQL api endpoint
  Update or confirm your url paths in the .env to fetch data appropriately
*/

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_CRAFT_CMS_URL
});

const authLink = setContext((_, { headers }) => {
  const token = process.env.NEXT_PUBLIC_CRAFT_CMS_TOKEN;

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;