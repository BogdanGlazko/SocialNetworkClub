import React from "react";
import ReactDOM from "react-dom/client";
import './index.module.css';
import App from './App';
import {Provider} from "react-redux";
import {store} from "./store/reduxToolkit";
import {BrowserRouter, HashRouter} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <Provider store={store}>
        {/*<React.StrictMode>*/}
        {/*    <BrowserRouter>*/}
        <HashRouter>
            <App/>
        </HashRouter>
            {/*</BrowserRouter>*/}
        {/*</React.StrictMode>*/}
    </Provider>
);

