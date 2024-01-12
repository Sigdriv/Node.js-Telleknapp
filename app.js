const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
app.use(express.urlencoded({extended: false}));

const dbConnection = require('./lib/db');

app.set('view engine', 'ejs');
// app.use(express.static('public'));

app.get('/', (req, res) => {
    dbConnection.query('SELECT * FROM Telleknapp', (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            res.render('main', { data:rows });
        }
    });
})

app.get('/knapp1', (req, res) => {
    dbConnection.query('SELECT * FROM Telleknapp WHERE id = 1', (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            res.render('knapp1', { data:rows });
        }
    });
});

app.post('/knapp1', (req, res) => {
    let error = false;

    if (!error) {
        dbConnection.query('UPDATE Telleknapp SET count = count + 1 WHERE id = 1', (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.redirect('/knapp1');
            }
        })
    }
})

app.get('/knapp2', (req, res) => {
    dbConnection.query('SELECT * FROM Telleknapp WHERE id = 2', (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            res.render('knapp2', { data:rows });
        }
    });
});

app.post('/knapp2', (req, res) => {
    let error = false;

    if (!error) {
        dbConnection.query('UPDATE Telleknapp SET count = count + 1 WHERE id = 2', (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.redirect('/knapp2');
            }
        })
    }
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});