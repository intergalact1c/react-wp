import React from "react"
import { useSelector, useDispatch } from "react-redux"
import {
  setCasesCount,
  setAllCasesCount,
  setCasesCountByTagId,
  setCasesActiveTag,
  resetCases,
  fetchCases,
} from "../../../redux/actions"
import * as CSQ from "../../../hooks/cases-static-querys"
import { Element, animateScroll as scroll } from "react-scroll"
import PropTypes from "prop-types"

import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"

import Layout from "../../layout/layout"
import Breadcrumbs from "../../breadcrumbs"
import CasesPageItem from "./CasesPageItem"
import CasesPageItemLoader from "./CasesPageItemLoader"

const scrollOptions = {
  duration: 1500,
  delay: 500,
  smooth: "linear",
}

const CasesPage = ({ pageContext }) => {
  const { seo, title } = pageContext
  const dispatch = useDispatch()
  const {
    cases,
    allCasesCount,
    casesCountByTagId,
    casesPerPage,
    casesNextPage,
    casesPageLeft,
    casesActiveTag,
    isLoading,
  } = useSelector(
    ({
      cases,
      allCasesCount,
      casesCountByTagId,
      casesPerPage,
      casesNextPage,
      casesPageLeft,
      casesActiveTag,
      isLoading,
    }) => ({
      cases,
      allCasesCount,
      casesCountByTagId,
      casesPerPage,
      casesNextPage,
      casesPageLeft,
      casesActiveTag,
      isLoading,
    })
  )
  //casesCountByTagId.sort((prev, next) => next.count - prev.count)
  const allCasesCountSQ = CSQ.useCasesTotalCount()
  const casesCountByTagIdSQ = []
  casesCountByTagIdSQ.push(
    CSQ.useSeoCasesCount(),
    CSQ.useWebDevCasesCount(),
    CSQ.useVideoCasesCount(),
    CSQ.useGraphDesignCasesCount(),
    CSQ.useInternetMarketCasesCount(),
    CSQ.useAdvertisingCasesCount()
  )
  React.useEffect(() => {
    if (cases.length === 0) {
      dispatch(setCasesCount(allCasesCountSQ))
      dispatch(setAllCasesCount(allCasesCountSQ))
      dispatch(setCasesCountByTagId(casesCountByTagIdSQ))
      dispatch(fetchCases(casesActiveTag, casesPerPage, casesNextPage))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onClickTag = tagId => {
    dispatch(resetCases())
    if (tagId === null) {
      dispatch(setCasesCount(allCasesCountSQ))
    } else {
      dispatch(
        setCasesCount(
          casesCountByTagId.filter(obj => obj.tagId === tagId)[0].count
        )
      )
    }
    dispatch(setCasesActiveTag(tagId))
    dispatch(fetchCases(tagId, casesPerPage, 1))
  }

  const onClickAddMoreCases = () => {
    !isLoading && scroll.scrollToBottom(scrollOptions)
    dispatch(fetchCases(casesActiveTag, casesPerPage, casesNextPage))
  }

  return (
    <Layout pageContext={pageContext}>
      <div className="page">
        <div className="before-content">
          <Container fluid="xl">
            <Breadcrumbs breadcrumbs={seo.breadcrumbs} />
            <h1 className="before-content__h1-title">{title}</h1>
            <div className="before-content__tags">
              <div className="before-content__tags-item">
                <button
                  className={casesActiveTag === null ? "active" : null}
                  onClick={() => onClickTag(null)}
                >
                  Все кейсы ({allCasesCount})
                </button>
              </div>
              {casesCountByTagId.map(obj => (
                <div key={obj.name} className="before-content__tags-item">
                  {obj.count ? (
                    <button
                      className={casesActiveTag === obj.tagId ? "active" : null}
                      onClick={() => onClickTag(obj.tagId)}
                    >
                      {obj.name} ({obj.count})
                    </button>
                  ) : (
                    <button className="disabled">{obj.name}</button>
                  )}
                </div>
              ))}
            </div>
          </Container>
        </div>
        <div className="content">
          <Container fluid="xl">
            <div className="cases">
              <CasesPageItem cases={cases} />
              {isLoading && <CasesPageItemLoader />}
            </div>
            <div className="after-cases">
              {casesPageLeft > 0 ? (
                <Button variant="outline-primary" onClick={onClickAddMoreCases}>
                  Показать еще
                </Button>
              ) : (
                <Button variant="outline-primary" disabled>
                  Показать еще
                </Button>
              )}
            </div>
            <Element />
          </Container>
        </div>
        <div className="background">
          <div className="background__top-fill background__top-fill_gray" />
          <div className="background__logo background__logo_gray" />
        </div>
      </div>
    </Layout>
  )
}

CasesPage.defaultProps = {
  title: ``,
}

CasesPage.propTypes = {
  title: PropTypes.string,
}

export default CasesPage
