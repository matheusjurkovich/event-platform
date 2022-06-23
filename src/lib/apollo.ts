import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o1s6w104d601xr07wybzww/master',
    cache: new InMemoryCache()
})