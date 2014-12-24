import rest from 'rest';
import mime from 'rest/interceptor/mime';

var client = rest.wrap(mime);

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

export function commits(repo) {
  return get('repos/' + repo + '/commits');
}

export function code(repo, sha) {
  sha = sha || 'master';
  return get('repos/' + repo + '/git/trees/' + sha);
}