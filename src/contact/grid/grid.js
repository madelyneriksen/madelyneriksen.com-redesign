import React from 'react';
import Form from '../form/form.js';
import '../styles/grid.css';


export default () => (
  <div className="contact__grid min-vh-100 pt5">
    <div className="bg-red contact__double-wide contact__double-high" />
    <div className="contact__double-wide contact__double-high">
      <Form />
    </div>
  </div>
)
