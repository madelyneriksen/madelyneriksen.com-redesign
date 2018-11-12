import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import classNames from '../../common/functions/class-names.js';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import '../../styles/font-mfizz.css';


export default () => (
  <StaticQuery
    query={graphql`
      query {
        allAboutJson(limit: 1) {
          edges {
            node {
              header
              body
              icons
            }
          }
        }
      }
    `}
    render={data => data.allAboutJson.edges.map(({node}) => (
      <div>
        <div className="w-100 pv5 ph2 flex flex-wrap items-center justify-center">
          <div className="w-100 mw6"><h1>{node.header}</h1></div>
          <div className="w-100 mw6"><p className="i">{node.body}</p></div>
        </div>
        <div className="w-100 mw8 center pv3 ph2 flex flex-wrap items-center justify-center">
          {node.icons.map(icon => (
            <div className="w4 tc">
              <ScrollAnimation animateIn="flipInX" delay={node.icons.indexOf(icon)*100}>
                <i className={classNames("f-subheadline", "icon-"+icon)} />
              </ScrollAnimation>
            </div>
          ))}
        </div>
      </div>
    ))}
  />
)
