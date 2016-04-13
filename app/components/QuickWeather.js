var React = require('react');

var style = {
  singleDay: {
    width: 200,
    padding: '12px 18px',
    margin: '12px',
    textAlign: 'center',
    cursor: 'pointer'
  }
}

function QuickWeather(props) {
  console.log(props)
  return (
    <div onClick={props.handleClick} style={style.singleDay}>
      <img src={props.day.iconUrl} style={{width:'100%'}} />
      <h2>{props.day.date}</h2>
    </div>
  )
}

module.exports = QuickWeather;
