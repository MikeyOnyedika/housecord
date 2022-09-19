import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import DMProvider from './contexts/DMProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DMProvider>
      <App />
    </DMProvider>
  </React.StrictMode>
);
