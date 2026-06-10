import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'react-loading-skeleton/dist/skeleton.css'

import { Auth0Provider } from "@auth0/auth0-react";


createRoot(document.getElementById('root')).render(
  
   <Auth0Provider
      domain="dev-kxlfbs4g86cmx7be.us.auth0.com"
      clientId="LOAddtxDA3Z0Bz8kYFepxzfNZgifMD6V"
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <App />
    </Auth0Provider>
  
)
