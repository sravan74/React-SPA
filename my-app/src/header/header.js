import React from 'react';
import './header.css';
import {Link} from 'react-router-dom';
class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTile: 0,
        }

    }

    handleClick = (index) => {
        const selectedMenu = this.props.headerMenudata[index].name;
        this.props.chahngeMenu(selectedMenu);
        this.setState({ activeTile: index });
    }

    render() {
        return (
            <div className="header-container">
                <div className="left-align">
                    <h2>{this.props.logo}</h2>
                </div>
                <div className="right-align">
                    <ul>
                        {
                            this.props.headerMenudata.map((d, index) => {
                                return (index === this.state.activeTile) ?
                                    <li className="active" key={index}>{d.name}</li> :
                                    <li><Link to={d.url} onClick={() => this.handleClick(index)} key={index}>{d.name}</Link></li>
                            })
                        }

                    </ul>
                </div>
            </div>
        )
    }
}

export default Header;