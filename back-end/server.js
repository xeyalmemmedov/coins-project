const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
app.use(cors)

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'1234',
    database: 'coins',
    port: '3306'
})


app.get('/', (req, res)=>{
    db.query('SELECT * FROM categories', (err, result)=>{
        res.send(JSON.stringify(result))
    })
})







app.listen(81, function(){
    console.log('server started successfully...');
})