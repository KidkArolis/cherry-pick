import './commits.css';
import React from 'react';
import R from 'ramda';

export default React.createClass({
  render() {
    return (
      <ul className='Commits'>
        {this.commits()(this.props.commits)}
      </ul>
    );
  },
  commits() {
    return R.map((commit) =>
      <li className='Commits-commit' key={commit.sha}>{commit.commit.message}</li>
    );
  }
});