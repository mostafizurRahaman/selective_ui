import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Page/Home/Home";



const routes = createBrowserRouter([
   {
    path: '/', 
    element: <Main></Main>, 
    children: [
      {
         path: '/', 
         element: <Home></Home>
      }, 
      {
         path: '/home', 
         element: <Home></Home>
      }, 
      
    ]
   }
])


export default routes; 