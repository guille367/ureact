const React = require('react');
const WeatherMessage = require('WeatherMessage');

const WeatherForm = React.createClass({
    getInitialState(){
        return {
            city:'adas',
        };
    },
    onSubmitForm(e){
        e.preventDefault();
        this.props.onSearch(this.refs.city.value);
    },
    render(){
        return(
            <form onSubmit={this.onSubmitForm}>
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <h1 className="text-center">Get Weather</h1>
                        </div>
                        <div className="form-group">
                            <input className="form-inline form-control" type="text" ref="city"/>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-default btn-block">Buscar</button>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </form>
        );
     }
});

module.exports = WeatherForm;

