/** @jsx React.DOM */

require('./repo_header.css');
var React = require("react");

module.exports = React.createClass({
  render: function () {
    return (
      <div>
        <div className='repoHeader'>
          {this.props.repo}
          <ul className='nav nav-tabs'>
            <li><a href={this.props.router.generate('repo.code')}>Code</a></li>
            <li><a href={this.props.router.generate('repo.commits')}>Commits</a></li>
          </ul>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
});