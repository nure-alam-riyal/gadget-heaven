import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Pages/Home/Home";
import Statistics from "./components/Pages/Statistics";
import Dasboard from "./components/Pages/Dasboard";
import Details from "./components/Pages/Details";
import Catsgories from "./components/Pages/Home/catagoris/Catsgories";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children : [
      {
        path:"/",
        loader:()=>fetch('/Products.json'),
        element:<Home></Home>,
        children:[
          {
            path:'/:catagoris',
            loader:()=>fetch('../public/Products.json'),
            element:<Catsgories></Catsgories>

          }
        ]
      },
      {
        path:"/statistics",
        element:<Statistics></Statistics>
      },
      {
        path:"/dashboard",
        element:<Dasboard></Dasboard>
    
    
      },
      {
        path:'/home/:product_id',
        loader:()=>fetch('/Products.json'),
        element:<Details></Details>
      }
    ],
  },
 
]);
export default router;