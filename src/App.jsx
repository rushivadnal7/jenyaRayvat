import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Products from "./pages/Products"
import Home from "./pages/Home"
import './App.css'


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element : <Home/>
    },
    {
      path: '/products',
      element : <Products/>
    },
    {
      path: '/login',
      element: <Login/>,
    },
    {
      path : '/register',
      element : <Register/>
    }

  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
