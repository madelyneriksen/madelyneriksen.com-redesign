import React from 'react';
import AnimatedText from './animated-text.js';


export default () => (
  <div
    className="flex flex-wrap justify-center items-center w-100 pa2"
    style={{minHeight: "95vh"}}>
    <div className="w-100 mw7 pa2">
      <div>
        <p className="sans-serif tracked">SOFTWARE DEVELOPER</p>
      </div>
      <div className="pv4" />
      <div className="f1 f-subheadline-ns tracked-tight">
        <AnimatedText text="MADELYN" />
        <AnimatedText text="ERIKSEN" />
      </div>
      <div className="pv4" />
      <div>
        <p className="b sans-serif tracked">BACK END \</p>
        <p><span className="i">FRONT END &nbsp; </span><span className="sans-serif b">\</span></p>
        <p className="b sans-serif tracked">OPERATIONS.</p>
      </div>
    </div>
    <div>
      <p className="f4 i tc">Let's make something awesome.</p>
    </div>
  </div>
)
