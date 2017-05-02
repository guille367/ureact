var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherAPI = require('openWeatherAPI');
var ModalErr = require('ModalErr');

var Weather = React.createClass({
    getInitialState(){
        return{
            isLoading: false,
            errorMessage: undefined,
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
                    errorMessage: undefined,
                });
            })
            .catch((err)=>{
                _self.setState({
                    isLoading: false,
                    errorMessage: 'No se encontró la ciudad.',
                });
            });
    },
    componentDidMount(){
        this.handleSearch(this.props.location.query.location);
    },
    componentWillReceiveProps(newProps){
        this.handleSearch(newProps.location.query.location);
    },
    render(){

        let _self = this;
        let {isLoading, temp, location, errorMessage} = this.state;

        let messageToShow = function(){
            if(isLoading){
                return <h3>Fetching data..</h3>;
            }
            else if(location && temp){
                return <WeatherMessage location={location} temp={temp}/>;
            }
        }
        let showErr = function(){
            if(errorMessage){
                return <ModalErr texterr={errorMessage}/>;
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
                        {showErr()}
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Weather;