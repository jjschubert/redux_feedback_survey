import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import './Success.css'


class Success extends Component {


  render() {
    return (
      <div className="container">
        <Paper id='paper'>
          <h3>Thanks! </h3>
          <p>Your feedback has been submitted.</p>
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

export default connect(mapStateToProps)(Success);