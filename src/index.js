import React from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import ReactDOM from "react-dom";
import './index.css';
import App from "./App";
import CryptoContext from "./CryptoContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <CryptoContext>
    <App />
    </CryptoContext>
  </React.StrictMode>
);

