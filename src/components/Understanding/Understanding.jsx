import React, { Component } from 'react';



class Understanding extends Component {
  
submitUnderstanding = (event) => {
  event.preventDefault();
    this.props.history.push('/3')
}
  
    render() {

    return (
      <div>
       
          <h2>How well are you understanding the content?</h2>
          <form onSubmit={this.submitUnderstanding}>
          <input type='number' placeholder='Understanding' />
        <button type='submit'>Next</button>
        </form>
      </div>
    );
  }
}

export default Understanding;