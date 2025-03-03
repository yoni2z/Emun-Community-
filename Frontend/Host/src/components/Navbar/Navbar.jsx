import React, { useState, useEffect } from "react";
import "./styles.css";
import Logo from "../../assets/Navbar/emun.png";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= 0) {
        // Prevent further scrolling downward
        window.scrollTo(0, 0);
      } else if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar-container ${scrolled ? "scrolled" : ""}`}>
      {/* Logo Section */}
      <div className="navbar-logo">
        <a href="/" onClick={closeMenu}>
          <img src={Logo} alt="Hope Foundation" />
        </a>
      </div>
      {/* Menu Icon */}
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <GiHamburgerMenu color="white" />}
      </div>
      {/* Navbar Links */}
      <div className={`navbar-links ${menuOpen ? "show" : ""}`}>
        <ul className="links-only">
          <li>
            <Link to="/" onClick={closeMenu}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="/about-us" onClick={closeMenu}>
              ABOUT US
            </Link>
          </li>
          <li>
            <Link
              to="/ourwork
            "
              onClick={closeMenu}
            >
              OUR WORK
            </Link>
          </li>
          {/* <li>
            <Link to="/gallery" onClick={closeMenu}>
              GALLERY
            </Link>
          </li> */}
          <li className="navbar-dropdown">
            <div
              className="navbar-dropdown-toggle"
              onClick={toggleDropdown}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => e.key === "Enter" && toggleDropdown()}
            >
              PAGES <IoIosArrowDown />
            </div>
            {dropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <Link
                    to="/blogs"
                    className="dropdown-item"
                    onClick={closeMenu}
                  >
                    BLOGS
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gallery"
                    className="dropdown-item"
                    onClick={closeMenu}
                  >
                    GALLERY
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Register"
                    className="dropdown-item"
                    onClick={closeMenu}
                  >
                    REGISTER
                  </Link>
                </li>
                {/* <li>
                  <Link
                    to="/registration"
                    className="dropdown-item"
                    onClick={closeMenu}
                  >
                    REGISTRATION FORM
                  </Link>
                </li> */}
                {/* <li>
                  <Link
                    to="/soon"
                    className="dropdown-item"
                    onClick={closeMenu}
                  >
                    COMING SOON
                  </Link>
                </li> */}
                {/* <li>
                  <Link to="/404" className="dropdown-item" onClick={closeMenu}>
                    404 PAGE
                  </Link>
                </li> */}
              </ul>
            )}
          </li>
          {/* <li>
            <Link to="/blogs" onClick={closeMenu}>
              BLOGS
            </Link>
          </li> */}
          {/* <li>
            <Link to="/causes" onClick={closeMenu}>
              CAUSES
            </Link>
          </li> */}
          <li>
            <Link to="/contacts" onClick={closeMenu}>
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
      <Link to="/donate" className="donate-btn" onClick={closeMenu}>
        DONATE
      </Link>
    </div>
  );
};

export default Navbar;
