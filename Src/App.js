import ReactDOM from "react-dom/client";
import HeaderComponent from "./Components/HeaderComponent.js";
import BodyComponent from "./Components/BodyComponent.js";
import About from "./Components/About.js";
import Error from "./Components/Error.js";
import Contact from "./Components/Contact";
import RestarauntMenu from "./Components/RestarauntMenu";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import useOnline from "./Constants/useOnline";
import {lazy, Suspense} from "react";

const Instamart =lazy(()=> import("./Components/Instamart"))

const AppLayout = ()=>{

   const Online = useOnline();

 return (!Online) ? (<h1> You are offline! Please check your internet connection....</h1>) : (
    <div>
       <HeaderComponent />
       <Outlet />
    </div>
 )
};

const appRouter = createBrowserRouter([
   {
      path: '/',
      element: <AppLayout />,
      errorElement: <Error />,
      children: [

         {
            path: '/About',
            element: <About/>
         },
         {
            path:'/',
            element: <BodyComponent />
         },
         {
            path:'/Contact',
            element:<Contact />
         }
         ,{
            path:'/restaraunt/:id',
            element:<RestarauntMenu />
         },
         {
            path:'/Instamart',
            element: (<Suspense fallback={<h1>...Loading</h1>}>
               <Instamart />
            </Suspense>)
         }
      ]  
   },

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>)