DROP TABLE IF EXISTS coctails.iceType CASCADE;

CREATE TABLE coctails.iceType(
    id			SERIAL PRIMARY KEY,
    iceType		VARCHAR(16)
);

INSERT INTO coctails.iceType(id, iceType) VALUES
	(0, NULL),
	(1, 'Jääkuubikuid'),
	(2, 'Purustatud jääd')
;

SELECT setval(pg_get_serial_sequence('coctails.iceType', 'id'), coalesce(max(id),0) + 1, false) FROM coctails.iceType;
