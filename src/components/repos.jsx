import React from "react";
import { Link, Routes, Route, BrowserRouter as Router } from "react-router-dom";

class Repos extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item: [] };
  }
  render() {
    return (
      <div className="RepoDetail2">
        <h1>List of repos</h1>
        <ol className="repos">
          {this.props.items ? (
            this.props.items.map((item, count) => (
              <div className="repo">
                {count + 1}
                <Link
                  to={{
                    pathname: `/repo-detail`,
                    state: item,
                  }}
                >
                  <h4>{item.name}</h4>
                </Link>

                <Link to="/repo-detail2" title="Click here to show on github">
                  Owner: {item.owner.login}
                </Link>
              </div>
            ))
          ) : (
            <h1> None of the Repos found</h1>
          )}
        </ol>
      </div>
    );
  }
}

export default Repos;
