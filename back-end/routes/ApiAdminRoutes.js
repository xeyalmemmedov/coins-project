const express = require('express');
const app = express();
const mysql = require('mysql');
const  session = require('express-session')
const bcrypt = require('bcryptjs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password:'1234',
    database: 'coins',
    port: '3306'
})

const router = express.Router();


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
    db.query(`SELECT user_name, password FROM users WHERE user_name=?`, [username], (err, result)=>{
        if(err){
            console.log('Username or password is incorrect!', err);
            return
        }
        const storedPassword = result[0].password
        bcrypt.compare(password, storedPassword, (err, isMatch)=>{
            if(err){
                console.log('compare error',err);
                return;
            }
            if(!isMatch){
                res.json({isAuth:false})
            }else if(isMatch){
                res.json({isAuth:true, redirectUrl:'http://localhost:5173/admin'})       
            }
        })
    })
})

router.get('/dashboard', (req, res)=>{
    db.query('SELECT * FROM coins', (err, result)=>{
        if(err){
            console.log(err);
            return res.status(500).send('Internal Server Error');
        }
        res.send(JSON.stringify(result))
    })
});




module.exports = router;