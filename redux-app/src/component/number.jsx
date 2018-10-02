import React from 'react';
import './main.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class Counter extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="container">
                <span className="btn" onClick={this.props.decrementAction}>-</span>
                <span className="box">{this.props.countValue}</span>
                <span className="btn" onClick={this.props.incrementAction}>+</span>
            </div>
        )
    }
}

const increment = ()=>{
    return{
        type: 'INCREMENT',
        payload: 1
    }
}
const decrement = ()=>{
    return{
        type: 'DECREMENT',
        payload: 1
    }
}

const mapStateToProps = (state) =>{
    return {
        countValue: state.count.value
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        incrementAction: ()=>dispatch(increment()),
        decrementAction: ()=>dispatch(decrement())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
// export default Counter