import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css'


ReactDOM.render(
  <Auth0Provider
    domain="dev-ouflmb5x.us.auth0.com"
    clientId="A3O50VFC3pzhHZlqlVUnUOEz60KUcy9i"
    redirectUri={window.location.origin}>
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);