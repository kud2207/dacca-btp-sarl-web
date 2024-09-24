import { createBrowserRouter } from "react-router-dom";
import Acceuil from "../pages";
import Dashboard from "../dashboard/home/dashboard";
import PageNotFound from "../pages/error/page-not-found";

const router = createBrowserRouter([
    {
        path: '',
        element:<Acceuil /> ,
      },
      {
        path: '/dashboard',
        element:<Dashboard /> ,
      },
      {
        path:"*",
        element:<PageNotFound />
      }
      
])

export default router;