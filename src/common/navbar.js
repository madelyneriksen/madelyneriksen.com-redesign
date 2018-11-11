import React from 'react';
import { Link } from 'gatsby';
import { FiAlignLeft } from 'react-icons/fi';
import './styles/navbar.css'


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
      <div className="w-100 bg-near-white">
        <div
          className={["navbar__menu bg-near-white",
            this.state.menuActive ? "navbar__menu__active" : null].join(' ')}>
            <button onClick={this.menuClick}
              className="f2 pv2 ph3 b--transparent bg-transparent pointer mid-gray absolute top-0 left-0">
              &times;
            </button>
            <div className="h-100 w-100 flex flex-column justify-center">
              <div className="self-center">
                <Link to="/" className="mid-gray no-underline">Home</Link>
              </div>
            </div>
          </div>
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
                madelyn.eriksen()
              </Link>
            </div>
            <div className="w1" />
          </div>
        </div>
    )
  };
};

export default NavBar;
