-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Feb 27, 2020 at 01:36 AM
-- Server version: 10.4.10-MariaDB
-- PHP Version: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_pawp`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_events`
--

DROP TABLE IF EXISTS `tbl_events`;
CREATE TABLE IF NOT EXISTS `tbl_events` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8_bin NOT NULL,
  `date` date NOT NULL,
  `description` text COLLATE utf8_bin NOT NULL,
  `eventbrite` varchar(500) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_get_help`
--

DROP TABLE IF EXISTS `tbl_get_help`;
CREATE TABLE IF NOT EXISTS `tbl_get_help` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8_bin NOT NULL,
  `img_url` varchar(100) COLLATE utf8_bin NOT NULL,
  `url` varchar(500) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_give`
--

DROP TABLE IF EXISTS `tbl_give`;
CREATE TABLE IF NOT EXISTS `tbl_give` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8_bin NOT NULL,
  `img_url` varchar(200) COLLATE utf8_bin NOT NULL,
  `url` varchar(200) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_icons`
--

DROP TABLE IF EXISTS `tbl_icons`;
CREATE TABLE IF NOT EXISTS `tbl_icons` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `img_url` varchar(100) COLLATE utf8_bin NOT NULL,
  `alt` varchar(200) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `tbl_icons`
--

INSERT INTO `tbl_icons` (`id`, `img_url`, `alt`) VALUES
(1, 'fb.svg', 'Facebook'),
(2, 'tw.svg', 'Twitter'),
(3, 'ig.svg', 'Instagram'),
(4, 'tt.svg', 'Tik Tok');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_mailing_list`
--

DROP TABLE IF EXISTS `tbl_mailing_list`;
CREATE TABLE IF NOT EXISTS `tbl_mailing_list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8_bin NOT NULL,
  `email` varchar(100) COLLATE utf8_bin NOT NULL,
  `title` varchar(5) COLLATE utf8_bin NOT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_resources`
--

DROP TABLE IF EXISTS `tbl_resources`;
CREATE TABLE IF NOT EXISTS `tbl_resources` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8_bin NOT NULL,
  `description` text COLLATE utf8_bin NOT NULL,
  `url` varchar(500) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_sharables`
--

DROP TABLE IF EXISTS `tbl_sharables`;
CREATE TABLE IF NOT EXISTS `tbl_sharables` (
  `id` int(11) NOT NULL,
  `url` varchar(100) COLLATE utf8_bin NOT NULL,
  `alt` varchar(100) COLLATE utf8_bin NOT NULL,
  `description` varchar(280) COLLATE utf8_bin NOT NULL,
  `name` varchar(100) COLLATE utf8_bin NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_socials`
--

DROP TABLE IF EXISTS `tbl_socials`;
CREATE TABLE IF NOT EXISTS `tbl_socials` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8_bin NOT NULL,
  `url` varchar(200) COLLATE utf8_bin NOT NULL,
  `icon_id` int(3) NOT NULL,
  `description` text COLLATE utf8_bin NOT NULL,
  `embed` text COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `tbl_socials`
--

INSERT INTO `tbl_socials` (`id`, `name`, `url`, `icon_id`, `description`, `embed`) VALUES
(1, 'Facebook', 'https://www.facebook.com/PAWP-Heroes-100858708186011/', 1, 'Visit our Facebook to learn more about our Heroes and how they can help us fight against the BB&V Villians and help their victims.', 'https://www.facebook.com/PAWP-Heroes-100858708186011/'),
(2, 'Twitter', 'https://twitter.com/PAWP_Heroes', 2, 'Sassy much? Hear from our favourite heroes and learn more about their cause and how to help them fight the BB&V Villians and help their everyone live healthy and safe lives.', 'https://twitter.com/PAWP_Heroes'),
(3, 'Instagram', 'https://www.instagram.com/pawp_heroes/', 3, 'Visit our Instagram to meet our Heroes and Villians well as learn cool facts to help keep you and your loved ones\' safe and healthy.', 'https://www.instagram.com/pawp_heroes/'),
(4, 'Tik Tok', 'https://www.tiktok.com/en/', 4, 'Download Tik Tok to see our Heroes in action!', '');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_users`
--

DROP TABLE IF EXISTS `tbl_users`;
CREATE TABLE IF NOT EXISTS `tbl_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uname` varchar(20) COLLATE utf8_bin NOT NULL,
  `pword` varchar(20) COLLATE utf8_bin NOT NULL,
  `email` varchar(100) COLLATE utf8_bin NOT NULL,
  `fname` varchar(20) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_volunteer_data`
--

DROP TABLE IF EXISTS `tbl_volunteer_data`;
CREATE TABLE IF NOT EXISTS `tbl_volunteer_data` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fname` varchar(50) COLLATE utf8_bin NOT NULL,
  `lname` varchar(50) COLLATE utf8_bin NOT NULL,
  `title` varchar(10) COLLATE utf8_bin NOT NULL,
  `email` varchar(100) COLLATE utf8_bin NOT NULL,
  `date` date NOT NULL,
  `phone` varchar(10) COLLATE utf8_bin NOT NULL,
  `about` text COLLATE utf8_bin NOT NULL,
  `dob` date NOT NULL,
  `roles` text COLLATE utf8_bin NOT NULL,
  `availability` text COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
