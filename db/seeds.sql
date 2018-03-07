
USE noma_db;

INSERT INTO users (user_email, user_name, user_score, createdAt) 
VALUES  ("johndoe@email.com", "John Doe", 0, DATE_SUB(NOW(), INTERVAL 30 DAY)),
		("janedoe@email.com", "Jane Doe", 0, DATE_SUB(NOW(), INTERVAL 15 DAY)),
        ("adamsmith@gmail.com", "Adam Smith", 0, DATE_SUB(NOW(), INTERVAL 20 DAY))
;

INSERT INTO drawings (drawing, drawing_creator_id, drawing_descriptor, createdAt)
VALUES	("", 1, "Big Lobster Running", DATE_SUB(NOW(), INTERVAL 8 DAY)),
        ("", 2, "Big Lobster Running", DATE_SUB(NOW(), INTERVAL 3 DAY)),
		("", 3, "Big Lobster Running", DATE_SUB(NOW(), INTERVAL 4 DAY)),
		("", 1, "Tiny Shell Dancing", DATE_SUB(NOW(), INTERVAL 6 DAY)),
		("", 2, "Tiny Shell Dancing", DATE_SUB(NOW(), INTERVAL 1 DAY)),
		("", 3, "Tiny Shell Dancing", DATE_SUB(NOW(), INTERVAL 9 DAY)),
		("", 1, "Three Lobsters with Shell", DATE_SUB(NOW(), INTERVAL 4 DAY)),
		("", 2, "Three Lobsters with Shell", DATE_SUB(NOW(), INTERVAL 9 DAY)),
		("", 3, "Three Lobsters with Shell", DATE_SUB(NOW(), INTERVAL 2 DAY))
;

INSERT INTO guesses (guess_drawing_id, guess_user_id, guess, createdAt)
VALUES	(1, 2, "Big Lobster Running", DATE_SUB(NOW(), INTERVAL 8 DAY)),
        (2, 1, "Big Lobster Running", DATE_SUB(NOW(), INTERVAL 3 DAY)),
		(3, 1, "Big Lobster Running", DATE_SUB(NOW(), INTERVAL 4 DAY)),
		(4, 2, "Tiny Shell Dancing", DATE_SUB(NOW(), INTERVAL 6 DAY)),
		(5, 1, "Tiny Shell Dancing", DATE_SUB(NOW(), INTERVAL 1 DAY)),
		(6, 1, "Tiny Shell Dancing", DATE_SUB(NOW(), INTERVAL 9 DAY)),
		(7, 2, "Three Lobsters with Shell", DATE_SUB(NOW(), INTERVAL 4 DAY)),
		(8, 1, "Three Lobsters with Shell", DATE_SUB(NOW(), INTERVAL 9 DAY)),
		(9, 1, "Three Lobsters with Shell", DATE_SUB(NOW(), INTERVAL 2 DAY)),
		(1, 3, "Big Lobster Running", DATE_SUB(NOW(), INTERVAL 8 DAY)),
        (2, 3, "Big Lobster Running", DATE_SUB(NOW(), INTERVAL 3 DAY)),
		(3, 2, "Big Lobster Running", DATE_SUB(NOW(), INTERVAL 4 DAY)),
		(4, 3, "Tiny Shell Dancing", DATE_SUB(NOW(), INTERVAL 6 DAY)),
		(5, 3, "Tiny Shell Dancing", DATE_SUB(NOW(), INTERVAL 1 DAY)),
		(6, 2, "Tiny Shell Dancing", DATE_SUB(NOW(), INTERVAL 9 DAY)),
		(7, 3, "Three Lobsters with Shell", DATE_SUB(NOW(), INTERVAL 4 DAY)),
		(8, 3, "Three Lobsters with Shell", DATE_SUB(NOW(), INTERVAL 9 DAY)),
		(9, 2, "Three Lobsters with Shell", DATE_SUB(NOW(), INTERVAL 2 DAY))