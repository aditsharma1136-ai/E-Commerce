import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
createRoot(document.getElementById('root')).render(
    <Auth0Provider
        domain="dev-30s4qev5isgdnpaf.us.auth0.com"
        clientId="50shpDnXyMaWXZIkV8zjVuUDJHxuRuVz"
        authorizationParams={{ redirect_uri: window.location.origin }}
    >
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Auth0Provider>
)
