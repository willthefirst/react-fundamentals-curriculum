var React = require('react');

function QuickWeather(props) {
  return (
    <div style={props.style}>
      <img src={props.iconUrl} style={{width:'100%'}} />
      <h2>{props.date}</h2>
    </div>
  )
}

module.exports = QuickWeather;
