import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { api } from 'state/api';
// import { configureStore } from '@reduxjs/toolkit';
// import { globalreducer } from 'state';
// import { setupListeners } from '@reduxjs/toolkit/query';
// import store from './store/store';

import ContextProviders from 'providers';
import { Provider } from 'react-redux';
import { store } from 'app/store';

/*
const store = configureStore({
  reducer:  {
    global: globalreducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefault) => getDefault().concat(api.middleware),
})

setupListeners(store.dispatch)
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>   
    <ContextProviders>
    <App />    
    </ContextProviders>     
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
