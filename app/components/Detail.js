var React = require('react');
var QuickWeather = require('./QuickWeather');

var styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

function Detail(props) {
  console.log(props.weather)
  return (
    <div style={styles.container}>
      <QuickWeather
        day={props.weather}
        key={props.weather.timestamp} />
      <h2>{props.weather.location}</h2>
      <h3>{props.weather.description}</h3>
      <h3>Min temp: {props.weather.tempMin} degrees</h3>
      <h3>Max temp: {props.weather.tempMax} degrees</h3>
      <h3>Humidity: {props.weather.humidity}%</h3>
    </div>
  )
}

module.exports = Detail;
