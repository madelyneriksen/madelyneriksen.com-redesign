import React from 'react';
import Link from '../../../common/link.js';


export default () => (
  <div className="hero__side-jumbotron flex flex-column-l items-center items-end-l justify-around pr5-l">
    <Link to="/about">ABOUT ME</Link>
    <Link to="https://github.com/madelyneriksen/">PROJECTS</Link>
    <Link to="/contact">CONTACT</Link>
  </div>
)
