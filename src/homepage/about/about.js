import React from 'react';
import { StaticQuery, graphql } from 'gatsby';


export default () => (
  <StaticQuery
    query={graphql`
      query {
        allAboutJson(limit: 1) {
          edges {
            node {
              header
              body
            }
          }
        }
      }
    `}
    render={data => data.allAboutJson.edges.map(({node}) => (
      <div className="w-100 pv5 ph2 flex flex-wrap items-center justify-center">
        <div className="w-100 mw6"><h1>{node.header}</h1></div>
        <div className="w-100 mw6"><p className="i">{node.body}</p></div>
      </div>
    ))}
  />
)
