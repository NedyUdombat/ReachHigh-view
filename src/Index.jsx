import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import Router from './Router';
import store from './store/store';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'react-toastify/dist/ReactToastify.min.css';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Router />
      <ToastContainer />
    </Provider>
  </BrowserRouter>,
  document.getElementById('app'),
);
