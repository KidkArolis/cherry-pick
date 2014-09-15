module.exports = function () {
  this.resource('organisation', {path: '/:org'}, function () {
    this.resource('repo', {path: '/:repo'}, function () {
      this.route('code');
      this.route('commits');
    });
  });
};