import React from 'react';
import img4 from './img4.png'; // Make sure img4.png is in the same directory as this file
// import './FifthPage.css'; // Import the CSS file for custom styles

export default function FifthPage() {
  return (
    // Main container for the entire section.
    // py-5 for padding top/bottom.
    // bg-light sets a light background color, similar to the image.
    <div>

    <section className="fifth-page-section py-5 bg-light">
      <div className="container"> {/* Standard Bootstrap container for responsive content width */}
        {/* Row for the two-column layout. */}
        {/* align-items-center vertically aligns content in the middle of the columns. */}
        {/* g-4 adds gutter space between columns. */}
        <div className="row align-items-center g-4">

          {/* Left Column: Image Illustration */}
          {/* col-12: Takes full width on small screens. */}
          {/* col-lg-6: Takes half width (6/12) on large screens and up. */}
          {/* text-center: Centers the image horizontally within its column. */}
          <div className="col-12 col-lg-6 text-center">
            {/* img-fluid makes the image responsive, scaling down if needed. */}
          <img src={img4} alt="Illustration of tourists" className="img-fluid" />
          </div>

          {/* Right Column: Benefits Content */}
          {/* col-12: Takes full width on small screens. */}
          {/* col-lg-6: Takes half width (6/12) on large screens and up. */}
          {/* text-start: Aligns text to the left within its column. */}
          <div className="col-12 col-lg-6 text-start">
            {/* Small "BENEFITS" label */}
            {/* text-muted for light grey color. */}
            {/* fw-bold for bold text. */}
            {/* text-uppercase for uppercase letters. */}
            {/* mb-2 for margin-bottom. */}
            {/* d-block to make it a block element so margin applies correctly. */}
            <small className="text-muted fw-bold text-uppercase mb-2 d-block">BENEFITS</small>

            {/* Main Title: "Happening cities" */}
            {/* display-5 for a large, prominent heading size. */}
            {/* fw-bold for bold text. */}
            {/* mb-4 for margin-bottom. */}
            {/* text-dark for dark text color. */}
            <h2 className="display-5 fw-bold mb-4 text-dark">Happening cities</h2>

            {/* Feature 1: Cost-effective advertising */}
            <div className="mb-4"> {/* mb-4 adds space below this feature block */}
              {/* Custom badge for "Advertising" */}
              {/* badge class for basic badge styling. */}
              {/* custom-badge-advertising for specific background/text color (defined in CSS). */}
              {/* rounded-pill for pill shape. */}
              {/* px-3 py-2 for horizontal/vertical padding. */}
              {/* mb-2 for margin-bottom below the badge. */}
              <span className="badge custom-badge-advertising rounded-pill px-3 py-2 mb-2">Advertising</span>
              {/* Feature Heading */}
              <h5 className="fw-bold text-dark">Cost-effective advertising</h5>
              {/* Feature Description */}
              <p className="text-muted">
                Maximize your budget with cost-effective ads that deliver results.
              </p>
            </div>

            {/* Feature 2: Reach millions with Chisfis */}
            <div className="mb-4"> {/* mb-4 adds space below this feature block */}
              {/* Custom badge for "Exposure" */}
              <span className="badge custom-badge-exposure rounded-pill px-3 py-2 mb-2">Exposure</span>
              {/* Feature Heading */}
              <h5 className="fw-bold text-dark">Reach millions with Chisfis</h5>
              {/* Feature Description */}
              <p className="text-muted">
                Reach millions globally with Hybrid Booking for optimal exposure.
              </p>
            </div>

            {/* Feature 3: Secure and simple */}
            <div> {/* No mb-4 here if it's the last element in the column */}
              {/* Custom badge for "Secure" */}
              <span className="badge custom-badge-secure rounded-pill px-3 py-2 mb-2">Secure</span>
              {/* Feature Heading */}
              <h5 className="fw-bold text-dark">Secure and simple</h5>
              {/* Feature Description */}
              <p className="text-muted">
                A secure, user-friendly platform that keeps your data safe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div>
        <h1 >
            Don't Miss Out! Join Us Today
        </h1>
<button type="button" className="btn btn-warning text-white">Contact Our Sales Today</button>
    </div>
    </div>
  );
}
