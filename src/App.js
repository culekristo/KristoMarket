import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Login from "./pages/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
