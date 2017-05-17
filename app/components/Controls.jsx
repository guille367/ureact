import React from 'react';

export class Controls extends React.Component{ 
    constructor(props){
        super(props);
        this.handleClickButton = this.handleClickButton.bind(this);
    }
    handleClickButton(newStatus){
        return () => {
            this.props.onStatusChange(newStatus);
        }
    }
    render(){
        let renderStartStopButton = () => {
            if(this.props.countdownStatus === 'started'){
                return <button className="button secondary" onClick={this.handleClickButton('paused')}>Pause</button>
            }
            else if (this.props.countdownStatus === 'stopped'){
                return <button className="button primary" onClick={this.handleClickButton('started')}>Start</button>
            }
            else if (this.props.countdownStatus === 'paused'){
                return <button className="button primary" onClick={this.handleClickButton('started')}>Continue</button>
            }
        }

        return (
            <div className="controls">
                {renderStartStopButton()}
                <button className="button hollow" onClick={this.handleClickButton('stopped')}>Clear</button>
            </div>
        )
    }
} 

Controls.propTypes = () => {
    countdownStatus = React.PropTypes.string.isRequired;
    handleClickButton = React.PropTypes.func.isRequired;
}