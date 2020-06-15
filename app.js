const express = require('express');
const app = express();

app.engine('.html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use("/assets/scss", sass({
  src: __dirname + "/assets/scss",
  dest: __dirname + "/assets/css",
  debug: true,
  outputStyle: 'expanded'
}));

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(3000, () => {
  console.log('listening...');
});