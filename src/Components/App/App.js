import React, { Component } from 'react';
import Main from '../Main/Main';
import Sidebar from '../Sidebar/Sidebar';
import './app.css'

class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-12 col-md-4 no-padding">
          <Sidebar />
        </div>
        <div className="col-12 col-md-8 no-padding">
          <Main />
        </div>
    </div>
    )
  }
}

export default App;
