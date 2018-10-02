import React from 'react';

const Row = React.createClass({

    render: function () {
        return (
            <tr>
                <td>{this.props.index}</td>
                <td>{this.props.el.firstname}</td>
                <td>{this.props.el.lastname}</td>
                <td>{this.props.el.email}</td>
            </tr>
        )
    }
});
module.exports = Row;