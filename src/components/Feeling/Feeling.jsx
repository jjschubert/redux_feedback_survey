import React, { Component } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";

class Feeling extends Component {

    submitFeelings = () => {
        this.props.history.push('/2')
    }

  render() {
    return (
      <div>
       
          <p>Feeling</p>
          <button onClick={this.submitFeelings}>Next</button>
        
      </div>
    );
  }
}

export default Feeling;