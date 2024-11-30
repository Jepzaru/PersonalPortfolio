import React, { useState, useEffect } from 'react';
import Header from './Header';
import './MainPage.css';
import backgroundVideo from './Images/cebubg.mp4';
import CEO from './Images/ceo.jpg';
import gridImage1 from './Images/softdev.png'; 
import gridImage2 from './Images/cloudsol.png';
import gridImage3 from './Images/cybersec.png';

const MainPage: React.FC = () => {
  const words = ['Innovate', 'Serve', 'Improve'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Header />
      <div className="video-container">
        <video autoPlay muted loop className="background-video">
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="text-overlay">
          <h1>
            We Build to <span>{words[currentWordIndex]}</span>
          </h1>
          <h2>together the future!</h2>
          <p>At Atlas, we believe in balancing work and play. We encourage you to engage in enjoyable activities that help reduce stress and create lasting memories.</p>
          <button className="learn-more-btn">Learn More</button>
        </div>
      </div>
      <div className="sample">
        <div>
          <h2><span>Atlas Software Dynamics Inc.</span> is a leading IT solutions provider based in Cebu, empowering businesses with cutting-edge technology. 
            We specialize in delivering software development, cloud solutions, 
            cybersecurity, and more to help you achieve your business goals. Our expertise spans a range of services designed to optimize operations and drive growth.</h2>
        </div>
        <div>
          <p>We specialize in delivering software development, cloud solutions, cybersecurity, and more to help you achieve your business goals.
          We offer custom software development services, building tailored software solutions that address your business's unique challenges. 
          Whether it's developing web applications, mobile apps, or enterprise software, we ensure our solutions are scalable, secure, and designed for seamless performance.
          </p>
        </div>
      </div>
      <div className="grid-container">
        <div 
          className="grid-item" 
          style={{ backgroundImage: `url(${gridImage1})` }}
        >
          <h2>Software Development</h2>
          <p>We create innovative and customized software solutions to meet your specific business needs, ensuring scalability and high performance.</p>
          <button>Learn More</button>
        </div>
        
        <div 
          className="grid-item" 
          style={{ backgroundImage: `url(${gridImage2})` }}
        >
          <h2>Cloud Solutions</h2>
          <p>Our cloud solutions offer flexibility, security, and scalability, empowering your business to operate seamlessly across platforms.</p>
          <button>Learn More</button>
        </div>
        
        <div 
          className="grid-item" 
          style={{ backgroundImage: `url(${gridImage3})` }}
        >
          <h2>Cybersecurity</h2>
          <p>We help safeguard your business with advanced cybersecurity measures, protecting data and ensuring your operations are secure from threats.</p>
          <button>Learn More</button>
        </div>
      </div>
      <div className="sample">
      <div style={{marginLeft: "300px"}}>
          <img src={CEO} className="sample-image" />
        </div>
        <div>
          <h2><span>Meet the CEO and Founder of Atlas Software Dynamics Inc. Jeff Francis D. Conson</span> an innovative IT solutions provider based in Cebu. 
          As an aspiring entrepreneur and fresh graduate, Jeff has passionately built a company dedicated to empowering businesses through cutting-edge technology. 
          Atlas Software Dynamics Inc. 
          specializes in software development, cloud solutions, cybersecurity, and more, offering a comprehensive range of services designed to optimize operations and drive growth. 
          With a vision for the future, Jeff's leadership is focused on helping businesses achieve their goals and thrive in an ever-evolving digital landscape.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
