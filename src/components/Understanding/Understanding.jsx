import React, { Component } from 'react';
import { connect } from 'react-redux';


class Understanding extends Component {
  
  state = {
    understanding: 0
  }

submitUnderstanding = (event) => {
  event.preventDefault();
  this.props.dispatch({type: 'ADD_UNDERSTANDING', payload: this.state.understanding})
    this.props.history.push('/3')
}
  
    render() {

    return (
      <div>
       
          <h2>How well are you understanding the content?</h2>
          <form onSubmit={this.submitUnderstanding}>
          <input type='number' placeholder='Understanding' 
          onChange={(event) => this.setState({understanding: event.target.value})}/>
        <button type='submit'>Next</button>
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
export default connect(mapStateToProps)(Understanding);