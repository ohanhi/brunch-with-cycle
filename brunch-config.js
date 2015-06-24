// See http://brunch.io/#documentation for docs.
module.exports = {
  config:
    {
      files: {
        javascripts:
          { joinTo:
            { 'javascripts/app.js': /^app\// }
          },
        stylesheets:
          { joinTo: 'stylesheets/app.css' }
      }
    }
  };
