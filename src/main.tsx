import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

import './18n'
import { App } from './App.tsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading data...</div>}>
      <App />
    </Suspense >
  </React.StrictMode>
)
