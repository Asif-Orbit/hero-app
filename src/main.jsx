import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import App from './App';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Home from './Pages/Home/Home';
import Apps from './Pages/Apps/Apps';
import AppsDetails from './Pages/AppsDetails/AppsDetails';
import ErrorAppsPage from './Pages/errorAppsPage/errorAppsPage';
import InstalledAppData from './Components/InstalledAppData/InstalledAppData';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element:<Home></Home>
      },
      {
        path: "/apps",
        element: <Apps></Apps>
      },
      {
        path: '/installation',
        element: <InstalledAppData></InstalledAppData>
      },
      {
        path: "/apps/details/:id",
        loader: () => fetch('/allData.json'),
        element:<AppsDetails></AppsDetails>,
        errorElement: <ErrorAppsPage></ErrorAppsPage>
      }

    ]
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
