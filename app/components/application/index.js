/** @jsx React.DOM */

require('./application.css');
var React = require('react');

module.exports = React.createClass({
  link: function () {
    var router = this.props.router;
    return router.generate.apply(router, arguments);
  },

  render: function () {
    return (
      <div className='Application'>
        <div className='navbar-wrapper'>
          <div className='container'>

            <div className='navbar navbar-default navbar-static-top' role='navigation'>
              <div className='container'>
                <div className='navbar-header'>
                  <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='.navbar-collapse'>
                    <span className='sr-only'>Toggle navigation</span>
                    <span className='icon-bar'></span>
                    <span className='icon-bar'></span>
                    <span className='icon-bar'></span>
                  </button>
                  <a className='navbar-brand' href={this.link('index')}>
                    <img src="http://icons.iconarchive.com/icons/mad-science/arcade-saturdays/32/Cherry-Bonus-icon.png" />
                  </a>
                </div>
                <div className='navbar-collapse collapse'>
                  <ul className='nav navbar-nav'></ul>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className='container marketing'>
          {this.props.children}
        </div>

        <footer className='footer'>
          <p>Cherrytree Demo. · <a href='github.com/QubitProducts/cherrytree'>Cherrytree Repo</a> · <a href='github.com/KidkArolis/cherrypick'>Demo Source Code</a></p>
        </footer>
      </div>
    );
  }
});