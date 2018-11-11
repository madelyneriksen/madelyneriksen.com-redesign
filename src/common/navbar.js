import React from 'react';
import { Link } from 'gatsby';
import { FiAlignLeft } from 'react-icons/fi';


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.menuClick = this.menuClick.bind(this);
    this.state = {
      menuActive: false,
    };
  };

  menuClick() {
    const menuActiveState = this.state.menuActive;
    this.setState({menuActive: !menuActiveState});
  };

  render() {
    return (
      <div>
        <div
          className="w-100 pa2 flex justify-between items-center">
          <div className="w1">
            <button
              onClick={this.menuClick}
              className="f3 b--transparent bg-transparent pointer mid-gray">
              <FiAlignLeft />
            </button>
          </div>
          <div>
            <Link
              to="/"
              className="f3 tracked-tight mid-gray no-underline">
              madelyn eriksen
            </Link>
          </div>
          <div className="w1" />
        </div>
      </div>
    )
  };
};

export default NavBar;
