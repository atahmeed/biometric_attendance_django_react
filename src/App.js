import React, { Component } from 'react';
import CustomLayout from './containers/layout'
import StudentList from './containers/StudentListView'
class App extends Component {
  render() {
    return (
      <div className="App" align="center">
        <h1>Course: IOT</h1>
        <CustomLayout>
          <StudentList/>
        </CustomLayout>  
      </div>
    );
  }
}

export default App;
