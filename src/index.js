// import React from 'react';
// import ReactDOM from 'react-dom/client';

//* Añadimos bootstrap a nuestro proyecto
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
//! Importante: Los estilos propios deben ir debajo de los de bootstrap para que no genere conflictos



import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import AppRoutingFinal from './AppRoutingFinal.js';
import reportWebVitals from './reportWebVitals';
import AppRoutingOne from './AppRoutingOne.js';
import AppRoutingExercise from './AppRoutingExercise.js';

const root = document.getElementById("root");
render(<AppRoutingExercise/>, root);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
