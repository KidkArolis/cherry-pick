require('bootstrap/dist/css/bootstrap.css');

var Cherrytree = require('cherrytree');
var HistoryLocation = require('cherrytree/locations/history');

var routes = require('./routes');
var routeHandlers = require('./routes/handlers');

var router = new Cherrytree({
  location: new HistoryLocation(),
  map: routes,
  routes: routeHandlers,
  BaseRoute: require('react-route')
});
router.startRouting();

module.exports = router;

window.router = router;