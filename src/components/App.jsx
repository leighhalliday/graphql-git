import React, { Component } from "react";
import TopLanguages from "./TopLanguages";
import data from "../data";

export default class App extends Component {
  state = {
    repositories: null
  };

  componentDidMount() {
    this.setState({ repositories: data.data.viewer.repositories });
  }

  render() {
    return (
      <div>
        <div
          style={{
            width: "100%",
            height: "75vh",
            maxHeight: "600px",
            maxWidth: "600px",
            margin: "0 auto",
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
          }}
        >
          <h2 style={{ textAlign: "center" }}>Top Languages</h2>
          {this.state.repositories ? (
            <TopLanguages repositories={this.state.repositories} />
          ) : (
            <span>Loading...</span>
          )}
        </div>
      </div>
    );
  }
}
