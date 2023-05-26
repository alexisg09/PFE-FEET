import { ApolloClient, InMemoryCache } from "@apollo/client";


 const queryClient = new ApolloClient({
    uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cli4np0r22gfo01t996gh7dap/master",
    cache: new InMemoryCache(),
});
  
 
export default queryClient;  