import { useStaticQuery, graphql } from "gatsby"

export const useVideoCasesCount = () => {
  const { wordpress } = useStaticQuery(
    graphql`
      query VIDEO_CASES_COUNT {
        wordpress {
          cases(where: { tagId: "8" }) {
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
      name: "Видео",
      slug: "video",
      tagId: 8,
      count: wordpress.cases.pageInfo.total,
    }
  }
  return {
    name: "Видео",
    slug: "video",
    tagId: 8,
    count: 0,
  }
}
