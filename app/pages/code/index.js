/** @jsx React.DOM */

require('./code.css');
var React = require('react');
var R = require('ramda');

module.exports = React.createClass({
  render: function () {
    var files = R.map(function (item) {
      return (<li key={item.sha}>{item.path}</li>);
    }, this.props.code.tree);
    return (<ul className='Code'>{files}</ul>);
  }
});