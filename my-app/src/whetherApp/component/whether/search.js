import React from 'react';

class Search extends React.Component {

    hanldeSubmit = () => {
        const term = this.refs.term.value;
        this.props.handleClick(term);
    }

    render() {
        return (
            <div className="input-group input-group-lg">
                <input type="text" className="form-control" ref="term" defaultValue={this.props.term}
                    placeholder={this.props.placeholder} />
                <span className="input-group-addon" id="basic-addon2">
                    <input type="button" className="btn btn-primary" value="Get Data" onClick={this.hanldeSubmit} />
                </span>
            </div>
        )
    }
}


export default Search;