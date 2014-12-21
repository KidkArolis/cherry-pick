require('bootstrap/dist/css/bootstrap.css');
var Cherrytree = require('cherrytree');

var router = new Cherrytree({
  map: require('./routes'),
  handlers: require('./routes/handlers'),
  defaultRouteHandler: require('react-route')
});
router.startRouting();

// for debugging and such
window.router = router;

module.exports = router;
