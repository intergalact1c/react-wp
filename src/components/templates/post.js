import React from "react"
import parse from 'html-react-parser'

const Post = ({ pageContext }) => {
  const { title, content } = pageContext
  return (
    <div className="post">
      <h1>{title}</h1>
      {content && <div>{parse(content)}</div>}
    </div>
  )
}

export default Post
