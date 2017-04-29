const React = require('react');
const Navigation = require('Navigation');


const Main = React.createClass({
    render(){
        return(
            <div>
                <Navigation></Navigation>
                {this.props.children}
            </div>
        );
    }
});

module.exports = Main;