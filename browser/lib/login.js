(function () {
  "use strict";

  var login = module.exports
    ;

  login.init = function () {
  };

  login.login = function (cb) {
    console.log('no login strategy');
    cb(null, {});
  };
}());
