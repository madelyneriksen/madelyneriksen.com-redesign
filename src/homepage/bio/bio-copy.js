import React from 'react';
import classNames from '../../common/functions/class-names.js';
import { StaticQuery, graphql } from 'gatsby';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';


const AnimatedCopy = props => (
  <ScrollAnimation animateIn={props.animation} animateOnce={true}>
    <h1 className="tc">{props.header}</h1>
    <div className="lh-copy f4" dangerouslySetInnerHTML={{__html: props.body}} />
  </ScrollAnimation>
)

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
        side2: markdownRemark(frontmatter: {type: {eq: "copy"}, name: {eq: "bio__side-2"}}) {
          html
          frontmatter {
            header
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <Panel justify="justify-end" gridArea="side-1">
          <AnimatedCopy
            header={data.side1.frontmatter.header}
            body={data.side1.html}
            animation="fadeInDown" />
        </Panel>
        <Panel justify="justify-start" gridArea="side-3">
          <AnimatedCopy
            header={data.side2.frontmatter.header}
            body={data.side2.html}
            animation="fadeInUp" />
        </Panel>
      </React.Fragment>
    )}
  />
)
