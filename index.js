const express = require('express');
const app = express();
// products router
const productsRouter = require('./routes/products');
// registeration router
const userRouter = require('./routes/users');
// const path = require('path');

// agar dapat mengakses folder public
app.use(express.static('public'));
// seting data json
app.use(express.json()); // supaya express bisa response json
// seting tamplet engin
app.set('view engine', 'ejs')-
// products router
// app.use(productsRouter);

// route home
app.get('/', (req, res) => {
  res.render('home');//dalam tanda petik adalah nama file tampilan yang ada di dalam folder "views"
});
// route accesoris
app.get('/accesories', (req, res) => {
  res.render('accesories');//dalam tanda petik adalah nama file tampilan yang ada di dalam folder "views"
});
// user Router
// app.use(userRouter);

// registration
app.route('/registration').get((req,res) => {
  res.render('registration');
}).post((req, res) => {
  res.send('post data');
});
// login get dan post
app.route('/login').get((req, res) => {
  res.render('login')
}).post((req, res) => {
  res.send('berhasil login')
});
// checkout
app.route('/checkout').get((req, res) => {
  res.render('checkout')
}).post((req, res) => {
  res.send('berhasil checkout')
});

app.listen(5001, () => {
  console.log('App listening on port 5001');
});
