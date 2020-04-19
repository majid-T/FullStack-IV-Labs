const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const dbDao = require('../dao');

const router = express.Router();


router.get('/events', (req, res, next) => {
    dbDao.getAllEvents()
    .then((data)=>{
        res.send(data);
    })
    .catch((data)=>{
        console.log(`ERROR\n: ${data}`);
        res.send('error');
    });
});

router.get('/chats', (req, res, next) => {
    const {roomname} = req.query;
    console.log(roomname);

    if(roomname===undefined){
        dbDao.getAllChats()
        .then((data)=>{
            res.send(data);
        })
        .catch((data)=>{
            console.log(`ERROR\n: ${data}`);
            res.send('error');
        });
    }else{
        dbDao.getChatsForRoom(roomname)
        .then((data)=>{
            res.send(data);
        })
        .catch((data)=>{
            console.log(`ERROR\n: ${data}`);
            res.send('error');
        });
    }

   
});

module.exports = router;