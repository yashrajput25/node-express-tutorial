const HttpError = require('../models/http-error')
const { v4: uuidv4 } = require('uuid');
const {validationResult} = require('express-validator')
const getCoordsForAddress = require('../util/location')

let DUMMY_PLACES = [
    {
        id: 'p1',
        title: "Empire State Building",
        address: "NYC",
        creator: "u1"
    },
    {
        id: 'p2',
        title: "India Gate",
        address: "Delhi",
        creator: "u2"
    }
];

const getPlaceById =  (req, res, next) => {
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
    
}

const createPlace = async(req, res, next)=>{
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        console.log(errors);
        next( new HttpError('Invalid input passed', 422));
    }
    const {id, title, description , address, creator } = req.body;
    let coordinates;
    try{
        coordinates = await getCoordsForAddress(address);
    }
    catch(error){
        return next(error);
    }
    
    const createdPlace = {
        id: uuidv4(),
        title,
        description,
        location: coordinates,
        address,
        creator
    }

    DUMMY_PLACES.push(createdPlace);
    res.status(201).json({place: createdPlace})
}

const getUserById = (req, res, next) => {
    const userID = req.params.uid;
    const user = DUMMY_PLACES.find(u => {
        return u.creator === userID;
    });
    if(!user){
        throw new HttpError("Could not find the place", 404);
 
     }
     else{
         res.json(user);
     }
    
}

const updatePlaceByID = (req, res, next)=>{
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        console.log("You have missed something");
        throw new HttpError("You have missed something", 404);
    }
    const placeID = req.params.pid;
    const {title, creator} = req.body;
    const updatedPlace ={ ...DUMMY_PLACES.find(p=> {
        return p.id === placeID;
    })}
    const placeIndex = DUMMY_PLACES.findIndex(p =>{
        return p.id === placeID;
    })
    updatedPlace.title = title;
    updatedPlace.creator = creator;
    DUMMY_PLACES[placeIndex] = updatedPlace;

    res.status(200).json({place : updatedPlace})
}

const deletePlaceByID = (req, res, next) => {
    const placeID = req.params.pid;
    DUMMY_PLACES = DUMMY_PLACES.filter(p =>{
        return p.id !== placeID;
    });
    res.status(200).json({ message: "Deleted successfully" });
}

exports.getPlaceById = getPlaceById;
exports.createPlace = createPlace;
exports.getUserById = getUserById;
exports.updatePlaceByID = updatePlaceByID;
exports.deletePlaceByID = deletePlaceByID;