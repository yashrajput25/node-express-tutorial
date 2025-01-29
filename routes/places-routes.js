const { json } = require('body-parser');
const express = require('express');
const placesController = require('../controller/places-controller');

const router = express.Router();


router.get('/:pid', placesController.getPlaceById);

// router.get("/user/:uid", (req, res, next) => {
//     const userID = req.params.uid;
//     const user = DUMMY_PLACES.find(u => {
//         return u.creator === userID;
//     });
//     res.json(user);
    
// }) 

module.exports = router;
