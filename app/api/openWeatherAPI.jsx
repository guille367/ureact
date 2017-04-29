const axios = require('axios');
const URL_WEATHER_API = 'http://api.openweathermap.org/data/2.5/weather?&appid=d9bf9fa68a35cfd99f37dddd4dc144ea&units=metric';

module.exports = {
    getTemp(location){
        let city = encodeURI(location);
        let uri = `${URL_WEATHER_API}&q=${city}`;
        
        return axios.get(uri)
            .then((res)=>{
                return res.data;
            })
            .catch((err)=>{
                throw new Error(err.message);
            })
    }
};