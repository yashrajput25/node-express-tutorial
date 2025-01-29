const { json } = require('body-parser');
const express = require('express');
const placesController = require('../controller/places-controller');

const router = express.Router();


router.get('/:pid', placesController.getPlaceById);
router.get('/user/:uid', placesController.getUserById);
router.post('/', placesController.createPlace)
router.patch('/:pid', placesController.updatePlaceByID)

module.exports = router;
