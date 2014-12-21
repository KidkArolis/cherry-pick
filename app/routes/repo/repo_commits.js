var Route = require('react-route');
var Commits = require('../../pages/commits');
var github = require('../../github');

module.exports = Route.extend({
  componentClass: Commits,
  model: function () {
    return {
      commits: github.commits(this.get('org') + '/' + this.get('repo'))
    };
  }
});