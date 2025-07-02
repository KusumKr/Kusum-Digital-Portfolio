import React, { Component } from "react";
import girlCoding from "../../assets/images/girl coding.svg";

class FeelingProud extends Component {
  render() {
    return (
      <img
        src={girlCoding}
        alt="Girl coding"
        style={{ width: "100%", maxWidth: "400px", height: "auto" }}
      />
    );
  }
}

export default FeelingProud;
