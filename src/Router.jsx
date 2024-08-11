import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Initiation from "./Initiation";
import Initialization from "./Initialization";
import Incantation from "./Incantation";
import Isolation from "./Isolation";
const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {path: "/", element:<Initialization/>},
        {path: "/initiation", element:<Initiation/>},
        {path: "/incantation", element:<Incantation/>},
        {path: "/isolation", element:<Isolation/>},
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;