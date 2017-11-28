const express = require('express'),
webpack = require('webpack'),
webpackDevMiddleware = require('webpack-dev-middleware'),
webpackConfig = require('../webpack.config'),
compiler = webpack(webpackConfig),
app = express();

app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath
}));

app.listen(3000, () => {
  console.log('server is up and running')
});
