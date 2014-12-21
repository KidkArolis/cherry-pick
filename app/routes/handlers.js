/**
 * Here we register a handler for each route in the app.
 *
 * We organised the route handlers into folders by resource.
 */

var Route = require('react-route');

module.exports = {
  'application': require('./application/application'),
  'index': route(require('../pages/index')),
  'loading': require('./application/loading'),
  
  'organisation': require('./organisation/organisation'),
  
  'repo': require('./repo/repo'),
  'repo_index': require('./repo/repo_index'),
  'repo.commits': require('./repo/repo_commits'),
  'repo.commits.loading': require('./repo/repo_commits_loading'),
  'repo.code': require('./repo/repo_code')
};

function route(Component) {
  return Route.extend({
    componentClass: Component
  });
}