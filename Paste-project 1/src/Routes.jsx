import { createBrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pastes from "./pages/Pastes";
import View from "./pages/View";
const Routes = createBrowserRouter([
  { path: "/", element: <Home /> },

  {
    path: "/Pastes",
    element: <Pastes />,
  },
   {
        path: "/Pastes/:id",
        element: <View/>,
      },
      
    ],
  );
export default Routes;
