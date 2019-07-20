import React from "react";
import "./config/ReactotronConfig";

import { Provider } from "react-redux";
import store from "./store/index";

import Routes from "./routes";

console.tron.log({ Hello: "world" });

const App = () => (
    <Provider store={store}>
        <Routes />
    </Provider>
);

export default App;
