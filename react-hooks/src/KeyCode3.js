import React, { Fragment, useState, useEffect } from "react";
import KeyCodeBlock from "./KeyCodeBlock";

export default function KeyCode() {
  const [{ keyCode, key, code }, setCodes] = useState({});

  useEffect(() => {
    const handleKey = ({ keyCode, key, code }) =>
      setCodes({ keyCode, key, code });
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  });

  return (
    <main className="KeyCode">
      {keyCode ? (
        <Fragment>
          <KeyCodeBlock header="keyCode" code={keyCode} />
          <KeyCodeBlock header="key" code={key} />
          <KeyCodeBlock header="code" code={code} />
        </Fragment>
      ) : (
        <h1>Press Any Key</h1>
      )}
    </main>
  );
}
