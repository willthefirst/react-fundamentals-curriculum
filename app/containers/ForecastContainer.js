var React = require('react');
var Forecast = require('../components/Forecast');
var api = require('../helpers/api');

var ForecastContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
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
  handleClick: function(weather) {
    this.context.router.push({
      pathname: '/detail',
      query: {
        city: this.props.location.query.city
      },
      state: {
        weather: weather
      }
    })
  },
  render: function() {
    return (
      this.state.isLoading
      ? <p>Loading...</p>
      : <Forecast
          forecast={this.state.forecast}
          handleClick={this.handleClick} />
    )
  }
});

module.exports = ForecastContainer;
