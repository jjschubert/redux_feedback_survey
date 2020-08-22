import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';

class Support extends Component {

  state = {
    support: 0
  }

    submitSupport = (event) => {
      event.preventDefault();
      this.props.dispatch({type: 'ADD_SUPPORT', payload: this.state.support})
        this.props.history.push('/4')
    }

  render() {
    return (
      <div>
       
          <h2>How well are you being supported?</h2>
          <form onSubmit={this.submitSupport}>
          <TextField variant="outlined" required type='number' placeholder='Support' min="1" max="10"
          onChange={(event) => this.setState({support: event.target.value})} />
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

export default connect(mapStateToProps)(Support);