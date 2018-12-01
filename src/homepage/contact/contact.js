import React from 'react';
import Form from './form.js';


export default () => (
  <div className="generic-grid min-vh-100-l" id="contact">
    <div style={{gridArea: "side-3"}}>
      <Form />
    </div>
    <div style={{gridArea: "side-1"}}>
    </div>
  </div>
)
