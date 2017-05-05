const React = require('react');
import {Navigation} from './Navigation';
import {Timer} from './Timer';
import {Countdown} from './Countdown';

export class Main extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <Navigation></Navigation>
                <div className="row">
                    <div className="columns medium-12 small-centered">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
};