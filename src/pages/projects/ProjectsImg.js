import React from "react";
import projectsImg from "../../assets/images/projects.svg";

export default function ProjectsImg() {
  return (
    <img
      src={projectsImg}
      alt="Projects"
      style={{ width: "100%", maxWidth: "400px", height: "auto" }}
    />
  );
}
