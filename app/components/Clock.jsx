import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component{
    constructor(props){
        super(props);
        this.seconds = 0;
    }
    componentDidUpdate(newProps, newState){
        this.props.onSecondsFormated(this.formatSeconds(this.props.seconds));
    }
    formatSeconds(totalSecs){
        var seconds = Math.floor(totalSecs%60);
        var minutes = Math.floor(totalSecs/60);
        var time;

        if(seconds < 10)
            seconds = '0' + seconds;
        if(minutes < 10)
            minutes = '0' + minutes;
        
        time = `${minutes}:${seconds}`;

        return time;
    }
    render(){
        return(
            <div className="clock">
                <span className="clock-text">
                    {this.formatSeconds(this.props.seconds)}
                </span>
            </div> 
        );
    }
}

Clock.propTypes = {
    seconds : PropTypes.number,
}