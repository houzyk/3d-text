import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootDiv = document.getElementById('root') as HTMLDivElement;

if (rootDiv) {
  const root = ReactDOM.createRoot(rootDiv);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}


