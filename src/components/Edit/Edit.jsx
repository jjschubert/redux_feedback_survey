import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import './Edit.css';
import swal from 'sweetalert';

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
        if (this.state.feedback.feeling === "" || this.state.feedback.feeling > 5 || this.state.feedback.feeling < 1) {
            swal({ text: "Feeling score must be a number from 1 to 5", icon: "warning" });
        } else if (this.state.feedback.understanding === "" || this.state.feedback.understanding > 5 || this.state.feedback.understanding < 1) {
            swal({ text: "Understanding score must be a number from 1 to 5", icon: "warning" });
        }
        else if (this.state.feedback.support === "" || this.state.feedback.support > 5 || this.state.feedback.support < 1) {
            return swal({ text: "Support score must be a number from 1 to 5", icon: "warning" });
        }
        else {
            console.log('else block');
            this.props.dispatch({ type: 'ADD_EDITED_FEEDBACK', payload: this.state.feedback })
            this.setState({
                ...this.state,
                viewSubmit: true
            })
        }
    }

    render() {
        console.log(this.state.feedback)
        console.log(this.state.viewSubmit)
        return (
            <div className="container">


                <Paper id='paperEdit'>
                    <h2>Edit Your Feedback</h2>
                    <div>
                        <TextField required label="feeling" variant="outlined" type='number' defaultValue={this.props.reduxState.feedbackReducer.feeling} style={{ width: 130 }}
                            onChange={(event) => this.setState({
                                ...this.state,
                                feedback: { ...this.state.feedback, feeling: event.target.value }
                            })} InputProps={{ inputProps: { min: 0, max: 5 } }} />
                    </div>
                    <div>
                        <TextField required label="understanding" variant="outlined" type='number' defaultValue={this.props.reduxState.feedbackReducer.understanding} style={{ width: 130 }}
                            onChange={(event) => this.setState({
                                ...this.state,
                                feedback: { ...this.state.feedback, understanding: event.target.value }
                            })} InputProps={{ inputProps: { min: 0, max: 5 } }} />
                    </div>
                    <div>
                        <TextField required label="support" variant="outlined" type='number' defaultValue={this.props.reduxState.feedbackReducer.support} style={{ width: 130 }}
                            onChange={(event) => this.setState({
                                ...this.state,
                                feedback: { ...this.state.feedback, support: event.target.value }
                            })} InputProps={{ inputProps: { min: 0, max: 5 } }} />
                    </div>
                    <div>
                        <TextField multiline label="comments" variant="outlined" type='text' defaultValue={this.props.reduxState.feedbackReducer.comments} style={{ width: 130 }}
                            onChange={(event) => this.setState({
                                ...this.state,
                                feedback: { ...this.state.feedback, comments: event.target.value }
                            })} />
                    </div>
                    <div className='submitBtn' >
                        {/* Conditionally render done button or submit button */}
                        {this.state.viewSubmit ? <Button variant="contained" color="primary" onClick={this.submitFeedback}>Submit</Button> :
                            <Button variant="contained" onClick={(event) => this.closeEditor(event)}>Done</Button>}
                    </div>
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

export default connect(mapStateToProps)(Edit);