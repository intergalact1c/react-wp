import React from "react"
import { useRelative } from "../hooks/useRelative"
import { Link } from "gatsby"

import Breadcrumb from "react-bootstrap/Breadcrumb"

const Breadcrumbs = ({ breadcrumbs, color }) => {
  const BreadcrumbsItem = ({ url, text }) => {
    const relativeLink = useRelative(url)
    return (
      <li className="breadcrumb-item">
        <Link
          to={relativeLink}
          style={{
            color: color,
          }}
        >
          {text}
        </Link>
      </li>
    )
  }

  return (
    <div className="breadcrumbs">
      <Breadcrumb>
        {breadcrumbs.map((item, index) => {
          if (index !== breadcrumbs.length - 1) {
            return <BreadcrumbsItem key={item.text} {...item} />
          }
          return (
            <Breadcrumb.Item
              key={item.text}
              active
              style={{
                color: color,
              }}
            >
              {item.text}
            </Breadcrumb.Item>
          )
        })}
      </Breadcrumb>
    </div>
  )
}

export default Breadcrumbs
