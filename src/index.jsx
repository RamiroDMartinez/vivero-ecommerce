import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {firebaseConnections} from './firebase/config'

firebaseConnections()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

