export default function () {
  this.resource('organisation', {path: '/:org'});
  this.resource('repo', {path: '/:org/:repo'}, function () {
    this.route('code');
    this.route('code', {path: '/code'});
    this.route('commits');
  });
}