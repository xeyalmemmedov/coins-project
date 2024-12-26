-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: coins
-- ------------------------------------------------------
-- Server version	8.0.40

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `coins`
--

DROP TABLE IF EXISTS `coins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `coins` (
  `coins_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `face_value` varchar(100) DEFAULT NULL,
  `year` varchar(10) NOT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `country` varchar(50) DEFAULT NULL,
  `compisition` varchar(100) DEFAULT NULL,
  `short_description` text,
  `full_description` text,
  `quality` varchar(50) DEFAULT NULL,
  `weight` varchar(50) DEFAULT NULL,
  `img_obverse` text,
  `img_reverse` text,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `category_id` int DEFAULT NULL,
  PRIMARY KEY (`coins_id`),
  UNIQUE KEY `name` (`name`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `coins_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coins`
--

LOCK TABLES `coins` WRITE;
/*!40000 ALTER TABLE `coins` DISABLE KEYS */;
INSERT INTO `coins` VALUES (1,'Canadian Beaver','5 cents','1965',40.00,'CANADA','nickel','Canadian beaver. Unique coin with the image of a beaver. Face value - 5 cents. Created under Elizabeth II.','Canadian beaver. Unique coin with the image of a beaver. Face value - 5 cents. Created under Elizabeth II. \n\nIn the center of the obverse is a portrait of Queen Elizabeth II, the profile is directed to the right. The inscription on the left semicircle (English) ELIZABETH II, on the right semicircle D · G · REGINA (ELIZABETH II QUEEN by the Grace of GOD) with dots. Below is a mint mark.\n\nIn the center of the coin reverse is a Canadian beaver on a rock sticking out of the water. At the top is a semicircle with the inscription \"5 cents\" between two maple leaves. At the bottom in two lines is the inscription CANADA (CANADA) and the year of minting.','BU','4.54 g','https://i.hizliresim.com/i17xymf.png','https://i.hizliresim.com/ri5igrb.png','2024-12-26 05:02:00','2024-12-26 05:02:00',3),(3,'btc','5 cents','2001',35.00,'CANADA','nickel','Canadian beaver. Unique coin with the image of a beaver. Face value - 5 cents. Created under Elizabeth II.','Canadian beaver. Unique coin with the image of a beaver. Face value - 5 cents. Created under Elizabeth II. \n\nIn the center of the obverse is a portrait of Queen Elizabeth II, the profile is directed to the right. The inscription on the left semicircle (English) ELIZABETH II, on the right semicircle D · G · REGINA (ELIZABETH II QUEEN by the Grace of GOD) with dots. Below is a mint mark.\n\nIn the center of the coin reverse is a Canadian beaver on a rock sticking out of the water. At the top is a semicircle with the inscription \"5 cents\" between two maple leaves. At the bottom in two lines is the inscription CANADA (CANADA) and the year of minting.','BU','4.54 g','https://i.hizliresim.com/i17xymf.png','https://i.hizliresim.com/ri5igrb.png','2024-12-26 05:02:35','2024-12-26 05:02:35',2),(4,'eth','10 cents','2001',35.00,'USA','nickel','Canadian beaver. Unique coin with the image of a beaver. Face value - 5 cents. Created under Elizabeth II.','Canadian beaver. Unique coin with the image of a beaver. Face value - 5 cents. Created under Elizabeth II. \n\nIn the center of the obverse is a portrait of Queen Elizabeth II, the profile is directed to the right. The inscription on the left semicircle (English) ELIZABETH II, on the right semicircle D · G · REGINA (ELIZABETH II QUEEN by the Grace of GOD) with dots. Below is a mint mark.\n\nIn the center of the coin reverse is a Canadian beaver on a rock sticking out of the water. At the top is a semicircle with the inscription \"5 cents\" between two maple leaves. At the bottom in two lines is the inscription CANADA (CANADA) and the year of minting.','BU','4.54 g','https://i.hizliresim.com/i17xymf.png','https://i.hizliresim.com/ri5igrb.png','2024-12-26 05:02:50','2024-12-26 05:02:50',2);
/*!40000 ALTER TABLE `coins` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-26  5:25:26
