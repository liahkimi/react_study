import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import { StrictMode } from 'react';// StrictMode import

// 리덕스를 추가하는 로직
import { legacy_createStore as createStore } from 'redux'
import count from "./redux/modules/count";
import { devToolsEnhancer } from 'redux-devtools-extension'
import { Provider} from 'react-redux'
import font from "./redux/modules/font";

// const store = createStore(count, devToolsEnhancer())
const store = createStore(font, devToolsEnhancer())


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
    <Provider store={store}>
        <App />
    </Provider>
       
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
