import React from 'react';

class Students extends React.Component{
    render(){
        const {students} = this.props;
        const studentList = students.map(student => {
            return(
                <div key = {student.roll} >
                    <h3>Name : {student.name} Roll : {student.roll} </h3>
                    <h5>Present: {student.present}</h5>
                </div>
            )
        });
        return(
           <div className="student-list" >
               { studentList }
           </div> 
        )
    }
}
export default Students;