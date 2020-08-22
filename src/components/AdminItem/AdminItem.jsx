import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import axios from 'axios';


class AdminItem extends Component {

    deleteFeedback = () => {
        axios({
            method: 'DELETE',
            url: `/feedback/${this.props.item.id}`
        }).then((response) => {
            //add refresh here
            this.props.getFeedback();
        }).catch( error => {
            console.log('error in DELETE', error);
        })
    }
    

    render() {
        return (
           <>
                        <TableRow key={this.props.item.id}>
                            <TableCell>{this.props.item.feeling}</TableCell>
                            <TableCell>{this.props.item.understanding}</TableCell>
                            <TableCell>{this.props.item.support}</TableCell>
                            <TableCell>{this.props.item.comments}</TableCell>
                            <TableCell><Button onClick={this.deleteFeedback}>Delete</Button></TableCell>
                        </TableRow>
                        </>
        );
    }
}

const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapStateToProps)(AdminItem);