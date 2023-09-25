-- Adds the Civilization into Types

INSERT INTO Types
			(Type,	Kind)
VALUES		('CIVILIZATION_TMG_TYLERETH',	'KIND_CIVILIZATION');

-- Adds the Civilization Info into Civilizations

INSERT INTO Civilizations
			(CivilizationType,	Name,	Description,	Adjective,	StartingCivilizationLevelType,	RandomCityNameDepth,	Ethnicity)
VALUES		('CIVILIZATION_TMG_TYLERETH',	'LOC_CIVILIZATION_TMG_TYLERETH_NAME',	'LOC_CIVILIZATION_TMG_TYLERETH_DESCRIPTION',	'LOC_CIVILIZATION_TMG_TYLERETH_ADJECTIVE',	'CIVILIZATION_LEVEL_FULL_CIV',	2,	'ETHNICITY_EURO');

-- Adds city names to the Civilization

INSERT INTO CityNames
			(CivilizationType,	CityName)
VALUES		('CIVILIZATION_TMG_TYLERETH',	'LOC_CITY_NAME_TMG_TYLERETH_SPOTSWOOD'),
			('CIVILIZATION_TMG_TYLERETH',	'LOC_CITY_NAME_TMG_TYLERETH_SCIENCEWORKS');