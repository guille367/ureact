import React from 'react';
import {Clock} from './Clock';
import {CountdownForm} from './CountdownForm';
import {Controls} from './Controls';

export class Countdown extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            time: 0,
            status: 'stopped',
        }
        this.handleCountdownSet = this.handleCountdownSet.bind(this);
        this.handleStatusChange = this.handleStatusChange.bind(this);
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
                case 'paused':
                        clearInterval(this.interval);
                        this.interval = undefined;
                    break;
                case 'stopped':
                        clearInterval(this.interval);
                        this.interval = undefined;
                        this.setState({
                            time:0,
                        });
                    break;
            }
        }
    }
    startCountdown(){
        this.interval = setInterval(() => {
            let newCount = this.state.time - 1;
            this.setState({
                time: newCount >= 0 ? newCount : 0,
            })

            if(newCount <= 0){
                this.setState({
                    status: 'stopped',
                });
            }
        },1000);
    }
    handleStatusChange(newState){
        this.setState({
            status: newState,
        })
    }
    handleControlsUnmount(){
        clearInterval(this.interval);
    }
    render(){
        let renderControls = ()=> {
            let {status} = this.state;
            if(status !== 'stopped'){
                return <Controls countdownStatus={status} onStatusChange={this.handleStatusChange} onUnmount={this.handleControlsUnmount} />
            }
            else {
                return <CountdownForm setTime={this.handleCountdownSet}/>;
            }
        }
        return (
            <div className="row">
                <div className="column small-centered medium-6">
                    <Clock seconds={this.state.time}/>
                </div>
                <div className="column small-centered medium-6">
                    {renderControls()}
                </div>
            </div>
        );
    }
}