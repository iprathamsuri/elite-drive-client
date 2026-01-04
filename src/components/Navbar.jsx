import "./Navbar.css";
import logo from "../assets/logo.png";
import { FaSearch } from "react-icons/fa";


export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="CarRental Logo" className="logo-img" />
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Cars</li>
        <li>My Bookings</li>
      </ul>

      <div className="nav-right">
        {/* SEARCH BOX */}
        <div className="search-boxx">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search cars"
            className="search-input"
          />
        </div>

        <span className="list-cars">List cars</span>
        <button className="login-btn">Login</button>
      </div>

    </nav>
  );
}
