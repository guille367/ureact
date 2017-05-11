import React from 'react';
import {Clock} from './Clock';
import {CountdownForm} from './CountdownForm';

export class Countdown extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            time: 0,
            status: 'stopped',
        }
        this.handleCountdownSet = this.handleCountdownSet.bind(this);
    }

    handleCountdownSet(timeToSet){
        this.setState({
            time: timeToSet,
            status: 'started',
        });
    }

    componentDidUpdate(prevProps, prevState){
        if(this.state.status !== prevState.status){
            switch (this.state.status){
                case 'started':
                        this.startCountdown();
                    break;
            }
        }
    }

    startCountdown(){
        let interval = setInterval(() => {
            var newCount = this.state.time - 1;
            this.setState({
                time: newCount >= 0 ? newCount : 0,
            })

            if(newCount <= 0){
                this.setState({
                    status: 'stopped',
                })
                clearInterval(interval);
            }
        },1000);
    }

    render(){
        return (
            <div className="row">
                <div className="column small-centered medium-6">
                    <Clock seconds={this.state.time}/>
                </div>
                <div className="column small-centered medium-6">
                    <CountdownForm setTime={this.handleCountdownSet}/>
                </div>
            </div>
        );
    }
}