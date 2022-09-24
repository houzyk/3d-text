import React from 'react';
import ReactDOM from 'react-dom/client';

import GlobalStyle from './styles/globalStyles';

import App from './hoc/App';
import Header from './hoc/Header';
import Footer from './hoc/Footer';
declare global {
  namespace JSX {
    interface IntrinsicElements {
      textGeometry: any;
    }
  }
}

const renderComponentIntoElement = (selector: string, Component: any) => {
  const element = document.getElementById(selector) as HTMLElement;
  if (element) {
    const root = ReactDOM.createRoot(element);
    root.render(
      <React.StrictMode>
        <GlobalStyle />
        <Component/>
      </React.StrictMode>
    );
  }
}

renderComponentIntoElement('root-main', App);
renderComponentIntoElement('root-header', Header);
renderComponentIntoElement('root-footer', Footer);
