import React, { Component } from 'react';
import Main from './Main';
import Sidebar from './Sidebar';
import './app.css'

class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-4 no-padding">
          <Sidebar />
        </div>
        <div className="col-sm-8 no-padding">
          <Main />
        </div>
    </div>
    )
  }
}

export default App;
