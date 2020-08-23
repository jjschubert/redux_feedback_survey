import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper';
import './Understanding.css';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';


class Understanding extends Component {

  state = {
    understanding: 0
  }

  //sends feedback to reducer
  submitUnderstanding = (event) => {
    if (this.state.understanding === 0) {
      alert('This question is required')
    } else {
    event.preventDefault();
    this.props.dispatch({ type: 'ADD_UNDERSTANDING', payload: this.state.understanding })
    this.props.history.push('/3')
    }
  }

  render() {

    return (
      <div className="container">
        <Paper id='paper'>
          <Typography variant='h5'>How well are you understanding the content?</Typography>
          <form onSubmit={this.submitUnderstanding}>
          <FormControl component="fieldset" onChange={(event) => this.setState({ understanding: event.target.value })}>
              <RadioGroup >
                <FormControlLabel value="1" control={<Radio />} label="1" />
                <FormControlLabel value="2" control={<Radio />} label="2" />
                <FormControlLabel value="3" control={<Radio />} label="3" />
                <FormControlLabel value="4" control={<Radio />} label="4" />
                <FormControlLabel value="5" control={<Radio />} label="5" />
              </RadioGroup>
            </FormControl>

            <div className='submitBtn' >
              <Button variant="contained" type='submit'>Next</Button>
            </div>
          </form>
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
export default connect(mapStateToProps)(Understanding);