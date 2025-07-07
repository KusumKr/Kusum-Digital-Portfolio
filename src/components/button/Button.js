import React from "react";
import "./Button.css";

export default function Button({
  text,
  className,
  href,
  newTab,
  theme,
  onClick,
  type,
}) {
  if (onClick || type) {
    return (
      <div className={className}>
        <button
          className={`main-button${className ? ` ${className}` : ""}`}
          style={{ backgroundColor: theme?.accentColor, color: theme?.text }}
          onClick={onClick}
          type={type || "button"}
        >
          {text}
        </button>
      </div>
    );
  }
  return (
    <div className={className}>
      <a
        className={`main-button${className ? ` ${className}` : ""}`}
        href={href}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noopener noreferrer" : undefined}
        style={{ backgroundColor: theme?.accentColor, color: theme?.text }}
      >
        {text}
      </a>
    </div>
  );
}

// Use 'main-button-green' class for a bright green button variant (e.g., contact form submit)
