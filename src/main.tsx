
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import "antd/dist/reset.css";
import React from 'react';
import { SocketProvider } from './api/SocketProvider.tsx';


createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SocketProvider>
      <App />
    </SocketProvider>   
  </React.StrictMode>
)
