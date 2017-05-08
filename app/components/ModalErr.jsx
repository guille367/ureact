import React from 'react';
import ReactDOMServer from 'react-dom/server';
import ReactDOM from 'react-dom';

export class ModalErr extends React.Component{
    constructor(props){
        super(props);
        this.texterr = this.props.texterr;
    }

    componentDidMount(){
        var {texterr} = this.props;
        var markup = (
            <div className="reveal tiny text-center" id="modal" data-reveal="">
                <h1>Error</h1>
                <p className='lead'>{texterr}</p>
                <p>
                    <button className="button hollow" data-close="">
                        <span aria-hidden="true">Cerrar</span>
                    </button>
                </p>
            </div>
        );

        var $modal = $(ReactDOMServer.renderToString(markup));
        $(ReactDOM.findDOMNode(this)).html($modal);

        var modal = new Foundation.Reveal($('#modal'));
        modal.open();
    }
    
    render(){
        let {texterr} = this.state;
        
        return(
            <div></div>
        );
    }
};