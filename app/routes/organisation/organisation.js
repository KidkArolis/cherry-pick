var Route = require('react-route');

module.exports = Route.extend({
  model: function (params) {
    this.setContext(params);
  }
});