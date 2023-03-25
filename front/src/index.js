import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import { GoogleOAuthProvider } from '@react-oauth/google';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="29160364349-bk47uk9pra6jq5p2a35k34oh2nvmbe41.apps.googleusercontent.com">
    <BrowserRouter>
      <App />
      </BrowserRouter>
    </GoogleOAuthProvider>

  </React.StrictMode>
);
