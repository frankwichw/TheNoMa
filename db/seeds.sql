
USE noma_db;

INSERT INTO users (user_id, user_name, user_score, createdAt, updatedAt) 
VALUES  ("johndoe@email.com", "John Doe", 0, DATE_SUB(NOW(), INTERVAL 30 DAY), NOW()),
		("janedoe@email.com", "Jane Doe", 0, DATE_SUB(NOW(), INTERVAL 15 DAY), NOW()),
        ("adamsmith@gmail.com", "Adam Smith", 0, DATE_SUB(NOW(), INTERVAL 20 DAY), NOW())
;

INSERT INTO drawings (drawing, UserId, drawing_descriptor, createdAt, updatedAt)
VALUES	("", 1, "Big Lobster Running", DATE_SUB(NOW(), INTERVAL 8 DAY), NOW()),
        ("", 2, "Big Lobster Running", DATE_SUB(NOW(), INTERVAL 3 DAY), NOW()),
		("", 3, "Big Lobster Running", DATE_SUB(NOW(), INTERVAL 4 DAY), NOW()),
		("", 1, "Tiny Shell Dancing", DATE_SUB(NOW(), INTERVAL 6 DAY), NOW()),
		("", 2, "Tiny Shell Dancing", DATE_SUB(NOW(), INTERVAL 1 DAY), NOW()),
		("", 3, "Tiny Shell Dancing", DATE_SUB(NOW(), INTERVAL 9 DAY), NOW()),
		("", 1, "Three Lobsters with Shell", DATE_SUB(NOW(), INTERVAL 4 DAY), NOW()),
		("", 2, "Three Lobsters with Shell", DATE_SUB(NOW(), INTERVAL 9 DAY), NOW()),
		("", 3, "Three Lobsters with Shell", DATE_SUB(NOW(), INTERVAL 2 DAY), NOW())
;

INSERT INTO guesses (DrawingId, userId, guess, createdAt, updatedAt)
VALUES	(1, 2, "Big Lobster Running", DATE_SUB(NOW(), INTERVAL 8 DAY), NOW()),
        (2, 1, "Big Lobster Running", DATE_SUB(NOW(), INTERVAL 3 DAY), NOW()),
		(3, 1, "Big Lobster Running", DATE_SUB(NOW(), INTERVAL 4 DAY), NOW()),
		(4, 2, "Tiny Shell Dancing", DATE_SUB(NOW(), INTERVAL 6 DAY), NOW()),
		(5, 1, "Tiny Shell Dancing", DATE_SUB(NOW(), INTERVAL 1 DAY), NOW()),
		(6, 1, "Tiny Shell Dancing", DATE_SUB(NOW(), INTERVAL 9 DAY), NOW()),
		(7, 2, "Three Lobsters with Shell", DATE_SUB(NOW(), INTERVAL 4 DAY), NOW()),
		(8, 1, "Three Lobsters with Shell", DATE_SUB(NOW(), INTERVAL 9 DAY), NOW()),
		(9, 1, "Three Lobsters with Shell", DATE_SUB(NOW(), INTERVAL 2 DAY), NOW()),
		(1, 3, "Big Lobster Running", DATE_SUB(NOW(), INTERVAL 8 DAY), NOW()),
        (2, 3, "Big Lobster Running", DATE_SUB(NOW(), INTERVAL 3 DAY), NOW()),
		(3, 2, "Big Lobster Running", DATE_SUB(NOW(), INTERVAL 4 DAY), NOW()),
		(4, 3, "Tiny Shell Dancing", DATE_SUB(NOW(), INTERVAL 6 DAY), NOW()),
		(5, 3, "Tiny Shell Dancing", DATE_SUB(NOW(), INTERVAL 1 DAY), NOW()),
		(6, 2, "Tiny Shell Dancing", DATE_SUB(NOW(), INTERVAL 9 DAY), NOW()),
		(7, 3, "Three Lobsters with Shell", DATE_SUB(NOW(), INTERVAL 4 DAY), NOW()),
		(8, 3, "Three Lobsters with Shell", DATE_SUB(NOW(), INTERVAL 9 DAY), NOW()),
		(9, 2, "Three Lobsters with Shell", DATE_SUB(NOW(), INTERVAL 2 DAY), NOW())