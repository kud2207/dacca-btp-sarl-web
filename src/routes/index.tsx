import { createBrowserRouter } from "react-router-dom";
import Acceuil from "../pages";
import Dashboard from "../dashboard/dashboard";

const router = createBrowserRouter([
    {
        path: '',
        element:<Acceuil /> ,
      },
      {
        path: '/dashboard',
        element:<Dashboard /> ,
      },
      
])

export default router;