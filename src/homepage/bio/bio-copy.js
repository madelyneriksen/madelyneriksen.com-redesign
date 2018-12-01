import React from 'react';
import classNames from '../../common/functions/class-names.js';
import { StaticQuery, graphql } from 'gatsby';
import ScrollAnimation from 'react-animate-on-scroll';
import Me from '../../../content/about/img/me.jpeg';
import Pueblo from '../../../content/about/img/pueblo.jpg';
import 'animate.css/animate.min.css';
import '../../styles/font-mfizz.css';


const Panel = props => (
  <div
    className={classNames("flex flex-column items-center", props.justify)}
    style={{gridArea: props.gridArea}}>
    {props.children}
  </div>
)

export default () => (
  <StaticQuery
    query={graphql`
      query {
        side1: markdownRemark(frontmatter: {type: {eq: "copy"}, name: {eq: "bio__side-1"}}) {
          html
          frontmatter {
            header
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <div style={{gridArea: "side-1"}}>
          <ScrollAnimation animateIn="fadeInUp" animateOnce={true} className="h-100">
            <img src={Pueblo} className="h-100"/>
          </ScrollAnimation>
        </div>
        <Panel justify="justify-around" gridArea="side-3">
          <ScrollAnimation animateIn="fadeInUp" animateOnce={true} className="pa2">
            <img src={Me} className="db mw5 br-100 center" />
            <h1 className="tc">{data.side1.frontmatter.header}</h1>
            <div className="lh-copy f4" dangerouslySetInnerHTML={{__html: data.side1.html}} />
          </ScrollAnimation>
        </Panel>
      </React.Fragment>
    )}
  />
)
