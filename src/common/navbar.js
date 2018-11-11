import React from 'react';
import { Link } from 'gatsby';


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
          className="w-100 pv2 flex justify-between items-center">
          <div />
          <div>
            <Link
              to="/"
              className="f3 tracked-tight mid-gray no-underline">
              madelyn eriksen
            </Link>
            </div>
          <div />
        </div>
      </div>
    )
  };
}

export default NavBar;
