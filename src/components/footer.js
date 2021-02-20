import React from "react"

import Container from "react-bootstrap/Container"

import SocialLinks from "./socialLinks"

const Footer = () => {
  return (
    <footer>
      <Container fluid="xl">
        <div className="footer-bar">
          <div className="row">
            <div className="footer-bar-lt col-4">
              <div className="footer-bar-lt__logo" />
              <div className="footer-bar-lt__group">
                <p className="footer-bar-lt__group-copyright">
                  &copy; Colors Group, 2012-2020
                </p>
                <p className="footer-bar-lt__group-name">Эффективные решения</p>
              </div>
            </div>
            <div className="footer-bar-md col-4">
              <a href="tel:+78002567373" className="footer-bar-md__phone phone">
                8 800 256-73-73
              </a>
              <a
                href="mailto:info@colorsgroup.ru"
                className="footer-bar-md__email link"
              >
                info@colorsgroup.ru
              </a>
            </div>
            <div className="footer-bar-rt col-4">
              <div className="footer-bar-rt__social-links social-links">
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
