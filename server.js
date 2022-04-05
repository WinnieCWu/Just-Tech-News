const path = require('path');
const express = require("express");
const session = require('express-session');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret',
  cookie:{},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};


const hbs = exphbs.create({});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//static() can take all contents of folder and serve as static assets. 
//useful for front-end files
app.use(express.static(path.join(__dirname, 'public')));
//set as app's preferred template engine of choice
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// turn on routes
app.use(require('./controllers/'));

app.use(session(sess));
// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
