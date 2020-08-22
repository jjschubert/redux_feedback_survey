import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminItem from '../AdminItem/AdminItem.jsx'
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';

class Admin extends Component {

    componentDidMount() {
        this.getFeedback();
      }
    
      getFeedback = () => {
        axios.get('/feedback')
        .then( response => {
          console.log(response.data);
          //send pizza data to redux
          this.props.dispatch({type: 'SET_FEEDBACK', payload: response.data});
        }).catch(error => {
          console.log('error in getFeedback', error);
        })
      }

  render() {
    return (
        <TableContainer component={Paper}>
          <Table >
              <TableHead>
                  <TableRow>
                      <TableCell>Feeling</TableCell>
                      <TableCell>Comprehension</TableCell>
                      <TableCell>Support</TableCell>
                      <TableCell>Comments</TableCell>
                      <TableCell>Delete</TableCell>
                      </TableRow>
              </TableHead>
              <TableBody>
              {this.props.reduxState.feedbackDisplayReducer.map((item) => {
                    return (
                        <AdminItem key={item.id} item={item} getFeedback={this.getFeedback}/>
                    )
                })}
              {/* <AdminItem /> */}
              </TableBody>
          </Table>
         
          </TableContainer>
    );
  }
}

const mapStateToProps = (reduxState) => {
  return {
      reduxState
  }
}

export default connect(mapStateToProps)(Admin);