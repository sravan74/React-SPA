import React, {Component} from 'react';
import  { Row } from './row.jsx';

class App extends Component {
    render() {
        return (
            <table>
                <tbody>
                    <Row name="Sara" year="1980"></Row>
                    <Row name="Jane" year="1982"></Row>
                    <Row name="Dale" year="1972"></Row>
                </tbody>
            </table>
        )
    }
}

export default App;