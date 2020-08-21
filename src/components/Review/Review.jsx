import React, { Component } from 'react';

class Review extends Component {

    submitFeedback = () => {
        console.log('submit');
    }

  render() {
    return (
      <div>
       
          <p>Review</p>
          <button onClick={this.submitFeedback}>Submit</button>
        
      </div>
    );
  }
}

export default Review;