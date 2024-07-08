import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import About from "./Components/About";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 12;
  country = "in";
  apikey = "479ac70180ff4770a28cd9a4c23752c6";
  // apikey = process.env.REACT_APP_MY_NEWS_APICODE; is not working 

  state = {
    progress: 0,
  }

  setProgress = (progress) => {
    this.setState({ progress: progress })
  }

  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
          />
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} apikey={this.apikey} key={"general"} pageSize={this.pageSize} country={this.country} category="general" />} />
            <Route exact path="/business" element={<News setProgress={this.setProgress} apikey={this.apikey} key={"business"} pageSize={this.pageSize} country={this.country} category="business" />} />
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apikey={this.apikey} key={"entertainment"} pageSize={this.pageSize} country={this.country} category="entertainment" />} />
            <Route exact path="/general" element={<News setProgress={this.setProgress} apikey={this.apikey} key={"general"} pageSize={this.pageSize} country={this.country} category="general" />} />
            <Route exact path="/health" element={<News setProgress={this.setProgress} apikey={this.apikey} key={"health"} pageSize={this.pageSize} country={this.country} category="health" />} />
            <Route exact path="/science" element={<News setProgress={this.setProgress} apikey={this.apikey} key={"science"} pageSize={this.pageSize} country={this.country} category="science" />} />
            <Route exact path="/sports" element={<News setProgress={this.setProgress} apikey={this.apikey} key={"sports"} pageSize={this.pageSize} country={this.country} category="sports" />} />
            <Route exact path="/technology" element={<News setProgress={this.setProgress} apikey={this.apikey} key={"technology"} pageSize={this.pageSize} country={this.country} category="technology" />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
