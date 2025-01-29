const HttpError = require('../models/http-error')
const { v4: uuidv4 } = require('uuid');


const DUMMY_PLACES = [
    {
        id: 'p1',
        title: "Empire State Building",
        address: "2253B/7",
        creator: "u1"
    },
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

const createPlace = (req, res, next)=>{
    const {id, title, description, coordinates , address, creator } = req.body;
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

exports.getPlaceById = getPlaceById;
exports.createPlace = createPlace;
exports.getUserById = getUserById;