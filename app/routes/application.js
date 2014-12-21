var React = require('react');
var Route = require('react-route');
var Application = require('../components/application');

module.exports = Route.extend({
  componentClass: Application
});