const express = require('express');
const app = express();
const mysql = require('mysql');
// const cors = require('cors');
// app.use(cors)

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password:'1234',
    database: 'coins',
    port: '3306'
})


app.get('/api/', (req, res)=>{
    db.query('SELECT * FROM categories', (err, result)=>{
        if(err){
            console.log(err);
            return
        }
        res.send(JSON.stringify(result))
    })
});

app.get('/api/category/:id', (req, res)=>{
    const categoryID = req.params
})








app.listen(444, function(){
    console.log('server started successfully...');
})