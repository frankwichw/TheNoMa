DROP DATABASE IF EXISTS noma_db;
CREATE DATABASE noma_db;

----------------------------------------------------------------------------------------
-- Matched what serialize creates but commented out the following. Let serialize create.
----------------------------------------------------------------------------------------
-- USE noma_db;

-- CREATE TABLE users 
-- (
--     id INT NOT NULL AUTO_INCREMENT,
--     user_id VARCHAR(50),
--     user_name VARCHAR(50),
--     user_score INT,
--     createdAt DATETIME,
--     updatedAt DATETIME,
--     PRIMARY KEY (id)
-- );

-- CREATE TABLE drawings
-- (
--     id INT NOT NULL AUTO_INCREMENT,
--     drawing blob NOT NULL,
--     drawing_descriptor VARCHAR(100),
--     createdAt DATETIME,
--     udpatedAt DATETIME,
--     UserId INT,
--     PRIMARY KEY (id),
--     FOREIGN KEY (Userid) REFERENCES users(id)
-- );

-- CREATE TABLE guesses
-- (
-- 	   id INT NOT NULL AUTO_INCREMENT,
--     guess VARCHAR(100),
--     rating INT,
--     createdAt DATETIME,
--     updatedAt DATETIME,
--     DrawingId INT,
--     userId INT,
--     PRIMARY KEY (id),
--     FOREIGN KEY (DrawingId) REFERENCES drawings(id),
-- );
