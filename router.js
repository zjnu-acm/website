/**
 * Created by kevin on 16-4-20.
 */
'use strict'
const db = require('./samples');
const router = require('express').Router();
var multer = require('multer')
var upload = multer({dest: 'uploads/'})
//account
router.post('/account/register', upload.single('avatar'), (req, res)=> {
    console.log('files', req.file);
    console.log('body', req.body);
    res.send({userId: req.body.userId});
})

router.get('/account/login', (req, res, next)=> {
    if (req.query.userId == '11550223' && req.query.password == '11550223') {
        const maxAge = req.query.remember === 'true' ? {maxAge: 30 * 24 * 60 * 60} : {};
        console.log('maxAge', maxAge);
        const resbody = {
            userId: req.query.userId,
            nickname: 'Kevin Tan',
            avatarUrl: 'https://avatars0.githubusercontent.com/u/5887203?v=3&s=96',
        }
        res.cookie('token', 'sample token!', maxAge);
        res.cookie('user', JSON.stringify(resbody), maxAge);
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

router.get('/problems', (req, res)=> {
    const resBody = {
        total: 10,
        list: Array.from({length: 30}, (obj, index)=> {
            return {
                problemId: 1000 + index,
                title: 'A+B Problem',
                tags: ['Math', 'Brute Force'],
                difficulty: '40%',
                static: {
                    ac: 1235,
                    submit: 2152
                },
                date: (new Date()).toLocaleString()
            }
        })
    }
    res.send(resBody);
});
router.get('*/languages', (req, res)=> {
    res.send(db.get('languages'));
})

router.get('*/problems/:problemId', (req, res)=> {
    res.send(db.get('problem', req.params.problemId))
});

router.post('*/problems/:problemId/submit', (req, res)=> {
    console.log('submit', req.params.problemId);
    res.send({submissionId: '11223'});
})

router.get('/submissions', (req, res)=> {
    console.log(req.query);
    const reqBody = {
        total: 10,
        list: Array.from({length: 30}, (obj, index)=> {
            return {
                submissionId: 1000 + index,
                userId: db.get('userIds', index),
                problemId: Math.floor(999 * (Math.random()) + 1000),
                verdictId: Math.floor(10 * (Math.random())),
                time: '600 MS',
                memory: '9492 KB',
                languageId: Math.floor(6 * Math.random()),
                accessible: true,
                length: '800 B',
                submitTime: '2016-04-05 16:25:20'
            }
        })
    }
    res.send(reqBody);
})


router.get('*/submissions/:submissionId', (req, res)=> {
    res.send(db.get('submission', req.params.submissionId))
})

router.get('/contests', (req, res)=> {
    console.log(req.query);
    const reqBody = {
        total: 10,
        list: Array.from({length: 30}, (obj, index)=> {
            return {
                contestId: 1000 + index,
                title: db.get('cTitles', index),
                startTime: '2016-04-05 12:00:20',
                endTime: '2016-04-05 17:00:20',
                status: Math.floor(Math.random() * 3),//0-pending,1-running,2-ended
                attendsCount: Math.floor(Math.random() * 1000)
            }
        })
    }
    res.send(reqBody);
})
router.get('/contests/:contestId', (req, res)=> {
    res.send({
        title: db.get('cTitles', 1 * req.params.contestId - 1000),
        startTime: new Date('2016-04-28 02:00:00'),
        endTime: new Date('2016-04-28 02:25:00'),
        statusId: 1,
        attendsCount: Math.floor(Math.random() * 1000),
        host: {
            userId: '11550223',
            nickname: 'Kevin Tan'
        }
    })
})

router.get('/contests/:contestId/problems', (req, res)=> {
    console.log(req.url);
    res.send(Array.from({length: 11}, (obj, i)=> {
        return {
            problemOrder: String.fromCharCode('A'.charCodeAt(0) + i),
            title: 'A + B Problem',
            static: {
                ac: 12,
                submit: 25
            }
        }
    }))
})
router.get('/contests/:contestId/submissions', (req, res)=> {
    const reqBody = {
        total: 10,
        list: Array.from({length: 30}, (obj, index)=> {
            return {
                submissionId: 1000 + index,
                userId: db.get('cUserIds', index),
                problemOrder: String.fromCharCode('A'.charCodeAt(0) + index % 10),
                verdictId: Math.floor(10 * (Math.random())),
                time: '600 MS',
                memory: '9492 KB',
                length: '800 B',
                accessible: false,
                languageId: Math.floor(6 * Math.random()),
                submitTime: '2016-04-05 16:25:20'
            }
        })
    }
    res.send(reqBody);
})
router.get('/contests/:contestId/standings', (req, res)=> {
    const list = Array.from({length: 30}, (obj, i)=> {
            return {
                rank: i + 1,
                userId: db.get('cUserIds', i),
                nickname: db.get('cUserIds', i),
                accepts: db.get('cAccepts', i),
                penalty: db.get('cPenalties', i),
                detail: db.get('cDetails', i)
            }
        }
    )
    res.send({
        total: 10,
        problemOrders: db.get('cProblemOrders'),
        list
    });
})
router.get('/users/', (req, res)=> {
    const reqBody = {
        total: 10,
        list: Array.from({length: 30}, (obj, index)=> {
            return {
                rank: index + 1,
                userId: db.get('userIds', index),
                nickname: db.get('nicknames', index),
                signature: db.get('signs', index),
                classname: db.get('classnames', index),
                static: {
                    ac: 1235,
                    submit: 2152
                }
            }
        })
    }
    res.send(reqBody);
})
router.get('/users/:userId', (req, res)=> {
    res.send({
        userId: '11550223',
        nickname: 'Kevin Tan',
        email: 'stkevintan@foxmail.com',
        classname: 'Software Engineering (121)',
        signature: 'There is a will, there is a way',
        avatarUrl: 'http://acdream.info/img/avatar/xiexinxinlove/2.jpeg',
        solved: Array.from({length: 30}, (obj, i)=>1000 + i + '')
    })
})

router.get('*/topics', (req, res)=> {
    const list = Array.from({length: 30}, (obj, i)=> {
        return {
            topicId: 1000 + i,
            title: db.get('topics', i),
            author: {
                userId: db.get('userIds', i),
                nickname: db.get('nicknames', i),
                avatarUrl: db.get('avatarUrls', i)
            },
            reply: Math.floor(50 * Math.random())
        }
    })
    res.send({
        total: 10,
        list
    })
})
router.get('*/topics/:topicId', (req, res)=> {
    const list = Array.from({length: 2}, (obj, i)=> {
        const index = Math.floor(20 * Math.random());
        return {
            postId: i,
            title: db.get('topics', 1*req.params.topicId),
            content: db.get('topicContent', i),
            replyId: 0,
            createTime: new Date(),
            author: {
                userId: db.get('userIds', index),
                nickname: db.get('nicknames', index),
                avatarUrl: db.get('avatarUrls', index)
            }
        }
    })
    res.send({
        total: 1,
        list
    })
})
module.exports = router;