/**
 * Created by kevin on 16-2-28.
 */
import React from 'react';
import {Link} from 'react-router';

import Paper from 'material-ui/Paper';

import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import {Card ,CardMedia, CardTitle} from 'material-ui/Card';

import Mail from 'material-ui/svg-icons/content/mail';
import ActionInfo from 'material-ui/svg-icons/action/info';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

const imgUrl = require('../images/material-bg.png');

export default class extends React.Component {
    render() {
        const imgs = ["http://acdream.info/img/avatar/TaoSama/4.png",
            "http://acdream.info/img/avatar/TaoSama/4.png",
            "http://acdream.info/img/avatar/%3Ddefault%3D/4.jpeg",
            "http://acdream.info/img/avatar/admin/4.jpeg",
            "http://acdream.info/img/avatar/mathlover/4.jpeg",
            "http://acdream.info/img/avatar/KIDx/4.jpeg",
            "http://acdream.info/img/avatar/qscqesze/4.jpeg",
            "http://acdream.info/img/avatar/KIDx/4.jpeg",
            "http://acdream.info/img/avatar/%3Ddefault%3D/4.jpeg",
            "http://acdream.info/img/avatar/admin/4.jpeg",
            "http://acdream.info/img/avatar/KIDx/4.jpeg"];
        const user = ["kuangbin", "alpq654321", "19891101", "dut200901102", "bit20082842", "cxlove", "BSBandme", "yamiedie2", "endless", "sea5"];

        const contests = [
            '第10届浙江师范大学程序设计竞赛',
            '校庆大作战',
            '2015年ACM学分制班考试',
            '图论基础',
            "ACM协会会员培训 综合联系"
        ];

        const posts = [
            "第10届浙江师范大学大学生程序设计竞赛须知",
            "经典算法和OJ网站",
            "求助 1000 A+B Problem!",
            "原创题目征集啦～～～",
            "1100 这题DP有何错误？"
        ]
        let list = [];
        for (let i = 0; i < 10; i++) {
            list.push(<ListItem
                key={i}
                primaryText={user[i]}
                secondaryText={'Solved : '+(Math.random()*200).toFixed(0)}
                leftAvatar={<Avatar src={imgs[i]}/>}
                rightIcon={<Mail />}
            />)
        }
        let list1 = [];
        for (let i = 0; i < 5; i++) {
            list1.push(<ListItem
                key={i}
                primaryText={contests[i]}
                secondaryText={'Start Time : 24 May 2016'}
                rightIcon={<ActionInfo />}
            />)
        }

        let list2 = [];
        for (let i = 0; i < 5; i++) {
            list2.push(<ListItem
                key={i}
                primaryText={posts[i]}
                secondaryText={<div>Reply : {(Math.random()*20).toFixed(0)}</div>}
                rightIcon={<CommunicationChatBubble />}
            />)
        }
        return (
            <div id="page-home">
                <div className="row">
                    <div className="col-main">
                        <Card style={{overflow:'hidden'}}>
                            <CardMedia
                                style={{height:'340px'}}
                                overlay={<CardTitle title="Welcome to Zhejiang Normal University ACM Online Judge System!"
                                subtitle={<div style={{letterSpacing:'1px'}}>
                                 <div>Please read <Link to="/faq">Frequently Asked Questions</Link> at first.</div>
                                <div>Downloads: <a href="#">C-Free5.0</a>,<a href="#"> VC6</a></div>
                                </div>} />}
                            >
                                <img src={imgUrl}/>
                            </CardMedia>
                        </Card>

                        <div className="box1 row">
                            <div className="box2">
                                <Paper>
                                    <List>
                                        <Subheader inset={false}>Latest Contests</Subheader>
                                        {list1}
                                    </List>
                                </Paper>
                            </div>
                            <div className="box3">
                                <Paper>
                                    <List>
                                        <Subheader inset={false}>Latest Posts</Subheader>
                                        {list2}
                                    </List>
                                </Paper>
                            </div>
                        </div>
                    </div>
                    <div className="col-right">
                        <Paper>
                            <List>
                                <Subheader inset={false}>Top 10</Subheader>
                                {list}
                            </List>
                        </Paper>
                    </div>
                </div>
            </div>
        )
    }
}
