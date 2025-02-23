-- Adds the Civilization into Types

INSERT INTO Types
			(Type,	Kind)
VALUES		('CIVILIZATION_JHA_NEWPORT',	'KIND_CIVILIZATION');

-- Adds the Civilization Info into Civilizations

INSERT INTO Civilizations
			(CivilizationType,	Name,	Description,	Adjective,	StartingCivilizationLevelType,	RandomCityNameDepth,	Ethnicity)
VALUES		('CIVILIZATION_JHA_NEWPORT',	'LOC_CIVILIZATION_JHA_NEWPORT_NAME',	'LOC_CIVILIZATION_JHA_NEWPORT_DESCRIPTION',	'LOC_CIVILIZATION_JHA_NEWPORT_ADJECTIVE',	'CIVILIZATION_LEVEL_FULL_CIV',	3,	'ETHNICITY_EURO');

-- Adds city names to the Civilization

INSERT INTO CityNames
			(CivilizationType,	CityName)
VALUES		('CIVILIZATION_JHA_NEWPORT',	'LOC_CITY_NAME_JHA_NEWPORT_NEWPORT_STATION'),
			('CIVILIZATION_JHA_NEWPORT',	'LOC_CITY_NAME_JHA_NEWPORT_NEWPORT_SIDINGS'),
			('CIVILIZATION_JHA_NEWPORT',	'LOC_CITY_NAME_JHA_NEWPORT_7-11');