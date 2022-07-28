import './sass/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ProvideUser } from './services/context/UserState';
import {CookiesProvider} from "react-cookie";
import {Provider} from "react-redux";
import store from "./services/store"; 


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CookiesProvider>
        <ProvideUser>

          <App />
        </ProvideUser>
      </CookiesProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);