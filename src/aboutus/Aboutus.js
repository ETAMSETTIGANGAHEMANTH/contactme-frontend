import React from 'react';
import './Aboutus.css';

function Aboutus() {
  return (
    <div className="aboutus-container">
      <div className="container">
        <div className="row justify-content-center"> {/* Center the row */}
          <div className="col-lg-8 col-md-10"> {/* Adjust column size */}
            <h2 className="aboutus-heading">About Us</h2>
            <p className="aboutus-description">
              Welcome to our Contact Me page! We believe in maintaining open lines of communication with our valued customers. Whether you have questions, feedback, or simply want to reach out, this page serves as a direct channel to connect with our dedicated team. We understand the importance of prompt and efficient assistance, and we're here to ensure that your inquiries are addressed promptly and effectively.
            </p>
            <p className="aboutus-description">
              Our Contact Me page offers multiple ways to get in touch with us. You can reach out via email, phone, or by filling out the contact form provided below. Our team of experts is readily available to assist you with any queries or concerns you may have regarding our products, services, or your user experience. We value your feedback and strive to provide exceptional customer service at every step of the way.
            </p>
            <p className="aboutus-description">
              Your satisfaction is our top priority, and we're committed to delivering the highest standard of support. Whether you're a new customer exploring our offerings or a returning client seeking assistance, we're here to help. Feel free to reach out to us anytime – we're eager to hear from you and assist you in any way we can.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
