import React from 'react';
import GridBlogContents from './grid-blog-posts.js';
import GridProjectContents from './grid-projects.js';
import '../styles/grid.css';
import '../../styles/font-mfizz.css';



const Grid = () => (
    <div className="homepage__grid mw8">
      <GridProjectContents />
      <GridBlogContents />
    </div>
)

export default Grid;
