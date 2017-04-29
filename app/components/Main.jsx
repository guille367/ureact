const React = require('react');
const Navigation = require('Navigation');


const Main = (props) => {
    return(
        <div>
            <Navigation></Navigation>
            {props.children}
        </div>
    );
};

module.exports = Main;