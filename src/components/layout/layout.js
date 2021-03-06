import React from "react"
import PropTypes from "prop-types"

import SEO from "../seo"
import Header from "../header"
import Footer from "../footer"
import PopUp from "../popup"

import "./layout.scss"

const Layout = ({ children, pageContext }) => {
  //const { isFrontPage, slug, contentType } = pageContext

  return (
    <>
      <SEO seoData={pageContext.seo} />
      <Header isFrontPage={pageContext.isFrontPage} slug={pageContext.slug} contentType={pageContext.contentType} />
      <main>{children}</main>
      <Footer />
      <PopUp />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
