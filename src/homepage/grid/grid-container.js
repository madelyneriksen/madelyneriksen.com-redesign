import React from 'react';


const GridContainer = ({ children }) => (
  <div className="w-100 pa2 near-white mb1">
    <div
      className="bg-light-red flex flex-column justify-between pa3"
      style={{minHeight: Math.floor(Math.random() * 11) + 18 + "rem"}}>
      {children}
    </div>
  </div>
)

export default GridContainer;
