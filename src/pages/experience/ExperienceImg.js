import React, { Component } from "react";
import DesignImg from "../../assets/images/design.svg";

export default class ExperienceImg extends Component {
  render() {
    return (
      <img
        src={DesignImg}
        alt="Design"
        style={{ width: "100%", height: "auto" }}
      />
    );
  }
}
