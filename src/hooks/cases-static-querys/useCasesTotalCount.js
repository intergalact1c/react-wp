import { useStaticQuery, graphql } from "gatsby"

export const useCasesTotalCount = () => {
  const { wordpress } = useStaticQuery(
    graphql`
      query CASES_TOTAL_COUNT {
        wordpress {
          cases {
            pageInfo {
              total
            }
          }
        }
      }
    `
  )
  return wordpress.cases.pageInfo.total
}
