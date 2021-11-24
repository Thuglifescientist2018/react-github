import "./App.css";
import React from "react";
import { Route, Routes, Link, BrowserRouter as Router } from "react-router-dom";
import Repos from "./components/repos";
import RepoDetail from "./components/RepoDetail";
import RepoDetail2 from "./components/RepoDetail2";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      query: "you",
    };
  }
  componentDidMount() {
    this.firstFetch();
  }
  firstFetch() {
    fetch(
      `https://api.github.com/search/repositories?q=${this.state.query} &page=1,&per_page=25`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.items);
        this.setState({ items: data.items });
      });
  }
  searchRepo = (e) => {
    e.preventDefault();
    fetch(
      `https://api.github.com/search/repositories?q=${this.state.query} &per_page=25`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.items) {
          this.setState({ items: data.items });
        }
      });
    this.setState({ query: e.target.value });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <div className="user_input">
              <form action="">
                <label
                  className="d-block text-white"
                  htmlFor="repo_name_input "
                >
                  Enter repo name below:{" "}
                </label>
                <input
                  type="text"
                  placeholder="enter the name of repo"
                  onChange={this.searchRepo}
                  id="repo_name_input"
                />
              </form>
              <Routes>
                <Route
                  path="/"
                  exact
                  element={<Repos items={this.state.items} />}
                />
                <Route path="/repo-detail" element={<RepoDetail />} />
              </Routes>
              <button onClick={this.nextPage}>Next Page</button>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
