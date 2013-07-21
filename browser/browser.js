(function () {
  "use strict";

  var $p = require('pure').$p
    , $ = window.jQuery
    , data = require('./lib/data')
    , rfn
    ;

  function init() {
    var dir
      ;

    dir = {
      ".js-person": {
        "p <- persons": {
          ".js-name": "p.name"
        , ".js-phone": "p.phone"
        , ".js-email": "p.email"
        }
      }
    };

    rfn = $p('.js-me').compile(dir);
  }

  function render() {
    console.log('data');
    console.log(data);
    $p('.js-me').render({ persons: [data.me] }, rfn);
    $p('.js-stewardship').render({ persons: data.stewardship }, rfn);
    $p('.js-companions').render({ persons: data.companions }, rfn);
    $p('.js-ht').render({ persons: data.homeTeachers }, rfn);
  }

  $(init);
  $(render);
}());
