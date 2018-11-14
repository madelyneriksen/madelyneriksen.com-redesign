import React from 'react';
import { Link } from 'gatsby';
import AnimatedText from './animated-text.js';


export default () => (
  <div
    className="flex flex-wrap justify-center items-center w-100 pa2 vh-100">
    <div className="w-100 mw7 pa2">
      <div>
        <p className="sans-serif tracked">SOFTWARE DEVELOPER</p>
      </div>
      <div className="pv4" />
      <div className="f1 f-headline-ns tracked-tight b">
        <AnimatedText text="MADELYN" />
        <AnimatedText text="ERIKSEN" />
      </div>
      <div className="pv4" />
      <div>
        <p className="b sans-serif">BACK END \</p>
        <p><span className="i">FRONT END &nbsp; </span><span className="sans-serif b">\</span></p>
        <p className="b sans-serif">OPS.</p>
      </div>
    </div>
    <div className="db-ns dn w-100 mw6 tr">
      <div class="pv4">
        <Link className="f5 green hover-light-green" to="/about">CONTACT</Link>
      </div>
      <div class="pv4">
        <Link className="f5 green hover-light-green" to="/about">ABOUT</Link>
      </div>
      <div class="pv4">
        <Link className="f5 green hover-light-green" to="/about">GITHUB</Link>
      </div>
    </div>
  </div>
)
