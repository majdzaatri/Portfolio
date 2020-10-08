import React from "react"
import SocialLinks from "../constants/socialLinks"
const Footer = () => {
  return <footer className="footer">
    <div>
      <SocialLinks styleClass="footer-links" />
      <h4>copyright&copy;{new Date().getFullYear()}
      <span>Majd Zaatri</span> all right reserved
      </h4>
    </div>
  </footer>
}

export default Footer
