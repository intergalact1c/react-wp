import { useStaticQuery, graphql } from "gatsby"

export const useAdvertisingCasesCount = () => {
  const { wordpress } = useStaticQuery(
    graphql`
      query ADVERTISING_CASES_COUNT {
        wordpress {
          cases(where: { tagId: "2" }) {
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
      name: "Реклама",
      slug: "advertising",
      tagId: 2,
      count: wordpress.cases.pageInfo.total,
    }
  }
  return {
    name: "Реклама",
    slug: "advertising",
    tagId: 2,
    count: 0,
  }
}
