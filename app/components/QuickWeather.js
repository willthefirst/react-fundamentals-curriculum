var React = require('react');
var Link = require('react-router').Link;

function QuickWeather(props) {
  console.log(props)
  return (
    <Link to={'/detail/'} style={props.style}>
      <img src={props.iconUrl} style={{width:'100%'}} />
      <h2>{props.date}</h2>
    </Link>
  )
}

module.exports = QuickWeather;
