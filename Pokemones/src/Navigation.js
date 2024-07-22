import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <header className="mb-3">
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
        <div className="container">
          <span className="navbar-brand" href="#">
            Pokemons
          </span>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link btn btn-link ${isActive ? "active" : ""}`
                }
                to="/"
              >
                Listado
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link btn btn-link ${isActive ? "active" : ""}`
                }
                to="/favoritos"
              >
                Favoritos
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
