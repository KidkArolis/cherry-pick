var Route = require('react-route');
var github = require('../../github');
var Code = require('../../pages/code');

module.exports = Route.extend({
  componentClass: Code,
  model: function () {
    var self = this;
    var repo = this.get('org') + '/' + this.get('repo');
    return github.code(repo).then(function (code) {
      self.setContext({
        code: code
      });
    });
  }
});