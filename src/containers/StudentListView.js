import React from 'react'; 
import Students from '../components/Student';
import axios from 'axios'
class StudentList extends React.Component{
    state = {
        students : [],
        totaldays: 0
    }
    getData(){
        axios.get('http://127.0.0.1:8000/api/student')
            .then(res => {
                this.setState({
                    students: res.data
                });
            });
            axios.get('http://127.0.0.1:8000/api/attendance')
            .then(res => {
                var attendance = res.data;
                var flags = [], output = [], l = attendance.length, i;
                for( i=0; i<l; i++) {
                    if( flags[attendance[i].date]) continue;
                    flags[attendance[i].date] = true;
                    output.push(attendance[i].date);
                }
                var totaldays = output.length;
                this.setState({
                    totaldays
                });
            });
    }
    componentDidMount(){
        this.getData();
        this.interval = setInterval(() => {
            this.getData();
        },500); 
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }
    render(){
        return(
            <Students students = {this.state.students} totaldays={this.state.totaldays}/>
        )
    }
}

export default StudentList;