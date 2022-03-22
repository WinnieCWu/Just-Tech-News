const path = require('path');
const express = require("express");
const routes = require("./routes");
const sequelize = require("./config/connection");

const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//static() can take all contents of folder and serve as static assets. 
//useful for front-end files
app.use(express.static(path.join(__dirname, 'public')));
//set as app's preferred template engine of choice
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
