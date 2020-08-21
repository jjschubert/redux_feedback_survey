import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feeling extends Component {

  state = {
    feelings: 0
  }

    submitFeelings = (event) => {
      event.preventDefault();
      this.props.dispatch({type: 'ADD_FEELINGS', payload: this.state.feelings})
        this.props.history.push('/2')
    }

  render() {
    return (
      <div>
       
          <h2>How are you feeling today?</h2>
          <form onSubmit={this.submitFeelings}>
          <input required type='number' placeholder='Feeling' 
          onChange={(event) => this.setState({feelings: event.target.value})}/>
          <button type="submit">Next</button>
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
export default connect(mapStateToProps)(Feeling);