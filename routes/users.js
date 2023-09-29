const express = require('express');
const router = express.Router()

// mulai registration
router.route('/registration').get((req,res) => {
    res.render('registration');
}).post((req, res) => {
    res.send('post data');
});
// selesai registration

// mulai login 
router.route('/login').get((req, res) => {
    res.render('login')
}).post((req, res) => {
    res.send('berhasil login')
})
// checkout
router.route('/checkout').get((req, res) => {
    res.render('checkout')
}).post((req, res) => {
    res.send('berhasil checkout')
})

module.exports = router;