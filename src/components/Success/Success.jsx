import React, { Component } from 'react';
import { connect } from 'react-redux';

class Success extends Component {


  render() {
    return (
      <div>
        <h3>Thanks! Your feedback has been submitted.</h3>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => {
  return {
      reduxState
  }
}

export default connect(mapStateToProps)(Success);