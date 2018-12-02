import React from 'react';
import '../styles/generic-grid.css';
import { StaticQuery, graphql, Link } from 'gatsby';


export default () => (
  <React.Fragment>
    <div className="generic-grid triple-grid">
      <div className="flex items-center justify-end" style={{gridArea: "bottom"}}>
        <h4><Link to="/blog/" className="no-underline mid-gray">See all posts &raquo;</Link></h4>
      </div>
      <StaticQuery
        query={graphql`
          query {
            allMarkdownRemark(
              filter: {frontmatter: {type: {eq: "post"}}},
              limit: 3,
              sort: {fields: [frontmatter___date], order: DESC}) {
              edges {
                node {
                  frontmatter {
                    title
                    path
                    excerpt
                    featuredImage {
                      childImageSharp {
                        fluid(maxHeight: 800) {
                          src
                        }
                      }
                    }
                  }
                }
              }
            }
          }  
        `}
        render={data => data.allMarkdownRemark.edges.map(({node}, index) => (
          <div style={{gridArea: "side-"+(index+1)}}>
            <Link to={node.frontmatter.path} className="grow db">
              <img src={node.frontmatter.featuredImage.childImageSharp.fluid.src} alt="" />
            </Link>
            <div className="ph2">
              <h2>
                <Link
                  to={node.frontmatter.path}
                  className="mid-gray no-underline">{node.frontmatter.title}</Link>
              </h2>
              <p className="f4 lh-copy">{node.frontmatter.excerpt}</p>
            </div>
          </div>
        ))}
      />
    </div>
  </React.Fragment>
)
