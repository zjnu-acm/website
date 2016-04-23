/**
 * Created by kevin on 16-4-20.
 */
'use strict'
const router = require('express').Router();
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
//account
router.post('/account/register',upload.single('avatar'),(req,res)=>{
    console.log('files',req.file);
    console.log('body',req.body);
    res.send({userId:req.body.userId});
})
router.get('/account/login', (req, res, next)=> {
    if (req.query.userId == '11550223' && req.query.password == '11550223') {
        const maxAge = req.query.remember==='true' ? {maxAge: 30* 24 * 60 * 60} :{};
        console.log('maxAge',maxAge);
        const resbody = {
            userId: req.query.userId,
            nickname: 'Kevin Tan',
            avatarUrl: 'https://avatars0.githubusercontent.com/u/5887203?v=3&s=96',
        }
        res.cookie('token', 'sample token!', maxAge);
        res.cookie('user', JSON.stringify(resbody),maxAge);
        res.send(resbody);
    } else {
        res.status(400);
        res.send({
            errorCode: '000',
            message: 'username or password is invalid!'
        });
    }
});

router.put('/account/logout', (req, res, next)=> {
    res.clearCookie('token');
    res.clearCookie('user');
    res.send(null);
});

module.exports = router;