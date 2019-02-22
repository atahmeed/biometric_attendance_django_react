import React from 'react'; 
import Students from '../components/Student';
import axios from 'axios'
class StudentList extends React.Component{
    state = {
        students : []
    }
    getData(){
        axios.get('http://127.0.0.1:8000/api/student')
            .then(res => {
                this.setState({
                    students: res.data
                });
            })
    }
    componentDidMount(){
        this.getData();
        this.interval = setInterval(() => {
            this.getData();
        },100); 
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }
    render(){
        return(
            <Students students = {this.state.students}/>
        )
    }
}

export default StudentList;