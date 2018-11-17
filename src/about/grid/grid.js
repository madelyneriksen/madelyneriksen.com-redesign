import React from 'react';
import '../styles/grid.css';
import BlockImage from './block-image.js';
import Pueblo from '../../../content/about/img/pueblo.jpg';
import MyPicture from '../../../content/about/img/me.jpeg';
import Sunset from '../../../content/about/img/sunset.jpeg';


class Grid extends React.Component {
  render() {
    return (
      <div className="about__grid min-vh-100 vh-100-l pt5">
        <BlockImage
          className="bg-blue about__double-high"
          img={Pueblo}
          size="cover`"
          parallax={true}
          position="left">
          <div className="w-100 h-100 child bg-black-40 white"></div>
        </BlockImage>
        <div className="bg-light-green w-100 about__double-wide navy pa2">
          <div className="center mw6 pv4">
        </div>
        </div>
        <div className="bg-white">
          <BlockImage
            img={MyPicture}
            className="h-100"
            position="center"
          />
        </div>
        <div className="bg-light-purple near-white w-100 pa2" />
        <BlockImage
          className="bg-light-purple about__double-wide"
          img={Sunset}
          parallax={true}
          position="top" />
      </div>
    )
  }
}

export default Grid;
