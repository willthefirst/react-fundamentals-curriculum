var React = require('react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var hashHistory = require('react-router').hashHistory;
var Main = require('../containers/Main');
var HomeContainer = require('../containers/HomeContainer');

var routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={HomeContainer}></IndexRoute>
    </Route>
  </Router>
);

module.exports = routes;
