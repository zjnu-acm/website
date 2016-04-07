/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : clanguage

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2016-02-18 19:55:48
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for attend
-- ----------------------------
DROP TABLE IF EXISTS `attend`;
CREATE TABLE `attend` (
  `user_id` varchar(20) NOT NULL,
  `contest_id` bigint(20) NOT NULL,
  `total_score` int(11) NOT NULL DEFAULT '0',
  `penalty` int(11) NOT NULL DEFAULT '0',
  `A_time` int(11) NOT NULL DEFAULT '0',
  `A_Score` int(11) NOT NULL DEFAULT '0',
  `B_time` int(11) NOT NULL DEFAULT '0',
  `B_Score` int(11) NOT NULL DEFAULT '0',
  `C_time` int(11) NOT NULL DEFAULT '0',
  `C_Score` int(11) NOT NULL DEFAULT '0',
  `D_time` int(11) NOT NULL DEFAULT '0',
  `D_Score` int(11) NOT NULL DEFAULT '0',
  `E_time` int(11) NOT NULL DEFAULT '0',
  `E_Score` int(11) NOT NULL DEFAULT '0',
  `F_time` int(11) NOT NULL DEFAULT '0',
  `F_Score` int(11) NOT NULL DEFAULT '0',
  `G_time` int(11) NOT NULL DEFAULT '0',
  `G_Score` int(11) NOT NULL DEFAULT '0',
  `H_time` int(11) NOT NULL DEFAULT '0',
  `H_Score` int(11) NOT NULL DEFAULT '0',
  `I_time` int(11) NOT NULL DEFAULT '0',
  `I_Score` int(11) NOT NULL DEFAULT '0',
  `J_time` int(11) NOT NULL DEFAULT '0',
  `J_Score` int(11) NOT NULL DEFAULT '0',
  `K_time` int(11) NOT NULL DEFAULT '0',
  `K_Score` int(11) NOT NULL DEFAULT '0',
  `L_time` int(11) NOT NULL DEFAULT '0',
  `L_Score` int(11) NOT NULL DEFAULT '0',
  `M_time` int(11) NOT NULL DEFAULT '0',
  `M_Score` int(11) NOT NULL DEFAULT '0',
  `N_time` int(11) NOT NULL DEFAULT '0',
  `N_Score` int(11) NOT NULL DEFAULT '0',
  `O_time` int(11) NOT NULL DEFAULT '0',
  `O_Score` int(11) NOT NULL DEFAULT '0',
  `nick` char(100) NOT NULL DEFAULT '',
  PRIMARY KEY (`user_id`,`contest_id`),
  KEY `FK_attend_contest` (`contest_id`) USING BTREE,
  CONSTRAINT `attend_ibfk_1` FOREIGN KEY (`contest_id`) REFERENCES `contest` (`contest_id`),
  CONSTRAINT `attend_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for compileinfo
-- ----------------------------
DROP TABLE IF EXISTS `compileinfo`;
CREATE TABLE `compileinfo` (
  `solution_id` bigint(20) NOT NULL,
  `error` text,
  PRIMARY KEY (`solution_id`),
  CONSTRAINT `compileinfo_ibfk_1` FOREIGN KEY (`solution_id`) REFERENCES `solution` (`solution_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for contest
-- ----------------------------
DROP TABLE IF EXISTS `contest`;
CREATE TABLE `contest` (
  `contest_id` bigint(20) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `start_time` datetime NOT NULL,
  `end_time` datetime NOT NULL,
  `defunct` enum('N','Y') NOT NULL DEFAULT 'N' COMMENT 'defunct 表示该比赛有未被删除，Y表示已经被删除',
  `description` text,
  `private` int(11) DEFAULT NULL,
  PRIMARY KEY (`contest_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for contest_problem
-- ----------------------------
DROP TABLE IF EXISTS `contest_problem`;
CREATE TABLE `contest_problem` (
  `problem_id` bigint(20) NOT NULL,
  `contest_id` bigint(20) NOT NULL,
  `title` char(200) NOT NULL,
  `num` int(11) NOT NULL,
  PRIMARY KEY (`problem_id`,`contest_id`),
  KEY `FK_contest_problem_contest` (`contest_id`,`problem_id`) USING BTREE,
  CONSTRAINT `contest_problem_ibfk_1` FOREIGN KEY (`contest_id`) REFERENCES `contest` (`contest_id`),
  CONSTRAINT `contest_problem_ibfk_2` FOREIGN KEY (`problem_id`) REFERENCES `problem` (`problem_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for loginlog
-- ----------------------------
DROP TABLE IF EXISTS `loginlog`;
CREATE TABLE `loginlog` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` varchar(255) DEFAULT NULL,
  `password` varchar(40) DEFAULT NULL,
  `ip` varchar(100) DEFAULT NULL,
  `time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=168273 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for mail
-- ----------------------------
DROP TABLE IF EXISTS `mail`;
CREATE TABLE `mail` (
  `mail_id` bigint(20) NOT NULL,
  `to_user` varchar(20) NOT NULL DEFAULT '',
  `from_user` varchar(20) NOT NULL DEFAULT '',
  `title` varchar(200) NOT NULL DEFAULT '',
  `content` mediumtext,
  `new_mail` tinyint(1) NOT NULL DEFAULT '1',
  `reply` tinyint(4) DEFAULT '0',
  `in_date` datetime DEFAULT NULL,
  `defunct` enum('N','Y') NOT NULL DEFAULT 'N',
  PRIMARY KEY (`mail_id`),
  KEY `uid` (`to_user`) USING BTREE,
  KEY `FK_mail_users_2` (`from_user`) USING BTREE,
  CONSTRAINT `mail_ibfk_1` FOREIGN KEY (`to_user`) REFERENCES `users` (`user_id`),
  CONSTRAINT `mail_ibfk_2` FOREIGN KEY (`from_user`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for message
-- ----------------------------
DROP TABLE IF EXISTS `message`;
CREATE TABLE `message` (
  `message_id` bigint(20) NOT NULL,
  `problem_id` bigint(20) DEFAULT NULL,
  `parent_id` bigint(20) NOT NULL DEFAULT '0',
  `thread_id` bigint(20) NOT NULL DEFAULT '0',
  `depth` int(11) NOT NULL DEFAULT '0',
  `orderNum` int(11) NOT NULL DEFAULT '0',
  `user_id` varchar(20) NOT NULL DEFAULT '',
  `title` varchar(200) NOT NULL DEFAULT '',
  `content` longtext,
  `in_date` datetime DEFAULT NULL,
  `defunct` enum('N','Y') NOT NULL DEFAULT 'N',
  PRIMARY KEY (`message_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for news
-- ----------------------------
DROP TABLE IF EXISTS `news`;
CREATE TABLE `news` (
  `news_id` bigint(20) NOT NULL,
  `user_id` varchar(20) NOT NULL,
  `title` varchar(200) NOT NULL DEFAULT '',
  `content` text NOT NULL,
  `time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `importance` tinyint(4) NOT NULL DEFAULT '0',
  `defunct` enum('N','Y') NOT NULL DEFAULT 'N',
  PRIMARY KEY (`news_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for privilege
-- ----------------------------
DROP TABLE IF EXISTS `privilege`;
CREATE TABLE `privilege` (
  `user_id` varchar(20) NOT NULL,
  `rightstr` enum('administrator','source_browser','news_publisher') NOT NULL DEFAULT 'news_publisher',
  `defunct` enum('N','Y') NOT NULL DEFAULT 'N',
  PRIMARY KEY (`user_id`,`rightstr`),
  CONSTRAINT `privilege_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for problem
-- ----------------------------
DROP TABLE IF EXISTS `problem`;
CREATE TABLE `problem` (
  `problem_id` bigint(20) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` longtext,
  `input` longtext,
  `output` longtext,
  `sample_input` longtext,
  `sample_output` longtext,
  `hint` longtext,
  `source` varchar(100) DEFAULT NULL,
  `sample_Program` varchar(255) DEFAULT NULL,
  `in_date` datetime DEFAULT NULL,
  `time_limit` int(11) NOT NULL DEFAULT '0',
  `memory_limit` int(11) NOT NULL DEFAULT '0',
  `defunct` enum('N','Y') NOT NULL DEFAULT 'N',
  `contest_id` int(11) DEFAULT NULL,
  `accepted` int(11) DEFAULT '0',
  `submit` int(11) DEFAULT '0',
  `ratio` tinyint(4) NOT NULL DEFAULT '0',
  `error` int(11) DEFAULT '0',
  `difficulty` tinyint(4) NOT NULL DEFAULT '0',
  `submit_user` int(11) DEFAULT '0',
  `solved` int(11) DEFAULT '0',
  `case_time_limit` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`problem_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for solution
-- ----------------------------
DROP TABLE IF EXISTS `solution`;
CREATE TABLE `solution` (
  `solution_id` bigint(20) NOT NULL,
  `problem_id` bigint(20) NOT NULL,
  `user_id` varchar(20) NOT NULL,
  `time` int(11) NOT NULL DEFAULT '0',
  `memory` int(11) NOT NULL DEFAULT '0',
  `in_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `result` smallint(6) NOT NULL DEFAULT '0',
  `language` tinyint(4) NOT NULL DEFAULT '0',
  `ip` varchar(20) NOT NULL DEFAULT '',
  `contest_id` bigint(20) DEFAULT NULL,
  `valid` tinyint(4) NOT NULL DEFAULT '1',
  `num` tinyint(4) NOT NULL DEFAULT '-1',
  `code_length` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`solution_id`),
  KEY `contest_user_problem` (`contest_id`,`user_id`,`problem_id`) USING BTREE,
  KEY `uid` (`user_id`) USING BTREE,
  KEY `pid` (`problem_id`) USING BTREE,
  KEY `res` (`result`) USING BTREE,
  CONSTRAINT `solution_ibfk_1` FOREIGN KEY (`contest_id`) REFERENCES `contest` (`contest_id`),
  CONSTRAINT `solution_ibfk_2` FOREIGN KEY (`problem_id`) REFERENCES `problem` (`problem_id`),
  CONSTRAINT `solution_ibfk_3` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for solution_details
-- ----------------------------
DROP TABLE IF EXISTS `solution_details`;
CREATE TABLE `solution_details` (
  `solution_id` bigint(20) NOT NULL,
  `details` text NOT NULL,
  PRIMARY KEY (`solution_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for source_code
-- ----------------------------
DROP TABLE IF EXISTS `source_code`;
CREATE TABLE `source_code` (
  `solution_id` bigint(20) NOT NULL,
  `source` blob NOT NULL,
  PRIMARY KEY (`solution_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `user_id` varchar(20) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `submit` int(11) DEFAULT '0',
  `solved` int(11) DEFAULT '0',
  `defunct` enum('N','Y') NOT NULL DEFAULT 'N',
  `ip` varchar(20) NOT NULL DEFAULT '',
  `accesstime` datetime DEFAULT NULL,
  `volume` int(11) NOT NULL DEFAULT '1',
  `language` int(11) NOT NULL DEFAULT '1',
  `password` varchar(40) DEFAULT NULL,
  `reg_time` datetime DEFAULT NULL,
  `nick` varchar(255) NOT NULL DEFAULT '',
  `school` varchar(255) NOT NULL DEFAULT '',
  `style` tinyint(4) NOT NULL DEFAULT '18',
  `vcode` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
