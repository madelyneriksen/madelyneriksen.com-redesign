import React from 'react';
import Link from './link.js';


export default (props) => (
      <div className="pa3">
        <Link to={props.to}>{props.children}</Link>
      </div>
)
