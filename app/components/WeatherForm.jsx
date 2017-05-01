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
                    <div className="medium-6 small-centered">
                        <h1 className="text-center">Get Weather</h1>
                        <input type="text" ref="city"/>
                        <button className="hollow button expanded">Buscar</button>
                    </div>
                </div>
            </form>
        );
     }
});

module.exports = WeatherForm;

