import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Edit extends Component {

    state = {
        feeling: this.props.reduxState.feedbackReducer.feeling,
        understanding: this.props.reduxState.feedbackReducer.understanding,
        support: this.props.reduxState.feedbackReducer.support,
        comments: this.props.reduxState.feedbackReducer.comments
    }

    submitFeedback = (event) => {
        // event.preventDefault();
        axios.post('/feedback', this.props.reduxState.feedbackReducer)
            .then(response => {
                //go to success page
                this.props.dispatch({ type: 'CLEAR_FEEDBACK' })
                this.props.history.push('/success');
            }).catch(error => {
                console.log('error in POST', error);
            })
    }

    render() {
        return (
            <div>
                <h2>Edit Your Feedback</h2>
                
                    {/* Needs labels when material UI is added */}
                    <input required type='number' defaultValue={this.props.reduxState.feedbackReducer.feeling}
                        onChange={(event) => this.setState({ feeling: event.target.value })} />
                    <input required type='number' defaultValue={this.props.reduxState.feedbackReducer.understanding}
                        onChange={(event) => this.setState({ understanding: event.target.value })} />
                    <input required type='number' defaultValue={this.props.reduxState.feedbackReducer.support}
                        onChange={(event) => this.setState({ support: event.target.value })} />
                    <input type='text' defaultValue={this.props.reduxState.feedbackReducer.comments}
                        onChange={(event) => this.setState({ comments: event.target.value })} />
                    
                    <button onClick={() => this.props.dispatch({type: 'ADD_EDITED_FEEDBACK', payload: this.state})}>Done</button>

                    {/* make this conditionally render */}
                    <button onClick={this.submitFeedback}>Submit</button>
                

            </div>
        );
    }
}

const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapStateToProps)(Edit);