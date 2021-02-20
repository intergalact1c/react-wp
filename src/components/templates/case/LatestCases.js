import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import { tagsObj, searchIn } from "../../../assets/tags"

const LatestCases = ({ latestCases }) => {
  return (
    <>
      {latestCases
        ? latestCases.map(obj => (
            <div key={obj.id} className="cases__item cases_other__item col-6">
              {obj.better_featured_image ? (
                <div className="cases__image image">
                  <img
                    src={obj.better_featured_image.source_url}
                    alt={obj.better_featured_image.alt_text}
                  />
                </div>
              ) : null}
              <h4 className="cases__title cases_other__title">
                {obj.title.rendered}
              </h4>
              <div className="cases__tags">
                {obj.tags.map(tag => (
                  <span
                    key={tag}
                    className="cases__tag-name cases_other__tag-name"
                  >
                    {searchIn(tag, tagsObj)}
                  </span>
                ))}
              </div>
              <Link to={`/cases/${obj.slug}/`} className="cases__link" />
            </div>
          ))
        : null}
    </>
  )
}

LatestCases.defaultProps = {
  title: ``,
}

LatestCases.propTypes = {
  title: PropTypes.string,
}

export default LatestCases