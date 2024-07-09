import {Header, Footer} from "@/layouts";
import {Home, About} from "@/pages";
import "./Layout.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home/>
  },
  {
    path:"/a-propos",
    element: <About/>
  }
]);

const Layout = () => {
    return(
    <>
      <Header/>
      <RouterProvider router={router}/>
      <Footer/>
    </>
  );
}

export default Layout;