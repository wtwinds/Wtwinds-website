import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center text-white" to="/">
          <span className="fw-bold fs-5">WT Winds</span>
        </Link>

        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link link-light" to="/about">
              <i className="bi bi-building"></i> About
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link link-light" to="/contact">
              <i className="bi bi-envelope"></i> Contact
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link link-light" to="/privacy-policy">
              Privacy Policy
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link link-light" to="/refund-policy">
              Refund Policy
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link link-light" to="/products">
              <i className="bi bi-box-seam"></i> Our Products
            </Link>
          </li>

          <li>
            <Link to="/team" className="nav-link">Our Team</Link>

          </li>

        </ul>
      </div>
    </nav>
  );
}
