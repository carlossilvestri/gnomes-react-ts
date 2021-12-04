import "./navbar.scss";
import logo from "../../../logo.svg";
import "../../shared/scss/_variables.scss";
import { Link, NavLink, useNavigate } from "react-router-dom";

export const Navbar = () => {
  //   const navigate = useNavigate();

  //   const handleLogout = () => {
  //     navigate("/login", {
  //       replace: true,
  //     });
  //   };
  return (
    <>
      <div className="cont-barra">
        <ul>
          <li>
            <NavLink
              className={({ isActive }) =>
                "nav-item nav-link " + (isActive ? "clicked-active" : "")
              }
              to="/home"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                "nav-item nav-link " + (isActive ? "clicked-active" : "")
              }
              to="/gnomes"
            >
              Gnomes
            </NavLink>
          </li>
          <li>
          <NavLink
              className={({ isActive }) =>
                "nav-item nav-link " + (isActive ? "clicked-active" : "")
              }
              to="/search"
            >
              Search
            </NavLink>
          </li>
          <li>
          <NavLink
              className={({ isActive }) =>
                "nav-item nav-link " + (isActive ? "clicked-active" : "")
              }
              to="/about"
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};
