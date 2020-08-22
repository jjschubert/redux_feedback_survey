import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button'
import { TextField, Paper, Typography } from '@material-ui/core';
import './Comments.css';


class Comments extends Component {

  state = {
    comments: ''
  }

  //sends feedback to reducer
  submitComments = (event) => {
    event.preventDefault();
    this.props.dispatch({ type: 'ADD_COMMENTS', payload: this.state.comments })
    this.props.history.push('/5')
  }

  render() {
    return (
      <div className='container'>
        <Paper id='paper'>
          <Typography variant='h5'>Any comments you want to share?</Typography>
          <form onSubmit={this.submitComments}>
            <TextField multiline variant="outlined" type='text' placeholder='Comments'
              onChange={(event) => this.setState({ comments: event.target.value })} />
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