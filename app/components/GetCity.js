var React = require('react');
var PropTypes = React.PropTypes;

function getStyles(props) {
  return {
    container: {
      display: 'flex',
      flexDirection: props.direction || 'column'
    },
    margin: {
      margin: 10
    }
  }
}

function GetCity(props) {
  return (
    <form className="text-center" style={getStyles(props).container}>
      <input type="text" className="form-control" style={getStyles(props).margin} placeholder="San Francisco, CA" />
      <button type="button" className="btn btn-md btn-success" style={getStyles(props).margin}>Get Weather</button>
    </form>
  )
}

GetCity.PropTypes = {
  direction: PropTypes.string
}

module.exports = GetCity;
