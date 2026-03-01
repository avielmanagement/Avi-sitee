import React from 'react';
import ReactDOM from 'react-dom/client';
// App lives at the project root. The previous path had a typo ("scr").
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
