import React from 'react';


export default props => (
  <div className="w-100 h-100 child bg-black-40 white">
    <div dangerouslySetInnerHTML={{ __html: props.content }} className="dib"></div>
  </div>
)
