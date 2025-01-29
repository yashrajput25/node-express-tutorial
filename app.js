const express = require('express');
const placeRoutes = require('./routes/places-routes');
const bodyParser = require('body-parser');

const app = express();

//middle ware//
app.use(bodyParser.json());

app.use('/api/places/',placeRoutes);

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        message: err.message || "An unknown error occurred!"
    });
})
app.listen(5000);
