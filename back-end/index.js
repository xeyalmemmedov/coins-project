const express = require('express');
const app = express();
const mysql = require('mysql');
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}))
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
const api = require('./routes/ApiRoutes');
const admin = require('./routes/ApiAdminRoutes');

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password:'1234',
    database: 'coins',
    port: '3306'
})


app.use('/api', api);
app.use('/admin/api', admin);

app.listen(3000, function(){
    console.log('server started successfully...');
})