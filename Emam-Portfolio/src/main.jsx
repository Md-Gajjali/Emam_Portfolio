import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RoutLayout from './RoutLayout.jsx';
import About from './Componets/About.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: RoutLayout,
    children: [
      { index: true, Component: App },
      {
        path: "/",
        Component: App,
        children: [
          { path: "about", Component: About },
          // { path: "register", Component: Register },
        ],
      },
      // 
    ],
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />,
  </StrictMode>,
)
