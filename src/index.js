import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { registerLicense } from '@syncfusion/ej2-base';
import StateContextProvider from './Context/ContextProvider';
registerLicense(process.env.REACT_APP_SYNCFUSION_LICENSE_KEY);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StateContextProvider>
        <App />
    </StateContextProvider>
);

reportWebVitals();
