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
    console.log('problems', req.query);
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

router.get('/problems/:problemId', (req, res)=> {
    console.log('problemId', req.params.problemId);
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

router.post('/problems/:problemId/submit', (req, res)=> {
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
                language: 'GNU C++11',
                length: '800 B',
                submitTime: '2016-04-05 16:25:20'
            }
        })
    }
    res.send(reqBody);
})

router.get('/submissions/:submissionId', (req, res)=> {
    res.send({
        userId: 'vjudge1',
        problemId: Math.floor(1000 * (Math.random()) + 1000),
        verdictId: Math.floor(10 * (Math.random())),
        time: '600 MS',
        memory: '9492 KB',
        language: 'GNU C++11',
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
                startTime: '2016-04-05 16:25:20',
                duration: '5:00:00',
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
module.exports = router;