const mySQL = require('mysql');
const mySQLConnection = mySQL.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Password',
    database: 'Telleknapp'
})

mySQLConnection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected to database');
    }
})

module.exports = mySQLConnection;