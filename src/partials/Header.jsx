import React from "react";

const Header = () => {
  return (
    <div>
      <header className="header">
        <nav className="navbar container">
          <div className="order-0">
            <a href="index.html">
              <img
                src="../../../public/images/logo.svg"
                height="30"
                width="147"
                alt="logo"
              />
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
              <a href="" className="nav-link active">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="about.html" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="blog.html" className="nav-link">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a href="features.html" className="nav-link">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a href="how-it-works.html" className="nav-link">
                How It Works
              </a>
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
                  <a href="career.html" className="nav-dropdown-link">
                    Career
                  </a>
                </li>
                <li className="nav-dropdown-item">
                  <a href="career-single.html" className="nav-dropdown-link">
                    Career Single
                  </a>
                </li>
                <li className="nav-dropdown-item">
                  <a href="integrations.html" className="nav-dropdown-link">
                    Integrations
                  </a>
                </li>
                <li className="nav-dropdown-item">
                  <a
                    href="integration-single.html"
                    className="nav-dropdown-link"
                  >
                    Integration Single
                  </a>
                </li>
                <li className="nav-dropdown-item">
                  <a href="pricing.html" className="nav-dropdown-link">
                    Pricing
                  </a>
                </li>
                <li className="nav-dropdown-item">
                  <a href="changelogs.html" className="nav-dropdown-link">
                    Changelogs
                  </a>
                </li>
                <li className="nav-dropdown-item">
                  <a href="terms-conditions.html" className="nav-dropdown-link">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="contact.html" className="nav-link">
                Contact
              </a>
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
            <a className="btn btn-white btn-sm" href="signin.html">
              Sing Up Now
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
