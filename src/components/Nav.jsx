import "./Nav.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/Context";
import { LoadingAniContext } from "../context/Context";
import DarkLight from "../assets/svg/DarkLight";

const Nav = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { loading, setLoading } = useContext(LoadingAniContext);

  const toggleTheme = () => {
    setTheme((prev) => !prev);
  };

  const loadingAnimation = () => {
    setLoading(true);
  };

  return (
    <nav>
      <NavLink className="links" to="/">
        Schierstein
      </NavLink>
      <NavLink className="links" to="/wiesbaden">
        Wiesbaden
      </NavLink>
      <NavLink className="links" to="/mainz">
        Mainz
      </NavLink>
      <NavLink className="links" to="/frankfurt">
        Frankfurt
      </NavLink>
      <div className="toggle" onClick={toggleTheme}>
        <DarkLight />
      </div>
    </nav>
  );
};

export default Nav;
