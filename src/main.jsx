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
const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home
      },
      {
        path: "/apps",
        Component: Apps
      },
      {
        path: "/apps/details/:id",
        loader:() => fetch('/allData.json'),
        Component:AppsDetails,
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
