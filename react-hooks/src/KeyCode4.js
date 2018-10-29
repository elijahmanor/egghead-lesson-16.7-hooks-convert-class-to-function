import React, { Fragment, useState, useEffect } from "react";
import KeyCodeBlock from "./KeyCodeBlock";

const useDocumentKeyCode = () => {
  const [codes, setCodes] = useState({});
  useEffect(() => {
    const handleKey = ({ keyCode, key, code }) =>
      setCodes({ keyCode, key, code });
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);
  return codes;
};

export default function KeyCode() {
  const { keyCode, key, code } = useDocumentKeyCode();
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
