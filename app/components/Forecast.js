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
      <h1>{props.forecast[0].location}</h1>
      <h2>Select a day for details:</h2>
      <div style={styles.dayContainer}>
        {props.forecast.map(function(item) {
          return (
            <QuickWeather
            style={styles.singleDay}
            day={item}
            key={item.timestamp}
            handleClick={props.handleClick.bind(null, item)} />
          )
        })}
      </div>
    </div>
  )
}

module.exports = Forecast;
