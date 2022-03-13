//  Imports node modules
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
require('dotenv').config();
const path = require('path');

//  Imports routes
const routes = require('./controllers');

// Imports helper function
const helpers = require('./utils/helper');

// Initialise sequelise and session
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Initialise app variable by setting it to the value of express
const app = express();

// Create PORT environment variable or 3001
const PORT = process.env.PORT || 3001;

// Handlebars helpers
const hbs = exphbs.create({ helpers });

// Create session
const sess = {
  secret: process.env.DB_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

// Session middleware
app.use(session(sess));

// Informs Express.js to use the handlebars template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// Initialise connection to database and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port http://localhost:${PORT}/`));
});
