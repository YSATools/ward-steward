jQuery(function () {
  "use strict";

  var login = require('./lib/login')
    , dashboard = require('./lib/dashboard')
    , $ = jQuery
    , $events = $('body')
    ;

  $(function () {
    login.init();

    // TODO make modal / overlay
    $('.js-nav').hide();
    $('.js-pill-content').hide();

    $events.on('submit', '.js-form-signin', function (ev) {
      ev.preventDefault();
      ev.stopPropagation();

      login.login(function (err, user) {
        console.log('success', user);

        $('.js-sign-in').hide();
        $('.js-nav').show();
        $('.js-pill-content').show();
        $('#js-nav-tab a:last').tab('show');
        //$('.js-dashboard').show();
        if (true || user.admin) {
          $('.js-assignments-tab').show();
        }
      });
    });

    // http://twitter.github.io/bootstrap/javascript.html#tabs
    // See the methods section
    //$events.on('click', '#js-nav-tab a', function (e) {
    $('#js-nav-tab a').click(function (e) {
      console.log('hello!');
      e.preventDefault();
      $(this).tab('show');
    });

    dashboard.init();
    dashboard.render();
  });
});
