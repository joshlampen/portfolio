const express = require('express');
const app = express();
const sassMiddleware = require('node-sass-middleware');

app.engine('.html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(sassMiddleware({
  src: __dirname + "/assets/scss",
  dest: __dirname + "/assets/css",
  debug: true,
  outputStyle: 'compressed'
}));

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(3000, () => {
  console.log('listening...');
});