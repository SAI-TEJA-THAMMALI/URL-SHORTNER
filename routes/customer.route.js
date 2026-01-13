const express = require('express');
const { handleCustomerLogin, handleCustomerSignUp } = require("../controllers/customer.controller.js");
const router = express.Router();

router.post('/signup', handleCustomerSignUp);
router.post('/login', handleCustomerLogin);

router.get('/login', (req, res) => res.render('login'));   // FIXED
router.get('/signup', (req, res) => res.render('signup')); // FIXED
router.get('/', (req, res) => res.redirect('/signup'));    // OK

module.exports = router;
