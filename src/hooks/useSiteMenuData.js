import { useStaticQuery, graphql } from "gatsby"

export const useSiteMenuData = () => {
  const { wordpress } = useStaticQuery(
    graphql`
      query SITE_MENU_DATA {
        wordpress {
          menus {
            nodes {
              id
              name
              slug
              menuItems {
                nodes {
                  id
                  label
                  title
                  url
                }
              }
            }
          }
        }
      }
    `
  )
  return wordpress.menus
}
