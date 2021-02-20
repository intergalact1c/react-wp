import React from "react"
import ContentLoader from "react-content-loader"

const CasesPageItemLoader = () => {
  return (
    <div className="cases__item">
      <div className="row">
        <div className="col-lg-8">
          <ContentLoader
            speed={2}
            width={950}
            height={390}
            viewBox="0 0 950 390"
            style={{ width: '100%' }}
            backgroundColor="#9da4a8"
            foregroundColor="#ecebeb"
          >
            <rect x="0" y="0" width="950" height="390" />
          </ContentLoader>
        </div>
        <div className="col-4">
          <div className="cases__inner">
            <ContentLoader
              speed={2}
              width={410}
              height={304}
              viewBox="0 0 410 304"
              style={{ width: '100%' }}
              backgroundColor="#9da4a8"
              foregroundColor="#ecebeb"
            >
              <rect x="0" y="0" rx=".25rem" width="410" height="118" />
              <rect x="0" y="162" rx=".25rem" width="340" height="22" />
              <rect x="0" y="200" rx=".25rem" width="280" height="22" />
              <rect x="0" y="282" rx=".25rem" width="132" height="22" />
            </ContentLoader>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CasesPageItemLoader
