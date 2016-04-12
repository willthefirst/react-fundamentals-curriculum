var React = require('react');
var PropTypes = React.PropTypes;

function getStyles(props) {
  return {
    container: {
      display: 'flex',
      flexDirection: props.direction || 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }
}

function Button(props) {
  return (
    <button
      type="submit"
      className="btn btn-md btn-success"
      style={{margin: 10}}>
      Get Weather
    </button>
  )
}

function GetCity(props) {
  return (
    <form className="text-center" style={getStyles(props).container} onSubmit={props.onSubmitCity}>
      <input type="text" className="form-control" placeholder="San Francisco, CA" />
      <Button />
    </form>
  )
}

GetCity.PropTypes = {
  direction: PropTypes.string,
  onSubmitCity: PropTypes.func.isRequired
}

module.exports = GetCity;
