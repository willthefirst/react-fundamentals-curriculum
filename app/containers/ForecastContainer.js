var React = require('react');
var Forecast = require('../components/Forecast');
var api = require('../helpers/api');

var ForecastContainer = React.createClass({
  getInitialState: function() {
    return {
      isLoading: true,
      forecast: []
    }
  },
  componentWillReceiveProps: function(nextProps) {
    this.getCity(nextProps.location.query.city)
  },
  componentDidMount: function() {
    this.getCity(this.props.location.query.city)
  },
  getCity: function(city) {
    api.getFiveDayWeather(city)
      .then(function(data) {
        this.setState(
          {
            forecast: data,
            isLoading: false
          }
        );
      }.bind(this));
  },
  render: function() {
    return (
      this.state.isLoading
      ? <p>Loading...</p>
      : <Forecast forecast={this.state.forecast} />
    )
  }
});

module.exports = ForecastContainer;
