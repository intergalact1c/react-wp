import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import { tagsObj, searchIn } from "../../../assets/tags"

const CasesPageItem = ({ cases }) => {
  return (
  <>
      {cases
        ? cases.map(obj => (
            <div key={obj.id} className="cases__item">
              <div className="row">
                <div className="col-lg-8">
                  {obj.better_featured_image ? (
                    <div className="cases__image image">
                      <img
                        src={obj.better_featured_image.source_url}
                        alt={obj.better_featured_image.alt_text}
                      />
                    </div>
                  ) : null}
                </div>
                <div className="col-4">
                  <div className="cases__inner">
                    <h2 className="cases__title">{obj.title.rendered}</h2>
                    <div className="cases__tags">
                      {obj.tags.map(tag => (
                        <span key={tag} className="cases__tag-name">
                          {searchIn(tag, tagsObj)}
                        </span>
                      ))}
                    </div>
                    <span className="cases__details-btn">Подробнее</span>
                  </div>
                </div>
              </div>
              <Link to={`/cases/${obj.slug}/`} className="cases__link" />
            </div>
          ))
        : null}
    </>
  )
}

CasesPageItem.defaultProps = {
  title: ``,
}

CasesPageItem.propTypes = {
  title: PropTypes.string,
}

export default CasesPageItem
