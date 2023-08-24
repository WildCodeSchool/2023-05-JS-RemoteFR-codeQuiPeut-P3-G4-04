-- MySQL dump 10.13  Distrib 8.0.33, for Linux (x86_64)
--
-- Host: localhost    Database: alterworld
-- ------------------------------------------------------
-- Server version	8.0.33-0ubuntu0.22.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `alterworld`
--

/*!40000 DROP DATABASE IF EXISTS `alterworld`*/;

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `alterworld` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `alterworld`;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'1');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `text` text,
  `date` datetime DEFAULT NULL,
  `user_id1` int NOT NULL,
  `product_id1` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_comment_user1_idx` (`user_id1`),
  KEY `fk_comment_product1_idx` (`product_id1`),
  CONSTRAINT `fk_comment_product1` FOREIGN KEY (`product_id1`) REFERENCES `product` (`id`),
  CONSTRAINT `fk_comment_user1` FOREIGN KEY (`user_id1`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order`
--

DROP TABLE IF EXISTS `order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order` (
  `id` int NOT NULL AUTO_INCREMENT,
  `date` int DEFAULT NULL,
  `user_id1` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_order_user1_idx` (`user_id1`),
  CONSTRAINT `fk_order_user1` FOREIGN KEY (`user_id1`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order`
--

LOCK TABLES `order` WRITE;
/*!40000 ALTER TABLE `order` DISABLE KEYS */;
/*!40000 ALTER TABLE `order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_detail`
--

DROP TABLE IF EXISTS `order_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_detail` (
  `id` int NOT NULL AUTO_INCREMENT,
  `quanty` int DEFAULT NULL,
  `product_id1` int NOT NULL,
  `order_id1` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_order_detail_product1_idx` (`product_id1`),
  KEY `fk_order_detail_order1_idx` (`order_id1`),
  CONSTRAINT `fk_order_detail_order1` FOREIGN KEY (`order_id1`) REFERENCES `order` (`id`),
  CONSTRAINT `fk_order_detail_product1` FOREIGN KEY (`product_id1`) REFERENCES `product` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_detail`
--

LOCK TABLES `order_detail` WRITE;
/*!40000 ALTER TABLE `order_detail` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_detail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `panier`
--

DROP TABLE IF EXISTS `panier`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `panier` (
  `id` int NOT NULL AUTO_INCREMENT,
  `quanty` varchar(45) DEFAULT NULL,
  `product_id1` int NOT NULL,
  `user_id1` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_panier_product1_idx` (`product_id1`),
  KEY `fk_panier_user1_idx` (`user_id1`),
  CONSTRAINT `fk_panier_product1` FOREIGN KEY (`product_id1`) REFERENCES `product` (`id`),
  CONSTRAINT `fk_panier_user1` FOREIGN KEY (`user_id1`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `panier`
--

LOCK TABLES `panier` WRITE;
/*!40000 ALTER TABLE `panier` DISABLE KEYS */;
/*!40000 ALTER TABLE `panier` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(200) DEFAULT NULL,
  `image` varchar(200) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  `user_id1` int NOT NULL,
  `category_id1` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_product_user_idx` (`user_id1`),
  KEY `fk_product_category1_idx` (`category_id1`),
  CONSTRAINT `fk_product_category1` FOREIGN KEY (`category_id1`) REFERENCES `category` (`id`),
  CONSTRAINT `fk_product_user` FOREIGN KEY (`user_id1`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'Game boye','',100,'Produit neuf',1,1);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `last name` varchar(250) DEFAULT NULL,
  `first name` varchar(250) DEFAULT NULL,
  `address` varchar(250) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Billy','Potter','13 rue Marseille','1234'),(2,'Momo','Lili','6 si je savais','1234');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-03 12:03:16


































































-- MySQL dump 10.13  Distrib 8.0.32, for macos13 (arm64)
--
-- Host: localhost    Database: harryBdd
-- ------------------------------------------------------
-- Server version	8.0.32

--/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
--/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
--/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
--/*!50503 SET NAMES utf8mb4 */;
--/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
--/*!40103 SET TIME_ZONE='+00:00' */;
--/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
--/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
--/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
--/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `harryBdd`
--

--/*!40000 DROP DATABASE IF EXISTS `harryBdd`*/;

--CREATE DATABASE /*!32312 IF NOT EXISTS*/ `harryBdd` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT --ENCRYPTION='N' */;

--USE `harryBdd`;

--
-- Table structure for table `characters`
--

--DROP TABLE IF EXISTS `characters`;
--/*!40101 SET @saved_cs_client     = @@character_set_client */;
--/*!50503 SET character_set_client = utf8mb4 */;
--CREATE TABLE `characters` (
 -- `id` int NOT NULL AUTO_INCREMENT,
--  `firstname` varchar(100) DEFAULT NULL,
  --`lastname` varchar(100) DEFAULT NULL,
 -- `imgUrl` varchar(255) DEFAULT NULL,
 -- `houses_id` int NOT NULL,
 -- PRIMARY KEY (`id`,`houses_id`),
 -- KEY `fk_characters_houses_idx` (`houses_id`),
 -- CONSTRAINT `fk_characters_houses` FOREIGN KEY (`houses_id`) REFERENCES `houses` (`id`)
--) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
--/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `characters`
--

--LOCK TABLES `characters` WRITE;
--/*!40000 ALTER TABLE `characters` DISABLE KEYS */;
--INSERT INTO `characters` VALUES (1,'Harry','Potter','https://static.actu.fr/uploads/2023/01/25512-230106120939397-0.jpg',1),(2,'Hermione',--'Granger','https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Hermione_Granger_poster.jpg/220px-Hermione_Granger_poster.jpg',1),(3,--'Drago','Malefoy','https://wingardium-leviosa.com/wp-content/uploads/2018/03/draco-malfoy-produit-baguette-magique.jpg',2),(5,'Ron',--'weasley','https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Ron_Weasley_poster.jpg/220px-Ron_Weasley_poster.jpg',1);
--/*!40000 ALTER TABLE `characters` ENABLE KEYS */;
--UNLOCK TABLES;

--
-- Table structure for table `houses`
--

--DROP TABLE IF EXISTS `houses`;
--/*!40101 SET @saved_cs_client     = @@character_set_client */;
--/*!50503 SET character_set_client = utf8mb4 */;
--CREATE TABLE `houses` (
 -- `id` int NOT NULL AUTO_INCREMENT,
 -- `houseName` varchar(100) DEFAULT NULL,
 -- `housePoint` int DEFAULT NULL,
 -- PRIMARY KEY (`id`)
--) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
--/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `houses`
--

--LOCK TABLES `houses` WRITE;
--/*!40000 ALTER TABLE `houses` DISABLE KEYS */;
--INSERT INTO `houses` VALUES (1,'Grifondor',100),(2,'Serpentard',100);
--/*!40000 ALTER TABLE `houses` ENABLE KEYS */;
--UNLOCK TABLES;

--
-- Table structure for table `spells`
--

--DROP TABLE IF EXISTS `spells`;
--/*!40101 SET @saved_cs_client     = @@character_set_client */;
--/*!50503 SET character_set_client = utf8mb4 */;
--CREATE TABLE `spells` (
 -- `id` int NOT NULL AUTO_INCREMENT,
 -- `spellName` varchar(255) DEFAULT NULL,
 -- PRIMARY KEY (`id`)
--) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
--/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `spells`
--

--LOCK TABLES `spells` WRITE;
--/*!40000 ALTER TABLE `spells` DISABLE KEYS */;
--/*!40000 ALTER TABLE `spells` ENABLE KEYS */;
--UNLOCK TABLES;

--
-- Table structure for table `spells_has_characters`
--

--DROP TABLE IF EXISTS `spells_has_characters`;
--/*!40101 SET @saved_cs_client     = @@character_set_client */;
--/*!50503 SET character_set_client = utf8mb4 */;
--CREATE TABLE `spells_has_characters` (
--  `spells_id` int NOT NULL,
 -- `characters_id` int NOT NULL,
 -- PRIMARY KEY (`spells_id`,`characters_id`),
 -- KEY `fk_spells_has_characters_characters1_idx` (`characters_id`),
 -- KEY `fk_spells_has_characters_spells1_idx` (`spells_id`),
 -- CONSTRAINT `fk_spells_has_characters_characters1` FOREIGN KEY (`characters_id`) REFERENCES `characters` (`id`),
 -- CONSTRAINT `fk_spells_has_characters_spells1` FOREIGN KEY (`spells_id`) REFERENCES `spells` (`id`)
--) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
--/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `spells_has_characters`
--

--LOCK TABLES `spells_has_characters` WRITE;
--/*!40000 ALTER TABLE `spells_has_characters` DISABLE KEYS */;
--/*!40000 ALTER TABLE `spells_has_characters` ENABLE KEYS */;
--UNLOCK TABLES;
--/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

--/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
--/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
--/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
--/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
--/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
--/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
--/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-12  2:40:41
