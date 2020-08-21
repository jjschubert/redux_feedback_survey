import React, { Component } from 'react';


class Comments extends Component {

submitComments = (event) => {
    event.preventDefault();
    this.props.history.push('/5')
}

  render() {
    return (
      <div>
        <h2>Any comments you want to share?</h2>
       <form onSubmit={this.submitComments}>
          <input type='text' placeholder='Comments' />
          <button type="submit">Next</button>
          </form>
      </div>
    );
  }
}

export default Comments;