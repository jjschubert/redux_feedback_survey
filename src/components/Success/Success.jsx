import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import './Success.css'


class Success extends Component {


  render() {
    return (
      <div className="container">
        <Paper id='paper'>
          <h3>Thanks! </h3>
          <p>Your feedback has been submitted.</p>
          <Button variant="contained" onClick={() => {this.props.history.push('/')}}>New Survey</Button>
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