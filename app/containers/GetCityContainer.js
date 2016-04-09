var React = require('react');
var GetCity = require('../components/GetCity');
var PropTypes = React.PropTypes;

var GetCityContainer = React.createClass({
  getDefaultProps: function() {
    return {
      direction: 'column'
    }
  },
  propTypes: {
    direction: PropTypes.string
  },
  render: function() {
    return (
      <GetCity direction={this.props.direction} />
    )
  }
});

module.exports = GetCityContainer;
