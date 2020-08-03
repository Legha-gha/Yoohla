var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Yoohla - Dashboard' });
});

router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Yoohla - Dashboard' });
});

router.get('/products-mgmt', function(req, res, next) {
  res.render('products-mgmt');

  
//   const pool = new Pool({
//     connectionString: connect
// })
// pool.on('error', (err, client) => {
//     console.error('Unexpected error on idle client', err)
//     process.exit(-1)
//   })
//   pool.connect((err, client, done) => {
     
//     if (err) throw err
//     client.query('SELECT *FROM product',(err, result) => {
//       done()
//       if (err) {
//         console.log(err.stack)
//       }
//       res.render('products-mgmt', { 
//         title: 'Yoohla - Products Management', 
//         product: result.rows
//       });
//     })
 
//     res.sendStatus(200);
//   })
 
});

router.get('/add-product', function(req, res, next) {
  res.render('add-product', { title: 'Yoohla - Add Products' });
});

router.get('/index-client', function(req, res, next) {
  res.render('index-client', { title: 'Yoohla - Add Products' });
});

router.get('/check-out', function(req, res, next) {
  res.render('check-out', {title: 'Yoohla - Check-out'});
});

router.get('/register', function(req, res, next) {
  res.render('register', {title: 'Yoohla - Register'});
});

module.exports = router;
