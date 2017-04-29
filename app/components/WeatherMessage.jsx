const React = require('react');

const WeatherMessage = (props) => {
    let msg ={};
    let {location, temp} = props;

    console.log(location, temp);
    if(location && temp) {
        msg = (<h3>En {location} hacen {temp} grados celsiu</h3>);
    }
    else {
        msg = (<h3>Ingrese una ciudad</h3>);
    } 
    
    return(
        <div className="text-center">
            {msg}
        </div>
    );
};

module.exports = WeatherMessage;