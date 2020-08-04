const express = require('express');
var router = express.Router();
// Import User model.
const User = require('./models/User');
// Import JTW web token.
const jwt = require('jsonwebtoken');
// Import Validation funcions.
const { registerValidation, loginValidation } = require('./models/userValidation');
// Import Password hashing.
const bcrypt = require('bcryptjs');
// Import the token verification middlewear.
const verify = require('./helpers/verifyToken');

// Asynchronous POST request to add user to the db.
router.post('/sign-up', async (req, res) => {
    // Validate the User data.
    const {error} = registerValidation(req.body);
    // Check if there was an error in validation.
    if(error){
        return res.status(400).send(error.details[0].message);
    }

    // Check if the user is already in the database.
    const emailExists = await User.findOne({email: req.body.email});
    if(emailExists){
        return res.status(400).send('Email already exists.');
    }

    // Check if the 2 password fields match.
    if(!(req.body.password == req.body.confirmPassword)){
        return res.status(400).send('Passwords do not match.');
    }

    // Check if the User has accepted the terms of use.
    if(!req.body.terms){
        return res.status(400).send('User did not accept the terms of use.');
    }

    // Generate a salt with a complexity of 10.
    const salt = await bcrypt.genSalt(10);
    // Hash the password by mashing it with the salt. 
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    // Create a new user based on the User model.
    const user = new User({
        fullName: req.body.fullName,
        email: req.body.email,
        password: hashPassword
    })
    try{
        // Save the user to the database.
        await user.save();
        
        // Create and assign a token to the new user.
        const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET, {expiresIn: '2h'});
        // Add the token to the 'auth-token' header and send it back
        // as the response.
        res.header('auth-token', token).send({token: token});
    }catch(err){
        res.status(400).send(err);
    }
});

// Asynchronous POST request to login user.
router.post('/sign-in', async (req, res) => {
    // Validate the User data.
    const {error} = loginValidation(req.body);
    // Check if there was an error in validation.
    if(error){
        return res.status(400).send(error.details[0].message);
    }

    // Try to find the email in the database.
    const user = await User.findOne({email: req.body.email});
    // Check if email doesn't exist.
    if(!user){
        return res.status(400).send('Email or password is wrong.');
    }
    // Check if email doesn't exist.
    const validPass = await bcrypt.compare(req.body.password, user.password);
    // Validate the password.
    if(!validPass){
        return res.status(400).send('Email or password is wrong.');
    }

    // A variable to store the expiration date of the token.
    let expiration = {};
    // Check if the user has selected to remember them.
    if(req.body.rememberMe){
        // JWT expires in a month.
        expiration = {expiresIn: '30d'};
    }else{
        // JWT expires in 1 hour.
        expiration = {expiresIn: '1h'};
    }

    /*
    - Create and assign a token. 
    - 1st argument: send the user ID back with the token to the client.
    - 2nd argument: sign the token using the secret from the .env file. 
    - 3rd argument: the token will expire in 2 hours.
    */
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET, expiration);
    // Add the token to the 'auth-token' header and send it back
    // as the response.
    res.header('auth-token', token).send({token: token});
});

// Asynchronous POST request to logout the user.
router.post('/sign-out', (req, res) => {
    // Remove auth-token header that stores the JWT.
    const response = res.removeHeader('auth-token');
    res.send(response);

    /* Note that a way to litteraly log out would be store the token in a database of 
    invalid tokens and reject the token when verifying tokens */
});

module.exports = router;