import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import About from './components/About.jsx'
import Navbar from './components/NavBar.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <><App/></>,
  },
  {
    path: "/about",
    element: <><Navbar/><About/></>,
  },
  //the <App/> component is given a key so that react re-mounts the app component and change the results in real time, if category is changed. Else you will have to reload the page to get news of another category.
  {
    path: "/entertainment",
    element: <><App key={"entertainment"} category={"entertainment"}/></>,
  },
  {
    path: "/sports",
    element: <><App key={"sports"} category={"sports"}/></>,
  },
  {
    path: "/technology",
    element: <><App key={"technology"} category={"technology"}/></>,
  },
  {
    path: "/business",
    element: <><App key={"business"} category={"business"}/></>,
  },
  {
    path: "/general",
    element: <><App key={"general"} category={"general"}/></>,
  },
  {
    path: "/health",
    element: <><App key={"health"} category={"health"}/></>,
  },
  {
    path: "/science",
    element: <><App key={"science"} category={"science"}/></>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
