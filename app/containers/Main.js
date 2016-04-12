var React = require('react');
var GetCityContainer = require('./GetCityContainer')

var styles = {
  container: {
    height: '100%',
    width: '100%'
  },
  header: {
    padding: 10,
    backgroundColor: '#ff662b',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
};

var Main = React.createClass({
  render: function() {
    return (
      <div style={styles.container}>
        <header style={styles.header}>
          <h1 style={{margin: 0}}>My Weather App</h1>
          <GetCityContainer direction="row"/>
        </header>
        {this.props.children}
      </div>
    )
  }
});

module.exports = Main;
