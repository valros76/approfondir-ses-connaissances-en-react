import { Link } from "react-router-dom";
import "./MainNav.css";

const MainNav = () => {
  return(
    <nav>
      <Link to="/" className="main-menu-links">
        Accueil
      </Link>
      <Link to="/a-propos" className="main-menu-links">
        À propos
      </Link>
      <Link to="/futurama" className="main-menu-links">
        Futurama
      </Link>
      <Link to="/citation" className="main-menu-links">
        Citation
      </Link>
      <Link to="/produit" className="main-menu-links">
        Produit
      </Link>
    </nav>
  );
}

export default MainNav;