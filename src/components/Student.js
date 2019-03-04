import React from 'react';
import './css/student.css';
import Divider from '@material-ui/core/Divider';
class Students extends React.Component{
    render(){
        const students = this.props.studentlist;
        const totaldays = this.props.days;
        console.log(totaldays);
        const studentList = students.map(student => {
            const percentage = student.present/totaldays*100;
            return(
                <div key = {student.roll} className="names">
                  <div className="row listrow">
                    <div className="col s6 whiteText">
                      <big>{student.name}</big>
                    </div>
                    <div className="col s6 whiteText">
                      
                        Present: {percentage.toFixed(2)} %
                      
                    </div>
                  </div>
                </div>
            )
        });
        return( 
           <div className="student-list" >
              <h4 className="whiteText">Student List</h4>
              <Divider/>
               { studentList }
           </div> 
        )
    }
}
  
export default Students;