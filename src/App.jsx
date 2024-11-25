import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./ui/Home";
import Menu, { loader as menuLoader } from "./feactures/menu/Menu";
import Cart from "./feactures/cart/Cart";
import CreateOrder from "./feactures/order/CreateOrder";
import Order from "./feactures/order/Order";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";

//TODO: Router better, or not better but whit objects
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },

      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
      },

      {
        path: "/order/:orderId",
        element: <Order />,
      },
    ],
  },
]);

function App() {
  // const x = 23;

  return <RouterProvider router={router} />;
}

export default App;
