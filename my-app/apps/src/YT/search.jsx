import React from 'react';

const Search = React.createClass({

    handlKeyUp:function(e){
        this.props.onChange(e.target.value);
    },

    render: function(){
        return (
            <div>
            <input className='form-control' placeholder='Search' onKeyUp={this.handlKeyUp} />
            </div>
        )
    }
    
})

export default Search;