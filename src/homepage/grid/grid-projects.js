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
              url
            }
          }
        }
      }
    `}
    render={data => data.allProjectsJson.edges.map(({ node }) => (
      <GridContainer extraClasses={"bg-light-red"}>
        <div className="w-100 tc">
          <a
            href={node.url}
            className="grow dib no-underline near-white f3 tracked-tight fw3">
            {node.name}
          </a>
        </div>
        <div><p className="tc i serif">{node.description}</p></div>
        <div className="flex items-center justify-between">
          <div><span className="i serif">project</span></div>
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
