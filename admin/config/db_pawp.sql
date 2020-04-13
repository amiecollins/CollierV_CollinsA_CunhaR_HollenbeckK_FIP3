-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 13, 2020 at 02:52 AM
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
  `img` varchar(500) COLLATE utf8_bin NOT NULL,
  `alt` varchar(200) COLLATE utf8_bin NOT NULL,
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
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `tbl_get_help`
--

INSERT INTO `tbl_get_help` (`id`, `name`, `img_url`, `url`) VALUES
(1, 'RHAC - Regional HIV / AIDS Connection', 'images/RHAC.jpg', 'https://hivaidsconnection.ca/');

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
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `tbl_resources`
--

INSERT INTO `tbl_resources` (`id`, `name`, `description`, `url`) VALUES
(1, 'Catie', 'www.catie.ca', 'Canadas source for HIV &amp; hepatitis C information'),
(2, 'Government of Canada', 'www.canada.ca', 'Government of Canada main website for all civic supports'),
(3, 'Doctor\'s Without Borders', 'www.doctorswithoutborders.ca', 'International Assosication of Doctors best known for its practices in dangerous areas of the world'),
(4, 'https://www.unaids.org/en', 'www.unaids.org', 'Global initiative to end the battle against AIDS'),
(5, 'International AIDS Conference (Virtual)', 'www.aids2020.org', 'International conference about AIDS in the U.S.'),
(6, 'HIV.gov', 'www.hiv.gov', 'United States HIV information and statistics'),
(7, 'Regional HIV / AIDS Connection', 'www.hivaidsconnection.ca', 'Regional HIV / AIDS Connection: Community Services &amp; Supports Serving Perth, Huron, Lambton, Elgin, Middlesex and Oxford Counties'),
(8, 'World Health Organization', 'www.who.int', 'World Health Organization has statistics and information on various diseases and prevention/treatment strategies'),
(9, 'ACT', 'www.actoronto.org', 'Vision: A Toronto where there are no new HIV infections, and the people and communities living with or most affected by HIV and AIDS live long and healthy lives free from stigma and discrimination.'),
(10, 'Red Cross', 'www.redcross.ca', 'The American Red Cross prevents and alleviates human suffering in the face of emergencies by mobilizing the power of volunteers and the generosity of donors.'),
(11, 'Canadian AIDS Society', 'www.cdnaids.ca', 'Canadian AIDS support and information service');

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
  `img` varchar(500) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `tbl_socials`
--

INSERT INTO `tbl_socials` (`id`, `name`, `url`, `img`) VALUES
(1, 'Facebook', 'https://www.facebook.com/PAWP-Heroes-100858708186011/', 'images/fb.svg'),
(2, 'Twitter', 'https://twitter.com/PAWP_Heroes', 'images/tw.svg'),
(3, 'Instagram', 'https://www.instagram.com/pawp_heroes/', 'images/ig.svg');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_users`
--

DROP TABLE IF EXISTS `tbl_users`;
CREATE TABLE IF NOT EXISTS `tbl_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fname` varchar(100) COLLATE utf8_bin NOT NULL,
  `uname` varchar(20) COLLATE utf8_bin NOT NULL,
  `pword` varchar(20) COLLATE utf8_bin NOT NULL,
  `email` varchar(100) COLLATE utf8_bin NOT NULL,
  `ip` varchar(50) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `tbl_users`
--

INSERT INTO `tbl_users` (`id`, `fname`, `uname`, `pword`, `email`, `ip`) VALUES
(1, 'Amie', 'admin', 'coffeeislife', 'amie.ea.collins@gmail.com', 'no');

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
