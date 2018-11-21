import React from 'react';
import GridContainer from './grid-container.js';
import GridJumbotron  from './grid-jumbotron.js';
import GridNavigation from './grid-navigation.js';
import GridImages from './grid-images.js';
import GridSideJumbotron from './grid-side-jumbotron.js';
import GridDescription from './grid-description.js';
import GridSpacers from './grid-spacers.js';


export default () => (
  <GridContainer>
    <GridNavigation />
    <GridImages />
    <GridJumbotron />
    <GridSideJumbotron />
    <GridDescription />
    <GridSpacers />
  </GridContainer>
)
