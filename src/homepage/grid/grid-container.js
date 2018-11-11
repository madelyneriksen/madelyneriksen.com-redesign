import React from 'react';
import randomChoice from '../../common/functions/random-choice.js';
import classNames from '../../common/functions/class-names.js';


const GridContainer = (props) => (
  <div className="w-100 pa2 mb1 near-white">
    <div
      className={
        classNames("flex flex-column justify-between pa3", props.extraClasses)
      }
      style={{minHeight: randomChoice("18rem", "20rem", "22rem", "24rem")}}>
      {props.children}
    </div>
  </div>
)

export default GridContainer;
