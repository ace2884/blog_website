import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>My React Blog</h4>
            <p>A modern blog built with React, sharing insights and experiences in web development.</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Categories</h4>
            <ul>
              <li><a href="#tech">Technology</a></li>
              <li><a href="#web-dev">Web Development</a></li>
              <li><a href="#react">React</a></li>
              <li><a href="#javascript">JavaScript</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              <a href="#twitter">Twitter</a>
              <a href="#github">GitHub</a>
              <a href="#linkedin">LinkedIn</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 My React Blog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;