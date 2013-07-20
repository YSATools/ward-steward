(function () {
  "use strict";

  var fs = require('fs')
    , lines
    , members = []
    , servers = [
        "gmail.com"
      , "yahoo.com"
      , "ymail.com"
      , "msn.com"
      , "hotmail.com"
      , "comcast.net"
      ]
    ;

  function rand(min, max) {
    return Math.floor(Math.random() * (max + 1)) + min;
  }

  function rands(len, min, max) {
    var num = ''
      ;

    while (num.length < len) {
      num += rand(min, max);
    }

    return num;
  }

  function phone() {
    var num = rands(7, 0, 9)
      ;

    if (/911/.test(num) || /^0/.test(num)) {
      return phone();
    }

    num = num.split('');
    if (rand(0,1)) {
      num.splice(0, 0, 5, 5, 5);
    } else {
      num.splice(3, 0, 5, 5, 5);
    }

    return '(' + num.splice(0, 3).join('') + ') '
      + num.splice(0, 3).join('')
      + '-' + num.splice(0, 4).join('')
      ;
  }

  lines = fs.readFileSync('./members.csv', 'utf8').trim().split(/\s*\n\s*/g);
  lines.forEach(function (line, i) {
    var record = line.split(/\s*,\s*/g)
      , member
      , name
      , nick
      , last
      , gender
      ;

    name = record[0];
    nick = record[1];
    last = record[2];
    gender = ('m' === record[3] ? 'male' : 'female');

    member = {
      name: name
    , nick: nick || ''
    , last: last
    , phone: phone()
    , email: name + (rand(0,1) ? '.' : '_') + last + '@' + servers[rand(0, servers.length - 1)]
    };

    if (0 !== (i % 7)) {
      member.email = member.email.toLowerCase();
    }
    members.push(member);
  });

  console.log(JSON.stringify(members, null, '  '));
}());
