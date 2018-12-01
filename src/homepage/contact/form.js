import React from 'react';
import './styles/form-grid.css';


const formClasses = "w-100 bg-transparent br-0 bl-0 bt-0 bb b--mid-gray pa2";


export default () => (
  <form
    action="https://www.briskforms.com/go/05fe3e0bd88ddc64d0c5e7794820268c"
    method="POST"
    className="h-100 flex items-center justify-center">
      <div className="contact__form-grid w-100 pa2 mw6">
        <input type="text" name="name" placeholder="Name"
          className={formClasses} required />
        <input type="text" name="email" placeholder="Email Address"
          className={formClasses} required />
        <input
          type="text" name="subject" placeholder="Subject"
          className={formClasses + " contact__double-wide"} required />
        <textarea name="message" placeholder="Questions, comments, concerns..." style={{resize: "none"}}
          className={formClasses + " contact__double-wide"} rows="5" required />
        <div className="contact__double-wide tc">
          <input type="submit" value="Submit" className="w-100 mw5 ba b--black pa2"/>
        </div>
      </div>
  </form>
)
