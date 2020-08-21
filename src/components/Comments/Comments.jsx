import React, { Component } from 'react';
import { connect } from 'react-redux';

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
          <input type='text' placeholder='Comments' 
          onChange={(event) => this.setState({comments: event.target.value})} />
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

export default connect(mapStateToProps)(Comments);