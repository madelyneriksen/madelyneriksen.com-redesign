import React, { Fragment } from 'react';
import { Link } from 'gatsby';


const Menu = () => (
  <div className="hero__menu bg-mid-gray flex items-center">
    <span className="near-white pa2">menu &rsaquo;</span>
  </div>
)

const Logo = () => (
  <div className="hero__logo bg-washed-red flex items-center justify-center">
    <div className="ba b--mid-gray mid-gray br-100 flex items-center justify-center h2 w2">
      <span><Link to="/" className="mid-gray no-underline">M</Link></span>
    </div>
  </div>
)

const Projects = () => (
  <div class="hero__preview dn bg-near-white flex-l items-center">
    <span className="mid-gray pa2">projects &rsaquo;</span>
  </div>
)

const Name = () => (
  <div class="hero__name dn bg-washed-red flex-l items-center">
    <Link to="/" className="f4 fw1 no-underline mid-gray">madelyn.eriksen()</Link>
  </div>
)

export default () => (
  <Fragment>
    <Menu />
    <Logo />
    <Projects />
    <Name />
  </Fragment>
)
