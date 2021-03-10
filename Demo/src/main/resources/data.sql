

CREATE TABLE Bidder (
  bidder_id INT AUTO_INCREMENT  PRIMARY KEY,
  bidder_name VARCHAR(250) NOT NULL,
  address VARCHAR(250) NOT NULL,
  mobile INT DEFAULT NULL
);

INSERT INTO Bidder (bidder_id, bidder_name, address) VALUES
  (11, 'Dangote', 'Billionaire I'),
  (2, 'Gates', 'Billionaire Tech Entrepreneur'),
  (3, 'Alakija', 'Billionaire Oil Magnate');
  
    
  CREATE TABLE Bid (
  b_id INT AUTO_INCREMENT  PRIMARY KEY,
  bid_value INT

);

INSERT INTO Bid (b_id, bid_value) VALUES
  (1,34),
  (24,32),
  (3234,234);
  
  
  