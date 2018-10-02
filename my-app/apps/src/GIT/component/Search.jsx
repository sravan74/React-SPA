import React, {Component} from 'react';

class Search extends Component{

    handleOnSubmit(e){
        e.preventDefault();

        let Username = this.refs.username.value;
        this.props.handleOnSubmitForm(Username);

    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleOnSubmit.bind(this)}>
                    <label>Github User Name:</label>
                    <input type="text" ref="username" className="form-control"/>
                </form>
            </div>
        )
    }
}

export default Search;
