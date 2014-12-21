module.exports = function () {
  this.resource('organisation', {path: '/:org'});
  this.resource('repo', {path: '/:org/:repo'}, function () {
    this.route('code');
    this.route('commits');
  });
};