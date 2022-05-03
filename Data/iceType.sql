DROP TABLE IF EXISTS coctails.iceType;

CREATE TABLE coctails.iceType(
    id			SERIAL PRIMARY KEY,
    iceType		VARCHAR(16) NOT NULL
);

INSERT INTO coctails.iceType(id, iceType) VALUES
	(0, 'Ei ole jääd'),
	(1, 'Kuubikud'),
	(2, 'Purustatud')
;

SELECT setval(pg_get_serial_sequence('coctails.iceType', 'id'), coalesce(max(id),0) + 1, false) FROM coctails.iceType;
