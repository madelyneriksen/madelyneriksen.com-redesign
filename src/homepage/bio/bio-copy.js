import React from 'react';
import classNames from '../../common/functions/class-names.js';
import { StaticQuery, graphql } from 'gatsby';
import ScrollAnimation from 'react-animate-on-scroll';
import Me from '../../../content/about/img/me.jpeg';
import Juniper from '../../../content/about/img/juniper.png';
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
        <div style={{gridArea: "side-3"}} className="flex flex-column justify-around items-center">
          <ScrollAnimation className="db icon-reactjs f-headline" animateIn="fadeInUp" animateOnce={true} />
          <ScrollAnimation className="db icon-python f-headline" animateIn="fadeInUp" animateOnce={true} />
          <ScrollAnimation className="db icon-nodejs f-headline" animateIn="fadeInUp" animateOnce={true} />
        </div>
        <Panel justify="justify-center" gridArea="side-2">
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
