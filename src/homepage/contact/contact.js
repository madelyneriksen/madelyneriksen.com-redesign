import React from 'react';
import Form from './form.js';


export default () => (
  <div className="generic-grid min-vh-100-l double-left-grid" id="contact">
    <div style={{gridArea: "side-3"}}>
      <Form />
    </div>
    <div style={{gridArea: "side-1"}} className="flex justify-center items-center">
      <div className="mw7">
        <h1>Contact Me!</h1>
        <p className="lh-copy f4">Have an interesting proposal, some questions, or just want to say hi? Get in touch with me and we can talk!</p>
        <p className="lh-copy f4">I'm open to hearing about new opportunities in web development or e-commerce.</p>
      </div>
    </div>
  </div>
)
