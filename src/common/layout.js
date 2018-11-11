import React from 'react';
import Helmet from 'react-helmet';
import 'tachyons';


export default ({ children }) => (
  <div>
    <Helmet>
      <body className="mid-gray bg-near-white" />
    </Helmet>
    {children}
  </div>
)
