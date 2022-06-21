-- Table structure for table `tutorials`
--

CREATE TABLE `tutorials` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `published` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tutorials`
--

INSERT INTO `tutorials` (`id`, `title`, `description`, `published`) VALUES
(1, 'HTML', 'Basic Html tutorial for dummies', 1),
(2, 'CSS', 'Basic CSS tutorial for dummies', 1),
(3, 'PHP', 'Basic PHP tutorial for dummies', 1);

