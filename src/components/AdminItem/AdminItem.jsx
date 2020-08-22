import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';


class AdminItem extends Component {


    render() {
        return (
            <>
                {this.props.reduxState.feedbackDisplayReducer.map((item) => {
                    return (
                        <TableRow key={item.id}>
                            <TableCell>{item.feeling}</TableCell>
                            <TableCell>{item.understanding}</TableCell>
                            <TableCell>{item.support}</TableCell>
                            <TableCell>{item.comments}</TableCell>
                            <TableCell><Button>Delete</Button></TableCell>
                        </TableRow>
                    )
                })};
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