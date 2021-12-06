import "./navbar.scss";
import "../../shared/scss/_variables.scss";
import { NavLink } from "react-router-dom";
import { routes } from "../../router/routes";

export const Navbar = () => {
  return (
    <>
      <div className="cont-barra">
        <ul>
          {routes.map(({ to, name, showOnNavBar }) => (
            showOnNavBar &&
            <li>
              <NavLink
                className={({ isActive }) =>
                  "nav-item nav-link " + (isActive ? "clicked-active" : "")
                }
                to={to}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
