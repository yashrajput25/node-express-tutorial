const { json } = require('body-parser');
const express = require('express');
const {check} = require('express-validator')
const placesController = require('../controller/places-controller');

const router = express.Router();


router.get('/:pid', placesController.getPlaceById);
router.get('/user/:uid', placesController.getUserById);
router.post('/', [check('title').notEmpty(), check('description').notEmpty, check('address').notEmpty()] ,placesController.createPlace)
router.patch('/:pid',[check('title').notEmpty(), check('creator').notEmpty() ], placesController.updatePlaceByID)
router.delete('/:pid', placesController.deletePlaceByID);

module.exports = router;
