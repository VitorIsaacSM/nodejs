const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('view engine', 'ejs');
app.set('views', 'views');

const ErrorController = require('./controllers/error.js')
const routes = require('./routes/routes');
app.listen(3001);

app.use(routes);
app.use(ErrorController.get404);