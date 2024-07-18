import React from 'react'
import './Abouts.css';
import sImg from '../assets/images/tour-img01.jpg';
import mImg from '../assets/images/tour-img03.jpg';
import tImg from '../assets/images/tour-img02.jpg';

const Abouts = () => {
  return (
    <div>
        <div>
      <section className="hero-section">
        <h1>Welcome to our Travel World</h1>
        <p>Explore the beauty of the world with us</p>
      </section>

      <section className="mission-section">
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p>We are on a mission to inspire people to travel and discover the wonders of the world. Through our platform, we aim to provide you with the necessary resources, travel tips, and insights to make your journeys memorable.
            Travolic started with a mission to make Travel booking process seamless and after touching the milestone of having to catered the first million happy consumers we can proudly state that we have started a journey with a million smiles and hopefully many more to go.

. We aspire to be a one stop shop for all travel requirements for our clients by placing quality service and timely delivery of products to our Customers satisfaction.



As a company, we operate under the guidance & supervision of regulatory authorities like TTA (Travel Trust Association) & ATOL (Air Travel Organiser’s Licence) and offer 100% financial security. We are growing beyond our expectation and is rather surprised with the overwhelming response to our mission of quality service delivery, we take pride in our post sales service and aim to be a company with abundant satisfied customers thus ensuring the growth & success.

We offer Hotels accommodation and all other ground arrangements in the country of arrival and already have measures in place to ensure hassle free holidays, you can choose from a variety of allocated pre purchased deals or ask us to customize it to your preference. Our team endeavors to provide the most competitive deals and unmatched service as we immensely value the smiles from our customers.
          </p>
        </div>
      </section>

    


      <section className="photo-section">
        <div className="photo-content">
          <h2>Our Photos</h2>
          <div className="photo-cards">
            <div className="photo-card">
              <img src={sImg} alt="Photo 1" />
              <h3>Amazing Sunset</h3>
              <p>Witness the breathtaking beauty of the sunset at our top-rated destinations.</p>
            </div>
            <div className="photo-card">
              <img src={mImg} alt="Photo 2" />
              <h3>Majestic Mountains</h3>
              <p>Embark on an adventure and conquer the stunning peaks of the world's highest mountains.</p>
            </div>
            <div className="photo-card">
              <img src={tImg} alt="Photo 3" />
              <h3>Tropical Paradise</h3>
              <p>Indulge in the serene beaches and crystal-clear waters of our tropical getaways.</p>
            </div>
          </div>
        </div>
      </section>


      <section className="experience-section">
        <div className="experience-content">
          <h2>Our Experience</h2>
          <p>At Travolic, we pride ourselves on our extensive experience in curating unforgettable travel adventures. With over 4 years of expertise in the industry, we have had the privilege of crafting extraordinary journeys for countless explorers. From the towering peaks of the Himalayas to the sun-kissed beaches of the Caribbean, we have personally ventured to the far corners of the globe to bring you the most authentic and awe-inspiring experiences. Our team of seasoned travelers and passionate experts meticulously handpick each destination, ensuring that every trip we offer is tailored to perfection. Whether you seek adrenaline-pumping escapades, cultural immersion, or serene retreats, our commitment to excellence and attention to detail guarantees an extraordinary travel experience that will create lifelong memories."</p>
        </div>
      </section>
      
    </div>
    </div>
  )
}

export default Abouts