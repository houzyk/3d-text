import React from 'react';
import ReactDOM from 'react-dom/client';

import GlobalStyle from './styles/globalStyles';

import App from './hoc/App';
import Header from './hoc/Header';
import Footer from './hoc/Footer';

const main = document.getElementById('root-main') as HTMLElement;
const header = document.getElementById('root-header') as HTMLElement;
const footer = document.getElementById('root-footer') as HTMLElement;

if (main) {
  const mainRoot = ReactDOM.createRoot(main);
  mainRoot.render(
    <React.StrictMode>
      <GlobalStyle />
      <App />
    </React.StrictMode>
  );
}

if (header) {
  const headerRoot = ReactDOM.createRoot(header);
  headerRoot.render(
    <React.StrictMode>
      <GlobalStyle />
      <Header />
    </React.StrictMode>
  );
}

if (footer) {
  const footerRoot = ReactDOM.createRoot(footer);
  footerRoot.render(
    <React.StrictMode>
      <GlobalStyle />
      <Footer />
    </React.StrictMode>
  );
}
