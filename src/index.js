import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import "./index.css";
import App from "./App";
import { NavigationProvider } from "./contexts/navigation.context";
import { AddEventProvider } from "./contexts/events.context";
import { Provider } from "react-redux";
import store from "./state/store";

const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache(),
});



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            {/* <ApolloProvider client={client}> */}
            <NavigationProvider>
                <AddEventProvider>
                    <App />
                </AddEventProvider>
            </NavigationProvider>
            {/* </ApolloProvider> */}
        </Provider>
    </BrowserRouter>
);
