import React from 'react';
import GridContainer from './grid-container.js';
import GridJumbotron  from './grid-jumbotron.js';
import GridNavigation from './grid-navigation.js';
import GridImages from './grid-images.js';
import GridSpacers from './grid-spacers.js';


export default () => (
  <GridContainer>
    <GridNavigation />
    <GridImages />
    <GridJumbotron />
    <GridSpacers />
  </GridContainer>
)
