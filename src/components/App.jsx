import React, { Component } from "react";
import TopLanguages from "./TopLanguages";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const REPOSITORIES = gql`
  {
    viewer {
      repositories(last: 100, isFork: false) {
        nodes {
          name
          description
          url
          languages(first: 5) {
            nodes {
              color
              name
            }
          }
        }
      }
    }
  }
`;

export default class App extends Component {
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

          <Query query={REPOSITORIES} variables={{}}>
            {({ data, loading }) =>
              loading ? (
                <span>I am loading your data...</span>
              ) : (
                <TopLanguages repositories={data.viewer.repositories} />
              )
            }
          </Query>
        </div>
      </div>
    );
  }
}
