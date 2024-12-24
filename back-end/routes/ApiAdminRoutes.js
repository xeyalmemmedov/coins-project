const express = require('express');
const app = express();
const mysql = require('mysql');
const  session = require('express-sessions')
const bcrypt = require('bcryptjs');
const checkAdmin = require('../middlewares/CheckAdmin');
// const cors = require('cors');
// app.use(cors)

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password:'1234',
    database: 'coins',
    port: '3306'
})

const router = express.Router();

router.get('/', (req, res)=>{
    db.query('SELECT * FROM categories', (err, result)=>{
        if(err){
            console.log(err);
            return
        }
        res.send(JSON.stringify(result))
    })
});

router.get('/category/:id', (req, res)=>{
    const categoryID = req.params.id;
    db.query(`SELECT * FROM coins WHERE category_id=${categoryID}`, (err, result)=>{
        if(err){
            console.log(err)
            return
        }
        res.send(JSON.stringify(result))
    })
});
router.get('/product/:id', (req, res)=>{
    productID = req.params.id;
    db.query(`SELECT * FROM coins WHERE coins_id=${productID}`, (err, result)=>{
        if(err){
            console.log(err);
            return
        }
        res.send(JSON.stringify(result))
    })
})

router.post('/login', (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;
    console.log(username, password)
    db.query(`SELECT username, password FROM USERS WHERE user_name=${username}`, (err, result)=>{
        if(err){
            console.log('Username or password is incorrect!');
            return
        }
        bcrypt.compare(password, result.password, (err, isMatch)=>{
            if(err){
                console.log(err);
                return;
            }
            if(isMatch){
                res.send(JSON.stringify({result:true}));
                req.session.isAdmin = true; 
            }else{
                res.send(JSON.stringify({result:false}))
            }
        })
    })
})

router.get('/dashboard', checkAdmin, (req, res)=>{
    db.query('SELECT * FROM categories', (err, result)=>{
        if(err){
            console.log(err);
            return
        }
        res.send(JSON.stringify(result))
    })
});




module.exports = router;