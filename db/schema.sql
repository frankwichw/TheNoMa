DROP DATABASE IF EXISTS noma_db;
CREATE DATABASE noma_db;
USE noma_db;

CREATE TABLE users 
(
    user_id INT NOT NULL AUTO_INCREMENT,
    user_email VARCHAR(50),
    user_name VARCHAR(50),
    user_score INT,
    createdAt DATETIME,
    PRIMARY KEY (user_id)
);

CREATE TABLE drawings
(
	drawing_id INT NOT NULL AUTO_INCREMENT,
    drawing blob NOT NULL,
    drawing_creator_id INT,
    drawing_descriptor VARCHAR(100),
    createdAt DATETIME,
    PRIMARY KEY (drawing_id),
    FOREIGN KEY (drawing_creator_id) REFERENCES users(user_id)
);

CREATE TABLE guesses
(
	guess_id INT NOT NULL AUTO_INCREMENT,
    guess_drawing_id INT,
    guess_user_id INT,
    guess VARCHAR(100),
    createdAt DATETIME,
    PRIMARY KEY (guess_id),
    FOREIGN KEY (guess_drawing_id) REFERENCES drawings(drawing_id),
    FOREIGN KEY (guess_user_id) REFERENCES users(user_id)
);
