import React, { Component } from 'react';

class Support extends Component {

    submitSupport = () => {
        this.props.history.push('/4')
    }

  render() {
    return (
      <div>
       
          <p>Support</p>
          <button onClick={this.submitSupport}>Next</button>
        
      </div>
    );
  }
}

export default Support;