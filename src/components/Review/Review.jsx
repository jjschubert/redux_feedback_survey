import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Button from '@material-ui/core/Button'

class Review extends Component {

  submitFeedback = () => {
    console.log('submit');
    axios.post('/feedback', this.props.reduxState.feedbackReducer)
    .then( response => {
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
      <div>

        <h2>Review Your Feedback</h2>

        <p>Feelings: {this.props.reduxState.feedbackReducer.feeling}</p>
        <p>Understanding: {this.props.reduxState.feedbackReducer.understanding}</p>
        <p>Support: {this.props.reduxState.feedbackReducer.support}</p>
        <p>Comments: {this.props.reduxState.feedbackReducer.comments}</p>

        <Button variant="contained" color="primary" onClick={this.submitFeedback}>Submit</Button>
        <Button variant="contained" color="secondary" onClick={this.editFeedback}>Edit</Button>

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