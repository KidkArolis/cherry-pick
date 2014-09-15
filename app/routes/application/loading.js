require('nprogress/nprogress.css');
var NProgress = require('nprogress');
var Route = require('react-route');

module.exports = Route.extend({
  activate: function () {
    NProgress.start();
  },
  deactivate: function () {
    NProgress.done();
  }
});