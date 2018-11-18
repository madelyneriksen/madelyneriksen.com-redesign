import React from 'react';
import classNames from './functions/class-names.js';
import { Link } from 'gatsby';
import { Location } from '@reach/router';


export default (props) => (
  <Location>
    {({ location }) => (
      <div className="pa3">
        <Link
          to={props.to}
          className={classNames(
            "underline f4",
            location.pathname === props.to ? "mid-gray no-underline" : "green hover-light-green"
          )}>
          {props.children}
        </Link>
      </div>
    )}
  </Location>
)
