const React = require('react');
const {Link} = require('react-router');

const Navigation = (props) => {
return(
    <nav className="navbar navbar-default">
        <div className="container-fluid">
            <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
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
        </div>
    </nav>
    );
};

module.exports = Navigation;