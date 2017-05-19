/*
Navicat MySQL Data Transfer

Source Server         : usb server
Source Server Version : 50613
Source Host           : localhost:3307
Source Database       : cnpm-hutech

Target Server Type    : MYSQL
Target Server Version : 50613
File Encoding         : 65001

Date: 2017-05-19 11:00:32
*/

SET FOREIGN_KEY_CHECKS=0;

drop table if exists COMMENT;

drop table if exists POST;

drop table if exists CATEGORY;

drop table if exists USER;
-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `CATID` bigint(20) NOT NULL AUTO_INCREMENT,
  `CATNAME` varchar(255) DEFAULT NULL,
  `CATDESCRIPTION` text,
  PRIMARY KEY (`CATID`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES ('1', 'CD1-CNPM', null);
INSERT INTO `category` VALUES ('2', 'Lập trình di động', null);
INSERT INTO `category` VALUES ('3', 'Kĩ thuật lập trình', null);
INSERT INTO `category` VALUES ('4', 'Lập trình C', null);
INSERT INTO `category` VALUES ('5', 'Cấu trúc dữ liệu và giải thuật', null);
INSERT INTO `category` VALUES ('6', 'Công nghệ phần mềm', null);
INSERT INTO `category` VALUES ('7', 'Thương mại điện tử', null);

-- ----------------------------
-- Table structure for comment
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment` (
  `CID` bigint(20) NOT NULL AUTO_INCREMENT,
  `PID` bigint(20) DEFAULT NULL,
  `UID` int(11) DEFAULT NULL,
  `CDATE` datetime DEFAULT NULL,
  `CCOMMENT` text,
  PRIMARY KEY (`CID`),
  KEY `FK_REFERENCE_4` (`PID`),
  KEY `FK_REFERENCE_7` (`UID`),
  CONSTRAINT `FK_REFERENCE_4` FOREIGN KEY (`PID`) REFERENCES `post` (`PID`),
  CONSTRAINT `FK_REFERENCE_7` FOREIGN KEY (`UID`) REFERENCES `user` (`UID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of comment
-- ----------------------------

-- ----------------------------
-- Table structure for post
-- ----------------------------
DROP TABLE IF EXISTS `post`;
CREATE TABLE `post` (
  `PID` bigint(20) NOT NULL AUTO_INCREMENT,
  `UID` int(11) DEFAULT NULL,
  `CATID` bigint(20) DEFAULT NULL,
  `PTITLE` text DEFAULT NULL,
  `PDESCRIPTION` text,
  `PDATE` datetime DEFAULT NULL,
  `PASSCODE` text DEFAULT NULL,
  `PCONTENT` longtext,
  `PMETADATA` text,
  PRIMARY KEY (`PID`),
  KEY `FK_REFERENCE_1` (`UID`),
  KEY `FK_REFERENCE_5` (`CATID`),
  CONSTRAINT `FK_REFERENCE_1` FOREIGN KEY (`UID`) REFERENCES `user` (`UID`),
  CONSTRAINT `FK_REFERENCE_5` FOREIGN KEY (`CATID`) REFERENCES `category` (`CATID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of post
-- ----------------------------

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `UID` int(11) NOT NULL AUTO_INCREMENT,
  `UNAME` varchar(255) DEFAULT NULL,
  `UPWD` text,
  `UMAIL` varchar(255) DEFAULT NULL,
  `UMETADATA` text,
  PRIMARY KEY (`UID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'quantri', '1234', 'team@nready.net', null);
