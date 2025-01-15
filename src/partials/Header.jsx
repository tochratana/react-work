import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="header">
        <nav className="navbar container">
          <div className="order-0">
            <a href="index.html">
              <img
                src="../../../public/images/logos.svg"
                className="w-[63px]"
                alt="logo"
              />
              {/* height="30"
              width="147" */}
            </a>
          </div>
          <input id="nav-toggle" type="checkbox" className="hidden" />
          <label
            id="show-button"
            htmlFor="nav-toggle"
            className="order-1 flex cursor-pointer items-center lg:order-1 lg:hidden"
          >
            <svg className="h-6 fill-current" viewBox="0 0 20 20">
              <title>Menu Open</title>
              <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z"></path>
            </svg>
          </label>
          <label
            id="hide-button"
            htmlFor="nav-toggle"
            className="order-2 hidden cursor-pointer items-center lg:order-1"
          >
            <svg className="h-6 fill-current" viewBox="0 0 20 20">
              <title>Menu Close</title>
              <polygon
                points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
                transform="rotate(45 10 10)"
              ></polygon>
            </svg>
          </label>
          <ul
            id="nav-menu"
            className="navbar-nav order-2 hidden w-full flex-[0_0_100%] lg:order-1 lg:flex lg:w-auto lg:flex-auto lg:justify-center lg:space-x-5"
          >
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-link">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/features" className="nav-link">
                Features
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/how-it-work" className="nav-link">
                How It Works
              </Link>
            </li>
            <li className="nav-item nav-dropdown group relative">
              <span className="nav-link inline-flex items-center">
                Pages
                <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </span>
              <ul className="nav-dropdown-list hidden group-hover:block lg:invisible lg:absolute lg:block lg:opacity-0 lg:group-hover:visible lg:group-hover:opacity-100">
                <li className="nav-dropdown-item">
                  <Link to="/career" className="nav-dropdown-link">
                    Career
                  </Link>
                </li>
                <li className="nav-dropdown-item">
                  <Link to="/career-single" className="nav-dropdown-link">
                    Career Single
                  </Link>
                </li>
                <li className="nav-dropdown-item">
                  <a href="integrations.html" className="nav-dropdown-link">
                    Integrations
                  </a>
                </li>
                <li className="nav-dropdown-item">
                  <Link
                    to="/page/intergration-single"
                    className="nav-dropdown-link"
                  >
                    Integration Single
                  </Link>
                </li>
                <li className="nav-dropdown-item">
                  <Link to="/page/pricing" className="nav-dropdown-link">
                    Pricing
                  </Link>
                </li>
                <li className="nav-dropdown-item">
                  <Link to="/page/changelogs" className="nav-dropdown-link">
                    Changelogs
                  </Link>
                </li>
                <li className="nav-dropdown-item">
                  <Link to="/page/term-condition" className="nav-dropdown-link">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
            <li className="nav-item mt-3.5 lg:hidden">
              <a
                className="btn btn-white btn-sm border-border"
                href="signin.html"
              >
                Sing Up Now
              </a>
            </li>
          </ul>
          <div className="order-1 ml-auto hidden items-center md:order-2 md:ml-0 lg:flex">
            <Link className="btn btn-white btn-sm" to="/signup">
              Sing Up Now
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
