import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import DeleteAlert from './DeleteAlert'

class AdminItem extends Component {

    render() {
        return (
            <>
                <TableRow key={this.props.item.id}>
                    <TableCell>{this.props.item.feeling}</TableCell>
                    <TableCell>{this.props.item.understanding}</TableCell>
                    <TableCell>{this.props.item.support}</TableCell>
                    <TableCell>{this.props.item.comments}</TableCell>
                    <TableCell>
                    <DeleteAlert item={this.props.item} getFeedback={this.props.getFeedback}/> </TableCell>
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