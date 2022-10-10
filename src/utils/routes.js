import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Main from "../components/Main"
import About from "../components/About";
import ErrorPage from "../components/ErrorPage";
import Shop from "../components/Shop";
import Cart from "../components/Cart";

const router = createBrowserRouter([{
    path:'/',
    element:<Main/>,
    errorElement:<ErrorPage/>,
    loader: ()=> fetch ('products.json'),
    children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'home',
            element:<Home/>
        },
        {
            path:'about',
            element:<About/>
        },
        {
            path:'shop',
            element:<Shop/>,
        },
        {
            path:'cart',
            element:<Cart/>
        }
    ]
  }])
  export default router