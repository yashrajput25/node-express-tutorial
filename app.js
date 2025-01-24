const express = require('express')
const bodyParser = require('body-parser');
const app = express();

app.use((req, res, next) => {
    let body = '';
    req.on('end', ()=>{
        const userName = body.split('=')[1];
    if(userName){
        req.body = {name: userName}
    }
    next();
    });

    req.on('data', chunk => {
        body += chunk;
    });
    
});

app.use((req, res, next) => {

    if(req.body){
        return res.send('<h1>User:' +req.body.name + '</h1>')
    }
    res.send(`
        <form method="POST">
            <label for="username">Enter your name:</label>
            <input type="text" id="username" name="username" required>
            <button type="submit">Submit</button>
        </form>
    `);
});

app.listen(5000);