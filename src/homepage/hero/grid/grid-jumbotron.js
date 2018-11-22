import React, { Fragment } from 'react';
import Link from '../../../common/link.js';


const Jumbotron = () => (
  <div className="hero__jumbotron bg-near-white flex items-center pa3">
    <div>
      <h1 className="f1-ns mid-gray">hey! I'm Maddie.</h1>
      <span className="sans-serif mid-gray lh-copy">I'm a software developer, creating web applications and building data pipelines.</span>
    </div>
  </div>
)

const SideJumbotron = () => (
  <div className="hero__side-jumbotron flex flex-column-l items-center items-end-l justify-around pr5-l">
    <Link to="/about">ABOUT ME</Link>
    <Link to="https://github.com/madelyneriksen/">PROJECTS</Link>
    <Link to="/contact">CONTACT</Link>
  </div>
)

const Description = () => (
  <div class="hero__desc bg-near-white pa3 flex items-center">
    <div>
      <p class="mid-gray b">Currently I live in LA.</p>
      <p class="fw1 mid-gray lh-copy">I work on data collection tools with Python and React.</p>
    </div>
  </div>
)

export default () => (
  <Fragment>
    <Jumbotron />
    <SideJumbotron />
    <Description />
  </Fragment>
)
