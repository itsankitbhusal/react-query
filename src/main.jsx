import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// react query
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

// toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2, // make api calls for 2 times, default is 3
      retryDelay: 1000 * 60 * 0.05,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      staleTime: 1000 * 60 * 2,
      cacheTime: 1000 * 60 * 5
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <App />
      <ToastContainer />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
