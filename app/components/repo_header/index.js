/** @jsx React.DOM */

import './repo_header.css';
import React from 'react';

module.exports = React.createClass({
  render: function () {
    return (
      <div>
        <div className='RepoHeader'>
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