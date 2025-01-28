const express = require('express');

const router = express.Router();
const DUMMY_USER = [
    {
        uid : 'u1',
        name : 'Yash'
    }
];

router.get("/:uid", (req, res, next) => {
    const userID = req.params.uid;
    const user = DUMMY_USER.find(u => {
        return u.uid === userID;
    });
    res.json(user);
    
}) 

module.exports = router;