import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper';
import './Feeling.css';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import swal from 'sweetalert';




class Feeling extends Component {

  state = {
    feelings: 0
  }

  //sends feedback to reducer
  submitFeelings = (event) => {
    if (this.state.feelings === 0) {
      swal({text:"This question is required", icon: "warning"});
    } else {
    event.preventDefault();
    this.props.dispatch({ type: 'ADD_FEELINGS', payload: this.state.feelings })
    this.props.history.push('/2')
    }
  }

  render() {
    return (
      <div className="container">
      
        <Paper id='paper'>
          <Typography variant='h5'>How are you feeling today? </Typography>
          <form onSubmit={this.submitFeelings}>
            <FormControl component="fieldset" onChange={(event) => this.setState({ feelings: event.target.value })}>
              <RadioGroup  >
                <FormControlLabel value="1" control={<Radio />} label="1" />
                <FormControlLabel value="2" control={<Radio />} label="2" />
                <FormControlLabel value="3" control={<Radio />} label="3" />
                <FormControlLabel value="4" control={<Radio />} label="4" />
                <FormControlLabel value="5" control={<Radio />} label="5" />
              </RadioGroup>
            </FormControl>

            <div className='submitBtn' >
              <Button variant="contained" type="submit">Next</Button>
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
export default connect(mapStateToProps)(Feeling);