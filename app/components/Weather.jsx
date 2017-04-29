var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherAPI = require('openWeatherAPI');

var Weather = React.createClass({
    getInitialState(){
        return{
            isLoading: false,
        };
    },
    handleSearch(location){
        var _self = this;

        this.setState({
            isLoading: true,
        });

        openWeatherAPI.getTemp(location)
            .then(function(data){
                _self.setState({
                    location: data.name,
                    temp: data.main.temp,
                    isLoading: false,
                });
            })
            .catch((err)=>{
                _self.setState({
                    isLoading: true,
                });
            });
    },
    render(){

        let _self = this;
        let messageToShow = function(){
            if(_self.state.isLoading){
                return <h3>Fetching data..</h3>;
            }
            else if(_self.state.location && _self.state.temp){
                return <WeatherMessage location={_self.state.location} temp={_self.state.temp}/>;
            }
        }

        return(
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <WeatherForm onSearch={this.handleSearch}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        {messageToShow()}
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Weather;