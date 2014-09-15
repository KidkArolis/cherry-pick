/**
 * Here we register a handler for each route in the app.
 *
 * We organised the route handlers into folders by resource.
 */

module.exports = {
  'application': require('./application/application'),
  'index': require('./application/index'),
  'loading': require('./application/loading'),
  
  'organisation': require('./organisation/organisation'),
  
  'repo': require('./repo/repo'),
  'repo_index': require('./repo/repo_index'),
  'repo.commits': require('./repo/repo_commits'),
  'repo.commits.loading': require('./repo/repo_commits_loading'),
  'repo.code': require('./repo/repo_code')
};