import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer-links">
      <li><a href="#home" className="footer-link">home</a></li>
      <li><a href="#about" className="footer-link">about</a></li>
      <li><a href="#services" className="footer-link">services</a></li>
      <li><a href="#tours" className="footer-link">tours</a></li>
    </ul>
      <ul className="footer-icons">
        <li>
       <a href="http://www.facebook.com/bopuinar" target="_blank">
        <i className="fa-brands fa-facebook"></i>
       </a>
      </li>
      <li>
        <a href="http://www.instagram.com/ar_bo" target="_blank">
          <i className="fa-brands fa-instagram"></i>
        </a>
       </li>
       <li>
        <a href="http://www.x.com/bohui" target="_blank">
          <i className="fa-brands fa-x-twitter"></i>
        </a>
       </li>
      </ul>
      <p className="copyright">copy &copy; bo tours company;
        <span id="date"> all right reversed</span>
      </p>
      
     </footer>
  )
}

export default Footer