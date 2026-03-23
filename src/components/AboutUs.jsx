import React from 'react'

const AboutUs = () => {
  return (
   
        <section className="container mt-5">
  <div className="row align-items-center">
    
    {/* Left Side - Image */}
    <div className="col-md-6">
      <img 
        src="/images/about.jpg" 
        alt="About Sokogarden" 
        className="img-fluid rounded shadow"
      />
    </div>

    {/* Right Side - Text */}
    <div className="col-md-6">
      <h2>About Sokogarden</h2>
      <p>
        Sokogarden was created with a vision to connect farmers and customers 
        through a simple and reliable digital platform. We believe in making 
        fresh products accessible while empowering local businesses.
      </p>

      <p>
        Our journey started with a simple idea — to bring convenience, quality, 
        and trust into online shopping. Today, Sokogarden continues to grow as 
        a platform that supports innovation and community development.
      </p>

      <p>
        We are committed to providing a seamless shopping experience while 
        ensuring our customers receive the best products at the best prices.
      </p>
    </div>

  </div>
</section>
   
  )
}

export default AboutUs