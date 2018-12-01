import React, { Fragment } from 'react';
import Sunset from '../../../content/about/img/sunset.jpeg';


const ImageSlice = () => (
  <div className="hero__image-slice" style={{backgroundImage: `url(${Sunset})`}} />
)


const Image = () => (
  <div className="hero__image bg-blue" style={{backgroundImage: `url(${Sunset})`}} />
)

export default () => (
  <Fragment>
    <ImageSlice />
    <Image />
  </Fragment>
)
