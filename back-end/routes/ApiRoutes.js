const express = require('express');
const app = express();
const mysql = require('mysql');
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
    db.query(`SELECT * FROM coins WHERE category_id=?`,[categoryID], (err, result)=>{
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




module.exports = router;