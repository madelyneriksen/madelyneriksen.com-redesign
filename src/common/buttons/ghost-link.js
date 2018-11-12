import React from 'react';
import { Link } from 'gatsby';
import classNames from '../functions/class-names.js';


export default (props) => (
    <Link
      className={classNames(props.color, "pv2 ph4 pointer ba no-underline")}
      to={props.to}>
      {props.children}
    </Link>
)
