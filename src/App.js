import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import React, { useState, useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Auth } from 'aws-amplify';

import Home from "./pages/home";
import About from "./pages/about";
import Login from "./pages/login";

import Market from './pages/market';

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

const routerMain = createBrowserRouter([
  {
    path: "/",
    element: <Market />
  },
  {
    path: "/market",
    element: <Market />
  },
]);

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkUser();
  }, []);

  async function checkUser() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      setUser(user);
    } catch (error) {
      setUser(null);
    }
  }

  return (
    console.log(user),

    <div>
      {user ? (
        <RouterProvider router={router} />
      ) : (
        <RouterProvider router={routerMain} />
      )}
    </div>
  );
}

export default App;
