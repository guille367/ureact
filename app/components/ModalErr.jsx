const React = require('react');
const ReactDOMServer = require('react-dom/server');
const ReactDOM = require('react-dom');

var ModalErr = React.createClass({
    getInitialState(){
        return {
            texterr: this.props.texterr,
        }
    },
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
    },
    render(){
        let {texterr} = this.state;
        
        return(
            <div></div>
        );
    }
});

module.exports = ModalErr;