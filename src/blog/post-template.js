import React from 'react';
import { graphql } from 'gatsby';


export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: {path: {eq: $slug}}) {
      html
      frontmatter {
        path
      }
    }
  }
`
