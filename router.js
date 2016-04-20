/**
 * Created by kevin on 16-4-20.
 */
'use strict'
const router = require('express').Router();
function getSuccess(data) {
    return {
        status: 'success',
        data
    }
}
function getFailure(error) {
    return {
        status: 'failure',
        error
    }
}

//account
router.get('/account/login', (req, res)=> {
    res.send(getSuccess({
        userId: 0,
        nickname: 'Kevin Tan',
        avatarUrl: 'https://avatars0.githubusercontent.com/u/5887203?v=3&s=96',
        token:'something token'
    }));
});


router.use((req, res, next)=> {
    console.log('Time:', Date.now());
    console.log('request',req.url);
    res.sendFile(__dirname + '/dist/index.html');
    //next();
});

module.exports = router;