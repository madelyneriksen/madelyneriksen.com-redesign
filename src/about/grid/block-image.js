import React from 'react';
import classNames from '../../common/functions/class-names.js';


class BlockImage extends React.Component {
  render() {
    const img = this.props.img;
    const position = this.props.position ? this.props.position : "center";
    const parallax = this.props.parallax ? "fixed" : "scroll";
    const size = this.props.size ? this.props.size : "cover";
    const extraClasses = this.props.className;
    return (
      <div
        className={classNames("w-100 hide-child", extraClasses)}
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: size,
          backgroundPosition: position,
          backgroundAttachment: parallax,
          backgroundRepeat: "no-repeat",
        }}>
        {this.props.children}
      </div>
    )
  }
}

export default BlockImage;
