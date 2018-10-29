import React, { Component, Fragment } from "react";
import KeyCodeBlock from "./KeyCodeBlock";

export default class KeyCode extends Component {
  state = { key: "", keyCode: "", code: "" };
  componentDidMount() {
    document.addEventListener("keydown", this.handleKey);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKey);
  }
  handleKey = e => {
    this.setState({ keyCode: e.which, key: e.key, code: e.code });
  };
  render() {
    const { keyCode, key, code } = this.state;
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
}
