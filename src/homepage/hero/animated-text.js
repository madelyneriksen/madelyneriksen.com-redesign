import React from 'react';
import randomChoice from '../../common/functions/random-choice.js';
import 'animate.css';


export default (props) => (
  <div>
    {props.text.split('').map((letter, i) => (
      <span
        className={"dib animated "+randomChoice("fadeInLeft", "fadeInUp", "fadeInDown")}
        style={{animationDelay: (.2*i)+"s"}}>
        {letter}
      </span>
    ))}
  </div>
)
