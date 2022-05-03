DROP TABLE IF EXISTS coctails.ingredientType;

CREATE TABLE coctails.ingredientType(
    id			SERIAL PRIMARY KEY,
    typeName	VARCHAR(16) NOT NULL,
    isAlcohol	SMALLINT NOT NULL
);

INSERT INTO coctails.ingredientType(id, typeName, isAlcohol) VALUES
	(1, 'Viin', 1),
	(2, 'Liköör', 1),
	(3, 'Gin', 1),
	(4, 'Rumm', 1),
	(5, 'Vermut', 1),
	(6, 'Viski', 1),
	(7, 'Tekiila', 1),
	(8, 'Konjak', 1),
	(9, 'Brändi', 1),
	(10, 'Šampanja', 1),
	(11, 'Õlu', 1),
	(12, 'Aperitiiv', 1),
	(20, 'Muu alkohol', 1),
	(21, 'Mahl', 0),
	(22, 'Vesi', 0),
	(23, 'Siirup', 0),
	(24, 'Karastusjook', 0),
	(25, 'Jäätee', 0),
	(30, 'Piimatoode', 0),
	(40, 'Muu vedelik', 0),
	(41, 'Puuvili', 0),
	(42, 'Juurvili', 0),
	(43, 'Maitsetaim', 0),
	(44, 'Garneering', 0),
	(45, 'Maitseaine', 0)
;

SELECT setval(pg_get_serial_sequence('coctails.ingredientType', 'id'), coalesce(max(id),0) + 1, false) FROM coctails.ingredientType;
