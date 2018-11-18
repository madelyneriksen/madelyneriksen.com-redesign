import React from 'react';
import Layout from '../common/layout.js';
import { graphql } from 'gatsby';


export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div 
        className="mw8 center pa2 pt5">
        <h1 className="f1 f-headline-l">{post.frontmatter.title}</h1>
        <div class="flex flex-wrap justify-between items-center">
          <h4 class="db">by {post.frontmatter.author}</h4>
          <h4 class="db">{post.frontmatter.date}</h4>
        </div>
        <hr />
        <div
          className="f4 lh-copy"
          dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: {path: {eq: $slug}}) {
      html
      frontmatter {
        path
        title
        author
        date(formatString: "MMM Do, YYYY")
      }
    }
  }
`
