import React from 'react';
import Row from './row.jsx';

var CustomTable = React.createClass({

    render: function () {
        var content = this.props.info.map(function (el, index) {
                       return <Row el={el} index={index}/>
                    });
        return (
            {content}
        )
    }
});
module.exports = CustomTable;