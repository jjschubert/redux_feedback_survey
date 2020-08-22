import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Review.css'

class Review extends Component {

  submitFeedback = () => {
    console.log('submit');
    //pushes to feedbackReducer object to server
    axios.post('/feedback', this.props.reduxState.feedbackReducer)
      .then(response => {
        //go to success page
        this.props.history.push('/success');
      }).catch(error => {
        console.log('error in POST', error);
      })
  }

  editFeedback = () => {
    this.props.history.push('edit');
  }

  render() {
    return (
      <div className="container">
        <Paper id='paper'>
          <Typography variant='h5'>Review Your Feedback</Typography>

          <Typography variant='h6'>Feelings: {this.props.reduxState.feedbackReducer.feeling}</Typography>
          <Typography variant='h6'>Understanding: {this.props.reduxState.feedbackReducer.understanding}</Typography>
          <Typography variant='h6'>Support: {this.props.reduxState.feedbackReducer.support}</Typography>
          <Typography variant='h6'>Comments: {this.props.reduxState.feedbackReducer.comments}</Typography>
          <div className='submitBtn' >
            <Button variant="contained" color="secondary" onClick={this.editFeedback}>Edit</Button>
            <Button variant="contained" color="primary" onClick={this.submitFeedback}>Submit</Button>
          </div>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => {
  return {
    reduxState
  }
}

export default connect(mapStateToProps)(Review);