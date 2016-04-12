var axios = require('axios');
var API_KEY = 'd921c7657290035b1b8176611a978615';
var utils = require('../helpers/utils');

function getCurrentWeather(city) {
  axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&type=accurate&APPID=' + API_KEY)
    .then(function(res) {
      // console.log(res);
    });
}

function getFiveDayWeather(city) {
  return axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + '&type=accurate&APPID=' + API_KEY+ '&cnt=5')
    .then(function(forecast) {
      return forecast.data.list.map(function(day) {
        var date = utils.getDateFromUnix(day.dt);
        return ({
          timestamp: day.dt,
          date: date,
          weather: day.weather[0].main,
          iconUrl: '../app/images/weather-icons/' + day.weather[0].icon + '.svg'
        })
      });
    });
}

var api = {
  getCurrentWeather: getCurrentWeather,
  getFiveDayWeather: getFiveDayWeather
}

module.exports = api;
