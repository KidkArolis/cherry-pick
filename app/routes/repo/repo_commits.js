var Route = require('react-route');
var Commits = require('../../pages/commits');
var github = require('../../github');

module.exports = Route.extend({
  model: function () {
    var self = this;
    return github.commits(this.get('org') + '/' + this.get('repo')).then(function (commits) {
      self.setContext({
        commits: commits
      });
    });
  },
  componentClass: Commits
});