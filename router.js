/**
 * Created by kevin on 16-4-20.
 */
'use strict'
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
                problemId: '' + 1000 + index,
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
/*
 <MenuItem value={1} primaryText="GNU C++"/>
 <MenuItem value={2} primaryText="GNU C"/>
 <MenuItem value={3} primaryText="Pascal"/>
 <MenuItem value={4} primaryText="Java"/>
 <MenuItem value={5} primaryText="VC++"/>
 <MenuItem value={6} primaryText="GNU C++11"/>
 */
router.get('*/languages', (req, res)=> {
    res.send([
        {
            languageId: 0,
            name: 'GNU C++'
        },
        {
            languageId: 1,
            name: 'GNU C'
        },
        {
            languageId: 2,
            name: 'Pascal'
        },
        {
            languageId: 3,
            name: 'Java'
        },
        {
            languageId: 4,
            name: 'VC++'
        }, {
            languageId: 5,
            name: 'GNU C++11'
        }
    ])
})
router.get('*/problems/:problemId', (req, res)=> {
    res.send({
        title: '顺序对齐（Align）-中高级',
        tags: ['DP'],
        timelimit: {java: '2000MS', others: '1000MS'},
        memorylimit: {java: '65536K', others: '65536K'},
        description: `
        <div class="ptx" lang="en-US"><p>考虑两个字符串右对齐的最佳解法。例如，有一个右对齐方案中字符串是AADDEFGGHC和ADCDEGH。</p>
            <p>AAD_DEFGGHC</p>
            <p> ADCDE__GH_</p>   
            <p>每一个数值匹配的位置值2分，一段连续的空格值-1分。所以总分是匹配点的2倍减去连续空格的段数，在上述给定的例子中，6个位置（A，D，D，E，G，H）匹配，三段空格，所以得分2*6+(-1)*3=9，注意，我们并不处罚左边的不匹配位置。若匹配的位置是两个不同的字符，则既不得分也不失分。</p>
            <p>请你写个程序找出最佳右对齐方案。</p>
            </div>
        `,
        input: `输入文件包含两行，每行一个字符串，最长50个字符。字符全部是大字字母。`,
        output: `一行，为最佳对齐的得分。`,
        sampleInput: `AADDEFGGHC
ADCDEGH
        `,
        sampleOutput: `9`,
        hint: `LCS`,
        source: 'ZJNU ACM TEAM',
        static: {
            ac: 29,
            submit: 65
        }
    })
});

router.post('*/problems/:problemId/submit', (req, res)=> {
    console.log('submit', req.param.problemId);
    res.send({submissionId: '11223'});
})

router.get('/submissions', (req, res)=> {
    console.log(req.query);
    const reqBody = {
        total: 10,
        list: Array.from({length: 30}, (obj, index)=> {
            return {
                submissionId: '100' + index,
                userId: 'vjudge' + index,
                problemId: Math.floor(1000 * (Math.random()) + 1000),
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
    res.send({
        userId: 'vjudge1',
        problemId: Math.floor(1000 * (Math.random()) + 1000),
        problemOrder: String.fromCharCode('A'.charCodeAt(0) + Math.floor(11 * (Math.random()))),
        verdictId: Math.floor(10 * (Math.random())),
        time: '600 MS',
        memory: '9492 KB',
        languageId: Math.floor(6 * Math.random()),
        length: '800 B',
        submitTime: '2016-04-05 16:25:20',
        code: `#include<iostream>
#include<cstdio>
#include<cstring>
using namespace std;
int main(){
    cin>>a>>b;
    cout<<a+b<<endl;
}
        `
    })
})
router.get('/contests', (req, res)=> {
    console.log(req.query);
    const reqBody = {
        total: 10,
        list: Array.from({length: 30}, (obj, index)=> {
            return {
                contestId: '100' + index,
                title: '第九届浙江省大学生ACM程序设计竞赛',
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
        title: '第九届浙江省大学生ACM程序设计竞赛',
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
                submissionId: '100' + index,
                userId: 'vjudge' + index,
                problemOrder: String.fromCharCode('A'.charCodeAt(0) + index),
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

router.get('/users/', (req, res)=> {
    const users = ["rrtyui", "vjudge4", "vjudge2", "vjudge1", "vjudge5", "vjudge3", "mathlover", "huantwofat", "19891101", "qian99", "islands", "syiml", "a569329637", "bnmjtz", "last_one", "flag", "Heart_Blue", "Napoleon", "poursoul", "TaoSama"];
    const nicknames = ["Sithope", "马孟起", "张翼德", "关云长", "黄汉升", "赵子龙", "mathlover", "huantwofat", "19891101", "baka", "islands", "T^T", "gsq", "__M子__", "last_one", "flag", "Heart Blue", "Napoleon", "Luna", "陆文韬"];
    const signs = ["风华绝代", "", "", "", "", "", "欢迎来戳mathlover.info", "", "", "", "", "9", "", "", "", "", "死妹控@恋がさくころ桜どき", "", "", ""];
    const length = users.length;
    const reqBody = {
        total: 10,
        list: Array.from({length: 30}, (obj, index)=> {
            index = index % length;
            return {
                rank: index + 1,
                userId: users[index],
                nickname: nicknames[index],
                signature: signs[index],
                classname: 'Software Engineering(121)',
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
        classname:'Software Engineering (121)',
        signature: 'There is a will, there is a way',
        avatarUrl: 'http://acdream.info/img/avatar/xiexinxinlove/2.jpeg',
        solved: Array.from({length: 30}, (obj, i)=>1000 + i + '')
    })
})
module.exports = router;