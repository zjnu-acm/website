/**
 * Created by kevin on 16-4-19.
 */
import React from 'react';
import Paper from 'material-ui/lib/paper';
import Avatar from 'material-ui/lib/avatar';
export default class extends React.Component {
    render() {
        return (
            <div id="page-discuss">
                <Paper className="post">
                    <div className="side">
                        <div className="username">xiexinxinlove</div>
                        <Avatar size={100} className="avatar"
                                src="http://acdream.info/img/avatar/xiexinxinlove/2.jpeg"/>
                    </div>
                    <div className="main">
                        <div className="head">
                            <span className="title">经典算法和OJ网站</span>
                            <small className="text-muted">发表于2016-04-27 17:32</small>
                        </div>
                        <div className="body">

                            <p><strong><span style={{fontSize: '18px'}}>一、Online Judge简介</span></strong></p>

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
                                        &nbsp;&nbsp;&nbsp;&nbsp; 很棒，里面有很多很棒的例子，值得学习。</p>
                        </div>
                    </div>
                </Paper>
                <Paper className="post">
                    <div className="side">
                        <div className="username">xiexinxinlove</div>
                        <Avatar size={100} className="avatar"
                                src="http://acdream.info/img/avatar/Aiyuyan/2.jpeg"/>
                    </div>
                    <div className="main">
                        <div className="head">
                            <span className="reply"></span>
                            <small className="text-muted">发表于2016-04-27 17:32</small>
                        </div>
                        <div className="body">
                            题目也很赞!!!
                        </div>
                    </div>
                </Paper>
            </div>
        )
    }
}