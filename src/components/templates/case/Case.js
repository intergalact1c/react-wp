import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchLastCases, setIsLoading } from "../../../redux/actions"
import parse from "html-react-parser"
import { Link } from "gatsby"

import Container from "react-bootstrap/Container"

import Layout from "../../layout/layout"
import Breadcrumbs from "../../breadcrumbs"
import LatestCases from "./LatestCases"
import LatestCasesLoader from "./LatestCasesLoader"

const Case = ({ pageContext }) => {
  const { caseId, seo, title, PostTypeCaseFields } = pageContext
  const {
    csPageBgColor,
    csPageTitleColor,
    csBreadcrumbItemColor,
    csContentBgColor,
    csBlocksTitleColor,
  } = PostTypeCaseFields.csColorScheme
  const dispatch = useDispatch()
  const { latestCases, isLoading } = useSelector(
    ({ latestCases, isLoading }) => ({
      latestCases,
      isLoading,
    })
  )

  React.useEffect(() => {
    dispatch(setIsLoading())
    dispatch(fetchLastCases(caseId))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Layout pageContext={pageContext}>
      <div
        className="page"
        style={{
          backgroundColor: csPageBgColor,
        }}
      >
        <div className="before-content">
          <Container fluid="xl">
            <Breadcrumbs
              breadcrumbs={seo.breadcrumbs}
              color={csBreadcrumbItemColor}
            />
            <h1
              className="before-content__h1-title"
              style={{
                color: csPageTitleColor,
              }}
            >
              {title}
            </h1>
            {PostTypeCaseFields.csBanner && (
              <div className="before-content__banner image">
                <img
                  src={PostTypeCaseFields.csBanner.sourceUrl}
                  alt={PostTypeCaseFields.csBanner.altText}
                />
              </div>
            )}
          </Container>
        </div>
        <div
          className="content"
          style={{
            backgroundColor: csContentBgColor,
          }}
        >
          <div className="case-blocks">
            <Container fluid="xl">
              {PostTypeCaseFields.csBlocks &&
                PostTypeCaseFields.csBlocks.map((block, index) => (
                  <div key={index} className="case-blocks__item">
                    <div className="case-blocks__item-top">
                      <div className="row">
                        <div className="col-4">
                          {block.csBlockTitle && (
                            <h2
                              className="case-blocks__title"
                              style={{
                                color: csBlocksTitleColor,
                              }}
                            >
                              {block.csBlockTitle}
                            </h2>
                          )}
                        </div>
                        {block.csBlockText && (
                          <div className="case-blocks__text col-8">
                            {parse(block.csBlockText)}
                          </div>
                        )}
                      </div>
                    </div>
                    {block.csBlockImg && (
                      <div className="case-blocks__item-bottom image">
                        <img
                          src={block.csBlockImg.sourceUrl}
                          alt={block.csBlockImg.altText}
                        />
                      </div>
                    )}
                  </div>
                ))}
            </Container>
          </div>
          <div className="cases cases_other">
            <Container fluid="xl">
              <div className="cases_other__top">
                <h3 className="cases_other__top-title">Другие кейсы</h3>
                <Link to="/cases/" className="cases_other__top-link">
                  Все кейсы
                </Link>
              </div>
              <div className="cases_other__bottom">
                <div className="row">
                  {!isLoading ? (
                    <LatestCases latestCases={latestCases} />
                  ) : (
                    <LatestCasesLoader />
                  )}
                </div>
              </div>
            </Container>
          </div>
        </div>
        <div className="background">
          <div className="background__logo background__logo_color" />
        </div>
      </div>
    </Layout>
  )
}

export default Case
