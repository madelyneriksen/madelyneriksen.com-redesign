import React from 'react';
import '../styles/bio.css';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import Juniper from '../../../content/about/img/juniper.png';
import BioCopy from './bio-copy.js';


export default () => (
  <div className="bio__grid min-vh-100">
    <BioCopy />
    <div style={{gridArea: "side-2"}}>
      <ScrollAnimation animateIn="fadeInUp" className="h-100 w-100" animateOnce={true}>
        <div
          className="bg-light-gray h-100 w-100"
          style={{backgroundImage: `url("${Juniper}")`, backgroundSize: "cover"}}>
        </div>
      </ScrollAnimation>
    </div>
  </div>
)
