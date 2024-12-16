import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './components/AddCoffee/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee/UpdateCoffee.jsx';
import CoffeeDetails from './components/CoffeeDetails/CoffeeDetails.jsx';
import SignIn from './components/AddCoffee/Signin/SignIn.jsx';
import SignUp from './components/SignUp/SignUp.jsx';
import AuthProvider from './Provider/AuthProvider/AuthProvider.jsx';
import Users from './components/Users/Users.jsx';
import Features from './components/Features/Features.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    // element: <App></App>,
    // loader: () => fetch('http://localhost:5000.app/coffee')
    element: <p>Home page</p>,
  },
  {
    path: 'addCoffee',
    element: <AddCoffee></AddCoffee>
  },
  {
    path: 'updateCoffee/:id',
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) => fetch(`http://localhost:5000.app/coffee/${params.id}`)
  },
  {
    path: 'coffeeDetails/:id',
    element: <CoffeeDetails></CoffeeDetails>,
    loader: ({ params }) => fetch(`http://localhost:5000.app/coffee/${params.id}`)
  },
  {
    path: '/signin',
    element: <SignIn></SignIn>,
  },
  {
    path: '/signup',
    element: <SignUp></SignUp>,
  },
  {
    path: '/users',
    element: <Users></Users>,
    loader: () => fetch('http://localhost:5000.app/user')
  },
  {
    path: '/features',
    element: <Features></Features>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='max-w-6xl mx-auto my-12'>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  </StrictMode>,
)
