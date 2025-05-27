import React from 'react';
import './SecondPage.css'; // Make sure you create this file for the background image and other custom styles

export default function SecondPage() {
  return (
    // Main container for the entire SecondPage section
    // Added text-center for top elements, mx-auto for horizontal centering of the div itself,
    // and py-5 for top/bottom padding to give space.
    <div className='SecondPage text-center mx-auto py-5'>

      {/* Top Section: "Our Amazing Products" Button, Heading, and Description */}
      {/* Centered by text-center on parent div */}
      <button type="button" className="btn btn-light mb-4 rounded-pill px-4">
        Our Amazing Products
      </button>

      <h1 className='display-3 fw-semibold mb-3 text-dark'>
        Book Your Dream Stay in Just a Click
      </h1>

      {/* w-75 mx-auto to limit width and center this paragraph */}
      <p className='fs-5 mb-5 w-75 mx-auto text-dark'>
        Focus on your guest and have our automated systems do the work for you
      </p>

      {/* Cards Section: Using Bootstrap Grid */}
      <div className="container">
        {/* Adjusted row-cols-lg-3 for 3 columns on large screens
            and g-4 for consistent gutter spacing */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">

          {/* Card 1: Hybrid Booking Engine (Now Light, like the others) */}
          <div className="col">
            {/* CHANGED: bg-dark, text-white, shadow-lg, custom-dark-card removed.
                       bg-white, shadow-sm added. */}
            <div className="card h-100 bg-white rounded-4 shadow-sm">
              <div className="card-body p-4 d-flex flex-column">
                <h4 className="card-title fw-bold mb-2">Hybrid Booking Engine</h4>
                {/* CHANGED: text-white-50 to text-muted */}
                <p className="card-text text-muted mb-4 fs-6">
                  Grow Profit with Direct bookings on your website
                </p>

                {/* CHANGED: btn-primary to btn-outline-secondary */}
                <button type="button" className="btn btn-outline-secondary rounded-pill w-75 mx-auto mb-4">
                  Get Started
                </button>

                <ul className="list-unstyled flex-grow-1">
                  <li className="d-flex align-items-center mb-2">
                    {/* CHANGED: text-white to text-primary */}
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    Lorem ipsum dolor sit amet
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    {/* CHANGED: text-white to text-primary */}
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    Sed ut perspiciatis unde omnis iste
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    {/* CHANGED: text-white to text-primary */}
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    totam rem aperiam, eaque ipsa quae
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    {/* CHANGED: text-white to text-primary */}
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    totam rem aperiam, eaque ipsa quae
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    {/* CHANGED: text-white to text-primary */}
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    totam rem aperiam, eaque ipsa quae
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 2: Hybrid Channel Manager (Remains Light Card) */}
          <div className="col">
            <div className="card h-100 bg-white rounded-4 shadow-sm">
              <div className="card-body p-4 d-flex flex-column">
                <h4 className="card-title fw-bold mb-2">Hybrid Channel Manager</h4>
                <p className="card-text text-muted mb-4 fs-6">
                  Be Visible on top bookings sites to bring more guests
                </p>

                <button type="button" className="btn btn-outline-secondary rounded-pill w-75 mx-auto mb-4">
                  Get Started
                </button>

                <ul className="list-unstyled flex-grow-1">
                  <li className="d-flex align-items-center mb-2">
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    Lorem ipsum dolor sit amet sit
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    Lorem ipsum dolor sit amet ipsum
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    Lorem ipsum dolor sit amet
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    Lorem ipsum dolor sit amet dolor
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    Lorem ipsum dolor sit amet
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 3: Central Reservation (Remains Light Card) */}
          <div className="col">
            <div className="card h-100 bg-white rounded-4 shadow-sm">
              <div className="card-body p-4 d-flex flex-column">
                <h4 className="card-title fw-bold mb-2">Central Reservation</h4>
                <p className="card-text text-muted mb-4 fs-6">
                  One Platform for manage everything you need
                </p>

                <button type="button" className="btn btn-outline-secondary rounded-pill w-75 mx-auto mb-4">
                  Get Started
                </button>

                <ul className="list-unstyled flex-grow-1">
                  <li className="d-flex align-items-center mb-2">
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    Lorem ipsum dolor sit amet
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    Lorem ipsum dolor sit amet ipsum
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    Lorem ipsum dolor sit amet dolor
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    Lorem ipsum dolor sit amet
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    Lorem ipsum dolor sit amet
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div> {/* End of row */}
      </div> {/* End of container */}

    </div> // End of SecondPage main div
  );
}