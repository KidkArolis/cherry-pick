var R = require('ramda');
var React = require('react');
var Route = require("cherrytree/route");

module.exports = Route.extend({

  rootEl: document.body,

  initialize: function () {
    if (this.componentClass) {
      this.componentFactory = React.createFactory(this.componentClass);
    }
  },

  activate: function (context) {
    this.render(context);
    this.afterActivate();
  },

  afterActivate: function () {},

  createComponent: function (context) {
    if (this.componentFactory) {
      var props = R.mixin(context || {}, {
        router: this.router
      });
      return this.componentFactory(props, this.children);
    }
  },

  render: function (context) {
    this.component = this.createComponent(context);
    if (this.name === "application") {
      React.render(this.component, this.rootEl);
    } else {
      this.rerenderParents();
    }
  },

  rerenderParents: function () {
    if (this.parent && this.parent.render) {
      var component = this.component || this.children;
      this.parent.children = component;
      this.parent.render(this.parent.getContext());
    }
  }
});