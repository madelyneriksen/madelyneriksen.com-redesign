import React from 'react';
import { StaticQuery, graphql, Link} from 'gatsby';
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
      <GridContainer extraClasses={"bg-light-red"}>
        <div className="w-100 tc">
          <Link
            to={node.frontmatter.path}
            className="tracked-right dib f3 near-white no-underline grow">
            {node.frontmatter.title}
          </Link>
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
