const { v4: uuidv4 } = require('uuid');
const HttpError = require('../models/http-error');

const DUMMY_USERS = [
    {
        id: 'u1',
        name: 'Max Schwarz',
        email: 'test@test.com',
        password: 'testers'
    }
]



const getUsers = (req, res, next) => {
    res.json({users: DUMMY_USERS})
}

const signUp = (req, res, next) => {
    const {name, email, password} = req.body;
    const createdUser = {
        id: uuidv4(),
        name,
        email,
        password
    }

    DUMMY_USERS.push(createdUser);

    res.json(201).json({user: createdUser});
    
}

const logIn = (req, res, next) => {
    const {email, password} = req.body;
    const user = DUMMY_USERS.find(u=> {
        return u.email === email && u.password === password
    });

    if(!user){
        throw new HttpError("User does not exist", 401);
    }

    else{
        res.json({"user": "exists, logged in"})
    }
}

exports.getUsers = getUsers;
exports.signUp = signUp;
exports.logIn = logIn;