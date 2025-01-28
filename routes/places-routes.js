const { json } = require('body-parser');
const express = require('express');

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
        const error = new Error("Could not find the place")
        error.code = 404;
        next(error);
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
