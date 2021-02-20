import { useStaticQuery, graphql } from "gatsby"

export const useGraphDesignCasesCount = () => {
  const { wordpress } = useStaticQuery(
    graphql`
      query GRAPH_DESIGN_CASES_COUNT {
        wordpress {
          cases(where: { tagId: "3" }) {
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
      name: "Графический дизайн",
      slug: "graphic-design",
      tagId: 3,
      count: wordpress.cases.pageInfo.total,
    }
  }
  return {
    name: "Графический дизайн",
    slug: "graphic-design",
    tagId: 3,
    count: 0,
  }
}
