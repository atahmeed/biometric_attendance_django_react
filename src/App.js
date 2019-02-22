import React, { Component } from 'react';
import CustomLayout from './containers/layout'
import StudentList from './containers/StudentListView'
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <CustomLayout>
          <StudentList/>
        </CustomLayout>  
      </div>
    );
  }
}

export default App;
