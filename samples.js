/**
 * Created by kevin on 16-5-2.
 */
const db = {};
db.languages = [
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
]

db.problem = [{
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
}]
db.submission = {
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
}
db.avatarUrls = ["http://acdream.info/img/brand.jpg", "http://acdream.info/img/logo.png", "http://acdream.info/img/qrcode.jpg", "http://acdream.info/img/avatar/worfzyq/4.jpeg", "http://acdream.info/img/avatar/%3Ddefault%3D/4.jpeg", "http://acdream.info/img/avatar/KIDx/4.jpeg", "http://acdream.info/img/avatar/Dshawn/4.jpeg", "http://acdream.info/img/avatar/%3Ddefault%3D/4.jpeg", "http://acdream.info/img/avatar/gu_castle/4.jpeg", "http://acdream.info/img/avatar/%3Ddefault%3D/4.jpeg", "http://acdream.info/img/avatar/admin/4.jpeg", "http://acdream.info/img/avatar/KIDx/4.jpeg", "http://acdream.info/img/avatar/%3Ddefault%3D/4.jpeg", "http://acdream.info/img/avatar/%3Ddefault%3D/4.jpeg", "http://acdream.info/img/avatar/%3Ddefault%3D/4.jpeg", "http://acdream.info/img/avatar/admin/4.jpeg", "http://acdream.info/img/avatar/admin/4.jpeg", "http://acdream.info/img/avatar/%3Ddefault%3D/4.jpeg"]

db.topics = ["为什么这样子是错的",
    "使用GCC(GNU C)或VC++提交出现Runtime Error，请确保main的返回类型为int，main最后有return 0",
    "例子都对，为什么错",
    "由于集训需要，从即日起到2016年4月17日止，每个星期六和星期天本服务器将提供作为集训服务器，同学们将无法做题，敬请谅解。",
    "一直超时，杭电这题给的3000ms",
    "评测该题的核心代码如下",
    "1702用例是什么，只得了38分",
    "1703有哪些测试数据，感觉我的程序是对的",
    "x是不是求最小值？",
    "系统bug", "好郁闷",
    "为什么用除法不行呢？理论值和运行出来的那个值不一样，为什么呢？",
    "test",
    "题目没出完整",
    "定义不明确",
    "why wrong answer",
    "总是91分，答案确定没错啊",
    "总是这样",
    "为什么我写的1013是错的，检验好几遍！？",
    "求问",
    "求问",
    "为什么1075的数型只能用double，用float就通不过。",
    "为什么我写的1013是错的，检验好几遍！？",
    "1460怎么会超时？",
    "大家帮我看看 我用STL写的代码哪里有问题 总提交时是Wrong answer 不要代码",
    "主页的C free 5.0注册版 下载后用了有问题"];

db.userIds = ["rrtyui",
    "vjudge4",
    "vjudge2",
    "vjudge1",
    "vjudge5",
    "vjudge3",
    "mathlover",
    "huantwofat",
    "19891101",
    "qian99",
    "islands",
    "syiml",
    "a569329637",
    "bnmjtz",
    "last_one",
    "flag",
    "Heart_Blue",
    "Napoleon",
    "poursoul",
    "TaoSama"];

db.nicknames = ["Sithope", "马孟起", "张翼德", "关云长", "黄汉升", "赵子龙", "mathlover", "huantwofat", "19891101", "baka", "islands", "T^T", "gsq", "__M子__", "last_one", "flag", "Heart Blue", "Napoleon", "Luna", "陆文韬"];
db.signs = ["风华绝代", "", "", "", "", "", "欢迎来戳mathlover.info", "", "", "", "", "9", "", "", "", "", "死妹控@恋がさくころ桜どき", "", "", ""];
db.classnames = ['Software Engineering(121)']
db.cUserIds = ["学姐带我飞", "林盛盛 叶一凡 郑巧", "邱晟 卢金民 施力业", "陈颖", "喜哥被困多边形内O(∩_∩)O~！", "沈祺", "林成虹 林紫秀 李佳倩", "张骏 旭旭 陈鑫磊", "陈秉权董毅林乃杰", "maybe", "崔元泽 陈鹏鹏 彭昆霖", "丁光耀林琳吴倩", "张胜许敏杨星月", "管理员ญ๊"];
db.cAccepts = ["10", "10", "9", "8", "7", "6", "6", "5", "5", "5", "5", "4", "4", "2"];
db.cPenalties = ["18:10:38", "22:13:35", "10:54:17", "15:12:18", "11:45:32", "13:46:10", "17:08:21", "05:56:58", "07:34:59", "08:57:20", "10:26:35", "05:33:45", "09:08:18", "08:20:44"];
db.cProblemOrders = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L']
db.cDetails = [
    {
        A: {
            penalty: '01:05:04',
            attempts: 2
        },
        B: {
            penalty: '00:48:27',
            attempts: 0
        },
        C: {
            penalty: '03:35:37',
            attempts: 0
        },
        D: {
            penalty: '00:18:54',
            attempts: 0
        },
        E: {
            penalty: '04:37:59',
            attempts: 2
        },
        G: {
            penalty: '00:27:03',
            attempts: 0
        },
        H: {
            penalty: '00:54:30',
            attempts: 0
        },
        I: {
            penalty: '00:38:58',
            attempts: 3
        },
        J: {
            penalty: '01:16:19',
            attempts: 1
        },
        K: {
            penalty: '01:47:47',
            attempts: 0
        }
    }
]
db.cTitles = ["ZJNU-4.9", "zjnu training", "zjnu train", "团队模式(1)-运输船", "球球大作战 13进11（二）", "球球大作战 13进11（一）", "ZJNU 3-20", "ZJNU 3-19", "ZJNU 找朋友（4）", "ZJNU 找朋友（3）", "ZJNU 找朋友（2）", "ZJNU 找朋友（1）", "2015年ACM学分制班考试-1", "ACM学分制班2015年专题五 搜索", "ACM学分制班2015年专题四 动态规划", "ACM学分制班2015年专题三 图论", "ACM学分制班2015年专题二 高级数据结构", "ACM学分制班2015年专题一 STL", "学分制班期末考试", "图论基础", "ACM学分制班2", "学分制班期末考试", "ACM协会会员培训 综合练习", "ACM协会学员培训 第一讲 基本输入输出", "ACM协会学员培训 第四讲 递推与递归（yyf专场）", "ACM协会学员培训 第二讲 二分、分块和快速幂", "ACM协会学员培训 第三讲 简单数学", "2014 Multi-University Training Contest 10", "2014 Multi-University Training Contest 9", "2014 Multi-University Training Contest 8", "2014 Multi-University Training Contest 7", "2014 Multi-University Training Contest 6", "2014 Multi-University Training Contest 5", "2014 Multi-University Training Contest 4", "2014 Multi-University Training Contest 3", "Summer Train 2014 内网赛", "2014 Multi-University Training Contest 2", "2014 Multi-University Training Contest 1", "赛前热身", "Unknown Contest", "程序设计综合训练四", "程序设计综合训练三", "学分制班---期末考试", "学分制班——专题五 高级数据结构", "学分制班——专题六 数论", "学分制班——专题四 搜索", "ACM学分制班问题求解与程序设计期末考试", "实用算法设计与分析期末考试", "学分制班——专题三 动态规划", "ACM协会会员培训练习", "学分制班——专题二 图论", "第三届新生C语言程序设计竞赛——重现", "学分制班——专题一 STL基础", "学分制班期末考试", "2011级新生C语言程序设计竞赛热身赛"];
db.topicContent = [
    `<p><strong><span style={{fontSize: '18px'}}>一、Online Judge简介</span></strong></p>

                            <p>Online Judge系统（简称OJ）是一个在线的判题系统。用户可以在线提交程序多种程序（如C、C++、Pascal）源代码，系统对源代码进行编译和执行，并通过预先设计的测试数据来检验程序源代码的正确性。</p>

                            <p>一个用户提交的程序在Online Judge系统下执行时将受到比较严格的限制，包括运行时间限制，内存使用限制和安全限制等。用户程序执行的结果将被Online Judge系统捕捉并保存，然后再转交给一个裁判程序。该裁判程序或者比较用户程序的输出数据和标准输出样例的差别，或者检验用户程序的输出数据是否满足一定的逻辑条件。最后系统返回给用户一个状态：通过（Accepted,AC）、答案错误(Wrong Answer,WA)、超时(Time Limit Exceed,TLE)、超过输出限制（Output Limit Exceed,OLE)、超内存（Memory Limit Exceed,MLE）、运行时错误（Runtime Error,RE）、格式错误（Presentation Error,PE)、或是无法编译（Compile Error,CE），并返回程序使用的内存、运行时间等信息。</p>

                            <p>目前有不少在线测试平台，这些平台提供了很多很好的编程题，当然著名的acm中会有很多难题，如果你想挑战自己的智力极限，如果你对编程很有兴趣，那么就可以去这些平台注册，然后编程提交，跟其他编程高手一较高下。在线测试平台往往提供多种语言的支持，对于一道题，你可以用自己喜欢的语言来编写，但是要想排名更前，就得考虑语言的效率问题，所以你会发现里面的高手多用c或c++。</p>

                            <hr/>
                            <p><strong><span style={{fontSize: '18px'}}>二、算法和OJ网站</span></strong></p>

                            <p><span style={{color: 'rgb(0, 0, 128)'}}>※ The ACM-ICPC International Collegiate Programming Contest</span>（<a href="http://icpc.baylor.edu/welcome.icpc">ACM/ICPC</a>）<br/>
                                &nbsp;&nbsp;&nbsp; ACM是一个给全世界高等院校学生参加的算法程序设计大赛，比赛目的在于考验选手临场逻辑思维和程序编写能力。ACM首先在世界各地举办初赛，然后从各个赛区选拔表现优秀的队伍，角逐世界总决赛。</p>

                            <p><span style={{color: 'rgb(0, 0, 128)'}}>⑴ 西班牙Valladolid大学Online Judge</span>（<a href="http://uva.onlinejudge.org/">UVA</a>）<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp; 世界上最大最有名的OJ，题目巨多且杂（2500+），数据也很刁钻，全世界的顶尖高手都在上面。据说如果你能在UVA上AC一千道题以上，就尽管向IBM、微软什么的发简历吧，绝对不会让你失望的。</p>

                            <p><span style={{color: 'rgb(0, 0, 128)'}}>⑵ 俄罗斯Ural立大学Online Judge</span>（<a href="http://acm.timus.ru/">URAL</a>）<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp; 也是一个老牌的OJ，题目不多，但题题经典。</p>

                            <p><span style={{color: 'rgb(0, 0, 128)'}}>⑶ 俄罗斯萨拉托夫国立大学Saratov State University</span>&nbsp;（<a href="http://acm.sgu.ru/">SGU</a>）<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp; SGU是俄罗斯萨拉托夫国立大学用于培养ACM选手的训练网站。这个网站的建成时期较晚，但随着比赛的举行以及新题目的加入，这个题库的题目也日渐丰富。这个题库的一大特点就是OJ功能强大，它不仅使你避开了多数据处理的繁琐操作，还能告诉你程序错在了第几个数据。这一点虽然与ACM的Judge有些出入，但是却方便了调试程序。与UVA相比，这里的题目在时间空间上要求都比较严格，而且更多的考察选手对算法的掌握情况，所以特别推荐冲击NOI的选手也来做一做。</p>

                            <p><span style={{color: 'rgb(0, 0, 128)'}}>⑷ 全美计算机奥林匹克竞赛Online Judge</span>（<a href="http://ace.delos.com/usacogate">USACO</a>）<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp; USACO的特点是做完一关才能继续往下做,与前面的OJ不同的是测试数据可以看到，并且做对后可以看标准解答，所以如果大家刚开始的时候在上面那些OJ上总WA却找不到原因的话，可以试着来这里做做，看看测试数据一般是从什么地方阴你的。</p>

                            <p><span style={{color: 'rgb(0, 0, 128)'}}>⑸ 浙江大学Online Judge</span>（<a href="http://acm.zju.edu.cn/">ZOJ</a>）<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp; 国内最早也是最有名气的OJ，有很多高手在上面做题。特点是数据比较刁钻，经常会有你想不到的边界数据，很能考验思维的全面性。</p>

                            <p><span style={{color: 'rgb(0, 0, 128)'}}>⑹ 北京大学Online Judge</span>（<a href="http://poj.org/">POJ</a>）<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp; 建立较晚但题目加得很快，现在题数和ZOJ不相上下，特点是举行在线比赛比较多，数据比ZOJ上的要弱，有时候同样的题同样的代码，在ZOJ上WA，在POJ上就能AC。</p>

                            <p><span style={{color: 'rgb(0, 0, 128)'}}>⑺ 同济大学Online Judge</span>（<a href="http://acm.tongji.edu.cn/">TOJ</a>）<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp; 其上OJ题数上不能与ZOJ和POJ相比，推荐这个OJ的原因是因为它是中文的，这对很多对英文不太感冒的兄弟是个好消息吧。它也因此吸引了众多高中的ddmm，毕竟他们的英文还差一些，呵呵。。上面的题目也更偏向于高中的信息学竞赛一些。</p>

                            <p><span style={{color: 'rgb(0, 0, 128)'}}>⑻ 杭电科大Online Judge</span>（<a href="http://acm.hdu.edu.cn/">HDU</a>）<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp; 里面不乏好题，培养出的很多牛人，毕业后就进了阿里。</p>

                            <p><span style={{color: 'rgb(0, 0, 128)'}}>⑼</span>&nbsp;<a href="http://leetcode.com/">LeetCode</a><br/>
                                &nbsp;&nbsp;&nbsp;&nbsp; 里面有很编程多面试的题目，可以在线编译运行。难度比较高。如果自己能都做出来，对面大公司很有帮助。</p>

                            <p><span style={{color: 'rgb(0, 0, 128)'}}>⑽</span>&nbsp;<a href="http://www.topcoder.com/">TopCoder</a><br/>
                                &nbsp;&nbsp;&nbsp;&nbsp; 该网站功能众多，其中一项是提供程序设计比赛。</p>

                            <p><span style={{color: 'rgb(0, 0, 128)'}}>⑾</span>&nbsp;<a href="http://projecteuler.net/">ProjectEuler</a><br/>
                                &nbsp;&nbsp;&nbsp;&nbsp; 该网站专门提供能用程序计算出答案的数学问题，每个问题都会有对应的解答。</p>

                            <p><span style={{color: 'rgb(0, 0, 128)'}}>⑿</span>&nbsp;<a href="http://www.acmsolver.org/">ACMSolver</a><br/>
                                &nbsp;&nbsp;&nbsp;&nbsp; 这个网站专门收集程序设计比赛及OJ的最新消息，可以说是面面俱到。</p>

                            <p><span style={{color: 'rgb(0, 0, 128)'}}>⒀</span>&nbsp;<a href="http://codeforces.com/">CODEFORCES</a><br/>
                                &nbsp;&nbsp;&nbsp;&nbsp; 喜欢这个OJ的原因是因为可以看到别人的代码，非常棒。</p>

                            <p><span style={{color: 'rgb(0, 0, 128)'}}>⒁</span>&nbsp;<a href="http://acm.hust.edu.cn/vjudge/toIndex.action">VirtualJudge</a><br/>
                                &nbsp;&nbsp;&nbsp;&nbsp; 这里面列出了一些常用的OJ，简直是一个大杂烩。</p>

                            <p><span style={{color: 'rgb(0, 0, 128)'}}>⒂</span>&nbsp;<a href="http://www.csie.ntnu.edu.tw/~u91029/">演算法笔记</a><br/>
                                &nbsp;&nbsp;&nbsp;&nbsp; 这个网站是我比较喜欢的网站，美中不足的是全是繁体字。</p>

                            <p><span style={{color: 'rgb(0, 0, 128)'}}>⒃</span>&nbsp;<a href="https://www.hackerrank.com/interviewstreet/">InterviewStreet</a><br/>
                                &nbsp;&nbsp;&nbsp;&nbsp; Interview Street是帮助知名科技企业招聘程序员的在线编程挑战平台。</p>

                            <p><span style={{color: 'rgb(0, 0, 128)'}}>⒄</span>&nbsp;<a href="http://ac.jobdu.com/">九度OJ</a><br/>
                                &nbsp;&nbsp;&nbsp;&nbsp; 最近特别火，不解释。</p>

                            <p><span style={{color: 'rgb(0, 0, 128)'}}>⒅</span>&nbsp;<a href="http://www.acmerblog.com/">ACM之家</a><br/>
                                &nbsp;&nbsp;&nbsp;&nbsp; 很棒，里面有很多很棒的例子，值得学习。</p>`, `题目也很赞!!!`
]
db.get = (name, index)=> {
    console.log(index);
    if (typeof index === 'undefined')index = -1;
    const test = index - 0;
    if (test != test)index = Math.floor(30 * Math.random());
    if (name in db) {
        const ret = db[name];
        return index == -1 ? ret : ret[index % ret.length];
    }
}

module.exports = db;