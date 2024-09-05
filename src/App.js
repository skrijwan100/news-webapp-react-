import './App.css';
import React, { Component } from 'react';
import Navbar from './component/Navbar';
import News from './component/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  state = {
    progress: 0 // Initialize progress to 0
  }

  setProgress = (progress) => {
    this.setState({ progress }); // Correct state update
  }

  render() {
    return (
      <Router>
        <div>
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
          />
          <Navbar />
          <Routes>
            <Route path='/' element={<News setprogress={this.setProgress} key="general" country="us" category="general" />} />
            <Route path='/business' element={<News setprogress={this.setProgress} key="business" country="us" category="business" />} />
            <Route path='/entertainment' element={<News setprogress={this.setProgress} key="entertainment" country="us" category="entertainment" />} />
            <Route path='/health' element={<News setprogress={this.setProgress} key="health" country="us" category="health" />} />
            <Route path='/science' element={<News setprogress={this.setProgress} key="science" country="us" category="science" />} />
            <Route path='/sports' element={<News setprogress={this.setProgress} key="sports" country="us" category="sports" />} />
            <Route path='/technology' element={<News setprogress={this.setProgress} key="technology" country="us" category="technology" />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
