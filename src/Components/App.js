import React, { Component } from 'react';
import './sidebar.css'
import Sidebar from './Sidebar';

class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-4">
          <Sidebar />
        </div>
        <div className="col-sm-8">
          <h3>World</h3>
        </div>
    </div>
    )
  }
}

export default App;
