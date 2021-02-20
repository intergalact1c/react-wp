import { useStaticQuery, graphql } from "gatsby"

export const useWebDevCasesCount = () => {
  const { wordpress } = useStaticQuery(
    graphql`
      query WEB_DEV_CASES_COUNT {
        wordpress {
          cases(where: { tagId: "9" }) {
            pageInfo {
              total
            }
          }
        }
      }
    `
  )
  if(wordpress.cases.pageInfo.total) {
    return {
      name: "Web-разработка",
      slug: "web-development",
      tagId: 9,
      count: wordpress.cases.pageInfo.total,
    }
  }
  return {
    name: "Web-разработка",
    slug: "web-development",
    tagId: 9,
    count: 0,
  }
}
