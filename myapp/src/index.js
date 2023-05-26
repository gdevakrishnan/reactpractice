import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './assets/index.css'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <header>
      <h1 className='logo'>Sigma ~ Todo</h1>
    </header>
    <section className='app'>
      <App />
    </section>
    <footer>
      <h3 className='credits'>Developed and designed by <span className='company'>Sigma Software Solution</span></h3>
    </footer>
  </StrictMode>
);
