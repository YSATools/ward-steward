(function () {
  "use strict";

  var dashboard = require('./lib/dashboard')
    , $ = window.jQuery
    ;

  $(function () {
    dashboard.init();
    dashboard.render();
  });
}());
