/**
 * Created by kevin on 16-4-20.
 */
'use strict'
const router = require('express').Router();

//account
router.get('/account/login', (req, res,next)=> {
    if (req.query.username == '11550223' && req.query.password == '11550223') {
        res.send({
            userId: 0,
            nickname: 'Kevin Tan',
            avatarUrl: 'https://avatars0.githubusercontent.com/u/5887203?v=3&s=96',
            token: 'something token'
        });
    } else {
        res.status(400);
        res.send({
            errorCode: '000',
            message: 'username or password is invalid!'
        });
    }
});

module.exports = router;