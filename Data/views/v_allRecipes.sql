DROP VIEW IF EXISTS coctails.v_allRecipes;
CREATE VIEW coctails.v_allRecipes AS (
	SELECT
		 rec.id
		,rec.name AS recipeName
		,rec.instructions
		,ice.iceType
		,'https://cookieandkate.com/images/2020/08/best-mojito-recipe-2.jpg' AS image
		,4 AS rating
		,glass.name AS glassware
		,ing1.name AS ingredient1
		,rec.measure1Id AS measure1
		,ingType1.typeName AS ingredientType1
		,ing2.name AS ingredient2
		,rec.measure2Id AS measure2
		,ingType2.typeName AS ingredientType2
		,ing3.name AS ingredient3
		,rec.measure3Id AS measure3
		,ingType3.typeName AS ingredientType3
		,ing4.name AS ingredient4
		,rec.measure4Id AS measure4
		,ingType4.typeName AS ingredientType4
		,ing5.name AS ingredient5
		,rec.measure5Id AS measure5
		,ingType5.typeName AS ingredientType5
		,ing6.name AS ingredient6
		,rec.measure6Id AS measure6
		,ingType6.typeName AS ingredientType6
		,ing7.name AS ingredient7
		,rec.measure7Id AS measure7
		,ingType7.typeName AS ingredientType7
		,ing8.name AS ingredient8
		,rec.measure8Id AS measure8
		,ingType8.typeName AS ingredientType8
		,ing9.name AS ingredient9
		,rec.measure9Id AS measure9
		,ingType9.typeName AS ingredientType9
		,ing10.name AS ingredient10
		,rec.measure10Id AS measure10
		,ingType10.typeName AS ingredientType10
		,resIngType.*
	FROM coctails.recipe AS rec
	
	-- Join ice, glassware and drink types
	INNER JOIN coctails.iceType AS ice ON rec.iceStateId = ice.id
	INNER JOIN coctails.glassware AS glass ON rec.glasswareId = glass.id
	INNER JOIN coctails.v_recipeIngredientTypes AS resIngType ON rec.id = resIngType.recipeId
	
	-- Join ingredients
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
);
