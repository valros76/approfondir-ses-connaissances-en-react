import { Outlet } from "react-router-dom";
import {Header, Footer} from "@/layouts";
import MainNav from "@/navigation/MainNav";
import { useContext } from "react";
import { ThemeContext } from "@/contexts/ThemeContext/ThemeContext";
import "./Root.css";

const Root = () => {

  const {darkMode} = useContext(ThemeContext);

  const mainContentClassNames = darkMode ? "main-content darkmode" : "main-content";

  return(
    <main className={mainContentClassNames}>
      <Header/>
      <MainNav/>
      <Outlet/>
      <Footer/>
    </main>
  );
}

export default Root;