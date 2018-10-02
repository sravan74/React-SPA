import React from 'react';

class Search extends React.Component {
    
    handlKeyUp = (e) => {
        this.props.onChange(e.target.value);
    }

    render() {
        return (
            <div>
                <input className='form-control' placeholder='Search' onKeyUp={this.handlKeyUp} />
            </div>
        )
    }

}

export default Search;