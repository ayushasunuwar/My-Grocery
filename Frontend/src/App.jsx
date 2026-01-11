import { createBrowserRouter, RouterProvider } from "react-router-dom"
import  Home  from "./components/Home/Home"
import FruitsAndVeggies from "./components/Category/FruitsAndVeggies"
import Dairy from "./components/Category/Dairy"
import MeatAndSeafood from "./components/Category/MeatAndSeafood"
import AllProducts from "./components/Products/AllProducts"
import Layout from "./components/Layout"


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element:  <Layout/>,
      
      children: [
      {
        path: '/',
        element: <Home/>

      },
      {
      path: '/FruitsAndVeggies',
      element:  <FruitsAndVeggies/>,
    },
     {
      path: '/Dairy',
      element:  <Dairy/>,
    },
    {
      path: '/MeatAndSeafood',
      element: <MeatAndSeafood/>
    },
    {
      path: '/AllProducts',
      element: <AllProducts/>
    }
     ]
    },
  ])

  return (
    <RouterProvider router = {router}/>
  )
}

export default App
