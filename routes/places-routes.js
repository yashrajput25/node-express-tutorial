const { json } = require('body-parser');
const express = require('express');
const HttpError = require('../models/http-error')

const router = express.Router();
const DUMMY_PLACES = [
    {
        id: 'p1',
        title: "Empire State Building",
        address: "2253B/7",
        creator: "u1"
    },
];

router.get('/:pid', (req, res, next) => {
    const placeID = req.params.pid;
    const place = DUMMY_PLACES.find(p=>{
        return p.id === placeID;
    });
    if(!place){
       throw new HttpError("Could not find the place", 404);

    }
    else{
        res.json(place);
    }
    
});

router.get("/user/:uid", (req, res, next) => {
    const userID = req.params.uid;
    const user = DUMMY_PLACES.find(u => {
        return u.creator === userID;
    });
    res.json(user);
    
}) 

module.exports = router;
