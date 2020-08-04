const express = require('express');
const router = express.Router();


// Get All users. Navigate to localhost:3000/api/users
router.get('/', function(req, res, next){
    res.send('index.html');
});

module.exports = router;