require('bootstrap/dist/css/bootstrap.css');
var Cherrytree = require('cherrytree');

var router = new Cherrytree({
  map: require('./routes'),
  defaultRouteHandler: require('react-route'),
  resolver: resolver
});
router.startRouting();

// for debugging and such
window.router = router;
// to enable the React Dev Tools
window.React = require("react");

module.exports = router;

// this is a webpack specific way of automatically
// loading the route file for each route
function resolver(name, cb) {
  try {
    cb(require("./routes/" + name.replace(/\./, "_")));
  } catch (e) {
    if (e.message.indexOf("Cannot find module") === 0) {
      // fall back to the default route
      cb();
    } else {
      throw e;
    }
  }
}