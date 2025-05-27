import React from 'react';
// Make sure you have Bootstrap CSS and Bootstrap Icons CSS linked in your project
// e.g., in public/index.html:
// <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
// import './TestimonialsSection.css'; // Optional: for custom styles like the dots

export default function TestimonialsSection() {
  return (
    <section className="testimonials-section py-5 bg-light"> {/* Added bg-light for the section background */}
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          {/* Small "Testimonials" text */}
          <small className="text-primary fw-bold text-uppercase">Testimonials</small>
          {/* Main Heading */}
          <h2 className="display-4 fw-bold mt-2">What our Client Say About Us</h2>
          {/* Subtitle/Description */}
          <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
            Hear from our clients: Real stories of success and satisfaction with HybridBooking
          </p>
        </div>

        {/* Testimonial Cards Row */}
        <div className="row justify-content-center g-4"> {/* g-4 for gutter spacing */}

          {/* Testimonial Card 1 */}
          <div className="col-12 col-md-6"> {/* Full width on small, half width on medium+ */}
            <div className="card h-100 p-4 rounded-4 shadow-sm border-0"> {/* h-100 for equal height, p-4 for padding, rounded-4, shadow-sm, border-0 for no default border */}
              <div className="card-body">
                {/* Client Logo and Name/Date Header */}
                <div className="d-flex align-items-center mb-3">
                  {/* <img src="/path/to/rocky-logo.png" alt="Rocky Fast Cruise Logo" className="me-3" style={{ width: '60px', height: 'auto' }} /> Adjust path */}
                  <div>
                    <h5 className="mb-0">
                      <i className="bi bi-check-circle-fill text-primary me-1"></i> {/* Check icon */}
                      Rocky Fast Cruise
                    </h5>
                    <small className="text-muted">10 Feb 2024</small>
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="card-text text-dark">
                  This company excels with an intuitive user interface, cutting-edge technology, and service flexibility. Responsive customer service and high data security make the Hybrid Booking Engine an outstanding choice for an efficient booking experience.
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial Card 2 */}
          <div className="col-12 col-md-6"> {/* Full width on small, half width on medium+ */}
            <div className="card h-100 p-4 rounded-4 shadow-sm border-0">
              <div className="card-body">
                {/* Client Logo and Name/Date Header */}
                <div className="d-flex align-items-center mb-3">
                  {/* <img src="/path/to/bni-logo.png" alt="BNI Logo" className="me-3" style={{ width: '60px', height: 'auto' }} /> Adjust path */}
                  <div>
                    <h5 className="mb-0">
                      <i className="bi bi-check-circle-fill text-primary me-1"></i>
                      BNI Indonesia
                    </h5>
                    <small className="text-muted">17 March 2024</small>
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="card-text text-dark">
                  This company excels with an intuitive user interface, cutting-edge technology, and service flexibility. Responsive customer service and high data security make the Hybrid Booking Engine an outstanding choice for an efficient booking experience.
                </p>
              </div>
            </div>
          </div>

        </div> {/* End of row */}

        {/* Carousel Indicators/Dots (if this section is part of a larger carousel) */}
        {/* These dots are often part of a JavaScript-driven carousel.
            If you only have two testimonials, they might just be decorative or omitted. */}
        <div className="d-flex justify-content-center mt-5"> {/* Center the dots */}
          <button className="carousel-dot active me-2"></button>
          <button className="carousel-dot me-2"></button>
          <button className="carousel-dot me-2"></button>
          <button className="carousel-dot me-2"></button>
          <button className="carousel-dot me-2"></button>
          <button className="carousel-dot"></button>
        </div>

      </div> {/* End of container */}
    </section>
  );
}