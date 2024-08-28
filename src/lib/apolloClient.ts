// src/lib/apolloClient.ts
import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

// Bypass SSL certificate verification for development (use with caution)
if (process.env.NODE_TLS_REJECT_UNAUTHORIZED === "0") {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
}

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_CRAFT_CMS_URL,
});

const authLink = setContext((_, { headers }) => {
  const token = process.env.NEXT_PUBLIC_CRAFT_CMS_TOKEN;

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  ssrMode: typeof window === "undefined",
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
