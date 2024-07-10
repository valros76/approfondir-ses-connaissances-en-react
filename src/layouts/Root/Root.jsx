import { Outlet } from "react-router-dom";
import {Header, Footer} from "@/layouts";
import MainNav from "@/navigation/MainNav";
import { useContext } from "react";
import { ThemeContext } from "@/contexts/ThemeContext/ThemeContext";
import "./Root.css";

const Root = () => {
  return(
    <>
      <Header/>
      <MainNav/>
      <Outlet/>
      <Footer/>
    </>
  );
}

export default Root;