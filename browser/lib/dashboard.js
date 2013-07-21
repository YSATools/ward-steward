(function () {
  "use strict";

  var $p = require('pure').$p
    , data = require('./mock/dashboard-data')
    , tpls = {}
    ;

  tpls.self = {};
  tpls.comps = {};
  tpls.hts = {};
  tpls.stews = {};

  function nickOrName(ctx) {
    return ctx.item.nick || ctx.item.name;
  }

  function init() {
    tpls.self.dir = {
      ".js-person": {
        "p <- persons": {
          ".js-name": nickOrName
        , ".js-last": "p.last"
        , ".js-phone": "p.phone"
        , ".js-email": "p.email"
        }
      }
    };

    function createChecker(type, key) {
      return function (ctx) {
        if (type === ctx.item[key]) {
          return 'checked';
        }
      };
    }
    tpls.stews.dir = {
      ".js-person": {
        "p <- persons": {
          ".js-name": nickOrName
        , ".js-last": "p.last"
        , ".js-phone": "p.phone"
        , ".js-email": "p.email"
        , ".js-visits": {
            "v <- visits": {
              ".js-message": "v.message"
            , ".js-home@checked": createChecker('home', 'type')
            , ".js-video@checked": createChecker('video', 'type')
            , ".js-phone@checked": createChecker('phone', 'type')
            , ".js-other@checked": createChecker('other', 'type')
            , ".js-none@checked": createChecker('other', 'type')
            }
          }
        }
      }
    };

    tpls.self.rfn = $p('.js-me .js-person-tpl').compile(tpls.self.dir);
    tpls.stews.rfn = $p('.js-stewardship .js-person-tpl').compile(tpls.stews.dir);
    tpls.comps.rfn = tpls.self.rfn;
    tpls.hts.rfn = tpls.self.rfn;
  }

  function render() {
    console.log('data');
    console.log(data);
    $p('.js-me .js-person-tpl').render({ persons: [data.me] }, tpls.self.rfn);
    $p('.js-stewardship .js-person-tpl').render({ persons: data.stewardship }, tpls.stews.rfn);
    $p('.js-companions .js-person-tpl').render({ persons: data.companions }, tpls.comps.rfn);
    $p('.js-ht .js-person-tpl').render({ persons: data.homeTeachers }, tpls.hts.rfn);
  }

  module.exports.init = init;
  module.exports.render = render;
}());
