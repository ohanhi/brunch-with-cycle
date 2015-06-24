# See http://brunch.io/#documentation for docs.
exports.config =
  files:
    javascripts:
      joinTo:
        'javascripts/app.js': /^app\//
      stylesheets:
        joinTo: 'stylesheets/app.css'
