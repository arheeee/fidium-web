import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

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
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          globalSets: {
            // This custom policy forces the data to be re-fetched after 1 minute
            read(existing, { args, toReference }) {
              return existing;
            },
            merge(existing, incoming) {
              return incoming;
            },
          },
        },
      },
    },
  }),
});

export default client;
