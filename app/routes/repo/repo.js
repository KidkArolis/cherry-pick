var Route = require('react-route');
var RepoHeader = require('../../pages/repo_header');

module.exports = Route.extend({
  model: function (params) {
    this.setContext(params);
  },
  createComponent: function () {
    return RepoHeader({
      link: this.router.generate.bind(this.router)
    }, this.children);
  }
});