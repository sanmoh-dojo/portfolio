import React, {Component} from "react";
import OverlayMenu from "react-overlay-menu";
import MenuContent from "./MenuContent";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({isOpen: !this.state.isOpen});
  }

  render() {
    return (
      <div className="menu">
        <div
          className={`nav-icon3 ${this.state.isOpen ? "open" : ""}`}
          onClick={this.handleClick}
        >
          <span />
          <span />
          <span />
          <span />
        </div>
        <OverlayMenu open={this.state.isOpen}>
          <MenuContent switchFunction={this.handleClick} />
        </OverlayMenu>
      </div>
    );
  }
}

export default Menu;
