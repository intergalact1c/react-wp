import React from "react"
import ContentLoader from "react-content-loader"

const LatestCasesLoader = () => {
  return (
    <>
      {Array(2)
        .fill(0)
        .map((_, index) => (
          <div key={index} className="cases__item cases_other__item col-6">
            <ContentLoader
              speed={2}
              width={705}
              height={528}
              viewBox="0 0 705 528"
              style={{ width: "100%" }}
              backgroundColor="#9da4a8"
              foregroundColor="#ecebeb"
            >
              <rect x="0" y="0" width="705" height="290" />
              <rect x="0" y="330" rx=".25rem" width="705" height="52" />
              <rect x="0" y="432" rx=".25rem" width="420" height="14" />
            </ContentLoader>
          </div>
        ))}
    </>
  )
}

export default LatestCasesLoader
