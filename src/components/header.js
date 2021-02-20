import React, { useRef } from "react"
import { useDispatch } from "react-redux"
import { openModal } from "../redux/actions"
import { Link } from "gatsby"
import { useRelative } from "../hooks/useRelative"
import { useSiteMenuData } from "../hooks/useSiteMenuData"

import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"

import SocialLinks from "./socialLinks"

const Header = ({ isFrontPage, slug, contentType }) => {
  const dispatch = useDispatch()
  const [headerClassName, setHeaderClassName] = React.useState("absolute show")
  const [transparent, setTransparent] = React.useState(true)
  const [scrollPosition, setScrollPosition] = React.useState("")
  const headerRef = useRef()
  const scrollHandler = () => {
    const headerHeight = headerRef.current.offsetHeight
    let curScrollVal = window.pageYOffset || document.documentElement.scrollTop
    setScrollPosition(curScrollVal)

    if (curScrollVal > scrollPosition) {
      if (curScrollVal > headerHeight / 2 && curScrollVal < headerHeight) {
        setHeaderClassName("absolute hide")
      } else if (curScrollVal >= headerHeight) {
        setHeaderClassName("hide")
      }
    } else {
      if (curScrollVal === 0) {
        setHeaderClassName("absolute show")
      } else if (curScrollVal > headerHeight) {
        setHeaderClassName("show")
      }
    }

    if (curScrollVal > headerHeight) {
      setTransparent(false)
    } else {
      setTransparent(true)
    }
  }
  React.useEffect(() => {
    const target = window || document.body
    target.addEventListener("scroll", scrollHandler, false)
    return () => target.removeEventListener("scroll", scrollHandler, false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollPosition])

  const menuData = useSiteMenuData()
  const headerMenu = menuData.nodes.find(menu => menu.slug === "header-menu")
  const MenuItem = ({ url, title, label }) => {
    const relativeLink = useRelative(url)

    return (
      <Link
        to={relativeLink}
        title={title}
        className={
          relativeLink.includes(slug) ||
          relativeLink.includes(
            contentType.node.graphqlPluralName.toLowerCase()
          )
            ? "active"
            : null
        }
      >
        {label}
      </Link>
    )
  }

  return (
    <header
      className={`${
        isFrontPage
          ? transparent
            ? headerClassName + " transparent"
            : headerClassName
          : headerClassName
      }`}
      ref={headerRef}
    >
      <Container fluid="xl">
        <div className="header-top-bar">
          <Link to="/" className="header-top-bar__logo" />
          <div className="header-top-bar__menu">
            <nav>
              <ul>
                {headerMenu.menuItems.nodes.map(item => (
                  <li key={item.id}>
                    <MenuItem {...item} />
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          {!isFrontPage && (
            <Button
              variant="primary"
              className="header-top-bar__btn"
              onClick={() => dispatch(openModal())}
            >
              Начать проект
            </Button>
          )}
          <div className="social-links">
            <SocialLinks />
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
