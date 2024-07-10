import { Root } from "@/layouts";
import { Home, About, NotFound } from "@/pages";
import "./Layout.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext/ThemeContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/a-propos",
        element: <About />
      }
    ],
    errorElement: <NotFound />
  },
  {
    path: "/*",
    element: <NotFound />,
    errorElement: <NotFound />
  }
]);

const Layout = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default Layout;