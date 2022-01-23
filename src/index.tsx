import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./components/app/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, ApolloProvider } from "@apollo/client";
import { cache } from "./graphql/cache";
const client = new ApolloClient({
  uri: "https://crwn-clothing.com/",
  cache: cache,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
