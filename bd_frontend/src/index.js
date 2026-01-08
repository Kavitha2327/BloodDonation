import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/main-component/App/App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/react-modal-video/scss/modal-video.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './css/fontawesome.css';
import './css/custom-animation.css';
import './css/themify-icons.css';
import './css/animate.css';
import './css/style.css';

import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/index";
import { Provider } from "react-redux";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
             <App />
        </PersistGate>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
