const express = require('express')
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.post('/' ,(req, res, next) => {
    res.send('<h1>User: ' + req.body.username + '</h1>');
})

app.get('/',(req, res, next) => {
    res.send(`
        <form method="POST">
            <label for="username">Enter your name:</label>
            <input type="text" id="username" name="username" required>
            <button type="submit">Submit</button>
        </form>
    `);
});

app.listen(5000);