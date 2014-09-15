var R = require('ramda');
var Route = require("cherrytree/route");

module.exports = Route.extend({

  activate: function (context) {
    this.render(context);
  },

  createComponent: function (context) {
    if (this.componentClass) {
      var props = R.mixin(context, {
        router: this.router
      });
      return this.componentClass(props, this.children);
    }
  },

  render: function (context) {
    this.component = this.createComponent(context);
    this.rerenderParents();
    this.afterRender();
  },

  afterRender: function () {},

  rerenderParents: function () {
    if (this.parent && this.parent.render) {
      var component = this.component || this.children;
      this.parent.children = component;
      this.parent.render(this.parent.getContext());
    }
  }
});