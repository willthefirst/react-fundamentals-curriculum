var React = require('react');
var GetCity = require('../components/GetCity');
var PropTypes = React.PropTypes;

var GetCityContainer = React.createClass({
  getDefaultProps: function() {
    return {
      direction: 'column'
    }
  },
  getInitialState: function() {
    return {
      city: ''
    }
  },
  propTypes: {
    direction: PropTypes.string
  },
  handleUpdateCity: function(e) {
    this.setState({
      city: e.target.value
    });
  },
  handleSubmitCity: function() {
    // api.getFiveDayWeather('san francisco, ca');
  },
  render: function() {
    return (
      <GetCity
        direction={this.props.direction}
        city={this.props.city}
        onSubmitCity={this.handleSubmitCity}
        onUpdateCity={this.handleUpdateCity} />
    )
  }
});

module.exports = GetCityContainer;
