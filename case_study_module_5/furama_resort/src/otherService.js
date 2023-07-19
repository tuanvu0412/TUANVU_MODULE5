import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.css";
import "./bootstrap.min.css";
import React from 'react';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById("render"));

root.render()(
    <App />
);

reportWebVitals();