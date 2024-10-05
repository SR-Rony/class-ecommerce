import {Suspense, lazy } from 'react'
import { createRoot } from "react-dom/client";
import './index.css'
const App = lazy(()=>import("./App.jsx"))

import { BrowserRouter } from "react-router-dom";
import store from './store'
import { Provider } from 'react-redux'

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Suspense>
      <Provider store={store}>
        <App/>
      </Provider>
    </Suspense>
  </BrowserRouter>
);
