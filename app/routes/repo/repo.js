var Route = require('react-route');
var RepoHeader = require('../../pages/repo_header');

module.exports = Route.extend({
  componentClass: RepoHeader,
  model: function (params) {
    return params;
  }
});