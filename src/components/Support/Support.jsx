import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper';
import './Support.css';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import swal from 'sweetalert';

class Support extends Component {

  state = {
    support: 0
  }

  //sends feedback to reducer
  submitSupport = (event) => {
    if (this.state.support === 0) {
      swal({text:"This question is required", icon: "warning"});
    } else {
    event.preventDefault();
    this.props.dispatch({ type: 'ADD_SUPPORT', payload: this.state.support })
    this.props.history.push('/4')
    }
  }

  render() {
    return (
      <div className="container">
        <Paper id='paper'>
          <Typography variant='h5'>How well are you being supported?</Typography>
          <form onSubmit={this.submitSupport}>
              <FormControl component="fieldset" onChange={(event) => this.setState({ support: event.target.value })}>
              <RadioGroup >
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

export default connect(mapStateToProps)(Support);