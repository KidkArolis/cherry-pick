var React = require('react');
var Route = require('react-route');
var Application = require('../../pages/application');

module.exports = Route.extend({
  componentClass: Application,
  afterRender: function () {
    React.renderComponent(this.component, document.body);
  }
});