import React from 'react';
import Helmet from 'react-helmet';
import Navbar from './navbar.js';
import 'tachyons';
import './styles/custom.tachyons.css';


export default ({ children }) => (
  <div>
    <Helmet>
      <body className="mid-gray bg-near-white" />
    </Helmet>
    <Navbar />
    {children}
  </div>
)
