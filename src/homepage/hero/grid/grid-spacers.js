import React, { Fragment } from 'react';


// All the generic spacer divs for the grid.


const GridBorderLeft = () => (
  <div className="hero__bor-l bg-mid-gray dn db-l" />
)

const GridBorderRight = () => (
  <div className="hero__bor-r bg-mid-gray dn db-l" />
)

const GridBorderBottom = () => (
  <div className="hero__w-w bg-washed-red dn db-l" />
)

export default () => (
  <Fragment>
    <GridBorderLeft />
    <GridBorderRight />
    <GridBorderBottom />
  </Fragment>
)
