import React from 'react';
import { StaticQuery, graphql} from 'gatsby';
import GridContainer from './grid-container.js';


const GridBlogContents = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                path
                title
                excerpt
              }
            }
          }
        }
      }
    `}
    render={data => data.allMarkdownRemark.edges.map(({node}) => (
      <GridContainer>
        <div className="w-100 tc">
          <span className="f3 tracked-light">{node.frontmatter.title}</span>
        </div>
        <div><p className="tc i serif">{node.frontmatter.excerpt}</p></div>
        <div className="flex items-center justify-between">
          <div><span className="i">blog post</span></div>
          <div />
        </div>
      </GridContainer>
    ))
  } />
)

export default GridBlogContents;
