// Assuming you are using Express.js
// Middleware to parse the request body
const express = require('express');

const register = (app) => {
    app.use(express.urlencoded({ extended: true }));
    app.post('/login', (req, res) => {
        const { username, password } = req.body;
    
        // Perform validation logic here
        if (username === 'admin' && password === 'password') {
            // Redirect to the next page
            res.render('pages/workout/main');
        } else {
            // Handle invalid credentials
            res.send('Invalid username or password');
        }
    });
}
module.exports = register;
