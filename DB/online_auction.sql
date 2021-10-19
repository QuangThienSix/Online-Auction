-- phpMyAdmin SQL Dump
-- version 4.0.4
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Oct 19, 2021 at 04:38 PM
-- Server version: 5.6.12-log
-- PHP Version: 5.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `online_auction`
--
CREATE DATABASE IF NOT EXISTS `online_auction` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE `online_auction`;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `username` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `fullname` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `address` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `roles_id` int(11) NOT NULL,
  `islock` tinyint(1) NOT NULL,
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `rfToken` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `tokenMail` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`user_id`),
  KEY `user_role` (`roles_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=30 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`username`, `password`, `fullname`, `address`, `email`, `roles_id`, `islock`, `user_id`, `rfToken`, `tokenMail`) VALUES
('thien', '$2b$08$30.FqBOPlx6myOLhQBqH3.qe0EdJnOnsl1W.8N/0q2WZy0ic4Wn6C', '', '', '', 1, 1, 1, '$2b$08$k6UgjILTDCSD.jHNwPb9quCPJRUTuxczcp.JJRQ1f81WD4iJ8b2dq', ''),
('123', '$2b$08$H4QBu9xOHXy.ssfv3Z/IauHAYuLw4p5WbXj6Y2ElN8gcgE0UtupNC', 'Thiện Phạm Quang', '47/2 lê đức thọ, phường 17, quận gò vấp ,tp hồ chí minh', 'phamquangthien.it@gmail.com', 2, 0, 29, '$2b$08$fUqfK5ytTRtl0uPvtK55Je.YqCEzQLmuhme8A.PMj8c3G1E55OjKi', '6521');

-- --------------------------------------------------------

--
-- Table structure for table `user_roles`
--

CREATE TABLE IF NOT EXISTS `user_roles` (
  `user_role_id` int(11) NOT NULL AUTO_INCREMENT,
  `role_id` int(11) NOT NULL,
  `role_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`user_role_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=5 ;

--
-- Dumping data for table `user_roles`
--

INSERT INTO `user_roles` (`user_role_id`, `role_id`, `role_name`) VALUES
(1, 1, 'admin'),
(2, 2, 'Guest'),
(3, 3, 'Bidder'),
(4, 4, 'Seller');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
