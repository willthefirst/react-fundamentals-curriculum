var React = require('react');
var QuickWeather = require('./QuickWeather');

var styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  dayContainer: {
    display: 'flex',
    flexFlow: 'wrap row',
    justifyContent: 'space-around',
    width: '100%'
  },
  singleDay: {
    width: 200,
    padding: '12px 18px',
    margin: '12px',
    textAlign: 'center',
    cursor: 'pointer'
  }
};

function Forecast(props) {
  return (
    <div style={styles.container}>
      <h1>San Francisco, CA</h1>
      <h2>Select a day:</h2>
      <div style={styles.dayContainer}>
        {props.forecast.map(function(item) {
          return (
            <QuickWeather
            style={styles.singleDay}
            key={item.timestamp}
            weather={item.weather}
            iconUrl={item.iconUrl}
            date={item.date} />
          )
        })}
      </div>
    </div>
  )
}

module.exports = Forecast;
