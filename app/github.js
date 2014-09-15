var rest, mime, client;

rest = require('rest');
mime = require('rest/interceptor/mime');

client = rest.wrap(mime);

function get(path) {
  return client({
    path: 'https://api.github.com/' + path
    // headers: {
    //   'Authorization': 'token ' + token
    // }
  }).then(function(response) {
    return response.entity;
  });
}

module.exports.commits = function (repo) {
  return get('repos/' + repo + '/commits');
};
module.exports.code = function (repo, sha) {
  sha = sha || 'master';
  return get('repos/' + repo + '/git/trees/' + sha);
};