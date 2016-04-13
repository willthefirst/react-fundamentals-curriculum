var React = require('react');
var Detail = require('../components/Detail')
var QuickWeather = require('../components/QuickWeather');

var DetailContainer = React.createClass({
  render: function() {
    return (
      <Detail weather={this.props.location.state.weather} />
    )
  }
});

module.exports = DetailContainer;
