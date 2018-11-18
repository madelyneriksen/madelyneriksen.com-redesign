import React from 'react';
import Link from '../../common/link.js';
import AnimatedText from './animated-text.js';


export default () => (
  <div
    className="flex flex-wrap justify-center items-center w-100 pa2 vh-100">
    <div className="w-100 mw7 pa2">
      <div>
        <p className="tracked">SOFTWARE DEVELOPER</p>
      </div>
      <div className="pv4" />
      <div className="f1 fw9 f-headline-ns tracked-tight b">
        <AnimatedText text="MADELYN" />
        <AnimatedText text="ERIKSEN" />
      </div>
      <div className="pv4" />
      <div>
        <p className="b">BACK END \</p>
        <p><span className="i">FRONT END &nbsp; </span><span className="sans-serif b">\</span></p>
        <p className="b">OPS.</p>
      </div>
    </div>
    <div className="db-ns dn w-100 mw6 tr">
      <div className="pv4">
        <Link to="/about">CONTACT</Link>
      </div>
      <div class="pv4">
        <Link to="/about">ABOUT</Link>
      </div>
      <div class="pv4">
        <Link to="https://github.com/madelyneriksen">GITHUB</Link>
      </div>
    </div>
  </div>
)
