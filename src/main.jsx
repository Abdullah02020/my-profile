import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import About from "./pages/about.jsx"
import Conecct from "./pages/conecct.jsx"
import Projects from './pages/projects.jsx'
import HomeAR from './pages/HomeAR.jsx'
import AboutAR from './pages/AboutAR.jsx'
import ConecctAR from './pages/conecctAR.jsx'
import PrpjectsAR from './pages/PrpjectsAR.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} 
from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element:   <App />,
  },
  {
    path: "about",
    element:   <About />,
  },

  {
    path: "conecct",
    element:   <Conecct />,
  },

  {
    path: "projects",
    element:   <Projects />,
  },

    {
    path: "AR",
    element:   <HomeAR />,
  },
    {
    path: "AboutAR",
    element:   <AboutAR />,
  },
    {
    path: "conecctAR",
    element:   < ConecctAR/>,
  },
    {
    path: "PrpjectsAR",
    element:   < PrpjectsAR/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
