const React = require('react');
const {Link} = require('react-router');

const Navigation = React.createClass({
    onSearch(e){
        e.preventDefault();
        console.log(e);
    },
    render(){
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">
                            WeatherApp
                        </li>
                        <li>
                            <Link to="/">Get Weather</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/examples">Index</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li>
                                <input type="search"/>
                            </li>
                            <li>
                                <button type="submit" className="button">Buscar</button>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
});

module.exports = Navigation;