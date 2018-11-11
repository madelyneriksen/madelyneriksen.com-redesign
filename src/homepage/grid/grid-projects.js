import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import GridContainer from "./grid-container.js";
import '../../styles/font-mfizz.css';


const GridProjectContents = () => (
  <StaticQuery
    query={graphql`
      query {
        allProjectsJson {
          edges {
            node {
              name
              description
              icons
            }
          }
        }
      }
    `}
    render={data => data.allProjectsJson.edges.map(({ node }) => (
      <GridContainer>
        <div className="w-100 tc">
          <span className="f2 tracked-tight">{node.name}</span>
        </div>
        <div><p className="tc i">{node.description}</p></div>
        <div className="flex items-center justify-between">
          <div><span className="i">project</span></div>
          <div>{node.icons.map(icon => (
            <i className={["ph1 f4", "icon-"+icon].join(' ')} />
          ))}
        </div>
      </div>
    </GridContainer>
    ))
  } /> 
)

export default GridProjectContents;
