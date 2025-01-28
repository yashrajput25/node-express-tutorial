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
    console.log("Get request in Places");
    res.json(place);
});

module.exports = router;
