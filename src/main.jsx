import {Suspense, lazy } from 'react'
import { createRoot } from "react-dom/client";
import './index.css'
const App = lazy(()=>import("./App.jsx"))

import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
  <Suspense>
    <App/>
  </Suspense>
  </BrowserRouter>
);
