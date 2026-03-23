import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 pt-4 pb-2">
      <div className="container">
        <div className="row">

          {/* About */}
          <div className="col-md-3">
            <h5 className="garden" >SokoGarden</h5>
            <p >
              Your trusted online marketplace for fresh products, electronics,
              and more.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3">
            <h5 className="garden">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-warning text-decoration-none">Home</a></li>
              <li><a href="#" className="text-warning text-decoration-none">About us</a></li>
              <li><a href="/add" className="text-warning text-decoration-none">Upload products</a></li>
              <li><a href="/signin" className="text-warning text-decoration-none">Login</a></li>
            </ul>
          </div>

          {/* About Us */}
          <div className="col-md-3">
            <h5 className="garden">About Us</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Our Story</a></li>
              <li><a href="#" className="text-light text-decoration-none">Mission</a></li>
              <li><a href="#" className="text-light text-decoration-none">Careers</a></li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div className="col-md-3">
            <h5 className="garden">Contact Us</h5>
            <p>Email: amakovebridgit@gmail.com.com</p>
            <p>Phone: +254 716588562</p>

            <h6>Follow our social handles</h6>
            <div>
              <a href="#" className="text-light me-2">📘</a>
              <a href="#" className="text-light me-2">🐦</a>
              <a href="#" className="text-light">📸</a>
            </div>
          </div>

        </div>

        {/* Bottom line */}
        <hr className="border-light" />
        <h5 className="text-center mb-0 ">
          © 2026 SokoGarden | Built by <b className="text-warning">Breamak.</b>
        </h5>
      </div>
    </footer>
  );
};

export default Footer;