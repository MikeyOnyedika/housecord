import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import DMProvider from './contexts/DMProvider';
import HouseProvider from './contexts/HouseProvider';
import MeProvider from './contexts/MeProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MeProvider>
      <HouseProvider>
        <DMProvider>
          <App />
        </DMProvider>
      </HouseProvider>
    </MeProvider>
  </React.StrictMode>
);
