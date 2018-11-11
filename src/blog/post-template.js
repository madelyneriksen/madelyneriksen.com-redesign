import React from 'react';
import Layout from '../common/layout.js';
import { graphql } from 'gatsby';


export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
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
