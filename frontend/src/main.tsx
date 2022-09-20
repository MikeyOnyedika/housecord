import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import DMProvider from './contexts/DMProvider';
import HouseProvider from './contexts/HouseProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HouseProvider>
      <DMProvider>
        <App />
      </DMProvider>
    </HouseProvider>
  </React.StrictMode>
);
