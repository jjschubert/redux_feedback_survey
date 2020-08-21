import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Review extends Component {

  submitFeedback = () => {
    console.log('submit');
    axios.post('/feedback', this.props.reduxState.feedbackReducer)
    .then( response => {
      alert('Thanks! Your feedback has been recorded')
      //go home
      this.props.history.push('/');
    }).catch(error => {
      console.log('error in POST', error);
    })
  }

  render() {
    return (
      <div>

        <h2>Review Your Feedback</h2>

        <p>Feelings: {this.props.reduxState.feedbackReducer.feeling}</p>
        <p>Understanding: {this.props.reduxState.feedbackReducer.understanding}</p>
        <p>Support: {this.props.reduxState.feedbackReducer.support}</p>
        <p>Comments: {this.props.reduxState.feedbackReducer.comments}</p>

        <button onClick={this.submitFeedback}>Submit</button>

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