/** @jsx React.DOM */

import './code.css';
import React from 'react';
import R from 'ramda';

export default React.createClass({
  render() {
    var files = R.map((item) => {
      return (<li key={item.sha}>{item.path}</li>);
    }, this.props.code.tree);
    return (<ul className='Code'>{files}</ul>);
  }
});