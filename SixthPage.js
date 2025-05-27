import React from 'react';
import './SixthPage.css'; // Import the CSS file for custom styling

export default function FifthPage() {
  return (
    <footer className="footer-section py-5 bg-white text-muted"> {/* py-5 for vertical padding, bg-white for background, text-muted for default text color */}
      <div className="container">
        <div className="row g-4 mb-5"> {/* g-4 for gutter spacing, mb-5 for margin below this section */}

          {/* Column 1: Products */}
          <div className="col-6 col-md-3"> {/* 6/12 width on small, 3/12 on medium+ */}
            <h5 className="fw-bold text-dark mb-3">Products</h5> {/* fw-bold for bold title, text-dark for dark color, mb-3 for margin */}
            <ul className="list-unstyled"> {/* list-unstyled removes default list styling */}
              <li className="mb-2"><a href="/" className="text-muted text-decoration-none">Booking Engine</a></li> {/* mb-2 for margin below each list item, text-decoration-none removes underline */}
              <li className="mb-2"><a href="/" className="text-muted text-decoration-none">Channel Manager</a></li>
              <li className="mb-2"><a href="/" className="text-muted text-decoration-none">Central Reservation</a></li>
            </ul>
          </div>

          {/* Column 2: Company */}
          <div className="col-6 col-md-3">
            <h5 className="fw-bold text-dark mb-3">Company</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="/" className="text-muted text-decoration-none">About Us</a></li>
              <li className="mb-2"><a href="/" className="text-muted text-decoration-none">Our Team</a></li>
              <li className="mb-2"><a href="/" className="text-muted text-decoration-none">Partner With Us</a></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="col-6 col-md-3">
            <h5 className="fw-bold text-dark mb-3">Resources</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="/" className="text-muted text-decoration-none">Support Center</a></li>
              <li className="mb-2"><a href="/" className="text-muted text-decoration-none">Blog</a></li>
              <li className="mb-2"><a href="/" className="text-muted text-decoration-none">Customer Service</a></li>
            </ul>
          </div>

          {/* Column 4: E-Newsletters */}
          <div className="col-12 col-md-3"> {/* Takes full width on small, 3/12 on medium+ */}
            <h5 className="fw-bold text-dark mb-3">E-Newsletters</h5>
            <div className="input-group mb-3"> {/* Bootstrap input group for input and button */}
              <input 
                type="email" 
                className="form-control" 
                placeholder="Email" 
                aria-label="Email"
              />
            </div>
            <button type="button" className="btn btn-primary w-100">Get Newsletters</button> {/* w-100 makes button full width */}
          </div>

        </div> {/* End of row */}

        {/* Horizontal Divider Line */}
        <hr className="my-4" /> {/* my-4 adds vertical margin */}

        {/* Bottom Bar: Copyright and Legal Links */}
        <div className="footer-bottom d-flex flex-column flex-md-row justify-content-between align-items-center pt-3">
          <p className="mb-2 mb-md-0">&copy; 2024 Hybrid Booking Engine, Inc. All rights reserved.</p> {/* mb-2 for margin on small screens, mb-md-0 removes it on medium+ */}
          <div>
            <a href="/" className="text-muted text-decoration-none me-3">FAQ's</a> {/* me-3 for margin-right */}
            <a href="/" className="text-muted text-decoration-none">Term & Conditions</a>
          </div>
        </div>

      </div> {/* End of container */}
    </footer>
  );
}