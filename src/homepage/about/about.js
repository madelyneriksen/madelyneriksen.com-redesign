import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
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
      <div className="bg-light-gray">
        <div className="w-100 ph2 flex flex-wrap items-center justify-around">
          <div className="w-100 mw6 pv3">
            <h1>{node.header}</h1>
            <p className="f4">{node.body}</p>
            <Link className="green b hover-light-green" to="/about">About Me &raquo;</Link>
          </div>
          <div className="w-100 mw6 tc pv3">
            {node.icons.map(icon => (
              <div className="w4 dib">
                <ScrollAnimation
                  animateIn="flipInX"
                  delay={node.icons.indexOf(icon)*100}
                  animateOnce={true}>
                  <i className={classNames("f-subheadline", "icon-"+icon)} />
                </ScrollAnimation>
              </div>
            ))}
          </div>
        </div>
      </div>
        ))}
      />
)
