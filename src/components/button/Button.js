import React from "react";
import "./Button.css";

export default function Button({ text, className, href, newTab, theme }) {
  return (
    <div className={className}>
      <a
        className={`main-button${className ? ` ${className}` : ""}`}
        href={href}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noopener noreferrer" : undefined}
        style={{ backgroundColor: theme.accentColor, color: theme.text }}
      >
        {text}
      </a>
    </div>
  );
}
