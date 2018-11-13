import React from 'react';
import randomChoice from '../../common/functions/random-choice.js';
import 'animate.css';


class AnimatedLetter extends React.Component {
  constructor(props) {
    super(props);
    this.letterClick = this.letterClick.bind(this);
    this.state = {
      animation: "dib animated " + randomChoice(
        "fadeInLeft", "fadeInUp", "fadeInDown"
      ),
      delay: this.props.delay ? this.props.delay : "1s",
      };
    };

    letterClick() {
      let newAnimation;
      newAnimation = randomChoice(
        "jello", "tada", "rubberBand", "bounce", "flip"
      );
      newAnimation = "dib animated " + newAnimation;
      this.setState({delay: "0s"})
      this.setState({animation: newAnimation})
    };
    
  render() {
    return (
      <span
        className={this.state.animation + " pointer"}
        onClick={this.letterClick}
        style={{animationDelay: this.state.delay}}>
        {this.props.children}
      </span>
    );
  };
};


export default (props) => (
  <div>
    {props.text.split('').map((letter, i) => (
      <AnimatedLetter
        delay={(.2*i)+"s"}>
        {letter}
      </AnimatedLetter>
    ))}
  </div>
)
