import React from 'react';
import ReactDOM from 'react-dom';
import Apps from './Apps';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Apps />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
