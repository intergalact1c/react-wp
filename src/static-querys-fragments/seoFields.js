const seoFields = `
  seo {
    focuskw
    metaDesc
    metaKeywords
    metaRobotsNofollow
    metaRobotsNoindex
    opengraphAuthor
    opengraphDescription
    title
    twitterDescription
    twitterTitle
    opengraphModifiedTime
    opengraphPublishedTime
    opengraphSiteName
    opengraphPublisher
    opengraphTitle
    opengraphType
    opengraphUrl
    twitterImage {
      sourceUrl
      altText
    }
    breadcrumbs {
      text
      url
    }
  }
`

module.exports = seoFields
