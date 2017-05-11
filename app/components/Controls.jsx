import React from 'react';

export class Controls extends React.Component{ 
    render(){
        let renderStartStopButton = () => {
            if(this.props.countdownStatus === 'started'){
                return <button className="button secondary">Stop</button>
            }
            else if (this.props.countdownStatus === 'stopped'){
                return <button className="button primary">Start</button>
            }
        }

        return (
            <div className="controls">
                {renderStartStopButton()}
                <button className="button hollow">Clear</button>
            </div>
        )
    }
} 

Controls.propTypes = () => {
    countdownStatus = React.PropTypes.string.isRequired;
}