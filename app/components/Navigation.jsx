import React from 'react';
const {Link, IndexLink} = require('react-router');

export class Navigation extends React.Component{
    render(){
        return (
            <div>
                <div className="top-bar">
                    <div className="top-bar-left">
                        <ul className="menu">
                            <li>
                                <Link to="/"><span className="index-text">React time App</span></Link>
                            </li>
                            <li>
                                <Link to="/Timer" activeClassName="active-link">Timer</Link>
                            </li>
                            <li>
                                <Link to="/Countdown/" activeClassName="active-link">Countdown</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="top-bar-right">
                        <p>Created by <Link to="" href="">ELWIS</Link></p>
                    </div>
                </div>
            </div>
        );
    }
};