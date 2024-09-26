import { createBrowserRouter } from "react-router-dom";
import Acceuil from "../pages";
import PageNotFound from "../pages/error/page-not-found";
import IsAccessDashboard from "../pages/error/is-access-dashboard";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Acceuil />,
  },
  {
    path: '/dashboard',
    element: (
      <IsAccessDashboard />
    ),
  },
  {
    path: '*',
    element: <PageNotFound />,
  }
]);

export default router;
