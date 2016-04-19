/**
 * Created by kevin on 16-2-28.
 */
import React from 'react';
import {Link} from 'react-router';
import Paper from 'material-ui/lib/paper';

import Avatar from 'material-ui/lib/avatar';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';

import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';


const imgUrl = require('../images/material-bg.png');
import Mail from 'material-ui/lib/svg-icons/content/mail';
import ActionInfo from 'material-ui/lib/svg-icons/action/info';
import CommunicationChatBubble from 'material-ui/lib/svg-icons/communication/chat-bubble';

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
                        <Card>
                            <CardMedia
                                style={{height:'340px'}}
                                overlay={<CardTitle title="Welcome to Zhejiang Normal University ACM Online Judge System!"
                                subtitle={<div style={{letterSpacing:'1px'}}>
                                 <div>Please read <Link to="/faq">Frequently Asked Questions</Link> at first.</div>
                                <div>Downloads: <a href="#">C-Free5.0</a>,<a href="#"> VC6</a></div>
                                </div>} />}
                            >
                                <img style={{marginTop:'-130px'}} src={imgUrl}/>
                            </CardMedia>
                        </Card>

                        <div className="box1 row">
                            <div className="box2">
                                <List zDepth={1} subheader="Latest Contests">
                                    {list1}
                                </List>
                            </div>
                            <div className="box3">
                                <List zDepth={1} subheader="Latest Posts">
                                    {list2}
                                </List>
                            </div>
                        </div>
                    </div>
                    <div className="col-right">
                        <List zDepth={1} subheader="Top 10">
                            {list}
                        </List>
                    </div>
                </div>
            </div>
        )
    }
}
