import React from 'react';
import classNames from './functions/class-names.js';
import { Link } from 'gatsby';
import { Location } from '@reach/router';


export default (props) => {
  const internal = /^\/(?!\/)/.test(props.to);
  let result;
  if (internal) {
    result = (
      <Location>
        {({ location }) => (
          <Link
            to={props.to}
            className={classNames(
              "f4",
              location.pathname === props.to ? "mid-gray no-underline" : "green hover-light-green",
              props.className
            )}>
            {props.children}
          </Link>  
        )}
      </Location>  
    )
  } else {
    result = (
      <a href={props.to} className={classNames("f4 green hover-light-green", props.className)}>
        {props.children}
      </a>
    )
  }
  return result;
}
