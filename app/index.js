import 'bootstrap/dist/css/bootstrap.css';
import "6to5/polyfill";

import Cherrytree from 'cherrytree';
import React from 'react';
import ReactRoute from 'react-route';
import routes from './routes';

var router = new Cherrytree({
  map: routes,
  defaultRouteHandler: ReactRoute,
  resolver: resolver
});
router.startRouting();

// for debugging and such
window.router = router;
// to enable the React Dev Tools
window.React = React;

export default router;

// this is a webpack specific way of automatically
// loading the route file in asynchronously for each
// route. We might use System.import in future in ES6.
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