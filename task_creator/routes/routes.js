const express = require('express');
const home = require('../controllers/home');

const router = express.Router();

router.get('/', home.getHomepage);

router.get('/add', home.getAdd);

router.post('/add', home.postAdd);

module.exports = router;