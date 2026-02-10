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

        </ul>
      </div>
    </nav>
  );
}


// <li className="nav-item">
//             <NavLink className="nav-link" to="/about">
//               <i className="bi bi-building me-1"></i>
//               About
//             </NavLink>
//           </li>

//           <li className="nav-item">
//             <NavLink className="nav-link" to="/privacy-policy">
//               <i className="bi bi-shield-lock me-1"></i>
//               Privacy Policy
//             </NavLink>
//           </li>

//           <li className="nav-item">
//             <NavLink className="nav-link" to="/refund-policy">
//               <i className="bi bi-arrow-counterclockwise me-1"></i>
//               Refund Policy
//             </NavLink>
//            </li> 
