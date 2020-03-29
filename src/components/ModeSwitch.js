import React, {Component} from "react";
import Switch from "react-switch";

import "../styles/components/modeSwitch.scss";

class ModeSwitch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: localStorage.getItem("darkMode") === "true"
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    localStorage.setItem("darkMode", checked);
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }

  render() {
    let iconStyle = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      fontSize: 20,
      color: "white",
      paddingRight: 2
    };
    let darkModeIcon = <i className="las la-moon" style={{...iconStyle}}></i>;
    let lightModeIcon = <i className="las la-sun" style={{...iconStyle}}></i>;
    return (
      <div className="switch">
        <Switch
          onChange={this.handleChange}
          checked={this.state.checked}
          uncheckedIcon={darkModeIcon}
          checkedIcon={lightModeIcon}
          onColor="#4d4646"
          offColor="#ffffff"
        />
      </div>
    );
  }
}

export default ModeSwitch;
