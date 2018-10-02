import React from 'react';
import Description from './desc.jsx';

var myTable = React.createClass({

    getInitialState: function () {
        return {
            help : ['sahil','hari','anjan','priya'],
            age : [23,33,12,21,22]
        }
    },

    changeArr:function () {
        var val = this.refs.arr.value;
        var neeState = this.state.help;
        neeState.push(val);
        this.setState({help:neeState});

    },

    render: function () {
        return (
            <div>
                <input type="text" ref="arr"/>
                <input type="button" value="submit" onClick={this.changeArr}/>
                <h1>Heading</h1>
                {this.state.help.map(function(el,index){
                    return <Description help={el}></Description>
                 })}
            </div>
        )
    }

});

module.exports = myTable;
