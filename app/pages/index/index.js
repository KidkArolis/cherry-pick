/** @jsx React.DOM */

import './index.css';
import React from "react";

export default React.createClass({

  getInitialState() {
    return {value: 'KidkArolis/cherry-pick'};
  },

  handleChange(event) {
    this.setState({value: event.target.value});
  },

  handleSubmit(e) {
    e.preventDefault();
    var repo = this.refs.repoInput.getDOMNode().value.split('/');
    // this.setState(this.getInitialState());
    this.setState({disabled: true});
    this.props.router.transitionTo('repo.commits', repo[0], repo[1]);
  },

  render() {
    var value = this.state.value;
    var disabled = this.state.disabled;
    return (
      <div className='IndexPage'>
        <div>
          <p className='IndexPage-description'>Cherry-pick is a demo app showing how to use Cherrytree router with React.js</p>
          <h2>Enter a GitHub repo</h2>
          <form onSubmit={this.handleSubmit}>
            <input
              className='IndexPage-repoInput'
              type="text"
              ref="repoInput"
              disabled={disabled}
              value={value}
              onChange={this.handleChange}
              ></input>
          </form>
        </div>
      </div>
    );
  },

  componentDidMount() {
    var repoInput = this.refs.repoInput.getDOMNode();
    repoInput.focus();
    repoInput.select();
  }
});