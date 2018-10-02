import React from 'react';

var Description = React.createClass({
    render: function () {
        return (
           <div>{this.props.help}</div>
        )
    }

});

module.exports = Description;
