import React from 'react';
import './ThirdPage.css'; // Ensure this CSS file exists and is imported


export default function ThirdPage() {
  return (
    // Main container for the hero section
    // Removed bg-dark here, as the background image will be set in CSS
    <div className="hero-cta-section text-white rounded-4 shadow-lg p-5
                    d-flex flex-column align-items-center justify-content-center
                    mx-auto my-5"
         style={{ minWidth: '80%', minHeight: '300px' }}
    >
      {/* Main Heading */}
      <h2 className="display-4 fw-bold mb-3 text-center">
        Get Real Potential Direct Booking from your Website.
      </h2>

      {/* Descriptive Paragraph */}
      <p className="fs-5 mb-5 text-center w-75">
        Hybrid is Booking Engine suited for Accommodation, Activities, & Things To Do
      </p>

      {/* Call to Action Button */}
      <button type="button" className="btn btn-warning btn-lg rounded-pill px-5 py-3 fw-bold">
        Get Free Trial 14 Days
      </button>
    </div>
  );
}