import React from 'react';
import './styles/form-grid.css';


const formClasses = "w-100 bg-transparent br-0 bl-0 bt-0 bb b--mid-gray pa2 mid-gray contact__form-item";


export default () => (
  <React.Fragment>
    <form
      action="https://www.briskforms.com/go/05fe3e0bd88ddc64d0c5e7794820268c"
      method="POST"
      className="h-100 flex items-center justify-center">
      <div className="contact__form-grid w-100 pa2">
        <input type="text" name="name" placeholder="Name"
          className={formClasses} required />
        <input type="text" name="email" placeholder="Email Address"
          className={formClasses} required />
        <input
          type="text" name="subject" placeholder="Subject"
          className={formClasses} required />
        <textarea name="message" placeholder="Questions, comments, concerns..." style={{resize: "none"}}
          className={formClasses} rows="5" required />
        <div className="tc">
          <input type="submit" value="SUBMIT" className="w-100 mw5 bn bg-washed-red pa3 mid-gray pointer grow b"/>
        </div>
      </div>
    </form>
  </React.Fragment>
)
