import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
      width: 275,
      marginBottom:25,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  };
class Students extends React.Component{
    render(){
        const { classes } = this.props;
    
        const students = this.props.students;
        const totaldays = this.props.totaldays;
        const studentList = students.map(student => {
            return(
                <div key = {student.roll} >
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Course: IOT 101
                            </Typography>
                            <Typography variant="h5" component="h2">
                            {student.name}
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                            Roll: {student.roll}
                            </Typography>
                            <Typography component="p">
                            Attendance Percentage: {student.present/totaldays*100} %<br/>
                            Total Present: {student.present}
                            
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
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
Students.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(Students);