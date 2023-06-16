import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <Auth0Provider
    domain="dev-zkj0nejknr6g1rua.us.auth0.com"
    clientId="DHdAssA3ZXYG6E9jZJp77vhVrcUtflqL"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
);