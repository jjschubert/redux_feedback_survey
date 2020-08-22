import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import './Edit.css';

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
            <div className="container">
                <h2>Edit Your Feedback</h2>
                
                <Paper id='paper'>
                    
                    <TextField label="feeling" variant="outlined" type='number' defaultValue={this.props.reduxState.feedbackReducer.feeling} min="1" max="10"
                        onChange={(event) => this.setState({ feeling: event.target.value })} />
                    <TextField label="understanding" variant="outlined" type='number' defaultValue={this.props.reduxState.feedbackReducer.understanding} min="1" max="10"
                        onChange={(event) => this.setState({ understanding: event.target.value })} />
                    <TextField label="support" variant="outlined" type='number' defaultValue={this.props.reduxState.feedbackReducer.support} min="1" max="10"
                        onChange={(event) => this.setState({ support: event.target.value })} />
                    <TextField multiline label="comments" variant="outlined" type='text' defaultValue={this.props.reduxState.feedbackReducer.comments}
                        onChange={(event) => this.setState({ comments: event.target.value })} />
                    
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