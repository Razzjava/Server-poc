const express = require('express');
const session = require('express-session');
const sqlite3 = require('sqlite3').verbose();

const { createUser, getUser, deleteUser } = require('./db');



db.run(newTable, (err) => {
    if (err) {
        console.log('Error creating table: ', err);
    } else {
        console.log('Table created successfully');
    }
});


const app = express();

app.use(session({
  secret: 'test',
  resave: false,
  saveUninitialized: false
}));

app.get('/', (req, res) => {
    if (req.session.views) {
      req.session.views++;
    } else {
      req.session.views = 1;
    }
    res.send(`Welcome to the server, you are number: ${req.session.views}`);
  });

  app.post('/login', (req, res) => {
    const { username, password } = req.body;
    res.send('Logged in successfully.');
    });
  
  app.get('/logout', (req, res) => {
    req.session.destroy();
    res.send('Logged out successfully.');
  });

  app.listen(9000, () => {
    console.log('Server listening on port 9000');
  });
  