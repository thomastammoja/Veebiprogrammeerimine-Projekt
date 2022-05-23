DROP VIEW coctails.v_recipeIngredientTypes CASCADE;
CREATE VIEW coctails.v_recipeIngredientTypes AS (
	SELECT
		rec.id AS recipeId
		,CASE
			WHEN 
				ingType1.isAlcohol = 1 OR ingType2.isAlcohol = 1 OR	ingType3.isAlcohol = 1 OR ingType4.isAlcohol = 1 OR	ingType5.isAlcohol = 1 OR
				ingType6.isAlcohol = 1 OR ingType7.isAlcohol = 1 OR	ingType8.isAlcohol = 1 OR ingType9.isAlcohol = 1 OR	ingType10.isAlcohol = 1
			THEN 1
			ELSE 0 END AS includesAlcohol
		,CASE
			WHEN 
				ingType1.id = 1 OR ingType2.id = 1 OR ingType3.id = 1 OR ingType4.id = 1 OR	ingType5.id = 1 OR
				ingType6.id = 1 OR ingType7.id = 1 OR ingType8.id = 1 OR ingType9.id = 1 OR ingType10.id = 1
			THEN 1
			ELSE 0 END AS Viin
		,CASE
			WHEN 
				ingType1.id = 2 OR ingType2.id = 2 OR ingType3.id = 2 OR ingType4.id = 2 OR	ingType5.id = 2 OR
				ingType6.id = 2 OR ingType7.id = 2 OR ingType8.id = 2 OR ingType9.id = 2 OR ingType10.id = 2
			THEN 1
			ELSE 0 END AS Liköör
		,CASE
			WHEN 
				ingType1.id = 3 OR ingType2.id = 3 OR ingType3.id = 3 OR ingType4.id = 3 OR	ingType5.id = 3 OR
				ingType6.id = 3 OR ingType7.id = 3 OR ingType8.id = 3 OR ingType9.id = 3 OR ingType10.id = 3
			THEN 1
			ELSE 0 END AS Gin
		,CASE
			WHEN 
				ingType1.id = 4 OR ingType2.id = 4 OR ingType3.id = 4 OR ingType4.id = 4 OR	ingType5.id = 4 OR
				ingType6.id = 4 OR ingType7.id = 4 OR ingType8.id = 4 OR ingType9.id = 4 OR ingType10.id = 4 
			THEN 1
			ELSE 0 END AS Rumm
		,CASE
			WHEN 
				ingType1.id = 5 OR ingType2.id = 5 OR ingType3.id = 5 OR ingType4.id = 5 OR	ingType5.id = 5 OR
				ingType6.id = 5 OR ingType7.id = 5 OR ingType8.id = 5 OR ingType9.id = 5 OR ingType10.id = 5 
			THEN 1
			ELSE 0 END AS Vermut
		,CASE
			WHEN 
				ingType1.id = 6 OR ingType2.id = 6 OR ingType3.id = 6 OR ingType4.id = 6 OR	ingType5.id = 6 OR
				ingType6.id = 6 OR ingType7.id = 6 OR ingType8.id = 6 OR ingType9.id = 6 OR ingType10.id = 6 
			THEN 1
			ELSE 0 END AS Viski
		,CASE
			WHEN 
				ingType1.id = 7 OR ingType2.id = 7 OR ingType3.id = 7 OR ingType4.id = 7 OR	ingType5.id = 7 OR
				ingType6.id = 7 OR ingType7.id = 7 OR ingType8.id = 7 OR ingType9.id = 7 OR ingType10.id = 7 
			THEN 1
			ELSE 0 END AS Tekiila
		,CASE
			WHEN 
				ingType1.id = 8 OR ingType2.id = 8 OR ingType3.id = 8 OR ingType4.id = 8 OR	ingType5.id = 8 OR
				ingType6.id = 8 OR ingType7.id = 8 OR ingType8.id = 8 OR ingType9.id = 8 OR ingType10.id = 8 
			THEN 1
			ELSE 0 END AS Konjak
		,CASE
			WHEN 
				ingType1.id = 9 OR ingType2.id = 9 OR ingType3.id = 9 OR ingType4.id = 9 OR	ingType5.id = 9 OR
				ingType6.id = 9 OR ingType7.id = 9 OR ingType8.id = 9 OR ingType9.id = 9 OR ingType10.id = 9 
			THEN 1
			ELSE 0 END AS Brändi
		,CASE
			WHEN 
				ingType1.id = 10 OR ingType2.id = 10 OR ingType3.id = 10 OR ingType4.id = 10 OR	ingType5.id = 10 OR
				ingType6.id = 10 OR ingType7.id = 10 OR ingType8.id = 10 OR ingType9.id = 10 OR ingType10.id = 10 
			THEN 1
			ELSE 0 END AS Šampanja
		,CASE
			WHEN 
				ingType1.id = 11 OR ingType2.id = 11 OR ingType3.id = 11 OR ingType4.id = 11 OR	ingType5.id = 11 OR
				ingType6.id = 11 OR ingType7.id = 11 OR ingType8.id = 11 OR ingType9.id = 11 OR ingType10.id = 11 
			THEN 1
			ELSE 0 END AS Õlu
		,CASE
			WHEN 
				ingType1.id = 12 OR ingType2.id = 12 OR ingType3.id = 12 OR ingType4.id = 12 OR	ingType5.id = 12 OR
				ingType6.id = 12 OR ingType7.id = 12 OR ingType8.id = 12 OR ingType9.id = 12 OR ingType10.id = 12 
			THEN 1
			ELSE 0 END AS Aperatiiv
	FROM coctails.recipe AS rec

	LEFT JOIN coctails.ingredient AS ing1 ON rec.ingredient1Id = ing1.id
	LEFT JOIN coctails.ingredient AS ing2 ON rec.ingredient2Id = ing2.id
	LEFT JOIN coctails.ingredient AS ing3 ON rec.ingredient3Id = ing3.id
	LEFT JOIN coctails.ingredient AS ing4 ON rec.ingredient4Id = ing4.id
	LEFT JOIN coctails.ingredient AS ing5 ON rec.ingredient5Id = ing5.id
	LEFT JOIN coctails.ingredient AS ing6 ON rec.ingredient6Id = ing6.id
	LEFT JOIN coctails.ingredient AS ing7 ON rec.ingredient7Id = ing7.id
	LEFT JOIN coctails.ingredient AS ing8 ON rec.ingredient8Id = ing8.id
	LEFT JOIN coctails.ingredient AS ing9 ON rec.ingredient9Id = ing9.id
	LEFT JOIN coctails.ingredient AS ing10 ON rec.ingredient10Id = ing10.id
	LEFT JOIN coctails.ingredientType AS ingType1 ON ing1.typeId = ingType1.id
	LEFT JOIN coctails.ingredientType AS ingType2 ON ing2.typeId = ingType2.id
	LEFT JOIN coctails.ingredientType AS ingType3 ON ing3.typeId = ingType3.id
	LEFT JOIN coctails.ingredientType AS ingType4 ON ing4.typeId = ingType4.id
	LEFT JOIN coctails.ingredientType AS ingType5 ON ing5.typeId = ingType5.id
	LEFT JOIN coctails.ingredientType AS ingType6 ON ing6.typeId = ingType6.id
	LEFT JOIN coctails.ingredientType AS ingType7 ON ing7.typeId = ingType7.id
	LEFT JOIN coctails.ingredientType AS ingType8 ON ing8.typeId = ingType8.id
	LEFT JOIN coctails.ingredientType AS ingType9 ON ing9.typeId = ingType9.id
	LEFT JOIN coctails.ingredientType AS ingType10 ON ing10.typeId = ingType10.id
)
