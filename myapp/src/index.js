import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from "./components/App"
import './assets/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App isGoal = { true }/>
  </StrictMode>
);
