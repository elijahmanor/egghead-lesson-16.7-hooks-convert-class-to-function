import React from "react";

export default function KeyCodeBlock({ header, code }) {
  return (
    <section className="KeyCode-block">
      <header className="KeyCode-header">{header}</header>
      <div className="KeyCode-code">{code}</div>
    </section>
  );
}
