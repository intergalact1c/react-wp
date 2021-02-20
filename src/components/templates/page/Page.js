import PropTypes from "prop-types"
import React from "react"
import parse from "html-react-parser"

import Container from "react-bootstrap/Container"

import Layout from "../../layout/layout"
import Breadcrumbs from "../../breadcrumbs"
import SocialLinks from "../../socialLinks"
import Feedback from "../../feedback/feedback"

const Page = ({ pageContext }) => {
  const { content, seo, slug, title } = pageContext

  return (
    <Layout pageContext={pageContext}>
      <div className="page">
        <div className="before-content">
          <Container fluid="xl">
            <Breadcrumbs breadcrumbs={seo.breadcrumbs} />
            <h1 className="before-content__h1-title">{title}</h1>
          </Container>
        </div>
        <div className="content">
          <Container fluid="xl">
            {slug === "contacts" ? (
              <div className="parser-content parser-content__contacts">
                <div className="row">
                  <div className="parser-content-lt col-4">
                    <div className="parser-content-lt__item">
                      <a
                        href="tel:+78002567373"
                        className="parser-content-lt__phone phone"
                      >
                        8 800 256-73-73
                      </a>
                    </div>
                    <div className="parser-content-lt__item">
                      <a
                        href="mailto:info@colorsgroup.ru"
                        className="parser-content-lt__email link"
                      >
                        info@colorsgroup.ru
                      </a>
                    </div>
                  </div>
                  <div className="parser-content-rt col-8">
                    <div className="parser-content-rt__social-links social-links">
                      <SocialLinks />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              content && <div className="parser-content">{parse(content)}</div>
            )}
          </Container>
          {slug === "contacts" && <Feedback />}
        </div>
        <div className="background">
          <div className="background__logo background__logo_color" />
        </div>
      </div>
    </Layout>
  )
}

Page.defaultProps = {
  title: ``,
}

Page.propTypes = {
  title: PropTypes.string,
}

export default Page
