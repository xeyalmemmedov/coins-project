const express = require('express');
const app = express();
const mysql = require('mysql');
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// const cors = require('cors');
// app.use(cors)
const api = require('./routes/ApiRoutes');
const admin = require('./routes/ApiAdminRoutes');
const checkAdmin = require('./middlewares/CheckAdmin');


const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password:'1234',
    database: 'coins',
    port: '3306'
})


app.use('/api', api);
app.use('/admin/api', checkAdmin, admin);

// app.get('/api/category/:id', (req, res)=>{
//     const categoryID = req.params
// })








app.listen(3000, function(){
    console.log('server started successfully...');
})