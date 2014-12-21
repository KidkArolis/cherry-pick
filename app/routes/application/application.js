var React = require('react');
var Route = require('react-route');
var Application = require('../../pages/application');

module.exports = Route.extend({
  componentClass: Application,
  render: function (context) {
    this.component = this.createComponent(context);
    React.renderComponent(this.component, document.body);
  }
});