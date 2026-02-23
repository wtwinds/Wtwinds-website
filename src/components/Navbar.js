import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">
        <NavLink className="navbar-brand fw-bold fs-5" to="/">
          WT Winds
        </NavLink>

        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">
              <i className="bi bi-envelope me-1"></i>
              Contact
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/products">
              <i className="bi bi-box-seam me-1"></i>
              Our Products
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/team">
              <i className="bi bi-people me-1"></i>
              Our Team
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/join-team">
              <i className="bi bi-person-plus me-1"></i> Join Team
            </NavLink>
          </li>

        </ul>
      </div>
    </nav>
  );
}


