const path = require('path')
const express = require('express')
var morgan = require('morgan')
var exphbs  = require('express-handlebars');
const { log } = require('console');
const app = express()
const port = 3000 //
//HTTP logger
const route = require('./routes/index')
app.use(express.static(path.join(__dirname,'public')))  //static file
app.use(morgan('combined'));
app.use(express.urlencoded({
  extended:true
}));
app.use(express.json());
//template enginner
app.engine('hbs', exphbs({
  extname:'.hbs'
}));
app.set('view engine', 'hbs');//đổi đuôi handlebars thành hbs
app.set('views', path.join(__dirname, 'resourcs\\views'));

route(app);
//127.0.0.1:port 
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})