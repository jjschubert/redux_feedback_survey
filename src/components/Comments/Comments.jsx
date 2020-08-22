import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button'
import { TextField } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import './Comments.css'

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
      <div className='container'>
        <Paper id='paper'>
        <h2>Any comments you want to share?</h2>
       <form onSubmit={this.submitComments}>
          <TextField multiline variant="outlined" type='text' placeholder='Comments' 
          onChange={(event) => this.setState({comments: event.target.value})} />
          <div className='submitBtn' >
          <Button variant="contained" type="submit">Next</Button>
          </div>
          </form>
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

export default connect(mapStateToProps)(Comments);