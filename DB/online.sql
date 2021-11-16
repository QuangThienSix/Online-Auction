/*
 Navicat Premium Data Transfer

 Source Server         : online
 Source Server Type    : MySQL
 Source Server Version : 80027
 Source Host           : localhost:3306
 Source Schema         : online

 Target Server Type    : MySQL
 Target Server Version : 80027
 File Encoding         : 65001

 Date: 07/11/2021 15:19:12
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for brand
-- ----------------------------
DROP TABLE IF EXISTS `brand`;
CREATE TABLE `brand`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `is_deleted` int NULL DEFAULT NULL,
  `created_at` datetime(0) NULL DEFAULT NULL,
  `updated_at` datetime(0) NULL DEFAULT NULL,
  `category_id` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of brand
-- ----------------------------
INSERT INTO `brand` VALUES (1, 'brand1', 0, '2021-10-23 22:36:48', '2021-10-23 22:36:51', 1);
INSERT INTO `brand` VALUES (2, 'brand2', 0, '2021-10-23 22:36:48', '2021-10-23 22:36:48', 1);
INSERT INTO `brand` VALUES (3, 'brand2', 0, '2021-10-23 22:36:48', '2021-10-23 22:36:48', 2);
INSERT INTO `brand` VALUES (4, 'brand1', 0, '2021-10-23 22:36:48', '2021-10-23 22:36:48', 2);
INSERT INTO `brand` VALUES (5, 'brand1', 0, '2021-10-23 22:36:48', '2021-10-23 22:36:48', 3);
INSERT INTO `brand` VALUES (6, 'brand2', 0, '2021-10-23 22:36:48', '2021-10-23 22:36:48', 3);
INSERT INTO `brand` VALUES (7, 'test', NULL, NULL, NULL, 3);
INSERT INTO `brand` VALUES (8, 'test33', NULL, NULL, NULL, 3);
INSERT INTO `brand` VALUES (9, 'test1', NULL, NULL, NULL, 3);

-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `is_deleted` int NULL DEFAULT NULL,
  `cateted_at` datetime(0) NULL DEFAULT NULL,
  `updated_at` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES (1, 'category1', 0, '2021-10-23 22:06:26', '2021-10-23 22:06:29');
INSERT INTO `category` VALUES (2, 'category2', 0, '2021-10-28 19:50:33', '2021-10-28 19:50:36');
INSERT INTO `category` VALUES (3, 'category3', 0, '2021-10-28 19:50:46', '2021-10-28 19:50:50');

-- ----------------------------
-- Table structure for product
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `is_deleted` int NULL DEFAULT NULL,
  `created_at` datetime(0) NOT NULL,
  `updated_at` datetime(0) NOT NULL,
  `ratting` int NULL DEFAULT NULL,
  `time_start` datetime(0) NULL DEFAULT NULL,
  `time_end` datetime(0) NULL DEFAULT NULL,
  `price` decimal(10, 2) NULL DEFAULT NULL,
  `brand_id` int NULL DEFAULT NULL,
  `brand_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `category_id` int NULL DEFAULT NULL,
  `category_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `timestamp` datetime(0) NULL DEFAULT NULL,
  `avatar` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `images` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `current_price` decimal(10, 2) NULL DEFAULT NULL,
  `max_price` decimal(10, 2) NULL DEFAULT NULL,
  `count_quantity_bidder` int NULL DEFAULT NULL,
  `seller_id` int NULL DEFAULT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `step` int NULL DEFAULT NULL,
  `is_automatic` int NULL DEFAULT NULL,
  `is_done` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 759 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of product
-- ----------------------------
INSERT INTO `product` VALUES (1, 'product1', 0, '2021-10-30 21:56:10', '2021-11-07 15:04:20', 1, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1001.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 9999999.00, 300001.00, 1, 1, 'data test', 1, 1, 1);
INSERT INTO `product` VALUES (2, 'product2', 0, '2021-10-30 21:56:10', '2021-11-07 15:13:46', 2, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1002.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 999999.00, 300002.00, 1, 2, 'data test', 1, 1, 1);
INSERT INTO `product` VALUES (3, 'product3', 0, '2021-10-30 21:56:10', '2021-11-07 15:14:16', 3, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1003.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 999999.00, 300003.00, 1, 2, 'data test', 1, 1, 1);
INSERT INTO `product` VALUES (4, 'product4', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 4, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1004.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300004.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (6, 'product6', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 6, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1006.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300006.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (7, 'product7', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 7, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1007.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300007.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (8, 'product8', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 8, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1008.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300008.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (9, 'product9', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 9, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1009.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300009.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (13, 'product13', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 13, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1013.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300013.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (14, 'product14', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 14, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1014.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300014.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (15, 'product15', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 15, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1015.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300015.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (16, 'product16', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 16, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1016.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300016.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (17, 'product17', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 17, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1017.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300017.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (18, 'product18', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 18, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1018.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300018.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (19, 'product19', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 19, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1019.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300019.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (20, 'product20', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 20, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1020.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300020.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (28, 'product28', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 28, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1028.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300028.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (29, 'product29', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 29, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1029.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300029.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (30, 'product30', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 30, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1030.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300030.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (31, 'product31', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 31, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1031.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300031.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (32, 'product32', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 32, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1032.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300032.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (33, 'product33', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 33, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1033.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300033.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (34, 'product34', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 34, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1034.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300034.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (35, 'product35', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 35, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1035.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300035.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (36, 'product36', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 36, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1036.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300036.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (37, 'product37', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 37, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1037.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300037.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (38, 'product38', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 38, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1038.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300038.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (39, 'product39', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 39, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1039.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300039.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (40, 'product40', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 40, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1040.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300040.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (41, 'product41', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 41, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1041.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300041.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (42, 'product42', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 42, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1042.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300042.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (43, 'product43', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 43, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1043.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300043.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (59, 'product59', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 59, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1059.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300059.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (60, 'product60', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 60, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1060.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300060.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (61, 'product61', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 61, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1061.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300061.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (62, 'product62', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 62, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1062.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300062.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (63, 'product63', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 63, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1063.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300063.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (64, 'product64', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 64, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1064.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300064.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (65, 'product65', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 65, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1065.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300065.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (66, 'product66', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 66, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1066.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300066.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (67, 'product67', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 67, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1067.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300067.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (68, 'product68', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 68, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1068.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300068.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (69, 'product69', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 69, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1069.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300069.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (70, 'product70', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 70, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1070.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300070.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (71, 'product71', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 71, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1071.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300071.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (72, 'product72', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 72, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1072.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300072.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (73, 'product73', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 73, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1073.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300073.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (74, 'product74', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 74, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1074.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300074.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (75, 'product75', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 75, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1075.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300075.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (76, 'product76', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 76, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1076.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300076.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (77, 'product77', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 77, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1077.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300077.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (78, 'product78', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 78, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1078.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300078.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (79, 'product79', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 79, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1079.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300079.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (80, 'product80', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 80, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1080.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300080.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (81, 'product81', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 81, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1081.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300081.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (82, 'product82', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 82, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1082.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300082.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (83, 'product83', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 83, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1083.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300083.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (84, 'product84', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 84, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1084.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300084.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (85, 'product85', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 85, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1085.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300085.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (86, 'product86', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 86, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1086.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300086.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (87, 'product87', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 87, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1087.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300087.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (88, 'product88', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 88, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1088.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300088.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (89, 'product89', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 89, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1089.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300089.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (90, 'product90', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 90, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1090.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300090.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (122, 'product122', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 122, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1122.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300122.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (123, 'product123', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 123, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1123.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300123.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (124, 'product124', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 124, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1124.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300124.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (125, 'product125', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 125, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1125.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300125.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (126, 'product126', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 126, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1126.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300126.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (127, 'product127', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 127, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1127.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300127.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (128, 'product128', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 128, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1128.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300128.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (129, 'product129', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 129, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1129.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300129.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (130, 'product130', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 130, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1130.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300130.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (131, 'product131', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 131, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1131.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300131.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (132, 'product132', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 132, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1132.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300132.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (133, 'product133', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 133, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1133.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300133.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (134, 'product134', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 134, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1134.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300134.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (135, 'product135', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 135, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1135.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300135.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (136, 'product136', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 136, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1136.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300136.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (137, 'product137', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 137, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1137.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300137.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (138, 'product138', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 138, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1138.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300138.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (139, 'product139', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 139, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1139.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300139.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (140, 'product140', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 140, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1140.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300140.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (141, 'product141', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 141, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1141.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300141.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (142, 'product142', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 142, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1142.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300142.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (143, 'product143', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 143, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1143.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300143.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (144, 'product144', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 144, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1144.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300144.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (145, 'product145', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 145, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1145.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300145.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (146, 'product146', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 146, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1146.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300146.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (147, 'product147', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 147, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1147.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300147.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (148, 'product148', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 148, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1148.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300148.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (149, 'product149', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 149, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1149.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300149.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (150, 'product150', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 150, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1150.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300150.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (151, 'product151', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 151, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1151.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300151.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (152, 'product152', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 152, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1152.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300152.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (153, 'product153', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 153, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1153.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300153.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (154, 'product154', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 154, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1154.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300154.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (155, 'product155', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 155, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1155.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300155.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (156, 'product156', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 156, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1156.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300156.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (157, 'product157', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 157, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1157.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300157.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (158, 'product158', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 158, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1158.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300158.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (159, 'product159', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 159, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1159.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300159.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (160, 'product160', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 160, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1160.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300160.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (161, 'product161', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 161, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1161.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300161.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (162, 'product162', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 162, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1162.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300162.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (163, 'product163', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 163, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1163.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300163.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (164, 'product164', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 164, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1164.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300164.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (165, 'product165', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 165, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1165.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300165.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (166, 'product166', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 166, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1166.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300166.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (167, 'product167', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 167, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1167.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300167.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (168, 'product168', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 168, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1168.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300168.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (169, 'product169', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 169, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1169.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300169.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (170, 'product170', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 170, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1170.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300170.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (171, 'product171', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 171, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1171.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300171.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (172, 'product172', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 172, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1172.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300172.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (173, 'product173', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 173, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1173.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300173.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (174, 'product174', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 174, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1174.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300174.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (175, 'product175', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 175, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1175.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300175.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (176, 'product176', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 176, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1176.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300176.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (177, 'product177', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 177, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1177.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300177.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (178, 'product178', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 178, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1178.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300178.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (179, 'product179', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 179, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1179.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300179.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (180, 'product180', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 180, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1180.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300180.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (181, 'product181', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 181, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1181.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300181.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (182, 'product182', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 182, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1182.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300182.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (183, 'product183', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 183, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1183.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300183.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (184, 'product184', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 184, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1184.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300184.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (185, 'product185', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 185, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1185.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300185.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (249, 'product249', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 249, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1249.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300249.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (250, 'product250', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 250, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1250.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300250.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (251, 'product251', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 251, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1251.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300251.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (252, 'product252', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 252, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1252.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300252.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (253, 'product253', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 253, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1253.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300253.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (254, 'product254', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 254, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1254.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300254.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (255, 'product255', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 255, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1255.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300255.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (256, 'product256', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 256, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1256.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300256.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (257, 'product257', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 257, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1257.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300257.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (258, 'product258', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 258, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1258.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300258.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (259, 'product259', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 259, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1259.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300259.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (260, 'product260', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 260, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1260.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300260.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (261, 'product261', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 261, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1261.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300261.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (262, 'product262', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 262, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1262.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300262.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (263, 'product263', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 263, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1263.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300263.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (264, 'product264', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 264, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1264.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300264.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (265, 'product265', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 265, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1265.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300265.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (266, 'product266', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 266, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1266.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300266.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (267, 'product267', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 267, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1267.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300267.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (268, 'product268', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 268, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1268.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300268.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (269, 'product269', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 269, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1269.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300269.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (270, 'product270', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 270, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1270.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300270.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (271, 'product271', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 271, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1271.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300271.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (272, 'product272', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 272, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1272.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300272.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (273, 'product273', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 273, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1273.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300273.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (274, 'product274', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 274, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1274.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300274.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (275, 'product275', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 275, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1275.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300275.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (276, 'product276', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 276, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1276.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300276.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (277, 'product277', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 277, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1277.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300277.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (278, 'product278', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 278, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1278.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300278.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (279, 'product279', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 279, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1279.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300279.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (280, 'product280', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 280, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1280.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300280.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (281, 'product281', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 281, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1281.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300281.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (282, 'product282', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 282, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1282.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300282.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (283, 'product283', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 283, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1283.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300283.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (284, 'product284', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 284, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1284.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300284.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (285, 'product285', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 285, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1285.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300285.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (286, 'product286', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 286, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1286.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300286.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (287, 'product287', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 287, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1287.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300287.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (288, 'product288', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 288, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1288.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300288.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (289, 'product289', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 289, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1289.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300289.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (290, 'product290', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 290, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1290.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300290.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (291, 'product291', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 291, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1291.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300291.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (292, 'product292', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 292, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1292.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300292.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (293, 'product293', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 293, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1293.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300293.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (294, 'product294', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 294, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1294.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300294.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (295, 'product295', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 295, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1295.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300295.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (296, 'product296', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 296, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1296.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300296.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (297, 'product297', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 297, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1297.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300297.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (298, 'product298', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 298, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1298.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300298.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (299, 'product299', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 299, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1299.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300299.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (300, 'product300', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 300, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1300.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300300.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (301, 'product301', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 301, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1301.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300301.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (302, 'product302', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 302, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1302.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300302.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (303, 'product303', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 303, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1303.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300303.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (304, 'product304', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 304, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1304.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300304.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (305, 'product305', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 305, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1305.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300305.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (306, 'product306', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 306, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1306.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300306.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (307, 'product307', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 307, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1307.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300307.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (308, 'product308', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 308, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1308.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300308.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (309, 'product309', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 309, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1309.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300309.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (310, 'product310', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 310, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1310.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300310.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (311, 'product311', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 311, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1311.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300311.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (312, 'product312', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 312, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1312.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300312.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (313, 'product313', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 313, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1313.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300313.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (314, 'product314', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 314, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1314.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300314.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (315, 'product315', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 315, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1315.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300315.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (316, 'product316', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 316, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1316.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300316.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (317, 'product317', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 317, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1317.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300317.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (318, 'product318', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 318, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1318.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300318.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (319, 'product319', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 319, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1319.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300319.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (320, 'product320', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 320, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1320.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300320.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (321, 'product321', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 321, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1321.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300321.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (322, 'product322', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 322, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1322.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300322.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (323, 'product323', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 323, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1323.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300323.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (324, 'product324', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 324, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1324.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300324.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (325, 'product325', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 325, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1325.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300325.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (326, 'product326', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 326, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1326.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300326.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (327, 'product327', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 327, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1327.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300327.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (328, 'product328', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 328, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1328.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300328.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (329, 'product329', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 329, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1329.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300329.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (330, 'product330', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 330, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1330.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300330.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (331, 'product331', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 331, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1331.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300331.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (332, 'product332', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 332, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1332.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300332.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (333, 'product333', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 333, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1333.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300333.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (334, 'product334', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 334, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1334.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300334.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (335, 'product335', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 335, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1335.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300335.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (336, 'product336', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 336, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1336.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300336.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (337, 'product337', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 337, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1337.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300337.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (338, 'product338', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 338, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1338.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300338.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (339, 'product339', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 339, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1339.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300339.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (340, 'product340', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 340, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1340.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300340.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (341, 'product341', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 341, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1341.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300341.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (342, 'product342', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 342, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1342.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300342.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (343, 'product343', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 343, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1343.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300343.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (344, 'product344', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 344, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1344.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300344.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (345, 'product345', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 345, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1345.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300345.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (346, 'product346', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 346, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1346.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300346.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (347, 'product347', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 347, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1347.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300347.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (348, 'product348', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 348, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1348.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300348.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (349, 'product349', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 349, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1349.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300349.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (350, 'product350', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 350, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1350.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300350.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (351, 'product351', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 351, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1351.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300351.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (352, 'product352', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 352, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1352.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300352.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (353, 'product353', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 353, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1353.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300353.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (354, 'product354', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 354, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1354.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300354.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (355, 'product355', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 355, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1355.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300355.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (356, 'product356', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 356, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1356.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300356.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (357, 'product357', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 357, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1357.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300357.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (358, 'product358', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 358, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1358.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300358.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (359, 'product359', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 359, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1359.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300359.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (360, 'product360', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 360, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1360.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300360.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (361, 'product361', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 361, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1361.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300361.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (362, 'product362', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 362, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1362.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300362.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (363, 'product363', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 363, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1363.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300363.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (364, 'product364', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 364, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1364.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300364.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (365, 'product365', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 365, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1365.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300365.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (366, 'product366', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 366, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1366.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300366.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (367, 'product367', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 367, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1367.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300367.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (368, 'product368', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 368, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1368.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300368.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (369, 'product369', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 369, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1369.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300369.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (370, 'product370', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 370, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1370.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300370.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (371, 'product371', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 371, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1371.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300371.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (372, 'product372', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 372, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1372.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300372.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (373, 'product373', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 373, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1373.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300373.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (374, 'product374', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 374, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1374.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300374.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (375, 'product375', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 375, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1375.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300375.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (376, 'product376', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 376, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1376.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300376.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (504, 'product504', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 504, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1504.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300504.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (505, 'product505', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 505, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1505.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300505.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (506, 'product506', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 506, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1506.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300506.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (507, 'product507', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 507, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1507.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300507.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (508, 'product508', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 508, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1508.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300508.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (509, 'product509', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 509, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1509.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300509.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (510, 'product510', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 510, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1510.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300510.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (511, 'product511', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 511, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1511.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300511.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (512, 'product512', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 512, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1512.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300512.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (513, 'product513', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 513, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1513.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300513.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (514, 'product514', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 514, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1514.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300514.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (515, 'product515', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 515, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1515.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300515.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (516, 'product516', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 516, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1516.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300516.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (517, 'product517', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 517, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1517.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300517.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (518, 'product518', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 518, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1518.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300518.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (519, 'product519', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 519, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1519.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300519.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (520, 'product520', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 520, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1520.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300520.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (521, 'product521', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 521, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1521.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300521.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (522, 'product522', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 522, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1522.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300522.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (523, 'product523', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 523, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1523.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300523.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (524, 'product524', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 524, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1524.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300524.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (525, 'product525', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 525, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1525.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300525.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (526, 'product526', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 526, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1526.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300526.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (527, 'product527', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 527, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1527.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300527.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (528, 'product528', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 528, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1528.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300528.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (529, 'product529', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 529, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1529.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300529.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (530, 'product530', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 530, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1530.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300530.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (531, 'product531', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 531, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1531.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300531.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (532, 'product532', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 532, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1532.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300532.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (533, 'product533', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 533, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1533.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300533.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (534, 'product534', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 534, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1534.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300534.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (535, 'product535', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 535, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1535.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300535.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (536, 'product536', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 536, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1536.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300536.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (537, 'product537', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 537, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1537.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300537.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (538, 'product538', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 538, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1538.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300538.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (539, 'product539', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 539, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1539.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300539.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (540, 'product540', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 540, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1540.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300540.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (541, 'product541', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 541, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1541.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300541.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (542, 'product542', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 542, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1542.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300542.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (543, 'product543', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 543, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1543.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300543.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (544, 'product544', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 544, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1544.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300544.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (545, 'product545', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 545, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1545.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300545.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (546, 'product546', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 546, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1546.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300546.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (547, 'product547', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 547, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1547.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300547.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (548, 'product548', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 548, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1548.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300548.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (549, 'product549', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 549, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1549.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300549.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (550, 'product550', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 550, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1550.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300550.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (551, 'product551', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 551, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1551.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300551.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (552, 'product552', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 552, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1552.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300552.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (553, 'product553', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 553, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1553.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300553.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (554, 'product554', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 554, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1554.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300554.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (555, 'product555', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 555, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1555.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300555.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (556, 'product556', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 556, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1556.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300556.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (557, 'product557', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 557, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1557.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300557.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (558, 'product558', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 558, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1558.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300558.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (559, 'product559', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 559, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1559.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300559.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (560, 'product560', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 560, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1560.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300560.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (561, 'product561', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 561, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1561.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300561.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (562, 'product562', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 562, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1562.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300562.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (563, 'product563', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 563, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1563.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300563.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (564, 'product564', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 564, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1564.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300564.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (565, 'product565', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 565, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1565.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300565.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (566, 'product566', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 566, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1566.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300566.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (567, 'product567', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 567, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1567.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300567.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (568, 'product568', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 568, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1568.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300568.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (569, 'product569', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 569, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1569.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300569.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (570, 'product570', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 570, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1570.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300570.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (571, 'product571', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 571, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1571.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300571.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (572, 'product572', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 572, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1572.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300572.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (573, 'product573', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 573, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1573.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300573.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (574, 'product574', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 574, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1574.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300574.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (575, 'product575', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 575, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1575.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300575.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (576, 'product576', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 576, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1576.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300576.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (577, 'product577', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 577, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1577.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300577.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (578, 'product578', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 578, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1578.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300578.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (579, 'product579', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 579, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1579.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300579.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (580, 'product580', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 580, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1580.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300580.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (581, 'product581', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 581, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1581.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300581.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (582, 'product582', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 582, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1582.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300582.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (583, 'product583', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 583, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1583.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300583.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (584, 'product584', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 584, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1584.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300584.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (585, 'product585', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 585, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1585.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300585.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (586, 'product586', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 586, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1586.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300586.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (587, 'product587', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 587, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1587.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300587.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (588, 'product588', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 588, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1588.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300588.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (589, 'product589', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 589, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1589.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300589.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (590, 'product590', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 590, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1590.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300590.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (591, 'product591', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 591, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1591.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300591.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (592, 'product592', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 592, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1592.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300592.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (593, 'product593', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 593, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1593.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300593.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (594, 'product594', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 594, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1594.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300594.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (595, 'product595', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 595, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1595.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300595.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (596, 'product596', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 596, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1596.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300596.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (597, 'product597', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 597, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1597.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300597.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (598, 'product598', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 598, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1598.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300598.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (599, 'product599', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 599, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1599.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300599.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (600, 'product600', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 600, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1600.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300600.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (601, 'product601', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 601, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1601.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300601.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (602, 'product602', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 602, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1602.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300602.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (603, 'product603', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 603, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1603.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300603.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (604, 'product604', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 604, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1604.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300604.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (605, 'product605', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 605, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1605.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300605.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (606, 'product606', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 606, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1606.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300606.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (607, 'product607', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 607, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1607.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300607.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (608, 'product608', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 608, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1608.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300608.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (609, 'product609', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 609, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1609.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300609.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (610, 'product610', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 610, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1610.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300610.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (611, 'product611', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 611, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1611.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300611.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (612, 'product612', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 612, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1612.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300612.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (613, 'product613', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 613, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1613.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300613.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (614, 'product614', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 614, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1614.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300614.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (615, 'product615', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 615, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1615.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300615.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (616, 'product616', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 616, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1616.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300616.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (617, 'product617', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 617, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1617.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300617.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (618, 'product618', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 618, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1618.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300618.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (619, 'product619', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 619, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1619.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300619.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (620, 'product620', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 620, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1620.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300620.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (621, 'product621', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 621, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1621.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300621.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (622, 'product622', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 622, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1622.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300622.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (623, 'product623', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 623, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1623.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300623.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (624, 'product624', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 624, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1624.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300624.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (625, 'product625', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 625, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1625.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300625.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (626, 'product626', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 626, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1626.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300626.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (627, 'product627', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 627, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1627.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300627.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (628, 'product628', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 628, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1628.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300628.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (629, 'product629', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 629, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1629.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300629.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (630, 'product630', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 630, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1630.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300630.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (631, 'product631', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 631, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1631.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300631.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (632, 'product632', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 632, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1632.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300632.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (633, 'product633', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 633, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1633.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300633.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (634, 'product634', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 634, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1634.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300634.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (635, 'product635', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 635, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1635.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300635.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (636, 'product636', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 636, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1636.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300636.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (637, 'product637', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 637, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1637.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300637.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (638, 'product638', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 638, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1638.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300638.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (639, 'product639', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 639, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1639.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300639.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (640, 'product640', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 640, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1640.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300640.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (641, 'product641', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 641, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1641.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300641.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (642, 'product642', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 642, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1642.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300642.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (643, 'product643', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 643, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1643.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300643.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (644, 'product644', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 644, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1644.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300644.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (645, 'product645', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 645, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1645.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300645.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (646, 'product646', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 646, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1646.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300646.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (647, 'product647', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 647, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1647.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300647.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (648, 'product648', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 648, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1648.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300648.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (649, 'product649', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 649, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1649.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300649.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (650, 'product650', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 650, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1650.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300650.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (651, 'product651', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 651, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1651.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300651.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (652, 'product652', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 652, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1652.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300652.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (653, 'product653', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 653, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1653.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300653.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (654, 'product654', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 654, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1654.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300654.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (655, 'product655', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 655, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1655.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300655.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (656, 'product656', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 656, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1656.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300656.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (657, 'product657', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 657, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1657.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300657.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (658, 'product658', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 658, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1658.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300658.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (659, 'product659', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 659, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1659.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300659.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (660, 'product660', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 660, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1660.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300660.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (661, 'product661', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 661, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1661.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300661.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (662, 'product662', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 662, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1662.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300662.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (663, 'product663', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 663, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1663.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300663.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (664, 'product664', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 664, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1664.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300664.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (665, 'product665', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 665, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1665.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300665.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (666, 'product666', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 666, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1666.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300666.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (667, 'product667', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 667, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1667.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300667.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (668, 'product668', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 668, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1668.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300668.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (669, 'product669', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 669, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1669.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300669.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (670, 'product670', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 670, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1670.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300670.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (671, 'product671', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 671, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1671.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300671.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (672, 'product672', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 672, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1672.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300672.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (673, 'product673', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 673, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1673.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300673.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (674, 'product674', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 674, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1674.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300674.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (675, 'product675', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 675, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1675.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300675.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (676, 'product676', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 676, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1676.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300676.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (677, 'product677', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 677, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1677.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300677.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (678, 'product678', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 678, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1678.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300678.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (679, 'product679', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 679, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1679.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300679.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (680, 'product680', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 680, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1680.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300680.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (681, 'product681', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 681, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1681.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300681.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (682, 'product682', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 682, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1682.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300682.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (683, 'product683', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 683, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1683.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300683.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (684, 'product684', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 684, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1684.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300684.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (685, 'product685', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 685, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1685.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300685.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (686, 'product686', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 686, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1686.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300686.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (687, 'product687', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 687, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1687.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300687.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (688, 'product688', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 688, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1688.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300688.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (689, 'product689', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 689, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1689.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300689.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (690, 'product690', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 690, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1690.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300690.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (691, 'product691', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 691, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1691.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300691.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (692, 'product692', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 692, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1692.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300692.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (693, 'product693', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 693, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1693.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300693.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (694, 'product694', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 694, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1694.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300694.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (695, 'product695', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 695, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1695.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300695.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (696, 'product696', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 696, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1696.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300696.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (697, 'product697', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 697, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1697.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300697.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (698, 'product698', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 698, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1698.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300698.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (699, 'product699', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 699, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1699.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300699.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (700, 'product700', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 700, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1700.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300700.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (701, 'product701', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 701, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1701.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300701.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (702, 'product702', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 702, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1702.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300702.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (703, 'product703', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 703, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1703.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300703.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (704, 'product704', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 704, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1704.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300704.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (705, 'product705', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 705, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1705.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300705.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (706, 'product706', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 706, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1706.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300706.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (707, 'product707', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 707, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1707.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300707.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (708, 'product708', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 708, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1708.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300708.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (709, 'product709', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 709, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1709.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300709.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (710, 'product710', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 710, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1710.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300710.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (711, 'product711', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 711, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1711.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300711.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (712, 'product712', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 712, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1712.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300712.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (713, 'product713', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 713, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1713.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300713.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (714, 'product714', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 714, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1714.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300714.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (715, 'product715', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 715, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1715.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300715.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (716, 'product716', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 716, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1716.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300716.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (717, 'product717', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 717, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1717.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300717.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (718, 'product718', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 718, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1718.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300718.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (719, 'product719', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 719, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1719.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300719.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (720, 'product720', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 720, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1720.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300720.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (721, 'product721', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 721, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1721.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300721.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (722, 'product722', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 722, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1722.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300722.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (723, 'product723', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 723, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1723.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300723.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (724, 'product724', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 724, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1724.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300724.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (725, 'product725', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 725, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1725.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300725.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (726, 'product726', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 726, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1726.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300726.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (727, 'product727', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 727, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1727.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300727.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (728, 'product728', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 728, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1728.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300728.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (729, 'product729', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 729, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1729.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300729.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (730, 'product730', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 730, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1730.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300730.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (731, 'product731', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 731, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1731.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300731.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (732, 'product732', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 732, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1732.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300732.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (733, 'product733', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 733, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1733.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300733.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (734, 'product734', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 734, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1734.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300734.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (735, 'product735', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 735, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1735.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300735.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (736, 'product736', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 736, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1736.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300736.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (737, 'product737', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 737, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1737.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300737.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (738, 'product738', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 738, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1738.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300738.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (739, 'product739', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 739, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1739.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300739.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (740, 'product740', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 740, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1740.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300740.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (741, 'product741', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 741, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1741.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300741.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (742, 'product742', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 742, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1742.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300742.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (743, 'product743', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 743, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1743.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300743.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (744, 'product744', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 744, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1744.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300744.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (745, 'product745', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 745, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1745.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300745.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (746, 'product746', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 746, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1746.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300746.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (747, 'product747', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 747, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1747.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300747.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (748, 'product748', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 748, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1748.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300748.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (749, 'product749', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 749, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1749.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300749.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (750, 'product750', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 750, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1750.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300750.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (751, 'product751', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 751, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1751.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300751.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (752, 'product752', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 752, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1752.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300752.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (753, 'product753', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 753, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1753.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300753.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (754, 'product754', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 754, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1754.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300754.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (755, 'product755', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 755, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1755.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300755.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (756, 'product756', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 756, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1756.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300756.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (757, 'product757', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 757, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1757.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300757.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (758, 'product758', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 758, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1758.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300758.00, 0, 0, 'data test', 1, 1, NULL);
INSERT INTO `product` VALUES (759, 'product759', 0, '2021-10-30 21:56:10', '2021-10-30 21:56:13', 759, '2021-10-30 21:56:18', '2021-11-01 21:56:22', 1759.00, 1, 'brand1', 1, 'category1', '2021-10-30 21:56:42', NULL, NULL, 20000.00, 300759.00, 0, 0, 'data test', 1, 1, NULL);

-- ----------------------------
-- Table structure for product_bidder
-- ----------------------------
DROP TABLE IF EXISTS `product_bidder`;
CREATE TABLE `product_bidder`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `bidder_id` int NULL DEFAULT NULL,
  `created_at` datetime(0) NOT NULL,
  `updated_at` datetime(0) NOT NULL,
  `status` int NOT NULL,
  `product_id` int NULL DEFAULT NULL,
  `price` float(10, 2) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of product_bidder
-- ----------------------------
INSERT INTO `product_bidder` VALUES (5, 1, '2021-11-07 15:04:20', '2021-11-07 15:04:20', 1, 1, 9999999.00);
INSERT INTO `product_bidder` VALUES (6, 2, '2021-11-07 15:13:46', '2021-11-07 15:13:46', 1, 2, 999999.00);
INSERT INTO `product_bidder` VALUES (7, 2, '2021-11-07 15:14:16', '2021-11-07 15:14:16', 1, 3, 999999.00);

-- ----------------------------
-- Table structure for transform_seller
-- ----------------------------
DROP TABLE IF EXISTS `transform_seller`;
CREATE TABLE `transform_seller`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `bidder_id` int NULL DEFAULT NULL,
  `bidder_name` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `cateted_at` datetime(0) NOT NULL,
  `updated_at` datetime(0) NOT NULL,
  `status` int NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of transform_seller
-- ----------------------------

-- ----------------------------
-- Table structure for user_comment
-- ----------------------------
DROP TABLE IF EXISTS `user_comment`;
CREATE TABLE `user_comment`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `bidder_id` int NULL DEFAULT NULL,
  `bidder_name` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `cateted_at` datetime(0) NOT NULL,
  `updated_at` datetime(0) NOT NULL,
  `product_id` int NULL DEFAULT NULL,
  `price` decimal(10, 2) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_comment
-- ----------------------------

-- ----------------------------
-- Table structure for user_roles
-- ----------------------------
DROP TABLE IF EXISTS `user_roles`;
CREATE TABLE `user_roles`  (
  `user_role_id` int NOT NULL AUTO_INCREMENT,
  `role_id` int NOT NULL,
  `role_name` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`user_role_id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of user_roles
-- ----------------------------
INSERT INTO `user_roles` VALUES (1, 1, 'Admin');
INSERT INTO `user_roles` VALUES (2, 2, 'Bidder');
INSERT INTO `user_roles` VALUES (3, 3, 'Seller');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `username` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(500) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `fullname` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `address` varchar(500) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(500) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `roles_id` int NOT NULL,
  `islock` tinyint(1) NOT NULL,
  `ratting` int NOT NULL,
  `user_id` int NOT NULL AUTO_INCREMENT,
  `tokenMail` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `refreshToken` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  PRIMARY KEY (`user_id`) USING BTREE,
  INDEX `user_role`(`roles_id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('admin', '$2b$08$bT1Ha.b8t/zb9LemnCj8AORohKwks.uMeGnjwjol.gKRt.gT8St5q', 'admin', 'admin', 'admin', 1, 0, 0, 1, '4372', '');
INSERT INTO `users` VALUES ('123', '$2b$08$nw3cmpHx/MaRlfC/xKVIcON3Qj8S8pLBjGt4liVhR640onj3m46oC', 'Thiện Phạm Quang', '47/2 lê đức thọ, phường 17, quận gò vấp ,tp hồ chí minh', 'phamquangthien.it@gmail.com', 3, 0, 0, 2, '', NULL);
INSERT INTO `users` VALUES ('234', '$2b$08$k0LteMN5FoEFOR4XvxdXFOOke7rZJjz93sW5fsK20QJTTKtPGL.Za', 'Thiện Phạm Quang', '47/2 lê đức thọ, phường 17, quận gò vấp ,tp hồ chí minh', 'phamquangthien1@gmail.com', 2, 0, 0, 3, '', NULL);

-- ----------------------------
-- Table structure for watch_list
-- ----------------------------
DROP TABLE IF EXISTS `watch_list`;
CREATE TABLE `watch_list`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `bidder_id` int NULL DEFAULT NULL,
  `bidder_name` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `created_at` datetime(0) NOT NULL,
  `updated_at` datetime(0) NOT NULL,
  `product_id` int NULL DEFAULT NULL,
  `price` decimal(10, 2) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of watch_list
-- ----------------------------
INSERT INTO `watch_list` VALUES (11, 2, 'Thiện Phạm Quang', '2021-11-07 12:15:11', '2021-11-07 12:15:11', 1, 15678999.00);

-- ----------------------------
-- Procedure structure for proc_auction
-- ----------------------------
DROP PROCEDURE IF EXISTS `proc_auction`;
delimiter ;;
CREATE PROCEDURE `proc_auction`(in  p_product_id int,
in  p_price int,
in  p_bidder_id int)
BEGIN
    DECLARE price INT;
		    DECLARE price_max INT;
				    DECLARE price_current INT;
						    DECLARE message VARCHAR(255);
						SELECT price = a.price , price_current = a.current_price, price_max = a.max_price 
						FROM product a
						WHERE a.id = p_product_id;
						
 CASE 
  WHEN price>p_price or p_price < price_current THEN
   SET message = 'Giá không hợp lệ.Vui lòng thử lại';
	  WHEN price<p_price and p_price > price_current  and p_price < price_max THEN
   SET message = 'Chào giá thành công';
INSERT INTO product_bidder(bidder_id,created_at,updated_at,`status` , product_id,price)
VALUES(p_bidder_id, now(), now(),1,p_product_id,p_price);
	UPDATE product set current_price = 	p_price , updated_at = now() ,count_quantity_bidder = count_quantity_bidder +1,
	seller_id = p_bidder_id 
WHERE id = 	p_product_id;

  ELSE
   SET message = 'Chào giá thành công';
INSERT INTO product_bidder(bidder_id,created_at,updated_at,`status` , product_id,price)
VALUES(p_bidder_id, now(), now(),1,p_product_id,p_price);
	UPDATE product set current_price = 	p_price , updated_at = now() ,count_quantity_bidder = count_quantity_bidder +1,
	seller_id = p_bidder_id ,is_done = 1
WHERE id = 	p_product_id;
  END CASE;
  SELECT message;

END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for productpricing
-- ----------------------------
DROP PROCEDURE IF EXISTS `productpricing`;
delimiter ;;
CREATE PROCEDURE `productpricing`()
BEGIN
   SELECT Avg(price) AS priceaverage
   FROM product;
END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for thuTrongTuan
-- ----------------------------
DROP PROCEDURE IF EXISTS `thuTrongTuan`;
delimiter ;;
CREATE PROCEDURE `thuTrongTuan`(IN so INT(11))
BEGIN
    DECLARE message VARCHAR(255);
  CASE 
  WHEN so>2 THEN
   SET message = 'thu hai';
 
  ELSE
   SET message = 'KHONG CO THU TRONG TUAN';
  END CASE;
  SELECT message;
END
;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
