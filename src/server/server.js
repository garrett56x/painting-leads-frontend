const express = require('express');
const app = express();

app.get('/hey', (req, res) => res.send('ho!'));

app.listen(8080);

// import express from 'express';
// import webpack from 'webpack';
// import path from 'path';
// import config from '../../webpack.config';
// import open from 'open';

// const port = 4000;
// const app = express();
// const compiler = webpack(config);

// app.use(require('webpack-dev-middleware')(compiler, {
//   publicPath: config.output.publicPath
// }));

// app.use(require('webpack-hot-middleware')(compiler));

// app.get('*', function(req, res) {
//   res.sendFile(path.join( __dirname, '../src/index.html'));
// });

// app.listen(port, function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     open(`http://localhost:${port}`);
//   }
// });
