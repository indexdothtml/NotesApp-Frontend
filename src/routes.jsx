import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <p>Hello Home</p>,
  },
  {
    path: "/login",
    element: <p>login page</p>,
  },
]);

export default router;
