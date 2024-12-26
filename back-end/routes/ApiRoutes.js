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

router.get('/search/:query', (req, res)=>{
    const query = req.params.query;
    db.query(`SELECT * FROM coins WHERE name LIKE ?`, [query] , (err,result)=>{
        if(err){
            console.log(err, 'query error');
            return;
        }
        // console.log(result)

        if (result.length === 0) {
            return res.status(404).json({ message: 'Sonuç bulunamadı' });
        }
        res.json({ result });
    })

})

router.post('/filtered', (req, res) => {
    const {
        country,
        metal,
        quality,
        priceFrom,
        priceTo,
        yearFrom,
        yearTo,
        category_id
    } = req.body;

    let sqlQuery = 'SELECT * FROM coins WHERE 1=1'; // Başlangıçta WHERE 1=1 ekliyoruz, böylece koşul eklemek kolay oluyor.

    const values = []; // Parametreler için bir dizi oluşturuyoruz.

    // Filtreler varsa, SQL sorgusuna ekliyoruz
    if (country) {
        sqlQuery += ' AND country = ?';
        values.push(country);
    }

    if (metal) {
        sqlQuery += ' AND composition = ?'; // metal için 'composition' kullanıyoruz
        values.push(metal);
    }

    if (quality) {
        sqlQuery += ' AND quality = ?';
        values.push(quality);
    }

    if (priceFrom) {
        sqlQuery += ' AND price >= ?';
        values.push(priceFrom);
    }

    if (priceTo) {
        sqlQuery += ' AND price <= ?';
        values.push(priceTo);
    }

    if (yearFrom) {
        sqlQuery += ' AND year >= ?';
        values.push(yearFrom);
    }

    if (yearTo) {
        sqlQuery += ' AND year <= ?';
        values.push(yearTo);
    }

    if (category_id) {
        sqlQuery += ' AND category_id = ?';
        values.push(category_id);
    }
    db.query(sqlQuery, values, (err, result) => {
        if (err) {
            console.log(err, 'query error');
            return res.status(500).json({ error: 'Veritabanı hatası' });
        }

        console.log(result)
        res.json({ result });
    });
});





module.exports = router;