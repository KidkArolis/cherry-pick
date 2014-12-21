require('nprogress/nprogress.css');
var NProgress = require('nprogress');
var Route = require('react-route');

module.exports = Route.extend({
  activate: function () {
    this.loader = setTimeout(function () {
      NProgress.start();
    }, 400);
  },
  deactivate: function () {
    clearTimeout(this.loader);
    NProgress.done();
  }
});