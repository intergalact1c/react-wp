const seoFields = require(`./src/static-querys-fragments/seoFields`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      wordpress {
        pages {
          nodes {
            content
            contentType {
              node {
                graphqlPluralName
              }
            }
            FrontPage {
              fpBanner {
                fpBannerText
                fpBannerImg {
                  sourceUrl
                  altText
                }
              }
            } 
            isFrontPage
            ${seoFields}
            slug            
            title
            uri
          }
        }
        posts {
          nodes {
            id
            content
            contentType {
              node {
                graphqlPluralName
              }
            }
            title
            ${seoFields}
            slug
          }
        }
        cases(where: { status: PUBLISH }) {
          nodes {
            id
            caseId
            content
            contentType {
              node {
                graphqlPluralName
              }
            }
            date
            featuredImage {
              node {
                sourceUrl
                altText
              }
            }
            PostTypeCaseFields {
              csColorScheme {
                csBlocksTitleColor
                csContentBgColor
                csPageBgColor
                csPageTitleColor
                csBreadcrumbItemColor
              }
              csBanner {
                sourceUrl
                altText
              }
              csBlocks {
                csBlockText
                csBlockTitle
                csBlockImg {
                  altText
                  sourceUrl
                }
              }
            }
            ${seoFields}
            slug
            status
            tags {
              nodes {
                name
              }
            }
            title
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.error("There was an error fetching posts", result.errors)
  }

  const { wordpress } = result.data

  // Define the template to use
  const templatePage = require.resolve(
    `./src/components/templates/page/Page.js`
  )
  const templateFrontPage = require.resolve(
    `./src/components/templates/page/FrontPage.js`
  )
  const templatePageCases = require.resolve(
    `./src/components/templates/page/CasesPage.js`
  )
  const templatePost = require.resolve(`./src/components/templates/post.js`)
  const templateCase = require.resolve(
    `./src/components/templates/case/Case.js`
  )

  if (wordpress.pages.nodes.length) {
    wordpress.pages.nodes.map(page => {
      const { isFrontPage, slug } = page
      //const uri = isFrontPage ? `/` : `/${page.slug}/`
      if (isFrontPage) {
        actions.createPage({
          path: `/`,
          component: templateFrontPage,
          context: {
            FrontPage: page.FrontPage,
            isFrontPage: page.isFrontPage,
            contentType: page.contentType,
            seo: page.seo,
          },
        })
      } else {
        actions.createPage({
          path: `/${page.slug}/`,
          component: slug === `cases` ? templatePageCases : templatePage,
          context: {
            isFrontPage: page.isFrontPage,
            content: page.content,
            contentType: page.contentType,
            seo: page.seo,
            slug: page.slug,
            title: page.title,
          },
        })
      }
    })
  }

  if (wordpress.posts.nodes.length) {
    wordpress.posts.nodes.map(post => {
      actions.createPage({
        path: `/posts/${post.slug}/`,
        component: templatePost,
        context: {
          isFrontPage: false,
        },
      })
    })
  }

  if (wordpress.cases.nodes.length) {
    wordpress.cases.nodes.map(singleCase => {
      actions.createPage({
        path: `/cases/${singleCase.slug}/`,
        component: templateCase,
        context: {
          isFrontPage: false,
          caseId: singleCase.caseId,
          contentType: singleCase.contentType,
          PostTypeCaseFields: singleCase.PostTypeCaseFields,
          seo: singleCase.seo,
          slug: singleCase.slug,
          title: singleCase.title,
        },
      })
    })
  }
}
