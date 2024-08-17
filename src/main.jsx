import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './components/AddCoffee/AddCoffee.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('http://localhost:5000/coffee')
  },
  {
    path: 'addCoffee',
    element: <AddCoffee></AddCoffee>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='max-w-6xl mx-auto p-4'>
      <RouterProvider router={router} />
    </div>
  </StrictMode>,
)
