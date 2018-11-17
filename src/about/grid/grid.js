import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import '../styles/grid.css';
import BlockImage from './block-image.js';
import HoverReveal from './hover-reveal.js';
import Pueblo from '../../../content/about/img/pueblo.jpg';
import MyPicture from '../../../content/about/img/me.jpeg';
import Sunset from '../../../content/about/img/sunset.jpeg';


export default () => (
  <StaticQuery
    query={graphql`
      query {
        pueblo: markdownRemark(frontmatter: {name: {eq: "about__pueblo"}}) {
          html
        }
        aboutMe: markdownRemark(frontmatter: {name: {eq: "about__about-me"}}) {
          html
        }
        tresVolcanes: markdownRemark(frontmatter: {name: {eq: "about__tres-volcanes"}}) {
          html
        }
      } 
    `}
    render={({ pueblo, aboutMe, tresVolcanes }) => (
      <div className="about__grid min-vh-100 vh-100-l pt5">
        <BlockImage
          className="bg-blue about__double-high"
          img={Pueblo}
          size="cover"
          position="left">
          <HoverReveal content={pueblo.html} />
        </BlockImage>
        <div
          className="bg-light-green w-100 about__double-wide navy pa2"
          dangerouslySetInnerHTML={{ __html: aboutMe.html}} />
        <div className="bg-white">
          <BlockImage
            img={MyPicture}
            className="h-100"
            position="center" />
        </div>
        <div className="bg-light-purple near-white w-100 pa2" />
        <BlockImage
          className="bg-light-purple about__double-wide"
          img={Sunset}
          position="center">
          <HoverReveal content={tresVolcanes.html} />
        </BlockImage>
      </div>
    )}
  />
)
