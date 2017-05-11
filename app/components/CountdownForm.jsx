import React from 'react';

export class CountdownForm extends React.Component{
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(e){
        e.preventDefault();
        let secs = this.refs.seconds.value;
        
        if(secs != '' && secs.match(/^[0-9]*$/g)){
            this.props.setTime(Number.parseInt(secs));
            secs = '';
        }
    }
    render(){
        return(
            <div>
                <form ref="form" onSubmit={this.onSubmit}>
                    <input ref="seconds" type="number" id="secSetter" />
                    <button className="button expanded">Start</button>
                </form>
            </div>
        );
    }
}