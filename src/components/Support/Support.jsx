import React, { Component } from 'react';

class Support extends Component {

    submitSupport = (event) => {
      event.preventDefault();
        this.props.history.push('/4')
    }

  render() {
    return (
      <div>
       
          <h2>How well are you being supported?</h2>
          <form onSubmit={this.submitSupport}>
          <input type='number' placeholder='Support' />
        
          <button type="submit">Next</button>
          </form>
      </div>
    );
  }
}

export default Support;