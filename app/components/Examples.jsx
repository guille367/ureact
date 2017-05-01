const React = require('react');
const {Link} = require('react-router');

const Examples = (props) => {
    return (
        <div>
            <div >
                <h1 className="text-center">Examples component</h1>
            </div>
            <ol>
                <li>
                    <Link to="/location=Avellaneda">Avellaneda, AR</Link>
                </li> 
                <li>
                    <Link to="/location=Morro">Morro de Sao Paulo, BR</Link>
                </li>  
            </ol>
        </div>
    );
};

module.exports = Examples;