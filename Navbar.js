import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-secondary shadow-sm custom-navbar-bottom-rounded">
      <div className="container-fluid">
        <a className="navbar-brand mx-5" href="/">
          Hybrid
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 justify-content-center flex-grow-1">
            <li className="nav-item mx-3">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link active" aria-current="page" href="/">
                Our Products
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link active" aria-current="page" href="/">
                Pricing
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link active" aria-current="page" href="/">
                Check Transaction
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link active" href="/" aria-current="page">
                Update
              </a>
            </li>
          </ul>

          <button type="button" className="btn btn-outline-secondary">
            Login
          </button>
          <button type="button" className="btn btn-primary mx-4">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}
