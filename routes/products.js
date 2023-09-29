const express = require('express');
const router = express.Router();

// Routing ke halaman Home
router.get('/', (req, res) => {
    res.render('home');//dalam tanda petik adalah nama file tampilan yang ada di dalam folder "views"
  });
  // Routing ke halaman 
  
  // Routingan Untuk Registrasi
  router.get('/accesories', (req, res) => {
    res.render('accesories');//dalam tanda petik adalah nama file tampilan yang ada di dalam folder "views"
  });

  module.exports = router;