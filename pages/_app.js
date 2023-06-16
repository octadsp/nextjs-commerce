import "../styles/globals.css";
import { UserContextProvider } from "../contexts/userContext";
import { QueryClient, QueryClientProvider } from "react-query";

const client = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <QueryClientProvider client={client}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </UserContextProvider>
  );
}

export default MyApp;
