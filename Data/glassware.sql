DROP TABLE IF EXISTS coctails.glassware;

CREATE TABLE coctails.glassware(
    id					SERIAL PRIMARY KEY,
    name				VARCHAR(32) NOT NULL
);

INSERT INTO coctails.glassware (id, name) VALUES
	(1, 'Kokteiliklaas'),
	(2, 'Grogiklaas'),
	(3, 'Viskiklaas'),
	(4, 'Martinipokaal'),
	(5, 'Hurricane kokteiliklaas'),
	(6, 'Õlleklaas'),
	(7, 'Valge veini klaas'),
	(8, 'Šampanjapokaal'),
	(9, 'Kann'),
	(10, 'Iiri kohvi kruus')
;

SELECT setval(pg_get_serial_sequence('coctails.glassware', 'id'), coalesce(max(id),0) + 1, false) FROM coctails.glassware;
