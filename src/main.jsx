import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from './Component/Root/Root.jsx';
import Home from './Pages/Home/Home.jsx';
import About from './Pages/About/About.jsx';
import Skill from './Pages/Skill/Skill.jsx';
import Service from './Pages/Service/Service.jsx';
import Portfolio from './Pages/Portfolio/Portfolio.jsx';
import Contact from './Pages/Contact/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/", 
    element: <Root/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/skill",
        element: <Skill/>
      },
      {
        path:'/service',
        element: <Service/>
      },
      {
        path:'/portfolio',
        element: <Portfolio/>
      },
      {
        path:'/contact',
        element: <Contact/>
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
