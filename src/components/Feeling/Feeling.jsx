import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import './Feeling.css';
import Typography from '@material-ui/core/Typography';

class Feeling extends Component {

  state = {
    feelings: 0
  }

  //sends feedback to reducer
    submitFeelings = (event) => {
      event.preventDefault();
      this.props.dispatch({type: 'ADD_FEELINGS', payload: this.state.feelings})
        this.props.history.push('/2')
    }

  render() {
    return (
      <div className="container">
      <Paper id='paper'>
       
          <Typography variant='h5'>How are you feeling today?</Typography>
          <form onSubmit={this.submitFeelings}>
          <TextField variant="outlined" required type='number' placeholder='Feeling' min="1" max="10"
          onChange={(event) => this.setState({feelings: event.target.value})}/>
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
export default connect(mapStateToProps)(Feeling);