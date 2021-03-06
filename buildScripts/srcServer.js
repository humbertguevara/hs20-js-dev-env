import express from 'express';
import path from 'path';
import open from 'open';

import chalk from 'chalk';

import webpack from 'webpack';
import config from '../webpack.config.dev';

const port = 3002;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware') (compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function (err) {
    if(err) {
        console.log(err);
    } else {
        console.log(chalk.green("Server running on port " + port)); // eslint-disable-line no-console
        open('http://localhost:' + port);
    }
});
