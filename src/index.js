import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {RouterProvider} from 'react-router-dom';
import './index.css';
import store from './redux/store';
// import reportWebVitals from './reportWebVitals';
import router from "./routes";
import {ThemeProvider} from "@material-tailwind/react";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <ThemeProvider value={{}}>
      <RouterProvider router={router}/>
    </ThemeProvider>
  </Provider>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
