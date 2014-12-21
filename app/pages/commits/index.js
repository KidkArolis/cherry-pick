/** @jsx React.DOM */

require('./commits.css');
var React = require('react');
var R = require('ramda');

module.exports = React.createClass({
  render: function () {
    var commits = R.map(function (commit) {
      return (<li key={commit.sha}>{commit.commit.message}</li>);
    }, this.props.commits);
    return (<ul className='Commits'>{commits}</ul>);
  }
});