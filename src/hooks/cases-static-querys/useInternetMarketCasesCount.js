import { useStaticQuery, graphql } from "gatsby"

export const useInternetMarketCasesCount = () => {
  const { wordpress } = useStaticQuery(
    graphql`
      query INTERNET_MARKET_CASES_COUNT {
        wordpress {
          cases(where: { tagId: "10" }) {
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
      name: "Интернет-маркетинг",
      slug: "internet-marketing",
      tagId: 10,
      count: wordpress.cases.pageInfo.total,
    }
  }
  return {
    name: "Интернет-маркетинг",
    slug: "internet-marketing",
    tagId: 10,
    count: 0,
  }
}
