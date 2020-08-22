import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Edit extends Component {

    state = {

        feedback: {
        feeling: this.props.reduxState.feedbackReducer.feeling,
        understanding: this.props.reduxState.feedbackReducer.understanding,
        support: this.props.reduxState.feedbackReducer.support,
        comments: this.props.reduxState.feedbackReducer.comments
        },
        viewSubmit: false
    }

    //sends feedback to server
    submitFeedback = (event) => {
        if (this.state.feeling === "" || this.state.understanding === "" || this.state.support === "") {
            alert('please complete all fields')
        }
        else {
        //send updated feedback to redux
        axios.post('/feedback', this.props.reduxState.feedbackReducer)
            .then(response => {
                //go to success page
                this.props.dispatch({ type: 'CLEAR_FEEDBACK' })
                this.props.history.push('/success');
            }).catch(error => {
                alert('All fields are required')
                console.log('error in POST', error);
            })
        }
    }

    //validates form changes, pushes updated feedback to redux
    closeEditor = () => {
        if (this.state.feeling === "" || this.state.understanding === "" || this.state.support === "") {
            alert('please complete all fields')
        } else {
            this.props.dispatch({type: 'ADD_EDITED_FEEDBACK', payload: this.state.feedback})
            this.setState({
                ...this.state, 
                viewSubmit: true
            })
        }
    }

    render() {
        return (
            <div>
                <h2>Edit Your Feedback</h2>
                
                    {/* Needs labels when material UI is added */}
                    
                    <input type='number' defaultValue={this.props.reduxState.feedbackReducer.feeling}
                        onChange={(event) => this.setState({ feeling: event.target.value })} />
                    <input type='number' defaultValue={this.props.reduxState.feedbackReducer.understanding}
                        onChange={(event) => this.setState({ understanding: event.target.value })} />
                    <input type='number' defaultValue={this.props.reduxState.feedbackReducer.support}
                        onChange={(event) => this.setState({ support: event.target.value })} />
                    <input type='text' defaultValue={this.props.reduxState.feedbackReducer.comments}
                        onChange={(event) => this.setState({ comments: event.target.value })} />
                    
                
                    {/* Conditionally render done button or submit button */}
                    {this.state.viewSubmit ? <button onClick={this.submitFeedback}>Submit</button> :
                    <button onClick={(event) => this.closeEditor(event)}>Done</button>}
                    
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