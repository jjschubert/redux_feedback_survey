import React, { Component } from 'react';

class Feeling extends Component {

    submitFeelings = (event) => {
      event.preventDefault();
        this.props.history.push('/2')
    }

  render() {
    return (
      <div>
       
          <h2>How are you feeling today?</h2>
          <form onSubmit={this.submitFeelings}>
          <input type='number' placeholder='Feeling' />
          <button type="submit">Next</button>
          </form>
      </div>
    );
  }
}

export default Feeling;