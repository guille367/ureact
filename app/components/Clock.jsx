const React = require('react');

export class Clock extends React.Component{
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
            <p>clack</p> 
        );
    }
}