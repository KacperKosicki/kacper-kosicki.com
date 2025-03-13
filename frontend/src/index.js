import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // Używamy BrowserRouter
import App from './App';

import './styles/global.scss';

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1000,
});

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
