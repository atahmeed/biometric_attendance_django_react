import React, { Component } from 'react';
import CustomLayout from './containers/layout'
import LatestView from './containers/LatestStudent'
import StudentView from './containers/StudentList'
import './App.css'
class App extends Component {
  render() {
    return (
      <div className="App">
        <CustomLayout>
          <div className="row">
            <div className="col s3 card left-list">
              <div className="">
                <StudentView/>
              </div>
            </div>
            <div className="col s9">
              <LatestView/>
            </div>
          </div>
        </CustomLayout>  
      </div>
    );
  }
}

export default App;
