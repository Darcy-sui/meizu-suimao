-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2019-06-03 13:00:25
-- 服务器版本： 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `1903`
--

-- --------------------------------------------------------

--
-- 表的结构 `product`
--

CREATE TABLE `product` (
  `id` int(30) NOT NULL COMMENT '商品ID',
  `title` varchar(50) NOT NULL COMMENT '商品标题',
  `price` varchar(50) NOT NULL COMMENT '商品价格',
  `num` varchar(50) NOT NULL COMMENT '商品库存',
  `pic` varchar(255) NOT NULL COMMENT '商品图片',
  `details` varchar(255) NOT NULL COMMENT '商品详情'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `product`
--

INSERT INTO `product` (`id`, `title`, `price`, `num`, `pic`, `details`) VALUES
(6, '魅族 X8', '2298.00', '20', '\n[{\n"title":"note8",\n"src":"https://openfile.meizu.com/group1/M00/07/2D/Cgbj0FzvRKyAcTmAAAiLh3fsE44680.png"\n}]', '骁龙845 屏幕下指纹'),
(13, '魅族 16xs', '2298.00', '19', '[{\n"title":"note8",\n"src":"https://openfile.meizu.com/group1/M00/07/3B/Cgbj0VzaXQqAMN2pAAa47vx50YU413.png"\n}]\n', '魅族 16XS 势不可挡'),
(2, '魅族 V8 高配版', '898.00', '20', '[{\n"title":"note8",\n"src":"https://openfile.meizu.com/group1/M00/06/D4/Cgbj0VvQPnuAAwPPAAMv8zzt2DE910.png"\n}]', '限时领券更优惠 | 高清双摄 指纹+人脸双解锁\r\n\r\n'),
(5, '魅族 16th', '2298.00', '20', '[{\r\n"title":"16th",\r\n"src":"https://openfile.meizu.com/group1/M00/05/F1/Cgbj0VtqgnWADjmlAAipoSE4bZM493.png680x680.jpg"\r\n}]', '吃鸡不卡 拍她更美 | 骁龙675 后置4800万'),
(4, '魅族 15', '2298.00', '19', '[{\r\n"title":"15",\r\n"src":"https://openfile.meizu.com/group1/M00/04/0B/Cgbj0Frcbl-AW590AA3GJO-oXOo441.png680x680.jpg"\r\n}]', '骁龙660 2000万暗光双摄'),
(7, '魅族 X8', '2298.00', '20', '[{\r\n"title":"x8",\r\n"src":"https://openfile.meizu.com/group1/M00/06/B7/Cgbj0VusSJ6AH_bMAAimBuNV0-4121.png680x680.jpg"\r\n\r\n\r\n\r\n}]', '骁龙710 人脸+指纹双解锁'),
(8, '魅族 16 X', '1790.00', '20', '[{\r\n"title":"x8",\r\n"src":"https://openfile.meizu.com/group1/M00/06/B7/Cgbj0VusSJ6AH_bMAAimBuNV0-4121.png680x680.jpg"\r\n\r\n\r\n\r\n}]', '骁龙710 屏下指纹'),
(14, '魅族 16s', '1790.00', '19', '[{"src":"//openfile.meizu.com/group1/M00/07/14/Cgbj0Fy9cyiAapmYAAPdKnA-Nq4341.png680x680.jpg"}]', '骁龙710 人脸+指纹双解锁'),
(11, '魅族 Note8', '999.00', '29', '[{\r\n"title":"魅族 Note8",\r\n"src":"https://openfile.meizu.com/group1/M00/06/D3/Cgbj0VvQPm-AU7iSAAN3TL0zCwc952.png680x680.jpg"\r\n}]', '限量领券更优惠 | 骁龙632 人脸指纹双解锁'),
(12, '魅族 Note8', '1790.00', '20', '[{\r\n"title":"魅族 Note8",\r\n"src":"https://openfile.meizu.com/group1/M00/06/C6/Cgbj0FvS5yWAZkC3AAQxqhurHi8122.png680x680.jpg"\r\n}]', '限量领券更优惠 | 骁龙632 人脸指纹双解锁');

-- --------------------------------------------------------

--
-- 表的结构 `usersname`
--

CREATE TABLE `usersname` (
  `id` int(30) NOT NULL COMMENT '用户id',
  `usersname` varchar(50) NOT NULL COMMENT '用户姓名',
  `password` varchar(50) NOT NULL COMMENT '用户密码'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `usersname`
--

INSERT INTO `usersname` (`id`, `usersname`, `password`) VALUES
(5, '张三', '12345a'),
(7, '李四', '12345a'),
(9, '赵六', '12345a'),
(8, '王五', '12345a'),
(10, 'zhangsan2', '1234999');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `usersname`
--
ALTER TABLE `usersname`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `product`
--
ALTER TABLE `product`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT COMMENT '商品ID', AUTO_INCREMENT=15;
--
-- 使用表AUTO_INCREMENT `usersname`
--
ALTER TABLE `usersname`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT COMMENT '用户id', AUTO_INCREMENT=11;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
