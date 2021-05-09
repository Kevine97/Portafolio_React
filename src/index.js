import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'
import 'jquery/dist/jquery.js'
import 'popper.js/dist/umd/popper'
import 'bootstrap/dist/js/bootstrap.js'
import '../node_modules/animate.css/animate.css'
import AppPrincipal from './AppPrincipal';

ReactDOM.render(
  <React.StrictMode>
    <AppPrincipal />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
