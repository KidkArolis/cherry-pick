/** @jsx React.DOM */

require('./index.css');
var React = require("react");

module.exports = React.createClass({

  getInitialState: function() {
    return {value: 'KidkArolis/cherry-pick'};
  },

  handleChange: function(event) {
    this.setState({value: event.target.value});
  },

  handleSubmit: function () {
    var repo = this.refs.repoInput.getDOMNode().value.split('/');
    // this.setState(this.getInitialState());
    this.setState({disabled: true});
    this.props.router.transitionTo('repo.commits', repo[0], repo[1]);
    return false;
  },

  render: function () {
    var value = this.state.value;
    var disabled = this.state.disabled;
    return (
      <div className='indexPage'>
        <div>
          <h2>Enter a GitHub repo</h2>
          <form onSubmit={this.handleSubmit}>
            <input
              className='indexPage-repoInput'
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

  componentDidMount: function () {
    var repoInput = this.refs.repoInput.getDOMNode();
    repoInput.focus();
    repoInput.select();
  }
});