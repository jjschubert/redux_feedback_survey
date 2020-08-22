import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button'
import { TextField } from '@material-ui/core';

class Comments extends Component {

  state = {
    comments: ''
  }

submitComments = (event) => {
    event.preventDefault();
    this.props.dispatch({type: 'ADD_COMMENTS', payload: this.state.comments})
    this.props.history.push('/5')
}

  render() {
    return (
      <div>
        <h2>Any comments you want to share?</h2>
       <form onSubmit={this.submitComments}>
          <TextField multiline variant="outlined" type='text' placeholder='Comments' 
          onChange={(event) => this.setState({comments: event.target.value})} />
          <Button variant="contained" type="submit">Next</Button>
          </form>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => {
  return {
      reduxState
  }
}

export default connect(mapStateToProps)(Comments);