import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import reduxStore from './redux';
import { BrowserRouter } from "react-router-dom";
const {store , persistor} = reduxStore()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} >  
    <BrowserRouter>
       <App />
    </BrowserRouter>
  </Provider>
);

