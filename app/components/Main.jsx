const React = require('react');
const Navigation = require('Navigation');


const Main = (props) => {
    return(
        <div>
            <Navigation></Navigation>
            <div className="row">
                <div className="columns medium-6 small-centered">
                    {props.children}
                </div>
            </div>
        </div>
    );
};

module.exports = Main;