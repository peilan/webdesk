/*eslint-env commonjs*/
module.exports = (html, initialState) => `<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8"/>
    <title>lexema helpdesk</title>
    <link rel="stylesheet" type="text/css" href="/assets/css/style.css">
    <link rel="icon" type="image/png" href="/assets/img/favicon.ico" />
  </head>
  <body>
    <div id="root">${html}</div>
	    <script>
        window.__INITIAL_STATE__ = ${initialState};
      </script>
      <script src="/static/bundle.js"></script>
  </body>
</html>`
