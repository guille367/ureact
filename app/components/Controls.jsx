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
            let {countdownStatus, isTimer} = this.props;
            let lapseCtrl = <button className="button secondary" onClick={this.handleClickButton('lapse')}>Lapse</button>;     

            if(countdownStatus === 'started'){
                return (<div>
                            {lapseCtrl} 
                            <button className="button secondary" onClick={this.handleClickButton('paused')}>Pause</button>
                        </div>);
            }
            else if (countdownStatus === 'stopped'){
                return <button className="button primary" onClick={this.handleClickButton('started')}>Start</button>
            }
            else if (countdownStatus === 'paused'){
                return (<div>
                        {lapseCtrl} 
                        <button className="button primary" onClick={this.handleClickButton('started')}>Continue</button>
                    </div>);
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