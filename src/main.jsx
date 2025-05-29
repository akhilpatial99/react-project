import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route,RouterProvider,createBrowserRouter } from 'react-router-dom'
import { Layout } from './Layout.jsx'
import Home from './component/Home.jsx'
import About from './component/About.jsx'
import Login from './component/Login.jsx'
import Card from './component/Card.jsx'
import Contact from './component/Contact.jsx'
import Register from './component/register.jsx'



const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    children:[
      {
      path:"/",
      element:<Home/>
      },
      {
        path:"About",
        element:<About/>
      },
      {
       path: "services",
       element:<Card/>
      },
      {
       path: "Contact",
       element:<Contact/>
      },
      {
        path:"Login",
        element:<Login/>
      },
      {
        path:"Register",
        element:<Register/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </StrictMode>,
)
