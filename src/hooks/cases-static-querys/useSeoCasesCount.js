import { useStaticQuery, graphql } from "gatsby"

export const useSeoCasesCount = () => {
  const { wordpress } = useStaticQuery(
    graphql`
      query SEO_CASES_COUNT {
        wordpress {
          cases(where: { tagId: "11" }) {
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
      name: "SEO",
      slug: "seo",
      tagId: 11,
      count: wordpress.cases.pageInfo.total,
    }
  }
  return {
    name: "SEO",
    slug: "seo",
    tagId: 11,
    count: 0,
  }
}
