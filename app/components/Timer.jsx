import React from 'react';
import {Clock} from './Clock';
import {Controls} from './Controls';

export class Timer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            time: 0,
            status: 'stopped',
        }
        this.handleUnmount = this.handleUnmount.bind(this);
        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.startTimer = this.startTimer.bind(this); 
    }
    handleUnmount(param){
        console.log(param);
    }
    componentDidUpdate(prevProps, prevStatus){
        if(this.state.status != prevStatus){
            switch(this.state.status){
                case 'started':
                        this.startTimer();
                    break;
                case 'stopped':
                        clearInterval(this.interval);
                        this.interval = undefined;
                    break;
                case 'lapse':
                    console.log(this.state.time);
                    break;
                case 'paused':
                    break;
            }
        }
    }
    handleStatusChange(newState){
        this.setState({
            status: newState,
        })
    }
    startTimer(){
        this.interval = setInterval(() => {
            this.setState({
                time: this.state.time + 1,
            });
        },1000);
    }
    render (){
        let renderControls = () => {
            return(
                <Controls countdownStatus={this.state.status} onUnmount={this.handleUnmount} onStatusChange={this.handleStatusChange} isTimer={true}/>
            )
        }

        return (
            <div className="row">
                <div className="column small-centered medium-6">
                    <Clock seconds={this.state.time} isTimer={true} />
                </div>
                <div className="column small-centered medium-6">
                    {renderControls()}
                </div>
            </div>
        );
    }
}