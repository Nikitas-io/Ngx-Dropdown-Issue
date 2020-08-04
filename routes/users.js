const express = require('express');
const router = express.Router();
const mongojs = require('mongojs');
const User = require('./models/User');
// Import the token verification middlewear.
const verify = require('./helpers/verifyToken');


// Get All users. Navigate to localhost:3000/api/users
router.get('/all', async function(req, res, next){
    // Make a request to get all the users.
    const users = await User.find();
    // Check if the request failed.
    if(!users){
        return res.status(400).send('Could not find users.');
    }
    // Return the JSON content of the query.
    res.send(users);
});

// Load the signed-in User's profile.
// Note the *verify* token-verification middlewear in the get() function.
router.get('/:id', async (req, res) => {
    console.log(req.params.id);
    // Get the user specified in the verified token. 
    const thisUser = await User.findOne({_id: req.params.id});
    // Return the user.
    res.send(thisUser);
});

module.exports = router;